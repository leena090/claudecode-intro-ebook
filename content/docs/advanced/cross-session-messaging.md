---
title: "[공] 세션 간 메시징 — 여러 Claude Code 세션이 서로 대화하게 하기"
description: "ListAgents·SendMessage로 여러 Claude Code 세션이 서로 메시지를 주고받는 방법. 멀티 세션 개발 워크플로우의 새 패러다임"
tags: ["자동생성", "세션메시징", "cross-session", "ListAgents", "SendMessage", "멀티세션", "협업"]
category: "advanced"
order: 27
lastUpdated: "2026-08-26"
---

<div class="note-star">
★ <strong>공식 문서</strong> — <a href="https://code.claude.com/docs/en/cross-session-messaging">cross-session-messaging</a> (2026-08-03 신규) <code>[공]</code>
<br />★ <strong>필요 버전</strong> — Claude Code v2.1.224 이상, macOS·Linux (Windows는 v2.1.234 이상)
<br />★ <strong>2026-08-26 자동 감지</strong> — docs-watch 루틴이 신규 URL을 감지해 작성한 글이에요.
</div>

## 세션 간 메시징이 뭔가요?

여러 터미널에 열려 있는 **Claude Code 세션들이 서로에게 메시지를 보낼 수 있는** 기능이에요.

예를 들어 터미널 A에서 프론트엔드를 수정하다가 **API 컬럼 이름이 바뀌었다**는 걸 발견했을 때, 직접 터미널 B를 열지 않고도 세션 A에서 "세션 B한테 알려줘"라고 하면 돼요.

> 🍱 **비유로 설명하면**: 여러 팀이 같은 건물의 다른 층에서 일하고 있어요. 이전엔 직접 찾아가거나 전화해야 했는데, 이제 내부 메신저가 생겨서 "3층 결제팀한테 컬럼 이름 바뀌었다고 전해줘"라고 하면 자동으로 전달돼요.

---

## 어떻게 쓰나요?

### 기본 사용법 — 자연어로

```
# 터미널 A에서
Tell the session working on the payments API that users.name is now users.display_name
```

→ 클로드가 `ListAgents`로 현재 실행 중인 다른 세션들을 찾고, `SendMessage`로 메시지를 전달해요.

### `@멘션` 방식 (W33 추가)

```
# @ 기호로 세션을 직접 지목
@payments-api users.name이 users.display_name으로 변경됐어. 반영해줘.
```

- 이름이 딱 하나 매칭되면 바로 전달
- 여러 개 매칭되면 확인 요청

### 수신 측에서 확인

메시지를 받은 세션에는 `Message from` 행이 표시돼요:
- 기본적으로 접힌 상태
- **`Ctrl+O`**로 펼쳐서 내용 확인

---

## 연결 가능한 세션 목록 보기

```
> /list-agents
```

현재 같은 머신에서 실행 중인 Claude Code 세션들의 목록이 나와요.

세션 이름은 **자동으로 고유하게** 관리돼요:
- 같은 이름의 세션이 이미 있으면 `세션명-word-word` 형태로 변형
- 이름이 충돌하면 알림을 줘요

---

## 실전 활용 시나리오

### 시나리오 1: DB 스키마 변경 알림

```
# 프론트엔드 세션에서
Tell all other sessions that the users table no longer has a 'name' column,
it's now split into 'first_name' and 'last_name'
```

API 세션, 테스트 세션 등 다른 세션들이 자동으로 내용을 전달받아요.

### 시나리오 2: 세션이 끝났을 때 알림 받기

다른 세션이 작업을 끝내면 알림을 받고 싶을 때:

```
# SendMessage에 notify_when_idle 옵션 사용
# (공식 도구 호출로 클로드가 자동 처리)
```

→ 상대 세션이 idle 상태가 되면 한 번 알려줘요.

### 시나리오 3: 팀 멀티 에이전트

```
# 조율 세션에서
@frontend-session 버튼 컴포넌트 만들어줘
@backend-session 그에 맞는 API 엔드포인트 만들어줘
두 세션이 완료되면 나한테 알려줘
```

---

## 보안 원칙

- **메시지는 텍스트만** — 대화 기록이나 파일이 전달되지 않아요
- **텍스트 내용만 이동** — 코드나 민감 정보를 의도치 않게 전송하려면 직접 확인 필요
- **로컬 머신 내부만** — 다른 컴퓨터의 세션에는 메시지를 보낼 수 없어요

---

## 플랫폼 지원 현황

| 플랫폼 | 지원 여부 | 필요 버전 |
|---|---|---|
| macOS | ✅ | v2.1.224+ |
| Linux | ✅ | v2.1.224+ |
| **Windows** | ✅ (W34 추가) | v2.1.234+ |

---

## 한 줄 정리

> **세션 간 메시징 = 여러 Claude 창이 서로 소통하는 내부 메신저**
> 
> 멀티 세션으로 큰 프로젝트를 나눠 작업할 때, 한 세션의 변경 사항을 다른 세션에 손쉽게 전달할 수 있어요. 인간이 직접 복사·붙여넣기 할 필요가 줄어들어요.
