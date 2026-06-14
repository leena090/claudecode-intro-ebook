---
title: "[블] Claude Fable 5 & Mythos 5 — 새 최강 모델 등장, 그리고 미국 정부 수출 규제"
description: "2026년 6월 9일, Anthropic이 역대 최고 성능 모델 Fable 5와 Mythos 5를 발표했어요. 그런데 3일 후 미국 정부의 수출 규제로 접근이 일시 중단됐습니다"
tags: ["Fable5", "Mythos5", "새모델", "수출규제", "2026-06", "블로그", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-14"
---

<div class="note-star">
★ <strong>공식 블로그 기준</strong> — 2026년 6월 9일 발표. <code>[블]</code><br />
👉 <a href="https://www.anthropic.com/news" target="_blank">Anthropic 공식 뉴스룸</a>
</div>

> ⚠️ **[2026-06-12 긴급 업데이트]**
> 미국 정부가 Fable 5와 Mythos 5에 대한 **수출 규제 지침**을 발령했습니다.
> 2026년 6월 12일 기준으로 **모든 접근이 일시 중단**된 상태예요.
> 현재 상황은 [Anthropic 뉴스룸](https://www.anthropic.com/news)에서 확인해 주세요.

---

## Fable 5 & Mythos 5가 뭔가요?

2026년 6월 9일, Anthropic이 **Claude Fable 5(클로드 페이블 파이브)** 와 **Claude Mythos 5(클로드 미토스 파이브)** 를 발표했어요. 이 두 모델은 기존 Opus보다 한 단계 위의 **최고 성능 모델**로 소개됐어요.

> 🍱 **비유**: 지금까지 Claude 모델 중 가장 강한 게 Opus(오퍼스)였다면, Fable과 Mythos는 그 위에 있는 "특급" 등급이라고 생각하면 돼요. 스포츠카 중에도 일반 스포츠카(Opus)와 슈퍼카(Fable·Mythos)가 있는 것처럼요.

**Claude 모델 계층 (공식 발표 기준):**

| 등급 | 모델 | 특징 |
|------|------|------|
| 최고급 ⭐⭐⭐⭐ | Fable 5, Mythos 5 | 코딩·에이전트 작업 최강 성능 |
| 고급 ⭐⭐⭐ | Opus 4.8 | 복잡한 작업에 강함 |
| 균형형 ⭐⭐ | Sonnet 4.6 | 속도와 성능의 균형 |
| 경량형 ⭐ | Haiku 4.5 | 빠르고 저렴 |

---

## Claude Code에서의 Fable 5

Claude Code에서 Fable 5는 두 가지 방식으로 사용할 수 있어요 (공식 발표 기준, 접근 중단 전):

### 1. 주 모델로 사용

```bash
# 마케팅 페이지 기준 - 공식 FAQ 확인 필요
# "Claude Code works with the Fable 5, Opus 4.8, Sonnet 4.6, and Haiku 4.5 models"
/model fable
```

### 2. 어드바이저로 사용 (v2.1.170 이상)

**[어드바이저 도구(Advisor Tool)](/docs/advanced/advisor-tool)** 에서 Fable 5를 더 똑똑한 조언자로 쓸 수 있어요:

```bash
# Fable 5를 어드바이저로 설정
/advisor fable

# (주의: /advisor 선택창에는 보이지 않아요 — 직접 입력해야 해요)
```

Fable 5를 어드바이저로 쓰면, Sonnet이 일반 작업을 처리하다가 중요한 결정 지점에서만 Fable 5의 판단을 구해요. Fable 5를 처음부터 끝까지 쓰는 것보다 훨씬 효율적이에요.

---

## 미국 정부 수출 규제 — 지금은 어떤 상황인가요?

**2026년 6월 12일**, 미국 정부가 Fable 5와 Mythos 5에 대한 **수출 규제 지침**을 발령했어요.

> 🍱 **비유**: 새 첨단 반도체 기술이 개발됐는데, 정부가 "이건 특정 국가로 수출하면 안 돼"라고 규제를 거는 것처럼요. AI 모델도 첨단 기술이라 유사한 규제 대상이 될 수 있어요.

**현재 상황 (2026-06-14 기준):**
- Fable 5, Mythos 5 접근: **일시 중단**
- Anthropic 공식 입장: 정부 지침 준수, 추가 발표 예정
- 대안: Opus 4.8이 현재 사용 가능한 최고 성능 모델

---

## 지금 할 수 있는 것

Fable 5 접근이 중단된 지금, Opus 4.8이 Claude Code에서 최고 성능 모델이에요:

```bash
# Opus 4.8 사용 (현재 최고 성능)
/model claude-opus-4-8

# Fast mode로 빠르게 (Opus 4.8 기반, $10/$50 per MTok)
/fast

# 어려운 작업엔 xhigh effort
/effort xhigh
```

---

## 앞으로는?

Anthropic은 정부와 협력해 규제 상황을 해소하려 한다고 밝히고 있어요. Fable 5·Mythos 5 접근이 재개되면 공식 발표가 있을 예정입니다.

<div class="note-circle">
○ 최신 소식: <a href="https://www.anthropic.com/news" target="_blank">anthropic.com/news</a><br />
○ 현재(2026-06-14 기준) 사용 가능한 최고 모델: Opus 4.8<br />
○ 이 문서의 Fable 5 관련 내용은 공식 발표 기준이며, 상황 변화에 따라 갱신됩니다
</div>
