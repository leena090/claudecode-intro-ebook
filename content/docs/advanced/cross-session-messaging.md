---
title: "[공] 세션 간 메시지 전달 — 두 Claude가 서로 대화하는 방법"
description: "Claude Code v2.1.224+부터 서로 다른 세션의 Claude끼리 메시지를 주고받을 수 있어요. 병렬 작업 조율, 작업 결과 전달, 원격 세션 소통까지"
tags: ["자동생성", "세션간메시지", "cross-session", "ListAgents", "SendMessage", "병렬작업", "에이전트"]
category: "advanced"
order: 27
lastUpdated: "2026-08-08"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
<br />★ 최소 버전: Claude Code v2.1.224 이상 필요
<br />★ 지원 OS: macOS, Linux (Windows 미지원)
</div>

## 세션 간 메시지 전달이 뭔가요?

Claude Code를 두 개 열고 동시에 서로 다른 작업을 하고 있을 때, 한쪽 Claude가 다른 쪽 Claude에게 **직접 메시지를 보낼 수 있는 기능**이에요.

> 🍱 **비유로 설명하면**: 같은 회사에 다니는 두 직원이 서로 다른 부서에서 일하다가, 한 쪽이 "나 방금 데이터베이스 마이그레이션 끝났어! 이제 네 쪽 API 연동해도 돼"라고 메신저로 알리는 것과 같아요. 사람이 중간에서 복사·붙여넣기 하지 않아도 돼요.

---

## 어떤 상황에서 쓰나요?

| 상황 | 설명 |
|---|---|
| **결과 전달** | 한 세션이 중요한 발견을 하면 관련 세션에게 알려줌 |
| **병렬 워크트리 조율** | 두 세션이 같은 저장소 다른 브랜치 작업 시 변경사항 공유 |
| **장시간 작업 보고** | 마이그레이션이나 테스트 세션이 완료 결과를 주 세션에 보고 |
| **원격 세션 답장** | 다른 기기의 세션이나 웹 세션에서 온 메시지에 답장 |

---

## 두 가지 핵심 도구

Claude Code는 세션 간 메시지에 두 가지 도구를 사용해요. 여러분이 직접 호출하는 게 아니라 **Claude가 알아서 사용**해요:

| 도구 | 역할 |
|---|---|
| `ListAgents` | 현재 도달 가능한 다른 세션 목록 조회 |
| `SendMessage` | 특정 세션에 메시지 전달 |

---

## 사용 방법

### 세션 목록 확인

터미널에서 `/list-agents` (또는 `/peers`) 명령어를 입력하면 도달 가능한 세션 목록이 나와요:

```bash
/list-agents
```

각 세션에는 이름이 붙어요:
- 직접 `/rename` 명령어로 이름 설정 가능
- 설정하지 않으면 작업 디렉터리 기반 이름 자동 생성 (예: `myapp-3f`)

### 메시지 요청하기

Claude에게 다른 세션으로 메시지 보내달라고 하면 돼요:

```
다른 터미널에서 실행 중인 세션한테 마이그레이션 끝났다고 알려줘

payments API 작업하는 세션에게 우리가 방금 한 작업 설명해줘
```

Claude가 직접 메시지 내용을 작성해서 전달해요. 어떤 말을 쓸지 구체적으로 지시하지 않아도 돼요.

---

## 메시지 전달 경로

| 전달 대상 | 경로 | 가능한 작업 |
|---|---|---|
| **같은 기기의 세션** | Unix 소켓 (Anthropic 서버 미통과) | 새 메시지 + 답장 |
| **다른 기기의 세션** | Anthropic 서버 경유 (Remote Control 필요) | 답장만 가능 |
| **웹 Claude Code 세션** | Anthropic 서버 경유 | 답장만 가능 |

> 🍱 **비유로 설명하면**: 같은 사무실 동료한테는 자리에서 걸어가서 말할 수 있어요(직접 전달). 다른 도시 동료한테는 전화 통화로만 답장할 수 있어요(서버 경유).

---

## 메시지 수신 제어

다른 세션에서 오는 메시지를 어떻게 처리할지 `crossSessionInbound` 설정으로 제어할 수 있어요:

| 설정값 | 동작 |
|---|---|
| `accept` | 모든 메시지 자동 수신 |
| `hold` | 메시지 보류 (승인 후 수신) |
| `refuse` | 모든 메시지 거부 |

```json
// settings.json 예시
{
  "crossSessionInbound": "accept"
}
```

### 메시지 도착 시 어떻게 보이나요?

수신된 메시지는 대화창에 표시되고, Claude가 읽은 후 한 줄 요약으로 접혀요. `Ctrl+O`를 누르면 전체 내용을 펼쳐볼 수 있어요.

메시지 예시:
```
Schema migration finished: the new column is tenant_id, 
and rebasing on main is safe now.
```

---

## 보안 원칙

세션 간 메시지는 몇 가지 중요한 제한이 있어요:

| 제한 | 이유 |
|---|---|
| 다른 세션의 메시지는 권한 승인 불가 | 다른 세션이 "허락" 역할을 할 수 없음 |
| 설정 파일 변경 불가 | 보안 설정을 원격으로 바꿀 수 없음 |
| 명령어 자동 실행 불가 | `/compact` 같은 명령어는 텍스트로만 전달 |
| 권한 프롬프트는 그대로 작동 | 수신 세션 자체 권한 규칙 적용 |

---

## 사용 조건 (반드시 확인!)

```
✅ Claude Code v2.1.224 이상
✅ macOS 또는 Linux (Windows 미지원)
❌ Amazon Bedrock, Claude Platform on AWS, Google Cloud Agent Platform, Microsoft Foundry 미지원
❌ CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC 등 일부 환경변수가 설정된 경우 비활성화
```

버전 확인:
```bash
claude --version
```

기능 확인:
```bash
/list-agents
# 명령어가 인식되면 기능 활성화된 것
```

---

## 기능 끄는 방법

수신 차단:
```json
{
  "crossSessionInbound": "refuse"
}
```

송신 차단 (권한 규칙으로):
```json
{
  "permissions": {
    "deny": ["SendMessage", "ListAgents"]
  }
}
```

---

## 관련 기능 비교

| 기능 | 용도 |
|---|---|
| **세션 간 메시지** | 독립 세션들 사이 간단한 텍스트 전달 |
| [에이전트 팀](/docs/advanced/agent-teams) | Claude가 여러 서브 에이전트를 직접 운영 |
| [에이전트 뷰](/docs/advanced/agent-view) | 모든 세션을 한 화면에서 모니터링 |
| [Remote Control](/docs/advanced/remote-control) | 다른 기기에서 내 세션 제어 |
| [채널(Channels)](/docs/advanced/channels) | CI 결과 같은 외부 이벤트를 세션으로 push |
