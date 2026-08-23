---
title: "[공] 세션 간 메시지 — 클로드끼리 대화하게 하기"
description: "여러 Claude Code 세션이 서로 메시지를 주고받는 기능. /list-agents로 세션 목록 확인, SendMessage로 전달, @멘션으로 지정 가능"
tags: ["자동생성", "cross-session", "세션메시지", "ListAgents", "SendMessage", "멀티세션", "에이전트"]
category: "advanced"
order: 27
lastUpdated: "2026-08-23"
---

<div class="note-star">
★ <strong>[공] 2026-07~08 신기능</strong> — <strong>세션 간 메시지(Cross-session messaging)</strong>가 공식 출시됐어요.<br />
macOS·Linux: v2.1.224+, Windows: v2.1.234+. 별도 설정 없이 자동 활성화됩니다.<br />
출처: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
</div>

## 세션 간 메시지가 뭔가요?

지금까지 Claude Code 창을 두 개 열면, 각각 따로따로 일했어요. 왼쪽 클로드가 코드를 바꿔도 오른쪽 클로드는 몰랐죠. 이제 **클로드끼리 직접 메시지를 주고받을 수 있어요.**

> 🏢 **비유로 설명하면**: 같은 회사에 다니는 두 팀이 각자 일하다가, 한 팀이 "우리 API 스펙 바뀌었어요!"라고 사내 메신저로 알려주는 것과 같아요. 사람이 중간에서 copy-paste 할 필요가 없어요.

클로드는 **두 가지 도구**를 써요:
- `ListAgents` — 지금 열려 있는 세션 목록 확인
- `SendMessage` — 특정 세션에게 메시지 전달

---

## 어떻게 쓰나요?

### 방법 1: 그냥 말하기

```text
결제 API를 담당하는 세션에게 마이그레이션이 끝났다고 알려줘
```

클로드가 알아서 `ListAgents`로 세션 목록을 찾고, `SendMessage`로 보내요.

### 방법 2: @멘션으로 직접 지정 (v2.1.232+)

`@` 뒤에 세션 이름 앞 글자를 타이핑하면 자동완성이 뜹니다:

```text
@api-worker 에게 스키마 마이그레이션 완료됐다고 알려줘
```

### 방법 3: 다른 세션이 끝나면 알림 받기 (v2.1.236+)

```text
마이그레이션 세션 작업이 끝나면 나한테 알려줘
```

클로드가 `notify_when_idle`을 설정해두면, 그 세션이 유휴 상태가 될 때 한 번 알림이 와요.

---

## 세션 목록 확인하기

```bash
/list-agents
# 또는
/peers
```

출력 예시:

```
이 세션: my-frontend-session
─────────────────────────────
로컬 세션:
  api-worker     ~/projects/api
  db-migration   ~/projects/db
  test-runner    ~/projects/api

클라우드 세션:
  cloud-debug-session (claude.ai)
```

---

## 어디에 쓰면 좋나요?

| 상황 | 활용법 |
|------|--------|
| 병렬 작업 조율 | A 세션이 코드 바꿨다는 사실을 B 세션에 전달 |
| 장시간 작업 모니터링 | "마이그레이션 끝나면 알려줘" 등록 |
| 서로 다른 Worktree 작업 | 각 브랜치 세션끼리 결과 공유 |
| 폰·웹에서 컴퓨터 세션 확인 | Remote Control 연결 시 클라우드↔로컬 메시지 가능 |

> 🎯 **핵심 포인트**: 메시지는 **텍스트만** 전달돼요. 대화 히스토리나 파일은 이동하지 않아요. 큰 맥락을 공유하려면 `세션 재개`를 쓰세요.

---

## 메시지가 전달되는 경로

| 상대방 위치 | 전달 방법 |
|-------------|-----------|
| 같은 컴퓨터 | Unix 소켓(Mac/Linux) 또는 Named Pipe(Windows) — Anthropic 서버 안 거침 |
| 다른 컴퓨터 | Remote Control 통해 Anthropic 서버 경유 |
| claude.ai/code 세션 | Anthropic 서버 경유, 클라우드 세션으로 직접 전달 |

---

## 수신 제어 설정

```json
// ~/.claude/settings.json
{
  "crossSessionInbound": "accept"  // 기본값: 자동 판단
  // "hold"   — 내가 승인해야 전달
  // "refuse" — 수신 차단
}
```

또는 `/config` → **Messages from your other sessions** 메뉴에서 변경 가능해요.

---

## 주의사항

<div class="note-star">
⚠️ <strong>이건 다른 기능과 달라요</strong><br />
• <strong>에이전트 팀(Agent Teams)</strong>: 클로드가 직접 생성·관리하는 서브에이전트 팀 (다른 기능)<br />
• <strong>Agent View</strong>: 여러 세션을 한 화면에서 보는 대시보드 (감시용)<br />
• <strong>Remote Control</strong>: 폰이나 다른 기기에서 내 세션 조종 (다른 기능)<br />
세션 간 메시지는 <strong>내가 직접 여러 터미널에서 열어 놓은 독립 세션들이 서로 소통</strong>하는 기능이에요.
</div>

---

## 버전 요구사항

| 기능 | 최소 버전 |
|------|-----------|
| 기본 세션 간 메시지 (Mac/Linux) | v2.1.224 |
| 기본 세션 간 메시지 (Windows) | v2.1.234 |
| @멘션으로 세션 지정 | v2.1.232 |
| 유휴 알림(`notify_when_idle`) | v2.1.236 |
| 팀원 세션도 `/list-agents`에 표시 | v2.1.239 |

```bash
# 버전 확인
claude --version
```

---

## 관련 기능

- 📋 [에이전트 팀(Agent Teams)](./agent-teams.md) — 클로드가 스스로 서브에이전트를 만드는 방식
- 👁️ [Agent View](./agent-view.md) — 여러 세션 한눈에 보기
- 📱 [Remote Control](./remote-control.md) — 폰에서 세션 접속
- 🌿 [Worktrees](./worktrees.md) — 브랜치별 독립 작업공간
