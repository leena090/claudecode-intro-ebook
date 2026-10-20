---
title: "[블] Claude 5.5 시리즈 — Opus·Sonnet·Haiku 5.5 한 번에 정리"
description: "2026년 9~10월, Anthropic이 Opus 5.5·Sonnet 5.5·Haiku 5.5를 연달아 출시했어요. 각 모델의 특징과 Claude Code에서의 활용법을 알아봐요."
tags: ["자동생성", "모델업데이트", "Opus55", "Sonnet55", "Haiku55", "신규모델", "5.5시리즈"]
category: "next"
order: 24
lastUpdated: "2026-10-20"
---

<div class="note-star">
★ <strong>[블]</strong> Opus 5.5 발표: <a href="https://www.anthropic.com/news/claude-opus-5-5">anthropic.com/news/claude-opus-5-5</a> (Sep 22, 2026)<br />
★ <strong>[블]</strong> Sonnet 5.5 발표: <a href="https://www.anthropic.com/news/claude-sonnet-5-5">anthropic.com/news/claude-sonnet-5-5</a> (Sep 28, 2026)<br />
★ <strong>[블]</strong> Haiku 5.5 발표: <a href="https://www.anthropic.com/news/claude-haiku-5-5">anthropic.com/news/claude-haiku-5-5</a> (Oct 7, 2026)
</div>

## 왜 5.5 시리즈가 중요한가요?

2026년 9월~10월, Anthropic이 3주 사이에 모델 3종을 연달아 업그레이드했어요.

> 🚌 **비유로 설명하면**: 버스 노선 3개(급행·일반·마을버스)가 동시에 새 차로 교체된 거예요. 더 빠르고, 더 싸고, 더 편해졌어요.

| 모델 | 발표일 | 핵심 변화 |
|---|---|---|
| **Opus 5.5** | 2026-09-22 | Fable 5.1 수준 성능, Opus 5 대비 40% 저렴 |
| **Sonnet 5.5** | 2026-09-28 | Sonnet 5 대비 30% 빠름, 최대 30% 저렴 |
| **Haiku 5.5** | 2026-10-07 | 역대 가장 빠르고 저렴한 소형 모델 |

---

## Opus 5.5 — 최고 성능을 합리적 가격으로

### 어떤 점이 달라졌나요?

Anthropic 공식 발표 기준으로, Opus 5.5는 **대부분의 작업에서 Claude Fable 5.1 수준의 성능**을 발휘하면서도 Opus 5보다 **40% 저렴**해요(공식 발표 기준).

> 🥩 **비유**: 백화점 스테이크 맛인데 일반 음식점 가격이 된 거예요.

### Claude Code에서 Opus 5.5 사용하기

```bash
# 모델 직접 지정
claude --model claude-opus-5-5

# 설정 파일에서 기본 모델로 지정
# ~/.claude/settings.json
{
  "model": "claude-opus-5-5"
}
```

**추천 사용 상황:**
- 복잡한 아키텍처 설계나 대규모 리팩토링
- 여러 파일에 걸친 버그 추적
- 장시간 자동화 작업(Routines)

---

## Sonnet 5.5 — 빠르고 더 저렴해진 일상 모델

### 어떤 점이 달라졌나요?

Sonnet 5.5는 Sonnet 5 대비 **30% 빠르고** 대부분의 작업에서 **최대 30% 저렴**해요(공식 발표 기준). 성능도 더 올라갔어요.

> 🚄 **비유**: KTX가 더 빠르고, 요금도 내려갔어요. 그러면서 좌석은 더 넓어졌고요.

### Claude Code에서 Sonnet 5.5 사용하기

현재 Claude Code의 **기본 모델**은 claude-sonnet-5이지만, Sonnet 5.5로 업그레이드해 사용할 수 있어요.

```bash
# Sonnet 5.5로 세션 시작
claude --model claude-sonnet-5-5
```

**추천 사용 상황:**
- 매일 쓰는 코딩 작업 대부분
- PR 리뷰, 테스트 작성
- 중간 규모 리팩토링

---

## Haiku 5.5 — 가장 빠르고 저렴한 소형 모델

### 어떤 점이 달라졌나요?

Haiku 5.5는 Anthropic이 "역대 가장 빠르고, 저렴하고, 능력 있는 소형 모델"이라고 소개했어요(공식 발표 기준). 대량 처리 작업이나 비용에 민감한 자동화에 최적화돼 있어요.

> ⚡ **비유**: 전기 자전거인데, 이제 오토바이만큼 빨라졌어요. 그러면서 배터리는 더 오래 가고요.

**추천 사용 상황:**
- 반복적인 포맷 변환이나 요약
- CI/CD 파이프라인에서 대량 처리
- 비용이 중요한 자동화 루틴

---

## 어떤 모델을 골라야 할까요?

| 상황 | 추천 모델 |
|---|---|
| 복잡한 설계·분석 | **Opus 5.5** |
| 매일 쓰는 일반 코딩 | **Sonnet 5.5** |
| 빠른 반복 작업, 비용 절감 | **Haiku 5.5** |
| 최고 성능이 필요한 특수 작업 | **Fable 5.1** |

> 💡 **팁**: 모르겠으면 Sonnet 5.5부터 시작하세요. 대부분의 작업에서 가성비가 제일 좋아요.

---

## Fast Mode도 달라졌어요 → Opus 5.5 적용

Fast Mode(빠른 모드)도 함께 업그레이드됐어요. 자세한 내용은 **[Fast Mode Opus 5.5 업데이트](/docs/advanced/fast-mode-opus55)** 문서를 참고하세요.
