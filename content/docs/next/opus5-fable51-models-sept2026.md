---
title: "[블][공] Claude Opus 5 + Fable 5.1 출시 — 2026년 7~9월 모델 업데이트"
description: "2026년 7월 Claude Opus 5가 기본 Opus 모델로 전환되고, 9월 Fable 5.1·Mythos 5.1이 출시됐어요. 입문자 관점에서 무엇이 달라지는지 정리했습니다"
tags: ["자동생성", "Opus5", "Fable51", "Mythos51", "모델업데이트", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-09-15"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5 출시: anthropic.com/news (Jul 24, 2026)
<br />★ <strong>[블]</strong> Claude Fable 5.1 + Mythos 5.1: anthropic.com/news (Sep 1, 2026)
<br />★ <strong>[공]</strong> Opus 5 기본 모델 전환: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">whats-new/2026-w30</a> (Jul 20~24, 2026)
<br />★ <strong>[공]</strong> Fable 5.1 전환: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a> (Aug 31~Sep 4, 2026)
</div>

## 한 눈에 보는 7~9월 모델 변화

| 날짜 | 내용 |
|---|---|
| 2026-07-24 | **Claude Opus 5** 공식 출시 |
| 2026-07-20 (W30) | **Opus 5**가 Claude Code 기본 Opus 모델로 전환 |
| 2026-09-01 | **Claude Fable 5.1** + **Claude Mythos 5.1** 출시 |
| 2026-09-01 (W36) | Claude Code Desktop에서 **Fable 5.1**로 전환 가능 |

---

## Claude Opus 5 — 장시간 에이전트 작업의 새 기준

### 무엇이 달라졌나요?

Anthropic은 **Claude Opus 5**를 "Opus 티어의 획기적 성능 향상"이라고 설명했어요. 이전 Opus 4.8보다 특히 다음 분야에서 큰 개선이 이뤄졌어요:

- **장시간 실행 에이전트**: 수십 분 ~ 수 시간 이상 돌아가는 복잡한 자동화 작업
- **코딩 능력**: 더 복잡한 코드 작성·리팩토링
- **전문 업무**: 분석, 조사, 작성 등 전문가 수준 작업

> 🍱 **비유로 설명하면**: Opus 4.8이 "경험 많은 시니어 개발자"였다면, Opus 5는 **"수백 명의 코드베이스를 혼자서 관리해 본 슈퍼 시니어"** 수준이에요.

### Claude Code에서의 변화

2026년 7월 20~24일 주(W30)부터 **Opus 5가 Claude Code의 기본 Opus 모델**로 전환됐어요.

```bash
# 모델 확인
/model

# Opus 5로 변경
/model claude-opus-5

# 이전 버전으로 변경하고 싶다면
/model claude-opus-4-8
```

<div class="note-star">
★ 입문자 여러분: 기본 모델은 여전히 <strong>Sonnet 5</strong>예요. "기본 Opus 모델이 바뀌었다"는 말은, Opus를 쓰기로 선택했을 때 자동으로 더 좋은 버전이 연결된다는 뜻이에요.
</div>

---

## Claude Fable 5.1 + Mythos 5.1 — 최상위 모델의 업그레이드

### 새 모델이 나온 배경

2026년 9월 1일, Anthropic이 **Claude Fable 5.1**과 **Claude Mythos 5.1**을 발표했어요.

Anthropic 공식 발표 (공식 발표 기준):
> "코딩과 지식 작업에서 가장 앞선 모델들. 연구 능력은 AI 모델이 과학적 진보에 기여하는 방식의 초기 모습을 보여줍니다."

**주요 개선 방향:**
- 코딩 · 지식 작업 성능 전면 향상
- 과학 연구 지원 능력 강화 (Mythos 5.1 특화)

> 🍱 **비유로 설명하면**: Fable 5와 Mythos 5가 "갓 출시된 최신형 스마트폰"이었다면, 5.1은 **"6개월 후 버그 수정 + 성능 최적화된 업데이트 버전"** 이에요.

### Claude Code에서 Fable 5.1 사용하기

2026년 8월 말~9월 초(W36)부터 Claude Code에서 **Fable 5.1로 전환 가능**해요.

```bash
# Fable 5.1 사용 (API 과금 방식)
/model claude-fable-5-1
```

<div class="note-star">
★ <strong>입문자 참고</strong>: Fable 5.1은 가장 뛰어난 성능이지만, 일반 구독 플랜에는 포함되지 않아요. API 토큰 방식으로 별도 과금됩니다. 대부분의 코딩 작업에는 기본 Sonnet 5가 충분해요.
</div>

---

## 2026년 9월 기준 Claude 모델 라인업

| 모델 | 특징 | 추천 대상 |
|---|---|---|
| **Claude Fable 5.1** 🆕 | 최상위 코딩·지식 | 연구자, 기업 고객 |
| **Claude Mythos 5.1** 🆕 | 최상위 + 과학 연구 특화 | 과학 연구·분석 |
| **Claude Opus 5** | 장기 에이전트 강화 | 복잡한 자동화 작업 |
| **Claude Sonnet 5** ⭐ | 균형형 최전선 | **일상 코딩 (기본값)** |
| **Claude Haiku 4.5** | 경량·빠름 | 단순·반복 작업 |

### 입문자라면?

> **결론: 기본값인 Sonnet 5를 그냥 쓰세요.**

대부분의 코딩 학습·업무에 Sonnet 5로 충분합니다. 특별히 매우 복잡한 작업이 아니라면 더 비싼 모델로 바꿀 필요가 없어요.

| 상황 | 추천 모델 |
|---|---|
| 처음 입문 | **Sonnet 5** (기본값) |
| 수십 개 파일 대규모 리팩토링 | Opus 5 |
| 장시간 자동화 에이전트 | Opus 5 |
| 과학·연구 특화 작업 | Mythos 5.1 (API) |
| 요금 절약, 간단 작업 | Haiku 4.5 |

---

## Fast Mode — Opus 5 기준으로 업데이트

W30(2026년 7월)부터 `/fast` 명령어의 기준 모델도 **Opus 5**로 바뀌었어요. 가격도 변경됐습니다.

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 기준 모델 | Opus 4.8 | **Opus 5** |
| 입력 가격 | $30/MTok | **$10/MTok** |
| 출력 가격 | $150/MTok | **$50/MTok** |
| 속도 | 2.5배 빠름 | 동일 |

<div class="note-star">
★ <strong>좋은 소식</strong>: Fast Mode가 더 좋은 모델(Opus 5)을 쓰면서 가격은 오히려 내려갔어요! 리서치 프리뷰 기준이며 향후 변경될 수 있습니다.
</div>

---

<div class="note-star">
★ Claude Opus 5: anthropic.com/news "Introducing Claude Opus 5" (Jul 24, 2026)
<br />★ Fable 5.1 + Mythos 5.1: anthropic.com/news "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (Sep 1, 2026)
<br />★ W30 모델 전환: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a>
<br />★ W36 Fable 5.1 전환: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">code.claude.com/docs/en/whats-new/2026-w36</a>
</div>
