---
title: "[공][블] Claude Opus 5 & Fable 5.1 — 2026년 7~9월 모델 업데이트"
description: "2026년 7월 Opus 5 출시, 9월 Fable 5.1·Mythos 5.1 발표까지. 모델 라인업 변화와 Claude Code에서 쓰는 법을 쉽게 정리했어요"
tags: ["자동생성", "Opus5", "Fable5.1", "Mythos5.1", "모델업데이트", "신규모델", "FastMode"]
category: "next"
order: 18
lastUpdated: "2026-09-03"
---

<div class="note-star">
★ <strong>[공]</strong> Opus 5 출시: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a> (2026-07-24)
<br />★ <strong>[블]</strong> Fable 5.1 · Mythos 5.1 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (2026-09-01)
<br />★ 일부 세부 사항은 추정 포함 — "공식 발표 기준" 명시
</div>

## 한 눈에 보는 2026년 7~9월 모델 변화

| 날짜 | 내용 |
|---|---|
| 2026-07-24 | **Claude Opus 5** 공식 출시 + Claude Code 기본 Opus 모델 전환 |
| 2026-07-24 | Fast Mode 기준 모델: Opus 4.8 → **Opus 5**, 요금 $10/$50으로 인하 |
| 2026-09-01 | **Claude Fable 5.1 · Mythos 5.1** 공식 발표 |

---

## Claude Opus 5 — 강력해진 에이전트형 Opus

### 무엇이 달라졌나요?

**Claude Opus 5**(`claude-opus-5`)는 장시간 실행되는 에이전트 작업과 코딩·전문 업무에서 크게 향상된 새 Opus 모델이에요.

> 🔧 **비유로 설명하면**: 이전 Opus 4.8이 "최고급 베테랑 장인"이었다면, Opus 5는 **"더 빠르고 더 꼼꼼한 슈퍼 베테랑"** 이에요. 특히 오래 걸리는 복잡한 작업에서 차이가 커요.

### 주요 특징 (공식 발표 기준)

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **강점** | 장시간 에이전트 · 코딩 · 전문 업무 |
| **컨텍스트** | **100만 토큰** (API, Max, Team, Enterprise) |
| **Fast Mode** | $10/$50 per MTok (기존 Opus 4.8: $30/$150) |
| **출시일** | 2026년 7월 24일 |

### 어디에 기본 적용되나요?

Opus 5는 다음 플랜·플랫폼에서 기본 Opus 모델이에요:

- **Claude Code**: Max · Team Premium · Enterprise pay-as-you-go
- **Anthropic API** (직접 API 사용 시)
- **AWS**: Amazon Bedrock, Claude Platform on AWS
- **Google Cloud**: Agent Platform (1M 컨텍스트 모델 변형 선택)

### Claude Code에서 Opus 5 사용하기

```bash
# 직접 전환
/model claude-opus-5

# 설정 파일로 고정 (settings.json)
```

```json
{
  "model": "claude-opus-5"
}
```

<div class="note-star">
★ <strong>100만 토큰 컨텍스트</strong>: 대형 코드베이스 전체를 한번에 읽고 작업할 수 있어요. 기존 20만 토큰 대비 5배 확장!
</div>

### Fast Mode — 가격이 크게 내렸어요

**Fast Mode**(빠른 모드)가 Opus 4.8에서 **Opus 5**로 전환됐고, 요금도 내려갔어요.

| 항목 | Opus 4.8 (이전) | Opus 5 (현재) |
|---|---|---|
| **Fast Mode 입력** | $30/MTok | **$10/MTok** |
| **Fast Mode 출력** | $150/MTok | **$50/MTok** |
| **속도** | 2.5배 빠름 | 2.5배 빠름 (동일) |

> 💡 Fast Mode는 **소비 기반(consumption-based) 플랜** 또는 **구독 플랜의 사용량 크레딧**에서 적용됩니다.

---

## Claude Fable 5.1 · Mythos 5.1 — 최상위 모델 업그레이드

