---
title: "[블] Claude Opus 5 — 새 기본 Opus 모델 출시"
description: "2026년 7월 24일, Anthropic이 Claude Opus 5를 공식 출시했어요. 에이전트·코딩 성능이 한 단계 올라가고, 1M 토큰 컨텍스트와 빨라진 Fast Mode까지 한 번에 정리합니다."
tags: ["자동생성", "Opus 5", "클로드 오퍼스5", "새 모델", "1M 컨텍스트", "Fast Mode", "2026-07"]
category: "next"
order: 17
lastUpdated: "2026-08-11"
---

<div class="note-star">
★ <strong>[블] 공식 발표</strong> — 2026-07-24 Anthropic 공식 블로그 발표 기준이에요.<br />
★ <strong>[공] 공식 문서</strong>: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">Week 30 What's New</a>, v2.1.219 이상 필요.<br />
★ Fast Mode 가격이 Opus 4.8의 <del>$30/$150</del> → Opus 5의 <strong>$10/$50 per MTok</strong>으로 변경됐어요. <code>[공식]</code>
</div>

## Claude Opus 5가 뭔가요?

Claude Code의 **새로운 기본 Opus 모델**이에요. 2026년 7월 24일부터 Opus 4.8을 밀어내고 Claude Code의 Opus 티어 자리를 차지했습니다.

> 🍱 **비유로 설명하면**: 식당에서 "셰프 추천 메뉴"가 바뀐 거예요. 기존에는 A 요리가 추천이었는데, 이제는 더 맛있어진 B 요리(Opus 5)로 업그레이드됐어요. 메뉴판에서 이름만 골라도 자동으로 새 버전이 나옵니다.

---

## 어디서 기본으로 쓰이나요?

| 플랫폼 | Opus 5 기본? |
|---|---|
| Claude Code (Max/Team Premium/Enterprise 종량제) | ✅ 기본 |
| Anthropic API | ✅ 기본 |
| Amazon Bedrock | ✅ 기본 (1M 변형 선택 필요) |
| Google Cloud's Agent Platform | ✅ 기본 (1M 변형 선택 필요) |
| Pro 플랜 | 수동 선택 가능 |

---

## 핵심 변경 3가지

### 1️⃣ 1M 토큰 컨텍스트 (Anthropic API · Max · Team · Enterprise)

Opus 5는 **100만 토큰 컨텍스트 창**을 지원해요. 한 번에 긴 코드베이스나 문서를 통째로 넣고 작업할 수 있어요.

> 🍱 **비유로 설명하면**: 기존 Opus가 "사전 한 권"을 기억했다면, Opus 5는 "백과사전 세트" 전체를 펼쳐놓고 얘기하는 거예요.

Amazon Bedrock이나 Google Cloud에서는 1M 컨텍스트 변형(variant)을 **직접 선택**해야 해요. 기본 변형은 기존 컨텍스트 길이입니다.

```bash
# 모델 전환 방법 (Claude Code 터미널에서)
/model claude-opus-5

# 또는 모델 피커에서 선택
```

### 2️⃣ Fast Mode가 Opus 5로 이동

Fast Mode(빠른 모드)가 Opus 4.8에서 **Opus 5로 이전**됐어요. 가격도 달라졌습니다:

| 항목 | 이전 (Opus 4.8) | 변경 후 (Opus 5) |
|---|---|---|
| 대상 모델 | claude-opus-4-8 | **claude-opus-5** |
| 속도 | 2.5× 빠름 | 2.5× 빠름 (동일) |
| 입력 가격 | $30/MTok | **$10/MTok** |
| 출력 가격 | $150/MTok | **$50/MTok** |
| 제공 방식 | 리서치 프리뷰 | 리서치 프리뷰 (동일) |

> 🍱 **비유로 설명하면**: 특급 배송 서비스가 더 좋은 차로 업그레이드됐는데, 오히려 요금이 내려간 거예요. 더 빠르고 더 저렴해졌어요.

<div class="note-star">
★ <strong>주의</strong>: Fast Mode는 Opus 4.7 지원이 이미 종료됐어요. <code>/fast</code> 명령어는 이제 <strong>Opus 5</strong>와 Opus 4.8만 지원합니다. <code>[공식]</code>
</div>

### 3️⃣ 에이전트·코딩 성능 향상

공식 발표 기준으로 Opus 5는 "장시간 실행 에이전트(long-running agents)를 이끌면서 코딩과 전문 업무에서 성능이 한 단계 올라갔다"고 설명해요. 구체적인 벤치마크는 공식 블로그를 참고하세요.

---

## 어떻게 사용하나요?

```bash
# 방법 1: 명령어로 바로 전환
/model claude-opus-5

# 방법 2: 세션 시작 시 선택
# claude --model claude-opus-5

# 방법 3: settings.json에서 기본값 지정
# ~/.claude/settings.json 또는 프로젝트 .claude/settings.json
```

```json
{
  "model": "claude-opus-5"
}
```

---

## Opus 5 vs 기존 모델 비교

| 항목 | Opus 4.8 | **Opus 5** | Sonnet 5 |
|---|---|---|---|
| 등급 | Opus 티어 | **Opus 티어 (신규 기본)** | 기본 티어 |
| 컨텍스트 | 200K | **1M** | 200K |
| Fast Mode | $30/$150 | **$10/$50** | 해당 없음 |
| 성능 | 높음 | **더 높음** | 빠름·균형 |

---

## 자주 묻는 질문

**Q: 기존에 Opus 4.8을 쓰던 사람은 자동으로 Opus 5로 바뀌나요?**
A: Max·Team Premium·Enterprise 종량제 사용자는 **자동으로 Opus 5가 기본값**이 됩니다. Pro 플랜은 수동으로 `/model claude-opus-5`로 전환해야 해요.

**Q: Fable 5는요?**
A: Fable 5는 여전히 최상위 티어로 별도 존재해요. Opus 5는 그 아래의 Opus 티어 기본 모델입니다.

**Q: Amazon Bedrock에서 1M 컨텍스트를 쓰려면?**
A: 1M 컨텍스트 변형을 별도로 선택해야 해요. Bedrock 콘솔이나 API에서 `claude-opus-5-20260724-1m` 형태의 변형을 찾아보세요.

---

## 더 알아보기

- [공식 발표 블로그 (Anthropic)](https://www.anthropic.com/news/claude-opus-5) — 2026-07-24
- [Week 30 What's New](/docs/next/whats-new-w30-w32) — 이번 주 다른 기능들
- [Fast Mode 개요](/docs/advanced/voice-fast) — Fast Mode 상세 설명
- [모델 설정](/docs/config/settings-json) — settings.json에서 모델 지정
