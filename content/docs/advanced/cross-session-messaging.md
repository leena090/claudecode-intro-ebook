---
title: "[공] 세션 간 메시지 — 내 Claude들이 서로 소통한다"
description: "같은 머신의 Claude Code 세션끼리 메시지를 주고받는 Cross-session Messaging 기능 (v2.1.224~, macOS·Linux·Windows)"
tags: ["자동생성", "세션간메시지", "멀티세션", "ListAgents", "SendMessage", "협업"]
category: "advanced"
order: 11
lastUpdated: "2026-08-27"
---

<div class="note-star">
★ <strong>[공]</strong> W32 릴리즈 노트: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a> (Aug 3-7, 2026)<br />
★ W34에서 Windows 지원 추가: <a href="https://code.claude.com/docs/en/whats-new/2026-w34">whats-new/2026-w34</a><br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
</div>

## 세션 간 메시지가 뭔가요?

**세션 간 메시지(Cross-session Messaging)**는 같은 컴퓨터에서 열린 여러 Claude Code 세션이 **서로 메시지를 주고받는** 기능이에요. 한 세션의 Claude가 다른 세션의 Claude에게 중요한 변경 사항을 알려주거나, 도움을 요청할 수 있습니다.

> 📬 **비유로 설명하면**: 여러 개의 공사 현장(세션)에서 각각 일하는 인부(Claude)들이 인터폰으로 "1층 공사가 끝났으니 2층 공사 시작해"라고 서로 알려주는 것이에요.

---

## 어떤 상황에서 유용한가요?

| 상황 | 활용 예시 |
|---|---|
| 동시에 여러 기능 개발 중 | "프론트엔드 세션에 API 응답 형식이 바뀌었다고 알려줘" |
| 공유 타입/인터페이스 변경 | "users.name이 users.display_name으로 바뀌었어" |
| 한 세션 작업 완료 후 알림 | "인증 모듈 완성됐으니 결제 세션에서 import해서 써" |
| 세션 유휴 상태 확인 | "다른 세션이 쉬는 때 알려줘" |

---

## 기본 사용법

### 현재 세션 목록 확인

```
/list-agents
```

같은 머신에서 실행 중인 Claude Code 세션 목록이 표시돼요.

### 다른 세션에 메시지 보내기 (자연어)

```
payments API 세션에게 users.name이 users.display_name으로 바뀌었다고 알려줘
```

Claude가 자동으로 `ListAgents` 도구로 세션을 찾고 `SendMessage`로 메시지를 전달해요.

### @ 멘션으로 직접 지정 (W33~)

```
@payments-session auth 모듈 완성됐어, 이제 import 가능해
```

정확히 하나의 세션 이름과 일치하면 확인 없이 바로 전달돼요.

---

## 유휴 상태 알림 받기 (W34~)

다른 세션이 작업을 마치고 쉬는 상태가 되면 알림을 받을 수 있어요:

```
다른 세션 작업 끝나면 나한테 알려줘
```

Claude가 `SendMessage`의 `notify_when_idle` 옵션을 사용해 한 번만 알림을 보냅니다.

---

## 지원 범위

| 항목 | 내용 |
|---|---|
| **지원 OS** | macOS, Linux (v2.1.224~), **Windows 네이티브** (v2.1.234~) |
| **메시지 내용** | Claude가 쓰는 텍스트 메시지 (대화 기록·파일은 전달 안 됨) |
| **세션 이름 중복** | 이름이 겹치면 자동으로 `name-word-word` 형태로 변형 |

---

## 기술적으로 어떻게 동작하나요?

Claude Code는 두 가지 내장 도구를 활용해요:

| 도구 | 역할 |
|---|---|
| `ListAgents` | 현재 같은 머신에서 접근 가능한 세션 목록 조회 |
| `SendMessage` | 특정 세션에 텍스트 메시지 전송 |

메시지를 받은 세션에는 **"Message from"** 행이 표시돼요. `Ctrl+O`를 누르면 전체 내용을 펼쳐볼 수 있습니다.

---

## 주의사항

- 메시지는 **텍스트**만 전달돼요 (파일, 코드, 대화 기록은 전달되지 않음)
- 같은 머신에서 실행 중인 세션만 서로 찾을 수 있어요
- 원격 세션(클라우드)이나 다른 PC의 세션과는 직접 메시지 불가

---

## 요약

> 💡 여러 Claude Code 세션을 동시에 열고 병렬로 작업하는 분께 특히 유용해요. 한 세션에서 완료한 작업을 다른 세션에 "알림"으로 전달해서 긴 설명 없이도 서로 연동할 수 있습니다.
