---
title: "[공] Fast Mode 업데이트 — Opus 5.5 기반·가격 $8/$40로 대폭 인하"
description: "2026년 가을, Fast Mode 대상 모델이 Opus 4.8에서 Opus 5.5로 바뀌고 가격도 크게 내려갔어요. 무엇이 달라졌는지 정리해요"
tags: ["자동생성", "Fast Mode", "Opus 5.5", "가격", "속도"]
category: "next"
order: 17
lastUpdated: "2026-11-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 마케팅 페이지(2026-11-09 확인) 기준 업데이트. 세부 가격은 공식 가격 페이지에서 최종 확인하세요. <code>[공]</code>
</div>

## Fast Mode 무엇이 달라졌나요?

| 항목 | 이전 (Opus 4.8 시절) | 현재 (Opus 5.5 기반) |
|---|---|---|
| **대상 모델** | Opus 4.8 고속 버전 | **Opus 5.5** 고속 버전 |
| **입력 가격** | $30 / million tokens | **$8** / million tokens |
| **출력 가격** | $150 / million tokens | **$40** / million tokens |
| **속도** | 2.5배 빠름 | 유사하거나 더 빠름 (추정) |
| **대상 플랜** | 소비 기반 플랜 | 소비 기반 플랜 |

> 💡 **한마디로**: "최고 성능 모델을 초고속으로 쓰는데, 가격은 4~5배나 싸진" 셈이에요.

---

## Fast Mode 켜는 방법

```bash
# 슬래시 명령어로 토글
/fast

# 또는 UI에서 번개(⚡) 아이콘 클릭
```

Fast Mode가 켜지면 화면에 **Fast** 표시가 나타나요.

---

## 언제 Fast Mode를 쓰면 좋을까요?

| ✅ Fast Mode 추천 상황 | ❌ 굳이 필요 없는 상황 |
|---|---|
| 긴 파일을 빠르게 훑어볼 때 | 단순한 질문 답변 |
| 여러 파일을 연달아 고칠 때 | 단일 짧은 작업 |
| 대규모 리팩토링 (응답 대기 시간 줄이기) | 이미 충분히 빠른 경우 |
| 데드라인이 촉박할 때 | 비용 절약이 최우선일 때 |

---

## 요금 계산 예시

```
일반적인 Claude Code 세션 (1시간 집중 작업)
  - 입력: 약 500K tokens
  - 출력: 약 100K tokens

Fast Mode OFF (Opus 5.5 기준):
  - 입력: 500K × $15/M = $7.50
  - 출력: 100K × $75/M = $7.50
  - 합계: 약 $15.00

Fast Mode ON:
  - 입력: 500K × $8/M = $4.00
  - 출력: 100K × $40/M = $4.00
  - 합계: 약 $8.00
  
  → Fast Mode가 오히려 더 저렴! (추정 계산)
```

> ⚠️ 위 계산은 추정치예요. 실제 가격은 공식 가격 페이지(code.claude.com)에서 확인하세요.

---

## 플랜별 사용 가능 여부

- **소비 기반 플랜(Consumption plan)**: ✅ 사용 가능 — API 토큰 기준 과금
- **구독 플랜(Pro/Max/Ultra)**: 사용 크레딧(usage credits) 차감 방식으로 사용 가능
- **Team/Enterprise**: 별도 확인 필요

---

## 연관 문서
- [Claude 5.5 모델 시리즈](../reference/models-5-5-series.md)
- [모델 설정하기](../../config/)
