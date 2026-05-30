---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 출시, 동적 워크플로우(Dynamic Workflows) 리서치 프리뷰, 보안 가이드 플러그인, Fast Mode 가격 대폭 인하"
tags: ["업데이트", "2026", "week22", "opus4.8", "dynamic-workflows", "fast-mode", "security", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-05-30"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a><br />
릴리즈: v2.1.150 → v2.1.157 · **이번 주 핵심 4개**
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Claude Opus 4.8 출시 🆕

**Claude Opus 4.8**(클로드 오퍼스 4.8)이 공개됐어요. 코딩·에이전트 작업·전문적인 업무에서 성능이 크게 향상된 최신 Opus 모델이에요.

> 🍱 **비유**: 스마트폰 새 모델처럼 — 같은 Claude인데 두뇌가 더 업그레이드됐어요. 복잡한 코딩 과제나 오래 걸리는 작업을 더 잘 버텨요.

**어느 요금제에 기본 적용?**

| 요금제 | 기본 모델 |
|---|---|
| Max | ✅ Opus 4.8 기본 |
| Team Premium | ✅ Opus 4.8 기본 |
| Enterprise (종량제) | ✅ Opus 4.8 기본 |
| Anthropic API | ✅ Opus 4.8 기본 |
| Pro | Sonnet 4.6 기본 (Opus 4.8 선택 가능) |

```bash
# Opus 4.8로 직접 전환
/model claude-opus-4-8

# 어려운 작업엔 xhigh 노력 수준 추가
/effort xhigh
```

> ℹ️ v2.1.154 이상 필요. 기본 노력 수준은 `high`이고, 특히 어려운 작업에는 `/effort xhigh`를 추가로 써보세요. `[공]`

---

### 2️⃣ 동적 워크플로우(Dynamic Workflows) — 리서치 프리뷰

**워크플로우**는 Claude가 여러분의 작업을 위해 **오케스트레이션 스크립트**(작업 지휘 대본)를 직접 써서, 수십 개의 서브에이전트를 백그라운드에서 동시에 돌리는 기능이에요.

> 🍱 **비유**: 영화 감독이 배우들에게 대본을 나눠주고 동시에 여러 씬을 촬영하는 것처럼 — Claude가 큰 작업을 쪼개 여러 에이전트에게 동시에 맡기고, 결과를 하나로 합쳐줘요.

**언제 써야 하나요?**

| 상황 | 적합한 도구 |
|---|---|
| 단순 작업 1~2개 | 일반 대화 |
| 몇 가지 병렬 작업 | 서브에이전트 |
| 500개 파일 마이그레이션, 코드베이스 전체 감사, 교차 검증 리서치 | **워크플로우** ← |

**사용법:**

```bash
# 프롬프트에 "workflow" 단어를 넣으면 자동 감지
내부 fetch() 호출을 전부 새 HttpClient로 바꾸는 workflow 실행해줘

# 번들 워크플로우: 딥 리서치
/deep-research Node.js v20과 v22의 권한 모델 변경 사항은?

# 실행 중인 워크플로우 관리
/workflows
```

**워크플로우 vs 서브에이전트 비교:**

| | 서브에이전트 | 워크플로우 |
|---|---|---|
| 계획을 누가 세우나 | Claude가 턴마다 결정 | 스크립트가 결정 |
| 중간 결과 위치 | Claude 컨텍스트 창 | 스크립트 변수 |
| 중단 시 | 처음부터 재시작 | 완료된 부분 캐시 후 재개 |
| 규모 | 소수 | 최대 에이전트 1,000개 |

> ⚠️ **현재 리서치 프리뷰** — Pro 요금제는 `/config`에서 직접 켜야 해요. `[공]`

📄 자세한 내용 → [동적 워크플로우 가이드](/docs/advanced/dynamic-workflows)

---

### 3️⃣ 보안 가이드 플러그인(Security Guidance Plugin)

Claude가 코드를 짜는 **그 자리에서** 보안 취약점을 잡아 바로 고쳐주는 플러그인이에요.

> 🍱 **비유**: 요리할 때 옆에서 "소금 너무 많이 넣었어요!" 바로 알려주는 조수처럼 — 코드를 다 짜고 나중에 검토하는 게 아니라, 작성하는 순간순간 보안 문제를 발견해요.

**3단계 검토 방식:**

| 단계 | 시점 | 방식 |
|---|---|---|
| 패턴 검사 | 편집할 때마다 | 빠른 자동 패턴 매칭 |
| 모델 리뷰 | 각 턴 종료 시 | AI 모델 검토 |
| 에이전틱 리뷰 | 커밋·푸시 시 | 심층 에이전트 분석 |

```bash
# 공식 마켓플레이스에서 설치
/plugin install security-guidance@claude-plugins-official

# 현재 세션에서 활성화
/reload-plugins
```

프로젝트 전용 보안 규칙은 `.claude/claude-security-guidance.md`에 추가할 수 있어요. `[공]`

---

### 4️⃣ Fast Mode 가격 대폭 인하 💰

**Fast Mode(빠른 모드)**가 이제 **Opus 4.8**을 기본으로 쓰면서, 가격도 크게 낮아졌어요.

| 버전 | 속도 | 가격 (입력/출력 per 백만 토큰) |
|---|---|---|
| **Opus 4.8 Fast** 🆕 | 2.5배 빠름 | **$10 / $50** |
| Opus 4.7 Fast | 2.5배 빠름 | $30 / $150 (유지) |
| Opus 4.6 Fast | - | **Deprecated(지원 종료)** ⚠️ |

```bash
# Fast Mode 토글 (이제 Opus 4.8 기본)
/fast
```

> ℹ️ Opus 4.6 Fast mode는 더 이상 지원하지 않아요. Opus 4.7 Fast는 기존 가격 그대로 유지. `[공]`

---

## 기타 개선 사항

| 항목 | 내용 |
|---|---|
| `!명령어` in claude agents | `!pytest -x` 처럼 `!` 접두사로 백그라운드 셸 작업 실행 |
| `.claude/skills` 자동 로딩 | 마켓플레이스 없이 폴더에 넣으면 자동 로드 |
| `/reload-skills` | 재시작 없이 스킬 디렉토리 재스캔 |
| `disallowed-tools` | 스킬 frontmatter에서 특정 도구 비활성화 |
| `MessageDisplay` 훅 | 어시스턴트 메시지 표시 텍스트를 훅에서 변환·숨김 |
| `--fallback-model` | 기본 모델 못 찾을 때 폴백 모델로 자동 전환 |
| `defaultEnabled: false` | 플러그인 설치 후 수동 활성화 가능 |
| Vim 모드 `/` | NORMAL 모드에서 `/`로 히스토리 역방향 검색 |

---

<div class="note-star">
★ v2.1.154 이상으로 업데이트해야 Opus 4.8·Dynamic Workflows를 사용할 수 있어요.<br />
★ Opus 4.6 Fast mode는 이번 주부터 deprecated. 빠른 Opus가 필요하면 Opus 4.8 Fast ($10/$50)로 전환하세요.
</div>
