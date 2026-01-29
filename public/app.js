// ===== Lessons Data =====
const TOPIC_COLORS = ['blue','pink','orange','green','cyan','purple','red','yellow'];
const XP_PER_LEVEL = 50;

const lessons = {
  recipe:{title:"להכין סלט",icon:"🥗",sentences:["First, I wash the vegetables.","Then, I cut the vegetables.","I put them in a bowl.","I add some salt.","I add olive oil.","I mix everything together.","The salad is ready!","Let's eat!"],translations:["קודם, אני שוטף את הירקות.","אחר כך, אני חותך את הירקות.","אני שם אותם בקערה.","אני מוסיף קצת מלח.","אני מוסיף שמן זית.","אני מערבב הכל ביחד.","הסלט מוכן!","בואו נאכל!"]},
  daily:{title:"שגרת היום שלי",icon:"☀️",sentences:["I wake up in the morning.","I brush my teeth.","I eat breakfast.","I go to school.","I study with my friends.","I come home.","I do my homework.","I go to sleep. Good night!"],translations:["אני מתעורר בבוקר.","אני מצחצח שיניים.","אני אוכל ארוחת בוקר.","אני הולך לבית הספר.","אני לומד עם החברים שלי.","אני חוזר הביתה.","אני עושה שיעורי בית.","אני הולך לישון. לילה טוב!"]},
  store:{title:"ללכת לחנות",icon:"🛒",sentences:["I need to buy some food.","I walk to the store.","I take a shopping cart.","I buy bread and milk.","I buy some fruit.","I go to pay.","I put the food in a bag.","I walk home."],translations:["אני צריך לקנות אוכל.","אני הולך לחנות.","אני לוקח עגלת קניות.","אני קונה לחם וחלב.","אני קונה פירות.","אני הולך לשלם.","אני שם את האוכל בשקית.","אני הולך הביתה."]},
  introduce:{title:"להציג את עצמך",icon:"👋",sentences:["Hello! My name is...","I am from Israel.","I am learning English.","I like to read books.","I like music.","My favorite color is blue.","Nice to meet you!","Thank you and goodbye!"],translations:["שלום! קוראים לי...","אני מישראל.","אני לומד אנגלית.","אני אוהב לקרוא ספרים.","אני אוהב מוזיקה.","הצבע האהוב עליי הוא כחול.","נעים להכיר!","תודה ולהתראות!"]},
  weather:{title:"מזג אוויר",icon:"🌤️",sentences:["What is the weather today?","Today is very sunny.","It is hot outside.","I need my sunglasses.","Tomorrow it will rain.","I will take an umbrella.","In winter it is cold.","I like the spring weather."],translations:["מה מזג האוויר היום?","היום מאוד שמשי.","חם בחוץ.","אני צריך את משקפי השמש.","מחר ירד גשם.","אני אקח מטריה.","בחורף קר.","אני אוהב את מזג האוויר באביב."]},
  family:{title:"המשפחה שלי",icon:"👨‍👩‍👧‍👦",sentences:["I have a big family.","My mother is very kind.","My father is tall.","I have one brother.","I have two sisters.","My grandmother cooks well.","My grandfather tells stories.","I love my family."],translations:["יש לי משפחה גדולה.","אמא שלי מאוד טובה.","אבא שלי גבוה.","יש לי אח אחד.","יש לי שתי אחיות.","סבתא שלי מבשלת טוב.","סבא שלי מספר סיפורים.","אני אוהב את המשפחה שלי."]},
  school:{title:"בית הספר",icon:"🏫",sentences:["I go to school every day.","My teacher is very nice.","I sit next to my friend.","We learn math and science.","I like English class.","We have a break at ten.","I eat lunch at school.","School is fun!"],translations:["אני הולך לבית הספר כל יום.","המורה שלי מאוד נחמדה.","אני יושב ליד החבר שלי.","אנחנו לומדים מתמטיקה ומדעים.","אני אוהב שיעור אנגלית.","יש לנו הפסקה בעשר.","אני אוכל צהריים בבית הספר.","בית הספר כיף!"]},
  doctor:{title:"אצל הרופא",icon:"🩺",sentences:["I don't feel well.","I have a headache.","My throat hurts.","I need to see the doctor.","The doctor checks me.","I need some medicine.","I should rest at home.","I feel better now. Thank you!"],translations:["אני לא מרגיש טוב.","כואב לי הראש.","כואב לי הגרון.","אני צריך ללכת לרופא.","הרופא בודק אותי.","אני צריך תרופה.","אני צריך לנוח בבית.","אני מרגיש יותר טוב עכשיו. תודה!"]},
  restaurant:{title:"במסעדה",icon:"🍽️",sentences:["Can I see the menu please?","I would like some water.","I want pizza and salad.","The food is very good.","Can I have more bread?","I am full now.","Can I have the check please?","Thank you! The food was great!"],translations:["אפשר לראות את התפריט בבקשה?","אני רוצה מים בבקשה.","אני רוצה פיצה וסלט.","האוכל מאוד טעים.","אפשר עוד לחם?","אני שבע עכשיו.","אפשר את החשבון בבקשה?","תודה! האוכל היה מעולה!"]},
  park:{title:"בפארק",icon:"🌳",sentences:["Let's go to the park!","I can see the trees.","The flowers are beautiful.","I play on the slide.","I swing very high.","I ride my bicycle.","We sit on the grass.","The park is my favorite place."],translations:["בואו נלך לפארק!","אני רואה את העצים.","הפרחים יפים.","אני משחק על המגלשה.","אני מתנדנד גבוה.","אני רוכב על האופניים.","אנחנו יושבים על הדשא.","הפארק הוא המקום האהוב עליי."]},
  birthday:{title:"יום הולדת",icon:"🎂",sentences:["Today is my birthday!","I am very happy.","My friends are coming.","We have a big cake.","I blow out the candles.","I open my presents.","We play games together.","This is the best day!"],translations:["היום יום ההולדת שלי!","אני מאוד שמח.","החברים שלי באים.","יש לנו עוגה גדולה.","אני מכבה את הנרות.","אני פותח את המתנות.","אנחנו משחקים משחקים ביחד.","זה היום הכי טוב!"]},
  travel:{title:'טיול לחו"ל',icon:"✈️",sentences:["We are going on a trip!","I pack my suitcase.","We go to the airport.","The airplane is very big.","We fly above the clouds.","We arrive at the hotel.","I take many pictures.","The trip was wonderful!"],translations:["אנחנו יוצאים לטיול!","אני אורז את המזוודה.","אנחנו נוסעים לשדה התעופה.","המטוס מאוד גדול.","אנחנו טסים מעל העננים.","אנחנו מגיעים למלון.","אני מצלם הרבה תמונות.","הטיול היה נפלא!"]},
  pets:{title:"חיות מחמד",icon:"🐶",sentences:["I have a dog.","My dog is brown.","He likes to run and play.","I walk him every day.","I give him food and water.","He sleeps on my bed.","My cat is black and white.","I love my pets very much."],translations:["יש לי כלב.","הכלב שלי חום.","הוא אוהב לרוץ ולשחק.","אני מטייל איתו כל יום.","אני נותן לו אוכל ומים.","הוא ישן על המיטה שלי.","החתולה שלי שחורה ולבנה.","אני אוהב את חיות המחמד שלי מאוד."]},
  sports:{title:"ספורט",icon:"⚽",sentences:["I like to play sports.","My favorite sport is soccer.","I kick the ball very hard.","We play as a team.","I also like to swim.","I run very fast.","We won the game!","Sports make me strong and happy."],translations:["אני אוהב לעשות ספורט.","הספורט האהוב עליי הוא כדורגל.","אני בועט בכדור חזק.","אנחנו משחקים כקבוצה.","אני גם אוהב לשחות.","אני רץ מהר מאוד.","ניצחנו במשחק!","ספורט עושה אותי חזק ושמח."]},
  beach:{title:"בחוף הים",icon:"🏖️",sentences:["Let's go to the beach!","The sand is warm.","The water is blue.","I swim in the sea.","I build a sand castle.","I play with the waves.","The sun is very hot.","I love the beach!"],translations:["בואו נלך לחוף הים!","החול חם.","המים כחולים.","אני שוחה בים.","אני בונה ארמון חול.","אני משחק עם הגלים.","השמש מאוד חמה.","אני אוהב את החוף!"]},
  feelings:{title:"רגשות",icon:"😊",sentences:["Today I am very happy.","Sometimes I feel sad.","I am excited about tomorrow.","I feel tired today.","My friend made me laugh.","I am a little scared.","I feel proud of myself.","I am thankful for my family."],translations:["היום אני מאוד שמח.","לפעמים אני מרגיש עצוב.","אני נרגש לגבי מחר.","אני מרגיש עייף היום.","החבר שלי גרם לי לצחוק.","אני קצת מפחד.","אני מרגיש גאה בעצמי.","אני אסיר תודה על המשפחה שלי."]}
};

