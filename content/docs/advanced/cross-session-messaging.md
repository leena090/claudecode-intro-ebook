---
title: "[공] 세션 간 메시지 — 내 Claude 세션들이 서로 대화하기"
description: "같은 머신 또는 다른 기기에서 열린 Claude Code 세션들끼리 메시지를 주고받는 기능. ListAgents + SendMessage 도구, /list-agents 명령. macOS·Linux, v2.1.224+"
tags: ["자동생성", "세션메시지", "멀티세션", "ListAgents", "SendMessage", "병렬작업", "v2.1.224"]
category: "advanced"
order: 26
lastUpdated: "2026-08-15"
---

<div class="note-star">
★ <strong>[공] Claude Code v2.1.224 이상, macOS·Linux 지원</strong><br />
★ <strong>별도 활성화 불필요</strong> — 요건을 충족하면 자동으로 켜져 있습니다.<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">cross-session-messaging</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">What's New W32</a>
</div>

## 세션 간 메시지가 뭔가요?

**열려 있는 여러 Claude Code 세션이 서로 짧은 메시지를 주고받는 기능**입니다. 2026년 8월 Week 32에 출시됐어요.

> 📞 **비유로 설명하면**: 두 가지 큰 공사를 동시에 맡은 현장 소장 2명을 생각해보세요. 공사 A 소장이 "우리 쪽 기초 공사 끝났어요, 이제 배관 들어와도 됩니다"라고 공사 B 소장에게 전화(메시지)합니다. 제가 두 곳을 직접 오가며 전달하지 않아도 돼요. Claude 세션들이 스스로 알아서 연락합니다.

---

## 어떤 상황에 유용한가요?

| 상황 | 예시 |
|---|---|
| **한 세션의 발견을 다른 세션에 전달** | "payments API 세션에게 users.name이 users.display_name으로 바뀌었다고 알려줘" |
| **병렬 워크트리 조율** | A 세션과 B 세션이 같은 저장소를 각자 다른 브랜치에서 작업할 때 진행 상황 공유 |
| **오래 실행 중인 작업의 상태 확인** | 마이그레이션 세션에게 "얼마나 진행됐어?" 물어보기 |
| **다른 기기 세션에 알리기** | 내 MacBook 세션에서 집 데스크톱 세션으로 알림 전송 |

---

## 어떻게 사용하나요?

### 1. 연결 가능한 세션 목록 확인

```text
/list-agents
```

또는 `/peers`라고 입력해도 됩니다. 현재 닿을 수 있는 세션들이 목록으로 나타나요.

### 2. Claude에게 메시지 보내달라고 지시

```text
> payments API 세션에게 users.name이 이제 users.display_name으로 바뀌었다고 알려줘
```

Claude가 알아서 `ListAgents`로 세션을 찾고, `SendMessage`로 보냅니다. 내가 직접 도구를 실행할 필요 없어요.

### 3. 세션을 @멘션으로 직접 지정 (v2.1.232+)

```text
> @api-worker 스키마 마이그레이션 끝났어요, main 리베이스해도 됩니다
```

`@` 뒤에 세션 이름 첫 글자를 입력하면 자동완성이 뜨고, 선택하면 됩니다.

---

## 메시지가 어떻게 도착하나요?

받는 세션에서는 대화 창에 발신 세션 이름과 메시지가 표시됩니다:

```text
Schema migration finished: the new column is tenant_id,
and rebasing on main is safe now.
```

`Ctrl+O`를 누르면 메시지 내용이 펼쳐져요.

> 💡 **참고**: 메시지는 순수 텍스트입니다. 대화 기록이나 파일은 전송되지 않아요. 대화 전체를 공유하려면 [세션 재개(resume)](/docs/en/sessions#resume-a-session) 기능을 사용하세요.

---

## 메시지가 이동하는 경로

| 대상 세션 위치 | 이동 경로 |
|---|---|
| **같은 머신** | 소켓을 통해 직접 전달 (Anthropic 서버 미경유) |
| **다른 머신** | Anthropic 서버를 거쳐 Remote Control 연결로 도착 |
| **Claude Code Web (클라우드)** | Anthropic 서버를 거쳐 직접 전달 |

> 🔒 **같은 머신 메시지는 Anthropic 서버를 거치지 않습니다.** 내 컴퓨터 안에서만 이동해요.

---

## 수신 제어 설정

받는 세션이 어떻게 메시지를 처리할지 세 가지로 설정할 수 있어요:

| 설정값 | 동작 |
|---|---|
| `accept` | 메시지를 즉시 Claude에게 전달 |
| `hold` | 메시지를 보류하고 내 승인 후 전달 |
| `refuse` | 메시지를 거부하고 삭제 |

```json
// ~/.claude/settings.json
{
  "crossSessionInbound": "accept"
}
```

또는 `/config`에서 **Messages from your other sessions** 항목을 직접 선택해도 됩니다 (v2.1.232+).

---

## 주의 사항

- **다른 세션의 메시지는 권한 승인 불가** — 메시지로 권한 확인 창에 "허용"을 답할 수 없어요.
- **설정 변경 불가** — 메시지로 CLAUDE.md나 권한 설정을 바꿀 수 없어요.
- **커맨드 미실행** — `/compact` 같은 명령어가 메시지에 포함되어도 실행되지 않아요 (일반 텍스트로 처리).

---

## 지원 범위

- ✅ macOS, Linux (WSL2 포함)
- ❌ Windows 네이티브 미지원
- ❌ Amazon Bedrock, Google Cloud Agent Platform 등 3자 제공자 미지원

다른 머신으로 메시지 보내려면 **Remote Control** 연결이 필요합니다.

---

## 관련 기능 비교

| 목적 | 적합한 기능 |
|---|---|
| 세션 간 짧은 알림 교환 | **세션 간 메시지 (이 페이지)** |
| 세션 전체 맥락 이어받기 | [세션 재개](/advanced/session-management) |
| Claude가 직접 여러 세션 운영 | [에이전트 팀](/advanced/agent-teams) |
| 여러 세션 한눈에 관리 | [에이전트 뷰](/advanced/agent-view) |
| 모바일·다른 기기에서 세션 조종 | [Remote Control](/advanced/remote-control) |

---

## 관련 문서

- [공식 문서: cross-session-messaging](https://code.claude.com/docs/en/cross-session-messaging)
- [What's New W32](https://code.claude.com/docs/en/whats-new/2026-w32)
- [서브에이전트 안내](/advanced/agents-parallel)
- [에이전트 팀](/advanced/agent-teams)
