// ===== Lessons Data =====
const lessons = {
  recipe: {
    title: "להכין סלט",
    icon: "🥗",
    sentences: [
      "First, I wash the vegetables.",
      "Then, I cut the vegetables.",
      "I put them in a bowl.",
      "I add some salt.",
      "I add olive oil.",
      "I mix everything together.",
      "The salad is ready!",
      "Let's eat!"
    ],
    translations: [
      "קודם, אני שוטף את הירקות.",
      "אחר כך, אני חותך את הירקות.",
      "אני שם אותם בקערה.",
      "אני מוסיף קצת מלח.",
      "אני מוסיף שמן זית.",
      "אני מערבב הכל ביחד.",
      "הסלט מוכן!",
      "בואו נאכל!"
    ]
  },
  daily: {
    title: "שגרת היום שלי",
    icon: "☀️",
    sentences: [
      "I wake up in the morning.",
      "I brush my teeth.",
      "I eat breakfast.",
      "I go to school.",
      "I study with my friends.",
      "I come home.",
      "I do my homework.",
      "I go to sleep. Good night!"
    ],
    translations: [
      "אני מתעורר בבוקר.",
      "אני מצחצח שיניים.",
      "אני אוכל ארוחת בוקר.",
      "אני הולך לבית הספר.",
      "אני לומד עם החברים שלי.",
      "אני חוזר הביתה.",
      "אני עושה שיעורי בית.",
      "אני הולך לישון. לילה טוב!"
    ]
  },
  store: {
    title: "ללכת לחנות",
    icon: "🛒",
    sentences: [
      "I need to buy some food.",
      "I walk to the store.",
      "I take a shopping cart.",
      "I buy bread and milk.",
      "I buy some fruit.",
      "I go to pay.",
      "I put the food in a bag.",
      "I walk home."
    ],
    translations: [
      "אני צריך לקנות אוכל.",
      "אני הולך לחנות.",
      "אני לוקח עגלת קניות.",
      "אני קונה לחם וחלב.",
      "אני קונה פירות.",
      "אני הולך לשלם.",
      "אני שם את האוכל בשקית.",
      "אני הולך הביתה."
    ]
  },
  introduce: {
    title: "להציג את עצמך",
    icon: "👋",
    sentences: [
      "Hello! My name is...",
      "I am from Israel.",
      "I am learning English.",
      "I like to read books.",
      "I like music.",
      "My favorite color is blue.",
      "Nice to meet you!",
      "Thank you and goodbye!"
    ],
    translations: [
      "שלום! קוראים לי...",
      "אני מישראל.",
      "אני לומד אנגלית.",
      "אני אוהב לקרוא ספרים.",
      "אני אוהב מוזיקה.",
      "הצבע האהוב עליי הוא כחול.",
      "נעים להכיר!",
      "תודה ולהתראות!"
    ]
  },
  weather: {
    title: "מזג אוויר",
    icon: "🌤️",
    sentences: [
      "What is the weather today?",
      "Today is very sunny.",
      "It is hot outside.",
      "I need my sunglasses.",
      "Tomorrow it will rain.",
      "I will take an umbrella.",
      "In winter it is cold.",
      "I like the spring weather."
    ],
    translations: [
      "מה מזג האוויר היום?",
      "היום מאוד שמשי.",
      "חם בחוץ.",
      "אני צריך את משקפי השמש.",
      "מחר ירד גשם.",
      "אני אקח מטריה.",
      "בחורף קר.",
      "אני אוהב את מזג האוויר באביב."
    ]
  },
  family: {
    title: "המשפחה שלי",
    icon: "👨‍👩‍👧‍👦",
    sentences: [
      "I have a big family.",
      "My mother is very kind.",
      "My father is tall.",
      "I have one brother.",
      "I have two sisters.",
      "My grandmother cooks well.",
      "My grandfather tells stories.",
      "I love my family."
    ],
    translations: [
      "יש לי משפחה גדולה.",
      "אמא שלי מאוד טובה.",
      "אבא שלי גבוה.",
      "יש לי אח אחד.",
      "יש לי שתי אחיות.",
      "סבתא שלי מבשלת טוב.",
      "סבא שלי מספר סיפורים.",
      "אני אוהב את המשפחה שלי."
    ]
  },
  school: {
    title: "בית הספר",
    icon: "🏫",
    sentences: [
      "I go to school every day.",
      "My teacher is very nice.",
      "I sit next to my friend.",
      "We learn math and science.",
      "I like English class.",
      "We have a break at ten.",
      "I eat lunch at school.",
      "School is fun!"
    ],
    translations: [
      "אני הולך לבית הספר כל יום.",
      "המורה שלי מאוד נחמדה.",
      "אני יושב ליד החבר שלי.",
      "אנחנו לומדים מתמטיקה ומדעים.",
      "אני אוהב שיעור אנגלית.",
      "יש לנו הפסקה בעשר.",
      "אני אוכל צהריים בבית הספר.",
      "בית הספר כיף!"
    ]
  },
  doctor: {
    title: "אצל הרופא",
    icon: "🩺",
    sentences: [
      "I don't feel well.",
      "I have a headache.",
      "My throat hurts.",
      "I need to see the doctor.",
      "The doctor checks me.",
      "I need some medicine.",
      "I should rest at home.",
      "I feel better now. Thank you!"
    ],
    translations: [
      "אני לא מרגיש טוב.",
      "כואב לי הראש.",
      "כואב לי הגרון.",
      "אני צריך ללכת לרופא.",
      "הרופא בודק אותי.",
      "אני צריך תרופה.",
      "אני צריך לנוח בבית.",
      "אני מרגיש יותר טוב עכשיו. תודה!"
    ]
  },
  restaurant: {
    title: "במסעדה",
    icon: "🍽️",
    sentences: [
      "Can I see the menu please?",
      "I would like some water.",
      "I want pizza and salad.",
      "The food is very good.",
      "Can I have more bread?",
      "I am full now.",
      "Can I have the check please?",
      "Thank you! The food was great!"
    ],
    translations: [
      "אפשר לראות את התפריט בבקשה?",
      "אני רוצה מים בבקשה.",
      "אני רוצה פיצה וסלט.",
      "האוכל מאוד טעים.",
      "אפשר עוד לחם?",
      "אני שבע עכשיו.",
      "אפשר את החשבון בבקשה?",
      "תודה! האוכל היה מעולה!"
    ]
  },
  park: {
    title: "בפארק",
    icon: "🌳",
    sentences: [
      "Let's go to the park!",
      "I can see the trees.",
      "The flowers are beautiful.",
      "I play on the slide.",
      "I swing very high.",
      "I ride my bicycle.",
      "We sit on the grass.",
      "The park is my favorite place."
    ],
    translations: [
      "בואו נלך לפארק!",
      "אני רואה את העצים.",
      "הפרחים יפים.",
      "אני משחק על המגלשה.",
      "אני מתנדנד גבוה.",
      "אני רוכב על האופניים.",
      "אנחנו יושבים על הדשא.",
      "הפארק הוא המקום האהוב עליי."
    ]
  },
  birthday: {
    title: "יום הולדת",
    icon: "🎂",
    sentences: [
      "Today is my birthday!",
      "I am very happy.",
      "My friends are coming.",
      "We have a big cake.",
      "I blow out the candles.",
      "I open my presents.",
      "We play games together.",
      "This is the best day!"
    ],
    translations: [
      "היום יום ההולדת שלי!",
      "אני מאוד שמח.",
      "החברים שלי באים.",
      "יש לנו עוגה גדולה.",
      "אני מכבה את הנרות.",
      "אני פותח את המתנות.",
      "אנחנו משחקים משחקים ביחד.",
      "זה היום הכי טוב!"
    ]
  },
  travel: {
    title: "טיול לחו\"ל",
    icon: "✈️",
    sentences: [
      "We are going on a trip!",
      "I pack my suitcase.",
      "We go to the airport.",
      "The airplane is very big.",
      "We fly above the clouds.",
      "We arrive at the hotel.",
      "I take many pictures.",
      "The trip was wonderful!"
    ],
    translations: [
      "אנחנו יוצאים לטיול!",
      "אני אורז את המזוודה.",
      "אנחנו נוסעים לשדה התעופה.",
      "המטוס מאוד גדול.",
      "אנחנו טסים מעל העננים.",
      "אנחנו מגיעים למלון.",
      "אני מצלם הרבה תמונות.",
      "הטיול היה נפלא!"
    ]
  },
  pets: {
    title: "חיות מחמד",
    icon: "🐶",
    sentences: [
      "I have a dog.",
      "My dog is brown.",
      "He likes to run and play.",
      "I walk him every day.",
      "I give him food and water.",
      "He sleeps on my bed.",
      "My cat is black and white.",
      "I love my pets very much."
    ],
    translations: [
      "יש לי כלב.",
      "הכלב שלי חום.",
      "הוא אוהב לרוץ ולשחק.",
      "אני מטייל איתו כל יום.",
      "אני נותן לו אוכל ומים.",
      "הוא ישן על המיטה שלי.",
      "החתולה שלי שחורה ולבנה.",
      "אני אוהב את חיות המחמד שלי מאוד."
    ]
  },
  sports: {
    title: "ספורט",
    icon: "⚽",
    sentences: [
      "I like to play sports.",
      "My favorite sport is soccer.",
      "I kick the ball very hard.",
      "We play as a team.",
      "I also like to swim.",
      "I run very fast.",
      "We won the game!",
      "Sports make me strong and happy."
    ],
    translations: [
      "אני אוהב לעשות ספורט.",
      "הספורט האהוב עליי הוא כדורגל.",
      "אני בועט בכדור חזק.",
      "אנחנו משחקים כקבוצה.",
      "אני גם אוהב לשחות.",
      "אני רץ מהר מאוד.",
      "ניצחנו במשחק!",
      "ספורט עושה אותי חזק ושמח."
    ]
  },
  beach: {
    title: "בחוף הים",
    icon: "🏖️",
    sentences: [
      "Let's go to the beach!",
      "The sand is warm.",
      "The water is blue.",
      "I swim in the sea.",
      "I build a sand castle.",
      "I play with the waves.",
      "The sun is very hot.",
      "I love the beach!"
    ],
    translations: [
      "בואו נלך לחוף הים!",
      "החול חם.",
      "המים כחולים.",
      "אני שוחה בים.",
      "אני בונה ארמון חול.",
      "אני משחק עם הגלים.",
      "השמש מאוד חמה.",
      "אני אוהב את החוף!"
    ]
  },
  feelings: {
    title: "רגשות",
    icon: "😊",
    sentences: [
      "Today I am very happy.",
      "Sometimes I feel sad.",
      "I am excited about tomorrow.",
      "I feel tired today.",
      "My friend made me laugh.",
      "I am a little scared.",
      "I feel proud of myself.",
      "I am thankful for my family."
    ],
    translations: [
      "היום אני מאוד שמח.",
      "לפעמים אני מרגיש עצוב.",
      "אני נרגש לגבי מחר.",
      "אני מרגיש עייף היום.",
      "החבר שלי גרם לי לצחוק.",
      "אני קצת מפחד.",
      "אני מרגיש גאה בעצמי.",
      "אני אסיר תודה על המשפחה שלי."
    ]
  }
};

