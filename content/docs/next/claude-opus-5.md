---
title: "[공][블] Claude Opus 5 출시 — 1M 컨텍스트·Fast Mode 대폭 인하"
description: "2026년 7월 24일 Claude Opus 5가 출시됐어요. 100만 토큰 컨텍스트, Fast Mode 가격 70% 인하, 그리고 Claude Code 기본 Opus 모델 교체"
tags: ["자동생성", "Opus5", "모델업데이트", "신규모델", "Fast Mode", "1M context", "claude-opus-5"]
category: "next"
order: 17
lastUpdated: "2026-08-25"
---

<div class="note-star">
★ <strong>[블]</strong> 공식 블로그: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)<br />
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">whats-new/2026-w30</a> (Jul 20–24, 2026)<br />
★ <strong>[공]</strong> 모델 설정: <a href="https://code.claude.com/docs/en/model-config">code.claude.com/docs/en/model-config</a>
</div>

## 한 눈에 보기

| 항목 | 내용 |
|---|---|
| **모델 이름** | Claude Opus 5 (`claude-opus-5`) |
| **출시일** | 2026년 7월 24일 |
| **컨텍스트 창** | **100만 토큰** (Max·Team·Enterprise·API 기준) |
| **Fast Mode 가격** | **$10/$50 per MTok** (입력/출력) |
| **이전 Fast Mode 가격** | ~~$30/$150 per MTok~~ (70% 인하!) |

---

## Claude Opus 5가 뭔가요?

**Claude Opus 5**는 Anthropic의 **최상위 Opus 계열 최신 모델**이에요. 에이전트 작업, 코딩, 전문 업무 전반에서 이전 Opus보다 크게 향상된 성능을 냈어요.

> 🍱 **비유로 설명하면**: 이전까지 Opus 4.8이 "회사 최고 전문가"였다면, Opus 5는 **"그 전문가가 새 교육을 더 받고 파워업한 버전"** 이에요. 특히 긴 문서를 한꺼번에 다룰 수 있는 능력이 크게 늘었어요.

---

## 가장 큰 변화 3가지

### 1. 기본 Opus 모델 교체

Claude Code에서 `Opus`를 사용하면 이제 자동으로 Opus 5가 선택돼요.

```
이전: claude-opus-4-8 (기본 Opus)
이후: claude-opus-5  (기본 Opus) ✅
```

**모델 전환하기:**
```bash
# 세션에서 직접 선택
/model claude-opus-5

# settings.json에 고정
# ~/.claude/settings.json
{
  "model": "claude-opus-5"
}
```

---

### 2. 100만 토큰 컨텍스트 창 🎉

Opus 5는 **100만(1M) 토큰** 컨텍스트를 지원해요. 책 한 권 전체, 대형 코드베이스 수십 개 파일을 한 번에 담을 수 있는 규모예요.

> 🍱 **비유로 설명하면**: 기존 모델이 "기억력 좋은 사람"이었다면, Opus 5는 **"사무실 서랍 30개짜리 책상에 자료를 한 번에 펼쳐놓고 일하는 사람"** 이에요.

| 계획 | 컨텍스트 |
|---|---|
| Max, Team Premium, Enterprise (API) | **100만 토큰** ✅ |
| Amazon Bedrock, Google Cloud | 별도 1M 변형 모델 선택 필요 |

<div class="note-star">
★ <strong>참고</strong>: 1M 컨텍스트는 Anthropic API, Max, Team, Enterprise 요금제에서 기본 제공돼요. Amazon Bedrock이나 Google Cloud 사용자는 모델 목록에서 1M 변형을 별도로 선택해야 해요. (공식 발표 기준)
</div>

---

### 3. Fast Mode 가격 70% 대폭 인하 💰

**Fast Mode**는 Opus 5를 2.5배 빠르게 실행하는 고속 설정이에요. 그런데 이번에 가격이 크게 내려갔어요.

| 구분 | 이전 (Opus 4.8 기준) | 이후 (Opus 5 기준) |
|---|---|---|
| 입력 | $30 / 100만 토큰 | **$10 / 100만 토큰** 🔽 |
| 출력 | $150 / 100만 토큰 | **$50 / 100만 토큰** 🔽 |

> 🍱 **비유로 설명하면**: 같은 택배 서비스인데 "더 빠른 모델로 바꿨더니 배송비도 3분의 1로 내려갔다"는 느낌이에요.

**Fast Mode 켜기:**
```bash
# 세션 중에 토글
/fast

# 또는 settings.json
{
  "fastMode": true
}
```

<div class="note-star">
★ Fast Mode는 소비 기반(consumption-based) 요금제에서 사용 가능해요. 구독 플랜에서는 사용 크레딧으로 적용돼요. (공식 발표 기준 — 상세 요금은 claude.ai에서 확인)
</div>

---

## Opus 5 vs 이전 모델 비교

| 항목 | Opus 4.7 | Opus 4.8 | **Opus 5** |
|---|---|---|---|
| 컨텍스트 창 | 200K | 200K | **1M** |
| Fast Mode 지원 | ❌ | ✅ ($30/$150) | ✅ (**$10/$50**) |
| 기본 모델 여부 | ❌ | ❌ (Sonnet 5 전환 후) | ✅ (Opus 계열 기본) |

<div class="note-star">
★ <strong>참고</strong>: Fast Mode는 Opus 4.8과 Opus 5만 지원해요. Opus 4.7은 Fast Mode 대상에서 제외됩니다.
</div>

---

## 지원 플랫폼

| 플랫폼 | Opus 5 지원 |
|---|---|
| Claude Code (CLI, Desktop, 웹) | ✅ |
| Anthropic API | ✅ |
| Claude Platform on AWS | ✅ |
| Amazon Bedrock | ✅ (1M 변형 별도 선택) |
| Google Cloud's Agent Platform | ✅ (1M 변형 별도 선택) |

---

## 언제 Opus 5를 선택하면 좋을까요?

- 📄 **아주 큰 코드베이스** 분석 (1M 컨텍스트 활용)
- 🤖 **장시간 실행되는 에이전트** 작업 (내구성·정확성 중요)
- 🧩 **복잡한 리팩토링** 또는 다중 파일 동시 수정
- ⚡ **빠른 응답이 필요한 작업** + 높은 품질 동시 요구 → Fast Mode 활용

> 🍱 **간단 기준**: 파일이 많고 작업이 복잡할수록 Opus 5를 쓰고, 빠른 단순 작업은 Sonnet 5로도 충분해요.

---

## 관련 문서

- [모델 설정 가이드](https://code.claude.com/docs/en/model-config) — 모델 변경·고정 방법
- [Fast Mode 설명](https://code.claude.com/docs/en/fast-mode) — 고속 모드 상세
- [Sonnet 5·Fable 5 출시 정리](../next/sonnet5-fable5-july2026) — 2026년 6~7월 모델 흐름
