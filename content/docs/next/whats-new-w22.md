---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Opus 4.8 기본 적용, Dynamic Workflows로 대규모 작업 자동화, Security Guidance 플러그인, Fast Mode 가격 인하"
tags: ["업데이트", "2026", "week22", "opus-4-8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-15"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ Claude Opus 4.8 — 더 강력해진 최신 Opus 모델 🆕

**Opus 4.8**이 공식 출시되어, Max/Team Premium/Enterprise/API 플랜의 기본 모델이 됐어요.

```bash
# Claude Code v2.1.154 이상 필요
claude update

# 모델 명시해서 사용
/model claude-opus-4-8
```

| 항목 | 내용 |
|------|------|
| 기본 노력 레벨 | `high` (높음) |
| 더 어려운 작업 | `/effort xhigh` 로 높이기 |
| 기본 적용 플랜 | Max, Team Premium, Enterprise pay-as-you-go, Anthropic API |

> 🍱 **비유**: 스마트폰이 갤럭시 S24에서 S25로 업그레이드된 것과 비슷해요 — 겉으로 보기엔 비슷하지만 속은 더 강력해졌어요.

<div class="note-circle">
○ Opus 4.8은 코딩, 에이전트 작업, 전문 업무에서 성능이 향상됐어요<br />
○ 기존 Sonnet 4.6·Haiku 4.5는 변동 없어요
</div>

📄 새 모델 소개 → [Claude Opus 4.8 & Fable 5 신규 모델 안내](/docs/next/new-models-2026-06)

---

### 2️⃣ Dynamic Workflows — 대규모 작업을 여러 에이전트에게 자동 분배 🧩

**Dynamic Workflows(다이나믹 워크플로)** 는 리서치 프리뷰(research preview)로 출시된 새 기능이에요. Claude가 복잡한 작업을 직접 **계획(workflow)을 짜고**, **여러 서브에이전트에게 나눠서 동시 처리**해요.

```bash
# 예시: fetch() 호출을 새 HttpClient로 일괄 마이그레이션
> create a workflow that migrates every internal fetch() call to the new HttpClient wrapper
```

> 🍱 **비유**: 이사할 때 혼자 짐을 나르는 대신 이삿짐센터(여러 직원)에 맡기는 것과 같아요. Claude가 이삿짐 센터장이 되어서 각 직원(서브에이전트)한테 "너는 침실, 너는 주방" 하고 역할을 나눠 동시에 처리해요.

**언제 쓰면 좋을까요?**

| 상황 | 예시 |
|------|------|
| 코드베이스 전체 감사 | "전체 코드에서 보안 취약점 찾아줘" |
| 대규모 마이그레이션 | "API v1 호출을 전부 v2로 바꿔줘" |
| 복잡한 조사 | "이 에러의 원인을 여러 파일에서 교차 검증해줘" |

**실행 중인 워크플로 관리:**
```bash
/workflows
```

<div class="note-circle">
○ 리서치 프리뷰(research preview) — 아직 실험적 기능이에요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/workflows" target="_blank">code.claude.com/docs/en/workflows</a>
</div>

---

### 3️⃣ Security Guidance 플러그인 — 코딩하면서 보안 취약점 자동 검사 🛡️

코드를 수정할 때마다 **보안 취약점을 자동으로 잡아주는 플러그인**이 공식 마켓플레이스에 출시됐어요.

```bash
# 설치
> /plugin install security-guidance@claude-plugins-official

# 설치 후 현재 세션에 적용
> /reload-plugins
```

**어떻게 작동하나요?**

| 단계 | 언제? | 무엇을? |
|------|-------|---------|
| 빠른 패턴 검사 | 파일 수정할 때마다 | 알려진 취약점 패턴 스캔 |
| 모델 검토 | 각 턴(응답) 끝날 때 | Claude가 수정 내용 보안 검토 |
| 심층 검사 | 커밋·푸시할 때 | 에이전트 기반 심층 분석 |

프로젝트별 보안 규칙을 추가하려면:
```bash
# 이 파일에 프로젝트 보안 지침 작성
.claude/claude-security-guidance.md
```

> 🍱 **비유**: 운전할 때 안전벨트 경고등이 켜지는 것처럼 — 코드 쓸 때 보안 위험이 생기면 즉시 알려줘요. 나중에 몰아서 검사하는 게 아니라, 만드는 과정에서 실시간으로 잡아줘요.

---

### 4️⃣ Fast Mode 가격 대폭 인하 — Opus 4.8에서 더 저렴하게 💰

**Fast Mode(패스트 모드)** 가 Opus 4.8 기준으로 가격이 크게 내렸어요.

| 모델 | Fast Mode 요금 (입력/출력 per 백만 토큰) |
|------|----------------------------------------|
| **Opus 4.8** | **$10 / $50** 🎉 (신규) |
| Opus 4.7 | $30 / $150 (유지) |
| Opus 4.6 | $30 / $150 → **⚠️ Deprecated(지원 종료 예정)** |

> 🍱 **비유**: 더 좋은 택시(Opus 4.8)가 나왔는데 요금은 오히려 더 싸진 것과 같아요. 예전 택시(Opus 4.7)는 그대로지만, 새 택시 탈수록 이득이에요.

```bash
# Fast Mode 토글
/fast
```

<div class="note-circle">
○ Fast Mode는 약 2.5배 빠름 — 빠른 응답이 중요할 때 사용<br />
○ Pro/Max 리서치 프리뷰 제공<br />
○ Opus 4.6 Fast Mode는 Deprecated — Opus 4.8로 전환 권장
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|------|------|
| `claude --bg --exec` | `!명령어`로 백그라운드 셸 작업 실행, 나중에 붙었다 뗄 수 있어요 |
| 로컬 플러그인 자동 로드 | `.claude/skills/` 폴더의 플러그인이 마켓플레이스 없이 자동 로드 |
| `claude plugin init <이름>` | 새 플러그인 기본 구조 자동 생성 |
| `/reload-skills` | 재시작 없이 스킬 디렉토리 재스캔 |
| `MessageDisplay` 훅 | 어시스턴트 응답 텍스트를 훅으로 변환/숨기기 가능 |
| `--fallback-model` | 기본 모델 오류 시 대체 모델로 자동 전환 |
| Vim 모드 | `/` 로 히스토리 역방향 검색 (bash·zsh vi-mode 동일) |
| Chrome 연동 | `/chrome` → "브라우저 선택…" 으로 멀티 브라우저 지원 |

---

<div class="note-circle">
○ Week 22 범위: Claude Code v2.1.150 ~ v2.1.157<br />
○ Dynamic Workflows·Fast Mode Opus 4.8 모두 리서치 프리뷰
</div>