// ===== State =====
let currentLesson = null;
let currentStep = 0;
let recognition = null;
let listenActive = false;
let advancing = false;
let pendingTimers = [];
let attempts = 0;
let score = 0;
let streak = 0;
let totalAttempts = 0;
let wakeLock = null;

// Settings
let settings = {
  speechRate: 0.85,
  darkMode: false,
  vibration: true
};

// ===== DOM Elements =====
const $ = id => document.getElementById(id);

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', init);

function init() {
  loadSettings();
  loadProgress();
  renderTopics();
  setupEventListeners();
  checkSpeechSupport();
  initConfetti();
}

// ===== Settings & Progress =====
function loadSettings() {
  const saved = localStorage.getItem('tutorSettings');
  if (saved) {
    settings = { ...settings, ...JSON.parse(saved) };
  }
  applySettings();
}

function saveSettings() {
  localStorage.setItem('tutorSettings', JSON.stringify(settings));
}

function applySettings() {
  document.documentElement.setAttribute('data-theme', settings.darkMode ? 'dark' : 'light');
  $('speechRate').value = settings.speechRate;
  $('speechRateVal').textContent = settings.speechRate + 'x';
  $('darkModeToggle').classList.toggle('active', settings.darkMode);
  $('vibrationToggle').classList.toggle('active', settings.vibration);
}

