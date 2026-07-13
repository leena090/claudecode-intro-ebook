---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "MCP 서버 CLI 로그인, ! 명령어 실행 후 자동 AI 분석, /rewind로 /clear 이전 대화 복원"
tags: ["업데이트", "2026", "week26", "mcp-login", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-07-13"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ `claude mcp login` — MCP 서버를 터미널에서 바로 로그인 🔑

이제 MCP 서버에 로그인할 때 Claude Code 세션을 열지 않아도 돼요.

```bash
# 터미널에서 바로 로그인
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

> 🍱 **비유**: 카카오톡 앱을 열지 않고도 터미널에서 "카카오 로그인"이 되는 것과 같아요. 세션 없이 바로 인증할 수 있어요.

**이전 방법 vs 새 방법:**

| 방법 | 단계 |
|---|---|
| 이전 | Claude Code 실행 → `/mcp` 메뉴 열기 → 서버 선택 → 로그인 |
| 신규 | `claude mcp login 서버이름` 한 줄로 완료 |

<div class="note-circle">
○ v2.1.186 이상에서 사용 가능해요<br />
○ OAuth 인증 흐름을 터미널에서 바로 실행해요<br />
○ <code>claude mcp logout</code>으로 저장된 인증 정보를 삭제할 수 있어요
</div>

---

### 2️⃣ `!` 셸 명령어 실행 후 자동 AI 분석 🤖

`!` 접두사로 셸 명령어를 실행하면 이제 **Claude가 출력 결과를 자동으로 분석해줘요**.

```text
> ! npm test
```

이 한 줄만 입력하면:
1. `npm test` 실행
2. 테스트 결과가 대화에 추가됨
3. Claude가 결과를 분석하고 실패 원인을 설명해줘요

> 🍱 **비유**: 요리사(Claude)에게 "냄비 상태 확인해봐"라고 했더니, 확인하고 나서 "지금 너무 센 불이라 10분 후에 끓어넘칠 것 같아요"라고 바로 설명해주는 것과 같아요. 그냥 상태만 보여주고 끝내지 않아요.

**이전 방법 vs 새 방법:**

| 상황 | 이전 | 신규 |
|---|---|---|
| 테스트 실패 원인 파악 | `! npm test` → 실패 메시지 복사 → "이게 왜 실패해?" 별도 질문 | `! npm test` 하나로 실행·분석 완료 |

**자동 분석을 끄고 싶다면:**

```json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ v2.1.186 이상에서 사용 가능해요<br />
○ 분석 비용은 일반 프롬프트와 동일해요<br />
○ <code>respondToBashCommands: false</code>로 이전 동작으로 돌아갈 수 있어요
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `/rewind` 강화 | `/clear` 실행 이전의 대화를 복원할 수 있어요 |
| `sandbox.credentials` | 샌드박스 명령어가 자격증명 파일·비밀 환경변수를 읽지 못하게 차단 |
| 조직 모델 제한 적용 범위 확대 | 모델 선택기, `--model`, `/model`, `ANTHROPIC_MODEL` 전체에 적용 |
| `autoMode.classifyAllShell` | 모든 Bash·PowerShell 명령어를 Auto mode 분류기로 검토 |
| 백그라운드 서브에이전트 권한 알림 | 서브에이전트가 권한을 요청할 때 메인 세션에 팝업으로 표시 |
| 네트워크 host 기억 | 샌드박스에서 허용한 호스트를 세션 동안 기억 (매번 재확인 없음) |
| 스트리밍 CPU 37% 절감 | 응답 스트리밍 처리 시 CPU 사용량 대폭 감소 |
| `/review <PR번호>` 개선 | `/code-review medium`과 같은 엔진 사용 (더 정확한 리뷰) |
| `!` 명령어 파일 자동완성 | Bash 모드에서 `!` 명령어 입력 시 파일 경로 자동완성 |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ 날짜 범위: 2026년 6월 22일 ~ 26일
</div>
