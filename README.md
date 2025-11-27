# 🎵 Friendship Fuse (GENAI_POCARI)

**Friendship Fuse**는 Google Gemini AI를 활용하여 두 사용자의 음악 취향을 분석하고, 두 사람 모두가 만족할 수 있는 최적의 공동 플레이리스트(FUSE MIX)를 생성해 주는 소셜 음악 서비스입니다.

이 프로젝트는 음악 취향의 교집합을 시각화하고, AI 큐레이션을 통해 사용자 간의 연결고리를 찾아줍니다.

---

## 🛠️ 기술 스택 (Tech Stack)

이 프로젝트는 최신 웹 기술과 생성형 AI 모델을 기반으로 구축되었습니다.

* **Core Framework:** Next.js 16 (App Router), React 19, TypeScript
* **Artificial Intelligence:** Google Gemini 3.0 API (`@google/genai` SDK 활용)
* **Styling & UI:** Tailwind CSS v4, Lucide React, v0.dev (Generative UI)
* **Version Control:** Git & GitHub

---

## ✨ 주요 기능 (Key Features)

* **취향 입력 인터랙션**
    * 두 명의 사용자(User A, User B)가 각자 선호하는 아티스트, 장르, 분위기 키워드를 입력합니다.
* **AI 취향 분석**
    * Gemini AI가 입력된 취향 데이터를 분석하여 두 사람의 음악적 공통점을 찾아냅니다.
* **유사도 측정 (Similarity)**
    * 두 취향이 얼마나 잘 어우러지는지를 퍼센트(%) 점수와 벤 다이어그램으로 시각화합니다.
* **FUSE MIX 생성**
    * 분석된 공통 분위기에 맞는 10곡의 맞춤형 플레이리스트를 생성합니다.
* **결과 공유**
    * 생성된 플레이리스트와 분석 결과를 친구와 공유할 수 있습니다.

---

## 📂 프로젝트 구조 및 파일 역할

* **`/app`**
    * `page.tsx`: 입력 화면과 결과 화면 간의 전환을 관리하는 메인 컨트롤러입니다.
    * `api/fuse/route.ts`: Gemini API와 통신하는 백엔드 로직입니다. 프롬프트 엔지니어링을 통해 정해진 JSON 규격으로 데이터를 응답받습니다.
* **`/components`**
    * `MainPage.tsx`: 사용자 A와 B의 데이터를 입력받는 UI 컴포넌트입니다.
    * `ResultsPage.tsx`: 분석 결과(유사도, 벤 다이어그램, 플레이리스트)를 시각적으로 보여주는 결과 페이지입니다.
* **`/lib`**
    * `gemini.ts`: Google GenAI 클라이언트를 안전하게 초기화하고 환경 변수를 관리합니다.

네, 좋은 생각입니다! 실행 전에 꼭 필요한 환경 설정(Prerequisites)을 명시해주면 다른 개발자나 미래의 본인이 프로젝트를 실행할 때 훨씬 수월합니다.

말씀하신 Node.js와 Git 외에도, **코드 에디터(VS Code)**와 Google API 키 발급 준비를 미리 언급해주는 것이 좋습니다.

추가하면 좋을 내용들을 포함하여 README.md의 '🚀 시작 가이드' 바로 위에 들어갈 '📋 사전 요구 사항 (Prerequisites)' 섹션을 추가했습니다.

아래는 수정된 전체 README.md 내용입니다. 그대로 복사해서 사용하세요!

Markdown

# 🎵 Friendship Fuse (GENAI_POCARI)

**Friendship Fuse**는 Google Gemini AI를 활용하여 두 사용자의 음악 취향을 분석하고, 두 사람 모두가 만족할 수 있는 최적의 공동 플레이리스트(FUSE MIX)를 생성해 주는 소셜 음악 서비스입니다.

이 프로젝트는 음악 취향의 교집합을 시각화하고, AI 큐레이션을 통해 사용자 간의 연결고리를 찾아줍니다.

---

## 🛠️ 기술 스택 (Tech Stack)

이 프로젝트는 최신 웹 기술과 생성형 AI 모델을 기반으로 구축되었습니다.

* **Core Framework:** Next.js 16 (App Router), React 19, TypeScript
* **Artificial Intelligence:** Google Gemini 3.0 API (`@google/genai` SDK 활용)
* **Styling & UI:** Tailwind CSS v4, Lucide React, v0.dev (Generative UI)
* **Version Control:** Git & GitHub

---

## ✨ 주요 기능 (Key Features)

* **취향 입력 인터랙션:** 두 명의 사용자(User A, User B)가 각자 선호하는 아티스트, 장르, 분위기 키워드를 입력합니다.
* **AI 취향 분석:** Gemini AI가 입력된 취향 데이터를 분석하여 두 사람의 음악적 공통점을 찾아냅니다.
* **유사도 측정 (Similarity):** 두 취향이 얼마나 잘 어우러지는지를 퍼센트(%) 점수와 벤 다이어그램으로 시각화합니다.
* **FUSE MIX 생성:** 분석된 공통 분위기에 맞는 10곡의 맞춤형 플레이리스트를 생성합니다.
* **결과 공유:** 생성된 플레이리스트와 분석 결과를 친구와 공유할 수 있습니다.

