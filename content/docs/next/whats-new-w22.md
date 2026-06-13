---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 기본 모델 전환, 동적 워크플로우, security-guidance 플러그인, Fast Mode 가격 인하까지 — 이번 주는 유달리 업데이트가 많아요"
tags: ["업데이트", "2026", "week22", "opus-4-8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-13"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. v2.1.150 → v2.1.157 <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Claude Opus 4.8 — 새 기본 모델 등장

이제 **Max, Team Premium, Enterprise, API 플랜**에서 Opus 4.8이 기본 모델이에요.

```bash
# Opus 4.8로 직접 전환
/model claude-opus-4-8
```

| 항목 | 내용 |
|---|---|
| 기본 effort | `high` (높은 정밀도) |
| 더 어려운 작업 | `/effort xhigh` 사용 |
| 필요 버전 | v2.1.154 이상 |

> 🍱 **비유**: 동네 분식집이 갑자기 프랜차이즈 유명 맛집으로 바뀐 것처럼 — 같은 자리인데 음식 수준이 확 올라갔어요. 따로 설정하지 않아도 이미 더 좋은 모델을 쓰고 있는 거예요. `[공]`

<div class="note-star">
★ v2.1.154 미만이면 업데이트 먼저: <code>claude update</code><br />
★ Opus 4.8은 코딩·에이전트 작업·장기 실행 작업 모두 강화됐어요.
</div>

---

### 2️⃣ 동적 워크플로우(Dynamic Workflows) — 서브에이전트 대군단 지휘하기

Claude가 **여러분의 작업을 위한 지휘 스크립트를 직접 작성**하고, 수많은 서브에이전트를 백그라운드에서 동시에 굴려요. `/workflows` 명령어로 관리합니다.

```bash
# 전체 fetch() 함수를 새 HttpClient로 마이그레이션하는 워크플로우 생성
> create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# 워크플로우 목록 확인
/workflows
```

> 🍱 **비유**: 대형 이사할 때 혼자 다 나르면 며칠 걸리지만, 이삿짐센터에 맡기면 팀장이 인부들한테 역할을 나눠줘서 하루 만에 끝나잖아요. 동적 워크플로우가 바로 그 이삿짐센터 팀장이에요. `[공]`

**언제 쓰면 좋을까요?**

| 상황 | 예시 |
|---|---|
| 코드베이스 전체 감사 | "모든 파일에서 보안 취약점 찾아줘" |
| 대규모 마이그레이션 | "구형 API 호출 전부 새 방식으로 바꿔줘" |
| 교차 검증 연구 | "이 로직이 맞는지 여러 각도로 확인해줘" |

👉 자세한 내용: [동적 워크플로우 심화](/docs/advanced/dynamic-workflows)

---

### 3️⃣ security-guidance 플러그인 — Claude가 자기 코드를 직접 점검

Claude가 코드를 수정할 때마다 **자동으로 보안 취약점을 스스로 검토**하고 같은 세션에서 바로 수정해요.

```bash
# 공식 마켓플레이스에서 설치
> /plugin install security-guidance@claude-plugins-official

# 현재 세션에 즉시 적용
> /reload-plugins
```

**동작 방식 3단계:**
1. 🔍 **편집 즉시**: 빠른 패턴 검사 (빠름)
2. 🧠 **매 턴 끝**: 모델이 직접 검토 (꼼꼼함)
3. 🚨 **커밋/푸시 시**: 심층 에이전트 검토 (철저함)

프로젝트별 보안 규칙 추가: `.claude/claude-security-guidance.md`에 작성.

> 🍱 **비유**: 요리사가 요리를 만들면서 동시에 식품안전관리사가 옆에서 실시간으로 식중독 예방 수칙을 확인하는 것처럼 — 완성된 요리가 나오기 전에 문제를 잡아내요. `[공]`

👉 자세한 내용: [security-guidance 플러그인](/docs/advanced/security-guidance-plugin)

---

### 4️⃣ Fast Mode가 Opus 4.8로 이동 — 가격도 내렸어요

Fast Mode(빠른 모드)가 이제 **Opus 4.8 기반**으로 바뀌면서 가격도 크게 내렸어요.

| 모델 | Fast Mode 가격 (입력/출력, per 백만 토큰) | 속도 |
|---|---|---|
| **Opus 4.8** (신규 기본) | **$10 / $50** | 2.5배 빠름 |
| Opus 4.7 / 4.6 | $30 / $150 (유지) | 2.5배 빠름 |
| Opus 4.6 Fast | **deprecated (폐기)** | — |

```bash
# Fast Mode 토글 (이제 Opus 4.8 기반)
/fast
```

<div class="note-star">
★ Opus 4.6 Fast Mode는 폐기(deprecated)됩니다.<br />
★ Opus 4.8 Fast Mode는 표준 요금(약 $4/$20 추정)의 약 2.5배 가격이에요. <code>[공]</code>
</div>

---

## 그 외 작은 개선들

- 🖥️ `claude agents`에서 `!명령어`로 백그라운드 작업 실행 + `claude --bg --exec 'pytest -x'`
- 📁 `.claude/skills` 폴더 플러그인 자동 로드 (마켓플레이스 불필요)
- 🔄 `/reload-skills` 명령어 — 재시작 없이 스킬 폴더 재스캔
- 🛡️ 스킬 frontmatter에 `disallowed-tools` 설정 가능
- 🔀 `--fallback-model`로 주 모델 미발견 시 자동 전환
- 🎮 Vim 모드: NORMAL 모드에서 `/`로 히스토리 역방향 검색
- 🌐 Chrome 연결 시 `/chrome` → "Select browser…"로 브라우저 선택
- 📋 `claude mcp list`가 미승인 서버를 "pending approval"로 표시

---

## 더 알아보기

- [동적 워크플로우 심화](/docs/advanced/dynamic-workflows)
- [security-guidance 플러그인](/docs/advanced/security-guidance-plugin)
- [Fast Mode 설정](/docs/advanced/voice-fast) — 이전 Fast Mode 안내
- [공식 Week 22 전체 변경 내역](https://code.claude.com/docs/en/changelog#2-1-150)
