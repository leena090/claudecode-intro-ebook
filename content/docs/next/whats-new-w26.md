---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "CLI에서 MCP 서버 로그인, ! 명령어 출력에 Claude가 자동 응답, /rewind로 /clear 이전 대화 복구"
tags: ["업데이트", "2026", "week26", "mcp-login", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-07-08"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2+1개)

---

### 1️⃣ `claude mcp login` — CLI에서 바로 MCP 서버 로그인 🔐

MCP 서버에 연결하려면 먼저 인증이 필요한 경우가 있어요. 이전에는 세션 안에서 `/mcp` 메뉴를 통해서만 가능했는데, 이제 **터미널에서 바로** 로그인할 수 있어요.

> 🍱 **비유**: 매번 회사 인트라넷 사이트를 열어서 로그인하던 걸, 이제 터미널 명령 한 줄로 대신하는 것과 같아요.

**사용법:**

```bash
# sentry MCP 서버에 로그인 (OAuth 인증 흐름 실행)
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

**동작 방식:**

| 명령어 | 역할 |
|---|---|
| `claude mcp login <이름>` | 해당 서버의 OAuth 인증 흐름을 셸에서 직접 실행 |
| `claude mcp logout <이름>` | 저장된 인증 정보 삭제 |

<div class="note-circle">
○ 세션을 열지 않고도 인증 가능 — 스크립트·자동화에 편리해요<br />
○ v2.1.186부터 적용
</div>

---

### 2️⃣ `!` 명령어 출력에 Claude가 자동으로 답해줘요 💬

`!` 접두어로 셸 명령을 실행하면, 이제 결과를 보고 Claude가 **자동으로 설명이나 분석**을 해줘요. 따로 "이 에러가 뭔지 설명해줘"라고 다시 물어볼 필요가 없어요.

> 🍱 **비유**: 테스트를 실행했더니 에러가 났고, 옆에 앉아 있는 선배가 그 에러를 보고 바로 "아, 이건 이런 이유로 실패한 거야"라고 설명해주는 것과 같아요.

**사용법:**

```text
# 테스트 실행 → 자동으로 실패 원인 설명
> ! npm test

# 빌드 실행 → 에러 있으면 바로 해석
> ! cargo build

# git log 확인 → 최근 커밋 요약
> ! git log --oneline -5
```

**이전 동작으로 되돌리고 싶다면:**

```json
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ 응답 비용은 일반 프롬프트와 동일<br />
○ ! 명령어에 파일 경로 자동완성도 지원돼요<br />
○ v2.1.186부터 적용
</div>

---

### 3️⃣ `/rewind` — `/clear` 이전으로 대화 되돌리기 ⏪

실수로 `/clear`를 눌러서 대화 기록이 지워졌다면 `/rewind`로 **이전 대화를 복구**할 수 있어요.

> 🍱 **비유**: 문서에서 Ctrl+Z (되돌리기)처럼, `/clear`로 지워버린 대화를 되살리는 거예요.

**사용법:**

```text
/rewind
```

<div class="note-circle">
○ 이전에도 /rewind는 있었지만 /clear 이전까지는 못 거슬러 올라갔어요<br />
○ 이번 업데이트로 /clear 직전 상태까지 복구 가능
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `sandbox.credentials` 설정 | 샌드박스 명령이 인증 파일·시크릿 환경변수를 읽지 못하게 차단하는 옵션 |
| 조직 모델 제한 강화 | 관리자 설정 모델 제한이 `/model`, `--model`, 모델 피커, `ANTHROPIC_MODEL` 전부에 적용 |
| `autoMode.classifyAllShell` | Auto mode 분류기를 모든 셸 명령에 적용, 거부 이유도 트랜스크립트에 표시 |
| OpenTelemetry 로그 | 새 `claude_code.assistant_response` 이벤트로 모델 응답 텍스트 로깅 (끄려면 `OTEL_LOG_ASSISTANT_RESPONSES=0`) |
| 서브에이전트 권한 프롬프트 | 백그라운드 서브에이전트의 권한 요청이 메인 세션에 표시됨 (이전: 자동 거부) |
| GitHub App 설치 유연화 | `/install-github-app`에서 GitHub App만 설치하고 Actions 워크플로·시크릿 단계 건너뛰기 가능 |
| 샌드박스 호스트 기억 | 허용한 호스트가 세션 내내 기억됨 (이전: 매번 재질문) |
| 성능 개선 | 스트리밍 응답 CPU 사용량 37% 감소, 장기 세션 메모리 사용량 감소 |
| `/review <pr>` 개선 | `/code-review medium`과 동일한 엔진 사용으로 품질 향상 |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193
</div>
