---
title: "[공] 세션 간 메시지 전달 — 내 클로드 세션들이 서로 대화해요"
description: "Claude Code v2.1.224부터 내 세션들이 서로 메시지를 보낼 수 있어요. ListAgents·SendMessage 도구와 /list-agents 명령어로 세션 간 협업 가능"
tags: ["고급", "cross-session-messaging", "세션간메시지", "ListAgents", "SendMessage", "멀티세션"]
category: "advanced"
order: 12
lastUpdated: "2026-08-10"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a><br />
★ <strong>필수 버전</strong>: Claude Code v2.1.224 이상 · macOS 및 Linux만 지원<br />
★ <strong>출시일</strong>: 2026년 8월 7일 (W32)
</div>

## 이게 뭔가요?

**세션 간 메시지 전달(Cross-session messaging)**은 내가 동시에 여러 터미널/창에서 Claude Code를 돌릴 때, **한 세션의 클로드가 다른 세션의 클로드에게 메시지를 보내는 기능**이에요.

> 🍱 **비유로 설명하면**: 같은 회사에서 두 직원이 각자 다른 방에서 일하는 상황이에요. 예전엔 팀장(나)이 두 방을 왔다갔다 하며 "A팀한테 DB 스키마 바뀌었다고 알려줘"라고 전달해야 했어요. 이제는 A팀 직원이 알아서 "B팀에게 DB 컬럼명 바뀌었다고 전달해줘"라고 말하면 됩니다.

---

## 언제 유용한가요?

| 상황 | 활용 방법 |
|---|---|
| 브랜치 변경이 다른 세션 작업에 영향 | 변경 사항 자동 알림 |
| 여러 워크트리에서 병렬 작업 중 | 완료 상황 공유 |
| 마이그레이션·테스트 실행 모니터링 | 완료 시 주 세션에 리포트 |
| 다른 기기/웹 세션에 정보 전달 | Remote Control 연결 시 가능 |

---

## 기본 사용법

### 1단계: 어떤 세션들이 있는지 확인

```bash
# 현재 연결 가능한 세션 목록 보기
/list-agents

# 별칭
/peers
```

내 로컬 세션, 웹 세션, 다른 기기 세션이 이름으로 나열돼요.

### 2단계: 메시지 보내기

클로드한테 말로 시키면 돼요. 명령어를 직접 입력할 필요가 없어요:

```text
# 예시 1: 특정 내용 전달
payments API 세션한테 users.name이 users.display_name으로 바뀌었다고 알려줘

# 예시 2: 진행 상황 물어보기
다른 터미널 세션한테 마이그레이션 끝났는지 물어봐줘

# 예시 3: 요약 전달
방금 우리가 한 내용을 payments API 작업 중인 세션에 설명해줘
```

클로드가 `ListAgents`로 대상을 찾고, `SendMessage`로 보내요. 나는 자연어로 말만 하면 돼요.

### 메시지가 도착하면

```text
# 상대 세션에서
Message from <session-name>     ← 이 줄이 뜸
[Ctrl+O 눌러서 확장]

Schema migration finished: new column is tenant_id,
rebasing on main is safe now.
```

- 새 메시지가 오면 `Message from` 행이 표시돼요
- `Ctrl+O`로 내용 확인
- 메시지는 **텍스트만** (대화 기록·파일은 공유 안 됨)

---

## 어떤 세션들과 연결할 수 있나요?

`/list-agents`를 실행하면 이런 항목들이 나와요:

| 종류 | 설명 |
|---|---|
| **같은 기기의 다른 세션** | 동일 macOS/Linux에서 실행 중인 다른 Claude Code 창 |
| **웹 세션** | claude.ai에서 열린 내 Claude Code on the Web 세션 |
| **다른 기기 세션** | Remote Control 연결 시 다른 기기 세션도 보임 |
| **서브에이전트** | 현재 세션 내부에서 실행 중인 서브에이전트 |

