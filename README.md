# 아라한자 데스크톱 홈페이지

Windows · Mac용 아라한자의 무료 다운로드 안내 홈페이지입니다.

## 참고 홈페이지와 같은 디자인

`../multivideoplayer_homepage/assets/css/concepts.css`를 그대로 재사용하고, 아라한자 캡처 배치용 스타일만 뒤에 추가했습니다.

- 검은 배경 `#101211`, 연두색 강조 `#c1ef72`, 동일한 글꼴·본문 폭·간격·카드 스타일.
- 상단 앱 이름과 특징/앱 화면 메뉴, 한국어/영어 선택.
- 중앙 큰 제목 → 실제 앱 캡처를 겹쳐 배치한 검색 흐름 → 무료 다운로드 문구 → Windows/Mac 버튼.
- 3열 특징 카드 → 실제 화면 갤러리 → 데스크톱 소개 → 이용 안내 → 질문 카드 → 이메일 푸터.
- 핵심 기능 순서: 꼬리에 꼬리를 무는 한자 검색 → 한자를 구성 요소로 나누어 보여주는 파자 → 단어장과 퀴즈. 메인에서 `明月照大江 문장의 明月 → 상세 하단 예문 空山明月 → 山`을 빨간 화살표로 연결합니다. 두 번째 특징은 `明 = 日 + 月` 파자입니다.
- 앱 화면은 `ara_hanja_desktop`의 실제 `AraHanjaDesktopApp`과 원본 SQLite 사전을 실행한 Flutter 화면 테스트의 렌더링 캡처입니다. HTML로 재현한 예시 화면을 모두 제거했습니다. Mac 창의 키보드 입력 제어가 동작하지 않아 네이티브 창 직접 캡처 대신 이 방식을 사용했습니다. 테스트에는 macOS 시스템 글꼴을 로드했습니다.
- 원본 PNG를 `assets/images/screenshots/`에 보존하고 SVG viewBox로 필요한 영역만 확대합니다. 글자나 사전 내용을 이미지 위에 새로 그리지 않았으며, 빨간 테두리·화살표·단계 설명만 홈페이지에서 덧붙입니다. 갤러리를 클릭하면 전체 원본을 볼 수 있습니다.
- 캡처 재현 스크립트: `../../flutter_apps/ara_hanja_desktop/tmp/sentence-search/capture_test.dart` (로컬 작업 파일). 해당 앱 폴더에서 `rtk proxy flutter test --no-pub tmp/sentence-search/capture_test.dart`로 실행했습니다. 사용자 DB 대신 임시 DB를 사용했습니다.

기존 참고 홈페이지는 수정하지 않았습니다. 사용자 요청에 따라 Flutter 데스크톱 앱에는 예문 탐색, 문장 단어 클릭, 파자 구성 한자 링크를 추가했습니다. Git은 `main` 브랜치로 초기화했으며 커밋·원격 저장소 연결·공개 배포는 하지 않았습니다.

## 로컬에서 보기

이 폴더에서 실행한 뒤 <http://127.0.0.1:4173/>에 접속합니다. 미리보기 중에는 서버를 계속 실행해 두세요.

```sh
rtk proxy python3 -m http.server 4173 --bind 127.0.0.1
```

HTML, CSS, JavaScript 정적 파일만 사용하므로 설치나 빌드 과정이 없습니다. 참고 홈페이지와 같은 Google Fonts 스타일을 사용하며, 폰트를 불러오지 못하면 기본 sans-serif 글꼴로 표시됩니다. 분석·추적 스크립트는 포함하지 않았습니다.

## 파일

- `index.html`: 홈페이지 구성과 실제 캡처의 자르기·겹치기·빨간 화살표.
- `assets/css/style.css`: 참고 홈페이지 CSS 원본 + 아라한자 콘텐츠 스타일.
- `assets/js/script.js`: 한국어/영어 변경, 언어 선택 저장, 배포 링크 설정.
- `assets/images/app-icon.png`: 현재 데스크톱 아라한자 앱 아이콘.
- `assets/images/mail.png`: 참고 홈페이지의 이메일 아이콘.
- `.nojekyll`: GitHub Pages 정적 파일 제공용.

## 정식 다운로드 연결

`assets/js/script.js` 상단 `releases.windows`, `releases.mac`의 `url`과 `version`을 설정하세요. `url`은 확인된 정식 배포 파일의 HTTPS 주소를 사용합니다. `null`일 때는 버튼에 링크가 없고 준비 상태로 표시됩니다. 유효한 URL을 입력하면 링크가 활성화되고 버전이 표시됩니다.

배포 시 `copy.ko`, `copy.en`의 배포 상태·FAQ·이용 안내와 `index.html`의 기본 문구도 실제 출시 상태에 맞게 바꿔 주세요. 설치 파일은 Git에 포함하지 않습니다.

2026-10-22에 확인한 `flutter_apps/ara_hanja_desktop/README.md` 기준:

- Mac: 0.2.1 시험 빌드. macOS 13.0 이상, Apple Silicon·Intel Universal. 정식 배포 URL은 아직 없음.
- Windows: 기본 runner와 아이콘은 준비됐지만 기능 포팅·실행·배포 검증이 남아 개발 중으로 안내.
- 사전: 한자 81,715자와 단어 225,925개. 획순 9,574자.
- 쓰기와 이미지 문자 인식은 현재 Mac 구현 기준. 모바일 기록 동기화는 없음.

## GitHub Pages

원격 저장소를 정한 뒤 커밋·푸시하고, Settings → Pages에서 `main` 브랜치의 `/ (root)`를 선택하면 됩니다. 별도 빌드나 배포 workflow는 필요하지 않습니다.

## 확인 결과

- 실제 사전으로 문장 → 단어 → 하단 예문 → 다음 한자를 클릭하고 캡처했습니다. 파자와 퀴즈도 같은 앱에서 캡처했습니다.
- 기능 변경 후 DB·위젯 테스트 26개, 캡처 실행 1개 통과. 앱 소스 정적 분석 및 Mac Debug 빌드 성공.
- 참고 홈페이지 CSS 원본은 그대로 유지했습니다. HTML/CSS 예시 화면만 실제 캡처 배치로 바꿨습니다.
- 정식 배포 URL은 아직 없어 다운로드 링크는 비활성 상태입니다. 기존 Release ZIP은 이번 예문 기능 추가 전 빌드입니다.

- 브라우저에서 320·390·1280px 가로 넘침 없음, 한국어/영어 문구 갱신 및 콘솔 오류 없음 확인. 이미지·내부 링크 검사 통과.
