const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

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

// Scenario templates for lesson generation
const scenarioTemplates = {
  'coffee': {
    keywords: ['coffee', 'cafe', 'קפה', 'בית קפה'],
    sentences: [
      "Hello, I would like to order a coffee.",
      "Can I have a cappuccino please?",
      "Do you have any pastries?",
      "How much does it cost?",
      "Can I pay by credit card?",
      "Thank you very much!",
      "Have a nice day!"
    ],
    translations: [
      "שלום, אני רוצה להזמין קפה.",
      "אפשר קפוצ'ינו בבקשה?",
      "יש לכם מאפים?",
      "כמה זה עולה?",
      "אפשר לשלם בכרטיס אשראי?",
      "תודה רבה!",
      "יום נעים!"
    ]
  },
  'cinema': {
    keywords: ['cinema', 'movie', 'ticket', 'קולנוע', 'סרט', 'כרטיס'],
    sentences: [
      "Two tickets please.",
      "What movies are playing today?",
      "What time does the movie start?",
      "Where is screen number three?",
      "Can I have some popcorn?",
      "The movie was great!",
      "Let's come back next week!"
    ],
    translations: [
      "שני כרטיסים בבקשה.",
      "אילו סרטים מוקרנים היום?",
      "באיזו שעה הסרט מתחיל?",
      "איפה אולם מספר שלוש?",
      "אפשר פופקורן בבקשה?",
      "הסרט היה מעולה!",
      "בואו נחזור בשבוע הבא!"
    ]
  },
  'shopping': {
    keywords: ['shop', 'buy', 'store', 'clothes', 'קניות', 'חנות', 'בגדים'],
    sentences: [
      "I am looking for a new shirt.",
      "Do you have this in a larger size?",
      "Can I try this on?",
      "Where is the fitting room?",
      "How much does this cost?",
      "I will take it!",
      "Can I get a bag please?"
    ],
    translations: [
      "אני מחפש חולצה חדשה.",
      "יש לכם את זה במידה יותר גדולה?",
      "אפשר למדוד את זה?",
      "איפה חדר ההלבשה?",
      "כמה זה עולה?",
      "אני אקח את זה!",
      "אפשר לקבל שקית בבקשה?"
    ]
  },
  'hotel': {
    keywords: ['hotel', 'room', 'book', 'מלון', 'חדר', 'הזמנה'],
    sentences: [
      "I have a reservation.",
      "I would like to check in.",
      "Can I see the room first?",
      "Is breakfast included?",
      "What time is checkout?",
      "Can I have a wake up call?",
      "Thank you for a lovely stay!"
    ],
    translations: [
      "יש לי הזמנה.",
      "אני רוצה לעשות צ'ק אין.",
      "אפשר לראות את החדר קודם?",
      "ארוחת בוקר כלולה?",
      "באיזו שעה הצ'ק אאוט?",
      "אפשר לקבל שיחת השכמה?",
      "תודה על שהייה נעימה!"
    ]
  },
  'taxi': {
    keywords: ['taxi', 'cab', 'driver', 'מונית', 'נהג'],
    sentences: [
      "Can you take me to the airport?",
      "How long will it take?",
      "Please drive carefully.",
      "Can you stop here please?",
      "How much do I owe you?",
      "Keep the change.",
      "Thank you, goodbye!"
    ],
    translations: [
      "אתה יכול לקחת אותי לשדה התעופה?",
      "כמה זמן זה ייקח?",
      "בבקשה נהג בזהירות.",
      "אפשר לעצור כאן בבקשה?",
      "כמה אני חייב לך?",
      "השאר את העודף.",
      "תודה, להתראות!"
    ]
  },
  'doctor': {
    keywords: ['doctor', 'sick', 'hospital', 'רופא', 'חולה', 'בית חולים'],
    sentences: [
      "I need to see a doctor.",
      "I have been feeling sick.",
      "My head hurts a lot.",
      "I have a fever.",
      "Do I need medicine?",
      "How should I take this?",
      "I hope I feel better soon."
    ],
    translations: [
      "אני צריך לראות רופא.",
      "אני מרגיש חולה.",
      "כואב לי הראש מאוד.",
      "יש לי חום.",
      "אני צריך תרופות?",
      "איך לקחת את זה?",
      "אני מקווה להרגיש יותר טוב בקרוב."
    ]
  },
  'default': {
    sentences: [
      "Hello, how are you?",
      "I am learning English.",
      "Can you help me please?",
      "Thank you very much.",
      "I understand.",
      "Can you repeat that?",
      "Goodbye, see you later!"
    ],
    translations: [
      "שלום, מה שלומך?",
      "אני לומד אנגלית.",
      "אתה יכול לעזור לי בבקשה?",
      "תודה רבה.",
      "אני מבין.",
      "אתה יכול לחזור על זה?",
      "להתראות, נתראה!"
    ]
  }
};

// Generate lesson based on scenario
app.post('/api/generate-lesson', (req, res) => {
  const { scenario } = req.body;
  if (!scenario) {
    return res.status(400).json({ error: 'Scenario is required' });
  }

  const scenarioLower = scenario.toLowerCase();

  // Find matching template
  let matchedTemplate = null;
  for (const [key, template] of Object.entries(scenarioTemplates)) {
    if (key === 'default') continue;
    if (template.keywords && template.keywords.some(kw => scenarioLower.includes(kw))) {
      matchedTemplate = template;
      break;
    }
  }

  // Use default if no match
  if (!matchedTemplate) {
    matchedTemplate = scenarioTemplates.default;
  }

  res.json({
    sentences: matchedTemplate.sentences,
    translations: matchedTemplate.translations
  });
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
