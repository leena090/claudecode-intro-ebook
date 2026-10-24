---
title: "[블] Claude 5.5 시리즈 + Mythos·Fable 5.1 — 2026년 가을 모델 총정리"
description: "2026년 9~10월에 발표된 Claude 5.5 라인업(Opus·Sonnet·Haiku)과 최상위 모델 Mythos·Fable 5.1을 한눈에 비교해요"
tags: ["자동생성", "claude 5.5", "opus 5.5", "sonnet 5.5", "haiku 5.5", "mythos", "fable 5.1", "모델", "신규"]
category: "next"
order: 17
lastUpdated: "2026-10-24"
---

<div class="note-star">
★ <strong>[블] 출처</strong> — Anthropic 공식 블로그: Introducing Claude Opus 5.5 (Sep 22, 2026), Introducing Claude Sonnet 5.5 (Sep 28, 2026), Introducing Claude Haiku 5.5 (Oct 7, 2026), Introducing Claude Mythos and Fable 5.1 (Sep 15, 2026)
<br />★ 세부 벤치마크 수치는 각 공식 발표 기준. 가격은 변경될 수 있음.
</div>

## 한꺼번에 4종이 나왔어요 📦

2026년 9~10월 사이, Anthropic이 모델을 **4개 연속**으로 출시했어요. 스마트폰으로 치면 한 해에 플래그십·중급·보급형을 한 번에 업그레이드한 셈이에요.

| 모델 | 출시일 | 한 줄 요약 |
|---|---|---|
| **Claude Mythos 5 + Fable 5.1** (미떠스/페이블) | Sep 15 | 코딩·지식 최전선. 과학 연구 미리보기 |
| **Claude Opus 5.5** (오퍼스) | Sep 22 | 에이전트 코딩·지식업무 1위, 비용 40% 절감 |
| **Claude Sonnet 5.5** (소넷) | Sep 28 | Sonnet 5 대비 30%+ 빠름, 비용 최대 30% 절감 |
| **Claude Haiku 5.5** (하이쿠) | Oct 7 | 가장 빠른 소형 모델. 요약·서브에이전트 특화 |

> 🚗 **비유로 설명하면**: Mythos/Fable이 F1 레이싱카, Opus 5.5가 스포츠카, Sonnet 5.5가 세단, Haiku 5.5가 경차예요. 용도에 맞게 고르면 됩니다.

---

## Mythos 5 + Fable 5.1 — 세계 최고 수준의 두 모델

### Mythos 5 (미떠스) 란?
- 코딩과 지식 업무에서 **세계 최고 수준** 성능 (공식 발표 기준)
- 과학 연구 능력의 미래를 엿볼 수 있는 연구 프리뷰 기능 포함
- 생명과학 검증 프로그램(LSVP) 대상 모델

### Fable 5.1 (페이블 5.1) 란?
- Fable 5의 업그레이드 버전
- Mythos 5와 함께 **나란히** 공개됨
- 7월에 미국 수출 규제로 잠시 정지됐다가 복귀한 Fable 5의 후속작
- 잼브레이크(jailbreak, 잼브레이크 = 모델 안전 장치 우회 시도) 방어 프레임워크 개선

<div class="note-star">
★ Mythos 5는 현재 생명과학 검증 프로그램(LSVP) 참여자에게 우선 제공됩니다. 일반 사용자 출시 일정은 별도 발표 예정.
</div>

---

## Claude Opus 5.5 — 에이전트 코딩의 새 기준

**Opus 5.5**는 Claude Code에서 **긴 시간 자율적으로 코딩 작업**을 처리하는 데 최적화됐어요.

### 왜 좋아요?

- 🏆 에이전트 코딩·지식 업무 벤치마크 **1위** (공식 발표 기준)
- 💰 이전 Opus 5 대비 **운영 비용 40% 절감**
- ⚡ Claude Code의 **Fast Mode 모델**이 Opus 5.5로 변경됨

### Fast Mode 변경 사항

