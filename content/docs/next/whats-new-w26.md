---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "! 명령어 결과를 Claude가 자동 분석, claude mcp login으로 MCP 인증, /rewind로 /clear 이전 대화 복귀"
tags: ["업데이트", "2026", "week26", "shell-mode", "mcp", "rewind", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-07-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a><br />
📦 릴리즈 범위: Claude Code v2.1.185 → v2.1.193
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ `!` 명령어 결과를 Claude가 자동으로 설명해줘요 💡

기존에는 `!` 프리픽스로 셸 명령을 실행하면 결과가 그냥 출력만 됐어요. 이제는 명령어 결과가 나오면 **Claude가 그 내용을 분석해서 바로 설명**해줘요.

```bash
# 테스트 실패 시 → Claude가 실패 원인 자동 설명
! npm test

# 빌드 오류 시 → 오류 메시지 자동 분석
! cargo build

# git 상태 확인 시 → 변경 내역 자동 요약
! git status
```

> 🍱 **비유로 설명하면**: 이전에는 주방에서 요리(명령어 실행)하고 나서 직접 맛을 봐야 했어요. 이제는 옆에 있는 셰프(Claude)가 맛을 보고 "소금이 좀 부족하고, 온도가 낮아서 5분 더 익혀야 해요"라고 바로 말해줘요.

**원래 동작으로 되돌리고 싶다면:**

```json
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ 자동 응답도 일반 프롬프트와 같은 비용이 청구돼요<br />
○ Bash 모드(<code>!</code>) 명령에 파일 경로 자동완성도 새로 추가됐어요
</div>

---

### 2️⃣ `claude mcp login` — 터미널에서 MCP 서버 인증 🔑

이전에는 MCP(Model Context Protocol) 서버를 연결하려면 세션 안에서 `/mcp` 메뉴를 사용해야 했어요. 이제는 **터미널(셸)에서 바로 인증**할 수 있어요.

```bash
# MCP 서버 인증 (브라우저 OAuth 흐름)
claude mcp login sentry

# 인증 해제
claude mcp logout sentry

# 특정 서버 없이 전체 로그인
claude mcp login
```

> 🍱 **비유로 설명하면**: 이전에는 가게 안에 들어가서 직접 계산대(메뉴)에서 처리해야 했어요. 이제는 가게 밖에서 전화로 미리 처리해두는 것과 같아요. 들어가면 이미 준비가 돼 있어요.

**어떻게 작동하나요?**
1. `claude mcp login <서버이름>` 실행
2. 터미널에 브라우저 링크가 나와요
3. 브라우저에서 OAuth 로그인 완료
4. 다음 Claude Code 세션부터 자동 연결

<div class="note-circle">
○ v2.1.186 이상에서 사용 가능<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/mcp#authenticate-from-the-command-line" target="_blank">MCP CLI 인증</a>
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `/rewind` 개선 | `/clear`로 대화를 지웠더라도 `/rewind`로 지우기 이전 대화로 돌아갈 수 있어요 |
| `sandbox.credentials` | 샌드박스 명령어가 자격증명 파일·시크릿 환경변수에 접근하는 것을 차단하는 새 설정 |
| 조직 모델 제한 | 관리자가 설정한 모델 제한이 모델 피커, `--model`, `/model`, 환경변수까지 모두 적용됨 |
| Background 에이전트 권한 | 백그라운드 서브에이전트의 권한 확인이 이제 메인 세션에 팝업으로 나타남. Esc는 해당 요청만 거부 |
| `/install-github-app` | GitHub App만 설치하고 Actions 워크플로우·시크릿 설정 단계 생략 가능 |
| 샌드박스 네트워크 허용 호스트 | 허용한 호스트가 세션 내내 기억돼 같은 연결마다 반복 확인 안 해도 됨 |
| 스트리밍 CPU 37% 절감 | 응답 스트리밍 시 CPU 사용량 대폭 감소 |
| 장기 세션 메모리 개선 | 터미널 출력 캐시로 인한 메모리 누수 감소 |
| `/review <pr>` 개선 | `/code-review medium`과 동일한 고품질 리뷰 엔진 적용 |
| OpenTelemetry 로그 | `claude_code.assistant_response` 이벤트 추가. 응답 텍스트 기록 비활성화: `OTEL_LOG_ASSISTANT_RESPONSES=0` |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ <code>/rewind</code>는 이제 <code>/clear</code>로 지운 내용도 복구할 수 있어요 — "앗, 잘못 지웠다!" 싶을 때 유용해요
</div>
