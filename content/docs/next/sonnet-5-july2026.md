---
title: "[블] Claude Sonnet 5 출시 + Fable 5 전 세계 재개 (2026년 6월 30일)"
description: "Sonnet 5가 코딩·에이전트·전문가 업무에서 최전선 성능을 제공, Fable 5는 7월 1일부로 전 세계에서 다시 접근 가능 — 동시에 업계 공동 탈옥 방지 프레임워크 발표"
tags: ["모델", "sonnet-5", "fable5", "탈옥", "jailbreak", "2026", "자동생성"]
category: "next"
order: 17
lastUpdated: "2026-07-07"
---

<div class="note-star">

★ **블로그 공식 발표 기준** (2026-06-30) `[블]`  
📌 **Sonnet 5** — "Introducing Claude Sonnet 5" (Anthropic News, Jun 30, 2026)  
📌 **Fable 5 재개** — "Redeploying Fable 5" (Anthropic News, Jun 30, 2026)  
⚠️ 세부 스펙은 블로그 제목·설명 기반 — 일부 내용은 **추정**이에요

</div>

## 2026년 6월 30일 — 두 가지 큰 소식이 동시에

이날 Anthropic이 두 가지 발표를 함께 냈어요:

1. **Claude Sonnet 5 공개** — 새로운 균형형 최상위 모델
2. **Fable 5 전 세계 재개** — 6월 12일 수출통제 이후 재개통

---

## 1. Claude Sonnet 5 — 새로운 균형형 최상위 모델 `[블]`

### Sonnet 5가 뭔가요?

Anthropic 공식 설명:

> "Sonnet 5 delivers frontier performance across coding, agents, and professional work at scale."

**프론티어(frontier)** = 현재 가능한 최고 수준의 AI 성능이라는 뜻이에요.

> 🍱 **비유**: Sonnet 4.6이 "중형 세단"이었다면, Sonnet 5는 같은 가격대에서 스포츠카급 성능을 내는 것과 같아요. 코딩·에이전트·업무 모두에서 기대 이상의 결과를 내줘요.

### 모델 계층 업데이트 (2026-07-01 추정 기준)

```
모델 계층 (추정):
────────────────────────────
🥇 Fable 5               ← 최상위 (재개)
🥈 Opus 4.8              ← 파워 유저
🥉 Sonnet 5              ← 균형형 최상위 ← NEW
   Sonnet 4.6            ← 이전 균형형
   Haiku 4.5             ← 경량·빠름
```

<div class="note-circle">

○ 위 계층 구조는 **추정**이에요 — 공식 사양표 미공개  
○ Sonnet 5를 Claude Code에서 쓰려면 `/model sonnet-5` 또는 `/model` 메뉴에서 선택 (업데이트 필요)  
○ 정확한 모델 ID는 Anthropic 공식 문서 확인을 권장해요

</div>

### Claude Code에서 어떻게 활용하나요?

```bash
# 최신 버전으로 업데이트
claude update

# Sonnet 5 선택
/model claude-sonnet-5

# 또는 모델 선택 메뉴에서
/model
```

| 사용 시나리오 | 추천 |
|---|---|
| 코딩 작업 (빠른 속도 + 고품질) | Sonnet 5 |
| 매우 복잡한 설계·리팩토링 | Opus 4.8 또는 Fable 5 |
| 단순 질문·빠른 응답 | Haiku 4.5 |

---

## 2. Fable 5 전 세계 재개 + 탈옥 방지 프레임워크 `[블]`

### 상황 복기: 왜 접근이 막혔었나요?

2026년 6월 12일, 미국 정부의 수출통제 지시에 따라 Fable 5·Mythos 5 접근이 전면 정지됐었어요. ([당시 상황 → 모델 총정리 문서](/docs/next/new-models-2026-06) 참조)

### 6월 30일: Fable 5 돌아왔어요!

**2026년 7월 1일부터 Fable 5가 전 세계에서 다시 접근 가능**해요.

Anthropic이 Fable 5를 재개통하면서 함께 발표한 것이 있어요 — **업계 공동 탈옥(jailbreak) 심각도 평가 프레임워크**예요.

### 업계 공동 탈옥 방지 프레임워크

> "We're also proposing an industry-wide framework for scoring jailbreak severity, together with Amazon, Microsoft, Google, and other Glasswing partners."

**Glasswing 파트너들** (Amazon, Microsoft, Google 등)과 함께 탈옥 시도의 심각도를 점수화하는 업계 공통 기준을 만들었어요.

> 🍱 **비유**: 사이버 보안에 "취약점 심각도 등급(CVSS)" 기준이 있는 것처럼, AI 모델의 탈옥 시도에도 표준 심각도 점수를 매기자는 거예요. 여러 회사가 같은 기준을 쓰면 대응도 빨라져요.

### 탈옥 방지 추가 세부 내용 (2026-07-02)

이틀 뒤 Anthropic이 후속 글을 발표했어요:

> "More details on Fable 5's cyber safeguards and our jailbreak framework" (Jul 2, 2026)

Fable 5가 어떤 사이버 보안 장치들을 갖추고 있는지, 탈옥 프레임워크가 실제로 어떻게 작동하는지 더 자세히 다뤘어요.

<div class="note-circle">

○ 세부 내용은 Anthropic 공식 블로그 확인 권장  
○ 일반 Claude Code 사용자에게는 "Fable 5가 돌아왔다"는 것이 핵심이에요

</div>

---

## 업데이트 정리

| 항목 | 이전 상태 | 현재 상태 (2026-07-07 기준) |
|---|---|---|
| Fable 5 접근 | ⚠️ 수출통제로 정지 (2026-06-12~) | ✅ 전 세계 재개 (2026-07-01~) |
| Claude Sonnet 5 | 없음 | ✅ 출시 (2026-06-30) |
| 탈옥 방지 프레임워크 | 개별 대응 | 업계 공동 기준 (Anthropic+Amazon+MS+Google) |

---

## 한국 사용자에게 드리는 안내

Fable 5가 재개됐어요! 이제 다시 사용할 수 있어요:

```bash
# Claude Code v2.1.170 이상 필요
claude update

# Fable 5 선택
/model fable
```

그리고 Sonnet 5도 새로 쓸 수 있어요 — 코딩 작업에서 기존 Sonnet 4.6보다 훨씬 강력한 성능을 기대해보세요.
