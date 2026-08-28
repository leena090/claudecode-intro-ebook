---
title: "[블] Claude Opus 5 출시 — 장시간 에이전트의 새 왕"
description: "Opus 최상위 티어의 세대 교체. 코딩·에이전트·전문 업무 전반에서 한 단계 도약한 Opus 5와 달라진 Fast Mode 정리"
tags: ["자동생성", "모델", "Opus 5", "Fast Mode", "에이전트", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-08-28"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026년 7월 24일 Anthropic 블로그 · Claude Code v2.1.219 이상<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/model-config">code.claude.com/docs/en/model-config</a><br />
★ <strong>출처</strong>: Anthropic 블로그 [블] + 공식 docs w30 [공]
</div>

## Opus 5가 왜 중요한가요?

**Claude Opus 5** (클로드 오퍼스 파이브)는 Anthropic이 2026년 7월 24일 공개한 **Opus 티어의 새 기본 모델**입니다. Opus 4.8을 완전히 대체하며, 특히 **장시간 이어지는 에이전트 작업**과 **코딩·전문 업무**에서 한 단계 뛰어난 성능을 보여준다고 공식 발표되었습니다.

> 🏋️ **비유로 설명하면**: 프로 운동선수 트레이너가 있다고 생각해 보세요. Opus 4.8이 숙련된 코치라면, Opus 5는 같은 팀에서 더 오래, 더 깊이 팀원을 이해하며 코칭하는 수석 코치예요. 오래 이어지는 복잡한 프로젝트일수록 차이가 크게 납니다.

---

## 어디서 Opus 5를 쓸 수 있어요?

| 플랜 | Opus 5 기본 여부 |
|------|----------------|
| **Max** | ✅ 기본 Opus 모델 |
| **Team Premium** | ✅ 기본 Opus 모델 |
| **Enterprise (종량제)** | ✅ 기본 Opus 모델 |
| **Anthropic API** | ✅ 기본 Opus 모델 |
| Amazon Bedrock | ✅ (1M 컨텍스트 변형 선택 필요) |
| Google Cloud Agent Platform | ✅ (1M 변형 선택 필요) |

---

## 1M 토큰 컨텍스트 창 🪟

**Anthropic API, Max, Team, Enterprise 플랜**에서는 Opus 5가 **100만 토큰(1M token) 컨텍스트 창**으로 동작합니다.

> 📚 **비유**: 일반 모델이 책 1권 분량의 내용만 기억한다면, Opus 5는 도서관 한 칸 분량을 한꺼번에 기억하며 작업하는 셈입니다. 초대형 코드베이스나 긴 문서 분석에 특히 유리합니다.

[공] 공식 문서 참조: [Extended context](https://code.claude.com/docs/en/model-config#extended-context)

---

## /model 명령어로 전환하기

```text
> /model claude-opus-5
```

또는 모델 피커(model picker)에서 선택해도 됩니다. v2.1.219 이상이 필요합니다.

---

## Fast Mode(패스트 모드)도 Opus 5로 이동했어요 ⚡

Fast Mode(패스트 모드)는 **Opus 5를 2.5배 빠르게** 실행하는 고속 구성입니다.

| 항목 | 이전 (Opus 4.8 시절) | 현재 (Opus 5) |
|------|-------------------|--------------|
| 대상 모델 | Opus 4.8 | **Opus 5** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| 가격 | $30/$150 per MTok (추정, 번복됨) | **$10/$50 per MTok** (공식 발표 기준) |
| 활성화 | `/fast` | `/fast` |
| 지원 플랜 | 소비 기반(consumption) 플랜 | 소비 기반 플랜 + 구독 플랜 크레딧 |

> 💡 **팁**: Opus 4.7은 w30부터 Fast Mode 지원이 종료되었습니다. `/fast`는 이제 Opus 5와 Opus 4.8에만 적용됩니다.

### Fast Mode 활성화

```text
> /fast
```

리서치 프리뷰(research preview) 상태이며, 소비 기반 플랜에서 사용 가능합니다.

---

## Opus 5 vs. 기존 모델 비교

| 모델 | 특징 | 적합한 작업 |
|------|------|-----------|
| **claude-opus-5** | 장시간 에이전트, 최고 품질 | 복잡한 코드베이스, 대형 리팩터링, 전문 분석 |
| claude-sonnet-5 | 프론티어 성능·규모 균형 | 일반 코딩, 에이전트 업무, 전문 업무 |
| claude-fable-5 | 최상위 티어 | 초대형 프로젝트 (복귀 후 이용 가능) |
| claude-haiku-4-5 | 경량·빠름 | 간단한 질문, 비용 절감 |

> ⚠️ **참고**: Fable 5(클로드 페이블 파이브)는 2026년 7월 1일 글로벌 복귀했으나, 플랜별 접근 가능 여부를 확인하세요.

---

## 정리

- **Claude Opus 5**는 Opus 4.8을 대체하는 새 Opus 기본 모델입니다
- **1M 토큰 컨텍스트 창** (API, Max, Team, Enterprise)
- **Fast Mode** 대상이 Opus 5로 이동, 가격은 **$10/$50 per MTok**
- `/model claude-opus-5` 또는 모델 피커로 전환
- Claude Code **v2.1.219 이상** 필요

> 이 글은 2026년 7월 24일 Anthropic 공식 블로그 발표 및 Claude Code 공식 문서(whats-new/2026-w30)를 기반으로 작성되었습니다 [블][공].
