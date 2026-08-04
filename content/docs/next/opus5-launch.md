---
title: "[블] Claude Opus 5 출시 — 장시간 에이전트 작업의 새 기준"
description: "2026년 7월 24일 Claude Opus 5가 공식 출시됐어요. Fast Mode도 Opus 5로 업그레이드, 요금은 오히려 내려갔습니다"
tags: ["자동생성", "Opus5", "모델업데이트", "FastMode", "에이전트", "신규모델", "2026-07"]
category: "next"
order: 17
lastUpdated: "2026-08-04"
---

<div class="note-star">
★ <strong>[블]</strong> Introducing Claude Opus 5: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)
<br />★ <strong>[공]</strong> Fast Mode 변경 확인: claude.com/claude-code 마케팅 페이지 (2026-08-04 GA 스냅샷 기준)
<br />★ 세부 벤치마크·가격 정책은 공식 발표 기준 — 추가 공시 나오면 업데이트 예정
</div>

## 한 눈에 보는 변화

| 항목 | 이전 | 이후 |
|---|---|---|
| Opus 최신 모델 | claude-opus-4-8 | **claude-opus-5** |
| Fast Mode 대상 | Opus 4.8 | **Opus 5** |
| Fast Mode 요금 | $30 / $150 (백만 토큰) | **$10 / $50 (백만 토큰)** |
| Fast Mode 속도 | 2.5× 빠름 | 2.5× 빠름 (유지) |
| 출시일 | — | 2026년 7월 24일 |

---

## Claude Opus 5란?

**Claude Opus 5** (`claude-opus-5`)는 Opus 티어의 **세대 교체 모델**이에요.

공식 발표에 따르면:

> "Opus 5 is a step change improvement for the Opus tier, powering long-running agents while delivering improvements in coding and professional work."
> (Opus 5는 Opus 티어의 획기적인 개선 모델로, 장시간 에이전트 작업을 지원하고 코딩과 전문 업무에서 성능이 향상됐습니다.)

> 🏋️ **비유로 설명하면**: Sonnet 5가 "빠르고 만능인 에이스 직원"이라면, Opus 5는 **"복잡한 장기 프로젝트를 끝까지 책임지는 시니어 전문가"** 예요. 빠른 일상 업무는 Sonnet이 맡고, 며칠치 분석이나 대형 코드베이스 리팩터링 같은 장기 작업은 Opus가 맡는 분업 구조예요.

---

## 장시간 에이전트에 최적화

Opus 5의 핵심 설계 방향은 **장시간 실행 에이전트(long-running agent)** 지원이에요.

Claude Code에서 이런 작업에 유리합니다:

| 작업 종류 | 예시 |
|---|---|
| 대형 코드베이스 리팩터링 | 수십 개 파일 동시 수정 |
| 복잡한 버그 추적 | 긴 실행 체인 따라가며 원인 분석 |
| 전체 테스트 스위트 작성 | 프로젝트 전체 커버리지 달성 |
| 멀티 에이전트 오케스트레이션 | 여러 서브에이전트 총괄 |
| 기술 문서 작성 | 대규모 코드 이해 후 상세 문서화 |

---

## Fast Mode도 Opus 5로 업그레이드

기존에는 Opus 4.8에서만 Fast Mode를 쓸 수 있었는데, **이제 Opus 5가 Fast Mode의 기준 모델**이에요.

### Fast Mode란?

**2.5배 빠른 속도**로 Opus 5를 사용하는 고속 실행 모드예요.

> ⚡ **비유로 설명하면**: 일반 Opus 5가 "꼼꼼히 생각하며 글 쓰는 작가"라면, Fast Mode는 **"초안을 빠르게 뽑아주는 속도형 버전"** 이에요. 속도는 2.5배 올라가지만, 완성도는 일반보다 조금 낮을 수 있어요.

### 요금 변화 — 오히려 내려갔어요!

| 모드 | 입력 토큰 | 출력 토큰 |
|---|---|---|
| Opus 4.8 Fast (이전) | $30 / 백만 | $150 / 백만 |
| **Opus 5 Fast (현재)** | **$10 / 백만** | **$50 / 백만** |

✅ 더 강력한 모델인데도 요금이 **3배 저렴**해졌어요.

### Fast Mode 이용 방법

```bash
# /config에서 Dynamic workflows가 켜져 있어야 Fast Mode 활성
/config
# → Fast mode 항목 확인
```

<div class="note-star">
★ Fast Mode는 현재 <strong>리서치 프리뷰(Research Preview)</strong> 단계예요.<br />
★ 소비 기반(Consumption-based) 플랜과 구독 플랜의 사용 크레딧 방식으로 이용 가능합니다.<br />
★ <strong>추정</strong>: 정식 출시 시 가격·조건이 바뀔 수 있어요.
</div>

---

## 어떤 플랜에서 쓸 수 있나요?

| 플랜 | Opus 5 사용 | Fast Mode |
|---|---|---|
| Pro ($17/월~) | ✅ | ✅ (사용량 한도 있음) |
| Max 5× ($100/월) | ✅ | ✅ |
| Max 20× ($200/월) | ✅ | ✅ |
| Team · Enterprise | ✅ | ✅ (정책에 따라 다름) |

---

## 현재 모델 라인업 정리

| 모델 | 특징 | 최적 용도 |
|---|---|---|
| `claude-haiku-4-5` | 가장 빠르고 저렴 | 간단한 질문, 고속 처리 |
| `claude-sonnet-5` | **기본 모델** — 균형형 최강 | 일상 코딩, 에이전트 작업 |
| `claude-opus-5` | 가장 강력 — 장기 작업 특화 | 복잡한 장기 프로젝트 |
| `claude-fable-5` | 최상위 창작·추론 모델 | 고난도 추론, 창작 |

<div class="note-star">
★ 기본 모델은 claude-sonnet-5 — 별도 설정 없으면 이걸 씁니다.<br />
★ 더 강력한 작업이 필요하면 <code>/model claude-opus-5</code> 로 전환하세요.
</div>

---

## 모델 전환하는 법

```bash
# 현재 세션에서 바로 전환
/model claude-opus-5       # Opus 5로 전환
/model claude-sonnet-5     # 다시 Sonnet 5(기본)로

# 또는 설정에서 기본값 변경
/config  # → Default model 항목
```

---

## 정리

Claude Opus 5 출시로 변한 것:

1. ✅ **장기 에이전트 작업 성능** 대폭 향상
2. ✅ **Fast Mode가 Opus 5 기준**으로 업그레이드
3. ✅ **Fast Mode 요금 3배 인하** ($30/$150 → $10/$50)
4. ✅ 코딩·전문 업무 전반 개선

평상시 코딩 작업은 Sonnet 5(기본)로, 복잡하고 오래 걸리는 대형 작업엔 Opus 5로 전환해보세요. 이제 Fast Mode 비용도 부담이 줄었으니, 속도가 필요한 상황에선 Fast Mode도 적극 활용해보세요! 🚀