> 💡 세션 이름은 `/rename <이름>` 또는 `claude --name <이름>`으로 설정할 수 있어요. 이름 없으면 클로드가 폴더명 기반으로 자동 생성해요 (`myapp-3f` 같은 형태).

---

## 메시지 전달 경로 (어디를 거치나요?)

| 대상 세션 위치 | 경로 |
|---|---|
| 같은 기기 | 직접 소켓 연결 — **Anthropic 서버 거치지 않아요** |
| 다른 기기 | Anthropic 서버 경유 (Remote Control 통해서) |
| Claude Code on the Web | Anthropic 서버 경유 |

같은 기기 내 세션 메시지는 로컬에서만 처리돼요. 보안 민감한 내용은 같은 기기 세션 간에만 주고받는 게 안전해요.

---

## 메시지 수신 제어

기본적으로 내가 실행 중인 세션은 다른 세션 메시지를 받을 수 있어요. 이를 제어하려면:

```json
// ~/.claude/settings.json
{
  "crossSessionInbound": "accept"   // 기본값 — 받음
  // "crossSessionInbound": "hold"  // 내 승인 후 전달
  // "crossSessionInbound": "refuse" // 거부
}
```

### 다른 기기 메시지 승인 요구

다른 기기로 메시지가 나가기 전에 내 승인을 받으려면:

```json
{
  "isolatePeerMachines": true
}
```

---

## 제한 사항 & 주의

- **macOS·Linux만 지원** (Windows 네이티브 미지원)
- **Amazon Bedrock, Google Cloud Agent Platform, Microsoft Foundry 미지원**
- **컨테이너**: 같은 컨테이너 안 세션끼리는 연결 가능. 컨테이너 내부↔호스트는 불가.
- **메시지 루프 방지**: 두 세션이 무한히 메시지를 보내지 않도록 자동 제한이 있어요
- 받은 메시지는 **권한 승인이 안 됨** — 다른 세션 메시지로는 권한 대화 상자에 승인할 수 없어요

---

## 자주 묻는 질문

**Q. `/list-agents` 명령어가 안 보여요.**
A. Claude Code v2.1.224 미만이에요. `claude --version`으로 확인 후 업데이트하세요.

**Q. `/list-agents`는 나오는데 메시지가 도착 안 해요.**
A. 받는 세션의 `crossSessionInbound`가 `refuse`이거나 `SendMessage` 도구가 deny 규칙으로 막혔을 수 있어요. 설정 확인 필요.

**Q. 메시지로 파일을 공유할 수 있나요?**
A. 아니요. 메시지는 텍스트만 가능해요. 파일은 워크트리나 git을 통해 공유하세요.

**Q. 클로드가 다른 세션에 나 몰래 메시지를 보낼 수 있나요?**
A. 네, 클로드가 판단해서 자동으로 보낼 수 있어요. 하지만 `isolatePeerMachines: true`로 다른 기기 전송에 승인을 요구하거나, deny 규칙으로 `SendMessage`를 막을 수 있어요.

---

## 관련 기능 비교

| 기능 | 언제 쓰나요? |
|---|---|
| **세션 간 메시지** (이 기능) | 독립적인 세션들이 서로 정보 교환 |
| [에이전트 팀](./agent-teams.md) | 클로드가 팀을 구성하고 지휘하는 구조적 협업 |
| [에이전트 뷰](./agent-view.md) | 여러 세션을 한 화면에서 모니터링 |
| [Remote Control](./remote-control.md) | 모바일/다른 기기에서 세션 조종 |
| [채널](./channels.md) | CI 결과, 외부 이벤트를 세션으로 밀어 넣기 |

---

## 공식 문서

- [Cross-session messaging (공식)](https://code.claude.com/docs/en/cross-session-messaging)
- [W32 릴리즈 노트](https://code.claude.com/docs/en/whats-new/2026-w32)
