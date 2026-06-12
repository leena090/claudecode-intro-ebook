---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 지원, 다이나믹 워크플로우로 대규모 작업 자동화, 보안 가이던스 플러그인, Fast Mode 가격 인하"
tags: ["업데이트", "2026", "week22", "opus-4.8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-12"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Claude Opus 4.8 — 새 모델 지원 시작

Claude Code에서 **Claude Opus 4.8** 을 사용할 수 있어요.

```bash
# Opus 4.8로 모델 변경
/model claude-opus-4-8
```

> 🍱 **비유**: 스마트폰이 Android 14에서 Android 15로 업그레이드된 것처럼 — 같은 Opus 시리즈지만 더 개선된 버전이에요.

**현재 Claude Code 지원 모델 (Week 22 기준):**

| 모델 | 모델 ID | 특징 |
|------|---------|------|
| Opus 4.8 | `claude-opus-4-8` | 최고 성능, 새 버전 |
| Sonnet 4.6 | `claude-sonnet-4-6` | 균형형, 기본 추천 |
| Haiku 4.5 | `claude-haiku-4-5-20251001` | 경량, 빠름 |

Opus 4.8은 코딩, 분석, 복잡한 추론 작업에서 4.7보다 개선됐어요. `[공]`

---

### 2️⃣ Fast Mode — Opus 4.8에서 더 낮은 가격으로

**Fast Mode(패스트 모드)** 가 이제 Opus 4.8을 기반으로 하면서, 이전 Opus 4.7 Fast Mode보다 더 낮은 비용으로 제공돼요.

```bash
# Fast Mode 켜기
/fast
```

| 항목 | 이전 (Opus 4.7) | Week 22 (Opus 4.8) |
|------|-----------------|---------------------|
| 기준 모델 | Opus 4.7 | **Opus 4.8** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| 가격 (입/출력) | $30/$150 /백만 토큰 | 더 낮아짐 (공식 발표 기준) |

<div class="note-circle">
○ Fast Mode는 Pro/Max 플랜 리서치 프리뷰로 제공돼요<br />
○ 가격이 낮아졌다고 해서 무작정 켜두면 누적 비용이 늘 수 있어요 — 빠름이 필요한 작업에만 써요
</div>

---

### 3️⃣ 다이나믹 워크플로우(Dynamic Workflows) — 대규모 자동화

**다이나믹 워크플로우(동적 작업 흐름)** 기능으로, Claude가 스스로 여러 서브에이전트를 조율하는 스크립트를 작성하고 실행해요.

```bash
# 워크플로우 시작
/workflow 전체 코드베이스 보안 취약점 감사해줘
```

> 🍱 **비유**: 큰 건물을 점검할 때 혼자 다 하지 않고 — 전기 전문가, 배관 전문가, 구조 전문가를 각각 부르는 것처럼, Claude도 큰 작업을 여러 전문 에이전트에게 나눠서 맡겨요.

**어떤 상황에 쓰나요?**

| 상황 | 예시 |
|------|------|
| 코드베이스 전체 감사 | "전체 파일에서 보안 이슈 찾아줘" |
| 대규모 마이그레이션 | "Python 2 코드 전부 Python 3로 바꿔줘" |
| 교차 검증 연구 | "여러 소스 찾아보고 종합 보고서 써줘" |

Claude가 먼저 작업 계획 스크립트를 작성하고, 여러 서브에이전트가 병렬로 각자 담당 부분을 처리해요. 완료 후 스크립트를 재사용할 수도 있어요. `[공]`

📄 자세한 사용법 → [다이나믹 워크플로우 가이드](/docs/advanced/dynamic-workflows)

---

### 4️⃣ Security Guidance 플러그인 — AI가 쓴 코드를 AI가 감사

**security-guidance 플러그인**을 설치하면 Claude가 코드를 작성하면서 **동시에 보안 취약점도 자동으로 검토**해요.

```bash
# 플러그인 설치
/plugin install security-guidance
```

> 🍱 **비유**: 건물 짓는 사람이 공사하면서 동시에 안전 점검도 하는 것처럼 — Claude가 코드를 쓰면서 바로 "이 부분 보안 위험 있어요"라고 알려줘요.

**어떤 취약점을 잡아주나요?**

- SQL 인젝션(SQL injection)
- XSS(크로스 사이트 스크립팅, Cross-Site Scripting)
- 인증/인가(authentication/authorization) 문제
- 민감 정보 노출 (API 키, 비밀번호 등)

코드 작성 → 취약점 발견 → 같은 세션 안에서 바로 수정까지 한 번에 처리해요. `[공]`

📄 자세한 사용법 → [보안 가이던스 플러그인 가이드](/docs/advanced/security-guidance-plugin)

---

## 이번 주 요약

```
✅ Opus 4.8: 새 모델 지원 시작
✅ Fast Mode: Opus 4.8 기준, 더 낮은 가격
✅ 다이나믹 워크플로우: 대규모 작업 멀티 에이전트 자동화
✅ security-guidance 플러그인: 코드 작성 중 보안 자동 검토
```

버전 확인:
```bash
claude --version
```
