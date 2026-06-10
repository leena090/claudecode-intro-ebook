---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 지원, 다이나믹 워크플로우로 대규모 서브에이전트 조율, security-guidance 플러그인, Fast Mode Opus 4.8 가격 인하"
tags: ["업데이트", "2026", "week22", "opus4.8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-10"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Claude Opus 4.8 — 새 모델 지원 시작 🆕

Claude Code에서 이제 **Claude Opus 4.8**을 사용할 수 있어요. Opus 4.7 대비 코딩, 에이전틱(agentic) 작업, 전문 업무에서 더 강력한 성능을 보여줘요.

> 🍱 **비유**: 이전 모델(Opus 4.7)이 능숙한 베테랑 개발자였다면, Opus 4.8은 더 빠르고 꼼꼼하게 처리하는 10년 경력 시니어 개발자예요 — 같은 일을 시켜도 결과물의 완성도가 달라요.

**모델 전환 방법:**
```bash
# Opus 4.8로 전환
/model claude-opus-4-8

# 또는 CLI 실행 시
claude --model claude-opus-4-8
```

| 모델 | 특징 | 적합한 용도 |
|------|------|------------|
| **Opus 4.8** | 최고 성능, 복잡한 작업 | 대규모 리팩토링, 아키텍처 설계 |
| Sonnet 4.6 | 균형잡힌 속도·품질 | 일반적인 코딩 작업 |
| Haiku 4.5 | 빠른 응답, 저비용 | 간단한 질문, 코드 설명 |

<div class="note-circle">
○ Opus 4.8은 긴 작업에서 일관성(consistency)이 특히 개선됐어요<br />
○ 장시간 자동 실행 작업(에이전틱 작업)에 특히 강해요
</div>

---

### 2️⃣ 다이나믹 워크플로우(Dynamic Workflows) — 서브에이전트 대규모 조율 🤖

**다이나믹 워크플로우(Dynamic Workflows)** 는 Claude가 직접 스크립트를 작성해서 수십, 수백 개의 서브에이전트를 동시에 조율하는 새 기능이에요.

> 🍱 **비유**: 혼자서 집을 짓는 대신, 건축 회사(Claude)가 전체 설계도를 짜고 목수·전기공·배관공(서브에이전트)에게 각 구역을 맡겨서 동시에 공사를 진행하는 거예요. 나중에 결과만 취합해서 확인해요.

**언제 쓰면 좋을까요?**

| 상황 | 예시 |
|------|------|
| 코드베이스 전체 감사 | "모든 파일에서 보안 취약점 찾아줘" |
| 대규모 마이그레이션 | "Python 2 → Python 3 전환, 파일 200개" |
| 교차 검증 연구 | "같은 문제를 3가지 방법으로 각각 검토해줘" |

```bash
# 다이나믹 워크플로우 시작
/workflow "모든 API 엔드포인트의 인증 로직 감사"

# 워크플로우 스크립트 저장 후 재실행
/workflow run audit-script.json
```

Claude가 먼저 **작업 계획 스크립트**를 작성하고 여러분이 확인할 수 있어요. 승인하면 서브에이전트들이 병렬로 실행되고, 결과를 취합해서 최종 보고서를 만들어요. `[공]`

📄 자세한 사용법 → [다이나믹 워크플로우 가이드](/docs/advanced/dynamic-workflows)

---

### 3️⃣ security-guidance 플러그인 — Claude가 코드 짜면서 자체 보안 점검 🔒

새 플러그인 **`security-guidance`** 를 설치하면, Claude가 코드를 작성하는 바로 그 순간에 **보안 취약점을 스스로 검토하고 수정**해요.

> 🍱 **비유**: 요리사(Claude)가 요리하면서 동시에 식품 안전 기준도 체크하는 거예요 — 다 만든 다음에 검사하는 게 아니라, 재료 준비 단계부터 바로바로 확인해요.

**설치 방법:**
```bash
# 플러그인 설치
claude plugins install security-guidance

# 확인
claude plugins list
```

설치 후에는 Claude가 코드를 작성할 때마다 자동으로:
- SQL 인젝션, XSS 같은 OWASP Top 10 취약점 확인
- 문제 발견 시 같은 세션에서 바로 수정 제안
- 수정 여부는 항상 여러분이 결정

<div class="note-circle">
○ 설치 후 별도 설정 없이 바로 동작해요<br />
○ 보안 리뷰를 대체하지는 않아요 — 1차 필터로 생각하세요
</div>

📄 자세한 사용법 → [security-guidance 플러그인 가이드](/docs/advanced/security-guidance-plugin)

---

### 4️⃣ Fast Mode — Opus 4.8에서 더 낮은 가격으로 💸

**Fast Mode(패스트 모드)** 가 이번에 Opus 4.8 기준으로 전환됐고, **가격도 내려갔어요**.

| 항목 | 이전 (Opus 4.7) | 이번 주 (Opus 4.8) |
|------|-----------------|-------------------|
| 대상 모델 | Opus **4.7** | Opus **4.8** (최신) |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| 요금 (입력) | $30/백만 토큰 | **낮아짐** (공식 발표 기준) |
| 요금 (출력) | $150/백만 토큰 | **낮아짐** (공식 발표 기준) |

> 🍱 **비유**: 더 좋은 최신 차(Opus 4.8)에 터보 엔진을 달아서, 이전보다 더 빠른데 기름값(토큰 비용)은 오히려 저렴해진 거예요.

```bash
# Fast Mode 켜기
/fast

# 또는 단축키
Ctrl+Shift+F  (데스크톱 앱)
```

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **워크플로우 저장·재사용** | 한 번 만든 워크플로우 스크립트를 파일로 저장해서 나중에 다시 쓸 수 있어요 |
| **security-guidance 레포트** | 세션 종료 시 발견된 취약점 목록을 요약 파일로 저장 |
| **Opus 4.8 + Auto Mode** | 새 모델과 자동 실행 모드를 함께 쓰면 긴 작업이 더 안정적으로 완료돼요 |

---

## 이번 주 요약

```
✅ Claude Opus 4.8: 더 강력한 새 모델 지원
✅ Dynamic Workflows: 서브에이전트 대규모 자동 조율
✅ security-guidance 플러그인: 코딩하면서 실시간 보안 점검
✅ Fast Mode: Opus 4.8 기반, 가격 인하
```

버전 확인:
```bash
claude --version
```
