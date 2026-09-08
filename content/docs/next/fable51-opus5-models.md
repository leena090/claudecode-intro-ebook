---
title: "[블] Claude Fable 5.1·Mythos 5.1·Opus 5 — 2026년 하반기 신규 모델 안내"
description: "2026년 7~9월 출시된 Opus 5 (Jul 24), Fable 5.1 및 Mythos 5.1 (Sep 1)의 특징과 Claude Code에서의 활용 방법"
tags: ["자동생성", "신규모델", "opus5", "fable5", "mythos5", "모델업데이트"]
category: "next"
order: 18
lastUpdated: "2026-09-08"
---

<div class="note-star">
★ <strong>[블] Anthropic 공식 발표 기반</strong> — <a href="https://www.anthropic.com/news">anthropic.com/news</a> + <a href="https://code.claude.com/docs/en/whats-new/2026-w30">공식 문서 W30</a><br />
★ Fable 5.1·Mythos 5.1 세부 성능 수치는 공식 발표 기준이며, Claude Code에서의 실제 동작은 추후 확인이 필요할 수 있어요
</div>

## 2026년 하반기 모델 변화 한눈에 보기

| 모델 | 출시일 | 특징 | Claude Code에서 |
|---|---|---|---|
| **Claude Opus 5** | 2026-07-24 | 새 기본 Opus 모델, 1M 컨텍스트 | Max/Team/Enterprise 기본값 |
| **Claude Fable 5.1** | 2026-09-01 | 코딩·지식 업무 최강, 과학 연구 | 최상위 티어 |
| **Claude Mythos 5.1** | 2026-09-01 | Fable 5.1과 쌍둥이 모델 | 최상위 티어 |

> 🍱 **비유로 설명하면**: 스마트폰이 Galaxy S25 → S25 Ultra → S26 Ultra로 업그레이드된 것처럼, Claude도 Sonnet 5·Opus 5에서 한 단계 더 나아간 최상위 라인이 출시된 거예요.

---

## Claude Opus 5 (2026년 7월 24일 출시)

### 무엇이 달라졌나요?

**Anthropic 공식 발표 기준**, Opus 5는 장기 실행 에이전트 환경에서 더 나은 성능을 보여주며, 코딩과 전문 업무에서도 개선됐어요.

```bash
# Claude Code에서 Opus 5로 전환
/model claude-opus-5
```

### 주요 특징

**1M 토큰 컨텍스트 윈도우**
- Anthropic API, Max/Team/Enterprise 플랜에서 기본 제공
- Amazon Bedrock, Google Cloud Agent Platform에서는 1M 모델 변형 선택 필요

**Fast Mode 업데이트**
- Opus 5 Fast Mode: **$10/$50 per MTok** (입력/출력)
- 기존 Opus 4.8 Fast Mode($30/$150)에서 가격 변경
- 여전히 2.5배 빠른 속도

**지원 플랫폼**
- Claude API (Anthropic 직접)
- Claude Platform on AWS
- Amazon Bedrock
- Google Cloud's Agent Platform

### Claude Code에서 언제 쓰면 좋아요?

| 상황 | 추천 모델 |
|---|---|
| 일반적인 코딩 작업 | Sonnet 5 (기본값) |
| 복잡한 아키텍처 설계 | Opus 5 |
| 장기 실행 에이전트 작업 | Opus 5 |
| 대용량 코드베이스 분석 (1M 컨텍스트 필요) | Opus 5 |
| 가장 빠른 응답이 필요 | Opus 5 Fast Mode |

---

## Claude Fable 5.1 & Mythos 5.1 (2026년 9월 1일 출시)

### Anthropic의 공식 소개

Anthropic은 2026년 9월 1일, **"코딩과 지식 업무를 위한 가장 고급 모델"**이자 **"AI 모델이 과학적 진보에 기여하는 방식의 초기 모습을 보여주는"** 모델로 Fable 5.1과 Mythos 5.1을 발표했어요.

