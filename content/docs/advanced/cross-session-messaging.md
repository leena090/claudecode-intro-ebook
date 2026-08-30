---
title: "[공] 세션 간 메시징 — Claude 세션들이 서로 대화해요"
description: "Claude Code 세션들이 SendMessage와 ListAgents로 서로 메시지를 주고받아요. 한 세션의 변경이 다른 세션에 자동 전달되고, @멘션으로 직접 지명도 가능"
tags: ["자동생성", "세션간메시징", "cross-session", "SendMessage", "ListAgents", "멀티세션", "advanced"]
category: "advanced"
order: 28
lastUpdated: "2026-08-30"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
<br />★ <strong>[공]</strong> W32 발표 (Aug 3–7, 2026): macOS/Linux 지원 · v2.1.224 이상 필요
<br />★ W34에서 <strong>Windows</strong>도 지원 추가됨
</div>

## 세션 간 메시징이란?

**세션 간 메시징**(Cross-session Messaging, 크로스 세션 메시징)은 **같은 컴퓨터에서 실행 중인 여러 Claude Code 세션이 서로 메시지를 주고받는** 기능이에요.

> 🍱 **비유로 설명하면**: 옆 자리 개발자한테 "야, users.name이 users.display_name으로 바뀌었어. 니 쪽 결제 API도 고쳐줘!"라고 포스트잇 붙이는 것처럼, **Claude 세션들끼리 메모를 주고받아요**.

---

## 어떻게 작동하나요?

Claude는 두 가지 도구를 사용해요:

| 도구 | 역할 |
|---|---|
| `ListAgents` | 같은 컴퓨터의 다른 세션 목록 조회 |
| `SendMessage` | 특정 세션에 메시지 전송 |

메시지를 받은 세션은 프롬프트 창에 **Message from** 행이 표시돼요.  
`Ctrl+O`를 눌러 메시지 내용을 펼쳐볼 수 있어요.

<div class="note-star">
★ 메시지는 Claude가 작성한 텍스트만 전달돼요 — <strong>대화 기록이나 파일은 절대 전달 안 돼요</strong>.
</div>

---

## 사용하는 방법

### 방법 1: 자연어로 요청

프롬프트에서 다른 세션에게 메시지를 전달해 달라고 부탁하면 돼요:

```text
> Tell the session working on the payments API that users.name is now users.display_name
```

Claude가 알아서 `ListAgents`로 다른 세션을 찾고, `SendMessage`로 전달해요.

### 방법 2: @멘션으로 직접 지명 (W33 추가)

프롬프트에서 `@` 뒤에 세션 이름을 입력하면 직접 지명할 수 있어요:

```text
> @payments-api-session users.name이 users.display_name으로 변경됐어. 업데이트해줘.
```

같은 이름의 세션이 정확히 하나라면 확인 없이 바로 전달돼요.

### 방법 3: 세션 목록 확인

```bash
# 연결 가능한 세션 목록 보기
/list-agents
```

### 방법 4: 유휴 알림 요청 (W34 추가)

다른 세션이 작업을 마치면(유휴 상태가 되면) 알림을 받을 수 있어요:

```text
> Wait for the test-runner session to finish, then give me a summary
```

`SendMessage`의 `notify_when_idle` 옵션으로 유휴 상태 감지를 설정해요.

---

## 세션 이름 충돌 방지 (W33)

같은 컴퓨터에서 같은 이름의 세션이 둘 이상 생기면, Claude Code가 자동으로 `name-word-word` 형태의 변형된 이름을 붙여줘요.

```
# 예시
main-session        ← 먼저 실행된 세션
main-session-blue-fox ← 이름 충돌로 자동 변형
```

---

## 지원 환경

| 환경 | 지원 여부 |
|---|---|
| macOS | ✅ (v2.1.224~) |
| Linux | ✅ (v2.1.224~) |
| Windows (네이티브) | ✅ (W34부터) |
| WSL2 | ✅ |
| 클라우드 세션 간 | ❌ (같은 기기 내에서만) |

---

## 실전 활용 예시

### 예시 1: 프론트엔드-백엔드 동시 작업

```
세션 A (프론트엔드):
"백엔드 API 응답 구조가 { data: ... } 에서 { result: ... } 로 바뀌었어.
 백엔드 세션한테 알려줘."

세션 B (백엔드):
[Message from 세션A: API 응답 구조 변경 알림]
→ 자동으로 관련 코드를 업데이트
```

### 예시 2: 테스트 완료 후 다음 세션 트리거

```
세션 A (테스트 실행자):
"테스트 다 끝났어요. 배포 세션한테 알려줘."

세션 B (배포 담당):
[Message from 테스트: 모든 테스트 통과. 배포 가능]
→ 배포 프로세스 시작
```

---

## 요약

| 항목 | 내용 |
|---|---|
| **출시** | W32, 2026년 8월 3일 |
| **지원 플랫폼** | macOS, Linux (v2.1.224~), Windows (W34~) |
| **도구** | `ListAgents` + `SendMessage` |
| **@멘션** | W33부터 지원 |
| **전달 내용** | 텍스트 메시지만 (대화·파일 없음) |
| **출처** | [공식 발표 기준] code.claude.com/docs |
