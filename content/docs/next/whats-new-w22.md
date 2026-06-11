---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 출시, Dynamic workflows로 대규모 작업 자동화, security-guidance 플러그인, Fast mode 요금 인하"
tags: ["업데이트", "2026", "week22", "opus4.8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-11"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Claude Opus 4.8 — 새 기본 모델 출시

**Claude Opus 4.8(오퍼스 포인트 에잇)** 이 출시됐어요. Max, Team Premium, Enterprise, Anthropic API 등에서 **기본 모델이 됩니다**.

```bash
# Opus 4.8 직접 지정하기
/model claude-opus-4-8

# 또는 모델 피커에서 선택
```

> 🍱 **비유**: 스마트폰이 Galaxy S24에서 Galaxy S25로 업그레이드된 것처럼요 — 같은 "Opus" 계열인데 4.8이 코딩, 에이전트 작업, 긴 작업 유지력이 더 좋아졌어요.

**Opus 4.8 특징:**
- 기본으로 **high effort(높은 집중도)** 로 동작
- 더 어려운 작업은 `/effort xhigh` 로 올릴 수 있음
- v2.1.154 이상 필요

```bash
# 더 어려운 작업에서 최고 집중도로
/effort xhigh
```

<div class="note-circle">
○ Pro 플랜은 Sonnet 4.6이 기본, Max/Team은 Opus 4.8이 기본이에요<br />
○ 버전 업데이트: <code>claude update</code> 후 사용 가능
</div>

---

### 2️⃣ Dynamic Workflows — 대규모 작업을 Claude가 직접 설계하고 실행

**Dynamic workflows(다이나믹 워크플로우)** 는 한 번의 대화로 처리하기 너무 큰 작업을 Claude가 직접 **계획서(워크플로우)를 작성하고 여러 서브에이전트에게 분배해서 실행**하는 기능이에요.

> 🍱 **비유**: 혼자서 이사하기엔 짐이 너무 많을 때, 이삿짐 회사가 팀을 꾸려 각 팀원한테 역할을 나눠주는 것처럼요 — Claude가 감독자가 되어 여러 Claude를 지휘해요.

**이럴 때 사용하세요:**
- 코드베이스 전체를 검사해야 할 때
- 대규모 마이그레이션 작업
- 여러 소스를 교차 검증해야 하는 리서치 작업

```bash
# 예시: 프로젝트 전체의 fetch() 호출을 HttpClient로 바꾸기
> create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# 실행 중인 워크플로우 관리
/workflows
```

| 기능 | 설명 |
|------|------|
| `/workflows` | 실행 중인 워크플로우 목록 확인 |
| 자동 분배 | Claude가 서브에이전트에게 역할 자동 할당 |
| 백그라운드 실행 | 메인 세션과 별도로 백그라운드에서 진행 |

<div class="note-circle">
○ 현재 <strong>리서치 프리뷰</strong> 단계예요 — 기능이 변경될 수 있어요<br />
○ 작은 작업에는 일반 대화가 더 빠를 수 있어요
</div>

📄 자세한 내용 → [공식 문서: workflows](https://code.claude.com/docs/en/workflows)

---

### 3️⃣ Security Guidance 플러그인 — 코드 보안 검사 자동화

**security-guidance(시큐리티 가이던스)** 플러그인은 Claude가 코드를 수정할 때마다 **보안 취약점을 자동으로 검사하고 바로 수정**해줘요.

```bash
# 공식 마켓에서 설치
/plugin install security-guidance@claude-plugins-official

# 설치 후 현재 세션에서 활성화
/reload-plugins
```

**검사 시점 3단계:**
1. **편집할 때마다** — 빠른 패턴 검사
2. **매 대화 턴 끝** — 모델 기반 리뷰
3. **커밋/푸시 시** — 더 깊은 에이전트 리뷰

> 🍱 **비유**: 글을 쓰면서 실시간으로 맞춤법 검사가 빨간 줄을 쳐주는 것처럼요 — 코드에서 보안 구멍이 생기면 즉시 표시해줘요.

프로젝트별 보안 규칙은 `.claude/claude-security-guidance.md` 에 추가할 수 있어요.

---

### 4️⃣ Fast mode — Opus 4.8 기준으로, 요금 인하! 💰

**Fast mode(패스트 모드)** 가 Opus 4.8 기준으로 바뀌었고, **요금이 크게 내려갔어요**.

| 모델 | 기존 요금 | 새 요금 |
|------|-----------|---------|
| **Opus 4.8** (새 기본) | — | **$10/$50** per million tokens |
| Opus 4.7 | $30/$150 | $30/$150 (유지) |
| Opus 4.6 | $30/$150 | **Deprecated(중단 예정)** |

> 🍱 **비유**: 더 좋은 차(Opus 4.8)에 터보를 달면서 오히려 가격은 내려간 것처럼요 — 같은 2.5배 속도인데 Opus 4.8 Fast mode가 훨씬 저렴해요.

```bash
# Fast mode 토글 (Opus 4.8에서 자동 적용)
/fast
```

<div class="note-circle">
○ Opus 4.6 fast mode는 deprecated — 빠른 시일 내에 Opus 4.7 이상으로 전환 권장<br />
○ Fast mode는 Pro/Max 리서치 프리뷰 / 소비 기반 플랜 제공
</div>

---

### 그 밖의 변경들

| 항목 | 내용 |
|------|------|
| `!` 백그라운드 잡 | `claude agents`에서 `!pytest -x` 처럼 쉘 명령어를 백그라운드 잡으로 실행 |
| `.claude/skills` 자동 로드 | 마켓플레이스 없이 `.claude/skills` 폴더의 스킬 자동 인식 |
| `claude plugin init <name>` | 새 플러그인 스캐폴딩 명령어 |
| `/reload-skills` | 재시작 없이 스킬 디렉토리 재스캔 |
| `MessageDisplay` 훅 | 어시스턴트 메시지 표시 방식을 훅으로 변환/숨김 가능 |
| Vim 모드 개선 | NORMAL 모드에서 `/` 가 히스토리 역방향 검색 오픈 |
| 폴백 모델 | 기본 모델 못 찾을 때 `--fallback-model` 로 자동 전환 |
| Claude for Chrome | `/chrome` 에서 연결된 브라우저 선택 가능 |