> 🍱 **비유로 설명하면**: 일반 의사(Sonnet 5), 전문의(Opus 5)에 이어, 이제 의학 박사이자 연구원 수준의 AI(Fable 5.1)가 등장한 거예요. 복잡한 연구나 난이도 높은 전문 업무에서 빛을 발해요.

### 어떤 작업에서 강할까요? (추정 기준)

공식 발표에서 강조된 특징들:
- **코딩 작업**: 최전선 성능
- **지식 업무**: 전문적인 분석·추론·문서 작성
- **과학 연구 보조**: AI가 연구에 기여하는 가능성을 제시

> ⚠️ **추정**: Fable 5.1의 Claude Code 내 구체적인 명령어나 세부 설정은 공식 문서가 업데이트되는 대로 확인이 필요해요.

### Mythos 5.1은 뭔가요?

Mythos 5.1은 Fable 5.1과 같은 날 발표된 **쌍둥이 모델**이에요. 이전 Fable 5/Mythos 5 세대처럼 두 모델은 함께 운영되는 최상위 티어를 이루고 있어요.

> 💡 Fable 5(2026-06-09 출시)에서 5.1로의 업그레이드는 이전 4.x → 5.x 전환보다는 작은 개선(점진적 업데이트)으로 보여요. 공식 발표 기준.

---

## 모델 계층 정리 (2026년 9월 기준)

```
최상위: Fable 5.1 / Mythos 5.1  ← 2026-09-01 출시
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
고급:   Opus 5                   ← 2026-07-24 출시
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
표준:   Sonnet 5                 ← Claude Code 기본값
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
경량:   Haiku 4.5                ← 빠른 응답·저비용
```

### 요금제별 기본 모델

| 플랜 | 기본 모델 | 변경 가능? |
|---|---|---|
| Pro ($17~20/월) | Sonnet 5 | `/model` 명령으로 변경 가능 |
| Max 5x ($100/월) | Sonnet 5 → Opus 5 | ✅ |
| Max 20x ($200/월) | Sonnet 5 → Opus 5 | ✅ |
| Team/Enterprise | Sonnet 5 → Opus 5 | ✅ |
| API (Console) | 직접 지정 | — |

---

## Claude Code에서 모델 전환하는 법

```bash
# 1. 대화 중 모델 전환
/model claude-opus-5
/model claude-sonnet-5
/model claude-fable-5-1   # (추정 ID — 공식 확인 필요)

# 2. 환경변수로 기본 모델 설정 (W34 신기능)
export ANTHROPIC_DEFAULT_MODEL=claude-opus-5

# 3. Fast Mode 토글 (Opus 5 전용)
/fast
```

> ⚠️ Fable 5.1의 정확한 모델 ID는 공식 문서 업데이트 후 확인하세요. 현재 `claude-fable-5-1` 형식으로 추정됩니다.

---

## 실전 팁: 어떤 모델을 선택해야 할까요?

> 🍱 **비유**: 이사할 때 짐 규모에 따라 다마스(Haiku) vs 2.5톤 트럭(Sonnet) vs 5톤 트럭(Opus) vs 대형 이삿짐 전문업체(Fable)를 선택하듯이요.

```
일반 코딩 질문, 간단한 수정 → Sonnet 5 (기본값, 빠르고 저렴)
━━━━━━━━━━━━━━━━━━━━━━━━━
복잡한 설계, 대규모 리팩토링 → Opus 5 (깊은 이해력)
━━━━━━━━━━━━━━━━━━━━━━━━━
전문 연구, 최고 품질 요구 → Fable 5.1 (최강, 하지만 고비용)
```

---

## 다음 단계

- **[W30~W34 신기능 요약](/docs/next/whats-new-w30-w34)** — 이번 업데이트의 다른 기능들
- **[1M 컨텍스트 활용법](/docs/advanced/one-million-context)** — Opus 5의 1M 컨텍스트 최대 활용
- **[Fast Mode 상세](/docs/advanced/voice-fast)** — Opus 5 Fast Mode 설정
- **[모델 설정 가이드](https://code.claude.com/docs/en/model-config)** — 공식 문서
