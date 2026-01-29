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
            content: `You are an English teacher creating a lesson for Hebrew-speaking students learning English.

Create a practical English lesson based on this scenario: "${scenario}"

Generate exactly 7 simple, practical sentences that someone would actually say in this situation.
The sentences should:
- Be appropriate for beginner to intermediate English learners
- Progress naturally through the scenario (greeting, main interaction, closing)
- Use common, everyday vocabulary
- Be 5-15 words each

Respond ONLY with valid JSON in this exact format (no other text):
{
  "sentences": ["sentence 1", "sentence 2", "sentence 3", "sentence 4", "sentence 5", "sentence 6", "sentence 7"],
  "translations": ["תרגום 1", "תרגום 2", "תרגום 3", "תרגום 4", "תרגום 5", "תרגום 6", "תרגום 7"]
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
        "Hello, how can I help you?",
        "I would like to ask about this.",
        "Can you tell me more?",
        "That sounds interesting.",
        "How much does it cost?",
        "Thank you for your help.",
        "Have a nice day!"
      ],
      translations: [
        "שלום, איך אפשר לעזור לך?",
        "אני רוצה לשאול על זה.",
        "אתה יכול לספר לי עוד?",
        "זה נשמע מעניין.",
        "כמה זה עולה?",
        "תודה על העזרה.",
        "יום נעים!"
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
