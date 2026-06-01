---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 출시·기본 모델 전환, Dynamic Workflows(동적 워크플로우) 리서치 프리뷰, Security guidance 플러그인, Fast mode 가격 인하"
tags: ["업데이트", "2026", "week22", "opus4.8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. v2.1.150 → v2.1.157. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경 — 굵직한 4가지

이번 주는 변경 규모가 큽니다. 새 모델 출시, 대규모 자동화 기능, 보안 플러그인, 가격 변경까지 한꺼번에 나왔어요.

---

### 1️⃣ Claude Opus 4.8 — 새 기본 모델 출시

**Claude Opus 4.8** 이 출시됐어요. Max·Team Premium·Enterprise 종량제·Anthropic API에서 **기본 모델**로 지정됩니다.

```bash
# Opus 4.8으로 직접 전환
/model claude-opus-4-8
```

| 항목 | 내용 |
|------|------|
| 기본 적용 플랜 | Max, Team Premium, Enterprise 종량제, Anthropic API |
| 기본 노력 수준 | `high` (기존 Opus보다 높게 설정됨) |
| 더 어려운 작업 | `/effort xhigh` 사용 권장 |
| 최소 버전 | v2.1.154 이상 필요 |

> 🍱 **비유**: 작년에 나온 스마트폰(Opus 4.7)이 올해 새 모델(Opus 4.8)로 바뀌는 것처럼, Claude의 "최고 사양" 엔진이 업그레이드됐어요. 코딩·에이전트 작업·장기 실행 작업에서 더 정확하고 일관성이 높아졌습니다.

Pro 플랜은 Sonnet 4.6이 기본이며, Opus 4.8은 Pro·Max 전체 플랜에서 사용할 수 있어요. `[공]`

---

### 2️⃣ Dynamic Workflows(동적 워크플로우) — 리서치 프리뷰

**대규모 작업을 여러 서브에이전트에게 나눠 병렬로 실행**하는 Dynamic Workflows가 리서치 프리뷰로 출시됐어요.

```bash
# 프롬프트에 "workflow" 단어 포함
create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# 실행 중인 워크플로우 관리
/workflows
```

> 🍱 **비유**: 한 명이 500개 파일을 혼자 다 읽는 게 아니라, 팀원 수십 명이 동시에 나눠 읽고 결과를 취합하는 것처럼, Claude가 작업을 여러 AI 에이전트에게 나눠 배경에서 동시에 처리해요.

**언제 쓰나요?**
- 전체 코드베이스 버그 감사 (수백 개 파일 동시 분석)
- 대규모 API 마이그레이션 (500개 파일 일괄 변경)
- 교차 검증이 필요한 리서치 ("여러 각도로 검토해줘")

**사용 방법:**
1. 프롬프트에 `workflow` 단어 포함 → Claude가 자동으로 워크플로우 스크립트 작성
2. 승인 → 배경에서 실행 시작
3. `/workflows` 명령어로 진행 상황 모니터링
4. 완료 시 결과가 세션에 전달

**`/effort ultracode` 설정**: 이 모드를 켜면 Claude가 모든 실질적인 작업을 자동으로 워크플로우로 처리해요. `[공]`

---

### 3️⃣ Security guidance 플러그인 — 코딩 중 실시간 보안 검토

Claude가 코드를 작성하는 동안 **자동으로 보안 취약점을 스캔하고 바로 수정**해주는 공식 플러그인이 출시됐어요.

```bash
# 설치
/plugin install security-guidance@claude-plugins-official

# 현재 세션에 적용
/reload-plugins
```

> 🍱 **비유**: 글을 쓰다가 맞춤법 자동 교정이 밑줄 쳐주는 것처럼, Claude가 코드를 짜는 순간순간 "이 부분 보안 문제 있어요"라고 알려주고 바로 고쳐줘요. PR 올린 뒤에 발견하는 것보다 훨씬 빠르죠.

검사 시점 3단계:
1. **파일 편집할 때마다** — 위험한 패턴(eval, innerHTML, pickle 등) 즉시 감지
2. **턴 종료 후** — 해당 턴에서 바뀐 코드 전체를 별도 모델로 보안 리뷰
3. **git commit/push 시** — 주변 코드까지 함께 읽는 심층 에이전트 리뷰

프로젝트 전용 보안 규칙은 `.claude/claude-security-guidance.md`에 작성하면 돼요. `[공]`

---

### 4️⃣ Fast mode 가격 인하 + Opus 4.8 기본 적용

Fast mode(빠른 모드)가 **Opus 4.8 기반**으로 바뀌면서 **가격도 내려갔어요**.

| 구분 | 이전 (Opus 4.7) | 변경 후 (Opus 4.8) |
|------|-----------------|---------------------|
| 입력 토큰 | $30 / MTok | **$10 / MTok** |
| 출력 토큰 | $150 / MTok | **$50 / MTok** |
| 속도 | 2.5배 | 2.5배 (동일) |

- Opus 4.7·4.6 Fast mode는 기존 가격($30/$150) 유지
- **Opus 4.6 Fast mode는 Deprecated(지원 종료 예정)** `[공]`

```bash
# Fast mode 토글
/fast
```

---

### 나머지 변경사항 요약

| 기능 | 설명 |
|------|------|
| `!` 접두사 쉘 명령 | `claude agents`에서 `!pytest -x` 형태로 배경 작업 실행·분리 가능 |
| `.claude/skills` 자동 로드 | 마켓플레이스 등록 없이 디렉토리에 넣으면 자동 로드 |
| `claude plugin init <name>` | 새 플러그인 기본 구조 자동 생성 |
| `/reload-skills` | 재시작 없이 스킬 디렉토리 다시 스캔 |
| `MessageDisplay` 훅 | 어시스턴트 메시지를 표시할 때 내용 변환/숨기기 훅 이벤트 추가 |
| `--fallback-model` | 기본 모델 오류 시 세션 전체에 폴백 모델 자동 적용 |
| 빔 모드 `/` 검색 | NORMAL 모드에서 `/`키로 이전 기록 역방향 검색 |
| Chrome: 브라우저 선택 | `/chrome` → "Select browser…"로 연결된 브라우저 직접 선택 |

---

> 💡 **입문자 팁**: 이번 주 업데이트는 규모가 커요. 당장 써볼 것을 꼽으면 두 가지예요. ① **Security guidance 플러그인** — 설치하면 자동으로 돌아가니 한 번만 설치해두면 돼요. ② **`/effort ultracode`** — 큰 리팩터링이나 마이그레이션 작업 전에 한 번 설정해보세요.
