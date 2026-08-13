---
title: "[공][블] Claude Opus 5 출시 — 2026년 7월 24일"
description: "Opus 티어의 새 최상위 모델 Claude Opus 5가 나왔어요. 패스트 모드 가격이 절반 이하로 내려가고, 1M 컨텍스트 창이 기본 지원됩니다"
tags: ["자동생성", "Opus5", "신규모델", "패스트모드", "1M컨텍스트", "모델업데이트"]
category: "next"
order: 17
lastUpdated: "2026-08-13"
---

<div class="note-star">
★ <strong>[공][블]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/2026-w30">공식 What's New W30</a> + Anthropic 블로그 "Introducing Claude Opus 5" (2026-07-24) 내용을 한국어로 정리한 것입니다.
<br />★ Claude Code <strong>v2.1.219 이상</strong>이 필요합니다. <code>claude --version</code>으로 확인 후 구버전이면 업데이트하세요.
<br />★ <strong>핵심 요약</strong>: Opus 5가 새 기본 Opus 모델로 전환. 패스트 모드 가격이 $30/$150 → <strong>$10/$50 (입력/출력 per MTok)</strong>으로 대폭 인하.
</div>

## Claude Opus 5가 뭔가요?

2026년 7월 24일, Anthropic이 **Claude Opus 5**를 공식 출시했습니다. Opus는 Claude Code에서 가장 강력한 모델 티어예요.

> 🍱 **비유로 설명하면**: 레스토랑에 "일반 셰프"(Sonnet)도 있고 "총주방장"(Opus)도 있는데, 총주방장 자리에 더 실력 좋은 분이 부임한 거예요. 기존 메뉴는 그대로인데 요리 퀄리티가 한 단계 올라간 셈이죠.

---

## 무엇이 달라졌나요?

### 🆕 Opus 5가 기본 Opus 모델로

Opus 5는 다음 요금제에서 **기본 Opus 모델**이 됐습니다:

| 플랫폼/요금제 | 기본 모델 |
|---|---|
| Claude Max, Team Premium | ✅ Opus 5 기본 |
| Enterprise (pay-as-you-go) | ✅ Opus 5 기본 |
| Anthropic API | ✅ Opus 5 기본 |
| Claude Platform on AWS | ✅ Opus 5 기본 |
| Amazon Bedrock | ✅ Opus 5 지원 (1M 버전 별도 선택) |
| Google Cloud Agent Platform | ✅ Opus 5 지원 (1M 버전 별도 선택) |

### 📐 1M 컨텍스트 창 — 기본 지원

Opus 5는 **100만 토큰(1M) 컨텍스트 창**을 기본으로 지원합니다.

> 🍱 **비유로 설명하면**: 예전엔 책 1권 분량의 코드를 한 번에 보여줄 수 있었다면, 이제는 책 10권을 한꺼번에 펼쳐놓고 작업할 수 있어요.

- **Anthropic API, Max/Team/Enterprise 요금제**: 1M 컨텍스트 창 자동 적용
- **Amazon Bedrock, Google Cloud**: 1M 모델 변형(variant)을 직접 선택해야 해요

### ⚡ 패스트 모드(Fast Mode) 가격 대폭 인하

가장 반가운 소식이에요! 패스트 모드(빠른 Opus 응답)의 **가격이 70% 가까이 내려갔습니다**.

| 구분 | 이전 (Opus 4.8) | 이후 (Opus 5) |
|---|---|---|
| 입력 (Input) | $30 / MTok | **$10 / MTok** |
| 출력 (Output) | $150 / MTok | **$50 / MTok** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |

> 💡 **참고**: Opus 4.8에서도 $10/$50 패스트 모드를 계속 쓸 수 있어요 (Opus 4.7은 2026-07-24부로 패스트 모드 지원 종료).

---

## 어떻게 쓰나요?

### Opus 5로 전환하기

터미널에서 바로 전환할 수 있어요:

```bash
# Opus 5로 전환
/model claude-opus-5

# 또는 모델 목록에서 선택
/model
```

### 패스트 모드 켜기

패스트 모드(패스트 모드)를 켜면 Opus 5에서 2.5배 빠른 응답을 받을 수 있어요:

```bash
# 패스트 모드 토글 (켜기/끄기)
/fast
```

패스트 모드가 켜지면 프롬프트 옆에 `↯` 아이콘이 나타나요.

> ⚠️ **비용 주의**: 패스트 모드는 **사용 크레딧(usage credits)**에서 차감돼요. Pro/Max 요금제에서는 사용 크레딧을 먼저 활성화해야 합니다. `claude.ai/settings/usage`에서 확인하세요.

---

## Opus 5 vs Opus 4.8 비교

| 항목 | Opus 4.8 | **Opus 5** |
|---|---|---|
| 코딩 성능 | 뛰어남 | 더 뛰어남 |
| 1M 컨텍스트 | 지원 | 지원 |
| 패스트 모드 | $10/$50 MTok | $10/$50 MTok (동일) |
| 표준 API 가격 | 별도 확인 | 별도 확인 |
| 최소 버전 | v2.1.154+ | **v2.1.219+** |

> 📌 **Opus 4.8은 계속 사용 가능**: Opus 5로 전환되어도 Opus 4.8을 `/model claude-opus-4-8`로 명시해서 쓸 수 있어요.

---

## 언제 Opus 5를 써야 할까요?

### ✅ Opus 5가 빛나는 순간
- 🏗️ **대형 리팩토링** — 수십 개 파일에 걸친 구조 변경
- 🔍 **복잡한 버그 추적** — 원인이 3~4단계 깊이 숨어 있을 때
- 📐 **아키텍처 설계** — 새 시스템의 전체 구조를 짤 때
- 🧪 **대규모 테스트 작성** — 엣지 케이스(edge case)까지 꼼꼼히 챙길 때
- 📚 **1M 컨텍스트 활용** — 대형 코드베이스 전체를 맥락으로 줄 때

### ✅ Sonnet 5로도 충분한 경우
- 간단한 버그 수정
- 단일 파일 수정
- 빠른 Q&A
- 일반적인 코드 리뷰

> 🍱 **비유로 설명하면**: Sonnet 5는 일상적인 집안일을 도와주는 도우미, Opus 5는 복잡한 인테리어 공사를 설계·감리하는 전문 업체예요. 나사 하나 조이는 데 전문 업체를 부르면 오히려 낭비겠죠?

---

## ⚠️ 업데이트 방법

Opus 5는 **Claude Code v2.1.219 이상**에서만 사용할 수 있어요.

```bash
# 현재 버전 확인
claude --version

# 업데이트 (macOS/Linux)
npm install -g @anthropic-ai/claude-code@latest
# 또는
curl -fsSL https://claude.ai/install.sh | bash
```

---

## 공식 문서 링크

- 📄 [모델 설정](/docs/en/model-config) — 모델 전환·컨텍스트 창 설정
- ⚡ [패스트 모드](/docs/en/fast-mode) — 빠른 Opus 응답 상세 안내
- 💰 [비용 관리](/docs/en/costs) — 사용 크레딧·과금 방식

---

## 다음 단계

- **[패스트 모드 완벽 활용법](/docs/advanced/voice-fast)** — 속도와 비용 균형 잡기
- **[1M 컨텍스트 가이드](/docs/advanced/one-million-context)** — 대형 코드베이스를 통째로
- **[주간 업데이트 W30+W32](/docs/next/whats-new-w30-w32)** — Opus 5 외 이번 주에 추가된 기능들
