---
title: "[블] Claude Opus 5 출시 — 장기 에이전트·코딩·전문 업무 한 단계 도약"
description: "2026년 7월 24일 출시된 Opus 5는 Opus 티어의 한 단계 도약으로, 장기 에이전트 실행과 코딩·전문 업무 성능이 크게 향상됐습니다"
tags: ["자동생성", "Opus5", "모델업데이트", "에이전트", "코딩", "신규모델"]
category: "next"
order: 18
lastUpdated: "2026-08-12"
---

<div class="note-star">
★ <strong>[블]</strong> 출처: <a href="https://www.anthropic.com/news">anthropic.com/news</a> — "Introducing Claude Opus 5" (Jul 24, 2026)<br />
★ <strong>[공]</strong> 기본 모델 전환 확인: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a>
</div>

## Claude Opus 5가 출시됐어요

**2026년 7월 24일**, Anthropic이 **Claude Opus 5**(`claude-opus-5`)를 공식 출시했습니다.

Anthropic은 이번 모델에 대해 **"Opus 티어의 한 단계 도약(step change improvement)"** 이라고 표현했어요. 특히:

- **장기 에이전트(long-running agents)** 구동에 최적화
- **코딩(coding)** 성능 향상
- **전문 업무(professional work)** 전반에서 개선

> 🏆 **비유로 설명하면**: 기존 Opus 4.8이 "올림픽 금메달 선수"라면, Opus 5는 **"세계 신기록을 경신한 선수"** 예요. 같은 Opus 티어인데 뭔가 근본적으로 더 강해진 느낌이랄까요.

---

## 어떻게 달라졌나요?

| 항목 | Opus 4.8 | Opus 5 |
|---|---|---|
| **장기 에이전트** | 좋음 | **한 단계 도약** |
| **코딩** | 강함 | **더 강해짐** |
| **전문 업무** | 강함 | **더 강해짐** |
| **기본 Opus 모델** | (이전 기본) | ✅ **현재 기본** |
| **Fast Mode** | $30/$150/M | **$10/$50/M** |

⚠️ **추정**: 구체적인 벤치마크 수치는 공식 발표 기준이며, 세부 성능은 작업 유형에 따라 다를 수 있습니다.

---

## Claude Code에서 사용하는 방법

### 기본 설정으로 사용하기

W30 업데이트 이후 **Opus를 선택하면 자동으로 Opus 5**가 사용돼요. 별도 설정 없이 바로 적용됩니다.

```bash
# 세션 시작 시 Opus 5를 기본으로 설정 (예시)
claude --model claude-opus-5
```

### 어떤 작업에 Opus 5를 쓰면 좋을까요?

| 상황 | 추천 이유 |
|---|---|
| 여러 파일에 걸친 복잡한 리팩터링 | 깊은 코드베이스 이해력 |
| 멀티 에이전트 오케스트레이션 | 장기 에이전트 실행 최적화 |
| 설계 검토·아키텍처 분석 | 전문 업무 성능 향상 |
| 까다로운 버그 원인 추적 | 추론 능력 강화 |

> 📌 **참고**: 일반적인 코딩 작업이나 빠른 응답이 필요한 경우엔 **Sonnet 5**(`claude-sonnet-5`)가 여전히 좋은 선택이에요. Opus 5는 "깊게 생각해야 하는 복잡한 작업"에 빛을 발합니다.

---

## Fast Mode도 Opus 5로 업그레이드

**Fast Mode(패스트 모드)**가 이제 Opus 5 기반으로 바뀌었어요. 그리고 가격도 크게 낮아졌습니다.

| 항목 | 이전 (Opus 4.8 기반) | 이후 (Opus 5 기반) |
|---|---|---|
| **속도** | 2.5배 빠름 | 2.5배 빠름 (동일) |
| **Input 가격** | $30/M tokens | **$10/M tokens** |
| **Output 가격** | $150/M tokens | **$50/M tokens** |
| **가용 범위** | 리서치 프리뷰, 소비 기반 플랜 | 리서치 프리뷰, 소비 기반 플랜 |

> 💡 **핵심**: Opus 5가 Opus 4.8보다 강력한데 Fast Mode 가격은 3분의 1로 낮아졌어요! 더 좋은 모델을 더 저렴하게 빠르게 쓸 수 있게 된 셈입니다. (공식 발표 기준 — 추정)

Fast Mode를 켜는 방법: `/fast` 명령 또는 설정 > 모델 화면에서 토글

---

## 모델 라인업 전체 정리 (2026년 8월 기준)

| 모델 | 역할 | 특징 |
|---|---|---|
| `claude-fable-5` | 최상위 | Opus 위의 새 계층, 수출통제 해제 후 글로벌 복귀 |
| **`claude-opus-5`** | **Opus 기본** | 장기 에이전트·복잡한 코딩 최적화 |
| `claude-sonnet-5` | 기본 균형형 | 빠름 + 최전선 성능, Claude Code 기본 모델 |
| `claude-haiku-4-5-20251001` | 경량 | 빠른 간단 작업용 |

---

## Claude Code에서 모델 선택 팁

```
# 현재 사용 중인 모델 확인
/model

# 모델 변경 (세션 중 가능)
/model claude-opus-5      ← 복잡한 작업
/model claude-sonnet-5    ← 빠른 일반 작업
/model claude-haiku-4-5-20251001  ← 초간단 작업
```

모델별 상세 설정은 [Model configuration](https://code.claude.com/docs/en/model-config) 문서를 참고하세요.
