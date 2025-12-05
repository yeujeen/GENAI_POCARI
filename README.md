# 🎵 Friendship Fuse (GenAI Pocari)

> **"너랑 나랑 섞으면 무슨 노래가 나올까?"** > AI로 연결하는 우리 둘만의 음악 취향 매칭 & 플레이리스트 생성기

![Project Status](https://img.shields.io/badge/Project-Active-green)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini-BVKD)

## 📖 프로젝트 소개 (About)

**Friendship Fuse**는 친구나 연인 등 두 사람의 음악 취향 키워드를 입력받아, **Google Gemini AI**가 이를 분석하고 두 사람 모두가 만족할 수 있는 최적의 **공통 플레이리스트(FUSE MIX)**를 만들어주는 소셜 웹 애플리케이션입니다.

단순한 추천을 넘어, 두 사람의 음악적 교집합(Similarity)과 분위기(Mood)를 시각적으로 보여주며 새로운 소통의 계기를 마련해 줍니다.

---

## ✨ 주요 기능 (Key Features)

| 기능 | 설명 |
| :--- | :--- |
| **👥 취향 매칭** | 두 명의 사용자(User A, User B)가 각자 좋아하는 아티스트, 장르, 곡을 입력합니다. |
| **🧠 AI 분석** | Google Gemini AI가 입력된 데이터를 분석하여 두 사람의 음악적 공통점과 키워드를 추출합니다. |
| **📊 매치 스코어** | 두 사람의 음악 취향이 얼마나 잘 맞는지 퍼센트(%) 점수와 애니메이션으로 보여줍니다. |
| **🎧 FUSE MIX** | 분석된 분위기에 어울리는 **5곡의 맞춤형 플레이리스트**를 생성하고 유튜브로 연결해 줍니다. |
| **🎨 감성 UI** | Tailwind CSS를 활용한 그라데이션 컬러와 직관적인 카드형 디자인을 제공합니다. |

---

## 🛠️ 기술 스택 (Tech Stack)

이 프로젝트는 최신 웹 기술과 생성형 AI 모델을 기반으로 구축되었습니다.

| 구분 | 기술 (Technology) | 상세 내용 |
| :--- | :--- | :--- |
| **Framework** | ![Next.js](https://img.shields.io/badge/-Next.js_16-000000?logo=next.js) | App Router 기반의 최신 구조 사용 |
| **Language** | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 정적 타입 지정을 통한 안정적인 개발 |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS_v4-38B2AC?logo=tailwind-css&logoColor=white) | 유틸리티 퍼스트 CSS 프레임워크 |
| **AI Model** | ![Gemini](https://img.shields.io/badge/-Google_Gemini-8E75B2?logo=google-bard&logoColor=white) | `gemini-1.5-flash` 모델 활용 (Generative AI) |
| **Icons** | ![Lucide](https://img.shields.io/badge/-Lucide_React-FJ3F56) | 가볍고 통일성 있는 아이콘 라이브러리 |
| **UI Components** | **Shadcn UI** (Custom) | 재사용 가능한 `Card`, `Button`, `Input` 컴포넌트 구현 |

---

## 🚀 시작하기 (Getting Started)

로컬 환경에서 프로젝트를 실행하려면 다음 단계를 따르세요.

### 1. 저장소 클론 (Clone)
```bash
git clone [https://github.com/yeujeen/Friendship-Fuse-APP.git](https://github.com/yeujeen/Friendship-Fuse-APP.git)
cd Friendship-Fuse-APP/project

```
### 2. 패키지 설치 (Install)
Bash
npm install

### 3. 환경 변수 설정 (Environment Setup)
프로젝트 루트(project/)에 .env.local 파일을 생성하고, Google Gemini API 키를 입력합니다.

코드 스니펫
# .env.local
GEMINI_API_KEY=your_google_api_key_here

### 4. 실행 (Run)
Bash
npm run dev
브라우저에서 http://localhost:3000으로 접속하여 확인합니다.

📂 폴더 구조 (Folder Structure)
project/
├── app/
│   ├── api/fuse/route.ts    # AI 분석 백엔드 API (Prompt Engineering)
│   ├── globals.css          # 전역 스타일 (Tailwind 설정)
│   ├── layout.tsx           # 루트 레이아웃 (Font 설정)
│   └── page.tsx             # 메인 페이지 (상태 관리 및 라우팅)
├── components/
│   ├── ui/                  # UI 컴포넌트 (Button, Card, Input, Badge)
│   ├── MainPage.tsx         # 입력 화면 컴포넌트
│   └── ResultsPage.tsx      # 결과 화면 컴포넌트 (애니메이션 포함)
├── lib/
│   ├── gemini.ts            # Gemini 클라이언트 설정
│   └── utils.ts             # 유틸리티 함수 (cn 등)
└── public/                  # 정적 파일
