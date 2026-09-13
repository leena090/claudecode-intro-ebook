---
title: "[블] Claude Opus 5 출시 — 더 스마트한 장시간 에이전트"
description: "2026년 7월 24일 공개된 Claude Opus 5의 주요 특징, Fast mode 가격 변경($10/$50), 1M 토큰 컨텍스트 창 지원 내용 정리"
tags: ["자동생성", "Opus5", "모델업데이트", "FastMode", "에이전트", "컨텍스트창"]
category: "next"
order: 18
lastUpdated: "2026-09-13"
---

<div class="note-star">
★ <strong>[블]</strong> 이 글은 Anthropic 공식 블로그 "Introducing Claude Opus 5" (2026-07-24) 및 공식 문서를 기반으로 작성한 것입니다.
<br />★ 일부 세부 내용은 공식 발표 기준이며, 추가 상세는 공식 문서를 참조해 주세요.
</div>

## Claude Opus 5란?

Claude Opus 5는 2026년 7월 24일에 공개된 **Opus 티어의 새 기본 모델**이에요.

> 🏋️ **비유로 설명하면**: 기존 Opus 4.8이 능숙한 시니어 개발자라면, Opus 5는 **박사 학위 + 10년 실무 경험**을 갖춘 수석 엔지니어예요. 특히 며칠씩 이어지는 긴 작업을 혼자 끝까지 처리하는 능력이 크게 올랐어요.

---

## 핵심 변경 사항

### 1. 기본 모델 교체

| 플랜 | 이전 기본 | 새 기본 |
|---|---|---|
| Max | Opus 4.8 | **Opus 5** |
| Team Premium | Opus 4.8 | **Opus 5** |
| Enterprise pay-as-you-go | Opus 4.8 | **Opus 5** |
| Anthropic API | Opus 4.8 | **Opus 5** |
| Amazon Bedrock | Opus 4.8 | Opus 5 (1M 버전 별도 선택) |
| Google Cloud Agent Platform | Opus 4.8 | Opus 5 (1M 버전 별도 선택) |

```bash
# 직접 Opus 5 지정하기
> /model claude-opus-5
```

---

### 2. 컨텍스트 창 1M 토큰

Max, Team, Enterprise 플랜 + Anthropic API에서 Opus 5는 **1,000,000(100만) 토큰** 컨텍스트 창을 지원해요.

> 📚 **비유로 설명하면**: 1M 토큰은 소설 약 700권 분량이에요. 대규모 코드베이스 전체를 한 번에 메모리에 올려놓고 작업할 수 있어요. 파일을 그때그때 찾지 않아도 돼요.

Amazon Bedrock이나 Google Cloud를 사용하는 경우 1M 버전을 별도로 선택해야 해요.

---

### 3. Fast mode 업데이트

Opus 5와 함께 **Fast mode**도 변경됐어요.

| 항목 | Opus 4.8 Fast mode | Opus 5 Fast mode |
|---|---|---|
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| 입력 요금 | $30/MTok | **$10/MTok** |
| 출력 요금 | $150/MTok | **$50/MTok** |
| 제공 방식 | 리서치 프리뷰 | 리서치 프리뷰 |

> 💰 **쉽게 말하면**: 빠른 모드 가격이 **1/3로 내려갔어요**! 기존 Opus 4.8 Fast mode는 가격이 부담스러워서 쓰기 망설여졌다면, 이제 훨씬 쓰기 편해졌어요.

```bash
# Fast mode 켜기
> /fast
```

⚠️ 참고: Fast mode는 이제 Opus 5와 Opus 4.8에만 적용됩니다. Opus 4.7에서는 더 이상 지원되지 않아요.

---

## Opus 5가 잘하는 것

공식 발표에서 강조된 주요 능력:

### 🤖 장시간 에이전트 작업
며칠씩 이어지는 복잡한 코딩, 연구, 전문 업무를 처리하는 능력이 크게 향상됐어요.

### 💻 코딩
어렵고 복잡한 코드 작성, 디버깅, 리팩터링 능력이 개선됐어요.

### 📊 전문 업무
법률 문서 검토, 재무 분석, 의료 자료 분석 등 전문 분야 지식 작업이 향상됐어요.

---

## Claude Code에서 어떻게 쓰나요?

### 모델 확인하기

```bash
# 현재 모델 확인
> /model

# Opus 5로 변경
> /model claude-opus-5
```

### 설정 파일로 기본 모델 지정하기

```json
// ~/.claude/settings.json
{
  "model": "claude-opus-5"
}
```

### 환경변수로 지정하기 (W34 추가)

```bash
export ANTHROPIC_DEFAULT_MODEL="claude-opus-5"
```

---

## 기존 사용자 안내

| 사용 중인 플랜 | 변경 내용 |
|---|---|
| Pro | 변경 없음 (Sonnet 5 기본 유지) |
| Max | Opus 세션이 자동으로 Opus 5로 전환 |
| Team | 자동 전환 |
| Enterprise | 관리자 설정에 따라 다를 수 있음 |
| API (claude-opus-4-8) | 직접 지정 시 그대로, 기본값만 변경 |

> ✅ **이미 `claude-opus-4-8`을 직접 지정해서 쓰고 있다면** 자동으로 바뀌지 않아요. 새 모델을 쓰려면 직접 `claude-opus-5`로 변경하면 돼요.

---

<div class="tip-box">
🔗 <strong>관련 문서</strong>: <a href="https://code.claude.com/docs/en/model-config">모델 설정 공식 문서</a> · <a href="https://code.claude.com/docs/en/fast-mode">Fast mode 공식 문서</a>
</div>
