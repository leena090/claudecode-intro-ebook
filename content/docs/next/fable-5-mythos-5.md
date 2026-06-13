---
title: "[블] Claude Fable 5 & Mythos 5 — Anthropic의 새 최강 모델 등장, 그리고 미국 수출 제한"
description: "Claude Fable 5(페이블 5)와 Mythos 5(미토스 5)가 공개됐어요. 코딩·에이전트 작업에서 역대 최강이지만, 미국 정부의 수출 규제로 접근이 제한될 수 있어요."
tags: ["fable-5", "페이블-5", "mythos-5", "미토스-5", "신규모델", "수출규제", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-13"
---

<div class="note-star">
★ <strong>출처</strong>: Anthropic 블로그 발표 <code>[블]</code> (2026-06-09)<br />
★ <strong>⚠️ 중요 경고</strong>: 2026-06-12, 미국 정부가 Fable 5와 Mythos 5에 대한 <strong>접근 중단 수출 규제 지시</strong>를 내렸어요. 한국을 포함한 국제 사용자들은 현재 접근이 제한될 수 있습니다.
</div>

## Claude Fable 5 & Mythos 5가 뭔가요?

Anthropic이 2026년 6월 9일, 새로운 두 모델을 공개했어요.

| 모델 | 별칭 | 특징 |
|---|---|---|
| **Claude Fable 5** | 페이블 5 | 코딩·에이전트 작업 최적화 역대 최강 모델 |
| **Claude Mythos 5** | 미토스 5 | 프리뷰 단계 (출시 준비 중) |

> 🍱 **비유**: 기존 Opus가 "명장"이었다면, Fable 5는 "전설 속 영웅" 수준이에요. Claude Code에서 사용할 수 있는 역대 가장 강력한 모델이에요.

---

## ⚠️ 미국 정부 수출 규제 — 중요 안내

2026년 6월 12일, **미국 정부가 Fable 5와 Mythos 5에 대한 모든 접근을 중단하는 수출 규제 지시**를 내렸습니다.

<div class="note-star">
★ Anthropic 공식 성명: "The US government has issued an export control directive to suspend all access to Fable 5 and Mythos 5." (2026-06-12) <code>[블]</code><br />
★ <strong>현재 상황이 변동 중</strong>이에요. 실제 접근 가능 여부는 Anthropic 공식 채널에서 최신 공지를 확인하세요.<br />
★ 한국은 미국의 수출 규제 대상 국가가 아니지만, 서버를 통한 접근 제한이 적용될 수 있어요.
</div>

> 🍱 **비유**: 최신 스마트폰이 출시됐는데 특정 국가에서는 아직 유통이 안 되는 것처럼 — 제품은 있지만 내가 사는 지역에서 살 수 없는 상황이에요.

---

## Claude Code에서의 현재 지원 모델

마케팅 페이지 기준 (2026-06 현재):

| 모델 | 용도 | 비고 |
|---|---|---|
| **Fable 5** | 최강, 에이전트/코딩 | ⚠️ 수출 규제 확인 필요 |
| **Opus 4.8** | 고성능 코딩 | 현재 기본 모델 (Max/Team/Enterprise) |
| **Sonnet 4.6** | 균형형 | 기본 모델 (Pro 플랜 등) |
| **Haiku 4.5** | 경량·빠름 | 간단한 작업용 |

```bash
# 모델 확인 및 전환
/model

# Opus 4.8 지정 (현재 안정적으로 사용 가능)
/model claude-opus-4-8
```

---

## Opus 4.8은 지금 바로 쓸 수 있어요

Fable 5 접근 제한 상황이라도 **Opus 4.8로도 충분히 강력**해요. Week 22 업데이트에서 기본 모델로 채택될 만큼 성능이 크게 향상됐어요.

- 코딩 성능 강화
- 에이전트 작업 향상
- 장기 실행 작업 일관성 개선

👉 자세한 내용: [Week 22 업데이트](/docs/next/whats-new-w22)

---

## 더 알아보기

- [Anthropic 공식 발표 — Claude Fable 5 and Mythos 5](https://www.anthropic.com/news)
- [Anthropic 수출 규제 성명 (2026-06-12)](https://www.anthropic.com/news)
- [Week 22 업데이트 — Opus 4.8 상세](/docs/next/whats-new-w22)
- [모델 설정 공식 문서](https://code.claude.com/docs/en/model-config)
