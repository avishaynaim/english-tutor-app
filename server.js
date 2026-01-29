const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// OpenRouter API key
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Parse JSON bodies
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API endpoint for lessons (future expansion)
app.get('/api/lessons', (req, res) => {
  res.json({ message: 'Lessons API - coming soon' });
});

// Generate lesson using OpenRouter AI
app.post('/api/generate-lesson', async (req, res) => {
  const { scenario } = req.body;
  if (!scenario) {
    return res.status(400).json({ error: 'Scenario is required' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://english-tutor-app-production.up.railway.app',
        'X-Title': 'English Tutor App'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3-haiku',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `You are an English teacher creating a lesson for young children (ages 6-10) learning English as a second language.

Create a simple English lesson based on this scenario: "${scenario}"

Generate exactly 8 very short, simple sentences that a child would say in this situation.

IMPORTANT RULES:
- Each sentence must be 3-6 words MAXIMUM (very short!)
- Use only basic, simple words children know
- No complex grammar - simple present tense only
- Progress through the scenario naturally

Examples of good short sentences:
- "Hello! How are you?"
- "I want ice cream."
- "Thank you very much!"
- "Where is the park?"

Respond ONLY with valid JSON in this exact format (no other text):
{
  "sentences": ["short sentence 1", "short sentence 2", "short sentence 3", "short sentence 4", "short sentence 5", "short sentence 6", "short sentence 7", "short sentence 8"],
  "translations": ["תרגום 1", "תרגום 2", "תרגום 3", "תרגום 4", "תרגום 5", "תרגום 6", "תרגום 7", "תרגום 8"]
}`
          }
        ]
      })
    });

    const result = await response.json();

    if (result.choices && result.choices[0] && result.choices[0].message) {
      const content = result.choices[0].message.content;
      // Try to extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);
        if (data.sentences && data.translations) {
          return res.json(data);
        }
      }
    }

    throw new Error('Invalid response format');
  } catch (error) {
    console.error('AI generation error:', error);

    // Fallback to default sentences if AI fails
    res.json({
      sentences: [
        "Hello!",
        "How are you?",
        "I am fine.",
        "What is this?",
        "I like it.",
        "Thank you!",
        "Goodbye!",
        "See you soon!"
      ],
      translations: [
        "שלום!",
        "מה שלומך?",
        "אני בסדר.",
        "מה זה?",
        "אני אוהב את זה.",
        "תודה!",
        "להתראות!",
        "נתראה בקרוב!"
      ]
    });
  }
});

// Serve the main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
  ╔══════════════════════════════════════╗
  ║   English Tutor App v2.0             ║
  ║   Running on port ${PORT}               ║
  ║   http://localhost:${PORT}              ║
  ╚══════════════════════════════════════╝
  `);
});
