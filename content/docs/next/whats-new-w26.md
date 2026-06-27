---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "claude mcp login으로 MCP 서버 인증 한 줄 해결, ! 접두어 실행 후 바로 Claude 답변, /rewind로 /clear 이전 대화 복원"
tags: ["업데이트", "2026", "week26", "mcp-login", "shell-mode", "rewind", "bang-prefix", "자동생성"]
category: "next"
order: 14
lastUpdated: "2026-06-27"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a><br />
버전 범위: v2.1.185 → v2.1.193
</div>

## 이번 주 핵심 변경 (2개 + /rewind 개선)

---

### 1️⃣ `claude mcp login` — MCP 서버 인증을 터미널에서 한 줄로 (v2.1.186) 🔑

MCP(모델 컨텍스트 프로토콜) 서버에 로그인할 때, 이전에는 Claude Code 세션을 열고 `/mcp` 메뉴를 찾아 들어가야 했어요. 이제 터미널에서 명령어 한 줄로 바로 인증할 수 있어요.

```bash
# MCP 서버 인증 (OAuth 흐름 실행)
claude mcp login sentry

# 인증 해제
claude mcp logout sentry
```

> 🍱 **비유**: 앱을 열어서 로그인 버튼 찾는 대신, 현관에서 "문 열어줘" 하고 바로 들어가는 것과 같아요. 세션 없이 먼저 열쇠부터 챙겨두는 거예요.

**작동 방식:**

| 명령어 | 동작 |
|---|---|
| `claude mcp login <이름>` | 해당 MCP 서버의 OAuth(오어쓰) 로그인 흐름 실행. 브라우저가 열려요 |
| `claude mcp logout <이름>` | 저장된 인증 정보 삭제 |
| 세션 시작 없이 실행 | ✅ — Claude Code 대화 세션을 열지 않아도 가능 |

<div class="note-circle">
○ `<이름>`은 `.claude/mcp-settings.json`에 등록된 서버 이름이에요<br />
○ 예: Sentry, Linear, GitHub Enterprise 등 OAuth 인증이 필요한 MCP 서버에 사용
</div>

---

### 2️⃣ `!` 접두어 — 명령 실행 후 Claude가 바로 설명 (v2.1.186) 💬

`!` 접두어로 터미널 명령을 실행하면, 이제 Claude가 **출력 결과를 보고 즉시 분석·설명**해줘요. 이전에는 `! npm test`를 실행해도 출력이 대화에 추가될 뿐, Claude가 자동으로 반응하지는 않았어요.

```text
# 테스트 실행 → Claude가 실패 이유 자동 설명
> ! npm test

# 빌드 → Claude가 에러 원인 분석
> ! cargo build

# git log → Claude가 변경 이력 요약
> ! git log --oneline -10
```

> 🍱 **비유**: 요리를 다 하고 "어때요?" 라고 물어보지 않아도, 옆에 있는 요리사 선생님이 맛을 보고 바로 "소금이 좀 부족네요"라고 말해주는 것과 같아요.

**세부 사항:**

| 항목 | 내용 |
|---|---|
| **비용** | 일반 프롬프트와 동일 — 응답이 토큰을 사용해요 |
| **기능 끄기** | `settings.json`에 `respondToBashCommands: false` 설정 시 이전처럼 출력만 추가됨 |
| **자동완성** | `!` 명령 입력 중 파일 경로 자동완성 지원 |

```json
// 자동 응답 끄기 (이전 동작으로 되돌리기)
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

---

### 기타 개선사항 (포함 `/rewind` 업데이트)

| 항목 | 내용 |
|---|---|
| **`/rewind` 개선** | `/clear`로 대화를 지운 뒤에도 `/rewind`로 이전 대화를 복원할 수 있어요 |
| **`sandbox.credentials` 설정** | 샌드박스 명령이 자격증명 파일·비밀 환경변수를 읽지 못하도록 차단 |
| **조직 모델 제한 강화** | 관리자가 설정한 모델 제한이 모델 선택 UI, `--model`, `/model`, `ANTHROPIC_MODEL` 환경변수 모두에 적용됨 |
| **`autoMode.classifyAllShell`** | `true`로 설정 시 모든 Bash·PowerShell 명령이 auto mode 분류기를 거침. 거부 이유가 대화창에 표시 |
| **OpenTelemetry 응답 로그** | `claude_code.assistant_response` 이벤트로 모델 응답 텍스트도 로깅됨. 원하지 않으면 `OTEL_LOG_ASSISTANT_RESPONSES=0` 설정 |
| **백그라운드 서브에이전트 권한 프롬프트** | 백그라운드 서브에이전트가 권한 요청 시 메인 세션에 팝업으로 표시. 어떤 에이전트가 요청하는지 보임. Esc는 해당 요청만 거부 |
| **`/install-github-app` 유연화** | GitHub App만 설치하고 Actions 워크플로·Secret 단계 건너뛸 수 있어요 |
| **샌드박스 네트워크 허용 기억** | 샌드박스 네트워크 허용 팝업에서 허용한 호스트는 세션 동안 재묻지 않음 |
| **성능 개선** | 스트리밍 응답 CPU 사용량 약 37% 감소. 장시간 세션 메모리 증가 문제 감소 |
| **`/review <PR>` 업그레이드** | `/review <PR번호>` 명령이 `/code-review medium`과 동일한 엔진으로 작동 |

---

## `/rewind` 완전 정리

이번 업데이트로 `/rewind`가 한 단계 강화됐어요. 이전에는 `/clear` 이후에는 되감을 수 없었지만, 이제 가능해요.

```text
# 대화 중간으로 되감기
> /rewind

# /clear로 초기화한 뒤에도 복원 가능
> /clear           ← 대화 전체 초기화
> /rewind          ← /clear 이전 지점으로 복원 가능!
```

> 🍱 **비유**: 다이어리를 구겨버렸다가 다시 펼칠 수 있는 것처럼 — "다 지웠어" 해도 Ctrl+Z로 복원되는 느낌이에요.

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ `/rewind` 복원은 같은 세션 내에서만 작동해요 — Claude Code를 완전히 종료하면 복원 불가<br />
○ `!` 자동 응답이 너무 많으면 <code>respondToBashCommands: false</code>로 끄고, 필요할 때만 "왜 이러지?"라고 물어보세요
</div>
