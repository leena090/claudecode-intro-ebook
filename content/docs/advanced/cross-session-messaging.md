---
title: "[공] 크로스 세션 메시지 — 클로드 세션끼리 대화하기"
description: "Claude Code 세션들이 서로 메시지를 보낼 수 있어요. 한 세션이 다른 세션에게 변경 사항을 알리거나 정보를 전달하는 새로운 협업 방법을 안내합니다."
tags: ["자동생성", "크로스 세션", "cross-session", "멀티 세션", "ListAgents", "SendMessage", "2026-08"]
category: "advanced"
order: 29
lastUpdated: "2026-08-11"
---

<div class="note-star">
★ <strong>[공] 공식 문서</strong>: <a href="https://code.claude.com/docs/en/cross-session-messaging">cross-session-messaging</a> — v2.1.224 이상, <strong>macOS·Linux</strong>에서 동작<br />
★ 메시지는 Claude가 다른 세션에 보내는 <strong>텍스트</strong>예요. 대화 기록이나 파일이 공유되지 않아요.<br />
★ W32 (2026-08-03) 업데이트에서 추가됐어요.
</div>

## 크로스 세션 메시지가 뭔가요?

같은 컴퓨터에 열려 있는 **여러 Claude Code 세션이 서로 메시지를 주고받을 수 있는** 기능이에요. 한 세션에서 코드를 바꿨을 때 다른 세션에게 알려주거나, 작업을 조율할 수 있어요.

> 🍱 **비유로 설명하면**: 회사에서 두 팀이 각자 방에서 일하다가, "우리 팀이 데이터베이스 컬럼명 바꿨어요, 참고하세요!"라는 메모를 옆 팀 방문에 붙이는 거예요. 직접 가서 말하는 대신, Claude가 알아서 메모를 전달해줘요.

---

## 언제 쓰면 좋아요?

### ✅ 이럴 때 유용해요

```
상황 예시:
- 세션 A: payments API 작업 중
- 세션 B: users 모듈 작업 중
→ B에서 users.name을 users.display_name으로 바꿨을 때, A에게 알려주기
```

- **공유 변수·함수명이 바뀌었을 때** 다른 세션에 통보
- **병렬 작업 중 조율**이 필요할 때
- **큰 리팩토링**에서 여러 세션이 분업할 때

### ❌ 이런 상황과 달라요

- 파일이나 코드를 직접 공유하지 않아요 (메시지 텍스트만 전달)
- 이전 대화 기록도 공유되지 않아요
- 원격 컴퓨터의 세션과는 연결 안 됨 (같은 컴퓨터만)

---

## 사용 방법

### 방법 1: 자연어로 요청

```
> Tell the session working on the payments API that 
  users.name is now users.display_name
```

Claude가 알아서 `ListAgents`로 세션을 찾고 `SendMessage`로 전달해요.

### 방법 2: 세션 목록 먼저 확인

```bash
/list-agents
```

연결 가능한 세션 목록이 표시돼요. 이름을 확인한 뒤 메시지를 보낼 수 있어요.

---

## 메시지를 받으면?

메시지를 받은 세션에 **`Message from`** 줄이 나타나요.

```
Message from session-2  ▶  (클릭하거나 Ctrl+O로 펼치기)
```

`Ctrl+O`를 눌러 메시지 전체 내용을 확인하세요.

> 🍱 **비유**: 카카오톡 알림 배너처럼 새 메시지가 표시되고, 탭하면 전체 내용이 열려요.

---

## 어떻게 작동하나요?

Claude는 세션 간 통신을 위해 두 가지 내장 도구를 사용해요:

| 도구 | 역할 |
|---|---|
| `ListAgents` | 현재 연결 가능한 세션 목록 조회 |
| `SendMessage` | 특정 세션에 텍스트 메시지 전달 |

이 도구들은 Claude Code가 내부적으로 자동 활용해요. 내가 직접 호출할 필요는 없고, 자연어로 요청하면 됩니다.

---

## 실전 예시

### 예시 1: 변수명 변경 알림

```
# 세션 B에서 (users 모듈 작업 중)
> I changed users.name to users.display_name in the users module.
  Tell the payments session about this change.
```

### 예시 2: 공유 인터페이스 변경

```
# 세션 A에서 (API 설계 중)
> I finalized the /api/v2/orders endpoint format.
  Let all other sessions know the request body changed.
```

### 예시 3: 작업 완료 알림

```
# 세션 C에서 (DB 마이그레이션 작업 중)
> Database migration is complete.
  Tell the backend session it can now run tests.
```

---

## 제약사항

| 항목 | 내용 |
|---|---|
| **지원 OS** | macOS, Linux (Windows 미지원) |
| **필요 버전** | v2.1.224 이상 |
| **범위** | 같은 컴퓨터에서 실행 중인 세션만 |
| **전달 내용** | 텍스트 메시지만 (파일·대화기록 제외) |
| **자동 실행** | Claude가 판단해서 자율적으로 메시지를 보낼 수 있음 |

---

## 에이전트 SDK에서의 활용

Claude Code를 에이전트로 빌드할 때도 `ListAgents`와 `SendMessage`를 직접 활용할 수 있어요. 멀티 에이전트 워크플로우에서 세션 간 조율을 자동화할 때 유용합니다.

---

## 더 알아보기

- [공식 문서 — 크로스 세션 메시지](https://code.claude.com/docs/en/cross-session-messaging)
- [에이전트 팀](/docs/advanced/agent-teams) — 여러 세션을 협업시키는 다른 방법
- [W32 업데이트 노트](/docs/next/whats-new-w30-w32) — 이번 주 다른 기능들