function loadProgress() {
  const saved = localStorage.getItem('tutorProgress');
  if (saved) {
    const progress = JSON.parse(saved);
    // Could restore completed lessons, scores, etc.
  }
}

function saveProgress() {
  const progress = {
    lastLesson: currentLesson,
    totalScore: score
  };
  localStorage.setItem('tutorProgress', JSON.stringify(progress));
}

// ===== Render Topics =====
function renderTopics() {
  const grid = $('topicsGrid');
  grid.innerHTML = '';

  Object.entries(lessons).forEach(([key, lesson]) => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.onclick = () => startLesson(key);
    card.innerHTML = `
      <div class="topic-icon">${lesson.icon}</div>
      <div class="topic-label">${lesson.title}</div>
    `;
    grid.appendChild(card);
  });
}

// ===== Event Listeners =====
function setupEventListeners() {
  // Back button
  $('backBtn').onclick = goHome;

  // Settings
  $('settingsBtn').onclick = () => $('settingsModal').classList.remove('hidden');
  $('closeSettings').onclick = () => $('settingsModal').classList.add('hidden');
  document.querySelector('.modal-backdrop').onclick = () => $('settingsModal').classList.add('hidden');

  // Speech rate
  $('speechRate').oninput = (e) => {
    settings.speechRate = parseFloat(e.target.value);
    $('speechRateVal').textContent = settings.speechRate + 'x';
    saveSettings();
  };

  // Dark mode
  $('darkModeToggle').onclick = () => {
    settings.darkMode = !settings.darkMode;
    $('darkModeToggle').classList.toggle('active', settings.darkMode);
    document.documentElement.setAttribute('data-theme', settings.darkMode ? 'dark' : 'light');
    saveSettings();
  };

  // Vibration
  $('vibrationToggle').onclick = () => {
    settings.vibration = !settings.vibration;
    $('vibrationToggle').classList.toggle('active', settings.vibration);
    saveSettings();
  };

  // Reset progress
  $('resetProgress').onclick = () => {
    if (confirm('האם אתה בטוח שברצונך לאפס את כל ההתקדמות?')) {
      localStorage.removeItem('tutorProgress');
      localStorage.removeItem('tutorSettings');
      location.reload();
    }
  };

  // Replay button
  $('replayBtn').onclick = () => {
    if (currentLesson) {
      sayEnglish(lessons[currentLesson].sentences[currentStep]);
    }
  };

  // Start speaking button
  $('startSpeakingBtn').onclick = () => {
    speakThenListen();
  };

  // Skip button
  $('skipBtn').onclick = skipStep;

  // Continue button
  $('continueBtn').onclick = goHome;
}

