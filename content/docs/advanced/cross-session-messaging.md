---
title: "[공] 세션 간 메시징 — Claude Code 세션들이 서로 대화하는 방법"
description: "같은 기기의 여러 Claude Code 세션이 SendMessage/ListAgents로 서로 정보를 주고받는 방법. 병렬 개발 워크플로우 가이드"
tags: ["자동생성", "세션메시징", "SendMessage", "ListAgents", "병렬작업", "멀티에이전트", "고급기능"]
category: "advanced"
order: 11
lastUpdated: "2026-09-07"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
<br />★ W32(v2.1.224)에서 출시, W33에서 @멘션 기능 추가, W34에서 Windows 지원 추가
</div>

## 세션 간 메시징이란?

같은 기기에서 실행 중인 **여러 Claude Code 세션이 서로 메시지를 주고받는 기능**이에요.

> 🏢 **비유로 설명하면**: 한 사무실에 팀원 여럿이 각자 다른 업무를 처리하다가 관련 내용을 메모지에 써서 옆 책상에 전달하는 것과 같아요. 내 파일이나 대화 내용 전체가 아니라, **Claude가 쓴 짧은 메시지**만 전달돼요.

---

## 언제 유용한가요?

| 시나리오 | 설명 |
|---|---|
| **API 변경 전파** | API를 수정한 세션이 해당 API를 사용하는 다른 세션에 알림 |
| **빌드 결과 공유** | 빌드 세션이 완료되면 테스트 세션에 신호 전달 |
| **병렬 작업 조율** | 프론트엔드/백엔드를 각각 맡은 세션 간 인터페이스 조율 |
| **유휴 알림** | 한 세션 작업이 끝나면 다른 세션에 완료 통보 |

---

## 사용 방법

### 기본 — 자연어로 요청

```
# 세션 A에서
Tell the session working on the payments API that users.name is now users.display_name
```

Claude가 자동으로 `ListAgents`로 세션을 찾고 `SendMessage`로 전달해요.

### @멘션 방식 (v2.1.232+, W33)

```
# 세션 A에서 — @로 세션 이름 직접 멘션
@payments-api Tell it that users.name is now users.display_name
```

- 정확히 일치하는 이름이 하나면 확인 없이 바로 전달
- 여러 개 일치하면 선택 메뉴 표시

### 메시지 확인 방법

메시지를 받은 세션의 대화창에 `Message from` 행이 표시돼요:

```
Message from payments-api   [Ctrl+O 로 펼치기]
```

`Ctrl+O`를 눌러 메시지 전체를 펼쳐 볼 수 있어요.

### 현재 연결 가능한 세션 확인

```bash
/list-agents
# 또는
> which sessions can you reach?
```

---

## 유휴 알림 (notify_when_idle)

W34에서 추가된 기능으로, **한 세션이 유휴(idle) 상태가 되면 다른 세션에 한 번만 알림**을 보낼 수 있어요.

> ⏰ **비유로 설명하면**: "저 다 끝나면 전화해줘"라고 말하는 것처럼, 내 세션이 다른 세션의 작업 완료를 기다릴 때 유용해요.

```python
# Agent SDK / 세션에서
SendMessage(to="build-session", message="알림 부탁드립니다", notify_when_idle=True)
# → build-session이 유휴 상태가 되면 한 번 알림 전송
```

---

## 세션 이름 규칙

| 규칙 | 설명 |
|---|---|
| 고유 이름 보장 | 같은 이름이 이미 있으면 `name-word-word` 형식 변형 자동 적용 |
| 이름 변경 시 알림 | Claude Code가 이름 충돌로 변경했음을 알려줌 |

---

## 지원 플랫폼

| 플랫폼 | 지원 버전 |
|---|---|
| macOS | v2.1.224 (W32) |
| Linux | v2.1.224 (W32) |
| Windows | v2.1.234 (W34) |

---

## 실전 예시 — 병렬 개발 워크플로우

```bash
# 터미널 1: 프론트엔드 세션
claude --session frontend

# 터미널 2: 백엔드 세션  
claude --session backend
```

```
# 백엔드 세션에서 API 변경 시
> Tell the frontend session that /api/users now returns displayName instead of name
```

```
# 프론트엔드 세션에서 수신
Message from backend
"백엔드에서 /api/users 응답 필드가 name → displayName으로 변경됐어요."
```

---

## 알아두세요

- 메시지는 **텍스트만** — 파일, 코드, 대화 내용은 전달 안 됨
- 메시지를 받은 세션의 Claude는 **자동 처리하지 않음** — 사용자가 확인 후 판단
- `/code-review`나 `/claude-security` 같은 백그라운드 에이전트는 세션 목록에 별도 표시

---

## 📚 관련 문서

- [Cross-Session Messaging 공식 문서](https://code.claude.com/docs/en/cross-session-messaging)
- [Sub-Agents 가이드](https://code.claude.com/docs/en/sub-agents) — 세션 내부 서브에이전트
- [Agent View](https://code.claude.com/docs/en/agent-view) — 모든 세션 한 화면에서 관리
- [W32 업데이트](/docs/next/whats-new-w32-w34) — 세션 간 메시징 첫 출시
