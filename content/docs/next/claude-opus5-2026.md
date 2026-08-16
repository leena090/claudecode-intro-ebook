---
title: "[공] Claude Opus 5 — 새 최상위 Opus 모델 (2026년 7월)"
description: "코딩·에이전트·전문 업무 최전선 성능의 Opus 5 공식 출시. Fast Mode가 Opus 5로 전환되고 가격은 $10/$50으로 인하."
tags: ["자동생성", "모델", "opus5", "opus-5", "fast-mode", "2026", "week30"]
category: "next"
order: 17
lastUpdated: "2026-08-16"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — Claude Opus 5 (2026-07-24 공식 출시, Week 30)<br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w30" target="_blank">공식 문서: whats-new/2026-w30</a> &nbsp;|&nbsp;
<a href="https://www.anthropic.com/news/claude-opus-5" target="_blank">Anthropic 블로그 발표</a>
</div>

## Claude Opus 5 — 더 강력해진 Opus 🚀

2026년 7월 24일, **Claude Opus 5 (클로드 오퍼스 5)** 가 공식 출시되어 최상위 Opus 모델 자리를 이어받았습니다.

> 🍱 **비유**: 스마트폰의 "프리미엄 플래그십 모델"이 새 버전으로 바뀐 것과 같아요. 갤럭시 S25에서 S26으로 업그레이드된 것처럼 — 같은 자리인데 성능이 확 올라갔어요.

---

## 어디서 기본 제공되나요?

| 플랜 / 환경 | 기본 Opus 모델 |
|---|---|
| Max 플랜 | ✅ claude-opus-5 |
| Team Premium | ✅ claude-opus-5 |
| Enterprise pay-as-you-go | ✅ claude-opus-5 |
| Anthropic API | ✅ claude-opus-5 |
| Claude Platform on AWS | ✅ claude-opus-5 |
| Amazon Bedrock | ✅ claude-opus-5 (1M 변형 선택) |
| Google Cloud Agent Platform | ✅ claude-opus-5 (1M 변형 선택) |

<div class="note-circle">
○ Claude Code v2.1.219 이상이 필요해요 (<code>claude update</code> 로 업그레이드)<br />
○ 기존 Opus 4.8·Sonnet 5·Haiku 4.5는 변동 없어요
</div>

---

## 어떻게 전환하나요?

이미 해당 플랜을 쓰고 있다면 **자동으로 Opus 5가 기본 적용**됩니다. 명시적으로 선택하려면:

```bash
# 명령어로 바로 전환
/model claude-opus-5

# 또는 시작할 때부터 지정
claude --model claude-opus-5
```

---

## 🌟 1M 토큰 컨텍스트 창

**Anthropic API, Max, Team, Enterprise 플랜**에서는 Opus 5가 **100만 토큰** 컨텍스트 창으로 실행돼요.

> 🍱 **비유**: 기억력이 엄청 좋아진 거예요. 일반 모드도 훌륭하지만, 이제는 소설 한 권 분량의 코드와 문서를 한꺼번에 기억하고 처리할 수 있어요.

| 항목 | 수치 |
|---|---|
| 컨텍스트 창 | **1,000,000 토큰** |
| 한국어 기준 | 약 50~60만 글자 (원고지 약 1,250장 분량) |
| 가용 플랜 | API, Max, Team, Enterprise |

Amazon Bedrock / Google Cloud에서는 **1M 변형(variant)** 을 별도로 선택해야 해요.

---

## ⚡ Fast Mode도 Opus 5로 전환

**Fast Mode (패스트 모드)** 가 Opus 5를 기반으로 전환됐습니다. 동시에 가격도 내려갔어요.

<div class="note-star">
★ <strong>[공] W30 공식 변경</strong>: Fast Mode가 이제 <strong>Opus 5</strong> 기반으로 실행됩니다.<br />
Fast Mode는 더 이상 Opus 4.7을 지원하지 않아요. <code>/fast</code>는 Opus 5 또는 Opus 4.8에 적용됩니다.
</div>

| 항목 | 이전 | 현재 |
|---|---|---|
| Fast Mode 기본 모델 | Opus 4.8 | **Opus 5** |
| Fast Mode 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |
| Fast Mode 가격 (입력) | $30/MTok (Opus 4.7 기준) | **$10/MTok** 🎉 |
| Fast Mode 가격 (출력) | $150/MTok (Opus 4.7 기준) | **$50/MTok** 🎉 |
| Opus 4.7 Fast Mode | 지원 | ❌ **더 이상 지원 안 함** |

> 🍱 **비유**: 더 좋은 택시(Opus 5)가 나왔는데 요금도 더 저렴해진 거예요. 이전 택시(Opus 4.7)는 고속 레인에서 더 이상 운행하지 않아요.

```bash
# Fast Mode 토글
/fast

# Opus 5로 모델 설정 후 Fast Mode
/model claude-opus-5
/fast
```

---

## Opus 4.8 → Opus 5 비교

현재 공식 발표 기준으로 Opus 5는 코딩·에이전트·전문 업무에서 개선됐어요. 세부 벤치마크 결과는 [Anthropic 공식 블로그](https://www.anthropic.com/news/claude-opus-5)에서 확인하세요.

| 항목 | Opus 4.8 | Opus 5 |
|---|---|---|
| 상태 | 여전히 사용 가능 | ✅ 새 기본 Opus |
| 컨텍스트 | 200K | **1M (API/Max/Team/Ent)** |
| Fast Mode 지원 | ✅ $10/$50 | ✅ $10/$50 |
| 권장 용도 | 이미 잘 작동 중이면 유지 가능 | 새 세션에는 Opus 5 권장 |

<div class="note-circle">
○ Opus 4.8도 여전히 사용 가능하며 Fast Mode를 지원해요<br />
○ Opus 4.7의 Fast Mode는 이번 업데이트로 종료됐어요
</div>

---

## 언제 Opus 5를 써야 하나요?

| 상황 | 추천 |
|---|---|
| 전체 코드베이스 리팩토링 | ✅ Opus 5 (1M 컨텍스트) |
| 복잡한 에이전트 작업 | ✅ Opus 5 |
| 빠른 코드 수정 | Sonnet 5 또는 Fast Mode |
| 일상적인 코딩 질문 | Sonnet 5 |
| 가벼운 작업 | Haiku 4.5 |

---

## 관련 자료

- 📄 [Claude Sonnet 5·Fable 5 소개](/docs/next/sonnet5-fable5-july2026)
- 📄 [모델 선택 가이드 (기존 버전)](/docs/next/new-models-2026-06)
- 🔗 [공식 모델 설정 문서](https://code.claude.com/docs/en/model-config)