// ===== State =====
let currentLesson=null,currentStep=0,recognition=null,listenActive=false,advancing=false;
let pendingTimers=[],attempts=0,score=0,streak=0,wakeLock=null;

let userData={xp:0,level:1,completedTopics:[],totalScore:0};
let settings={speechRate:.85,darkMode:false,vibration:true};

const $=id=>document.getElementById(id);

// ===== Init =====
document.addEventListener('DOMContentLoaded',init);

function init(){
  loadData();
  applySettings();
  renderTopics();
  setupEvents();
  checkSpeech();
  initConfetti();
  updateXPDisplay();
}

// ===== Data Persistence =====
function loadData(){
  try{
    const s=localStorage.getItem('et_settings');
    if(s) settings={...settings,...JSON.parse(s)};
    const u=localStorage.getItem('et_user');
    if(u) userData={...userData,...JSON.parse(u)};
  }catch(e){}
}
function saveSettings(){localStorage.setItem('et_settings',JSON.stringify(settings))}
function saveUser(){localStorage.setItem('et_user',JSON.stringify(userData))}

function applySettings(){
  document.documentElement.setAttribute('data-theme',settings.darkMode?'dark':'light');
  $('speechRate').value=settings.speechRate;
  $('speechRateVal').textContent=settings.speechRate+'x';
  $('darkModeToggle').classList.toggle('active',settings.darkMode);
  $('vibrationToggle').classList.toggle('active',settings.vibration);
}

