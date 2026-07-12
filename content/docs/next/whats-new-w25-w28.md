---
title: "[공] 주간 업데이트 총정리: 2026년 6월 15일 ~ 7월 10일 (Week 25~28)"
description: "Artifacts 정식 출시, Linux 데스크톱 앱 베타, /radio, /doctor, 소네트 5 기본 모델 전환 등 4주 신기능 한 번에!"
tags: ["업데이트", "2026", "week25", "week26", "week27", "week28", "artifacts", "linux", "radio", "doctor", "자동생성"]
category: "next"
order: 21
lastUpdated: "2026-07-12"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25~28 (2026-06-15 ~ 2026-07-10) 업데이트 내역. <code>[공]</code><br />
👉 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/index" target="_blank">code.claude.com/docs/en/whats-new</a>
</div>

## 이 기간의 핵심 변화 한눈에 보기

| 주 | 버전 | 하이라이트 |
|---|---|---|
| W25 (6/15~19) | v2.1.178 → v2.1.183 | Artifacts 베타, /config key=value, 권한 파라미터 매칭 |
| W26 (6/22~26) | v2.1.185 → v2.1.193 | claude mcp login, ! 명령 자동 응답, /rewind 강화 |
| W27 (6/29~7/3) | v2.1.195 → v2.1.201 | ⭐소네트 5 기본 모델, 리눅스 데스크톱 베타, /radio, Chrome GA |
| W28 (7/6~10) | v2.1.202 → v2.1.206 | 데스크톱 내장 브라우저, /doctor 진단 도구 |

---

## Week 25 (6월 15~19일)

### 1️⃣ Artifacts — 세션에서 웹페이지를 바로 발행해요 🌐

Claude Code에서 작업하다가 **결과물을 공유 가능한 웹 페이지로 바로 만들** 수 있어요.

> 🍱 **비유**: 회의 결과를 화이트보드에 정리한 다음, 버튼 한 번으로 그걸 팀 전체가 볼 수 있는 URL로 만드는 것과 같아요.

**어떤 걸 만들 수 있나요?**

```text
> PR 변경 내용을 diff가 주석으로 달린 인터랙티브 페이지로 만들어줘

> 오늘 세션 데이터를 대시보드로 만들어줘
```

Claude가 페이지를 만들면 **claude.ai의 개인 URL로 발행**돼요. 세션이 계속 진행되면서 페이지가 실시간으로 업데이트돼요.

<div class="note-circle">
○ W25: Team·Enterprise 플랜 베타로 시작<br />
○ W27: <strong>Pro·Max 플랜까지 정식 출시(GA)</strong>로 확대됐어요!
</div>

---

### 2️⃣ /config key=value — 프롬프트에서 바로 설정 변경 ⚙️

설정 화면을 열지 않고도 **대화창에서 직접** 설정을 바꿀 수 있어요.

```bash
# 적응형 사고 끄기
/config thinking=false

# 기타 설정도 동일하게
/config language=ko
```

> 🍱 **비유**: 라디오 볼륨을 줄이러 메뉴를 3번 탐색할 필요 없이, 리모컨에 바로 숫자 버튼이 생긴 것과 같아요.

---

### 3️⃣ 권한 파라미터 매칭 — 더 세밀한 권한 제어 🔐

이제 **어떤 값으로 호출했는지**까지 권한 규칙으로 설정할 수 있어요.

```json
// .claude/settings.json — Opus 모델로 서브에이전트 생성 막기
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

`Agent(isolation:*)` — 별표(`*`)로 와일드카드도 지원해요.

---

## Week 26 (6월 22~26일)

### 1️⃣ claude mcp login — 터미널에서 MCP 서버 인증 🔑

이전엔 `/mcp` 메뉴를 통해서만 MCP 서버에 로그인할 수 있었어요. 이제 터미널에서 직접 할 수 있어요.

```bash
# Sentry MCP 서버 로그인 (OAuth 흐름 실행)
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

> 🍱 **비유**: 앱 안에서 로그인하는 것에서, 터미널(명령어창)에서 직접 로그인할 수 있게 된 거예요. 자동화 스크립트에서 특히 편해요.

---

### 2️⃣ `!` 명령어가 자동으로 분석해줘요 🤖

`!` 앞에 명령어를 실행하면, Claude가 그 결과를 **자동으로 분석**해줘요.

```bash
# 테스트 실행 → Claude가 실패 원인 자동 분석
! npm test

# 빌드 오류 → 자동 설명
! cargo build
```

이전엔 결과가 화면에만 나왔는데, 이제 **별도로 "이 에러 뭔지 설명해줘"라고 묻지 않아도** 돼요.

<div class="note-circle">
○ 자동 응답을 원하지 않으면 settings.json에서 <code>respondToBashCommands: false</code> 설정<br />
○ 자동 응답은 일반 프롬프트와 같은 토큰 비용이 발생해요
</div>

---

### 3️⃣ /rewind 강화 — /clear 이전으로도 되돌아가요 ⏮️

`/clear`로 대화를 지운 다음에도, `/rewind`로 그 이전 상태로 돌아갈 수 있어요.

```bash
/rewind    # 특정 시점으로 대화 되감기
```

---

## Week 27 (6월 29일 ~ 7월 3일) ⭐ 이번 달 최대 업데이트

### 1️⃣ 소네트 5 — 새 기본 모델 🏆

**Claude Sonnet 5**가 Pro, Team Standard, Enterprise 구독자의 기본 모델이 됐어요.

- 최상급 코딩·도구 활용 능력 (Sonnet 가격에!)
- 1M(100만) 토큰 컨텍스트 윈도우
- 적응형 사고(Adaptive Thinking) 기본 활성화

