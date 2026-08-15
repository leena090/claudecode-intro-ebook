---
title: "[공/블] Claude Opus 5 — 새 최상위 모델 등장"
description: "Claude Code의 새 기본 Opus 모델. 장시간 에이전트 작업·코딩·전문 업무 전반에서 한 단계 도약. 100만 토큰 컨텍스트, Fast 모드도 Opus 5로 이동"
tags: ["자동생성", "Opus5", "모델", "100만토큰", "FastMode", "2026-07-24"]
category: "next"
order: 16
lastUpdated: "2026-08-15"
---

<div class="note-star">
★ <strong>[공]</strong> Claude Code v2.1.219 이상에서 Claude Opus 5가 기본 Opus 모델로 적용됩니다.<br />
★ <strong>[블]</strong> Anthropic 공식 블로그 <em>"Introducing Claude Opus 5"</em> — 2026-07-24 발표<br />
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/model-config">model-config</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w30">What's New W30</a>
</div>

## Claude Opus 5가 뭔가요?

**Claude Code의 새로운 최상위 Opus 모델**입니다. 2026년 7월 24일 공식 발표되었고, 같은 주(W30)에 Claude Code 기본 Opus 모델로 교체됐어요.

> 🏋️ **비유로 설명하면**: 체육관에서 쓰던 덤벨을 더 무거운 걸로 바꿔놓은 것과 같아요. 같은 운동 기구(Opus 모델)인데 한 세대 더 강해진 버전입니다. 이전 Opus 4.8 덤벨을 들어올리던 분들은 그 자리에서 더 무거운 Opus 5를 들게 된 거예요.

Anthropic은 Opus 5를 **"Opus 티어의 단계적 도약(step change improvement)"** 이라고 표현했어요. 장시간 에이전트 실행, 코딩, 전문 업무에서 이전 세대 대비 전반적으로 향상됐습니다.

---

## 어디서 쓸 수 있나요?

| 플랜 / 플랫폼 | Opus 5 기본 적용 여부 |
|---|---|
| **Max** 플랜 | ✅ 기본 Opus 모델 |
| **Team Premium** | ✅ 기본 Opus 모델 |
| **Enterprise pay-as-you-go** | ✅ 기본 Opus 모델 |
| **Anthropic API** | ✅ 기본 Opus 모델 |
| Amazon Bedrock | ✅ (1M 모델 변형 별도 선택) |
| Google Cloud Agent Platform | ✅ (1M 모델 변형 별도 선택) |
| Microsoft Foundry | 공식 안내 확인 필요 |

### 모델 이름으로 직접 선택하기

```text
/model claude-opus-5
```

또는 `/model` 명령으로 모델 선택 메뉴를 열어 고를 수도 있어요.

---

## 핵심 특징

### 1️⃣ 100만 토큰 컨텍스트 창

Anthropic API, Max/Team/Enterprise 플랜에서 **1,000,000(백만) 토큰** 컨텍스트 창을 지원해요.

> 📚 **비유로 설명하면**: 일반 소설 한 권이 약 10만 자(한국어 기준)라면, 100만 토큰은 소설 7~10권 분량을 한 번에 읽고 기억하는 것과 비슷합니다. 대형 코드베이스 전체를 한눈에 파악할 수 있어요.

Amazon Bedrock·Google Cloud에서는 **1M 모델 변형(model variant)** 을 따로 선택해야 이 컨텍스트가 활성화됩니다.

### 2️⃣ Fast 모드가 Opus 5로 이동

이전까지 Fast 모드(패스트 모드)는 **Opus 4.8** 기준이었는데, W30(2026년 7월 20~24일)부터 **Opus 5** 기준으로 변경됐어요.

| 항목 | 이전 (W22까지) | 이후 (W30~) |
|---|---|---|
| Fast 모드 대상 모델 | Opus 4.8 | **Opus 5** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |
| 입력 요금 (추정) | $30/100만 토큰 | **$10/100만 토큰** |
| 출력 요금 (추정) | $150/100만 토큰 | **$50/100만 토큰** |

> ⚠️ **참고**: 가격 정보는 공식 마케팅 페이지 FAQ 기준. 정확한 최신 요금은 [Anthropic 가격 페이지](https://claude.com/claude-code#pricing) 확인 권장.

```text
/fast   ← 이제 Opus 5의 고속 버전을 실행
```

---

## Opus 5가 특히 강한 분야

Anthropic 공식 발표 기준으로:

- **장시간 에이전트 실행(long-running agents)**: 여러 도구를 연속으로 사용하는 복잡한 자동화 작업
- **코딩**: 버그 수정, 기능 구현, 리팩터링 등 개발 전반
- **전문 업무(professional work)**: 분석, 작성, 문서화 등

> 🔧 **초등학교 5학년 비유**: 수학 문제를 풀 때 "1단계 → 2단계 → 3단계" 이렇게 여러 단계를 거치는 서술형 문제가 있죠? Opus 5는 그 단계마다 틀리지 않고 더 정확하게 풀어내는 학생이에요. 특히 오래 걸리는 과제에서 집중력이 흐트러지지 않습니다.

---

## Fast 모드 관련 주의 사항

W30 업데이트에서:
- `/fast` 명령은 이제 **Opus 5**와 **Opus 4.8** 모두에 적용됩니다.
- 이전 버전 **Opus 4.7에 대한 Fast 모드 지원은 종료** 됐어요.

---

## 이전 모델과 비교

| 모델 | 출시 시기 | 특징 |
|---|---|---|
| Opus 4.7 | 2026-04 이전 | Fast 모드 지원 종료 |
| **Opus 4.8** | 2026-05 | 여전히 사용 가능, Fast 모드 유지 |
| **Opus 5** ← 현재 기본 | 2026-07-24 | 신규 기본 모델, 1M 컨텍스트 |

---

## 관련 문서

- [공식 What's New W30](https://code.claude.com/docs/en/whats-new/2026-w30) — Opus 5 출시 상세
- [모델 설정 가이드](https://code.claude.com/docs/en/model-config) — 모델 변경 방법
- [Fast 모드 안내](https://code.claude.com/docs/en/fast-mode) — 빠른 응답 설정
