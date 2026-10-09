---
title: "[공][블] 2026년 9~10월 신규 모델: 하이쿠·소넷·오퍼스 5.5 & 페이블 5.1"
description: "2026년 9월~10월에 공개된 Claude .5 시리즈 4종 — 더 빠르고, 더 저렴하고, 더 강력해졌어요"
tags: ["자동생성", "모델", "haiku5.5", "sonnet5.5", "opus5.5", "fable5.1", "업데이트", "2026"]
category: "next"
order: 17
lastUpdated: "2026-10-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026년 9~10월 Anthropic 공식 발표 & Claude Code 주간 업데이트 기반. <code>[공]</code><br />
★ 이 문서는 자동 업데이트 에이전트가 생성했어요. 세부 정보는 공식 발표 기준이에요.
</div>

## 한 줄 요약

> 🆕 **하이쿠 5.5 · 소넷 5.5 · 오퍼스 5.5 · 페이블 5.1** — 4종이 한꺼번에 나왔어요.  
> 더 빠르고, 더 저렴하고, 성능은 더 높아졌습니다.

---

## 어떤 모델이 나왔나요?

| 모델 | 공개일 | 핵심 특징 |
|---|---|---|
| **Claude Fable 5.1** | 2026-09-04 (w36) | 100만 토큰 컨텍스트, `fable` 별칭 갱신 |
| **Claude Opus 5.5** | 2026-09-22 | Fable 5.1 수준 성능, Opus 5 대비 40% 저렴 |
| **Claude Sonnet 5.5** | 2026-09-28 | Sonnet 5 대비 30% 빠름, 비용 최대 30% 절감 |
| **Claude Haiku 5.5** | 2026-10-07 | 역대 가장 빠르고 저렴한 소형 모델 |

---

## 각 모델 상세

### 🔵 Claude Fable 5.1 — 최강 모델 업그레이드

> 🍱 **비유**: 지난 해에 샀던 최고급 자동차(Fable 5)가 공장 업그레이드를 받아 100만km 장거리 달리기가 가능해진 것과 같아요.

**주요 변경:**
- **100만 토큰(1M)** 컨텍스트 윈도우 지원
- `fable` 별칭이 이제 Fable 5.1을 가리켜요
- Claude Code에서 바로 사용 가능 (v2.1.257 이상)

```bash
# 현재 세션을 Fable 5.1로 변경
> /model fable
```

<div class="note-circle">
○ Claude 앱스 게이트웨이(기업) 세션에서 <code>fable</code>는 여전히 Fable 5를 선택해요<br />
○ 명시적으로 사용하려면: <code>/model claude-fable-5-1</code>
</div>

---

### 🟣 Claude Opus 5.5 — 가성비 고급 모델

> 🍱 **비유**: 프리미엄 레스토랑에서 동일한 셰프 요리를 40% 할인된 가격으로 먹을 수 있게 된 것과 같아요.

**특징:**
- 대부분의 작업에서 **Fable 5.1 수준의 성능**
- Opus 5 대비 **40% 저렴**
- 기업(Enterprise) 시트 기반 플랜의 **기본 모델**로 채택됨 (w36)

---

### 🟢 Claude Sonnet 5.5 — 일상 작업 최강

> 🍱 **비유**: 이미 빠른 배달 오토바이가 엔진 업그레이드를 받아 같은 길을 30% 더 빠르게 달리면서 연료도 30% 덜 써요.

**특징:**
- Sonnet 5 대비 **30% 더 빠른** 응답 속도
- 대부분의 작업에서 비용 **최대 30% 절감**
- 코딩·전문 업무의 데일리 드라이버 포지션

---

### 🟡 Claude Haiku 5.5 — 작지만 강한 소형 모델

> 🍱 **비유**: 가장 작은 사무실 직원이지만, 단순 반복 업무를 가장 빠르고 저렴하게 처리하는 스피드 챔피언이에요.

**특징:**
- 역대 **가장 빠르고 저렴한** 소형 모델
- 고속·비용 민감 업무에 최적화
- 대량 자동화 파이프라인에 적합

---

## Fast Mode 가격 변경 🔄

<div class="note-star">
★ <strong>중요 변경</strong> — Fast Mode 대상 모델과 가격이 변경됐어요.
</div>

| 구분 | 이전 (2026-07) | 현재 (2026-10) |
|---|---|---|
| 대상 모델 | Opus 4.8 | **Opus 5.5** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| 가격 | $30/$150 per M tokens | **$8/$40 per M tokens** |
| 상태 | 리서치 프리뷰 | 리서치 프리뷰 |

> 🍱 **비유**: 빠른 배송 서비스 요금이 대폭 인하됐어요. 더 좋은 트럭(Opus 5.5)으로 바꿨는데 오히려 더 저렴해진 거예요.

---

## 어떤 모델을 쓰면 좋을까요?

| 상황 | 추천 모델 |
|---|---|
| 복잡한 코딩, 설계 결정 | **Opus 5.5** 또는 **Fable 5.1** |
| 일반 코딩, 리팩토링 | **Sonnet 5.5** (기본값) |
| 빠른 질문, 대량 처리 | **Haiku 5.5** |
| 100만 토큰 초대형 컨텍스트 | **Fable 5.1** |

```bash
# 현재 세션 모델 변경
> /model opus    # Opus 5.5
> /model sonnet  # Sonnet 5.5
> /model haiku   # Haiku 5.5
> /model fable   # Fable 5.1
```

---

## 참고 링크

- [공식 발표: Claude Opus 5.5](https://www.anthropic.com/news/claude-opus-5-5) `[공식 발표 기준]`
- [공식 발표: Claude Sonnet 5.5](https://www.anthropic.com/news/claude-sonnet-5-5) `[공식 발표 기준]`
- [공식 발표: Claude Haiku 5.5](https://www.anthropic.com/news/claude-haiku-5-5) `[공식 발표 기준]`
- [Fast Mode 공식 문서](https://code.claude.com/docs/en/fast-mode)
- [모델 설정 가이드](https://code.claude.com/docs/en/model-config)
