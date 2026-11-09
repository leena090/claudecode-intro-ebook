---
title: "[공] What's New 2026 W30~W37 — 2026년 7~9월 주요 업데이트 모음"
description: "Claude Code 공식 What's New 주간 업데이트 w30부터 w37까지를 한국어로 요약해요. 모델 업그레이드, Code Review, Projects, Mods 등 주요 변경사항"
tags: ["자동생성", "What's New", "업데이트", "w30", "w31", "w32", "w33", "w34", "w35", "w36", "w37"]
category: "next"
order: 19
lastUpdated: "2026-11-09"
---

<div class="note-star">
★ <strong>공식 문서 기반</strong> — code.claude.com/docs/en/whats-new/ W30~W37 요약. 세부 내용은 각 주차 공식 문서에서 확인하세요. <code>[공]</code><br />
★ W31은 llms.txt에서 확인되지 않아 스킵했어요 (추정 — 목록 누락 또는 릴리스 없음).
</div>

## 2026년 주간 업데이트 한눈에 보기

| 주차 | 기간(추정) | 핵심 변경사항 |
|---|---|---|
| **W30** | 7월 넷째 주 | 모델·문서 업데이트 |
| **W32** | 8월 둘째 주 | 플러그인 구조 개편 |
| **W33** | 8월 셋째 주 | Self-hosted environments 베타 |
| **W34** | 8월 넷째 주 | Code Review 베타 출시 |
| **W35** | 9월 첫째 주 | Claude Projects 프리뷰 |
| **W36** | 9월 둘째 주 | Mods 베타 출시 |
| **W37** | 9월 셋째 주 | Claude 5.5 모델 시리즈 출시 시작 |

> ⚠️ 위 내용은 공식 What's New 페이지 URL 목록을 기반으로 한 추정이에요. 세부 내용은 공식 문서에서 확인하세요.

---

## 주요 변경사항 상세

### 플러그인 문서 대규모 재구조화 (W32 추정)

이전에는 플러그인 관련 문서가 단일 페이지들로 흩어져 있었는데, **`/plugins/` 계층 구조**로 완전히 재편됐어요.

```
이전 구조:
  discover-plugins.md
  plugins.md
  plugins-reference.md
  plugin-marketplaces.md
  plugin-hints.md

현재 구조:
  plugins/overview.md
  plugins/install.md
  plugins/create.md
  plugins/publish.md
  plugins/measure.md
  plugins/mods/overview.md
  plugins/mods/create.md
  plugins/mods/gallery.md
  ... 총 30개 이상 세부 페이지
```

---

### Self-Hosted Environments (W33 추정)

기업 보안 요구사항에 맞춰 Claude Code를 **자체 인프라에서 실행**하는 옵션이 추가됐어요.

```
content:
  - 자체 호스팅 환경 빠른 시작 가이드
  - 배포 방법 (self-hosted-environments-deploy)
  - 설정 레퍼런스
  - 보안·인증 설정
  - 테스트 환경 구성
```

> 🏢 **대상**: 보안 정책상 외부 서버를 쓸 수 없는 금융·공공·의료 기업

---

### Code Review 기능 (W34 베타 → 10월 GA)

PR 올리기 전에 AI가 버그를 먼저 잡아주는 기능이에요. → [Code Review 완전 가이드](../advanced/code-review.md) 참조

---

### Claude Projects (W35 프리뷰 → 9월 17일 정식)

여러 세션을 하나의 프로젝트로 묶는 기능이에요. → [Claude Projects 가이드](../advanced/claude-projects.md) 참조

---

### Mods (W36 베타 → 10월 1일 정식)

TypeScript로 Claude Code UI·행동을 수정하는 플러그인이에요. → [Mods 가이드](../advanced/mods.md) 참조

---

### Claude 5.5 모델 시리즈 (W37~)

| 출시일 | 모델 | 특징 |
|---|---|---|
| 2026-09-22 | Opus 5.5 | 에이전트 코딩 최강, Opus 5 대비 40% 저렴 |
| 2026-09-28 | Sonnet 5.5 | 30% 빠름·30% 저렴 |
| 2026-10-07 | Haiku 5.5 | 가장 빠른 경량 모델 |

→ [Claude 5.5 모델 시리즈 완전 가이드](../reference/models-5-5-series.md) 참조

---

## 다음 회차로 미루는 항목

이번 실행(22차)에서 처리하지 못한 항목 — 다음 회차에서 처리 예정:

- `cross-session-messaging` — 에이전트 간 직접 메시지 기능 상세 가이드
- `claude-security` — Claude Security 제품 상세
- `auto-mode-classifier-billing` — Auto Mode 과금 방식 상세
- `desktop-ios-simulator` — 데스크탑 앱의 iOS 시뮬레이터 지원
- `hipaa-setup` — HIPAA 컴플라이언스 설정 가이드
- Claude Mythos·Fable 5.1 — 최상위 모델 별도 문서화
- W38~W44 (10~11월) What's New 업데이트