// ===== Speech Support Check =====
function checkSpeechSupport() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    $('topicsView').classList.add('hidden');
    $('noSupport').classList.remove('hidden');
  }
}

// ===== Timer Management =====
function safeTimeout(fn, ms) {
  const id = setTimeout(() => {
    pendingTimers = pendingTimers.filter(t => t !== id);
    fn();
  }, ms);
  pendingTimers.push(id);
  return id;
}

function clearAllTimers() {
  pendingTimers.forEach(id => clearTimeout(id));
  pendingTimers = [];
}

// ===== Wake Lock =====
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch(e) {}
}

function releaseWakeLock() {
  if (wakeLock) {
    try { wakeLock.release(); } catch(e) {}
    wakeLock = null;
  }
}

// ===== Vibration =====
function vibrate(pattern) {
  if (settings.vibration && navigator.vibrate) {
    try { navigator.vibrate(pattern); } catch(e) {}
  }
}

// ===== Stats Update =====
function updateStats() {
  $('scoreVal').textContent = score;
  $('streakVal').textContent = streak;
  $('attemptVal').textContent = attempts;
}

// ===== Text-to-Speech =====
function sayEnglish(text, cb) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = settings.speechRate;

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    if (cb) cb();
  };

  utterance.onend = finish;
  utterance.onerror = finish;

  // Fallback timeout
  const fallback = safeTimeout(finish, 8000);
  const origFinish = finish;
  utterance.onend = () => {
    clearTimeout(fallback);
    pendingTimers = pendingTimers.filter(t => t !== fallback);
    origFinish();
  };

  speechSynthesis.speak(utterance);
}

