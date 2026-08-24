---
title: "[블] Claude Opus 5 — 롱런 에이전트 시대의 새 주인공"
description: "2026년 7월 24일 출시된 Claude Opus 5. Opus 계열 최강 모델로 장시간 실행 에이전트·코딩 성능이 한 단계 도약했어요."
tags: ["자동생성", "Opus 5", "클로드 오퍼스5", "새 모델", "에이전트", "Claude Code", "Fast Mode"]
category: "next"
order: 17
lastUpdated: "2026-08-24"
---

<div class="note-star">
★ <strong>[블] 공식 블로그 발표</strong> — 2026-07-24 Anthropic 공식 발표.<br />
★ <strong>W30 (2026-07-20~24)</strong> Claude Code v2.1.219부터 Opus 5가 기본 Opus 모델로 적용돼요.<br />
★ <strong>Fast Mode</strong>가 Opus 5 기반으로 바뀌었어요 (비용 <strong>$10/$50/MTok</strong>).
</div>

## Opus 5가 뭐가 달라졌나요?

Anthropic이 2026년 7월 24일 **Claude Opus 5**를 공식 출시했어요.  
공식 소개 문구는 이래요:

> *"Opus 5 is a step change improvement for the Opus tier, powering long-running agents while delivering improvements in coding and professional work."*
> (Opus 5는 Opus 계열의 도약입니다. 장시간 실행 에이전트를 구동하면서 코딩과 전문 업무에서 향상된 성능을 제공해요.)

> 🏗️ **비유로 설명하면**: Opus 4.8이 "3시간 짜리 공사"를 잘 하는 일꾼이었다면, Opus 5는 **"3일 동안 쉬지 않고 공사 전체를 책임지는 현장 소장"** 이에요. 작업이 끊기지 않고 이어가는 능력이 핵심이에요.

---

## 주요 변경 사항 요약

| 항목 | 이전 (Opus 4.8) | 이후 (Opus 5) |
|---|---|---|
| **기본 Opus 모델** | claude-opus-4-8 | **claude-opus-5** |
| **컨텍스트 윈도우** | 200K | **1M 토큰** (API·Max·Team·Enterprise) |
| **Fast Mode 기준** | Opus 4.8 | **Opus 5** |
| **Fast Mode 가격** | $30/$150/MTok | **$10/$50/MTok** |
| **적용 플랜** | Max, Team Premium, Enterprise | Max, Team Premium, Enterprise, API |
| **클라우드 플랫폼** | Amazon Bedrock, Google Vertex | AWS·Amazon Bedrock·Google Cloud's Agent Platform |
| **최소 버전** | — | **v2.1.219 이상** |

---

## Claude Code에서 어떻게 써요?

### 모델 바꾸기
```text
> /model claude-opus-5
```

또는 `/model` 명령 후 목록에서 선택해도 돼요.

### 1M 토큰 컨텍스트 활용
Opus 5는 **100만 토큰** 컨텍스트 창을 지원해요.  
A4 용지 약 **3,000페이지** 분량을 한 번에 처리할 수 있어요.  
대규모 코드베이스 전체를 올려놓고 작업하는 시나리오에서 특히 강해요.

---

## Fast Mode 가격이 싸졌어요! 🎉

Fast Mode(고속 실행 모드)가 Opus 5 기준으로 바뀌면서 가격도 크게 내려갔어요.

| 구분 | 이전 (Opus 4.8 Fast) | 이후 (Opus 5 Fast) |
|---|---|---|
| 입력 토큰 (1M당) | $30 | **$10** |
| 출력 토큰 (1M당) | $150 | **$50** |

💡 같은 작업을 **약 3분의 1 비용**으로 고속 실행할 수 있어요.

Fast Mode 활성화:
```text
> /fast
```

---

## 이 모델, 누가 어떻게 쓰면 좋을까요?

### ✅ Opus 5가 빛나는 상황
- 🤖 **장시간 자율 에이전트** — 몇 시간짜리 복잡한 작업 자동화
- 💻 **대규모 코드베이스 리팩토링** — 수십 파일을 넘나드는 작업
- 📊 **전문 업무 보고서·분석** — 긴 문서와 데이터를 한 번에 처리
- 🔄 **Dynamic Workflows** — 수십~수백 개 서브에이전트 병렬 실행 총괄

### 💡 Pro/Max 사용자라면?
- Max 5x ($100/월) → claude-opus-5 기본 포함
- Max 20x ($200/월) → 더 많은 사용량 + Fast Mode도 활용 가능
- Pro ($17/$20/월) → Sonnet 5가 기본 모델, Opus 5는 제한적으로 접근

---

## 플랫폼별 적용 현황

| 플랫폼 | Opus 5 지원 |
|---|---|
| **Anthropic API** | ✅ 기본값, 1M 컨텍스트 |
| **Claude Code CLI** | ✅ v2.1.219+ |
| **Amazon Bedrock** | ✅ 1M 모델 variant 선택 |
| **Google Cloud Agent Platform** | ✅ 1M 모델 variant 선택 |
| **Claude Platform on AWS** | ✅ |

---

## 출처

- 🔵 **[블]** Anthropic 공식 블로그 — *"Introducing Claude Opus 5"* (2026-07-24)
- 🔵 **[공]** Claude Code 공식 문서 — What's New W30 (2026-07-20~24)
- 🔵 **[공]** [Model Configuration](https://code.claude.com/docs/en/model-config)
- 🔵 **[공]** [Fast Mode](https://code.claude.com/docs/en/fast-mode)
