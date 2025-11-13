# GENAI_POCARI
생성형 AI활용 포카리팀
서비스 명 : FriendShip Fuse

# GENAI_POCARI
생성형 AI활용 포카리팀
서비스 명 : FriendShip Fuse

AI가 두 사용자의 음악 취향을 분석하여 최적의 공동 플레이리스트(FUSE MIX)를 생성하는 소셜 음악 서비스입니다.

---

## 📂 프로젝트 구조 및 파일 역할

이 저장소는 다음과 같이 구성되어 있으며, 각 파일과 폴더는 아래의 역할을 담당합니다.

* **/app**
    * Next.js 14 (App Router)의 핵심 소스 코드가 위치하는 폴더입니다.
    * `app/page.tsx`: 사용자가 처음 보게 될 메인 페이지의 UI 코드입니다. (v0.dev로 생성/수정)
    * `app/api/`: 백엔드 API 로직이 위치할 폴더입니다. (예: `app/api/fuse/route.ts`)

* **/docs**
    * 프로젝트의 기획 및 설계를 담은 MarkDown 문서 폴더입니다. **모든 개발은 이 폴더의 문서를 기반으로 합니다.**
    * `docs/PRD.md`: 프로젝트의 최종 기획안 (Project Requirements Document)
    * `docs/Features.md`: PRD를 기반으로 한 상세 기능 명세 (F-01, F-02...)
    * `docs/API.md`: 프론트엔드와 백엔드가 통신할 API 규약 (Request/Response 예시)
    * `docs/UIUX.md`: 와이어프레임 및 UI/UX 요구사항

* **package.json**
    * 이 프로젝트가 사용하는 라이브러리(패키지)의 목록과 버전이 명시된 '부품 목록' 파일입니다.
    * `npm install` 명령어는 이 파일을 참조하여 라이브러리를 설치합니다.

* **.gitignore**
    * Git이 버전 관리를 할 때 '무시'해야 할 파일 및 폴더 목록이 정리된 파일입니다.
    * (예: `node_modules` 폴더, `.env` 파일 등 민감한 정보나 불필요한 파일)

* **README.md**
    * 현재 보고 계신 이 파일로, 프로젝트의 대문 역할을 하며 전반적인 개요를 안내합니다.

---

## 🛠️ 기술 스택

* **Core:** Next.js (App Router), React, TypeScript
* **AI:** Google Gemini API (예정)
* **UI:** Tailwind CSS, v0.dev (UI 코드 생성)
* **Version Control:** Git & GitHub

---

## 🚀 로컬에서 실행하기

1.  의존성 패키지 설치 (처음 또는 `package.json` 변경 시)
    ```bash
    npm install
    ```

2.  개발 서버 실행
    ```bash
    npm run dev
    ```

3.  브라우저에서 `http://localhost:3000` 로 접속하여 확인합니다.