| 항목 | 이전 (Opus 4.8) | 현재 (Opus 5.5) |
|---|---|---|
| 기준 모델 | claude-opus-4-8 | claude-opus-5-5 |
| 가격 (소비 기반) | $30/$150 / 백만 토큰 | **$8/$40** / 백만 토큰 |
| 속도 | 2.5배 빠름 | 동일 수준 빠름 |

> 💡 Fast Mode 가격이 크게 낮아졌어요! 이전에 비용 때문에 망설였다면 지금이 사용해볼 좋은 기회예요.

---

## Claude Sonnet 5.5 — 빠르고 저렴해진 일상형 모델

**Sonnet 5.5**는 Claude Code의 기본 작업에 가장 많이 쓰이는 모델이에요.

| 항목 | 내용 |
|---|---|
| 속도 | Sonnet 5 대비 **30%+ 빠름** |
| 비용 | 대부분의 작업에서 최대 **30% 저렴** |
| 특징 | 코딩·에이전트 작업 품질 명확히 향상 |

> 🍜 **비유로 설명하면**: 편의점 도시락이 같은 가격에 더 맛있어지고 데워지는 속도도 30% 빨라진 거예요.

---

## Claude Haiku 5.5 — 가장 빠른 소형 모델

**Haiku 5.5**는 **대량 반복 작업**에 특화된 경량 모델이에요.

### 언제 써야 할까요?

- ✅ **요약(Summarization)** — 긴 문서를 빠르게 요약
- ✅ **서브에이전트(Subagent)** — 멀티 에이전트 파이프라인에서 하위 작업 처리
- ✅ **브라우저 자동화** — 웹 페이지 빠른 분석
- ✅ **고속 분류** — 대량 데이터 태깅·정리

> 🐦 **비유로 설명하면**: Haiku는 참새처럼 작고 빠르게 많은 일을 처리해요. 독수리(Opus)가 한 번 크게 날아오를 때, 참새(Haiku)는 100번 왔다갔다 할 수 있어요.

---

## 어떤 모델을 고르면 될까요?

### Claude Code 사용자 기준

```
복잡한 멀티파일 리팩토링, 긴 자율 에이전트 작업
→ Opus 5.5 (또는 Fast Mode 활성화)

일상적인 코딩, 버그 수정, 설명 요청
→ Sonnet 5.5 (기본값, 가장 균형 좋음)

대량 주석 생성, 파일 요약, 간단한 서브에이전트
→ Haiku 5.5

연구 수준 분석, 생명과학·과학 프로젝트
→ Mythos 5 (검증 프로그램 참여 시)
```

### 모델 바꾸는 법

Claude Code에서 모델을 직접 지정하려면:

```bash
claude --model claude-opus-5-5
claude --model claude-sonnet-5-5
claude --model claude-haiku-5-5
```

또는 `CLAUDE.md`나 `settings.json`에서 기본 모델을 고정할 수 있어요. → [모델 설정 가이드](/docs/config/settings-json) 참조

---

## 정리 표

| 모델 | 코딩 성능 | 속도 | 비용 | 추천 용도 |
|---|---|---|---|---|
| Mythos 5 | ⭐⭐⭐⭐⭐ | 보통 | 높음 | 최고 수준 연구·코딩 |
| Fable 5.1 | ⭐⭐⭐⭐⭐ | 보통 | 높음 | 최상위 일반 작업 |
| Opus 5.5 | ⭐⭐⭐⭐ | 빠름(Fast) | 중간 | 에이전트 코딩, 자율 작업 |
| Sonnet 5.5 | ⭐⭐⭐⭐ | 매우 빠름 | 낮음 | 일상 코딩 (기본 추천) |
| Haiku 5.5 | ⭐⭐⭐ | 최고 속도 | 매우 낮음 | 대량 반복, 서브에이전트 |

<div class="note-star">
★ 이전 모델 관련 — Sonnet 5, Fable 5 정보는 <a href="/docs/next/sonnet5-fable5-july2026">이 글</a>을 참조하세요.
</div>