// ===== XP System =====
function addXP(amount){
  userData.xp+=amount;
  userData.level=Math.floor(userData.xp/XP_PER_LEVEL)+1;
  saveUser();
  updateXPDisplay();
}

function updateXPDisplay(){
  const xpInLevel=userData.xp%XP_PER_LEVEL;
  const pct=(xpInLevel/XP_PER_LEVEL)*100;
  $('levelNum').textContent=userData.level;
  $('levelLabel').textContent=userData.level;
  $('xpFill').style.width=pct+'%';
  $('globalStreak').textContent=userData.completedTopics.length;
  $('topicCount').textContent=userData.completedTopics.length+'/'+Object.keys(lessons).length;
}

// ===== Render Topics =====
function renderTopics(){
  const grid=$('topicsGrid');
  grid.innerHTML='';
  const keys=Object.keys(lessons);
  keys.forEach((key,i)=>{
    const l=lessons[key];
    const color=TOPIC_COLORS[i%TOPIC_COLORS.length];
    const done=userData.completedTopics.includes(key);
    const card=document.createElement('div');
    card.className='topic-card';
    card.setAttribute('data-color',color);
    card.style.animationDelay=(i*0.05)+'s';
    card.onclick=()=>startLesson(key);
    card.innerHTML=`
      ${done?'<div class="topic-check">✓</div>':''}
      <div class="topic-icon">${l.icon}</div>
      <div class="topic-label">${l.title}</div>
    `;
    grid.appendChild(card);
  });
}

