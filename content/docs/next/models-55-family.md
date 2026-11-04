---
title: "[공][블] Claude 5.5 패밀리 출시 — Opus·Sonnet·Haiku 모두 업그레이드"
description: "2026년 가을, Claude 5.5 패밀리가 등장했어요. Opus 5.5는 에이전트 코딩 최강자, Sonnet 5.5는 30% 빠르고 싸고, Haiku 5.5는 소형 모델 최고봉"
tags: ["자동생성", "5.5", "Opus5.5", "Sonnet5.5", "Haiku5.5", "모델업데이트", "에이전트", "패스트모드"]
category: "next"
order: 17
lastUpdated: "2026-11-04"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5.5 출시: <a href="https://www.anthropic.com/news/claude-opus-5-5">anthropic.com/news</a> (Sep 22·Nov 4, 2026)
<br />★ <strong>[블]</strong> Claude Sonnet 5.5 출시: <a href="https://www.anthropic.com/news/claude-sonnet-5-5">anthropic.com/news</a> (Sep 28, 2026)
<br />★ <strong>[블]</strong> Claude Haiku 5.5 출시: <a href="https://www.anthropic.com/news/claude-haiku-5-5">anthropic.com/news</a> (Oct 7, 2026)
<br />★ <strong>Fast Mode</strong> 가격 변경: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (공식 발표 기준)
</div>

## 한눈에 보는 5.5 패밀리 변화

> 🏃 **비유로 설명하면**: 자동차 모델이 한꺼번에 풀 체인지 된 느낌이에요. 고급 세단(Opus), 중형 세단(Sonnet), 경차(Haiku)가 모두 새 엔진으로 바뀌었어요. 가격은 그대로거나 오히려 내려가고, 성능은 쭉 올라갔어요.

| 모델 | 출시일 | 핵심 변화 | 비용 변화 |
|---|---|---|---|
| **Opus 5.5** | 2026-09-22 | 에이전트 코딩 + 지식 업무 선도 | Opus 5 대비 **40% 절감** |
| **Sonnet 5.5** | 2026-09-28 | Sonnet 5보다 **30%+ 빠름** | 최대 **30% 절감** |
| **Haiku 5.5** | 2026-10-07 | 소형 최강 — 서브에이전트·요약·브라우저 | 소형 모델 최저가 클래스 |

---

## Claude Opus 5.5 — 에이전트 코딩의 새 왕

### 무엇이 달라졌나요?

**Claude Opus 5.5** (`claude-opus-5-5`)는 **에이전트 코딩과 지식 업무**에서 가장 앞선 성능을 내는 모델이에요.

Anthropic 공식 발표 기준:
- 에이전트 코딩 벤치마크에서 최고 점수
- 지식 집약적 업무(연구, 분석, 복잡한 추론)에서 선두
- **Opus 5 대비 평균 40% 비용 절감** — 더 뛰어나면서 더 저렴

> 🏋️ **비유**: 올해 나온 최신형 고급 세단인데 연비가 40% 좋아진 거예요. 성능도 오르고 유지비도 줄었어요.

### Fast Mode도 Opus 5.5로 업그레이드

이전에 Fast Mode는 Opus 4.8 기준이었는데, **Opus 5.5로 대상 모델이 바뀌었어요**.

| 항목 | 이전 (Opus 4.8) | 현재 (Opus 5.5) |
|---|---|---|
| 대상 모델 | claude-opus-4-8 | **claude-opus-5-5** |
| 속도 | 2.5배 빠름 | 계속 빠름 |
| 가격 (입력/출력) | $30/$150 per M tokens | **$8/$40 per M tokens** |

> 💡 **공식 발표 기준**: 리서치 프리뷰 단계. 소비 기반(consumption-based) 플랜 및 구독 플랜 사용 크레딧으로 사용 가능.

---

## Claude Sonnet 5.5 — 균형형 모델의 진화

### 핵심 개선 사항

**Claude Sonnet 5.5** (`claude-sonnet-5-5`)는 기존 Sonnet 5의 직접적인 업그레이드예요.

| 비교 항목 | Sonnet 5 | **Sonnet 5.5** |
|---|---|---|
| 속도 | 기준 | **30%+ 빠름** |
| 비용 | 기준 | **최대 30% 절감** |
| 품질 | 높음 | 더 높음 |

> 🛺 **비유**: 같은 가격에 더 빠른 택시를 탄 느낌이에요. 오히려 요금도 싸졌어요.

### 어떤 작업에 좋아요?

Sonnet 5.5는 **코딩, 에이전트 작업, 일상 개발**에 최적이에요. 많은 경우 Sonnet 5.5가 기본 모델로 사용됩니다.

---

## Claude Haiku 5.5 — 소형 모델의 최강자

### 무엇이 달라졌나요?

**Claude Haiku 5.5** (`claude-haiku-5-5`)는 **빠르고 저렴한 소형 모델**이에요. Anthropic 공식 표현으로 "our fastest, most capable small model"이라고 불러요.

특히 잘 하는 작업:
- 🔍 **요약(Summarization)** — 긴 문서를 빠르게 정리
- 🤖 **서브에이전트(Subagents)** — 대규모 병렬 작업에서 각 에이전트로 활용
- 🌐 **브라우저 사용(Browser use)** — 웹 탐색 자동화

> 🚗 **비유**: 소형차인데 요즘 나온 최신 전기차예요. 작고 가볍고 빠르고 연비도 최고.

---

## 5.5 패밀리 선택 가이드

| 상황 | 추천 모델 | 이유 |
|---|---|---|
| 복잡한 에이전트 코딩, 긴 연구 작업 | **Opus 5.5** | 최고 성능, 이제 가격도 합리적 |
| 일반 코딩, 풀타임 개발 도우미 | **Sonnet 5.5** | 빠름 + 저렴 + 고품질의 균형 |
| 대량 반복 작업, 서브에이전트, 요약 | **Haiku 5.5** | 최소 비용으로 대규모 처리 |
| 빠른 응답이 중요한 모든 경우 | **Fast Mode (Opus 5.5)** | Opus 5.5를 더 빠르게, $8/$40 |

---

## 모델 ID 정리

```bash
# Claude Code에서 모델 변경 시 사용하는 모델 ID
claude-opus-5-5       # Opus 5.5
claude-sonnet-5-5     # Sonnet 5.5
claude-haiku-5-5      # Haiku 5.5

# 설정 파일 예시
# ~/.claude/settings.json
{
  "model": "claude-sonnet-5-5"
}
```

> 📌 **참고**: 모델 ID의 정확한 형태는 공식 발표 기준이며, API 접근 방식에 따라 다를 수 있어요. 최신 모델 목록은 [공식 문서](https://code.claude.com/docs/en/model-config)를 확인하세요.
