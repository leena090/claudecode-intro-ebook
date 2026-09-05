---
title: "[블] Claude Opus 5 · Fable 5.1 · Mythos 5.1 총정리 (2026년 7~9월)"
description: "Opus 5 정식 출시(7월), Fable 5.1·Mythos 5.1 공개(9월), Fast Mode Opus 5 전환까지 — 2026년 하반기 모델 대격변을 한 번에 정리"
tags: ["자동생성", "모델", "opus5", "fable5.1", "mythos5.1", "업데이트", "에이전트", "fast-mode"]
category: "next"
order: 35
lastUpdated: "2026-09-05"
---

<div class="note-star">
★ <strong>[블] 공식 발표 기준</strong> — Claude Opus 5 (2026-07-24), Claude Fable 5.1 + Mythos 5.1 (2026-09-01).<br />
★ <strong>[공] Fast Mode 변경</strong> — 2026-09-05 마케팅 공식 페이지 확인: Opus 5 전환, 가격 $10/$50/M 토큰으로 인하.
</div>

## 2026년 하반기, 모델이 또 바뀌었어요

올 7월부터 9월 사이에 Anthropic이 세 가지 새 모델을 연달아 발표했어요. 한 번에 정리할게요.

---

## 1. Claude Opus 5 (2026년 7월 24일) `[블]`

### 무엇이 달라졌나요?

Anthropic은 Opus 5를 "Opus 티어의 결정적 도약"이라고 설명했어요.

| 항목 | Opus 4.8 (이전) | Opus 5 (신규) |
|------|----------------|--------------|
| 장시간 에이전트 작업 | 강력 | **한 단계 도약** |
| 코딩 능력 | 뛰어남 | **향상됨** |
| 전문 업무 처리 | 뛰어남 | **향상됨** |
| Fast Mode | $30/$150/M 토큰 | **$10/$50/M 토큰** |
| Claude Code 지원 | ✅ | ✅ |

> 🍱 **비유**: Opus 4.8이 "시속 200km 고속열차"라면, Opus 5는 "시속 300km 고속철도(KTX-산천)"예요. 같은 철로를 달리지만 훨씬 빠르고 안정적이에요.

### Claude Code에서 어떻게 쓰나요?

```bash
# 최신 버전으로 업데이트
claude update

# Opus 5로 전환
/model claude-opus-5

# 어려운 장기 작업에 최적
/effort xhigh
ultrathink — 이 레거시 시스템 마이그레이션 계획 세워줘
```

### Fast Mode 가격 대폭 인하! `[공]`

<div class="note-star">
⚠️ <strong>중요 변경 (2026-09-05 공식 마케팅 페이지 확인)</strong><br />
Fast Mode가 Opus 4.8 → <strong>Opus 5</strong>로 업그레이드되면서 가격도 변했어요:
</div>

| 구분 | 이전 (Opus 4.8 Fast) | 이후 (Opus 5 Fast) |
|------|---------------------|-------------------|
| 입력 가격 | $30/M 토큰 | **$10/M 토큰** |
| 출력 가격 | $150/M 토큰 | **$50/M 토큰** |
| 속도 | 2.5x 빠름 | 2.5x 빠름 |
| 대상 플랜 | 소비 기반 플랜 | 소비 기반 플랜 |

> 🍱 **비유**: 택시 요금제가 "구형 차량 고급 요금" → "신형 차량 일반 요금"으로 바뀐 것 같아요. 더 좋은 차를 더 싸게 탈 수 있어요!

Fast Mode는 구독 플랜 사용자도 Usage Credit으로 이용 가능하며, 리서치 프리뷰 상태예요.

---

## 2. Claude Fable 5.1 + Claude Mythos 5.1 (2026년 9월 1일) `[블]`

### 무엇이 달라졌나요?

Anthropic이 9월 1일 새벽에 전격 발표한 두 모델이에요.

| 모델 | 설명 | 주요 강점 |
|------|------|----------|
| **Fable 5.1** | 코딩·지식 업무 최전선 | 코딩, 에이전트 작업, 전문 업무 |
| **Mythos 5.1** | 연구·과학 특화 | AI 모델의 과학적 기여 예고 |

공식 발표 핵심 문구:
> *"코딩과 지식 업무를 위한 가장 진보된 모델들. 연구 능력은 AI 모델이 과학적 진보에 기여하는 방식을 미리 보여준다."*

> 🍱 **비유**: Fable 5가 "챔피언스리그 우승팀"이라면, Fable 5.1은 그 팀이 다음 시즌에 핵심 선수를 더 보강한 "디펜딩 챔피언 강화판"이에요.

### 모델 계층 구조 (2026년 9월 기준)

```
최상위 ┌─ Mythos 5.1  (연구·과학 특화)
       ├─ Fable 5.1   (코딩·지식 업무 최전선)
       ├─ Opus 5      (장기 에이전트·전문 업무)
고성능 ├─ Sonnet 5    (일상 코딩 기본 모델)
경량   └─ Haiku 4.5   (빠른 소규모 작업)
```

> 💡 **참고**: Fable 5.1과 Mythos 5.1의 접근 가능 여부는 플랜 및 지역에 따라 다를 수 있어요 (수출 통제 정책 상황 주시 필요).

---

## Claude Code에서 어떤 모델을 언제 써야 할까요?

| 상황 | 추천 모델 | 이유 |
|------|----------|------|
| 일상적인 코드 작성·디버깅 | Sonnet 5 (기본) | 속도·비용 균형 최적 |
| 복잡한 아키텍처 결정 | Opus 5 | 깊은 추론 능력 |
| 초고난도 장기 에이전트 | Fable 5.1 | 최고 성능 |
| 연구·실험 코드 | Mythos 5.1 | 과학적 추론 특화 |
| 빠른 반복 작업 | Opus 5 Fast Mode | 2.5x 속도 |

```bash
# 현재 사용 중인 모델 확인
/status

# 모델 바꾸기
/model claude-opus-5
/model claude-fable-5-1
/model claude-sonnet-5
```

---

## 자주 묻는 질문

**Q. Opus 4.8을 쓰고 있었는데 계속 써도 되나요?**  
A. 네, 괜찮아요. 하지만 Opus 5가 전반적으로 더 강력하니 Claude Code를 업데이트한 뒤 `/model claude-opus-5`로 전환해보세요.

**Q. Fast Mode 가격이 왜 내려갔나요?**  
A. Opus 5로 모델이 업그레이드되면서 가격 정책도 재편됐어요. 공식 발표 기준이므로 변경 가능성이 있어요. `[공]`

**Q. Fable 5.1과 Fable 5의 차이는 뭔가요?**  
A. 공식 발표에서는 "더 진보된 코딩·지식 업무 능력"이라고만 밝혔어요. 세부 벤치마크는 추정. `(추정)`

---

<div class="note-star">
📌 <strong>출처</strong><br />
- [블] Claude Opus 5 출시: anthropic.com/news/claude-opus-5 (2026-07-24)<br />
- [블] Fable 5.1·Mythos 5.1 출시: anthropic.com/news/claude-fable-5-1-mythos-5-1 (2026-09-01)<br />
- [공] Fast Mode 정보: claude.com/claude-code 마케팅 페이지 (2026-09-05 확인)
</div>
