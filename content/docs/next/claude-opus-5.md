---
title: "[블] Claude Opus 5 — 새로운 최상위 Opus 등장 (2026-07-24)"
description: "Anthropic이 발표한 Claude Opus 5는 Opus 티어의 큰 도약. 장시간 에이전트 실행과 코딩·전문 업무 성능이 대폭 향상됐어요"
tags: ["자동생성", "opus5", "모델", "에이전트", "새소식"]
category: "next"
order: 25
lastUpdated: "2026-08-18"
---

<div class="note-star">
★ <strong>[블] 공식 발표</strong>: 2026년 7월 24일 Anthropic 블로그 "Introducing Claude Opus 5"
<br />★ <strong>[공] 공식 적용</strong>: Claude Code v2.1.219부터 기본 Opus 모델이 Opus 5로 전환 (Week 30, Jul 20-24)
<br />★ Fast Mode도 Opus 5 기반으로 전환, 가격 $10/$50 per MTok (소비 기반 플랜)
</div>

## Claude Opus 5가 뭔가요?

Claude Opus 5는 Anthropic이 발표한 **새로운 최상위 Opus 모델**이에요. 기존 Opus 4.8보다 **장시간 에이전트 실행**, **코딩**, **전문 업무**에서 큰 도약을 이뤘습니다.

> 🍱 **비유로 설명하면**: 이전 Opus 4.8이 "슈퍼 인턴"이었다면, Opus 5는 "5년 경력 시니어 개발자"예요. 복잡한 프로젝트를 혼자서도 오래 끌어가는 능력이 훨씬 강해졌어요.

---

## 어디서 바뀌었나요?

### Claude Code에서의 변화 ([공])

Claude Code v2.1.219부터 자동 적용돼요:

| 구분 | 이전 | 지금 |
|------|------|------|
| 기본 Opus 모델 | Opus 4.8 | **Opus 5** |
| Fast Mode 기반 | Opus 4.8 | **Opus 5** |
| Fast Mode 가격 | $30/$150 per MTok | **$10/$50 per MTok** |
| Opus 4.7 Fast Mode | 지원 종료 | ❌ |
| 컨텍스트 창 | - | **최대 1M 토큰** (API·Max·Team·Enterprise) |

### 어디서 Opus 5를 쓸 수 있나요?

✅ Claude Code (v2.1.219 이상)
✅ Anthropic API
✅ Claude Max, Team Premium, Enterprise (소비 기반)
✅ Claude Platform on AWS
✅ Amazon Bedrock (1M 모델 변형 선택)
✅ Google Cloud's Agent Platform

---

## Claude Code에서 Opus 5 사용하기

### 모델 직접 지정

```bash
# 터미널에서 직접 전환
> /model claude-opus-5

# 또는 모델 선택기(Model Picker)에서 Opus 5 선택
```

### Fast Mode (고속 실행)

```bash
# Opus 5 Fast Mode 켜기
/fast
```

> 📝 **Fast Mode란?** Opus 모델을 2.5배 빠르게 실행하는 고속 설정이에요. 더 빠르지만 토큰당 비용이 조금 더 나와요.

---

## Opus 5 vs 이전 모델 비교

| 특성 | Opus 4.8 | **Opus 5** |
|------|----------|------------|
| 장시간 에이전트 실행 | 보통 | ⬆️ **큰 향상** |
| 코딩 성능 | 좋음 | ⬆️ **더 향상** |
| 전문 업무 처리 | 좋음 | ⬆️ **더 향상** |
| 1M 컨텍스트 창 | 일부 지원 | ✅ 기본 지원 |
| Fast Mode 가격 | $30/$150/MTok | **$10/$50/MTok** |

---

## 입문자를 위한 핵심 포인트

💡 **딱 3가지만 기억하세요!**

1. **자동 적용** — Claude Code 최신 버전이면 이미 Opus 5를 쓰고 있어요. 설정 필요 없어요.
2. **Fast Mode 저렴해짐** — 이전보다 3배 싼 $10/$50으로 고속 실행 가능해요.
3. **대형 프로젝트에 더 강함** — 장시간 여러 파일·단계를 거치는 작업일수록 Opus 5의 진가가 나와요.

---

## 다음 단계

- **[음성 입력 & Fast 모드](/docs/advanced/voice-fast)** — Fast Mode 자세한 사용법
- **[모델 설정](/docs/config/settings-json)** — 특정 모델 고정 설정법
- **[이번 주 새 기능 요약 (W30·W32)](/docs/advanced/whats-new-w30-w32)** — Opus 5와 함께 나온 다른 기능들
