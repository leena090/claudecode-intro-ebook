---
title: "[공] 세션 간 메시지 전달 — Claude가 다른 Claude에게 쪽지를 보내요"
description: "같은 컴퓨터에서 실행 중인 Claude Code 세션들이 서로 메시지를 주고받는 Cross-session Messaging 기능을 알아봐요."
tags: ["자동생성", "cross-session", "세션 메시지", "멀티에이전트", "ListAgents", "SendMessage", "2026"]
category: "advanced"
order: 28
lastUpdated: "2026-11-01"
---

<div class="note-star">
★ <strong>[공] 공식 문서</strong> — code.claude.com/docs/en/cross-session-messaging.md 기반이에요.<br />
★ v2.1.224 이상, macOS·Linux 지원 (2026-08-03 출시)
</div>

## Cross-session Messaging이란?

같은 컴퓨터에서 실행 중인 Claude Code 세션들이 **서로 텍스트 메시지를 주고받는** 기능이에요.

> 🍱 **비유로 설명하면**: 같은 사무실 안의 두 직원이 사내 메신저로 쪽지를 보내는 것과 같아요. "결제 API 팀에 알려줘 — `users.name`이 `users.display_name`으로 이름이 바뀌었다고." Claude A가 이 말을 듣고, Claude B에게 메시지를 보내요.

---

## 어떻게 작동하나요?

Claude는 두 가지 내장 도구를 사용해요:

| 도구 | 용도 |
|------|------|
| `ListAgents` | 현재 연결된 세션(에이전트) 목록 조회 |
| `SendMessage` | 특정 세션에 메시지 전송 |

### 메시지 전송 예시

```text
/* 세션 A에서 입력 */
Tell the session working on the payments API that users.name is now users.display_name
```

Claude가 `ListAgents`로 현재 연결된 세션을 찾고, `SendMessage`로 메시지를 보내요.

### 수신하는 쪽에서

세션 B의 대화창에 `Message from [세션 이름]` 행이 나타나요.
`Ctrl+O`를 누르면 메시지 내용을 펼쳐볼 수 있어요.

---

## 현재 세션 목록 보기

```text
> /list-agents
```

연결된 세션 이름, 현재 작업 중인 내용, 마지막 활동 시간 등이 표시돼요.

---

## 실제 활용 시나리오

### 시나리오 1: 공유 라이브러리 변경 알림

```
세션 A (공유 라이브러리 작업):
"방금 shared/auth.ts의 토큰 형식을 바꿨어. 
 API 세션이랑 프론트엔드 세션에 알려줘."

→ 세션 B (API): "shared/auth.ts 토큰 형식 바뀜" 알림 수신
→ 세션 C (프론트엔드): 동일 알림 수신
```

### 시나리오 2: 작업 조율

```
세션 A (오케스트레이터):
"DB 마이그레이션 세션이 완료됐는지 확인하고,
 완료됐으면 테스트 세션에게 테스트 시작하라고 알려줘."
```

### 시나리오 3: 에러 보고

```
세션 B (테스트 실행 중):
"빌드 세션에 알려줘 — payments/checkout.ts 라인 247에서 
 타입 에러 발생함."
```

---

## 주의사항

| 항목 | 설명 |
|------|------|
| 전송 내용 | 텍스트 메시지만 (대화 기록·파일 전송 ❌) |
| 자동 발동 | Claude가 "관련 세션에 영향을 줄 것 같다"고 판단하면 자율적으로 메시지 전송 가능 |
| 보안 | 같은 머신 내 세션만 가능 (원격 세션 ❌) |
| 버전 요구사항 | v2.1.224 이상 |

---

## Projects와의 차이

| 기능 | Cross-session Messaging | Projects |
|------|------------------------|---------|
| 목적 | 세션 간 실시간 소통 | 관련 세션 그룹화·감독 |
| 방향 | Claude → Claude | 사용자 → 여러 세션 |
| 지속성 | 메시지는 일시적 | 그룹 구조 영구 보존 |

---

## 관련 글

- [Agent Teams — 협력 에이전트](/docs/advanced/agent-teams)
- [Projects 기능](/docs/next/claude-projects)
- [Agent View 사용법](/docs/advanced/agent-view)