// ===== Events =====
function setupEvents(){
  $('backBtn').onclick=goHome;
  $('replayBtn').onclick=()=>{if(currentLesson) sayEnglish(lessons[currentLesson].sentences[currentStep])};
  $('startBtn').onclick=speakThenListen;
  $('skipBtn').onclick=skipStep;
  $('continueBtn').onclick=goHome;

  // Bottom nav
  document.querySelectorAll('.nav-item').forEach(btn=>{
    btn.onclick=()=>{
      const view=btn.dataset.view;
      if(view==='home') showView('viewHome');
      else if(view==='settings') showView('viewSettings');
      document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  $('settingsBackBtn').onclick=()=>{
    showView('viewHome');
    document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
    document.querySelector('[data-view="home"]').classList.add('active');
  };

  // Settings
  $('speechRate').oninput=e=>{
    settings.speechRate=parseFloat(e.target.value);
    $('speechRateVal').textContent=settings.speechRate+'x';
    saveSettings();
  };
  $('darkModeToggle').onclick=()=>{
    settings.darkMode=!settings.darkMode;
    $('darkModeToggle').classList.toggle('active',settings.darkMode);
    document.documentElement.setAttribute('data-theme',settings.darkMode?'dark':'light');
    saveSettings();
  };
  $('vibrationToggle').onclick=()=>{
    settings.vibration=!settings.vibration;
    $('vibrationToggle').classList.toggle('active',settings.vibration);
    saveSettings();
  };
  $('resetProgress').onclick=()=>{
    if(confirm('האם אתה בטוח שברצונך לאפס את כל ההתקדמות?')){
      localStorage.clear();
      location.reload();
    }
  };
}

// ===== View Management =====
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  $(id).classList.add('active');
  const showNav=id==='viewHome'||id==='viewSettings';
  $('bottomNav').style.display=showNav?'flex':'none';
}

// ===== Speech Check =====
function checkSpeech(){
  if(!(window.SpeechRecognition||window.webkitSpeechRecognition)){
    $('viewHome').classList.add('hidden');
    $('noSupport').classList.remove('hidden');
  }
}

// ===== Timers =====
function safeTimeout(fn,ms){
  const id=setTimeout(()=>{pendingTimers=pendingTimers.filter(t=>t!==id);fn()},ms);
  pendingTimers.push(id);return id;
}
function clearAllTimers(){pendingTimers.forEach(id=>clearTimeout(id));pendingTimers=[]}

// ===== Wake Lock =====
async function requestWakeLock(){try{if('wakeLock' in navigator) wakeLock=await navigator.wakeLock.request('screen')}catch(e){}}
function releaseWakeLock(){if(wakeLock){try{wakeLock.release()}catch(e){} wakeLock=null}}

function vibrate(p){if(settings.vibration&&navigator.vibrate) try{navigator.vibrate(p)}catch(e){}}

// ===== TTS =====
function sayEnglish(text,cb){
  const u=new SpeechSynthesisUtterance(text);
  u.lang='en-US';u.rate=settings.speechRate;
  let done=false;
  const fin=()=>{if(done)return;done=true;if(cb)cb()};
  u.onend=fin;u.onerror=fin;
  const fb=safeTimeout(fin,8000);
  u.onend=()=>{clearTimeout(fb);pendingTimers=pendingTimers.filter(t=>t!==fb);fin()};
  speechSynthesis.speak(u);
}
function sayHebrew(text,cb){
  const u=new SpeechSynthesisUtterance(text);
  u.lang='he-IL';u.rate=1;
  let done=false;
  const fin=()=>{if(done)return;done=true;if(cb)cb()};
  u.onend=fin;u.onerror=fin;
  const fb=safeTimeout(fin,5000);
  u.onend=()=>{clearTimeout(fb);pendingTimers=pendingTimers.filter(t=>t!==fb);fin()};
  speechSynthesis.speak(u);
}

// ===== Lesson Flow =====
function startLesson(topic){
  currentLesson=topic;currentStep=0;advancing=false;
  attempts=1;score=0;streak=0;
  clearAllTimers();
  showView('viewLesson');
  $('feedbackContainer').innerHTML='';
  $('skipBtn').classList.add('hidden');
  updateLessonStats();
  showStep();
  requestWakeLock();
  safeTimeout(()=>{if(currentLesson) setState('idle')},500);
}

function goHome(){
  clearAllTimers();stopListening();speechSynthesis.cancel();
  advancing=false;currentLesson=null;
  showView('viewHome');
  renderTopics();
  updateXPDisplay();
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  document.querySelector('[data-view="home"]').classList.add('active');
  releaseWakeLock();
}

function showStep(){
  const l=lessons[currentLesson],total=l.sentences.length;
  $('progressFill').style.width=((currentStep/total)*100)+'%';
  $('stepBadge').textContent=`שלב ${currentStep+1} מתוך ${total}`;
  $('sentenceText').textContent=l.sentences[currentStep];
  $('translationText').textContent=l.translations[currentStep];
  $('introText').textContent=currentStep===0?"הקשב ואז חזור:":"עכשיו תגיד:";
  $('feedbackContainer').innerHTML='';
  $('skipBtn').classList.add('hidden');
  const card=$('sentenceCard');
  card.classList.remove('success-glow','partial-glow','shake','glow');
  safeTimeout(()=>card.classList.add('glow'),100);
  attempts=1;updateLessonStats();
}

function updateLessonStats(){
  $('scoreVal').textContent=score;
  $('streakVal').textContent=streak;
}

function speakThenListen(){
  if(!currentLesson)return;
  stopListeningQuiet();setState('listening');speechSynthesis.cancel();
  const text=lessons[currentLesson].sentences[currentStep];
  safeTimeout(()=>{
    if(!currentLesson)return;
    sayHebrew('הקשב וחזור',()=>{
      if(!currentLesson)return;
      safeTimeout(()=>{
        if(!currentLesson)return;
        sayEnglish(text,()=>{
          if(!currentLesson)return;
          safeTimeout(()=>{if(!currentLesson)return;setState('speaking');startListening()},400);
        });
      },200);
    });
  },100);
}

function setState(state){
  $('stateListening').classList.add('hidden');
  $('stateSpeaking').classList.add('hidden');
  $('stateIdle').classList.add('hidden');
  if(state==='listening') $('stateListening').classList.remove('hidden');
  else if(state==='speaking') $('stateSpeaking').classList.remove('hidden');
  else $('stateIdle').classList.remove('hidden');
}

// ===== Speech Recognition =====
function stopListeningQuiet(){listenActive=false;if(recognition){try{recognition.abort()}catch(e){} recognition=null}}
function stopListening(){stopListeningQuiet();setState('idle')}

function startListening(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR||!currentLesson)return;
  stopListeningQuiet();listenActive=true;
  recognition=new SR();
  recognition.lang='en-US';recognition.interimResults=false;recognition.continuous=false;recognition.maxAlternatives=1;
  let got=false;
  recognition.onresult=e=>{got=true;evaluateResponse(e.results[0][0].transcript)};
  recognition.onerror=e=>{
    if(!listenActive||!currentLesson)return;
    if(e.error==='no-speech'||e.error==='aborted') restartListening();
    else safeTimeout(restartListening,500);
  };
  recognition.onend=()=>{if(got)return;if(listenActive&&currentLesson&&!advancing) restartListening()};
  try{recognition.start()}catch(e){safeTimeout(restartListening,300)}
}
function restartListening(){
  if(!listenActive||!currentLesson||advancing)return;
  safeTimeout(()=>{if(!currentLesson||advancing)return;listenActive=true;setState('speaking');startListening()},200);
}

// ===== Evaluation =====
function normalize(s){return s.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,' ').trim()}
function similarity(a,b){
  const wa=normalize(a).split(' ').filter(Boolean),wb=normalize(b).split(' ').filter(Boolean);
  if(!wa.length||!wb.length)return 0;
  let m=0;for(const w of wa) if(wb.includes(w)) m++;
  return m/Math.max(wa.length,wb.length);
}
function wordDiff(target,spoken){
  const tw=normalize(target).split(' ').filter(Boolean),sw=normalize(spoken).split(' ').filter(Boolean);
  return tw.map(w=>`<span class="${sw.includes(w)?'word-ok':'word-miss'}">${esc(w)}</span>`).join(' ');
}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

