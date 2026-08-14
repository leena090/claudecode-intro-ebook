---
title: "[공] 세션 간 메시지 전달 — Claude Code 세션들이 서로 대화해요"
description: "여러 Claude Code 세션이 서로 메시지를 주고받는 Cross-Session Messaging 기능 (v2.1.224, macOS·Linux)"
tags: ["자동생성", "크로스세션", "세션메시지", "멀티세션", "협업", "ListAgents", "SendMessage"]
category: "advanced"
order: 28
lastUpdated: "2026-08-14"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a> [공]<br />
★ W32 (2026-08-03~07) 출시 — Claude Code <strong>v2.1.224 이상</strong> 필요<br />
★ macOS·Linux 지원 (Windows 미지원)
</div>

## 세션 간 메시지 전달이 뭔가요?

**열려 있는 여러 Claude Code 세션이 서로 메시지를 주고받을 수 있는 기능**이에요.

> 👥 **비유로 설명하면**: 회사에서 여러 팀원이 각자 다른 방에서 개발하다가, 한 팀원이 공통 API를 변경하면 "저, 방금 users.name을 users.display_name으로 바꿨어요!" 하고 다른 방 팀원들에게 쪽지를 보내는 것처럼요. Claude가 이 '팀원' 역할을 여러 세션에서 동시에 하는 거예요.

---

## 어떻게 작동하나요?

Claude Code는 두 가지 내장 도구를 사용해요:

| 도구 | 역할 |
|------|------|
| `ListAgents` | 현재 접근 가능한 다른 세션 목록 확인 |
| `SendMessage` | 특정 세션에 텍스트 메시지 전달 |

메시지는 **텍스트만** 전달돼요 — 대화 기록이나 파일은 공유되지 않아요.

---

## 어떻게 쓰나요?

### 현재 세션 목록 확인

```text
> /list-agents
```

같은 기기에서 열려 있는 Claude Code 세션 목록을 보여줘요.

### 다른 세션에 메시지 보내기

자연어로 Claude에게 부탁하면 돼요:

```text
> Tell the session working on the payments API that users.name is now users.display_name
```

Claude가 알아서 `ListAgents`로 대상 세션을 찾고 `SendMessage`로 전달합니다.

### 메시지 받기

다른 세션에서 메시지가 오면 `Message from` 행이 표시돼요. `Ctrl+O`를 눌러 내용을 펼쳐볼 수 있어요.

---

## 어떤 상황에 유용한가요?

| 상황 | 활용 예시 |
|------|----------|
| 공통 코드 변경 알림 | "A 파일에서 함수 이름이 바뀌었어요, B 세션도 업데이트 필요" |
| 작업 조율 | "나는 프론트엔드 완료했어요, 백엔드 세션은 API 테스트 시작하세요" |
| 진행 상황 공유 | "빌드 완료, 이제 테스트 세션 시작해도 됩니다" |
| 병렬 작업 동기화 | 여러 세션이 각자 다른 모듈을 개발하다가 합칠 때 |

---

## 사용 조건

| 항목 | 내용 |
|------|------|
| 최소 버전 | Claude Code **v2.1.224 이상** |
| 지원 OS | macOS, Linux |
| 메시지 형식 | 텍스트만 (대화 기록·파일 공유 불가) |
| 자동 메시지 | Claude가 자체 판단으로도 메시지 보낼 수 있음 |

---

## 주의할 점

- 메시지는 Claude가 **다른 세션을 위해 작성한 텍스트**예요. 내 대화 내용이나 파일이 그대로 공유되지 않아요.
- Claude가 **스스로 판단**해서 메시지를 보낼 수도 있어요 (예: A 세션 변경이 B 세션에 영향을 미친다고 판단할 때).
- 같은 기기에서 열린 세션끼리만 통신 가능해요.

---

## 관련 기능

- **Agent View(에이전트 뷰)**: 모든 세션을 한 화면에서 관리 → [에이전트 뷰](./agent-view.md) 참조
- **Sub-agents(서브에이전트)**: 한 세션 안에서 여러 에이전트 실행 → [에이전트 병렬 실행](./agents-parallel.md) 참조
