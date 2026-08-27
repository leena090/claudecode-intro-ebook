---
title: "[공][블] Claude Opus 5 출시 — 에이전트·코딩 최강 모델 등장"
description: "2026년 7월 24일 Claude Opus 5가 출시됐어요. 장시간 에이전트 실행과 코딩에서 Opus 4.8을 크게 앞서고, Fast 모드 가격이 $10/$50/MTok으로 조정됐습니다"
tags: ["자동생성", "Opus5", "신규모델", "에이전트", "FastMode", "1M컨텍스트"]
category: "next"
order: 17
lastUpdated: "2026-08-27"
---

<div class="note-star">
★ <strong>[블]</strong> 공식 발표: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)<br />
★ <strong>[공]</strong> W30 공식 릴리즈 노트: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a>
</div>

## Claude Opus 5, 새 시대 열다

2026년 7월 24일, **Claude Opus 5** (`claude-opus-5`)가 공식 출시됐어요. Opus 계열의 새 기본 모델로, 장시간 에이전트 실행과 코딩·전문 업무 전반에서 Opus 4.8을 크게 앞선다고 공식 발표 기준으로 알려졌습니다.

> 🏋️ **비유로 설명하면**: 기존 Opus 4.8이 "체력 좋은 베테랑 직원"이었다면, Opus 5는 **"하루 종일 쉬지 않고 복잡한 프로젝트를 혼자 이끄는 팀장급 AI"** 예요.

---

## 주요 특징 한 눈에 보기

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **컨텍스트 창** | **100만 토큰 (1M)** — Anthropic API, Max/Team/Enterprise 플랜 |
| **기본 모델 전환** | Max, Team Premium, Enterprise PAYG, Anthropic API |
| **클라우드 배포** | Amazon Bedrock, Google Cloud Agent Platform (1M 변형 선택 필요) |
| **Fast 모드** | Opus 5 기준 **$10/$50 per MTok** (Opus 4.7 지원 종료) |
| **출시일** | 2026년 7월 24일 (v2.1.219 이상 필요) |

<div class="note-star">
★ <strong>Fast 모드 가격 변경</strong>: 기존 Opus 4.8 기준 $30/$150에서 Opus 5 기준 <strong>$10/$50 per MTok</strong>으로 조정됐어요. 더 강력한 모델인데 가격이 내려간 셈입니다!
</div>

---

## 무엇이 좋아졌나요?

### 🤖 장시간 에이전트 실행

Opus 5의 가장 큰 강점은 **장시간 자율 에이전트 작업**이에요. 복잡한 코드베이스 리팩토링, 멀티 파일 변경, 긴 디버깅 세션 등 한 번의 지시로 끝까지 완수하는 능력이 크게 향상됐습니다.

### 📚 100만 토큰 컨텍스트 창

Anthropic API와 구독 플랜에서 **1M 토큰 컨텍스트**를 기본 제공해요. 대형 코드베이스 전체를 한 번에 이해하고 작업할 수 있습니다.

> 📖 **1M 토큰이 얼마나 큰가요?** 소설 10권 분량의 텍스트를 한 번에 읽고 기억하는 수준이에요. 대규모 레포지토리의 모든 파일을 통째로 넣어도 됩니다.

### 💻 코딩·전문 업무 성능

코딩, 에이전트 오케스트레이션, 분석 업무 전반에서 이전 Opus 세대 대비 큰 향상이 공식 발표 기준으로 알려졌어요.

---

## Claude Code에서 사용하기

### 모델 변경

```bash
# Opus 5로 전환
/model claude-opus-5

# 또는 모델 목록에서 선택
/model
```

### Fast 모드 활성화

```bash
# Fast 모드 켜기 (Opus 5 기준 2.5배 빠름)
/fast
```

<div class="note-star">
★ Fast 모드는 <strong>소비 기반 플랜(Consumption-based)</strong>과 <strong>구독 플랜의 사용 크레딧</strong>에서 사용할 수 있어요. Max 5x/$200/월 플랜 이상에서 주로 활용됩니다.
</div>

---

## 플랫폼별 1M 컨텍스트 사용법

| 플랫폼 | 방법 |
|---|---|
| Anthropic API | 기본 제공 (별도 설정 불필요) |
| Max/Team/Enterprise 플랜 | 기본 제공 |
| Amazon Bedrock | `1M 변형(variant)` 모델 선택 필요 |
| Google Cloud Agent Platform | `1M 변형(variant)` 모델 선택 필요 |

---

## 이전 모델과 비교

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| **Opus 5** | 최강 에이전트·코딩, 1M 컨텍스트 | 복잡한 프로젝트, 장시간 자율 작업 |
| **Sonnet 5** | 빠른 속도 + 고성능 (기본 모델) | 일상 코딩, 중간 규모 작업 |
| **Opus 4.8** | 이전 Opus 기준 | 레거시 워크플로우 |
| **Haiku 4.5** | 초경량 | 간단한 반복 작업 |

---

## 참고: 같이 업데이트된 것들 (W30, Jul 20-24)

Opus 5 출시와 함께 아래 기능도 함께 공개됐어요:

- 🍎 **iOS 시뮬레이터 패널** (macOS Desktop 공개 베타): Claude가 앱을 빌드하고 시뮬레이터에서 직접 테스트하는 화면을 옆에서 실시간으로 볼 수 있어요
- 🔒 **Claude Security 플러그인**: 코드베이스의 보안 취약점을 멀티 에이전트가 자동 스캔하고 보고서를 작성해줘요 (`/plugin install claude-security@claude-plugins-official`)
- `/code-review`가 배경 서브에이전트로 실행돼 대화를 방해하지 않아요
- **세션당 최대 20개** 서브에이전트 동시 실행 (기본값, `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조정)

---

## 정리

| 항목 | 변경 전 (Opus 4.8) | 변경 후 (Opus 5) |
|---|---|---|
| 기본 모델 | Opus 4.8 | **Opus 5** |
| 컨텍스트 | 200K | **1M** |
| Fast 모드 가격 | $30/$150/MTok | **$10/$50/MTok** |
| 에이전트 성능 | 높음 | **더욱 향상** (공식 발표 기준) |

> 💡 **입문자 팁**: 특별한 이유가 없다면 기본 모델인 **Sonnet 5**를 쓰세요. Opus 5는 "오래 걸리는 복잡한 프로젝트"가 있을 때 꺼내는 카드예요.