자세한 내용은 → **[소네트 5 출시 & Fable 5 복귀](/docs/next/new-models-2026-07)** 문서를 보세요.

---

### 2️⃣ Linux 데스크톱 앱 — 드디어 리눅스에도! 🐧

Claude 데스크톱 앱이 **Ubuntu 22.04+, Debian 12+**에서 베타로 사용 가능해요.

macOS·Windows와 같은 경험을 제공해요:
- Chat, Cowork, Claude Code 모두 지원
- 멀티세션, 내장 터미널, 실시간 미리보기

자세한 설치 방법은 → **[리눅스 데스크톱 앱 베타](/docs/advanced/desktop-linux)** 문서를 보세요.

---

### 3️⃣ /radio — 코딩할 때 음악도 틀어줘요 🎵

Claude FM 라디오! `/radio`를 치면 로파이(Lo-fi) 음악 스트림이 브라우저에서 열려요.

```bash
/radio
```

> 🍱 **비유**: 공부할 때 로파이 음악 틀어놓는 그 감성. Claude가 코딩 BGM까지 챙겨줘요.

<div class="note-circle">
○ 브라우저가 없는 환경에서는 스트림 URL을 출력해줘요<br />
○ Amazon Bedrock, Google Cloud, Microsoft Foundry 환경에서는 사용 불가
</div>

---

### 4️⃣ 크롬 확장 정식 출시(GA) 🌐

이전에 프리뷰였던 **Claude in Chrome**이 Anthropic 직접 플랜 사용자 모두에게 정식 출시됐어요.

Claude Code가 크롬을 조종해서:
- 탭 열기, 클릭, 폼 작성
- 콘솔 로그 읽기
- 내가 로그인한 상태로 앱 테스트

→ **코딩하면서 바로 브라우저 테스트**가 가능해졌어요.

---

### 5️⃣ 서브에이전트 백그라운드 실행 기본 적용 🔄

이전엔 Claude가 서브에이전트를 실행하면 결과를 기다렸어요. 이제는 **백그라운드에서 실행**하고, 결과가 나올 때 받아서 처리해요.

> 🍱 **비유**: 회사원이 직원한테 일 시키고 멍하니 기다리는 게 아니라, 그 사이 다른 일을 하다가 직원이 완료 보고를 하면 그때 확인하는 것과 같아요.

---

## Week 28 (7월 6~10일)

### 1️⃣ 데스크톱 내장 브라우저 — 외부 사이트도 열어요 🌐

Claude 데스크톱 앱에 **내장 브라우저**가 생겼어요! 개발 서버 미리보기뿐만 아니라 외부 웹사이트도 Claude가 직접 열고 조작할 수 있어요.

```text
> 공식 문서 사이트에서 React Query 사용법 찾아서 내 코드에 적용해줘
```

> 🍱 **비유**: 조수(Claude)가 책장에서 직접 책을 꺼내서 읽고, 거기서 찾은 내용을 내 코드에 반영하는 것과 같아요.

<div class="note-circle">
○ 브라우저는 샌드박스(격리 환경)로 실행돼요 — 보안 분류기(Safety Classifier)가 외부 사이트 동작을 검토해요<br />
○ 브라우징 세션 유지 여부는 내가 설정할 수 있어요
</div>

---

### 2️⃣ /doctor — 전체 설정 진단 및 수리 🩺

`/doctor` (별칭: `/checkup`)가 완전히 강화됐어요. 이제 **진단만 하는 게 아니라, 문제를 직접 고쳐줘요**.

```bash
/doctor
```

진단 항목:

| 진단 내용 | 설명 |
|---|---|
| 설치 상태 확인 | 버전, 의존성 체크 |
| 안 쓰는 스킬·플러그인·MCP 서버 발견 | 컨텍스트 낭비 요소 정리 |
| 로컬 CLAUDE.md 중복 제거 | 저장소에 체크인된 파일과 중복 제거 |
| CLAUDE.md 내용 정리 제안 | Claude가 코드베이스에서 유추할 수 있는 내용 제거 |
| 느린 훅(Hooks) 감지 | 성능 저하 원인 찾기 |

변경 전 **항상 확인을 요청**하니까 걱정 없이 실행해도 돼요.

---

### 기타 개선사항 (W25~W28)

| 항목 | 주 | 내용 |
|---|---|---|
| Auto Mode 보안 강화 | W25 | `git reset --hard`, `git clean -fd`, `terraform destroy` 등 위험 명령 자동 차단 |
| `/commit-push-pr` | W28 | `git push`를 origin 외 설정된 push remote에도 자동 허용 |
| 서브에이전트 권한 프롬프트 | W26 | 백그라운드 에이전트가 권한 요청 시 메인 세션에 표시 |
| `/install-github-app` | W26 | GitHub App만 설치하고 Actions 워크플로·시크릿 단계 건너뛰기 가능 |
| `/cd` 자동완성 | W28 | 디렉토리 경로 자동 완성 지원 |
| 스트리밍 CPU 절감 | W26 | 약 37% CPU 사용량 감소 |
| 조직 기본 모델 설정 | W27 | 관리자가 org 콘솔에서 기본 모델 지정 가능 (`/model`에서 "Org default"로 표시) |
| `/dataviz` 스킬 | W27 | 차트·대시보드 디자인 가이드 제공 스킬 추가 |

<div class="note-circle">
○ v2.1.197 이상에서 소네트 5 사용 가능 — <code>claude update</code>로 최신 버전 유지하세요<br />
○ <code>attribution.sessionUrl: false</code> 설정으로 커밋·PR에 세션 링크 추가 안 할 수 있어요
</div>
