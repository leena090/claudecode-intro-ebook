---
title: "[공] 세션 간 메시지 전송 — 여러 Claude Code 세션이 대화한다"
description: "같은 PC에 열린 여러 Claude Code 세션이 서로 메시지를 주고받는 Cross-session Messaging 기능 — ListAgents, SendMessage, @ 멘션 완전 정리"
tags: ["고급", "cross-session", "세션", "멀티에이전트", "SendMessage", "ListAgents", "자동생성"]
category: "advanced"
order: 11
lastUpdated: "2026-08-31"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 공식 문서 <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>를 바탕으로 합니다.
<br />★ Claude Code <strong>v2.1.224 이상</strong>, <strong>macOS/Linux</strong> (Windows는 v2.1.234 이상)에서 사용 가능합니다.
<br />★ W32 (2026-08-03~07) 주간 업데이트에서 소개된 기능입니다.
</div>

## 세션 간 메시지 전송이 뭔가요?

같은 PC에서 동시에 열어놓은 **여러 Claude Code 세션이 서로 메시지를 주고받는** 기능이에요.

> 🍱 **비유로 설명하면**: 여러분이 회사에서 여러 팀원에게 동시에 각기 다른 업무를 시켰다고 해봐요. 그동안 팀원들은 각자 할 일만 묵묵히 했는데, 이제는 **팀원 A가 팀원 B한테 "우리 쪽 설계가 바뀌었으니 참고해"라고 메모를 남길 수 있어요.** 클로드 세션이 바로 그 팀원들이에요.

---

## 어떤 상황에서 유용한가요?

| 상황 | 예시 |
|---|---|
| **서로 연관된 작업** | API 서버 세션이 클라이언트 세션에 "DB 스키마 바뀌었어" 알림 |
| **분리된 작업 조율** | 결제 모듈 세션이 유저 모듈 세션에 "users.name이 display_name으로 변경됨" 전달 |
| **진행 상황 공유** | 빌드 세션이 테스트 세션에 "배포 완료, 이제 테스트해" 신호 |
| **유휴 감지** | 한 세션이 다른 세션이 작업 완료될 때까지 기다렸다가 이어서 진행 |

---

## 기본 사용법

### 방법 1: 자연어로 요청하기

```text
# 세션1에서
payments API 작업 중인 세션한테 users.name이 users.display_name으로 변경됐다고 알려줘
```

클로드가 자동으로 `ListAgents`로 세션을 찾고 `SendMessage`로 전달해요.

### 방법 2: @ 멘션으로 직접 지정

```text
@payments-session users.name → users.display_name 변경됐어
```

세션 이름이 정확히 하나만 매칭되면 확인 단계 없이 바로 전송돼요.

### 현재 활성 세션 목록 보기

```text
/list-agents
```

메시지를 받을 수 있는 세션 이름 목록이 나와요.

---

## 메시지 받기

메시지를 받은 세션에는 대화창에 **"Message from"** 행이 표시돼요.

```
Message from backend-session [펼치기]
```

**`Ctrl+O`** 를 눌러 내용을 확인할 수 있어요.

---

## 세션 유휴 감지 — 다른 세션이 끝날 때 알림

한 세션이 다른 세션의 작업이 끝날 때를 기다려야 할 때도 있죠. **`notify_when_idle`** 옵션으로 해결할 수 있어요.

> 🍱 **비유로 설명하면**: "저 먼저 일 끝나면 카톡 해줘, 그때 다음 단계 시작할게"와 같아요.

이 기능은 Claude Code가 `SendMessage` 도구에서 `notify_when_idle` 파라미터를 사용해 요청해요 (내부적으로 자동 처리).

---

## 세션 이름 — 고유하게 유지돼요

같은 PC에서 동일한 이름의 세션이 생기면, Claude Code가 자동으로 `이름-단어-단어` 형식의 변형 이름을 만들어줘요.

```text
# 이미 "backend"라는 세션이 있으면
# 새 세션은 "backend-quick-fox" 같은 이름으로 만들어짐
```

이 덕분에 @ 멘션이 항상 명확하게 동작해요.

---

## 주의 사항

| 항목 | 내용 |
|---|---|
| **전달되는 것** | 클로드가 작성한 텍스트 메시지만 |
| **전달 안 되는 것** | 대화 내역, 파일, 코드 |
| **지원 OS** | macOS, Linux (v2.1.224+), Windows (v2.1.234+) |
| **클라우드 세션** | 원격(클라우드) 세션에 메시지를 보낼 수는 있지만, 클라우드 세션이 다시 메시지를 보내오진 않아요 |

---

## 실전 활용 팁

### 팁 1: 두 세션이 함께 일하는 패턴

```text
# 세션A (백엔드 작업 중)
세션A에서: "좋아, 이제 users 테이블 스키마 변경 완료. frontend 세션한테 API 응답 형식 바뀌었다고 알려줘"
→ 자동으로 frontend 세션에 메시지 전달

# 세션B (프론트엔드)
# "Message from backend-session" 알림 확인 후 즉시 대응
```

### 팁 2: 여러 작업 조율

```text
# 조율 세션에서
배포 세션이 완료될 때까지 기다렸다가, 완료되면 테스트 세션에 시작 신호 보내줘
```

---

<div class="note-star">
★ 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
<br />★ 관련 도구: <a href="https://code.claude.com/docs/en/tools-reference">code.claude.com/docs/en/tools-reference</a> (SendMessage, ListAgents)
</div>