function evaluateResponse(spoken){
  if(!currentLesson)return;
  stopListeningQuiet();
  const target=lessons[currentLesson].sentences[currentStep];
  const sc=similarity(spoken,target);
  const card=$('sentenceCard');
  const fb=$('feedbackContainer');
  speechSynthesis.cancel();

  if(sc>=0.85){
    const pts=attempts===1?3:attempts===2?2:1;
    score+=pts;streak++;updateLessonStats();
    fb.innerHTML=`<div class="feedback-box correct"><div class="feedback-icon">🎉</div><div class="feedback-text">מצוין!</div><div class="feedback-heard">"${esc(spoken)}"</div></div>`;
    card.classList.remove('glow');card.classList.add('success-glow');
    launchConfetti();vibrate(100);setState('idle');
    advancing=true;
    const isLast=currentStep>=lessons[currentLesson].sentences.length-1;
    safeTimeout(()=>{
      if(!currentLesson)return;
      sayHebrew(isLast?'כל הכבוד! סיימת!':'מצוין!',()=>{if(!currentLesson)return;safeTimeout(nextStep,300)});
    },100);
  } else if(sc>=0.5){
    streak=0;attempts++;updateLessonStats();
    fb.innerHTML=`<div class="feedback-box partial"><div class="feedback-icon">👍</div><div class="feedback-text">כמעט! שים לב:</div><div class="feedback-heard" dir="ltr">${wordDiff(target,spoken)}</div></div>`;
    card.classList.add('partial-glow');showSparkles();vibrate([50,50,50]);
    if(attempts>=4) $('skipBtn').classList.remove('hidden');
    safeTimeout(()=>{if(!currentLesson)return;sayHebrew('כמעט, נסה שוב',()=>{if(!currentLesson)return;speakThenListen()})},800);
  } else {
    streak=0;attempts++;updateLessonStats();
    fb.innerHTML=`<div class="feedback-box wrong"><div class="feedback-icon">🔄</div><div class="feedback-text">נסה שוב!</div><div class="feedback-heard" dir="ltr">${wordDiff(target,spoken)}</div></div>`;
    card.classList.add('shake');setTimeout(()=>card.classList.remove('shake'),500);
    vibrate([50,100,50]);
    if(attempts>=4) $('skipBtn').classList.remove('hidden');
    safeTimeout(()=>{if(!currentLesson)return;sayHebrew('לא נורא, נסה שוב',()=>{if(!currentLesson)return;speakThenListen()})},800);
  }
}

