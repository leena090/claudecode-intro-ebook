---
title: "[공] 세션 간 메시지 전송 — 여러 클로드가 서로 대화하게 하기"
description: "같은 기기의 다른 Claude Code 세션에 메시지를 보내고, Remote Control로 다른 기기·웹에서 실행 중인 세션에도 응답할 수 있어요"
tags: ["자동생성", "세션간메시지", "cross-session", "멀티세션", "RemoteControl", "고급"]
category: "advanced"
order: 24
lastUpdated: "2026-08-09"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a>
<br />★ 이 기능은 <strong>ListAgents</strong>와 <strong>SendMessage</strong> 도구를 통해 구현돼요. 에이전트 협업·자동화 루틴에서 특히 유용해요.
</div>

## 세션 간 메시지가 뭔가요?

Claude Code를 여러 개 동시에 켜놓고 작업할 때, **한 세션에서 다른 세션으로 메시지를 보내** 협력하게 만들 수 있어요.

> 📞 **비유로 설명하면**: 건물 여러 층에서 각자 다른 업무를 맡은 직원들이 내선전화로 서로 연락해 일을 조율하는 것과 같아요. 클로드 세션이 각 직원이고, 세션 간 메시지가 내선전화예요.

---

## 어떤 경우에 쓸 수 있나요?

| 시나리오 | 설명 |
|---|---|
| **같은 기기 내 세션 협력** | A 세션이 B 세션에 작업 결과를 전달 |
| **Remote Control 연동** | 폰·웹에서 실행 중인 기기 세션에 응답 |
| **에이전트 오케스트레이션** | 오케스트레이터 세션이 워커 세션에 지시 |
| **자동화 루틴 조율** | 루틴이 다른 세션의 상태를 확인하고 조작 |

---

## 기본 사용법

### 1단계: 현재 연결된 세션 목록 확인

```
/list-agents
```

또는 프롬프트에서:

```
"지금 실행 중인 다른 세션 목록 보여줘"
```

클로드가 **ListAgents** 도구를 사용해 현재 연결된 세션들을 나열해줘요.

```
현재 연결된 세션:
- session-abc123 (같은 기기, project-alpha)
- session-xyz789 (Remote Control, 모바일)
- session-def456 (같은 기기, project-beta)
```

### 2단계: 특정 세션에 메시지 보내기

```
"session-abc123에 '테스트 완료, 다음 단계 진행해도 좋아'라고 전달해줘"
```

클로드가 **SendMessage** 도구를 사용해 해당 세션으로 메시지를 전송해요.

---

## Remote Control과의 연동

**Remote Control**은 로컬 기기의 세션을 폰이나 웹에서 이어받는 기능이에요. 세션 간 메시지와 함께 쓰면 더욱 강력해져요.

```
시나리오: 노트북에서 작업 중인 클로드 세션을 
          스마트폰에서 확인하고 응답 보내기

1. 노트북: 긴 작업 실행 중 (예: 코드 리뷰)
2. 스마트폰: Remote Control로 접속
3. 스마트폰에서: 승인 메시지 전송
4. 노트북 세션: 메시지 수신 후 다음 단계 진행
```

> 📱 **실전 팁**: 장시간 걸리는 에이전트 작업을 노트북에서 시작하고, 이동 중에 스마트폰으로 중간 확인·승인을 보낼 때 유용해요.

---

## 에이전트 오케스트레이션에서의 활용

여러 세션이 팀처럼 협력하는 **멀티에이전트 워크플로우**를 만들 수 있어요.

```
오케스트레이터 세션 (session-main)
    │
    ├─── session-worker1: "프론트엔드 컴포넌트 작성해줘"
    ├─── session-worker2: "백엔드 API 구현해줘"
    └─── session-worker3: "테스트 코드 작성해줘"
         │
         (완료 후 메시지 회신)
         │
    오케스트레이터: 결과 취합 → PR 생성
```

<div class="note-star">
★ <strong>참고</strong> — 대규모 병렬 오케스트레이션에는 <strong>Dynamic Workflows</strong>나 <strong>Agent View</strong>를 함께 활용하면 더 효율적이에요.
</div>

---

## 주의사항

| 주의 사항 | 내용 |
|---|---|
| **세션 ID 정확히 입력** | 목록에서 복사해서 사용하세요 |
| **Remote Control 먼저 설정** | 다른 기기 세션에 접근하려면 Remote Control 활성화 필요 |
| **메시지 수신 여부 확인** | 상대 세션이 유휴 상태(idle)면 메시지가 쌓여있을 수 있어요 |
| **보안** | 신뢰할 수 없는 출처의 세션 ID를 사용하지 마세요 |

---

## 관련 기능

| 기능 | 설명 | 문서 |
|---|---|---|
| **Remote Control** | 다른 기기에서 세션 이어받기 | `codeweb/codeweb-remote.md` |
| **Agent View** | 모든 세션 한 화면에서 관리 | `advanced/agent-view.md` |
| **Agent Teams** | 팀 단위 에이전트 조율 | `advanced/agent-teams.md` |
| **Dynamic Workflows** | 대규모 병렬 작업 오케스트레이션 | `advanced/dynamic-workflows.md` |

---

## 요약

| 항목 | 내용 |
|---|---|
| **핵심 도구** | ListAgents + SendMessage |
| **주요 사용 사례** | 멀티세션 협력, Remote Control 조율, 루틴 자동화 |
| **필요 조건** | 같은 기기 내 세션 or Remote Control 설정 |
| **공식 문서** | [code.claude.com/docs/en/cross-session-messaging](https://code.claude.com/docs/en/cross-session-messaging) |

> 🎯 **한 줄 요약**: 여러 클로드 세션이 서로 대화하며 협력하게 만드는 기능이에요. 복잡한 작업을 여러 세션에 나눠 동시에 처리할 때 특히 강력해요.