function sayHebrew(text, cb) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'he-IL';
  utterance.rate = 1.0;

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    if (cb) cb();
  };

  utterance.onend = finish;
  utterance.onerror = finish;

  const fallback = safeTimeout(finish, 5000);
  const origFinish = finish;
  utterance.onend = () => {
    clearTimeout(fallback);
    pendingTimers = pendingTimers.filter(t => t !== fallback);
    origFinish();
  };

  speechSynthesis.speak(utterance);
}

// ===== Lesson Flow =====
function startLesson(topic) {
  currentLesson = topic;
  currentStep = 0;
  advancing = false;
  attempts = 1;
  score = 0;
  streak = 0;
  totalAttempts = 0;

  clearAllTimers();

  // Update UI
  $('topicsView').classList.add('hidden');
  $('lessonView').classList.remove('hidden');
  $('completeView').classList.add('hidden');
  $('statsBar').classList.add('visible');
  $('backBtn').classList.add('visible');
  $('headerSub').textContent = lessons[topic].title;
  $('feedback').innerHTML = '';
  $('skipBtn').classList.add('hidden');

  updateStats();
  showStep();
  requestWakeLock();

  // Small delay before starting
  safeTimeout(() => {
    if (currentLesson) {
      setState('idle');
    }
  }, 500);
}

function goHome() {
  clearAllTimers();
  stopListening();
  speechSynthesis.cancel();
  advancing = false;
  currentLesson = null;

  // Update UI
  $('topicsView').classList.remove('hidden');
  $('lessonView').classList.add('hidden');
  $('completeView').classList.add('hidden');
  $('statsBar').classList.remove('visible');
  $('backBtn').classList.remove('visible');
  $('headerSub').textContent = 'בחר נושא ללמוד';
  $('skipBtn').classList.add('hidden');

  releaseWakeLock();
}

function showStep() {
  const lesson = lessons[currentLesson];
  const total = lesson.sentences.length;

  // Update progress
  $('progressFill').style.width = ((currentStep / total) * 100) + '%';
  $('progressText').textContent = `${currentStep + 1} / ${total}`;

  // Update content
  $('sentenceText').textContent = lesson.sentences[currentStep];
  $('translationText').textContent = lesson.translations[currentStep];
  $('introText').textContent = currentStep === 0 ? "הקשב ואז חזור:" : "עכשיו תגיד:";

  // Clear feedback
  $('feedback').innerHTML = '';
  $('feedbackArea').className = 'feedback-area';
  $('skipBtn').classList.add('hidden');

  // Reset card animation
  const card = document.querySelector('.lesson-card');
  card.classList.remove('success', 'partial');

  attempts = 1;
  updateStats();
}

function speakThenListen() {
  if (!currentLesson) return;

  stopListeningQuiet();
  setState('listening');
  speechSynthesis.cancel();

  const text = lessons[currentLesson].sentences[currentStep];

  safeTimeout(() => {
    if (!currentLesson) return;
    sayHebrew('הקשב וחזור', () => {
      if (!currentLesson) return;
      safeTimeout(() => {
        if (!currentLesson) return;
        sayEnglish(text, () => {
          if (!currentLesson) return;
          safeTimeout(() => {
            if (!currentLesson) return;
            setState('speaking');
            startListening();
          }, 400);
        });
      }, 200);
    });
  }, 100);
}

function setState(state) {
  $('listeningState').classList.add('hidden');
  $('speakingState').classList.add('hidden');
  $('idleState').classList.add('hidden');

  switch(state) {
    case 'listening':
      $('listeningState').classList.remove('hidden');
      break;
    case 'speaking':
      $('speakingState').classList.remove('hidden');
      break;
    case 'idle':
    default:
      $('idleState').classList.remove('hidden');
      break;
  }
}

