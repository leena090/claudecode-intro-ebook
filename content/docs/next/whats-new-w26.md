---
title: "[공] Claude Code 주간 업데이트 — 2026년 26주차 (6/22 ~ 6/26)"
description: "claude mcp login으로 MCP 셸 인증, ! 접두사로 명령어 결과 자동 분석, /rewind로 /clear 이전으로 되돌아가기"
tags: ["자동생성", "주간업데이트", "whats-new", "2026-w26", "mcp", "shell", "rewind", "clear"]
category: "next"
order: 13
lastUpdated: "2026-07-03"
---

<div class="note-star">
★ <strong>출처</strong> — Claude Code 공식 주간 업데이트 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">Week 26</a> <code>[공]</code><br />
★ <strong>대상 버전</strong> — v2.1.185 → v2.1.193 (2026년 6월 22일 ~ 26일)<br />
★ <strong>주요 테마</strong> — MCP 인증 간소화 + 셸 명령어 자동 분석 + 대화 되돌리기
</div>

---

## 이번 주 한 줄 요약

> "명령어를 실행했더니 Claude가 바로 분석해줬어요 — 질문을 따로 안 해도 됐어요."

---

## 1️⃣ `claude mcp login` — 셸에서 MCP 서버 인증 (v2.1.186) 🔐

### 이게 뭔가요?

기존에는 MCP 서버에 로그인하려면 Claude Code 세션을 열고 `/mcp` 메뉴를 통해 인증해야 했어요. 이제 **터미널에서 바로** 한 줄 명령으로 OAuth 인증을 처리할 수 있어요.

> 🍱 **비유**: 회사 내부 시스템에 접속하려면 사내 로비에 가서 직접 카드를 찍어야 했는데, 이제 현관 앞에서 핸드폰 앱으로 바로 열리는 것과 같아요.

### 사용 방법

```bash
# MCP 서버 인증 (OAuth 흐름 실행)
claude mcp login sentry

# 인증 해제
claude mcp logout sentry
```

**특징:**
- `claude mcp login <이름>` — 설정된 MCP 서버의 OAuth 흐름을 셸에서 직접 실행
- `claude mcp logout <이름>` — 저장된 자격증명 삭제
- 세션을 열지 않아도 인증 완료 가능 → CI/CD, 스크립트 환경에 유용

<div class="note-circle">
○ 서버 이름은 <code>settings.json</code>에 등록된 MCP 서버 이름을 사용해요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/mcp#authenticate-from-the-command-line" target="_blank">MCP 커맨드라인 인증</a>
</div>

---

## 2️⃣ `!` 접두사로 명령어 실행 후 자동 분석 (v2.1.186) 🤖

### 이게 뭔가요?

셸 모드에서 `!` 뒤에 명령어를 실행하면, Claude가 **그 명령어 결과를 보고 자동으로 분석·설명**을 해줘요. 추가 질문을 안 해도 돼요.

> 🍱 **비유**: 혈액검사 결과지를 받았더니 의사가 따로 물어보지 않아도 "여기서 이 수치가 높네요, 이렇게 하세요" 하고 바로 설명해주는 것과 같아요.

### 사용 방법

```text
> ! npm test
```

이 명령어를 실행하면:
1. `npm test` 명령이 실행됨
2. 출력 결과가 맥락에 추가됨
3. Claude가 **자동으로** 실패 원인 설명 + 해결책 제안

### 비교

| 방식 | 동작 |
|---|---|
| `! npm test` (기본) | 실행 결과를 Claude가 자동 분석 |
| `respondToBashCommands: false` 설정 시 | 결과만 맥락에 추가, 분석 없음 |

<div class="note-circle">
○ 일반 Claude 프롬프트와 같은 비용이 소모돼요<br />
○ 자동 분석이 불필요하다면 settings.json에서 <code>respondToBashCommands: false</code>로 끌 수 있어요<br />
○ <code>!</code> 명령어 입력 시 파일 경로 자동완성도 지원돼요
</div>

---

## 3️⃣ `/rewind` — `/clear` 이전으로 되돌아가기 (업그레이드) ⏪

### 이게 뭔가요?

`/rewind`는 대화 이력을 이전 시점으로 되감는 명령어예요. 이번 업데이트로 **`/clear`로 대화를 지운 이전 상태로도** 되돌아갈 수 있게 됐어요.

> 🍱 **비유**: 파일을 실수로 삭제했을 때 휴지통에서 복원하는 것처럼, `/clear`로 지운 대화도 이제 복원할 수 있어요.

```text
> /rewind
(대화 목록이 나타나면 /clear 이전 지점 선택)
```

<div class="note-circle">
○ 이전에는 <code>/rewind</code>가 <code>/clear</code> 이전 시점까지는 돌아가지 못했어요 — 이번에 업그레이드됐어요
</div>

---

## 기타 개선사항

| 항목 | 내용 |
|---|---|
| `sandbox.credentials` | 샌드박스 명령어가 자격증명 파일·시크릿 환경변수를 읽지 못하게 차단하는 새 설정 |
| 조직 모델 제한 | 관리자가 허용한 모델만 선택 가능 — 모델 피커, `--model`, `/model`, `ANTHROPIC_MODEL` 전부 적용 |
| `autoMode.classifyAllShell` | Auto mode에서 모든 Bash·PowerShell 명령을 분류기로 라우팅하는 설정 추가 |
| 서브에이전트 권한 프롬프트 | 백그라운드 서브에이전트의 권한 요청이 메인 세션에 표시됨 (이전엔 자동 거부) |
| `/install-github-app` 유연성 | Actions 워크플로·시크릿 설정 스킵하고 GitHub App만 설치 가능 |
| 네트워크 기억 | 샌드박스에서 허용한 호스트가 세션 동안 기억돼 재승인 불필요 |
| 스트리밍 CPU 37% 절감 | 응답 스트리밍 시 CPU 사용량 대폭 감소 |
| `/review <pr>` 개선 | 이제 `/code-review medium`과 같은 리뷰 엔진 사용 |

<div class="note-circle">
○ Week 26 범위: Claude Code v2.1.185 ~ v2.1.193<br />
○ <code>!</code> 자동 분석은 이미 사용 중인 사용자는 opt-out이 필요할 수 있으니 확인하세요
</div>
