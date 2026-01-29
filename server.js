const express = require('express');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Anthropic client (uses ANTHROPIC_API_KEY env var automatically)
const anthropic = new Anthropic();

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

// Generate lesson using Claude AI
app.post('/api/generate-lesson', async (req, res) => {
  const { scenario } = req.body;
  if (!scenario) {
    return res.status(400).json({ error: 'Scenario is required' });
  }

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-20250414',
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
    });

    // Parse the response
    const content = message.content[0].text;
    const data = JSON.parse(content);

    if (data.sentences && data.translations) {
      res.json(data);
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('AI generation error:', error);

    // Fallback to default sentences if AI fails
    res.json({
      sentences: [
        "Hello, how can I help you?",
        "I would like to ask about " + scenario.slice(0, 20) + ".",
        "Can you tell me more?",
        "That sounds interesting.",
        "How much does it cost?",
        "Thank you for your help.",
        "Have a nice day!"
      ],
      translations: [
        "שלום, איך אפשר לעזור לך?",
        "אני רוצה לשאול על " + scenario.slice(0, 20) + ".",
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
