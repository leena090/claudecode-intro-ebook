---
title: "[공] 주간 업데이트: 2026년 6월 22~26일 (Week 26)"
description: "CLI에서 MCP 서버 로그인, ! 명령어 실행 후 Claude 자동 응답, /rewind로 /clear 이전 대화 복원"
tags: ["업데이트", "2026", "week26", "mcp로그인", "셸모드", "rewind", "자동응답", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-07-02"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
버전: <strong>v2.1.185 → v2.1.193</strong> · 주요 기능 2개<br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ MCP 서버 로그인을 CLI에서 바로 (v2.1.186) 🔑

MCP(Model Context Protocol) 서버를 인증할 때, 이제 Claude Code 대화창 안에서 `/mcp` 메뉴를 여는 대신 **터미널에서 바로** 할 수 있어요.

> 🍱 **비유**: 앱을 열어서 메뉴 → 계정 → 로그인을 찾아가는 대신, 터미널에서 `login` 명령어 한 줄로 바로 로그인하는 것과 같아요.

#### 사용법

```bash
# MCP 서버 인증 (OAuth 플로우 실행)
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

`claude mcp login`을 실행하면 브라우저에서 OAuth 인증 과정이 진행돼요. 인증이 완료되면 자격증명이 저장되고, 이후 해당 MCP 서버를 세션 없이도 바로 사용할 수 있어요.

<div class="note-circle">
○ v2.1.186 이상 필요<br />
○ Claude Code 세션을 열지 않고 터미널에서 바로 실행 가능<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/mcp#authenticate-from-the-command-line">mcp#authenticate-from-the-command-line</a>
</div>

---

### 2️⃣ `!` 명령어 실행 후 Claude가 자동으로 설명 (v2.1.186) 🤖

`!` 접두사로 실행한 셸 명령어의 결과에 대해, 이제 Claude가 **자동으로 응답(설명·분석)** 해줘요. 두 번 물어볼 필요 없어요.

> 🍱 **비유**: 강에 낚싯대를 던졌더니 물고기가 잡히면서 동시에 "이 물고기는 농어고, 이 크기면 회를 뜨면 좋겠어요"라고 설명이 바로 나오는 것처럼 — 명령어 실행과 분석이 한 번에 이뤄져요.

#### 사용법

```text
# 테스트 실행 → 실패 내용을 Claude가 바로 분석
> ! npm test

# 빌드 에러 → 원인과 해결책 즉시 제공
> ! npm run build

# Git 상태 확인 → Claude가 변경 사항 설명
> ! git status
```

이전에는 `! npm test`를 실행하고 실패 로그가 나오면, 다시 "왜 실패했어?"라고 따로 물어봐야 했어요. 이제는 로그가 떨어지는 순간 Claude가 바로 분석해줘요.

#### 이전 동작 방식으로 돌리려면

출력 결과를 컨텍스트에만 추가하고 응답은 받고 싶지 않으면:

```json
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ v2.1.186 이상 필요<br />
○ 자동 응답도 일반 프롬프트와 동일한 토큰 비용이 발생해요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/interactive-mode#shell-mode-with-prefix">interactive-mode#shell-mode-with-prefix</a>
</div>

---

## 기타 개선 사항

| 항목 | 내용 |
|------|------|
| ↩️ `/rewind` 기능 확장 | `/clear`로 대화를 지웠어도 이제 `/rewind`로 **이전 대화를 복원**할 수 있어요 |
| 🔐 `sandbox.credentials` | 샌드박스 명령이 자격증명 파일(`.env`, `.aws` 등)과 비밀 환경변수를 읽지 못하게 차단하는 설정 추가 |
| 🏢 조직 모델 제한 | 관리자가 설정한 모델 제한이 이제 `/model`, `--model`, `ANTHROPIC_MODEL` 환경변수에도 적용돼요. 제한된 모델 선택 시 "조직 정책에 의해 제한됨" 메시지 표시 |
| 🛡️ `autoMode.classifyAllShell` | 모든 Bash·PowerShell 명령어를 auto mode 분류기로 거치게 하는 설정. 거부 이유가 대화창, 토스트, `/permissions`에 표시 |
| 📊 OpenTelemetry 응답 로깅 | `claude_code.assistant_response` OTLP 이벤트로 모델 응답 텍스트 로깅 추가. 원치 않으면 `OTEL_LOG_ASSISTANT_RESPONSES=0` 설정 |
| 🤖 백그라운드 서브에이전트 권한 | 백그라운드 서브에이전트의 권한 요청이 이제 메인 세션에 표시돼요. 다이얼로그에 어떤 에이전트가 요청하는지 표시, Esc 누르면 해당 도구만 거부 |
| 🔧 `/install-github-app` 개선 | 이제 GitHub App만 설치하고 Actions 워크플로우·시크릿 설정 단계는 건너뛸 수 있어요 |
| 🌐 샌드박스 네트워크 허용 | 샌드박스 네트워크 권한 대화에서 허용한 호스트가 세션 내내 기억돼요. 매 연결마다 다시 묻지 않아요 |
| ⚡ 성능 개선 | 스트리밍 응답 CPU 사용량 **37% 감소**, 오래된 세션의 터미널 출력 캐시 메모리 증가 현상 개선 |
| 🔍 `/review <pr>` 개선 | 이제 `/code-review medium`과 동일한 리뷰 엔진 사용 |
| ✏️ `!` 명령어 자동완성 | Bash 모드에서 `!` 명령어 입력 시 파일 경로 자동완성 제공 |

---

## 정리

w26의 두 주요 기능은 모두 **"한 단계 줄이기"** 주제예요.

- MCP 로그인: 대화창 진입 → /mcp 메뉴 찾기 대신 → 터미널 명령 한 줄
- ! 명령어 자동 응답: 실행 후 설명 요청 대신 → 실행과 동시에 분석

특히 `/rewind`가 `/clear` 이후에도 작동하게 된 건 "실수로 대화를 지웠을 때" 다시 복원할 수 있게 해주는 안전망이에요.