function skipStep(){
  $('skipBtn').classList.add('hidden');clearAllTimers();stopListening();speechSynthesis.cancel();
  streak=0;updateLessonStats();advancing=true;safeTimeout(nextStep,100);
}

function nextStep(){
  advancing=false;currentStep++;
  if(!currentLesson)return;
  const total=lessons[currentLesson].sentences.length;
  if(currentStep>=total){
    stopListening();
    // Mark completed
    if(!userData.completedTopics.includes(currentLesson)){
      userData.completedTopics.push(currentLesson);
    }
    const xpEarned=score*2;
    addXP(xpEarned);
    userData.totalScore+=score;
    saveUser();

    showView('viewComplete');
    $('progressFill').style.width='100%';
    const maxScore=total*3;
    $('finalScore').textContent=`${score}/${maxScore}`;
    $('finalAccuracy').textContent=Math.round((score/maxScore)*100)+'%';
    $('finalXP').textContent=`+${xpEarned}`;
    showCompletionFireworks();
    safeTimeout(()=>sayHebrew('מזל טוב! סיימת את השיעור!',null),100);
    releaseWakeLock();
  } else {
    showStep();
    safeTimeout(()=>{if(currentLesson) setState('idle')},300);
  }
}

// ===== Confetti =====
let confettiCanvas,confettiCtx,confettiPieces=[],confettiRunning=false;
function initConfetti(){
  confettiCanvas=$('confettiCanvas');confettiCtx=confettiCanvas.getContext('2d');
  const resize=()=>{confettiCanvas.width=innerWidth;confettiCanvas.height=innerHeight};
  resize();addEventListener('resize',resize);
}
function launchConfetti(){
  confettiPieces=[];
  const colors=['#6366f1','#818cf8','#ec4899','#22c55e','#f59e0b','#ef4444','#06b6d4','#f472b6'];
  for(let i=0;i<80;i++) confettiPieces.push({
    x:Math.random()*confettiCanvas.width,y:-20-Math.random()*100,
    w:6+Math.random()*6,h:4+Math.random()*4,
    color:colors[Math.floor(Math.random()*colors.length)],
    vx:(Math.random()-.5)*6,vy:2+Math.random()*4,
    rot:Math.random()*360,vr:(Math.random()-.5)*10,life:1
  });
  if(!confettiRunning){confettiRunning=true;animateConfetti()}
}
function animateConfetti(){
  if(!confettiRunning)return;
  confettiCtx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  let alive=0;
  for(const p of confettiPieces){
    p.x+=p.vx;p.y+=p.vy;p.vy+=.1;p.rot+=p.vr;p.life-=.008;
    if(p.life<=0)continue;alive++;
    confettiCtx.save();confettiCtx.translate(p.x,p.y);confettiCtx.rotate(p.rot*Math.PI/180);
    confettiCtx.globalAlpha=p.life;confettiCtx.fillStyle=p.color;
    confettiCtx.fillRect(-p.w/2,-p.h/2,p.w,p.h);confettiCtx.restore();
  }
  if(alive>0) requestAnimationFrame(animateConfetti);
  else{confettiRunning=false;confettiCtx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height)}
}
function showSparkles(){
  const c=document.createElement('div');
  c.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:100';
  document.body.appendChild(c);
  const colors=['#f59e0b','#fbbf24','#fcd34d','#ef4444','#ec4899'];
  const cx=innerWidth/2,cy=innerHeight/2;
  for(let i=0;i<12;i++){
    const d=document.createElement('div');
    d.style.cssText=`position:absolute;width:8px;height:8px;border-radius:50%;left:${cx-40+Math.random()*80}px;top:${cy-20+Math.random()*40}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation:sparkA 1.2s ease-out forwards;opacity:0`;
    c.appendChild(d);
  }
  if(!document.getElementById('sparkS')){
    const s=document.createElement('style');s.id='sparkS';
    s.textContent='@keyframes sparkA{0%{opacity:1;transform:scale(0) translateY(0)}40%{opacity:1;transform:scale(1.2) translateY(-30px)}100%{opacity:0;transform:scale(.5) translateY(-80px)}}';
    document.head.appendChild(s);
  }
  setTimeout(()=>c.remove(),1600);
}
function showCompletionFireworks(){launchConfetti();setTimeout(launchConfetti,500);setTimeout(launchConfetti,1000)}

// ===== Service Worker =====
if('serviceWorker' in navigator) addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));
