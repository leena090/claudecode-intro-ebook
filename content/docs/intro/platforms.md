---
title: "[공] 어디서 Claude Code를 쓸까? 플랫폼 총정리"
description: "터미널, 데스크톱 앱, VS Code, 웹, 모바일, Slack — 내 상황에 맞는 Claude Code 사용 환경을 골라보세요"
tags: ["자동생성", "플랫폼", "터미널", "데스크톱", "VS Code", "웹", "모바일", "입문"]
category: "intro"
order: 4
lastUpdated: "2026-04-20"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기반</strong>: <a href="https://code.claude.com/docs/en/platforms.md">code.claude.com/docs/en/platforms</a><br />
★ CLI, 데스크톱 앱, VS Code, 웹, iOS, Slack, CI/CD — 총 7가지 실행 환경 비교
</div>

## "Claude Code, 어디서 쓰는 건가요?"

처음 Claude Code를 접한 분들이 가장 헷갈려하는 게 이거예요.

> "터미널에서 쓴다고요? 앱은 없어요? 웹에서는요?"

안심하세요. Claude Code는 **7가지 환경**에서 쓸 수 있어요. 내 상황에 맞는 걸 골라서 시작하면 됩니다.

---

## 플랫폼 한눈에 비교

| 환경 | 특징 | 추천 대상 |
|------|------|----------|
| 🖥️ **터미널(CLI)** | 가장 강력, 모든 기능 사용 | 개발자, 명령어 익숙한 분 |
| 💻 **데스크톱 앱** | 멀티세션, 시각적 diff, 미리보기 | 비코더, 동시 여러 작업 |
| 🧩 **VS Code / JetBrains** | IDE 안에서 바로 사용 | 개발 중 IDE 사용자 |
| 🌐 **웹(claude.ai/code)** | 설치 없이 브라우저에서 | 설치 어려운 환경 |
| 📱 **iOS 앱 (리서치 프리뷰)** | 이동 중 지시, 내 PC에서 실행 | 이동 중 업무 시작 |
| 💬 **Slack** | 채팅방에서 코딩 지시 | 팀 협업 중심 |
| ⚙️ **GitHub Actions / GitLab CI** | PR 리뷰 자동화 | 팀 CI/CD 자동화 |

---

## 각 환경 자세히 알아보기

### 🖥️ 1. 터미널(CLI) — 가장 기본적인 환경

**설치 방법:**
```bash
# macOS / Linux
curl -fsSL https://claude.ai/install.sh | bash

# Windows (PowerShell)
irm https://claude.ai/install.ps1 | iex
```

> 🔌 **비유**: 전기밥솥의 기본 버튼만 있는 것처럼, 터미널은 Claude Code의 '원형 그대로' 예요. 가장 강력하고 모든 기능을 쓸 수 있어요.

**장점:**
- ✅ 모든 기능 사용 가능
- ✅ Git, npm 등 내 CLI 도구와 자연스럽게 통합
- ✅ 훅(Hooks), 스킬(Skills), 루틴(Routines) 등 고급 기능 완전 지원

**단점:**
- ❌ 명령어 입력에 익숙해야 함
- ❌ 여러 작업을 동시에 보기 어려움

---

### 💻 2. 데스크톱 앱 — 비코더도 쓰기 편한 환경

Claude 데스크톱 앱(macOS/Windows)에서 Claude Code를 실행하는 방식이에요.

**특별한 기능들:**
- 📋 **멀티세션 사이드바**: 여러 작업을 동시에 실행, 탭으로 전환
- 👁️ **시각적 diff 리뷰**: 코드 변경 내용을 색상으로 구분해서 보여줌
- 🖥️ **앱 미리보기**: 만든 웹/앱을 바로 화면에서 확인
- 📱 **Dispatch**: 폰에서 보낸 지시를 내 PC에서 실행 (리서치 프리뷰)

> 🎨 **비유**: 화가가 팔레트와 붓 여러 개를 동시에 늘어놓고 작업하는 것처럼, 여러 Claude 세션을 나란히 열어두고 작업할 수 있어요.

👉 자세한 내용: [데스크톱 앱 설치 가이드](/docs/setup/install-desktop)

---

### 🧩 3. VS Code / JetBrains IDE 확장

**지원 IDE:**
- VS Code (+ Cursor, Windsurf 등 포크)
- JetBrains 계열 (IntelliJ, PyCharm, WebStorm 등)

