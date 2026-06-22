---
title: "[공] Dynamic Workflows — 대규모 작업을 Claude가 계획·분배·실행하는 기능"
description: "코드베이스 전체 마이그레이션, 대규모 감사, 복잡한 조사 등 한 대화창에 담기 어려운 작업을 여러 서브에이전트에게 나눠 처리. /workflows로 관리"
tags: ["고급", "workflows", "다이나믹워크플로", "서브에이전트", "대규모작업", "자동생성"]
category: "advanced"
order: 21
lastUpdated: "2026-06-15"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — 리서치 프리뷰(research preview). Claude Code Week 22 (2026-05-25). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/workflows" target="_blank">공식 문서: code.claude.com/docs/en/workflows</a>
</div>

## Dynamic Workflows가 뭔가요?

**Dynamic Workflows(다이나믹 워크플로)** 는 Claude가 복잡한 대규모 작업을 처리할 때 직접 **계획서(workflow)를 짜고**, 그 계획을 **여러 서브에이전트에게 나눠서 동시에 실행**하는 기능이에요.

> 🍱 **비유**: 혼자 건물 청소하는 대신, "3층은 A팀, 4층은 B팀, 로비는 C팀" 하고 청소회사 팀장처럼 Claude가 일을 나눠 동시에 처리해요. Claude가 팀장이 되는 거예요.

---

## 어떤 작업에 필요할까요?

**한 대화창으로는 무거운 작업**에 쓰세요.

| 이럴 때 써요 ✅ | 이건 필요 없어요 ❌ |
|--------------|-----------------|
| 전체 코드베이스 보안 취약점 감사 | 버그 한 개 수정 |
| API v1 → v2 전체 마이그레이션 | 파일 하나 리팩토링 |
| 여러 소스에서 교차 검증이 필요한 조사 | 단순 질문·답변 |
| 전체 테스트 커버리지 추가 | 테스트 하나 작성 |

> 🍱 **비유**: 택배 하나 보낼 때는 직접 들고 가면 되지만, 1,000개를 보낼 때는 물류 회사에 맡기는 거예요. Dynamic Workflows는 그 물류 회사 역할이에요.

---

## 어떻게 쓰나요?

### 워크플로 시작하기

그냥 **자연어로 큰 작업을 요청**하면 돼요. Claude가 판단해서 워크플로를 제안해줘요.

```bash
# 예시 1: 전체 fetch() 호출 마이그레이션
> create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# 예시 2: 코드베이스 보안 감사
> 전체 코드베이스에서 SQL 인젝션 취약점을 찾아 수정하는 워크플로 만들어줘

# 예시 3: 대규모 타입 오류 수정
> 타입스크립트 타입 오류 전체를 수정하는 워크플로 실행해줘
```

Claude Code 화면에 `Dynamic workflow requested` 표시가 뜨면 워크플로가 시작된 거예요.

<div class="note-star">
★ <strong>2026-06-01 (Week 23) 키워드 변경</strong> — 트리거 키워드가 <code>workflow</code>에서 <strong><code>ultracode</code></strong>로 변경됐어요.<br />
자연어 요청은 그대로 작동하며, <code>ultracode</code>를 명시적으로 쓰면 프롬프트에서 <strong>보라색(violet)으로 강조</strong>돼 워크플로 모드가 활성화됐음을 바로 알 수 있어요.

```text
# 키워드를 앞에 붙여 즉시 워크플로 시작
> ultracode — 전체 코드베이스 SQL 인젝션 취약점 감사해줘
```
</div>

### 실행 중인 워크플로 확인

```bash
# 현재 워크플로 목록
/workflows

# 또는 에이전트 뷰에서 전체 세션 모니터링
/agent-view
```

---

## 어떻게 작동하나요?

```
내 요청
   ↓
Claude가 계획서 작성
   ↓
┌─────────┬─────────┬─────────┐
│서브에이전트1│서브에이전트2│서브에이전트3│  ← 동시 실행
│  (파일A)  │  (파일B)  │  (파일C)  │
└─────────┴─────────┴─────────┘
   ↓
결과 취합·정리
   ↓
최종 결과 보고
```

1. **Claude가 계획서 작성** — 작업을 어떻게 나눌지 전략 수립
2. **서브에이전트 분배** — 각 하위 작업을 별도 에이전트에게 위임
3. **병렬 실행** — 여러 서브에이전트가 동시에 처리
4. **결과 취합** — Claude가 결과를 모아서 정리

---

## 다른 기능과 비교

| 기능 | 크기 | 작동 방식 | 언제? |
|------|------|----------|-------|
| **일반 대화** | 소·중 | 한 대화에서 처리 | 대부분의 코딩 작업 |
| **서브에이전트** | 중 | 특정 하위 작업 위임 | 독립적 일부 작업 |
| **Dynamic Workflows** | 대·초대 | 계획+병렬 분배 | 코드베이스 전체 규모 |

> 🍱 **비유**: 일반 대화는 혼자 요리하기, 서브에이전트는 도우미 1~2명과 요리하기, Dynamic Workflows는 요리 팀 전체를 이끄는 요리장처럼 운영하기예요.

---

## 비용 고려사항

워크플로는 여러 서브에이전트를 동시에 실행하기 때문에 **토큰 소비가 일반 대화보다 많아요**.

```
일반 대화:    메인 Claude 1개 × 대화 전체
워크플로:     메인 Claude + 서브에이전트 N개 × 각자 문맥
```

<div class="note-circle">
○ <code>/usage</code>로 워크플로 중 서브에이전트별 토큰 소비량 확인 가능<br />
○ 작은 작업엔 일반 대화나 서브에이전트만으로 충분해요<br />
○ 비용 대비 효과 → 수백 개 파일을 하나씩 처리하면 더 오래 걸릴 수도 있으니 상황 판단하세요
</div>

---

## 요구사항

| 항목 | 내용 |
|------|------|
| 상태 | 리서치 프리뷰 (실험적 기능) |
| 출시 버전 | Claude Code v2.1.150 이상 (Week 22) |
| 적합 모델 | Opus 4.8 권장 (강력한 계획 수립 능력 필요) |

```bash
# 업데이트
claude update
```

---

<div class="note-circle">
○ 리서치 프리뷰 — 동작·가용성·UI가 바뀔 수 있어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/workflows" target="_blank">code.claude.com/docs/en/workflows</a><br />
○ 연관 기능: <a href="/docs/advanced/agent-teams">에이전트 팀(Agent Teams)</a> · <a href="/docs/codeweb/codeweb-remote">원격 세션</a>
</div>
