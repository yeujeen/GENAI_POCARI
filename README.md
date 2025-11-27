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

* **/app**
    * `page.tsx`: 입력 화면과 결과 화면 간의 전환을 관리하는 메인 컨트롤러입니다.
    * `api/fuse/route.ts`: Gemini API와 통신하는 백엔드 로직입니다. 프롬프트 엔지니어링을 통해 정해진 JSON 규격으로 데이터를 응답받습니다.
* **/components**
    * `MainPage.tsx`: 사용자 A와 B의 데이터를 입력받는 UI 컴포넌트입니다.
    * `ResultsPage.tsx`: 분석 결과(유사도, 벤 다이어그램, 플레이리스트)를 시각적으로 보여주는 결과 페이지입니다.
* **/lib**
    * `gemini.ts`: Google GenAI 클라이언트를 안전하게 초기화하고 환경 변수를 관리합니다.

---

## 🚀 시작 가이드 (Getting Started)

로컬 환경에서 프로젝트를 실행하기 위해 다음 단계를 따라주세요.

### 1. 저장소 복제 (Clone)
```bash
git clone [https://github.com/YOUR_GITHUB_ID/genai_pocari.git](https://github.com/YOUR_GITHUB_ID/genai_pocari.git)
cd genai_pocari
