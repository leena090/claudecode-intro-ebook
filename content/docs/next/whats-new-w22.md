---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 출시·기본 모델 전환, Dynamic Workflows(다이나믹 워크플로우) 리서치 프리뷰, Security Guidance 플러그인, Fast mode가 Opus 4.8로 가격 대폭 인하"
tags: ["업데이트", "2026", "week22", "opus4.8", "dynamic-workflows", "ultracode", "fast-mode", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-03"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Claude Opus 4.8 — 새 최강 모델 등장 🆕

Anthropic이 **Claude Opus 4.8**을 공식 출시했어요. 기존 Opus 4.7보다 코딩·에이전트 작업·전문 업무에서 더 강력하고, 오랜 작업도 일관성 있게 처리해요.

| 항목 | 내용 |
|---|---|
| 모델 ID | `claude-opus-4-8` |
| 기본 적용 플랜 | Max, Team Premium, Enterprise 종량제, Anthropic API |
| 기본 노력 레벨 | high (높음) |
| 더 어려운 작업 시 | `/effort xhigh` 입력 |
| 필요 버전 | v2.1.154 이상 |

```bash
# 모델 명시적 전환
/model claude-opus-4-8

# 더 어려운 작업에 최고 노력 레벨 적용
/effort xhigh
```

> 🏋️ **비유**: Opus 4.8은 운동 선수가 더 오랜 기간 훈련해서 힘도 세지고 지구력도 늘어난 것과 같아요. 어려운 문제도 지치지 않고 끝까지 풀어줘요. `[공]`

**블로그 발표**: 2026년 5월 28일, Anthropic이 공식 블로그에서 Claude Opus 4.8을 소개했습니다.

---

### 2️⃣ Dynamic Workflows (다이나믹 워크플로우) — 대규모 자동화 🤖

> ⚠️ **리서치 프리뷰** 단계예요. Claude Code v2.1.154 이상 필요. 유료 플랜 모두 사용 가능 (Pro는 `/config`에서 활성화).

**워크플로우**는 Claude가 여러 서브에이전트(하청 작업자들)에게 일을 나눠주는 **조율 대본**이에요. 대화창 하나로 감당하기 어려운 큰 작업 — 코드베이스 전체 보안 감사, 500개 파일 마이그레이션, 여러 소스를 교차 검증해야 하는 리서치 — 에 딱 맞아요.

> 📦 **비유**: 공장 라인처럼요. 일반 대화는 혼자서 처음부터 끝까지 만드는 장인이라면, 워크플로우는 조립 라인에 100명을 동시에 투입해 각자 맡은 부분을 빠르게 처리하게 하는 것이에요. `[공]`

#### 워크플로우 시작하는 3가지 방법

**방법 1: `ultracode` 키워드**

프롬프트에 `ultracode`를 넣으면 Claude가 자동으로 워크플로우를 작성하고 실행해요.

```
ultracode: src/routes/ 아래 모든 API 엔드포인트에서 인증 누락 체크
```

**방법 2: 자연어로 요청**

"워크플로우 사용해줘", "use a workflow"처럼 직접 요청해도 돼요.

```
fetch() 호출을 모두 찾아서 새 HttpClient로 바꾸는 워크플로우를 만들어줘
```

**방법 3: `/effort ultracode` 세션 전체 적용**

이 세션의 모든 작업에 자동으로 워크플로우를 적용해요 (토큰 더 사용).

```bash
/effort ultracode
```

#### 워크플로우 관리

```bash
/workflows          # 실행 중·완료된 워크플로우 목록
/deep-research      # 내장 리서치 워크플로우 (웹 검색 + 교차 검증 + 보고서)
```

| 단축키 | 기능 |
|---|---|
| `↑` / `↓` | 단계/에이전트 선택 |
| `Enter` | 드릴다운 (단계 → 에이전트 상세) |
| `p` | 일시정지 / 재개 |
| `s` | 이 워크플로우를 명령어로 저장 |
| `x` | 선택 에이전트 중단 |

#### 제한 사항

- 동시 실행 에이전트: 최대 16개 (로컬 CPU에 따라 감소)
- 한 실행당 총 에이전트: 최대 1,000개
- 중간에 사용자 입력 불가 (실행 중)

---

### 3️⃣ Security Guidance 플러그인 — 자동 보안 검사 🔒

코드를 수정할 때마다 Claude가 **보안 취약점을 자동으로 검사**하고 고쳐주는 플러그인이에요.

- ✅ 각 편집 시 빠른 패턴 검사
- ✅ 턴(대화 한 번) 종료 시 모델 리뷰
- ✅ 커밋/푸시 시 심층 에이전트 리뷰

```bash
# 설치
/plugin install security-guidance@claude-plugins-official

# 현재 세션에 적용
/reload-plugins
```

프로젝트별 보안 규칙은 `.claude/claude-security-guidance.md`에 추가하세요.

---

### 4️⃣ Fast Mode — Opus 4.8로 가격 대폭 인하 💸

Fast mode(빠른 모드)가 **Opus 4.8 기준**으로 바뀌고 **가격도 크게 내렸어요**!

| 모델 | Fast Mode 가격 |
|---|---|
| Opus 4.8 (신규 기본) | **$10/$50** per MTok (입/출력) |
| Opus 4.7 | $30/$150 per MTok |
| Opus 4.6 | Deprecated (지원 종료) |

> 💡 **Opus 4.8 Fast mode**는 표준 속도 대비 약 2.5배 빠르고, 비용은 기본 요금의 2배예요.

```bash
# Fast mode 토글
/fast
```

---

## 그 외 주요 변경 (v2.1.150 ~ v2.1.157)

| 기능 | 설명 |
|---|---|
| `claude agents`에서 `!` 접두사 | 백그라운드 셸 작업 실행 (`!pytest -x`) |
| `.claude/skills/` 자동 로드 | 마켓플레이스 없이 프로젝트 스킬 자동 인식 |
| `claude plugin init <이름>` | 새 플러그인 스캐폴딩 |
| `/reload-skills` | 재시작 없이 스킬 디렉토리 재스캔 |
| `disallowed-tools` 프론트매터 | 스킬/명령어 활성화 중 특정 도구 제거 가능 |
| `MessageDisplay` 훅 이벤트 | 응답 표시 전 텍스트 변환/숨김 처리 |
| `--fallback-model` 자동 전환 | 기본 모델 미사용 시 폴백 모델로 세션 유지 |
| Vim 모드 `/` 키 | NORMAL 모드에서 히스토리 역방향 검색 |
| Chrome 브라우저 선택 | `/chrome` → "Select browser..."로 멀티 브라우저 선택 |

---

## 무엇을 먼저 써봐야 할까요?

1. **Opus 4.8로 전환**: `/model claude-opus-4-8` 입력 후 평소 작업 해보기
2. **Fast mode 가격 확인**: `/fast` 켜고 빠른 응답 체감
3. **워크플로우 맛보기**: `/deep-research 내가 궁금한 기술 주제` 실행

<div class="note-star">
💡 Dynamic workflows는 아직 리서치 프리뷰 단계이므로, 실제 사용 시 예상치 못한 동작이 있을 수 있어요. 중요한 작업 전에는 작은 범위로 먼저 테스트해 보세요.
</div>
