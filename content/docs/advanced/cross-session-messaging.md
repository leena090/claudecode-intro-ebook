---
title: "[공] 세션 간 메시지 — 클로드 세션들이 서로 대화한다"
description: "Claude Code 세션들이 ListAgents·SendMessage 도구로 서로 메시지를 보낼 수 있어요. @ 멘션으로도 가능하고, 세션이 쉬어갈 때 알림도 받을 수 있어요"
tags: ["자동생성", "cross-session messaging", "세션 간 메시지", "ListAgents", "SendMessage", "멀티세션", "고급"]
category: "advanced"
order: 27
lastUpdated: "2026-08-25"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a><br />
★ <strong>[공]</strong> 릴리스 노트: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 (Aug 3–7, 2026)</a>
</div>

## 세션 간 메시지가 뭔가요?

같은 컴퓨터에서 열려 있는 **여러 Claude Code 세션이 서로 문자 메시지를 주고받을 수 있는 기능**이에요.

> 🍱 **비유로 설명하면**: 회사에서 팀원 A가 한 일이 팀원 B 업무에 영향을 줄 때, 카카오톡으로 "야, 이거 바꿨어" 하고 알려주는 것처럼요. 클로드 세션들도 이제 그렇게 소통해요.

---

## 어떨 때 유용한가요?

| 상황 | 활용법 |
|---|---|
| 한 세션에서 공통 함수 이름을 바꿨을 때 | 다른 세션에 "함수 이름 바꼈어" 알림 |
| A 세션이 API를 수정하고 B 세션이 그 API를 쓸 때 | B 세션에 변경 사항 전달 |
| 긴 작업이 끝났을 때 다른 세션에 "다 됐어" 알리기 | 세션 완료 알림 |

---

## 사용 방법

### 방법 1: 자연어로 부탁하기

```text
# A 세션에서
Tell the session working on the payments API that users.name is now users.display_name
```

클로드가 자동으로 `ListAgents`로 세션을 찾고 `SendMessage`로 메시지를 보내요.

---

### 방법 2: @ 멘션으로 직접 지정

세션 이름을 정확히 알면 @ 로 바로 지정할 수 있어요.

```text
@payments-api users.name이 users.display_name으로 바뀌었어
```

세션 이름이 정확히 하나만 일치하면 확인 단계 없이 바로 전달돼요.

---

### 방법 3: 열린 세션 목록 확인

```bash
/list-agents
```

현재 내 컴퓨터에서 Claude가 접근 가능한 세션 목록을 보여줘요.

---

## 세션이 쉬어갈 때 알림 받기

A 세션이 작업을 마치면 B 세션에 알림을 보내도록 설정할 수 있어요.

```text
# B 세션에서 A 세션이 완료되면 알려달라고 요청
A 세션이 다 끝나면 알려줘
```

> 🍱 **비유로 설명하면**: "친구가 과제 다 끝내면 연락해줘" 하는 것처럼, 한 세션이 완료될 때 다른 세션에게 알려줘요.

---

## 중요한 특징

| 항목 | 내용 |
|---|---|
| **전달 내용** | 텍스트 메시지만 (대화 내용, 파일 전달 안 됨) |
| **지원 OS** | macOS, Linux (Windows는 W34부터 지원) |
| **필요 버전** | v2.1.224 이상 |
| **세션 이름 중복** | 중복 시 `이름-단어-단어` 형식으로 자동 변경 |

<div class="note-star">
★ 세션 간 메시지는 텍스트만 전달돼요. 파일 내용이나 대화 기록은 공유되지 않아요. 보안상 안전한 구조예요.
</div>

---

## 세션 이름 관리

세션 이름을 잘 정해두면 @ 멘션이 훨씬 편해요.

```text
# 현재 세션 이름 설정
/session-name payments-api

# 다른 세션에서
@payments-api 이 엔드포인트 응답 형식이 바꼈어
```

같은 이름의 세션이 이미 있으면 `payments-api-blue-moon` 처럼 단어가 자동으로 붙어요.

---

## 관련 기능

- [에이전트 뷰 (Agent View)](./agent-view) — 실행 중인 모든 세션 한 화면으로 보기
- [Dynamic Workflows](./dynamic-workflows) — 서브에이전트를 대규모로 병렬 실행
- [W30~W34 업데이트 총정리](../next/whats-new-w30-w34) — 이 기능이 포함된 업데이트 묶음
