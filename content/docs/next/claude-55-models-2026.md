---
title: "[공] Claude 5.5 패밀리 + Fable 5.2 — 2026년 가을·겨울 모델 대업데이트"
description: "Opus 5.5·Sonnet 5.5·Haiku 5.5 순차 출시(2026년 9~10월), Fable 5.2·Mythos 5.2(2026년 11월)까지 한눈에 정리"
tags: ["자동생성", "모델", "Opus5.5", "Sonnet5.5", "Haiku5.5", "Fable5.2", "업데이트", "2026"]
category: "next"
order: 17
lastUpdated: "2026-11-15"
---

<div class="note-star">
★ <strong>[공]</strong> 모두 Anthropic 공식 발표 기준. 세부 벤치마크는 각 모델 공식 블로그 포스트에서 확인하세요.<br/>
★ Fast Mode가 <strong>Opus 5.5</strong>를 기준으로 변경됐어요 — 이전 Opus 4.8 기준에서 업그레이드됐습니다.
</div>

## 한 문장 요약

> 2026년 9월부터 11월 사이, Claude 모델 가족이 **전면 세대교체** 됐어요. Opus·Sonnet·Haiku 모두 5.5 버전이 나왔고, 최상위 라인인 Fable·Mythos도 5.2로 업그레이드됐어요.

---

## 🗓️ 출시 타임라인

| 날짜 | 모델 | 한 줄 특징 |
|---|---|---|
| 2026-09-22 | **Claude Opus 5.5** | 에이전트 코딩·지식 작업 1위, Opus 5 대비 비용 40% 절감 |
| 2026-09-28 | **Claude Sonnet 5.5** | Sonnet 5보다 30%+ 빠름, 비용도 최대 30% 저렴 |
| 2026-10-07 | **Claude Haiku 5.5** | 가장 빠른 소형 모델, 요약·서브에이전트·브라우저 사용 최적화 |
| 2026-11-09 | **Claude Fable 5.2** | 코딩·금융·과학 분야 새 최고 성능 |
| 2026-11-09 | **Claude Mythos 5.2** | Fable 5.2와 함께 최상위 티어 업그레이드 |

---

## 모델별 한 줄 비유

> 🍳 **비유로 쉽게**: 주방 조리팀에 비유하면
> - **Haiku 5.5** = 주방 보조, 빠르고 반복 작업에 강함
> - **Sonnet 5.5** = 주임 요리사, 대부분 메뉴를 더 빠르고 저렴하게 뚝딱
> - **Opus 5.5** = 헤드 셰프, 복잡한 에이전트 작업과 긴 연구 담당
> - **Fable 5.2 / Mythos 5.2** = 미슐랭 스타 셰프, 최고 난이도 과제 전담

---

## Claude Opus 5.5

**출시일**: 2026년 9월 22일 | **공식 발표**: [블] anthropic.com/news

- 에이전트 코딩과 지식 집약 업무에서 최전선 성능
- Opus 5 대비 **40% 비용 절감** — 같은 작업을 더 경제적으로
- Claude Code의 기본 고성능 에이전트 작업에 사용

```
# 모델 ID (공식 발표 기준)
claude-opus-5-5
```

---

## Claude Sonnet 5.5

**출시일**: 2026년 9월 28일 | **공식 발표**: [블] anthropic.com/news

- Sonnet 5 대비 **30%+ 빠른** 응답
- 대부분의 작업에서 **최대 30% 비용 절감**
- 품질은 Sonnet 5 수준 유지하면서 속도·비용 모두 개선
- 일상적인 코딩 작업의 기본값으로 추천

---

## Claude Haiku 5.5

**출시일**: 2026년 10월 7일 | **공식 발표**: [블] anthropic.com/news

- 가장 빠른 경량 모델 (5.x 라인업 중)
- 고용량 작업 최적화: **요약, 서브에이전트, 브라우저 사용**
- 대규모 병렬 서브에이전트 실행 시 비용 효율 극대화

> 💡 **팁**: Dynamic workflows에서 많은 서브에이전트를 동시에 돌릴 때 Haiku 5.5를 지정하면 비용을 크게 아낄 수 있어요.

---

## Claude Fable 5.2 & Mythos 5.2

**출시일**: 2026년 11월 9일 | **공식 발표**: [블] anthropic.com/news

- 현재 가장 최신, 가장 강력한 모델
- **코딩·금융·과학** 3개 분야에서 새 기준점 설정
- Fable 5와 Mythos 5에서 한 단계 더 업그레이드

> ⚠️ **주의**: Fable·Mythos 계열은 미국 수출 통제 이력이 있으므로, 접근 가능 여부를 먼저 확인하세요. (2026-06-12 기준 글로벌 복귀 완료 상태)

---

## Fast Mode 업데이트

마케팅 페이지에서 확인된 Fast Mode 현황 (2026-11-15 기준):

| 항목 | 이전 | 현재 |
|---|---|---|
| 대상 모델 | Opus 4.8 | **Opus 5.5** |
| 가격 | $30/$150 per M tokens | **$8/$40 per M tokens** |
| 속도 | 2.5배 빠름 | 동일 |
| 가용성 | 소비 기반 플랜 | 소비 기반 플랜 |

> 💸 **변화 포인트**: Fast Mode 가격이 대폭 하락했어요. 이전에는 Input $30/Output $150이었는데, 현재 $8/$40으로 약 **73% 절감**이에요.

---

## Ultra Plan

> ℹ️ **추정 (공식 발표 기준)**: 마케팅 페이지 FAQ에서 확인된 내용으로, Pro·Max에 더해 **Ultra** 플랜이 추가됐어요. 세부 조건은 공식 사이트를 확인하세요.

현재 확인된 플랜 목록:
- Claude Pro, **Max**, **Ultra** plan
- Team / Enterprise plan
- Claude Console account (개발자)

---

## Claude Code에서 모델 선택하는 법

```bash
# 특정 모델로 고정 (settings.json)
# ~/.claude/settings.json
{
  "model": "claude-opus-5-5"
}

# 또는 세션 시작 시
claude --model claude-sonnet-5-5
```

> 💡 **입문자 추천**: 별도 설정 없이 Claude Code를 쓰면 Anthropic이 자동으로 최적 모델을 배정해요. 특별한 이유가 없으면 기본값이 가장 좋아요.

---

## 정리

| 모델 | 나에게 맞는 상황 |
|---|---|
| Haiku 5.5 | 빠른 반복 작업, 서브에이전트 대량 실행 |
| Sonnet 5.5 | 일상 코딩, 빠른 응답이 필요할 때 |
| Opus 5.5 | 복잡한 에이전트 태스크, 긴 연구 작업 |
| Fable 5.2 | 최고 난이도 과제, 코딩·금융·과학 |

> 출처: anthropic.com/news (Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.2 공식 발표) `[공]`
