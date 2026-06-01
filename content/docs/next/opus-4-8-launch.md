---
title: "[공] Claude Opus 4.8 출시 — 코딩·에이전트 작업 더 강해졌어요"
description: "2026년 5월 28일 출시된 Claude Opus 4.8의 특징, 달라진 점, Fast mode 가격 변화를 정리했어요"
tags: ["opus4.8", "모델", "업데이트", "2026", "fast-mode", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026-05-28 공식 출시. <code>[공]</code><br />
👉 <a href="https://www.anthropic.com/news/claude-opus-4-8" target="_blank">블로그: anthropic.com/news/claude-opus-4-8</a> · 
<a href="https://code.claude.com/docs/en/model-config" target="_blank">공식 문서: model-config</a>
</div>

## Claude Opus 4.8이 뭐가 달라졌나요?

**Claude Opus 4.8** 은 Anthropic이 2026년 5월 28일에 출시한 최신 Opus 클래스 모델이에요. 공식 발표에 따르면 코딩·에이전트 작업·전문적 업무 전반에서 성능이 향상됐고, 장기 실행 작업의 **일관성**이 크게 좋아졌습니다.

> 🍱 **비유**: 작년에 나온 스마트폰(4.7)이 올해 신형(4.8)으로 업그레이드된 것처럼, 같은 Opus 브랜드지만 속도·정확성·지구력 면에서 한 단계 올라갔어요.

---

## 어디에 기본 적용되나요?

| 플랜 | 기본 모델 |
|------|----------|
| Max | Claude Opus 4.8 ✅ |
| Team Premium | Claude Opus 4.8 ✅ |
| Enterprise 종량제 | Claude Opus 4.8 ✅ |
| Anthropic API | Claude Opus 4.8 ✅ |
| Pro | Sonnet 4.6 (변경 없음) |

Pro 플랜에서도 `/model claude-opus-4-8`으로 직접 선택해서 쓸 수 있어요. `[공]`

---

## Fast mode — 가격 인하 + Opus 4.8 적용

| 구분 | Opus 4.8 Fast mode | Opus 4.7 Fast mode |
|------|---------------------|---------------------|
| 입력 토큰 | **$10 / MTok** | $30 / MTok |
| 출력 토큰 | **$50 / MTok** | $150 / MTok |
| 속도 배율 | 2.5배 | 2.5배 |
| 상태 | ✅ 현행 | 유지됨 |

- **Opus 4.6 Fast mode는 Deprecated** — 앞으로 지원 종료 예정이에요 `[공]`

> 🍱 **비유**: "빠른 배송" 서비스가 더 저렴해지면서 더 좋은 제품으로 업그레이드된 셈이에요. 예전엔 빠르게 쓰려면 비쌌는데, 이제 같은 속도를 훨씬 싸게 쓸 수 있어요.

---

## 노력 수준(effort level) 변화

Opus 4.8은 기본 노력 수준이 `high`로 설정돼 있어요. 더 어려운 작업은 `xhigh`를 써보세요.

```bash
# 더 어려운 작업에 사용
/effort xhigh

# 또는 Ultracode 모드 (자동으로 워크플로우 적용)
/effort ultracode
```

| 수준 | 설명 |
|------|------|
| `low` | 빠른 단순 작업 |
| `medium` | 일반 작업 |
| `high` | Opus 4.8 기본값 |
| `xhigh` | 복잡한 문제·심층 분석 |
| `ultracode` | 대규모 작업 자동 워크플로우화 |

---

## 모델 선택 방법

```bash
# Opus 4.8 직접 선택
/model claude-opus-4-8

# 모델 목록 보기
/model
```

Claude Code 공식 지원 모델:
- `claude-opus-4-8` — 최신 최강 모델
- `claude-sonnet-4-6` — 균형형 (Pro 기본값)
- `claude-haiku-4-5-20251001` — 경량·빠름

---

> 💡 **입문자 팁**: Pro 플랜이라면 Sonnet 4.6이 기본이에요. 복잡한 작업이 잘 안 풀릴 때 `/model claude-opus-4-8`로 잠깐 전환해보세요. 단, 더 많은 사용량을 소비하니 일상적인 작업엔 Sonnet으로 돌아오는 게 좋아요.
