---
title: "[공] 세션 간 메시지 전달 — 두 개의 Claude가 서로 대화하기"
description: "같은 컴퓨터에서 열린 여러 Claude Code 세션이 서로 메시지를 주고받을 수 있어요. ListAgents·SendMessage 도구와 /list-agents 명령어로 세션 간 협업이 가능해요."
tags: ["자동생성", "고급", "cross-session", "세션간통신", "ListAgents", "SendMessage", "2026", "week32"]
category: "advanced"
order: 28
lastUpdated: "2026-08-19"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026년 8월 3~7일 (Week 32), Claude Code v2.1.224 이상. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/cross-session-messaging" target="_blank">공식 문서: code.claude.com/docs/en/cross-session-messaging</a><br />
✅ macOS·Linux 지원 (이 버전 기준)
</div>

## 세션 간 메시지 전달이 뭔가요?

같은 컴퓨터(macOS·Linux)에서 여러 Claude Code 세션을 동시에 열었을 때, **한 세션이 다른 세션에게 메시지를 보낼 수 있는 기능**이에요.

> 📞 **비유로 설명하면**:
> 회사에서 팀장이 두 부서에 각각 지시를 내리고 있다고 상상해봐요.
> 1번 부서(세션 A)가 API 구조를 바꿨어요.
> 그러면 팀장이 "1번이 API 바꿨으니까 2번도 알아야 해"라고 하면,
> 1번이 내선 전화로 2번에게 직접 알려줄 수 있어요.
>
> 이게 세션 간 메시지 전달이에요. Claude가 스스로 판단하거나, 여러분이 요청해서 다른 세션에 중요한 정보를 전달해요.

---

## 왜 유용한가요?

여러 세션을 동시에 띄워두고 **병렬로 작업**할 때 특히 유용해요.

**예시 상황:**
- 세션 A: 결제(payments) API 백엔드 개발 중
- 세션 B: 프론트엔드 UI 개발 중
- 세션 A에서 `users.name`을 `users.display_name`으로 변경
- 세션 A가 세션 B에게 자동으로 알림 → 세션 B가 맞춰서 수정

---

## 어떻게 쓰나요?

### 기본 사용법

```text
# 세션 A에서 이렇게 물어보면 돼요
> Tell the session working on the payments API that users.name is now users.display_name
```

Claude가 알아서 다른 세션을 찾고 메시지를 전달해요.

### 연결 가능한 세션 목록 보기

```text
/list-agents
```

현재 같은 컴퓨터에서 실행 중인 세션 목록이 나와요.

### 메시지 받기

다른 세션에서 메시지가 오면:
1. 대화창에 **`Message from`** 행이 나타나요
2. **`Ctrl+O`** 를 눌러 메시지 내용을 펼쳐볼 수 있어요

---

## 기술적으로 어떻게 작동하나요?

Claude가 내부적으로 두 가지 도구를 사용해요:

| 도구 | 역할 |
|---|---|
| `ListAgents` | 현재 실행 중인 세션 목록 조회 |
| `SendMessage` | 특정 세션에 텍스트 메시지 전달 |

**메시지는 텍스트만이에요.** 대화 기록이나 파일이 다른 세션으로 넘어가지 않아요. Claude가 다른 세션을 위해 직접 작성한 텍스트만 전달돼요.

---

## 언제 Claude가 스스로 메시지를 보내나요?

Claude가 두 가지 상황에서 자동으로 다른 세션에 메시지를 보낼 수 있어요:

1. **여러분이 요청할 때** — "저쪽 세션에 알려줘"라고 하면 보내요
2. **Claude 스스로 판단할 때** — 한 세션의 변경이 다른 세션에 영향을 준다고 판단하면 자동으로 알려요

---

## 필요 조건

| 항목 | 요구 사항 |
|---|---|
| Claude Code 버전 | **v2.1.224 이상** |
| 운영체제 | macOS 또는 Linux |
| 세션 위치 | 같은 컴퓨터에서 실행 중이어야 함 |

---

## 실제 활용 시나리오

### 🔗 마이크로서비스 협업
```
세션 A: auth-service 작업 중
세션 B: user-service 작업 중

> [세션 A에서] Tell the user-service session that JWT payload now includes 'role' field
```

### 🧪 테스트 자동화
```
세션 A: 새 기능 구현 중
세션 B: 테스트 코드 작성 중

> [세션 A에서] Let the testing session know the API endpoint changed from /api/v1/users to /api/v2/users
```

### 🔄 데이터베이스 스키마 변경 전파
```
세션 A: 데이터베이스 마이그레이션 작업 중
세션 B: 백엔드 서비스 코드 작업 중

> [세션 A에서] Inform the backend session that the 'created_at' column type changed from INT to TIMESTAMP
```

---

## 주의할 점

- **같은 컴퓨터에서만** 작동해요 — 네트워크를 통한 원격 세션 간 통신은 아직 미지원
- 메시지는 **텍스트 전용** — 파일·대화 기록은 공유되지 않아요
- **자동 메시지는 Claude의 판단**에 따라 발생해요 — 항상 메시지를 보내는 건 아니에요

---

> 📌 **관련 기능**: [W30·W32 업데이트 요약](/docs/next/whats-new-w30-w32) | [Dynamic Workflows](/docs/advanced/dynamic-workflows) | [에이전트 팀](/docs/advanced/agent-teams)
