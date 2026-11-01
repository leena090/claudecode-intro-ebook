---
title: "[공] Code Review 정식 출시 — 버그를 프로덕션 전에 잡아요"
description: "Claude Code의 AI 기반 코드 리뷰가 Team·Enterprise에서 정식 출시(GA)됐어요. PR 올리기 전에 Claude가 버그·보안·품질 문제를 미리 잡아주는 기능을 알아봐요."
tags: ["자동생성", "코드 리뷰", "code review", "PR", "CI", "팀", "GA", "2026"]
category: "next"
order: 19
lastUpdated: "2026-11-01"
---

<div class="note-star">
★ <strong>[공] 공식 발표</strong> — 2026-10-15 마케팅 페이지 기준 GA(정식 출시) 확인.<br />
★ Team·Enterprise 플랜에서 사용 가능해요.
</div>

## Code Review란?

Code Review는 PR(풀 리퀘스트)을 GitHub에 올리기 **전에** Claude가 자동으로 코드를 검토해주는 기능이에요.

> 🍱 **비유로 설명하면**: 시험지를 제출하기 전에 선생님이 "이 문제 다시 봐봐" 하고 미리 봐주는 것처럼, Claude가 팀원이 PR을 열기 전에 먼저 코드를 훑어봐요.

---

## 무엇을 검토해주나요?

Claude Code의 코드 리뷰는 단순한 린터가 아니에요. AI가 실제 코드 로직을 이해하고 검토해요.

| 검토 항목 | 설명 |
|-----------|------|
| 🐛 **버그** | 잠재적 오류, 엣지 케이스 누락, 로직 결함 |
| 🔒 **보안** | 취약점, 인증 문제, 데이터 노출 위험 |
| ⚡ **성능** | 불필요한 N+1 쿼리, 비효율적인 루프 |
| 📖 **가독성** | 복잡한 코드, 명명 규칙, 주석 부족 |
| 🏗️ **아키텍처** | 설계 패턴, 추상화 수준 |

---

## 어떻게 시작하나요?

### 방법 1: 명령어로 직접 실행

```text
> /code-review
```

현재 브랜치의 변경사항을 분석하고 리뷰 결과를 알려줘요.

```text
> /review          ← /code-review의 별칭(alias)
```

### 방법 2: GitHub CI에 연동

PR을 올릴 때마다 자동으로 Claude가 리뷰해주도록 GitHub Actions에 연동할 수 있어요.

```yaml
# .github/workflows/claude-review.yml
name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]
```

[상세 설정 가이드 →](https://code.claude.com/docs/en/code-review.md)

### 방법 3: 로컬 백그라운드 실행

`/code-review`는 이제 **백그라운드 서브에이전트**로 실행돼요. 리뷰하는 동안 대화창을 막지 않고 다른 작업을 계속할 수 있어요.

> 🍱 **비유**: 세탁기 돌려놓고 다른 집안일을 하는 것처럼, Claude가 리뷰하는 동안 당신은 다른 코드를 작성할 수 있어요.

---

## `/code-review` 옵션

```text
> /code-review            ← 기본 (이전 실행 레벨 재사용)
> /code-review low        ← 빠른 고확신 이슈만
> /code-review medium     ← 균형 잡힌 분석
> /code-review high       ← 심층 분석 (시간·비용 ↑)
```

effort level은 한 번 지정하면 다음 실행에서도 유지돼요. 새 레벨을 지정하기 전까지.

---

## Claude Security와의 차이

| 기능 | Code Review | Claude Security 플러그인 |
|------|------------|------------------------|
| 목적 | 전반적인 코드 품질 | 보안 취약점 특화 |
| 트리거 | 수동 or PR 자동 | 수동 (`/claude-security`) |
| 결과 | 대화창 인라인 | 별도 폴더 리포트 |
| 대상 | 변경된 코드 | 전체 코드베이스 |
| 플랜 | 모든 플랜 | 플러그인 설치 필요 |

---

## Team 플랜에서의 활용 팁

**PR 규칙 자동화**:
- Branch protection rules에 "Claude Code Review" 상태 체크 추가
- 리뷰가 통과된 PR만 머지 허용
- 팀 코딩 스타일 가이드라인을 `.claude/REVIEW.md`에 작성하면 리뷰에 반영

---

## 관련 글

- [코드 리뷰 자동화 (CI 연동)](/docs/advanced/git-workflow)
- [Claude Security 플러그인](/docs/next/whats-new-w30-w37#claude-security)
- [/ultrareview vs /code-review 차이](/docs/advanced/ultrathink)