코드 편집기 안에서 바로 Claude와 대화하면서:
- 코드 변경을 인라인 diff로 확인
- `@파일명` 으로 특정 파일 언급
- 계획(Plan) 검토 후 실행

> 🍕 **비유**: 요리책(코드)을 보면서 바로 옆에 요리사(Claude)가 있는 것처럼, IDE에서 코드를 보면서 즉시 질문하고 수정할 수 있어요.

---

### 🌐 4. 웹(claude.ai/code) — 설치 없이 브라우저에서

**GitHub 연동**으로 저장소를 연결하면, 설치 없이 브라우저에서 바로 Claude Code를 쓸 수 있어요.

```
1. github.com에서 저장소(레포지터리) 준비
2. claude.ai/code 접속
3. 저장소 연결
4. 작업 지시 → PR 생성 확인
```

**Anthropic 샌드박스 환경에서 실행:**
- 클라우드 서버에서 안전하게 실행
- 결과는 Pull Request로 돌아옴

> 🚌 **비유**: 차(컴퓨터)가 없어도 버스(클라우드 서버)를 타고 목적지에 도착하는 것처럼, 내 컴퓨터 설치 없이 웹에서 작업 완료!

👉 자세한 내용: [웹에서 Claude Code 사용하기](/docs/codeweb/codeweb-intro)

---

### 📱 5. iOS 앱 + 모바일 Dispatch (리서치 프리뷰)

Pro/Max 플랜에서 리서치 프리뷰로 사용 가능한 기능이에요.

**작동 방식:**

```
📱 폰에서 지시
   ↓
💻 내 PC/맥의 Claude Code가 실행
   ↓
📁 코드베이스 읽기, 파일 수정, 테스트 실행
   ↓
🔀 Pull Request 생성
   ↓
📱 폰으로 결과 알림
```

> 🏃‍♂️ **비유**: 회사 밖에서 걷다가도 직원(Claude)에게 "저 파일 고쳐놔"라고 전화하면, 회사로 돌아왔을 때 이미 완료되어 있는 것처럼요!

**적합한 상황:**
- 지하철·카페에서 이동 중 작업 시작
- 회의 중 떠오른 아이디어를 즉시 지시
- 아침에 일어나자마자 어젯밤 생각 구현 지시

---

### 💬 6. Slack 통합

팀 Slack 워크스페이스에서 Claude Code를 사용해요.

```
Slack 채팅방에서:
> @claude 이 버그 고쳐줘: 로그인 페이지에서 비밀번호 오류 시 앱이 멈춤
```

Claude가 코드베이스를 분석하고 PR을 만들어서 알려줘요.

**팀에서 쓰기 좋은 이유:**
- 비개발자도 Claude에게 작업 요청 가능
- 논의 맥락 그대로 코딩 작업 지시
- 결과를 채팅방에서 바로 확인

---

### ⚙️ 7. GitHub Actions / GitLab CI/CD

**자동화된 PR 리뷰와 코드 수정:**

```yaml
# .github/workflows/claude-review.yml 예시
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  claude-review:
    uses: anthropics/claude-code-action@main
```

PR이 열리면 자동으로:
- 코드 품질 검사
- 보안 취약점 탐지
- 로직 오류 감지
- 리뷰 코멘트 생성

---

## 어디서 시작하면 좋을까요?

| 나는... | 추천 환경 |
|--------|----------|
| 처음 설치해보는 완전 초보 | 💻 데스크톱 앱 |
| 개발자, 터미널 익숙 | 🖥️ 터미널(CLI) |
| IDE에서 코딩 중 | 🧩 VS Code/JetBrains |
| 설치 없이 빨리 써보고 싶다 | 🌐 웹(claude.ai/code) |
| 이동 중에도 쓰고 싶다 (Pro/Max) | 📱 iOS + Dispatch |
| 팀에서 함께 쓰고 싶다 | 💬 Slack 또는 ⚙️ GitHub Actions |

---

## 요약

Claude Code는 **설치형 CLI부터 웹, 모바일, 팀 협업 도구까지** 다양한 환경을 지원해요. 꼭 터미널에서만 써야 하는 게 아니에요!

가장 좋은 시작점은 **데스크톱 앱이나 웹**입니다. 설치가 쉽고 시각적으로 확인하기 좋아서 40~60대 입문자분들께 특히 추천드려요. 익숙해지면 터미널로 넘어가도 늦지 않아요.

---

*출처: [공] [code.claude.com/docs/en/platforms](https://code.claude.com/docs/en/platforms.md) (공식 발표 기준)*
