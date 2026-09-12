---
title: "[공] 세션 간 메시지 전송 — Claude 세션끼리 서로 대화하기"
description: "Claude Code 세션이 서로 메시지를 주고받을 수 있어요. 여러 작업을 병렬로 돌릴 때 세션 간 협력이 필요하다면 Cross-session Messaging을 활용하세요"
tags: ["고급", "cross-session", "세션간메시지", "멀티세션", "에이전트팀", "병렬작업", "자동생성"]
category: "advanced"
order: 10
lastUpdated: "2026-09-12"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging" target="_blank">code.claude.com/docs/en/cross-session-messaging</a><br />
★ Claude Code W32 (2026-08-03 ~ 2026-08-07) 출시<br />
※ 공식 문서 기준 — 세부 API·동작 방식은 추정이 포함될 수 있어요.
</div>

## 세션 간 메시지 전송이 뭔가요?

**Cross-session Messaging(세션 간 메시지 전송)** 은 Claude Code의 **여러 세션이 서로 메시지를 주고받는 기능**이에요.

> 🍱 **비유**: 이전에는 Claude 직원들이 각자 칸막이 안에서 혼자 일했어요. 이제는 직원 A가 "내 작업 끝났어, 이제 네 차례야"라고 직원 B에게 쪽지를 보낼 수 있어요.

---

## 왜 필요한가요?

### 이런 상황을 생각해보세요 🤔

**예시**: 대형 프로젝트를 이렇게 나눠서 처리하고 싶다면:

```
세션 A → 프론트엔드 리팩토링
세션 B → 백엔드 API 수정
세션 C → 테스트 작성
```

이전에는 세 세션이 따로따로 일하다 보니, A가 끝났는지 B가 몰랐어요.  
이제는 **"A 완료 → B에게 알림 → B 시작"** 같은 흐름이 가능해요.

### 주요 활용 상황

| 상황 | 설명 |
|---|---|
| 순차 작업 | 세션 A가 끝나면 세션 B가 시작되어야 할 때 |
| 병렬 후 취합 | 여러 세션이 각자 조사 후 결과를 한 세션에 모을 때 |
| 에이전트 팀 | 오케스트레이터 세션이 여러 워커 세션에 지시할 때 |
| 진행 현황 공유 | 한 세션이 다른 세션의 진행 상황을 확인할 때 |

---

## 어떻게 쓰나요?

### 기본 사용법

Claude 안에서 자연어로 요청하면 돼요:

```bash
# 다른 세션에 메시지 보내기 요청
> 세션 B에게 "프론트엔드 작업 완료됐으니 이제 API 수정 시작해"라고 전달해줘
```

또는 Claude 자체가 세션을 관리하도록 위임할 수 있어요:

```bash
# 에이전트 팀 방식
> 세션 세 개를 만들어서: A는 UI, B는 API, C는 테스트 처리하게 해줘.
> 각 세션이 끝나면 다음에게 알려주도록 조율해줘.
```

### Agent Teams와의 관계

**Agent Teams**(에이전트 팀)와 함께 쓰면 더 강력해요:

```
오케스트레이터 세션
├── 세션 A (UI 작업)   ← 메시지 전송·수신 가능
├── 세션 B (API 작업)  ← 메시지 전송·수신 가능
└── 세션 C (테스트)    ← 메시지 전송·수신 가능
```

---

## 세션 메시지 vs 기존 방식 비교

| 항목 | 이전 방식 | 세션 간 메시지 |
|---|---|---|
| 세션 간 정보 전달 | 수동으로 복사·붙여넣기 | 자동 메시지 전송 |
| 작업 순서 조율 | 사람이 직접 확인 | Claude가 자동 알림 |
| 병렬 작업 취합 | 수동 취합 필요 | 자동 수집 가능 |
| 에이전트 팀 조율 | 제한적 | 원활한 협력 |

---

## 다른 세션 찾기

```bash
# 현재 실행 중인 내 세션 목록 확인
# (Claude Code가 자동으로 같은 기기 내 세션 인식)
/sessions

# Agent View에서 전체 세션 시각적으로 관리
/agent-view
```

---

## 실전 예시: 코드베이스 감사

```
상황: 전체 코드베이스에서 보안 취약점 찾기 + 문서 업데이트

1. 오케스트레이터 세션
   → "세션 A: src/auth/ 감사해줘"
   → "세션 B: src/api/ 감사해줘"
   → "세션 C: src/db/ 감사해줘"
   
2. 세션 A, B, C가 각자 감사 진행
   → 각 세션이 완료되면 오케스트레이터에게 결과 전송

3. 오케스트레이터가 결과 취합
   → "세션 D: 취합된 결과로 보안 보고서 작성해줘"
```

> 🍱 **비유**: 건물 감사를 할 때 "1팀은 1층, 2팀은 2층, 3팀은 3층"하고 동시에 점검 후 결과를 취합하는 방식이에요.

---

## 주의사항

<div class="note-circle">
○ <strong>세션 수 관리</strong>: 너무 많은 세션을 만들면 관리가 복잡해져요. 대부분의 작업은 Dynamic Workflows나 Subagents로 충분해요.<br /><br />
○ <strong>토큰 비용</strong>: 세션이 많아질수록 전체 비용이 늘어요. 꼭 필요한 병렬 작업에만 써요.<br /><br />
○ <strong>공식 문서 확인</strong>: 세부 API나 메시지 형식은 공식 문서(<a href="https://code.claude.com/docs/en/cross-session-messaging">cross-session-messaging</a>)를 참고하세요.
</div>

---

## 관련 기능

| 기능 | 설명 |
|---|---|
| [Agent Teams](https://code.claude.com/docs/en/agent-teams) | 여러 세션을 팀으로 조율 |
| [Agent View](https://code.claude.com/docs/en/agent-view) | 전체 세션 한 화면에서 관리 |
| [Dynamic Workflows](https://code.claude.com/docs/en/workflows) | 서브에이전트 대규모 병렬 실행 |
| [Sub-agents](https://code.claude.com/docs/en/sub-agents) | 전문화된 하위 에이전트 생성 |

---

## 핵심 정리

| 포인트 | 내용 |
|---|---|
| 기능 | Claude Code 세션들이 서로 메시지 주고받기 |
| 출시 | 2026년 8월 W32 |
| 활용 | 순차 작업 알림, 에이전트 팀 조율, 결과 취합 |
| 쓰는 법 | 자연어로 "세션 B에게 알려줘" 요청 |
| 공식 문서 | code.claude.com/docs/en/cross-session-messaging |