// ===== Speech Recognition =====
function stopListeningQuiet() {
  listenActive = false;
  if (recognition) {
    try { recognition.abort(); } catch(e) {}
    recognition = null;
  }
}

function stopListening() {
  stopListeningQuiet();
  setState('idle');
}

function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition || !currentLesson) return;

  stopListeningQuiet();
  listenActive = true;

  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  let gotResult = false;

  recognition.onresult = (e) => {
    gotResult = true;
    evaluateResponse(e.results[0][0].transcript);
  };

  recognition.onerror = (e) => {
    if (!listenActive || !currentLesson) return;
    if (e.error === 'no-speech' || e.error === 'aborted') {
      restartListening();
    } else {
      safeTimeout(restartListening, 500);
    }
  };

  recognition.onend = () => {
    if (gotResult) return;
    if (listenActive && currentLesson && !advancing) {
      restartListening();
    }
  };

  try {
    recognition.start();
  } catch(e) {
    safeTimeout(restartListening, 300);
  }
}

function restartListening() {
  if (!listenActive || !currentLesson || advancing) return;
  safeTimeout(() => {
    if (!currentLesson || advancing) return;
    listenActive = true;
    setState('speaking');
    startListening();
  }, 200);
}

// ===== Evaluation =====
function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function similarity(a, b) {
  const wa = normalize(a).split(' ').filter(Boolean);
  const wb = normalize(b).split(' ').filter(Boolean);
  if (!wa.length || !wb.length) return 0;
  let matches = 0;
  for (const word of wa) {
    if (wb.includes(word)) matches++;
  }
  return matches / Math.max(wa.length, wb.length);
}

