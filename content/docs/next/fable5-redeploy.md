---
title: "[블] Fable 5 재배포 — 수출통제 해제 후 전 세계 복원 (2026-07-01)"
description: "미국 정부 지시로 6월 12일 접근이 일시 정지됐던 Fable 5가 7월 1일부터 전 세계에 다시 배포돼요. 한국 사용자도 사용 가능해졌어요."
tags: ["자동생성", "모델", "fable5", "수출통제", "재배포", "2026-07", "한국"]
category: "next"
order: 15
lastUpdated: "2026-07-03"
---

<div class="note-star">
★ <strong>출처</strong> — Anthropic 공식 블로그 발표 (2026-06-30) <code>[블]</code><br />
★ "Redeploying Fable 5" — 수출통제 해제 후 전 세계 재배포 발표<br />
★ <strong>한국 독자 주목</strong> — 6월 12일 이후 접근 불가했던 Fable 5 모델이 7월 1일부터 정상화돼요
</div>

---

## 무슨 일이 있었나요? — 타임라인

| 날짜 | 내용 |
|---|---|
| 2026-06-09 | Anthropic, **Claude Fable 5** 발표 |
| 2026-06-12 | 미국 정부 지시로 Fable 5·Mythos 5 **전 세계 접근 일시 정지** |
| 2026-06-30 | Anthropic, **재배포 발표** — "Fable 5 returns globally July 1" |
| 2026-07-01 | **전 세계 배포 재개** (한국 포함) |

---

## 왜 일시 정지됐나요?

미국 정부(수출통제 당국)가 Fable 5와 Mythos 5에 대해 일시적인 접근 제한을 지시했어요.

> 🍱 **비유**: 새 첨단 기술 제품이 출시됐는데 안전 심사가 필요해서 잠깐 판매를 멈춘 것과 같아요. 심사가 끝나고 "이상 없음" 확인 후 다시 판매 재개.

Anthropic은 이에 대응해 **사이버 보안 안전장치** 강화 작업을 진행했고, Amazon·Microsoft·Google 등 Glasswing 파트너들과 함께 **업계 표준 취약점 평가 프레임워크**도 제안했어요.

---

## Fable 5가 뭔가요?

Claude Code에서 사용할 수 있는 **최상위 모델 티어**예요. Opus(오퍼스) 위에 새로 추가된 계층이에요.

| 모델 티어 | 위치 |
|---|---|
| Claude Fable 5 | ▲ 최상위 (신규) |
| Claude Opus 4.8 | 고급 |
| Claude Sonnet 5 | 프론티어 중형 (신규) |
| Claude Sonnet 4.6 | 기본 균형형 |
| Claude Haiku 4.5 | 경량·고속 |

---

## 이제 어떻게 쓸 수 있나요?

2026년 7월 1일부터 한국을 포함한 전 세계에서 Fable 5를 다시 사용할 수 있어요.

```bash
# Fable 5로 Claude Code 실행 (공식 모델 ID 추정)
claude --model claude-fable-5
```

<div class="note-circle">
○ 모델 ID (<code>claude-fable-5</code>)는 이전 공개 정보 기반 추정입니다<br />
○ 수출통제 대상이었던 Mythos 5의 재배포 일정은 별도 확인 필요<br />
○ 공식 블로그: <a href="https://www.anthropic.com/news" target="_blank">anthropic.com/news</a> (2026-06-30)
</div>

---

## 추가: 취약점 평가 프레임워크 제안

재배포 발표와 함께 Anthropic은 Amazon·Microsoft·Google 등 Glasswing 파트너들과 협력해 **AI 모델 취약점(탈옥 심각도) 점수화 업계 표준**을 제안했어요.

> 🍱 **비유**: 식품 업계에서 "알레르기 표시 기준"을 업계 전체가 통일한 것처럼, AI 모델 안전 평가 기준을 표준화하려는 시도예요.

이 프레임워크는 향후 AI 모델의 수출통제 심사 기준에도 영향을 줄 수 있어요 (추정).

<div class="note-circle">
○ 자세한 내용: anthropic.com/news (2026-07-02 "More details on Fable 5's cyber safeguards") 참조<br />
○ 코딩 입문 ebook 범위를 벗어나는 정책 세부 사항이므로 이 문서는 개요만 다뤄요
</div>
