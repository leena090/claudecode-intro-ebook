---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 출시, 수십~수백 개 서브에이전트를 한번에 돌리는 Dynamic Workflows 리서치 프리뷰, 보안 취약점 자동 감지 security-guidance 플러그인, Fast mode 가격 인하까지"
tags: ["업데이트", "2026", "week22", "opus-4-8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-05"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code v2.1.150 ~ v2.1.157 (2026-05-25 ~ 29) 릴리즈 노트 기반이에요. <a href="https://code.claude.com/docs/en/whats-new/2026-w22">원문 보기</a>
</div>

## 이번 주 한 줄 요약

> **"새 모델, 새 워크플로우, 새 보안 도구 — 한 주에 세 가지 큰 업데이트!"**

---

## 🤖 Claude Opus 4.8 — 새 주력 모델 출시

**Claude Opus 4.8**이 출시됐어요! Max 플랜, Team Premium, Enterprise pay-as-you-go, Anthropic API에서 기본 모델로 적용됩니다.

> 🍱 **비유로 설명하면**: Opus 4.7이 최신 스마트폰이었다면, Opus 4.8은 그다음 세대 플래그십 모델이에요. 코딩, 에이전트 작업, 전문적인 분석 전반에서 더 강해졌어요.

### 주요 특징

| 항목 | 내용 |
|------|------|
| 기본 effort | `high` (평상시 사용에 최적화) |
| 더 어려운 작업 | `/effort xhigh`로 올릴 수 있어요 |
| 필요 버전 | v2.1.154 이상 |

### 모델 전환하는 법

```
/model claude-opus-4-8
```

또는 모델 선택 메뉴에서 직접 고를 수 있어요.

<div class="note-star">
★ Opus 4.8은 코딩, 에이전트 작업, 장시간 실행 작업에서 더 안정적인 성능을 보여줘요. 복잡한 리팩토링이나 대규모 마이그레이션에 특히 유용해요. <code>[공식 발표 기준]</code>
</div>

---

## ⚡ Fast mode — Opus 4.8에서 가격 인하

Fast mode가 업그레이드됐어요. 이제 **Opus 4.8을 기본**으로 사용하고, **가격도 내려갔어요**.

| 모델 | Fast mode 가격 | 속도 |
|------|---------------|------|
| **Opus 4.8** (신규 기본) | **$10/$50** per MTok | 약 2.5배 빠름 |
| Opus 4.7 | $30/$150 per MTok | 약 2.5배 빠름 |
| Opus 4.6 | $30/$150 per MTok → **deprecated** | — |

> 🍱 **비유로 설명하면**: 더 좋은 자동차가 나왔는데 기름값은 오히려 더 싸진 것과 같아요. Opus 4.6 Fast mode는 이번에 deprecated(지원 종료)됐어요.

Fast mode 켜기:
```
/fast
```

---

## 🔀 Dynamic Workflows — 수백 개 에이전트를 스크립트로 오케스트레이션

**리서치 프리뷰**로 공개된 가장 큰 신기능이에요. 복잡한 대형 작업을 **클로드가 직접 오케스트레이션 스크립트를 작성**해서 수십~수백 개의 서브에이전트로 분산 처리해줘요.

> 🍱 **비유로 설명하면**: 지금까지 클로드는 혼자 일하거나 몇 명한테 일을 나눠줬는데, Dynamic Workflows는 마치 100명짜리 팀 전체를 지휘하는 감독관이 된 것과 같아요. 각 에이전트가 맡은 부분을 동시에 처리하고, 결과를 합쳐요.

### 어떨 때 쓰나요?

| 상황 | 예시 |
|------|------|
| 코드베이스 전체 감사 | "모든 API 엔드포인트에서 인증 누락 찾기" |
| 대규모 마이그레이션 | "500개 파일의 fetch() → HttpClient 변환" |
| 크로스체크 리서치 | "여러 소스를 교차검증하는 딥 리서치" |

### 사용 방법

```
# 프롬프트에 'ultracode' 키워드 사용
ultracode: src/routes/ 아래 모든 API 엔드포인트 인증 체크 감사해줘

# 또는 자연어로
이 작업에 워크플로우 사용해줘: fetch() 전체를 HttpClient로 마이그레이션

# 세션 전체를 ultracode 모드로
/effort ultracode
```

### 워크플로우 관리

```
/workflows
```

실행 중인 워크플로우의 진행 상황을 단계별로 확인하고, 에이전트 수·토큰 사용량·경과 시간을 볼 수 있어요.

<div class="note-star">
★ <strong>주의 — 토큰 사용량이 많아요</strong>
<br />워크플로우는 에이전트를 많이 사용하기 때문에 일반 대화보다 토큰 소비가 훨씬 많아요. 처음엔 작은 범위(디렉토리 1개 등)로 테스트해보세요.
<br />★ <strong>리서치 프리뷰</strong> — Pro 플랜에서는 <code>/config</code>에서 Dynamic workflows를 켜야 해요.
</div>

---

## 🛡️ Security-guidance 플러그인 — 코딩하면서 보안 취약점 자동 감지

클로드가 코드를 작성할 때 실시간으로 **보안 취약점을 스스로 검토하고 수정**하는 플러그인이에요.

> 🍱 **비유로 설명하면**: 요리사(클로드)가 음식을 만들면서 위생 검사관(security-guidance)이 옆에서 "이거 날것 아닌가요?"를 즉시 체크하고 바로 고치는 것과 같아요.

### 3단계 자동 검토

| 단계 | 시점 | 방식 |
|------|------|------|
| 1단계 | 파일 수정 즉시 | 패턴 매칭 (eval, innerHTML 등 위험 패턴) |
| 2단계 | 각 턴(turn) 종료 시 | AI 모델 리뷰 |
| 3단계 | git commit/push 시 | 심층 에이전트 리뷰 |

### 설치 방법

```
/plugin install security-guidance@claude-plugins-official
/reload-plugins
```

자세한 내용은 → [Security-guidance 플러그인 상세 가이드](/docs/advanced/security-guidance-plugin)

---

## 기타 개선사항

| 항목 | 내용 |
|------|------|
| `!` 배경 작업 | `claude agents`에서 `!pytest -x` 처럼 셸 명령을 백그라운드 작업으로 실행 |
| `.claude/skills` 자동 로드 | 마켓플레이스 없이도 스킬 디렉토리 자동 인식 |
| `claude plugin init <name>` | 새 플러그인 스캐폴딩 명령어 |
| `/reload-skills` | 재시작 없이 스킬 디렉토리 재스캔 |
| Vim `/` 검색 | NORMAL 모드에서 `/` → 히스토리 역방향 검색 |
| `--fallback-model` | 기본 모델 미발견 시 자동으로 폴백 모델 사용 |

---

## 이번 주 총정리

| 태그 | 변경 내용 | 중요도 |
|------|-----------|--------|
| [공] | Claude Opus 4.8 출시 — 새 주력 모델 | ⭐⭐⭐ |
| [공] | Dynamic Workflows (리서치 프리뷰) | ⭐⭐⭐ |
| [공] | security-guidance 플러그인 | ⭐⭐⭐ |
| [공] | Fast mode Opus 4.8 — $10/$50로 가격 인하 | ⭐⭐ |

> Opus 4.8 전용 상세 글 → [Claude Opus 4.8 출시 — 더 강해진 코딩 AI](/docs/next/claude-opus-4-8)
