---
title: "[공] Claude Opus 5 출시 — 최상위 모델 교체 & Fast Mode 가격 대폭 인하"
description: "2026년 7월 24일, Claude Opus 5가 새 기본 Opus 모델로 등장했어요. 1M 토큰 컨텍스트, Fast Mode가 $10/$50으로 인하, 그리고 코딩·에이전트 성능이 한 단계 올랐습니다."
tags: ["자동생성", "opus5", "신규모델", "fast-mode", "2026", "week30"]
category: "next"
order: 17
lastUpdated: "2026-08-19"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026년 7월 24일 공식 출시. Week 30 (2026-07-20 ~ 07-24) 업데이트. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w30" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w30</a><br />
👉 <a href="https://www.anthropic.com/news/claude-opus-5" target="_blank">블로그: anthropic.com/news/claude-opus-5</a>
</div>

## Claude Opus 5가 뭔가요?

Claude Code의 최상위 등급 모델인 **Opus 시리즈**에 새 버전이 나왔어요.

> 🏆 **비유로 설명하면**: 회사에서 제일 실력 좋은 선임 개발자가 은퇴하고, 더 뛰어난 수석 개발자가 입사한 것과 같아요. 이름은 비슷하지만, 처리할 수 있는 작업의 규모와 정확도가 한 단계 올라갔어요.

Opus 5는 **Claude Code의 기본 Opus 모델**로 자동 전환됐어요. 따로 설정하지 않아도 Opus를 선택하면 이제 Opus 5가 실행돼요.

---

## 주요 변화 한눈에 보기

| 항목 | 이전 (Opus 4.8) | 새로 (Opus 5) |
|---|---|---|
| **기본 모델** | Opus 4.8 | ✅ **Opus 5** |
| **컨텍스트 창** | 200K 토큰 | ✅ **1M 토큰** (백만!) |
| **Fast Mode 가격** | $30/$150 / MTok | ✅ **$10/$50 / MTok** |
| **모델 ID** | `claude-opus-4-8` | `claude-opus-5` |

> 💡 **MTok**: 토큰 100만 개를 뜻해요. 입력(input) $10, 출력(output) $50이에요.

---

## 가장 큰 변화: 컨텍스트 창 1M 토큰!

**컨텍스트 창(context window)**이란, Claude가 한 번에 읽고 기억할 수 있는 양이에요.

> 📖 **비유**: 사람이 대화할 때 기억할 수 있는 대화량 같은 거예요. 이전엔 소설 한 권 분량(200K)이었다면, 이제는 소설 다섯 권(1M)을 한꺼번에 기억해요.

**어떤 상황에서 1M 컨텍스트가 필요하냐고요?**

- 🗂️ 파일이 수백 개인 **대형 레거시 코드베이스** 전체를 분석할 때
- 📊 긴 회의록, 리서치 문서, 로그 파일을 한꺼번에 처리할 때
- 🔗 여러 마이크로서비스 간 **연결 관계를 전체적으로 파악**해야 할 때

**어디서 1M 컨텍스트를 쓸 수 있나요?**

| 플랜 | 1M 컨텍스트 가능? |
|---|---|
| Anthropic API | ✅ 가능 |
| Max 플랜 | ✅ 가능 |
| Team / Enterprise | ✅ 가능 |
| Amazon Bedrock | ✅ 가능 (1M 변형 선택) |
| Google Cloud Agent Platform | ✅ 가능 (1M 변형 선택) |

---

## Fast Mode, 가격이 확 내렸어요! 💸

**Fast Mode(패스트 모드)**는 Opus를 2.5배 빠르게 실행하는 고속 설정이에요.
이번 Opus 5 출시와 함께 Fast Mode 가격이 크게 내렸어요.

| 항목 | 이전 | 지금 |
|---|---|---|
| Fast Mode 대상 모델 | Opus 4.8 | ✅ **Opus 5** |
| 입력 가격 | $30/MTok | ✅ **$10/MTok** (67% 인하!) |
| 출력 가격 | $150/MTok | ✅ **$50/MTok** (67% 인하!) |

> 💡 **Fast Mode란?** `/fast` 명령어로 켜고 끄는 고속 모드예요. 빠르게 답이 필요할 때 쓰지만, 일반 Opus보다 비용이 더 들어요. 이번에 Opus 5로 업그레이드되면서 가격도 함께 내렸어요.

**주의**: Fast Mode는 Opus 4.7을 더 이상 지원하지 않아요. `/fast`는 이제 **Opus 5 또는 Opus 4.8**에만 적용돼요.

---

## Opus 5로 바꾸는 방법

Claude Code에서 Opus 5를 명시적으로 선택하려면:

```bash
# 현재 세션에서 Opus 5로 변경
/model claude-opus-5

# 또는 모델 피커(picker)에서 선택
# 메뉴에서 "Opus 5"를 고르면 돼요
```

**어떤 플랜에서 기본으로 쓸 수 있나요?**

| 플랜 | 기본 Opus 모델 |
|---|---|
| Max 플랜 | ✅ Opus 5 |
| Team Premium | ✅ Opus 5 |
| Enterprise (종량제) | ✅ Opus 5 |
| Anthropic API | ✅ Opus 5 |
| Amazon Bedrock | ✅ Opus 5 |
| Google Cloud Agent Platform | ✅ Opus 5 |

---

## 이런 분께 특히 반가운 소식이에요

- 🏢 **대형 코드베이스를 다루는 팀** — 1M 컨텍스트로 전체 프로젝트를 한 번에 파악
- ⚡ **Fast Mode를 자주 쓰는 분** — 가격이 67% 내렸으니 더 자주 써도 부담이 줄어요
- 🤖 **에이전트 워크플로우를 운영하는 분** — 더 강력한 모델이 더 복잡한 판단을 도와줘요

---

## 필요 버전

Opus 5를 쓰려면 **Claude Code v2.1.219 이상**이 필요해요.

```bash
# 버전 확인
claude --version

# 업데이트
npm update -g @anthropic-ai/claude-code
```

---

> 📌 **관련 문서**: [모델 설정](/docs/en/model-config) | [Fast Mode](/docs/en/fast-mode) | [W30 전체 업데이트 →](/docs/en/whats-new/2026-w30)
