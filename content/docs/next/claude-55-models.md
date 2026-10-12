---
title: "[블] Claude 5.5 패밀리 출시 — Haiku·Sonnet·Opus 모두 업그레이드"
description: "2026년 9~10월에 Claude 5.5 시리즈가 순차 공개됐어요. Opus 5.5는 Fable 5.1 수준 성능을 40% 저렴하게, Sonnet 5.5는 30% 더 빠르고 30% 더 저렴하게, Haiku 5.5는 소형 모델 최강으로 새단장했습니다"
tags: ["자동생성", "Claude5.5", "Haiku5.5", "Sonnet5.5", "Opus5.5", "신규모델", "모델업데이트"]
category: "next"
order: 17
lastUpdated: "2026-10-12"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5.5 발표: <a href="https://www.anthropic.com/news/claude-opus-5-5">anthropic.com/news</a> (Sep 22, 2026)<br />
★ <strong>[블]</strong> Claude Sonnet 5.5 발표: <a href="https://www.anthropic.com/news/claude-sonnet-5-5">anthropic.com/news</a> (Sep 28, 2026)<br />
★ <strong>[블]</strong> Claude Haiku 5.5 발표: <a href="https://www.anthropic.com/news/claude-haiku-5-5">anthropic.com/news</a> (Oct 7, 2026)<br />
★ 아래 내용은 Anthropic 공식 블로그 발표 기준이며, 세부 가격·성능 수치는 공식 발표 기준입니다.
</div>

## 한 눈에 보는 Claude 5.5 시리즈

> 🍱 **비유로 설명하면**: 삼성이 갤럭시 S 시리즈를 한 번에 "보급형·중간·플래그십" 모두 업그레이드 한 것과 같아요. Claude도 이번에 라인업 전체를 동시에 한 단계씩 올렸습니다.

| 모델 | 발표일 | 한 줄 특징 |
|---|---|---|
| **Opus 5.5** | 2026-09-22 | Fable 5.1 수준 성능, Opus 5 대비 40% 저렴 |
| **Sonnet 5.5** | 2026-09-28 | Sonnet 5 대비 30% 빠름 + 최대 30% 저렴 |
| **Haiku 5.5** | 2026-10-07 | 소형 모델 최강, 대용량·비용 민감 작업 특화 |

---

## Opus 5.5 — "최고 성능을 40% 저렴하게"

**공식 발표**: "Opus 5.5 performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5."

> 🍱 **비유로 설명하면**: 작년에 나온 최고급 노트북(Fable 5.1) 수준의 성능을, 새 노트북은 그보다 훨씬 저렴하게 팔기 시작한 거예요. 성능은 그대로인데 가격만 내려간 셈이에요.

### Opus 5.5의 핵심 변화
- ✅ **성능**: Fable 5.1 수준 (이전 최고 모델과 동등)
- ✅ **가격**: Opus 5 대비 **40% 인하** (공식 발표 기준)
- ✅ **Fast Mode**: Opus 5.5가 Fast Mode 기본 모델로 채택 → 2.5배 빠른 속도, **$8/$40 per million tokens** (입력/출력)

### Fast Mode 가격 변화

| | 이전 (Opus 4.8) | 현재 (Opus 5.5) |
|---|---|---|
| **모델** | Opus 4.8 | **Opus 5.5** |
| **속도** | 2.5배 | 2.5배 |
| **가격 (입력/출력)** | $30/$150 per 1M tokens | **$8/$40 per 1M tokens** |
| **비교** | — | 약 73% 인하! |

> ⚠️ **주의**: Fast Mode는 소비 기반(consumption-based) 플랜 또는 구독 플랜의 크레딧에서 차감됩니다. 리서치 프리뷰 상태. `[공식 발표 기준]`

---

## Sonnet 5.5 — "30% 더 빠르고, 30% 더 저렴하게"

**공식 발표**: "A clear upgrade over Sonnet 5 that runs 30% faster and costs up to 30% less for most work."

