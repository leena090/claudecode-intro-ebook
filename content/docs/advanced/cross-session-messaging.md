---
title: "[공] 세션 간 메시징 — 내 여러 터미널이 서로 대화해요"
description: "Claude Code v2.1.224부터, 서로 다른 터미널 세션의 클로드가 직접 메시지를 주고받을 수 있어요. 병렬 작업 조율이 훨씬 쉬워졌어요"
tags: ["자동생성", "세션", "멀티세션", "메시징", "병렬작업", "cross-session"]
category: "advanced"
order: 51
lastUpdated: "2026-08-18"
---

<div class="note-star">
★ <strong>[공] 출처</strong>: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">Week 32</a>
<br />★ 필요 버전: <strong>Claude Code v2.1.224 이상</strong>
<br />★ 지원 OS: macOS, Linux (WSL2 포함). Windows 네이티브 미지원.
<br />★ 미지원 제공자: Amazon Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform, Microsoft Foundry
</div>

## 세션 간 메시징이 뭔가요?

내가 터미널 창을 여러 개 열어서 **서로 다른 작업**을 동시에 진행할 때, 한 세션의 클로드가 다른 세션의 클로드에게 **메시지를 직접 보낼 수 있어요**.

> 🍱 **비유로 설명하면**: 공사 현장에서 배선팀과 도장팀이 각자 다른 방에서 작업하다가, 배선팀이 "205호 전기 공사 끝났으니 이제 도장해도 돼요!"라고 카카오톡으로 알려주는 것과 같아요. 클로드가 사람 대신 그 연락을 자동으로 해주는 거죠.

---

## 언제 쓰면 좋나요?

| 상황 | 활용 |
|------|------|
| 한 세션이 API 스키마 변경 | 다른 세션(프론트엔드 작업 중)에게 알림 |
| 마이그레이션 세션 진행 중 | 현재 상태를 내가 보고 있는 세션으로 보고 |
| 여러 기능을 병렬로 개발 | 공통 파일 충돌 전에 미리 조율 |
| 다른 기기의 세션 | 집 PC → 회사 노트북으로 작업 상황 전달 |

**이럴 때는 다른 기능을 쓰세요**:
- 하나의 대화를 다른 터미널에서 이어가고 싶다 → `/resume` (세션 재개)
- 여러 에이전트를 클로드가 직접 관리 → Agent Teams
- 내 세션들을 한 화면에서 모니터링 → Agent View
- 폰에서 세션 조종 → Remote Control

---

## 기본 사용법

### 다른 세션에 메시지 보내기

내가 직접 지시하지 않아도, 클로드가 스스로 알아서 보낼 수도 있어요. 하지만 직접 시킬 수도 있죠:

```text
# 이렇게 말하면 됩니다
Tell the session working on the payments API that users.name is now users.display_name
```

```text
# 특정 세션에 상황 전달
Explain what we just did to the session working on the payments API
```

```text
# @멘션으로 특정 세션 지정 (v2.1.232+)
Let @api-worker know the schema migration finished
```

### 내 세션 목록 확인

```bash
> /list-agents
# 또는
> /peers
```

→ 현재 접근 가능한 세션 목록과 이름이 나와요.

---

## 메시지 전달 방식

| 상대 세션 위치 | 전달 경로 |
|--------------|-----------|
| 같은 컴퓨터 | 📱 직접 소켓 연결 (서버 무경유) |
| 다른 컴퓨터의 내 세션 | 🌐 Anthropic 서버 경유 (Remote Control 필요) |
| Claude Code on the web | 🌐 Anthropic 서버 경유 |

> 💡 **같은 컴퓨터 간 메시지는 Anthropic 서버를 거치지 않아요**. 내 컴퓨터 안에서만 오가는 거예요.

---

## 메시지 수신 설정

내 세션이 다른 세션의 메시지를 어떻게 처리할지 설정할 수 있어요:

```json
// ~/.claude/settings.json
{
  "crossSessionInbound": "accept"  // accept, hold, refuse 중 선택
}
```

| 값 | 동작 |
|----|------|
| `accept` | 다른 세션 메시지를 즉시 클로드에게 전달 |
| `hold` | 내가 승인할 때까지 보류 |
| `refuse` | 메시지 거부 (수신 안 함) |

또는 `/config` 명령으로 UI에서 설정:
```bash
> /config
# "Messages from your other sessions" 항목에서 선택
```

---

## 보안 규칙 — 중요!

받은 메시지가 할 수 있는 것과 없는 것:

| 할 수 있는 것 | 할 수 없는 것 |
|-------------|-------------|
| 정보 전달 | 내 권한 승인 대신하기 |
| 작업 요청 | 설정 파일 변경 지시 |
| 상태 보고 | 명령어 직접 실행(`/compact` 등) |

> 📝 **핵심**: 다른 세션의 메시지가 "이거 승인해줘"라고 해도 그 메시지 자체가 승인이 되지는 않아요. 권한 설정은 항상 내가 직접 해요.

---

## 컴퓨터간 격리 설정

다른 컴퓨터로 메시지가 나가기 전에 내 승인을 받으려면:

```json
// ~/.claude/settings.json
{
  "isolatePeerMachines": true
}
```

---

## 끄고 싶을 때

```json
// 받기 차단
{ "crossSessionInbound": "refuse" }

// 보내기·목록 차단 (deny rules)
{
  "permissions": {
    "deny": ["SendMessage", "ListAgents"]
  }
}
```

---

## ⚠️ 주의사항

- **메시지 내용은 텍스트만** — 대화 기록·파일은 전달 안 됨
- **컨테이너 격리** — Docker 컨테이너 안 세션과 호스트 세션은 서로 접근 불가
- **메시지 루프 방지** — 같은 메시지 반복 시 자동으로 속도 제한

---

## 다음 단계

- **[셀프 호스팅 환경](/docs/advanced/self-hosted-environments)** — 같은 인프라 안에서 세션 운영
- **[Agent Teams](/docs/advanced/agent-teams)** — 클로드가 팀을 직접 관리하는 방식
- **[Agent View](/docs/advanced/agent-view)** — 여러 세션을 한 화면에서 보기
- **[Remote Control](/docs/advanced/remote-control)** — 다른 기기에서 세션 조종
