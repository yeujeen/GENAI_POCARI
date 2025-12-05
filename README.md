이 프로젝트는 "Friendship Fuse" (또는 GenAI Pocari) 라는 이름의 AI 기반 소셜 음악 큐레이션 웹 애플리케이션입니다.

두 사람(친구, 연인 등)의 음악 취향을 입력받아 Google Gemini AI가 이를 분석하고, 두 사람 모두가 만족할 만한 **공통 플레이리스트(FUSE MIX)**를 만들어주는 서비스입니다.

주요 기능과 기술적인 특징은 다음과 같습니다.

1. 핵심 기능 (Service Flow)
취향 입력 (User A & User B)

MainPage.tsx를 보면 두 명의 사용자(User A, User B)가 각자 좋아하는 아티스트, 곡, 장르 등의 키워드를 입력할 수 있는 입력창이 있습니다.

"두 사람의 취향을 음악으로 연결하세요"라는 슬로건을 가지고 있습니다.

AI 취향 분석 (Gemini AI)

입력된 데이터는 app/api/fuse/route.ts를 통해 백엔드 서버로 전송됩니다.

여기서 Google Gemini AI (코드상에서는 gemini-2.5-flash로 설정하려 시도함)에게 프롬프트를 보냅니다.

AI는 두 사람의 음악적 교집합(Similarity)을 분석하고, 어울리는 분위기(Mood)와 테마 색상(Fuse Color)을 추출합니다.

결과 매칭 및 추천 (Results)

ResultsPage.tsx와 스크린샷(screencapture...png)에서 볼 수 있듯이 분석 결과가 시각적으로 표시됩니다.

Match Score: 두 사람의 취향 일치도를 퍼센트(%)로 보여줍니다.

FUSE MIX Playlist: AI가 선정한 추천 곡 리스트(5곡)를 보여줍니다.

YouTube 연동: 추천된 곡을 클릭하면 바로 유튜브 검색 결과(Official MV)로 연결해 줍니다.

2. 기술 스택 (Tech Stack)
프레임워크: Next.js 16 (App Router 방식)

언어: TypeScript (타입 안전성 보장)

스타일링: Tailwind CSS v4 (직관적인 디자인 적용)

AI 모델: Google Generative AI SDK (@google/genai, @google/generative-ai)를 사용하여 Gemini 모델 연동.

UI 컴포넌트: Lucide React (아이콘), 커스텀 Card/Button 컴포넌트.

3. 현재 상황 (스크린샷 분석)
UI 완성도: screencapture-localhost...png를 보면, 보라색과 핑크색 그라데이션을 활용한 깔끔한 UI가 이미 완성되어 있습니다. "Epic Echoes: Unleashed Anthems" 같은 감성적인 플레이리스트 제목도 잘 생성되고 있습니다.

개발 이슈: 스크린샷(83).jpg 등을 보면, 현재 Gemini 모델 버전(gemini-1.5-flash vs 2.5-flash)과 API 호환성 문제로 인해 404 Not Found 또는 500 Internal Server Error가 발생하여 디버깅 중인 단계로 보입니다.

한 줄 요약:

"너랑 나랑 섞으면 무슨 노래가 나올까?"를 AI로 풀어낸, 커플/친구 전용 음악 취향 매칭 및 플레이리스트 생성기입니다.
