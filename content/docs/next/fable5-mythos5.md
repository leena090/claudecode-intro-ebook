---
title: "[블] Claude Fable 5 & Mythos 5 — Anthropic 차세대 모델 발표"
description: "2026년 6월 9일 발표된 Fable 5와 Mythos 5, 코딩·지식 집약 작업을 위한 차세대 지능 모델"
tags: ["fable5", "mythos5", "모델", "신모델", "2026", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-11"
---

<div class="note-star">
★ <strong>Anthropic 공식 발표 기준</strong> (2026-06-09). <code>[블]</code><br />
👉 <a href="https://www.anthropic.com/news" target="_blank">Anthropic 뉴스룸: anthropic.com/news</a>
</div>

## Fable 5 & Mythos 5 발표

2026년 6월 9일, Anthropic이 **Claude Fable 5**와 **Claude Mythos 5** 두 모델을 동시에 발표했어요.

> 🍱 **비유**: 스마트폰 라인업에서 "일반형(Galaxy S)"과 "초고성능형(Galaxy S Ultra)"이 같이 나온 것처럼요 — Fable 5는 코딩과 에이전트 작업에 강하고, Mythos 5는 가장 어려운 지식 작업용이에요.

---

## 두 모델의 역할

| 모델 | 특화 분야 | Claude Code에서 |
|------|-----------|----------------|
| **Fable 5** | 코딩, 에이전트 작업, 긴 실행 작업 | 메인 모델 또는 어드바이저로 사용 가능 |
| **Mythos 5** | 최고 난이도 지식 집약 작업 | 현재 Claude Code 직접 지원 여부 확인 필요 |

---

## Claude Code에서 Fable 5 사용하기

Fable 5는 Claude Code v2.1.170 이상에서 사용할 수 있어요 (조직 단위 접근 권한 필요).

```bash
# Fable 5를 메인 모델로 설정
/model fable

# Fable 5를 Advisor로 설정 (v2.1.170+)
/advisor fable
# 또는
claude --advisor fable
```

<div class="note-circle">
○ Fable 5는 모델 피커에 표시되지 않아요 — 직접 <code>fable</code> 이름으로 지정해야 해요<br />
○ Fable 5를 어드바이저로 쓸 때는 <code>/advisor fable</code> 로 직접 입력<br />
○ Fable 5가 메인 모델이면 어드바이저도 반드시 Fable 5여야 해요
</div>

### Fable 5 모델 페어링

| 조합 | 용도 |
|------|------|
| Sonnet + Fable 어드바이저 | 결정 포인트마다 Fable의 최고 지능 활용 |
| Fable 메인 + Fable 어드바이저 | 최고 성능 조합 (접근 권한 필요) |

---

## 모델 계층 업데이트

Fable 5 발표로 Claude Code의 모델 라인업이 업데이트됐어요:

| 계층 | 모델 | 특징 |
|------|------|------|
| 최고 | **Fable 5** | 코딩·에이전트 최상위 |
| 고성능 | **Opus 4.8** | 기본 Max/Team 모델 |
| 균형 | **Sonnet 4.6** | 기본 Pro 모델 |
| 경량 | **Haiku 4.5** | 빠르고 저렴 |

> 🍱 **비유**: Haiku는 경차, Sonnet은 중형차, Opus는 SUV, Fable은 스포츠카처럼요 — 작업 규모와 예산에 맞게 골라서 써요.

---

## 마케팅 페이지 FAQ 업데이트 내용

공식 마케팅 페이지의 "Which models does Claude Code use?" 항목이 업데이트됐어요:

> *"Claude Code works with the Fable 5, Opus 4.8, Sonnet 4.6, and Haiku 4.5 models."*

그리고 Fast mode:
> *"Fast mode is a high-speed configuration for Opus 4.8, making the model 2.5x faster at a higher cost per token."*

즉 Fast mode의 기본 모델도 Opus 4.7 → **Opus 4.8**으로 변경됐어요.

---

## 한국 서울 오피스 소식

같은 시기(2026-05-26), Anthropic이 **KiYoung Choi(최기영)**를 한국 대표이사로 임명하고 서울 오피스 오픈을 예고했어요. 한국어 Claude Code 사용자들에게도 더 가까운 지원이 기대돼요. `[블]`
