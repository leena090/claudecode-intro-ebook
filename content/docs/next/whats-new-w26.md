---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "claude mcp login으로 CLI에서 MCP 인증, ! 접두사 명령어에 Claude 자동 응답, /rewind로 /clear 이전 대화 복구"
tags: ["업데이트", "2026", "week26", "mcp", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-06-28"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ `claude mcp login` — MCP 서버 인증을 터미널에서 바로 🔐

MCP(Model Context Protocol) 서버를 사용할 때, 이제 세션을 열지 않고 **터미널에서 바로 인증**할 수 있어요.

> 🍱 **비유**: 은행 앱을 쓸 때 앱을 먼저 열어 로그인해야 했는데, 이제 전화 한 통으로 미리 인증해 놓고 앱을 쓸 수 있게 된 거예요.

```bash
# MCP 서버 로그인 (OAuth 흐름 실행)
claude mcp login sentry

# MCP 서버 로그아웃 (저장된 자격증명 삭제)
claude mcp logout sentry
```

**기존 방식 vs 새 방식:**

| 구분 | 기존 방식 | 새 방식 |
|---|---|---|
| 인증 방법 | Claude Code 세션 내 `/mcp` 메뉴 | 터미널에서 직접 `claude mcp login` |
| 언제 사용? | 이미 세션이 열려있을 때 | 세션 시작 전, 자동화 스크립트 등 |
| 저장 위치 | 동일한 자격증명 저장소 | 동일한 자격증명 저장소 |

<div class="note-circle">
○ GitHub Actions나 CI 환경에서 MCP 서버를 미리 인증해 놓을 때 특히 유용해요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/mcp#authenticate-from-the-command-line" target="_blank">Authenticate from the command line</a>
</div>

---

### 2️⃣ `!` 접두사 명령어에 Claude가 자동으로 응답 🤖

터미널 명령어를 `!`로 실행하면, 이제 Claude가 그 **출력 결과를 보고 자동으로 설명이나 분석을 해줘요**.

> 🍱 **비유**: 친구한테 "이 결과 좀 봐줘"라고 말하지 않아도, 옆에서 보고 있다가 스스로 "아, 이거 이렇게 하면 돼"라고 알려주는 것과 같아요.

```text
# 이렇게 실행하면
! npm test

# Claude가 테스트 실패 결과를 보고 자동으로 설명해줘요
```

**상세 내용:**

| 항목 | 설명 |
|---|---|
| **응답 비용** | 일반 프롬프트와 동일 (토큰 소비) |
| **끄는 방법** | `settings.json`에 `"respondToBashCommands": false` 설정 |
| **자동완성** | `!` 명령어에 파일 경로 자동완성 지원 (이번에 추가됨) |

```json
// 자동 응답을 끄고 싶을 때 (.claude/settings.json)
{
  "respondToBashCommands": false
}
```

이 설정을 끄면 이전 방식으로 돌아가요 — 명령어 출력이 컨텍스트에만 추가되고 자동 응답은 없어요.

<div class="note-circle">
○ 에러 메시지가 길고 복잡할 때 특히 편해요 — 직접 복사·붙여넣기 없이 Claude가 바로 분석해줘요<br />
○ 자주 쓰는 빌드·테스트 명령어에 붙이면 일하는 흐름이 훨씬 빨라져요
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `/rewind` 개선 | `/clear` 이전 대화로 되돌아갈 수 있어요 (실수로 대화 지웠을 때 복구) |
| `sandbox.credentials` 설정 | 샌드박스 명령어가 자격증명 파일·비밀 환경변수 읽기 차단 |
| 조직 모델 제한 강화 | 허용 모델 목록이 model picker, `--model`, `/model`, `ANTHROPIC_MODEL` 모두에 적용 |
| `autoMode.classifyAllShell` | 모든 Bash/PowerShell 명령어를 auto-mode 분류기 통과 — 거부 이유가 대화·토스트·`/permissions`에 표시 |
| OpenTelemetry 로그 개선 | `claude_code.assistant_response` 이벤트로 AI 응답 텍스트 추적 가능 (끄려면 `OTEL_LOG_ASSISTANT_RESPONSES=0`) |
| 서브에이전트 권한 프롬프트 | 백그라운드 서브에이전트의 권한 요청이 메인 세션에 표시됨 (이전: 자동 거부) |
| GitHub App 설치 분리 | `/install-github-app`에서 GitHub App만 설치하고 Actions 워크플로·시크릿 단계 건너뛸 수 있음 |
| 샌드박스 네트워크 기억 | 허용한 호스트를 세션 내내 기억 (매번 재확인 요청 없음) |
| 스트리밍 성능 향상 | CPU 사용량 약 37% 감소, 긴 세션에서 메모리 성장 억제 |
| `/review <pr>` 개선 | `/code-review medium`과 동일한 리뷰 엔진 사용 |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ "/rewind 개선" — <code>/clear</code> 후 <code>/rewind</code>를 실행하면 그 이전 대화 내용을 복구할 수 있어요. 단, 너무 오래 지난 세션은 복구가 안 될 수 있어요
</div>
