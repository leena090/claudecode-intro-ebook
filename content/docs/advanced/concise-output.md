---
title: "[공] Concise 출력 스타일 — 결론부터 말하는 클로드"
description: "군더더기 서문 없이 바로 결론을 받는 Concise 출력 스타일 설정법, 그리고 Opus 5와 Auto 모드 기본값 전환까지 — W32·W34 핵심 설정 변경 가이드"
tags: ["자동생성", "고급", "concise", "출력스타일", "output-style", "opus5", "auto-mode", "설정"]
category: "advanced"
order: 29
lastUpdated: "2026-09-01"
---

<div class="note-star">

★ **출처** — 공식 문서 [Output styles](https://code.claude.com/docs/en/output-styles) `[공식]`  
★ **도입 버전** — Concise 스타일: v2.1.237 (2026-08-21, W34)  
★ **연관 변경** — Opus 5 기본 전환(W30), Auto 모드 기본값(W32)

</div>

---

## Concise 출력 스타일이란?

> 📰 **비유**: 신문 기사에서 "오늘 기온이 35도로 올해 최고치를 기록했습니다"가 첫 줄에 오는 것처럼, Concise 스타일은 **답이 맨 앞에** 옵니다. 배경 설명, "먼저 살펴보겠습니다", "정리하자면" 같은 서문이 없어요.

**Concise**는 Claude Code의 내장 출력 스타일 중 하나예요.

### Default vs Concise 비교

| 항목 | Default 스타일 | Concise 스타일 |
|---|---|---|
| 응답 구조 | 서문 → 내용 → 요약 | **결론 → 필요한 경우만 설명** |
| 작업 품질 | 전체 | 전체 (차이 없음) |
| 설명 요청 시 | 상세 설명 | **전체 설명 제공** |
| 오류·보안 경고 | 전체 표시 | 전체 표시 (항상) |
| 파괴적 작업 확인 | 전체 표시 | 전체 표시 (항상) |

> ✅ **Concise는 결론을 압축하는 것이지, 작업 품질을 낮추는 게 아니에요.** 클로드는 여전히 똑같이 철저하게 작업합니다.

---

## 설정 방법

### 방법 1: /config 메뉴에서 설정

```text
> /config
```

→ **Output style** 항목 선택 → **Concise** 선택

### 방법 2: settings.json에서 설정

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

### 적용 시점

설정 후 **`/clear` 명령 또는 새 세션** 시작부터 적용돼요.

---

## 언제 Concise를 쓰면 좋나요?

| 좋은 상황 | 예시 |
|---|---|
| 빠른 코드 수정 | 버그 고치기, 오타 수정 |
| 반복 작업 | 여러 파일을 순서대로 처리 |
| 경험 있는 개발자 | 설명 없이 결과만 필요할 때 |
| 긴 세션 진행 중 | 중간 중간 작은 작업들 |

| Default가 더 나은 상황 | 예시 |
|---|---|
| 새 기술 배우는 중 | 이해가 필요한 설명 |
| 복잡한 설계 결정 | 장단점 비교가 필요할 때 |
| 처음 보는 코드베이스 | 맥락 파악이 중요할 때 |

---

## W30·W32 주요 설정 변경 — 알고 계세요?

### Opus 5가 기본 Opus 모델로 전환됐어요 (W30)

```text
# 현재 기본 Opus 모델 확인
> /model

# Opus 5로 직접 전환
> /model claude-opus-5
```

**Fast Mode**도 이제 Opus 5 기준이에요:
- 속도: 2.5배 빠름
- 가격: **$10/$50 per MTok** (이전 Opus 4.8 기준 $30/$150에서 변경)

### Auto 모드가 기본 권한 모드가 됐어요 (2026-08-14, W32)

신규 세션이 이제 기본으로 **Auto 모드**에서 시작해요.

```json
// 명시적으로 기본값 설정하기
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

> ℹ️ **Auto 모드란?** 클로드가 안전한 작업은 자율적으로 진행하고, 위험한 작업은 확인을 구하는 모드예요. [자세히 보기 →](/docs/advanced/permission-modes)

---

## 출력 스타일 전체 목록

| 스타일 이름 | 특징 |
|---|---|
| Default | 균형 잡힌 응답, 설명 포함 |
| **Concise** (신규) | 결론 우선, 서문 생략 |
| 사용자 정의 | 프롬프트로 직접 스타일 지정 가능 |

---

*공식 출처: [Output styles](https://code.claude.com/docs/en/output-styles) — 공식 발표 기준*