function wordDiff(target, spoken) {
  const tw = normalize(target).split(' ').filter(Boolean);
  const sw = normalize(spoken).split(' ').filter(Boolean);

  return tw.map(word => {
    const cls = sw.includes(word) ? 'word-ok' : 'word-miss';
    return `<span class="${cls}">${escHtml(word)}</span>`;
  }).join(' ');
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function evaluateResponse(spoken) {
  if (!currentLesson) return;

  stopListeningQuiet();
  const target = lessons[currentLesson].sentences[currentStep];
  const sc = similarity(spoken, target);
  const feedback = $('feedback');
  const card = document.querySelector('.lesson-card');
  speechSynthesis.cancel();

  totalAttempts++;

  if (sc >= 0.85) {
    // SUCCESS
    const points = attempts === 1 ? 3 : attempts === 2 ? 2 : 1;
    score += points;
    streak++;
    updateStats();

    feedback.innerHTML = `
      <div class="feedback-message correct">
        <div class="feedback-icon">👏</div>
        <div class="feedback-text">מצוין!</div>
        <div class="feedback-heard">"${escHtml(spoken)}"</div>
      </div>
    `;

    card.classList.add('success');
    launchConfetti();
    vibrate(100);
    setState('idle');

    advancing = true;
    const isLast = currentStep >= lessons[currentLesson].sentences.length - 1;
    const praise = isLast ? 'כל הכבוד! סיימת!' : 'מצוין!';

    safeTimeout(() => {
      if (!currentLesson) return;
      sayHebrew(praise, () => {
        if (!currentLesson) return;
        safeTimeout(nextStep, 300);
      });
    }, 100);

  } else if (sc >= 0.5) {
    // PARTIAL
    streak = 0;
    attempts++;
    updateStats();

    feedback.innerHTML = `
      <div class="feedback-message partial">
        <div class="feedback-icon">👍</div>
        <div class="feedback-text">כמעט! שים לב למילים:</div>
        <div class="feedback-heard" dir="ltr">${wordDiff(target, spoken)}</div>
      </div>
    `;

    card.classList.add('partial');
    showSparkles();
    vibrate([50, 50, 50]);

    if (attempts >= 4) $('skipBtn').classList.remove('hidden');

    safeTimeout(() => {
      if (!currentLesson) return;
      sayHebrew('כמעט, נסה שוב', () => {
        if (!currentLesson) return;
        speakThenListen();
      });
    }, 800);

  } else {
    // WRONG
    streak = 0;
    attempts++;
    updateStats();

    feedback.innerHTML = `
      <div class="feedback-message wrong">
        <div class="feedback-icon">🔄</div>
        <div class="feedback-text">נסה שוב! הקשב טוב:</div>
        <div class="feedback-heard" dir="ltr">${wordDiff(target, spoken)}</div>
      </div>
    `;

    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
    vibrate([50, 100, 50]);

    if (attempts >= 4) $('skipBtn').classList.remove('hidden');

    safeTimeout(() => {
      if (!currentLesson) return;
      sayHebrew('לא נורא, נסה שוב', () => {
        if (!currentLesson) return;
        speakThenListen();
      });
    }, 800);
  }
}

function skipStep() {
  $('skipBtn').classList.add('hidden');
  clearAllTimers();
  stopListening();
  speechSynthesis.cancel();
  streak = 0;
  updateStats();
  advancing = true;
  safeTimeout(nextStep, 100);
}

function nextStep() {
  advancing = false;
  currentStep++;

  if (!currentLesson) return;

  const total = lessons[currentLesson].sentences.length;

  if (currentStep >= total) {
    // Complete
    stopListening();
    $('lessonView').classList.add('hidden');
    $('completeView').classList.remove('hidden');
    $('progressFill').style.width = '100%';

    const maxScore = total * 3;
    const accuracy = Math.round((score / maxScore) * 100);
    $('finalScore').textContent = `${score} / ${maxScore}`;
    $('finalAccuracy').textContent = `${accuracy}%`;

    showCompletionFireworks();
    saveProgress();

    safeTimeout(() => {
      sayHebrew('מזל טוב! סיימת את השיעור!', null);
    }, 100);

    releaseWakeLock();
  } else {
    showStep();
    safeTimeout(() => {
      if (currentLesson) {
        setState('idle');
      }
    }, 300);
  }
}

// ===== Confetti System =====
let confettiCanvas, confettiCtx;
let confettiPieces = [];
let confettiRunning = false;

function initConfetti() {
  confettiCanvas = $('confettiCanvas');
  confettiCtx = confettiCanvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function launchConfetti() {
  confettiPieces = [];
  const colors = ['#6366f1', '#818cf8', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

  for (let i = 0; i < 80; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 100,
      w: 6 + Math.random() * 6,
      h: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 6,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 10,
      life: 1
    });
  }

  if (!confettiRunning) {
    confettiRunning = true;
    animateConfetti();
  }
}

function animateConfetti() {
  if (!confettiRunning) return;

  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  let alive = 0;
  for (const p of confettiPieces) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.1;
    p.rot += p.vr;
    p.life -= 0.008;

    if (p.life <= 0) continue;
    alive++;

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot * Math.PI / 180);
    confettiCtx.globalAlpha = p.life;
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    confettiCtx.restore();
  }

  if (alive > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiRunning = false;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

function showSparkles() {
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100';
  document.body.appendChild(container);

  const colors = ['#f59e0b', '#fbbf24', '#fcd34d', '#ef4444', '#ec4899'];
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  for (let i = 0; i < 12; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position:absolute;
      width:8px;height:8px;
      border-radius:50%;
      left:${cx - 40 + Math.random() * 80}px;
      top:${cy - 20 + Math.random() * 40}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation:sparkle-anim 1.2s ease-out forwards;
      opacity:0;
    `;
    container.appendChild(dot);
  }

  // Add animation style if not exists
  if (!document.getElementById('sparkle-style')) {
    const style = document.createElement('style');
    style.id = 'sparkle-style';
    style.textContent = `
      @keyframes sparkle-anim {
        0% { opacity: 1; transform: scale(0) translateY(0); }
        40% { opacity: 1; transform: scale(1.2) translateY(-30px); }
        100% { opacity: 0; transform: scale(0.5) translateY(-80px); }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => container.remove(), 1600);
}

function showCompletionFireworks() {
  launchConfetti();
  setTimeout(launchConfetti, 500);
  setTimeout(launchConfetti, 1000);
}

// ===== Service Worker Registration =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
