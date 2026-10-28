// 정식 배포 파일의 HTTPS 주소와 버전을 입력하면 다운로드가 활성화됩니다.
const releases = {
  windows: { url: null, version: null },
  mac: { url: null, version: null }
};

const copy = {
  ko: {
    brand: '아라한자', skip: '본문으로 바로가기', navFeatures: '특징', navDemo: '앱 화면',
    title: '꼬리에 꼬리를 무는 한자 검색.',
    heroSubtitle: '문장에서 단어로, 예문에서 또 다른 한자로. 파자로 글자 속 구성까지 살펴보세요.',
    description: '꼬리에 꼬리를 무는 한자 검색, 한자를 나누어 보는 파자. Windows와 Mac을 위한 광고 없는 무료 한자 사전, 아라한자.',
    downloadTitle: '광고 없는 100% 무료 다운로드', windows: '윈도우 앱 다운', macDownload: '맥용 앱 다운',
    windowsStatus: '(개발 중)', macStatus: '(배포 준비 중)',
    releaseNote: 'Mac 0.2.1 시험 버전 점검 중 · Windows 개발 중. 정식 다운로드는 준비가 끝나면 제공됩니다.',
    featuresTitle: '특징', f1Title: '꼬리에 꼬리를 무는 한자 검색', f2Title: '한자를 나누어 보는 파자', f3Title: '나만의 단어장과 퀴즈',
    f1Body: '문장의 단어를 누르고, 상세 하단의 예문을 읽어 보세요. 예문 속 다른 한자를 누르면 또 한 번의 발견으로 이어집니다.',
    f2Body: '한자를 구성 요소로 나누어 모양과 뜻을 살펴보세요. 明을 日과 月로 이해하고, 각 구성 한자까지 이어서 탐색할 수 있습니다.',
    f3Body: '북마크와 내 목록으로 만드는 나만의 학습. 뜻·독음 퀴즈와 오답 복습으로 배운 한자를 오래 기억하세요.',
    galleryTitle: '앱 화면', galleryNote: '실제 Flutter 앱과 원본 사전 데이터를 실행해 캡처했습니다. 화면을 누르면 원본을 크게 볼 수 있습니다.',
    step1: '문장 속 단어를 클릭', step2: '단어 하단의 예문을 읽고', step3: '예문 속 다른 한자로',
    captureNote: '실제 아라한자 Flutter 앱 화면 · 필요한 부분을 확대해 표시했습니다.',
    gallery1: '문장에서 시작하는 검색', gallery2: '단어 상세에서 하단 예문으로', gallery3: '예문 속 한자를 눌러 계속 탐색', gallery4: '한자 속 구성까지 보는 파자',
    desktopTitle: 'PC와 맥에서,\n한자를 더 편하게.', desktopBody: '큰 화면에서 사전과 학습을 한 번에. 광고와 로그인 없이, 내 컴퓨터에 나의 배움을 차곡차곡 쌓아가세요.',
    downloadGuide: '무료 다운로드 안내', freeLabel: '100% 무료 · 광고 없음',
    importantTitle: '이용 안내', importantBody: 'Mac 버전은 macOS 13.0 이상, Apple Silicon과 Intel을 지원하는 시험 버전을 점검 중입니다. Windows 버전은 개발 중이며, 정식 배포 파일이 준비되면 이 페이지에서 제공됩니다.',
    offlineTitle: '사전과 학습 기록은 내 컴퓨터에', offlineBody: '현재 Mac 앱의 사전과 포함된 획순 자료는 오프라인으로 사용할 수 있습니다. 모바일 기록과는 동기화되지 않으며, 설정에서 개인 기록을 백업·복원할 수 있습니다.',
    faqTitle: '자주 묻는 질문', q1: '정말 무료인가요?', q2: '모든 한자의 획순을 볼 수 있나요?', q3: 'Windows와 Mac의 기능이 같나요?', q4: '공부한 기록을 보관할 수 있나요?',
    a1: '네. Windows·Mac용 아라한자는 무료로 배포할 예정입니다. 현재 Mac 앱에는 광고나 로그인 절차가 없습니다.',
    a2: '현재 9,574자의 획순 자료가 포함되어 있습니다. 중국 자형 기반으로, 한국 자형이나 획순과 차이가 있을 수 있습니다.',
    a3: '이 페이지의 기능 소개는 현재 Mac 버전 기준입니다. Windows의 쓰기·이미지 문자 인식 지원은 출시 시 안내합니다.',
    a4: '북마크, 메모, 내 목록과 학습 결과는 내 컴퓨터에 저장됩니다. 설정에서 파일로 백업하고 복원할 수 있습니다.',
    copyright: '저작권 © 2026 아라원소프트. 모든 권리 보유.', navLabel: '메인 메뉴', languageLabel: '언어'
  },
  en: {
    brand: 'AraHanja', skip: 'Skip to content', navFeatures: 'Features', navDemo: 'App Screens',
    title: 'One Hanja leads to another.',
    heroSubtitle: 'Click a word in a sentence, then follow its examples to another character. Break each character down to explore its parts.',
    description: 'Follow connected Hanja searches and explore character components. A free, ad-free desktop dictionary for Windows and Mac.',
    downloadTitle: '100% free download. No ads.', windows: 'Windows App Download', macDownload: 'Mac App Download',
    windowsStatus: '(In development)', macStatus: '(Coming soon)',
    releaseNote: 'Mac 0.2.1 is being tested. Windows is in development. Public downloads will be available when ready.',
    featuresTitle: 'Features', f1Title: 'One Search Leads to Another', f2Title: 'See How Characters Break Down', f3Title: 'Your Lists. Your Learning.',
    f1Body: 'Click a word in a sentence and read the examples below its details. Click a character in an example to keep exploring.',
    f2Body: 'See a character as its component parts. Explore 明 as 日 and 月, learn what each part means, and keep following the connections.',
    f3Body: 'Build your own lists and bookmarks. Practice meanings and readings with quizzes, then revisit the characters you missed.',
    galleryTitle: 'App Screens', galleryNote: 'Captured from the actual Flutter app using the original dictionary. Click a screen to see the full capture.',
    step1: 'Click a word in the sentence', step2: 'Read its examples below', step3: 'Follow another character',
    captureNote: 'Actual AraHanja Flutter app screens · Relevant areas enlarged.',
    gallery1: 'Start with a sentence', gallery2: 'From word details to examples', gallery3: 'Follow a character in an example', gallery4: 'Explore character components',
    desktopTitle: 'More room to explore.\nOn PC and Mac.', desktopBody: 'Your dictionary and learning tools, together on a bigger screen. No ads, no login. Keep your learning on your own computer.',
    downloadGuide: 'Free Download Information', freeLabel: '100% free · No ads',
    importantTitle: 'Before You Download', importantBody: 'The Mac test version supports macOS 13.0 or later on Apple Silicon and Intel. Windows is in development. Public installers will be available here when ready.',
    offlineTitle: 'Your dictionary. On your computer.', offlineBody: 'The current Mac dictionary and included stroke-order data work offline. Learning records do not sync with mobile. Back up and restore your records in Settings.',
    faqTitle: 'Frequently Asked Questions', q1: 'Is it really free?', q2: 'Does every character have stroke order?', q3: 'Are Windows and Mac features the same?', q4: 'Can I keep my learning records?',
    a1: 'Yes. AraHanja for Windows and Mac is planned as a free download. The current Mac app has no ads or login requirement.',
    a2: 'Stroke-order data is included for 9,574 characters. The data uses Chinese character forms, which may differ from Korean forms or stroke order.',
    a3: 'The features on this page describe the current Mac app. Windows writing and image-text recognition support will be announced at launch.',
    a4: 'Bookmarks, notes, lists, and study results are stored on your computer. You can back them up to a file and restore them in Settings.',
    copyright: 'Copyright © 2026 AraOneSoft. All rights reserved.', navLabel: 'Main navigation', languageLabel: 'Language'
  }
};
const languageSelect = document.getElementById('language');
function updateLanguage() {
  const language = Object.hasOwn(copy, languageSelect.value) ? languageSelect.value : 'ko';
  const text = copy[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-text]').forEach(element => {
    element.textContent = text[element.dataset.text];
  });
  document.querySelectorAll('[data-image-label]').forEach(element => {
    element.setAttribute('aria-label', text[element.dataset.imageLabel]);
  });
  document.querySelector('.site-header nav').setAttribute('aria-label', text.navLabel);
  languageSelect.setAttribute('aria-label', text.languageLabel);
  document.title = text.brand + ' — ' + (language === 'ko' ? '무료 데스크톱 한자 사전' : 'Free Desktop Hanja Dictionary');
  document.querySelector('meta[name="description"]').content = text.description;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = text.description;
  document.querySelector('meta[property="og:locale"]').content = language === 'ko' ? 'ko_KR' : 'en_US';
  Object.entries(releases).forEach(([platform, release]) => {
    const link = document.querySelector(`[data-download="${platform}"]`);
    const status = document.querySelector(`[data-release-status="${platform}"]`);
    const available = typeof release.url === 'string' && /^https:\/\//i.test(release.url);
    if (available) {
      link.href = release.url;
      link.removeAttribute('aria-disabled');
    } else {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
    }
    status.textContent = available ? (release.version ? `(${release.version})` : '') : text[platform + 'Status'];
  });
}
try {
  const saved = localStorage.getItem('arahanjaLanguage');
  if (Object.hasOwn(copy, saved)) languageSelect.value = saved;
} catch {}
languageSelect.addEventListener('change', () => {
  updateLanguage();
  try { localStorage.setItem('arahanjaLanguage', languageSelect.value); } catch {}
});
updateLanguage();
