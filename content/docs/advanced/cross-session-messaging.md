---
title: "[공] 세션 간 메시지 — Claude 세션들이 서로 대화한다"
description: "내가 열어 둔 여러 Claude Code 세션이 서로 메시지를 주고받아 협업할 수 있어요. Claude Code v2.1.224부터 macOS·Linux에서 사용 가능"
tags: ["자동생성", "세션간메시지", "cross-session", "ListAgents", "SendMessage", "멀티세션", "협업"]
category: "advanced"
order: 27
lastUpdated: "2026-08-13"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/cross-session-messaging">공식 Cross-session messaging 문서</a>와 <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 What's New</a>를 한국어로 정리한 것입니다.
<br />★ Claude Code <strong>v2.1.224 이상</strong>, macOS 또는 Linux에서만 사용 가능합니다.
<br />★ <strong>지원 안 되는 환경</strong>: Amazon Bedrock, Google Cloud, Microsoft Foundry, Windows(네이티브).
</div>

## 세션 간 메시지가 뭔가요?

내가 열어 둔 여러 Claude Code 터미널 세션이 **서로 메시지를 주고받을 수 있는 기능**이에요.

> 🍱 **비유로 설명하면**: 큰 건물 공사에서 전기팀·배관팀·인테리어팀이 각자 다른 층에서 일하다가, "2층 전기 공사 끝났어요, 배관팀 올라오셔도 됩니다"라고 무전을 치는 것과 같아요. Claude도 한 세션에서 작업하다가 "이 변경이 다른 세션에 영향 줘" 싶으면 스스로 알림을 보낼 수 있어요.

메시지는 **텍스트만** 전달돼요. 대화 기록이나 파일은 절대 공유되지 않아요.

---

## 어떤 상황에서 쓸까요?

### ✅ 이럴 때 유용해요

| 상황 | 설명 |
|---|---|
| **DB 스키마 변경 알림** | "방금 `users.name`을 `users.display_name`으로 바꿨어. 결제 세션에도 알려줘" |
| **병렬 작업 조율** | 프론트엔드 세션·백엔드 세션이 각각 일하다가 "API 엔드포인트 확정됐어" 공유 |
| **장시간 작업 상황 체크** | "마이그레이션 완료됐는지 다른 세션한테 물어봐줘" |
| **다른 기기 세션에 전달** | Remote Control 연결 시 내 노트북 세션 → 데스크톱 세션으로 메시지 |

### ❌ 다른 기능을 쓰세요

