---
title: "[공] 세션 간 메시지 — 두 클로드가 대화하는 법"
description: "같은 컴퓨터에서 열린 Claude Code 세션들이 서로 메시지를 주고받는 Cross-session Messaging 기능 완전 가이드"
tags: ["자동생성", "고급", "cross-session-messaging", "세션", "ListAgents", "SendMessage", "협업", "멀티세션"]
category: "advanced"
order: 27
lastUpdated: "2026-09-01"
---

<div class="note-star">

★ **출처** — 공식 문서 [Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging) `[공식]`  
★ **도입 버전** — v2.1.224 (2026-08-07, W32)  
★ **지원 환경** — macOS, Linux (W32+), Windows (W34+)

</div>

---

## 이게 뭔가요?

> 🏢 **비유**: 같은 회사 건물의 두 팀이 각자 업무를 보다가 필요할 때 메신저로 "3층 팀, 우리가 방금 `users.name`을 `users.display_name`으로 바꿨어요. 참고해줘요" 하고 알려주는 것과 같아요.

**Cross-session Messaging**은 **같은 컴퓨터에서 실행 중인 Claude Code 세션들이 서로 메시지를 주고받는** 기능이에요.

- 세션 A에서 작업하다가 → 세션 B에게 변경 사항을 알릴 수 있어요
- 클로드가 필요하다고 판단하면 스스로 다른 세션에 메시지를 보내기도 해요
- 전송되는 건 **텍스트 메시지만** — 대화 기록이나 파일은 공유되지 않아요

---

## 어떻게 사용하나요?

### 방법 1: 자연어로 요청하기

가장 쉬운 방법이에요. 클로드에게 자연스럽게 말하면 됩니다.

```text
# 세션 A (결제 서버 작업 중)에서
Tell the session working on the payments API that users.name is now users.display_name
```

클로드가 `ListAgents`로 다른 세션을 찾아보고, 적절한 세션에 `SendMessage`로 메시지를 전달해요.

---

### 방법 2: @ 멘션으로 직접 지정 (W33+)

세션 이름을 직접 알고 있다면 `@` 멘션으로 보낼 수 있어요.

```text
@payments-session users.name이 users.display_name으로 변경됐어, 확인해줘
```

- 정확히 일치하는 세션이 하나면 바로 전달 (확인 단계 없음)
- 여러 개 일치하면 어느 세션에 보낼지 선택

---

### 방법 3: 클로드가 알아서 판단

클로드가 작업 중 다른 세션에 영향을 주는 변경을 감지하면 **자율적으로** 메시지를 보낼 수도 있어요.

---

## 연결 가능한 세션 확인하기

```text
> /list-agents
```

현재 같은 컴퓨터에서 열린, 메시지를 받을 수 있는 세션 목록이 표시돼요.

---

## 메시지 받으면 어떻게 되나요?

1. 세션 대화록에 **`Message from [세션이름]`** 행이 추가돼요
2. **`Ctrl+O`** 를 눌러 내용을 펼쳐볼 수 있어요
3. 메시지를 읽은 클로드가 자신의 작업에 반영하거나 사용자에게 알려줘요

---

## 유휴 알림 (W34 추가)

다른 세션이 유휴 상태(입력 대기)가 되면 한 번 알림을 받을 수 있어요.

```text
# 세션 A에서: 세션 B가 다음에 유휴 상태가 될 때 알려줘
# (SendMessage 도구의 notify_when_idle 옵션으로 동작)
```

---

## 세션 이름 관리

같은 컴퓨터에서 세션 이름이 중복되면 Claude Code가 자동으로 `이름-단어-단어` 형태의 변형 이름을 붙이고 알려줘요.

> ℹ️ **예시**: `main-session`이 이미 있으면 새 세션은 `main-session-blue-fish` 같은 이름을 받을 수 있어요.

---

## 주의사항

| 항목 | 내용 |
|---|---|
| 공유되는 것 | 텍스트 메시지만 |
| 공유 안 되는 것 | 대화 기록, 열린 파일, 환경 변수 |
| 지원 환경 | macOS, Linux (v2.1.224+), Windows (v2.1.234+) |
| 활성화 조건 | 같은 컴퓨터에서 동시에 실행 중인 세션끼리만 |

---

## 실전 활용 예시

### 예시 1: 공유 데이터 모델 변경 알리기

프론트엔드 작업 세션과 백엔드 작업 세션이 동시에 열려 있을 때:

```text
# 백엔드 세션에서
Tell the frontend session that the User type now has a displayName field instead of name
```

### 예시 2: 빌드 완료 알림

```text
# 빌드 세션에서
When the build finishes, send a message to the testing session to start the integration tests
```

### 예시 3: 공유 설정 파일 변경 알리기

```text
# 설정 작업 세션에서
Let all other sessions know that the API base URL has changed to https://api-v2.example.com
```

---

*공식 출처: [Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging) — 공식 발표 기준*