> ⚠️ **공식 발표 기준 (2026-09-01)**: Fable 5.1과 Mythos 5.1은 Anthropic이 공식 발표한 내용을 기반으로 작성했어요. Claude Code에서의 구체적인 접근 방법은 출시 이후 공식 문서를 확인하세요.

### 무엇이 달라졌나요?

2026년 9월 1일, Anthropic이 **Fable 5.1**과 **Mythos 5.1**을 공식 발표했어요.

> 🏆 **비유로 설명하면**: Fable 5가 "최고급 올라운더 선수"였다면, Fable 5.1은 **"그 선수가 시즌 훈련 후 돌아온 더 강해진 버전"** 이에요.

공식 발표 내용:
- **코딩과 지식 업무**에서 가장 진보된 모델
- **과학 연구** 분야에서도 AI 모델이 기여할 수 있는 초기 모습을 보여줌
- Fable 5.1 → 코딩 특화 최상위
- Mythos 5.1 → 지식·분석 특화 최상위

### Claude Code와의 관계

Fable 5(.1)는 현재 Claude Code에서 최상위 코딩 모델로 위치해 있어요:

```bash
# 현재 Claude Code 모델 라인업 (공식 발표 기준)
claude-fable-5-1    # 코딩 특화 최상위 (NEW)
claude-mythos-5-1   # 지식·분석 특화 최상위 (NEW)  
claude-opus-5       # 장시간 에이전트 (기본 Opus)
claude-sonnet-5     # 균형형 기본 모델 (Claude Code 기본)
claude-haiku-4-5    # 경량·빠른 모델
```

---

## 모델 선택 가이드 (2026년 9월 기준)

> 🗺️ **어느 모델을 써야 할지 모르겠다면?**

| 상황 | 추천 모델 |
|---|---|
| 일상적인 코딩·작업 | `claude-sonnet-5` (기본값) |
| 복잡한 장시간 에이전트 작업 | `claude-opus-5` |
| 가장 어려운 코딩 과제 | `claude-fable-5-1` |
| 빠른 간단 작업 | `claude-haiku-4-5` |
| 빠른 Opus급 작업 필요 | `/fast` 켠 후 Opus 5 (Fast Mode) |

### 모델 빠른 전환 방법

```bash
# 세션에서 바로 변경
/model claude-sonnet-5       # Sonnet 5 (기본)
/model claude-opus-5         # Opus 5 (강력 에이전트)
/model claude-fable-5-1      # Fable 5.1 (최상위 코딩)

# Fast Mode 전환 (Opus 5 기준 $10/$50/MTok)
/fast
```

---

## 요금제별 모델 접근 정리

| 요금제 | 기본 모델 | Opus 5 | Fable 5.1 |
|---|---|---|---|
| **Pro** ($17~$20/월) | Sonnet 5 | 제한적 | 제한적 |
| **Max 5x** ($100/월) | Sonnet 5 | ✅ 포함 | 확인 필요 |
| **Max 20x** ($200/월) | Sonnet 5 | ✅ 포함 | ✅ 포함 (추정) |
| **Team/Enterprise** | Sonnet 5 | ✅ 포함 | 플랜별 상이 |
| **API (소비 기반)** | 선택 가능 | ✅ API 가격 | ✅ API 가격 |

> ⚠️ Fable 5.1 접근 가능 여부는 플랜별로 다를 수 있어요. 공식 문서를 확인하세요.

---

## 정리: 이 변화가 나에게 의미하는 것

입문자라면 사실 **기본 모델(Sonnet 5)만으로도 충분**해요. 하지만 이런 상황에서 업그레이드를 고려해보세요:

1. **Opus 5**: "클로드가 한 번에 해결 못 하고 포기한다"는 느낌이 든다면
2. **Fast Mode**: 빠른 답이 필요하고 비용을 추가로 쓸 의향이 있다면
3. **Fable 5.1**: 정말 어렵고 복잡한 코딩 프로젝트를 전문적으로 처리해야 한다면

> 💡 **팁**: 먼저 기본 모델(Sonnet 5)로 시도해보고, 잘 안 풀리면 `/model claude-opus-5`로 업그레이드해보세요!