---

## 📂 프로젝트 구조 및 파일 역할

* **`/app`**
    * `page.tsx`: 입력 화면과 결과 화면 간의 전환을 관리하는 메인 컨트롤러입니다.
    * `api/fuse/route.ts`: Gemini API와 통신하는 백엔드 로직입니다. 프롬프트 엔지니어링을 통해 정해진 JSON 규격으로 데이터를 응답받습니다.
* **`/components`**
    * `MainPage.tsx`: 사용자 A와 B의 데이터를 입력받는 UI 컴포넌트입니다.
    * `ResultsPage.tsx`: 분석 결과(유사도, 벤 다이어그램, 플레이리스트)를 시각적으로 보여주는 결과 페이지입니다.
* **`/lib`**
    * `gemini.ts`: Google GenAI 클라이언트를 안전하게 초기화하고 환경 변수를 관리합니다.

---

## 📋 사전 요구 사항 (Prerequisites)

프로젝트를 실행하기 전에 다음 도구들이 설치되어 있어야 합니다.

1.  **Node.js & npm (필수):**
    * 이 프로젝트는 Next.js 기반이므로 Node.js 환경이 필요합니다.
    * [Node.js 공식 홈페이지](https://nodejs.org/)에서 **LTS 버전**을 다운로드하여 설치해주세요.
    * 설치 확인: 터미널에 `node -v`와 `npm -v`를 입력하여 버전이 나오면 성공입니다.

2.  **Git (필수):**
    * 소스 코드를 다운로드(Clone)하고 버전을 관리하기 위해 필요합니다.
    * [Git 공식 홈페이지](https://git-scm.com/)에서 설치해주세요. (Windows 사용자는 Git Bash가 함께 설치됩니다.)

3.  **Google Gemini API 키 (필수):**
    * AI 기능을 사용하기 위해 API 키가 필요합니다.
    * [Google AI Studio](https://aistudio.google.com/)에서 무료로 키를 발급받으세요.

4.  **Visual Studio Code (권장):**
    * 코드를 수정하고 실행하기 가장 편리한 에디터입니다.

---

## 🚀 시작 가이드 (Getting Started)

로컬 환경에서 프로젝트를 실행하기 위해 다음 단계를 따라주세요.

### 1. 저장소 복제 (Clone)
```bash
git clone [https://github.com/YOUR_GITHUB_ID/genai_pocari.git](https://github.com/YOUR_GITHUB_ID/genai_pocari.git)
cd genai_pocari

2. 의존성 패키지 설치
Bash
npm install

3. 환경 변수 설정 (필수)
프로젝트 루트 경로에 .env.local 파일을 생성하고, Google Gemini API 키를 입력해야 합니다. (lib/gemini.ts가 이 키를 참조합니다.)

코드 스니펫
GEMINI_API_KEY=여기에_발급받은_API_키를_입력하세요

API 키는 Google AI Studio에서 발급받을 수 있습니다.

4. 개발 서버 실행
Bash
npm run dev

브라우저에서 http://localhost:3000으로 접속하여 서비스를 확인합니다.

---

📘 AI 생성 가이드: Gemini 3.0 + GitHub 연동
이 섹션은 생성형 AI를 실제 개발 워크플로우에 통합한 방식을 설명합니다.

1. 모델 선정 및 설정
서로 다른 장르나 모호한 음악적 분위기(Vibe) 사이의 연관성을 추론하기 위해 Google Gemini 3.0 모델을 채택했습니다. 이 모델은 복잡한 맥락을 이해하고 창의적인 조합을 제안하는 데 뛰어난 성능을 보입니다.

2. 프롬프트 엔지니어링 전략
app/api/fuse/route.ts 파일에는 AI가 일관된 결과를 내도록 하는 정교한 프롬프트가 포함되어 있습니다.

페르소나 부여: AI에게 "전문 음악 큐레이터"라는 역할을 부여하여 결과물의 퀄리티를 높였습니다.

구조화된 출력 강제 (JSON Mode): 프론트엔드에서 데이터를 바로 사용할 수 있도록, TypeScript 인터페이스(FuseMixResponse) 형식을 프롬프트에 명시하여 엄격한 JSON 출력을 유도했습니다.

TypeScript

// 프롬프트에 포함된 인터페이스 예시
interface FuseMixResponse {
    playlistTitle: string;
    playlistDescription: string;
    similarity: number; // 30~85 사이의 값
    playlist: { rank: number; title: string; artist: string }[];
}
3. Next.js 통합
서버 사이드 실행: API 키 노출을 방지하기 위해 모든 AI 요청은 Next.js Route Handler(POST /api/fuse)인 서버 환경에서 실행됩니다.

타입 안정성: AI가 생성한 데이터를 클라이언트로 전달하기 전, TypeScript 타입을 통해 데이터 구조를 검증하여 렌더링 오류를 방지합니다.
