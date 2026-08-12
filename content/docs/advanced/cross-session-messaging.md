---
title: "[공] 세션 간 메시지 전송 — Claude Code 세션끼리 대화하기"
description: "내 다른 Claude Code 세션에 직접 메시지를 보내고, 다른 기기나 웹의 세션에도 연결하는 cross-session messaging 기능"
tags: ["자동생성", "세션메시지", "멀티세션", "에이전트팀", "자동화", "W32"]
category: "advanced"
order: 11
lastUpdated: "2026-08-12"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/cross-session-messaging">code.claude.com/docs/en/cross-session-messaging</a><br />
★ W32 업데이트(2026-08-03~07)에서 출시된 기능입니다.
</div>

## 세션 간 메시지 전송이란?

**실행 중인 내 다른 Claude Code 세션에게 직접 메시지를 보낼 수 있는 기능**이에요.

> 📞 **비유로 설명하면**: 회사에서 여러 팀원이 각자 방에서 일하다가 내선 전화로 연락하는 것처럼, 각각 실행 중인 Claude Code 세션이 서로 소통할 수 있어요. "백엔드 세션, 데이터베이스 마이그레이션 완료했어. 프론트엔드 빌드 시작해도 돼!" 같은 조율이 가능합니다.

---

## 어떤 상황에서 유용한가요?

| 상황 | 활용 방법 |
|---|---|
| 프론트엔드·백엔드를 별도 세션으로 개발 중 | 한 세션이 완료되면 다른 세션에 다음 단계 알림 |
| 테스트 세션 + 개발 세션 병렬 운영 | 테스트 결과를 개발 세션에 전달 |
| 대규모 코드베이스를 여러 에이전트가 분담 | 각 에이전트 결과를 조율 세션이 취합 |
| 다른 기기에서 현재 작업 상태 확인 | 폰에서 노트북 세션 진행 상황 조회 |

---

## 기본 사용법

```
# 내 다른 세션 목록 보기
다른 세션이 있는지 확인해줘

# 특정 세션에 메시지 보내기  
백엔드-api 세션에게 "DB 마이그레이션 완료, 다음 단계로 이동해도 돼"라고 알려줘

# 메시지 받기
다른 세션에서 메시지가 왔는지 확인해줘
```

Claude는 ListAgents 도구로 실행 중인 세션 목록을 확인하고, SendMessage 도구로 메시지를 전송합니다.

---

## 도달 범위

| 대상 | 가능 여부 |
|---|---|
| 같은 기기의 다른 터미널 세션 | ✅ |
| 같은 기기의 Desktop App 세션 | ✅ |
| 다른 기기의 Claude Code 세션 | ✅ (Remote Control 연결 시) |
| 웹(claude.ai/code) 세션 | ✅ |

---

## 멀티에이전트 조율 예시

### 병렬 작업 후 결과 취합

```
# 오케스트레이터 세션에서
> 테스트 세션, 빌드 세션, 린트 세션에 각각 작업 시작을 알리고 
  세 곳 모두 완료되면 나에게 알려줘
```

```
# 각 작업 세션이 완료 후 자동으로
> (완료 메시지를 오케스트레이터 세션에 전송)
```

### 단계별 파이프라인

```
세션1(분석) → 세션2(구현) → 세션3(테스트) → 세션4(배포)
     메시지로 각 단계 완료 신호 전달
```

> 🏭 **비유로 설명하면**: 자동차 공장의 컨베이어 벨트처럼, 각 작업 스테이션(세션)이 자기 일을 마치면 다음 스테이션에 신호를 보내는 거예요. 사람이 일일이 "이제 다음 단계야" 하고 지시하지 않아도 됩니다.

---

## 에이전트 팀과의 차이점

| | 세션 간 메시지 | [에이전트 팀(Agent Teams)](https://code.claude.com/docs/en/agent-teams) |
|---|---|---|
| **독립성** | 각 세션이 완전히 독립적 | 팀 내에서 조율 |
| **메시지 방향** | 양방향 자유 통신 | 팀장(orchestrator) 중심 |
| **적합한 규모** | 소수 세션 간 조율 | 대규모 병렬 작업 |
| **설정 복잡도** | 낮음 (자연어로 지시) | 중간~높음 |

---

## 관련 문서

- [Message your other Claude Code sessions](https://code.claude.com/docs/en/cross-session-messaging)
- [Orchestrate teams of Claude Code sessions](https://code.claude.com/docs/en/agent-teams)
- [Manage multiple agents with agent view](https://code.claude.com/docs/en/agent-view)
- [Run agents in parallel](https://code.claude.com/docs/en/agents)
