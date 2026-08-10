---
title: "[블][공] Claude Opus 5 출시 — 새로운 최상위 Opus 모델"
description: "2026년 7월 24일 Claude Opus 5가 출시됐습니다. 1M 토큰 컨텍스트, Fast Mode $10/$50, Max·Team·Enterprise 기본 Opus 모델로 전환"
tags: ["자동생성", "Opus5", "신규모델", "FastMode", "1M컨텍스트"]
category: "next"
order: 17
lastUpdated: "2026-08-10"
---

<div class="note-star">
★ <strong>[블]</strong> 출처: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)<br />
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">whats-new/2026-w30</a> · <a href="https://code.claude.com/docs/en/model-config">model-config</a>
</div>

## 한 눈에 보는 Opus 5 변화

| 항목 | Opus 4.8 (이전) | **Opus 5 (신규)** |
|---|---|---|
| **출시일** | 2026-05-28 | **2026-07-24** |
| **모델 ID** | `claude-opus-4-8` | **`claude-opus-5`** |
| **기본 Opus 모델** | Max·Team·Enterprise | **Max·Team·Enterprise·API** |
| **컨텍스트 길이** | 200K | **1M 토큰** |
| **Fast Mode 가격** | $30/$150 /MTok | **$10/$50 /MTok** |

---

## Claude Opus 5가 뭔가요?

**Claude Opus 5**는 Anthropic이 2026년 7월 24일 공개한 새 최상위 Opus 계열 모델이에요.

> 🍱 **비유로 설명하면**: 지금까지 가장 좋은 요리사가 "Opus 4.8"이었다면, 이제 "Opus 5"라는 새 총주방장이 왔어요. 요리 실력도 더 좋아졌고(성능 향상), 주방 작업대도 두 배 더 넓어졌어요(1M 토큰). 그리고 빠른 버전(Fast Mode)은 이전보다 훨씬 저렴해졌어요.

### 어디서 기본 모델이 되나요?

Opus 5는 아래 환경에서 **기본 Opus 모델**이에요:

- **Claude Code** (Max, Team Premium, Enterprise 플랜)
- **Claude Console API** (Anthropic API 직접 사용)
- **Amazon Bedrock** (AWS용)
- **Google Cloud Agent Platform** (GCP용)

### 1M 토큰 컨텍스트 — 엄청나게 긴 작업 가능

Anthropic API·Max·Team·Enterprise 플랜에서는 **100만 토큰** 컨텍스트 윈도우를 제공해요.

> 🍱 **비유로 설명하면**: 1M 토큰은 소설 약 7권 분량을 한 번에 올려놓고 작업할 수 있는 공간이에요. 이전 200K는 소설 1.5권 정도였으니 엄청 넓어진 거예요.

**Amazon Bedrock·Google Cloud**에서는 별도로 1M 컨텍스트 모델 변형을 선택해야 해요 (공식 추정, 정확한 설정은 각 플랫폼 문서 참조).

---

## Claude Code에서 어떻게 사용하나요?

### 모델 전환

Claude Code v2.1.219 이상이 필요해요.

```bash
# Opus 5로 전환 (이름으로)
/model claude-opus-5

# 또는 모델 피커에서 선택
/model   # 목록에서 Opus 5 선택
```

### Fast Mode와 함께 쓰기

```bash
# Fast Mode 켜기 (Opus 5가 자동 선택됨)
/fast
```

> 💡 **Fast Mode가 더 저렴해졌어요!**
> Opus 4.8 시절 $30/$150 /MTok이었던 Fast Mode 요금이, Opus 5 전환과 함께 **$10/$50 /MTok**으로 대폭 낮아졌어요. 🎉

---

## Fast Mode 요금 변화 정리

| 구분 | 이전 (Opus 4.8) | 현재 (Opus 5) |
|---|---|---|
| **Fast Mode 입력** | $30/MTok | **$10/MTok** |
| **Fast Mode 출력** | $150/MTok | **$50/MTok** |
| **기준 클리** | v2.1.154 ~ v2.1.218 | v2.1.219 이상 |

⚠️ **참고**: Opus 4.7에 대한 Fast Mode 지원은 2026년 7월 24일(v2.1.219) 기준으로 완전 종료됐어요.

---

## Opus 5 이전 Fast Mode 지원 이력

| Claude Code 버전 | Fast Mode 기본 모델 |
|---|---|
| v2.1.142 ~ v2.1.153 | Opus 4.7 |
| v2.1.154 ~ v2.1.218 | Opus 4.8 |
| **v2.1.219 이상** | **Opus 5** |

---

## Amazon Bedrock · Google Cloud 사용 시

이 두 플랫폼에서 Opus 5를 쓸 경우:
- **Fast Mode 미지원** — Fast Mode는 Anthropic API/구독 플랜 전용이에요
- 1M 컨텍스트를 원하면 해당 플랫폼에서 **1M 컨텍스트 모델 변형**을 별도로 선택

---

## 자주 묻는 질문

**Q. Opus 4.8은 계속 쓸 수 있나요?**
A. 네. `/model claude-opus-4-8`로 직접 선택할 수 있어요. 단, Fast Mode 기본이 Opus 5로 바뀌었을 뿐, Opus 4.8 자체는 계속 지원됩니다.

**Q. Pro 플랜도 Opus 5를 쓸 수 있나요?**
A. Pro 플랜에서는 기본 모델이 Sonnet 5예요. Opus 5를 사용하려면 Max 이상의 플랜 또는 API 사용이 필요해요 (공식 발표 기준, 변경 가능).

**Q. 기존에 작성된 CLAUDE.md가 영향을 받나요?**
A. 아니요. CLAUDE.md는 모델과 무관하게 동작해요. 다만 `/model` 설정을 Opus 4.8로 고정해둔 경우 자동 전환이 안 되니 수동으로 바꿔주세요.

---

## 관련 링크 (공식 문서 기준)

- [모델 설정](https://code.claude.com/docs/en/model-config) — `/model` 명령어로 모델 선택
- [Fast Mode](https://code.claude.com/docs/en/fast-mode) — 빠른 응답 모드 설정
- [W30 주간 업데이트](https://code.claude.com/docs/en/whats-new/2026-w30) — Opus 5 출시 주차 공식 릴리즈 노트