| 목적 | 쓸 기능 |
|---|---|
| 대화 이어가기 | [세션 재개](/docs/en/sessions#resume-a-session) |
| Claude가 직접 조율하는 팀 | [에이전트 팀](/docs/advanced/agent-teams) |
| 여러 세션 한 화면 관리 | [에이전트 뷰](/docs/advanced/agent-view) |
| 폰으로 세션 조종 | [리모트 컨트롤](/docs/advanced/remote-control) |

---

## 어떻게 쓰나요?

### 1. 연결 가능한 세션 목록 보기

```bash
/list-agents
# 또는 단축 명령어
/peers
```

같은 기기에서 열린 세션, Remote Control로 연결된 다른 기기의 세션, 클라우드 세션(웹) 목록이 나타나요.

### 2. 다른 세션에 메시지 보내기

Claude에게 말로 부탁하면 돼요. 명령어가 따로 없어요:

```text
# 다른 세션에 변경 사항 알리기
> payments API 작업 중인 세션에 users.name이 users.display_name으로 바뀌었다고 알려줘

# 내용은 Claude가 알아서 작성해요 (직접 지정할 필요 없어요)
> 우리가 방금 한 작업을 다른 세션에 요약해서 보내줘
```

메시지를 **받은 세션**에서는:
- `Message from <세션이름>` 형태로 표시돼요
- `Ctrl+O`를 눌러 내용을 펼쳐볼 수 있어요

### 3. 세션 이름 설정 (선택)

```bash
# 세션에 이름 붙이기 (더 찾기 쉬워져요)
/rename backend-api

# 또는 실행 시 이름 지정
claude --name frontend-work
```

이름을 안 붙이면 폴더 이름 기반으로 자동 설정돼요 (예: `myapp-3f`).

---

## 메시지가 전달되는 방식

| 전달 경로 | 서버 경유 여부 |
|---|---|
| **같은 기기 세션끼리** | ❌ Anthropic 서버 통하지 않음 (내 컴퓨터 소켓으로 직접) |
| **다른 기기 세션** | ✅ Anthropic 서버 경유 (Remote Control 연결 필요) |
| **클라우드(웹) 세션** | ✅ Anthropic 서버 경유 |

> 🔒 **보안**: 같은 기기 내 전달은 내 컴퓨터 안에서만 이뤄져요. 외부로 나가지 않아요.

---

## 메시지 수신 제어

### 받을 수 있는 메시지 종류 설정

```json
// ~/.claude/settings.json
{
  "crossSessionInbound": "accept"    // 모든 메시지 수신 (기본값처럼 동작)
  // "hold"    // 메시지를 보류하고 내가 승인 시 전달
  // "refuse"  // 모든 메시지 거부
}
```

> 📌 기본적으로 "같은 권한 모드" 세션에서 온 메시지는 자동 수락, 다른 권한 모드 세션에서 오면 승인 요청이 떠요.

### 다른 기기로 가는 메시지 승인 필수화

```json
{
  "isolatePeerMachines": true    // 다른 기기로 나가는 메시지는 내 승인 필요
}
```

### 메시지 완전 차단

```json
{
  "crossSessionInbound": "refuse",
  "permissions": {
    "deny": ["SendMessage", "ListAgents"]
  }
}
```

---

## 안전 규칙 — 메시지로 할 수 없는 것들

다른 세션에서 온 메시지는 이런 것들을 **할 수 없어요**:

| 불가능한 것 | 이유 |
|---|---|
| 권한 승인 | 메시지는 내 동의 대신이 될 수 없어요 |
| 설정 변경 | CLAUDE.md, 권한 설정 등 변경 불가 |
| 명령어 실행 | `/compact` 같은 명령어는 텍스트로만 도착, 실행 안 돼요 |

---

## 자주 하는 실수

### "/list-agents가 인식이 안 돼요"
→ Claude Code 버전이 v2.1.224 미만이에요. 업데이트하세요:
```bash
npm install -g @anthropic-ai/claude-code@latest
```

### "메시지를 보냈는데 안 나타나요"
다음을 확인하세요:
1. **권한 모드**: 수신 세션이 메시지를 보류/거부 설정했는지 (`crossSessionInbound`)
2. **Remote Control**: 다른 기기 세션은 Remote Control 연결이 필요해요
3. **클라우드 세션**: Remote Control 연결 중일 때만 목록에 나타나요

---

## 실전 예시 시나리오

### 시나리오 1: 프론트·백엔드 병렬 개발

```text
터미널 1 (백엔드):
> getUserProfile API를 완성했어. 프론트엔드 작업 중인 세션에 
  엔드포인트 경로와 응답 형식 알려줘
  
↓ Claude가 자동으로 터미널 2에 메시지 전송 ↓

터미널 2 (프론트엔드):
[Message from backend-api]
getUserProfile 완성: GET /api/v2/users/:id
Response: {id, displayName, email, avatarUrl}
```

### 시나리오 2: 마이그레이션 완료 알림

```text
터미널 1 (마이그레이션 세션):
(마이그레이션 완료 후 자동으로)
> 마이그레이션 완료 — 메인 세션에 알려줘

↓

터미널 2 (메인 작업 세션):
[Message from migration-worker]
DB 마이그레이션 완료. 신규 컬럼: tenant_id
메인 브랜치 리베이스 해도 안전합니다
```

---

## 관련 문서

- 📄 [공식 cross-session-messaging 문서](https://code.claude.com/docs/en/cross-session-messaging)
- 🤝 [에이전트 팀](/docs/advanced/agent-teams) — Claude가 직접 조율하는 멀티에이전트
- 👁️ [에이전트 뷰](/docs/advanced/agent-view) — 여러 세션을 한 화면에서 관리
- 📱 [리모트 컨트롤](/docs/advanced/remote-control) — 다른 기기에서 세션 조종

---

## 다음 단계

- **[W30+W32 주간 업데이트](/docs/next/whats-new-w30-w32)** — 같은 주에 나온 다른 기능들
- **[에이전트 팀](/docs/advanced/agent-teams)** — 세션 간 메시지 vs 에이전트 팀 차이 이해
- **[권한 모드](/docs/advanced/permission-modes)** — 오토 모드와 메시지 수신의 관계