> 🍱 **비유로 설명하면**: 지금 쓰는 배달 앱이 갑자기 배달 속도도 30% 빨라지고, 배달비도 30% 싸진다고 발표한 거예요. 성능과 비용 모두 좋아진 케이스예요.

### Sonnet 5.5의 핵심 변화
- ✅ **속도**: Sonnet 5 대비 30% 빠름
- ✅ **가격**: 대부분의 작업에서 최대 30% 저렴
- ✅ **품질**: Sonnet 5의 명확한 업그레이드 버전 (공식 표현: "clear upgrade")

### Claude Code에서 Sonnet 5.5

Sonnet 5는 2026년 7월부터 Claude Code의 기본 모델로 사용되어 왔어요. Sonnet 5.5가 출시되면서:
- 기본 모델이 Sonnet 5.5로 전환될 가능성이 높습니다 `[추정 — 공식 전환 일정 미공개]`
- 더 빠르고 저렴해지니, 매일 쓰는 코딩 작업에서 체감 효과가 클 거예요

---

## Haiku 5.5 — "가장 빠르고 저렴한 소형 모델"

**공식 발표**: "Our fastest, cheapest, and most capable small model yet. It's designed for high-volume, cost-sensitive work."

> 🍱 **비유로 설명하면**: 편의점 삼각김밥인데, 이번에 나온 건 "맛도 좋아지고, 더 싸진" 버전이에요. 부담 없이 자주 쓸 수 있어서 양이 많은 작업에 딱이에요.

### Haiku 5.5의 핵심 변화
- ✅ **속도**: 5.5 시리즈 중 가장 빠름
- ✅ **가격**: 5.5 시리즈 중 가장 저렴
- ✅ **성능**: 기존 Haiku 대비 가장 강력한 소형 모델

### 언제 Haiku 5.5를 쓸까?

| 상황 | 추천 모델 |
|---|---|
| 코드 문서화, 간단한 Q&A, 반복 작업 | **Haiku 5.5** (저렴·빠름) |
| 일반 코딩, 기능 개발, PR 리뷰 | Sonnet 5.5 (균형) |
| 복잡한 아키텍처 설계, 어려운 버그 | Opus 5.5 (고성능) |
| 극한 퍼포먼스 필요 | Opus 5.5 Fast Mode |

---

## 모델 선택 가이드 — 2026년 10월 기준

```
일상적인 코딩 작업
    └─ Sonnet 5.5 (기본 추천)

빠른 단순 작업·자동화
    └─ Haiku 5.5 (가장 저렴)

복잡한 설계·어려운 디버깅
    └─ Opus 5.5

시간이 급할 때 + 고성능 필요
    └─ Opus 5.5 Fast Mode ($8/$40, 2.5배 속도)
```

> 🍱 **비유로 설명하면**: 택시처럼 생각하세요. Haiku 5.5 = 카풀(저렴·빠름), Sonnet 5.5 = 일반 택시(균형), Opus 5.5 = 고급 리무진(비싸지만 최고), Fast Mode = 퀵서비스 오토바이(더 비싸지만 2.5배 빠름).

---

## Claude Code에서 모델 바꾸기

```bash
# 현재 사용 중인 모델 확인
/model

# 모델 직접 지정
claude --model claude-haiku-5-5-20261007
claude --model claude-sonnet-5-5-20260928
claude --model claude-opus-5-5-20260922
```

또는 settings.json에서 영구 설정:
```json
{
  "model": "claude-sonnet-5-5-20260928"
}
```

> ⚠️ 정확한 모델 ID는 [공식 문서](https://code.claude.com/docs/en/model-config)를 확인하세요. 위 ID는 공식 발표 기준 추정입니다. `[추정]`

---

## 더 알아보기

- [모델 설정 가이드](/docs/config/settings-json) — settings.json에서 모델 바꾸기
- [Fast Mode란?](/docs/advanced/voice-fast) — 2.5배 빠른 빠름 모드 상세
- [Claude Code 요금제](/docs/intro/platforms) — Pro/Max/Team/Enterprise 비교
