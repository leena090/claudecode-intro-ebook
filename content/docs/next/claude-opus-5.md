---
title: "[블] Claude Opus 5 — 새로운 최상위 Opus 모델 등장"
description: "1M 토큰 컨텍스트, Fast Mode 가격 $10/$50로 인하, Bedrock·GCP 지원까지 — 2026년 7월 24일 공식 출시된 Opus 5 완전 정리"
tags: ["자동생성", "Opus5", "신모델", "Fast Mode", "컨텍스트", "주간업데이트"]
category: "next"
order: 16
lastUpdated: "2026-08-31"
---

<div class="note-star">
★ <strong>[블]</strong> 이 글은 Anthropic 공식 블로그 "Introducing Claude Opus 5" (2026-07-24)와 공식 문서 W30 What's New 내용을 기반으로 합니다.
<br />★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a>
<br />★ Claude Code <strong>v2.1.219 이상</strong>이 필요합니다.
</div>

## Claude Opus 5가 뭔가요?

**Claude Opus 5**는 기존 Opus 4.8을 대체하는 새로운 최상위 Opus 티어 모델이에요. 2026년 7월 24일 공식 출시됐고, Claude Code에서도 즉시 기본 Opus 모델로 전환됐습니다.

> 🍱 **비유로 설명하면**: Opus는 클로드 집안의 "총주방장 급"이에요. 4.8이 이전 총주방장이었다면, Opus 5는 요리 실력이 한 단계 더 높은 새 총주방장이 부임한 거예요. 구구단을 외우듯 방대한 문서를 한 번에 다루는 능력까지 갖췄고요.

---

## 핵심 스펙 한 눈에 보기

| 항목 | Claude Opus 4.8 (구) | **Claude Opus 5 (신)** |
|---|---|---|
| **모델 ID** | `claude-opus-4-8` | **`claude-opus-5`** |
| **컨텍스트 창** | 200K 토큰 | **1,000,000 토큰 (1M)** |
| **Fast Mode** | 대상 모델 | ✅ Fast Mode 지원 |
| **Fast Mode 가격** | $30/$150 per MTok | **$10/$50 per MTok** |
| **기본 모델** | Max/Team/Enterprise | Max/Team/Enterprise |

> 💡 **1M 토큰이 얼마나 큰 거냐고요?** 한국어 소설 1,500권 분량의 텍스트를 한 번에 넣을 수 있는 크기예요. 거대한 레거시 코드베이스 전체를 통째로 맡길 수 있어요.

---

## Fast Mode 변경 — 가격이 내려갔어요!

Fast Mode는 Opus를 **2.5배 빠르게** 실행하는 기능인데요. Opus 5 출시와 함께 **가격이 대폭 인하됐어요**.

| 구분 | 이전 (Opus 4.8 기준) | **현재 (Opus 5 기준)** |
|---|---|---|
| **입력 토큰** | $30 / 1M | **$10 / 1M** |
| **출력 토큰** | $150 / 1M | **$50 / 1M** |
| **속도** | 2.5배 빠름 | 2.5배 빠름 |

> 🍱 **비유로 설명하면**: 빠른 특급 배달 서비스가 있는데, 예전엔 배달비가 비쌌는데 이제는 3분의 1 가격으로 똑같이 빠르게 받을 수 있게 된 거예요.

Fast Mode 켜는 방법:
```bash
/fast   # 토글 방식으로 켜고 끄기
```

단, Fast Mode Opus 4.7 지원은 종료됐어요. 이제 `/fast`는 **Opus 5 및 Opus 4.8**에만 적용돼요.

---

## 어디서 사용할 수 있나요?

Opus 5는 여러 플랫폼에서 지원해요:

| 플랫폼 | 지원 여부 | 비고 |
|---|---|---|
| **Anthropic API** | ✅ | 1M 컨텍스트 포함 |
| **Max 플랜** | ✅ | 1M 컨텍스트 포함 |
| **Team/Enterprise** | ✅ | 1M 컨텍스트 포함 |
| **Amazon Bedrock** | ✅ | 1M 버전 별도 선택 |
| **Google Cloud (Agent Platform)** | ✅ | 1M 버전 별도 선택 |
| **Claude Platform on AWS** | ✅ | 지원 |
| **Pro 플랜** | ❌ | Max 이상 필요 |

---

## Claude Code에서 전환하는 방법

현재 모델을 Opus 5로 바꾸려면:

```bash
# 방법 1: 명령어로 직접 전환
/model claude-opus-5

# 방법 2: 설정 파일에 기본 모델 지정
# ~/.claude/settings.json
{
  "model": "claude-opus-5"
}
```

> 💡 **기존 설정 유지**: Opus 4.8이나 다른 모델로 설정해 두신 분은 자동 전환 **안 됩니다**. 직접 변경해야 해요.

---

## 언제 Opus 5를 쓰면 좋을까요?

| 상황 | 추천 모델 |
|---|---|
| 일반 코딩, 빠른 응답이 중요할 때 | Sonnet 5 (기본) |
| 대형 코드베이스 전체 분석 | **Opus 5** |
| 복잡한 아키텍처 설계 | **Opus 5** |
| 장기 실행 에이전트 작업 | **Opus 5** |
| 1M 토큰 넘는 긴 컨텍스트 필요 | **Opus 5** |
| 빠른 속도 + 높은 품질 필요 | **Opus 5 + Fast Mode** |

---

## 요금제별 Opus 5 접근성

| 플랜 | Opus 5 사용 가능? |
|---|---|
| **Pro** ($17/월) | ❌ |
| **Max 5x** ($100/월) | ✅ |
| **Max 20x** ($200/월) | ✅ |
| **Team/Enterprise** | ✅ (Premium seat) |
| **API (Console)** | ✅ (토큰 기반 과금) |

---

<div class="note-star">
★ Opus 5의 세부 성능 벤치마크 및 공식 발표 내용은 공식 블로그에서 확인하세요: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a>
<br />★ 모델 설정 전체 안내: <a href="https://code.claude.com/docs/en/model-config">code.claude.com/docs/en/model-config</a>
</div>
