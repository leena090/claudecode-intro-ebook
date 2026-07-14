---
title: "[블] Claude Sonnet 5 출시 + Fable 5 전 세계 재배포 (2026년 6월 30일)"
description: "Sonnet 5는 코딩·에이전트 분야 최상위 성능, 1M 토큰 컨텍스트. Fable 5는 7월 1일부터 전 세계 복귀"
tags: ["블로그", "모델", "sonnet5", "fable5", "2026", "자동생성"]
category: "next"
order: 17
lastUpdated: "2026-07-14"
---

<div class="note-star">
★ <strong>Anthropic 공식 블로그 기반</strong> — "Introducing Claude Sonnet 5" + "Redeploying Fable 5" (2026-06-30). <code>[블]</code><br />
👉 <a href="https://www.anthropic.com/news/claude-sonnet-5" target="_blank">Sonnet 5 원문</a> /
<a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank">Fable 5 재배포 원문</a>
</div>

> 🗒️ Anthropic 공식 블로그 기반으로 작성. 기능·가격 정보는 공식 발표 기준이며, 세부 내역은 변경될 수 있어요.

---

## Claude Sonnet 5 — 새 기본 모델 🧠

2026년 6월 30일, **Claude Sonnet 5**가 공식 출시됐어요. Anthropic은 이를 "코딩, 에이전트, 전문 업무에서 프론티어급 성능"이라고 발표했어요.

> 🍱 **비유**: 스마트폰 기본 카메라가 이전 프리미엄 카메라 수준으로 업그레이드된 것처럼, Sonnet 가격에 Opus 수준의 결과물을 받는 셈이에요.

### 핵심 스펙

| 항목 | 내용 |
|---|---|
| 모델 ID | `claude-sonnet-5` |
| 컨텍스트 창 | **1,000,000 토큰** (약 책 500권) |
| 적응형 생각 (Thinking) | 기본 켜짐 |
| API 프로모션 가격 | **$2/$10 per MTok** (2026-08-31까지) |
| 기본 모델 적용 대상 | Pro, Team Standard, Enterprise |

### Claude Code에서 적용

w27 업데이트 이후 Claude Code에서 **기본 모델로 설정**됐어요.

```
# 수동으로 Sonnet 5 선택
> /model claude-sonnet-5
```

<div class="note-circle">
○ 2026-08-31 이후 API 가격은 변경될 수 있어요<br />
○ 구독 요금제에서는 토큰 별도 결제 없이 Sonnet 5 사용 가능
</div>

---

## Fable 5 — 전 세계 재배포 🌍

**Fable 5**(페이블 5)는 지난 6월 12일, 미국 정부의 수출 통제로 전 세계 접근이 일시 중단됐었어요. 이후 보안 분석을 마치고, **2026년 7월 1일부터 전 세계 재배포**됐어요.

> 🍱 **비유**: 강력한 신제품이 출시됐는데, 규제 기관이 "잠깐, 안전 검사 다시 해야 해요"라고 해서 잠시 판매를 멈췄다가, 검사를 통과하고 다시 판매 재개된 것과 같아요.

### 무슨 일이 있었나요?

| 시기 | 내용 |
|---|---|
| 2026-06-09 | Fable 5 + Mythos 5 첫 출시 |
| 2026-06-12 | 미국 정부 지시로 글로벌 접근 일시 중단 |
| 2026-06-30 | 사이버 보안 분석 완료, 재배포 발표 |
| 2026-07-01 | **전 세계 재배포** |

### Anthropic의 입장

Anthropic은 재배포 발표에서 다음도 함께 공개했어요:

- **잭브레이크(Jailbreak) 심각도 평가 프레임워크** 제안
  - Amazon, Microsoft, Google 등 빅테크 기업들과 공동 개발 (Project Glasswing 연계)
  - AI 잭브레이크 시도의 심각도를 일관된 기준으로 평가하는 산업 표준 제안

- **Fable 5 사이버 보안 분석** 결과 공개
  - 사이버 공격 보조 능력: 기존 수출통제 기준 충족
  - 독립적 보안 연구자들의 검토 완료

---

## 한국 사용자에게 어떤 영향이 있나요?

| 구분 | 상태 |
|---|---|
| Claude Sonnet 5 | ✅ 즉시 사용 가능 (기본 모델) |
| Fable 5 (API) | ✅ 2026-07-01부터 사용 가능 |
| Mythos 5 | ⚠️ 별도 확인 필요 (추정) |

<div class="note-circle">
○ 한국은 미국 수출 통제 "동맹국" 예외 적용 여부가 불명확했어요 — 재배포로 해소됨<br />
○ Fable 5 접근 방법: API를 통해 <code>claude-fable-5</code> 모델 ID 사용 (추정)
</div>

---

## 요약 — 두 소식을 함께 보면

2026년 6월 30일은 Claude 역사에서 중요한 날이에요:

1. **Sonnet 5 출시** → 구독자 기본 모델이 최상위 수준으로 업그레이드
2. **Fable 5 재배포** → 잠시 막혔던 최강 모델이 돌아옴
3. **잭브레이크 프레임워크 제안** → AI 보안의 산업 표준 만들기 시작

Claude Code 사용자에게는 **Sonnet 5가 기본 모델**로 적용된다는 것이 가장 직접적인 변화예요.
