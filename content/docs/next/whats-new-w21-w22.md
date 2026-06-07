---
title: "[공] 2026년 5~6월 최신 소식 — Opus 4.8·워크플로우·한국 서울 오피스"
description: "5월 마지막 2주 동안 Claude Code에 일어난 가장 큰 변화 정리: 새 최강 모델 Opus 4.8 출시, 수백 개 에이전트를 한꺼번에 지휘하는 다이나믹 워크플로우, Fast Mode 67% 요금 인하, 그리고 Anthropic 한국 대표이사 임명"
tags: ["업데이트", "2026", "opus-4-8", "워크플로우", "한국", "서울", "fast-mode", "자동생성"]
category: "next"
order: 8
lastUpdated: "2026-06-07"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — Week 21 (2026-05-18~22) + Week 22 (2026-05-25~29) 업데이트를 함께 정리했어요.
</div>

## 이 2주 동안 뭐가 생겼나요?

5월 마지막 2주는 Claude Code 역사에서 가장 바쁜 주 중 하나였어요. **새 모델 출시, 대규모 자동화 기능, 요금 인하**가 한꺼번에 쏟아졌어요.

---

## Week 21 핵심 정리 (5월 18~22일)

### 1️⃣ Auto Mode — 드디어 Pro 플랜에서도

Auto Mode(자동 모드)가 이제 **Pro 플랜과 Sonnet 4.6 모델**에서도 사용할 수 있게 됐어요.

Auto Mode란? Claude가 "이건 괜찮아" 싶은 작업은 알아서 진행하고, "이건 위험할 수 있어" 싶은 건 백그라운드 안전 검사기가 자동으로 막아주는 모드예요.

```bash
# 최신 버전 업데이트
claude update

# Shift+Tab으로 모드 전환
# normal → accept edits → auto mode
```

### 2️⃣ /usage 세부 내역

`/usage` 명령어에서 이제 **뭐가 내 플랜 한도를 쓰고 있는지** 카테고리별로 볼 수 있어요:
- 스킬(Skills)이 얼마나 쓰고 있는지
- 서브에이전트는?
- 어느 MCP 서버가 가장 많이 쓰는지

> 📱 **비유**: 핸드폰 데이터 사용량을 앱별로 보는 것처럼요.

### 3️⃣ /code-review 새 명령어

현재 변경한 코드의 버그를 AI가 검사해요:
```bash
/code-review high        # 꼼꼼한 검사
/code-review --comment   # GitHub PR에 인라인 댓글로 결과 게시
```

📄 자세한 내용 → [Week 21 업데이트 상세](/docs/reference/whats-new-2026-w21)

---

## Week 22 핵심 정리 (5월 25~29일)

### 1️⃣ 🧠 Claude Opus 4.8 — 새 최강 모델

Anthropic이 **Claude Opus 4.8**을 공식 출시했어요!

| 항목 | 내용 |
|---|---|
| 모델 이름 | `claude-opus-4-8` |
| 기본 적용 플랜 | Max (5x/20x), Team Premium, Enterprise, API |
| 특징 | 코딩·에이전트 작업 성능 향상, 롱런 작업 일관성 강화 |
| 사용 방법 | `/model claude-opus-4-8` 또는 `/effort xhigh` (어려운 작업) |

> 🚗 **비유**: 자동차 플래그십 모델이 업그레이드됐어요. 같은 가격대에서 더 강력한 엔진이 들어간 것처럼, 복잡한 코딩 작업에서 더 뛰어난 성능을 보여줘요.

### 2️⃣ 🎭 다이나믹 워크플로우 (리서치 프리뷰)

**수백 개의 서브에이전트를 백그라운드에서 동시에 지휘하는** 새 기능이 등장했어요.

```text
# 예시: 전체 코드베이스 보안 감사
ultracode: src/routes/ 아래 모든 API 엔드포인트에서 인증 체크 누락 감사해줘
```

Claude가 작업 계획서(워크플로우 스크립트)를 직접 짜고, 수백 개의 에이전트를 백그라운드에서 동시에 풀어요.

기본 내장 워크플로우:
```bash
/deep-research 내가 궁금한 기술 질문
```

📄 자세한 내용 → [다이나믹 워크플로우 가이드](/docs/advanced/dynamic-workflows)

### 3️⃣ 🔐 Security Guidance 플러그인

코드를 수정할 때마다 자동으로 보안 취약점을 검사해주는 플러그인이 공식 마켓플레이스에 등장했어요:

```bash
/plugin install security-guidance@claude-plugins-official
/reload-plugins
```

### 4️⃣ ⚡ Fast Mode — 요금 67% 인하!

Fast Mode가 Opus 4.8로 업그레이드되면서 요금이 대폭 내렸어요:

| 항목 | 이전 | 이번 |
|---|---|---|
| 기본 모델 | Opus 4.7 | **Opus 4.8** |
| 입력 요금 | $30/MTok | **$10/MTok** (67% ↓) |
| 출력 요금 | $150/MTok | **$50/MTok** (67% ↓) |

📄 자세한 내용 → [Week 22 업데이트 상세](/docs/reference/whats-new-2026-w22)

---

## 📍 Anthropic 한국 상륙 준비 중 [블]

2026년 5월 26일, Anthropic이 **최영 대표이사(KiYoung Choi)를 한국 법인 대표이사로 임명**하고 **서울 오피스 개설**을 준비 중이라고 발표했어요.

이게 왜 중요할까요? Anthropic이 한국을 아시아 주요 시장으로 인식하고 있다는 신호예요. 한국어 지원, 한국 기업 파트너십, 그리고 한국 사용자를 위한 서비스 개선이 기대돼요.

<div class="note-circle">
○ 아직 서울 오피스가 정식으로 문을 연 건 아니에요 — 개설 준비 발표 단계예요 <code>[블]</code>
</div>

---

## 이 2주 요약

| 발표 날짜 | 기능/소식 | 중요도 |
|---|---|---|
| 5월 18~22일 | Auto Mode → Pro 플랜 개방 | ⭐⭐⭐ |
| 5월 18~22일 | `/usage` 카테고리별 내역 + `/code-review` | ⭐⭐ |
| 5월 26일 | Anthropic 한국 대표이사 임명 + 서울 오피스 준비 | ⭐⭐ |
| 5월 28일 | **Claude Opus 4.8 출시** | ⭐⭐⭐⭐⭐ |
| 5월 28일 | 다이나믹 워크플로우 (리서치 프리뷰) | ⭐⭐⭐⭐ |
| 5월 28일 | Security Guidance 플러그인 | ⭐⭐⭐ |
| 5월 28일 | Fast Mode 67% 요금 인하 | ⭐⭐⭐⭐ |

---

## 지금 당장 해볼 것

```bash
# 1. 최신 버전 업데이트
claude update

# 2. Opus 4.8로 전환해보기
/model claude-opus-4-8

# 3. Fast Mode 켜기 (이전보다 훨씬 저렴해졌어요!)
/fast
```
