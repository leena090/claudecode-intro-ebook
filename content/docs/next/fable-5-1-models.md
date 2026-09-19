---
title: "[공][블] Claude Fable 5.1 + Mythos 5.1 출시 — 코딩·연구 능력 강화"
description: "2026년 9월 1일 출시된 Fable 5.1과 Mythos 5.1. 코딩·지식 업무 성능이 개선됐고, AI 모델의 과학 연구 기여 가능성을 처음 보여줬습니다"
tags: ["자동생성", "Fable5.1", "Mythos5.1", "신규모델", "모델업데이트", "코딩AI"]
category: "next"
order: 18
lastUpdated: "2026-09-19"
---

<div class="note-star">
★ <strong>[블]</strong> 공식 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> — "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (Sep 1, 2026)<br />
★ <strong>[공]</strong> What's New: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a>
</div>

## 무엇이 달라졌나요?

2026년 9월 1일, Anthropic이 **Claude Fable 5.1**과 **Claude Mythos 5.1**을 공식 출시했어요.

> 🍱 **비유로 설명하면**: Fable 5가 "처음 나온 최신 스마트폰"이었다면, Fable 5.1은 **"출시 3개월 후 소프트웨어 업데이트로 카메라와 배터리 성능이 개선된 버전"** 이에요. 같은 하드웨어에 더 나은 소프트웨어예요.

---

## 두 모델 비교

| 항목 | **Fable 5.1** | **Mythos 5.1** |
|---|---|---|
| **모델 ID** | `claude-fable-5-1` | `claude-mythos-5-1` |
| **이전 버전** | `claude-fable-5` | `claude-mythos-5` |
| **출시일** | 2026년 9월 1일 | 2026년 9월 1일 |
| **주요 강점** | 코딩 · 복잡한 작업 | 장기 추론 · 지식 업무 |
| **과학 연구** | 초기 수준 탑재 | 초기 수준 탑재 |

---

## 주요 개선 사항

### 1. 코딩 및 지식 업무 성능 향상

기존 Fable 5 / Mythos 5보다 **코딩 정확도와 지식 업무 처리 능력**이 개선됐어요.

> 📌 구체적인 벤치마크 수치는 공식 발표 기준으로 추후 공개 예정이에요. 현재는 "더 정확해졌다"는 공식 발표 수준.

### 2. 과학 연구 능력 — 첫 번째 신호

공식 발표에서 **AI 모델이 과학 연구에 기여하는 방식의 초기 모습**을 보여준다고 밝혔어요.

> 🔬 Claude 5.1 시리즈는 Anthropic의 "AI for Science" 방향과 맞닿아 있어요. 코딩 툴로서의 Claude 이상으로, 과학 연구 보조 도구로 발전하는 중이에요.

---

## Claude Code에서 어떻게 쓰나요?

```bash
# Fable 5.1으로 전환
/model claude-fable-5-1

# 또는 모델 선택 메뉴에서 선택
/model
```

### 언제 어떤 모델을 쓸까요?

| 상황 | 추천 모델 |
|---|---|
| 복잡한 코딩, 디버깅, 대규모 리팩토링 | **Fable 5.1** |
| 긴 문서 분석, 심층 추론, 연구 정리 | **Mythos 5.1** |
| 일상적인 코딩 작업 (빠른 응답 선호) | **Sonnet 5** (기본 모델) |
| 빠른 보조 작업 | **Haiku 4.5** |

---

## 이전 버전과의 관계

```
모델 계층 (2026년 9월 기준):
Fable 5.1 / Mythos 5.1  ← 최상위 (신규)
Fable 5 / Mythos 5      ← 이전 최상위 (여전히 사용 가능)
Sonnet 5                ← 기본 모델
Opus 5                  ← 중간 (Max 전용)
Haiku 4.5              ← 경량
```

> ⚠️ **주의 (공식 발표 기준)**: 이전 수출통제 이슈(2026년 6월)는 해소됐어요. Fable 5.1은 글로벌 정상 제공 중입니다.

---

## 이 업데이트가 Claude Code 사용자에게 의미하는 것

1. **지금 당장**: `/model claude-fable-5-1`로 업그레이드하면 더 정확한 코드 작성·검토 가능
2. **중장기**: AI 모델이 단순 코딩 도우미를 넘어 **과학적 문제 해결 도구**로 진화하는 방향
3. **비용**: Fable 5.1 가격은 Fable 5와 동일 (공식 발표 기준, 별도 인상 없음)

---

## 관련 문서

- [Claude Sonnet 5 + Fable 5 복귀 (2026년 6~7월)](./sonnet5-fable5-july2026.md)
- [W30–W37 전체 업데이트 정리](./whats-new-w30-w37.md)
