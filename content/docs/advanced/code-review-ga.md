---
title: "[공] Code Review — AI가 PR을 대신 검토해드려요"
description: "Claude Code의 Code Review 기능이 Team·Enterprise에 정식 출시됐어요. AI가 PR을 직접 읽고 버그를 잡아드립니다. (2026-10-15 GA)"
tags: ["자동생성", "code-review", "PR", "Team", "Enterprise", "2026-10"]
category: "advanced"
order: 27
lastUpdated: "2026-11-10"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026년 10월 15일 Team·Enterprise 정식 출시(GA)<br />
★ <strong>공식 문서</strong>: code.claude.com/docs/en/code-review 외 세분화된 하위 문서 참조
</div>

## Code Review란?

**Pull Request(PR)를 Claude가 직접 읽고, 버그나 문제를 찾아주는 기능**이에요.

> 🍱 **비유로 설명하면**: 경험 많은 선배 개발자가 내 코드를 항상 옆에서 봐주는 것과 같아요. "여기 이 부분, 에러 날 수 있어요"라고 귀띔해주는 역할이죠. 24시간 가능하고, 질리거나 짜증내지도 않아요.

---

## 어떤 문제를 잡아줘요?

| 버그 유형 | 예시 |
|----------|------|
| 로직 오류 | if 조건이 반대로 되어 있음 |
| 엣지 케이스 | 빈 배열·null 처리 누락 |
| 보안 취약점 | SQL 인젝션 가능한 쿼리 |
| 성능 문제 | 반복문 안 불필요한 DB 조회 |
| 타입 오류 | TypeScript 타입 불일치 |

---

## 사용 방법

### 방법 1: Claude Code 내 `/code-review` 명령어

```bash
# PR 번호로 직접 검토 요청
/code-review 42

# 특정 브랜치 검토
/code-review feat/new-payment-flow

# 현재 diff 검토
/code-review
```

### 방법 2: GitHub PR에서 자동 트리거 (Team·Enterprise)

GitHub에 연동하면, PR이 올라올 때 자동으로 Code Review가 시작돼요.

```yaml
# .github/workflows/claude-review.yml (예시)
# 공식 GitHub Actions 문서 참조: code.claude.com/docs/en/code-review
on:
  pull_request:
    types: [opened, synchronize]
```

### 방법 3: `/autofix-pr` 로 자동 수정까지

```bash
/autofix-pr
```

Code Review에서 감지된 문제를 Claude가 직접 수정하고 커밋까지 해줘요.

---

## 검토 강도 선택

| 옵션 | 설명 | 비용 |
|------|------|------|
| `low` | 명확한 버그만 | 낮음 |
| `medium` | 버그 + 개선 제안 (기본값) | 중간 |
| `high` | 꼼꼼한 전체 검토 | 높음 |
| `max` | 멀티 에이전트 병렬 검토 | 가장 높음 |

```bash
/code-review --level high PR#42
```

---

## `/ultrareview` — 클라우드 멀티 에이전트 검토

```bash
/ultrareview
```

여러 에이전트가 병렬로 코드를 검토해요. **복잡한 대형 PR, 보안이 중요한 코드**에 적합합니다.

> ⚠️ **주의**: `/ultrareview`는 소비량이 많아요. 일반적인 PR은 `medium` 또는 `high`로 충분합니다.

---

## Team·Enterprise에서만 되나요?

| 플랜 | Code Review |
|------|-------------|
| Pro / Max | 수동 `/code-review` 명령어 가능 |
| **Team** | **GitHub 자동 연동 GA (2026-10-15 기준)** |
| **Enterprise** | **Team 기능 + 고급 커스터마이징** |

> 💡 **입문자 팁**: 개인 프로젝트라면 Pro에서도 `/code-review` 명령어로 충분히 사용할 수 있어요. 팀 협업에서 PR마다 자동으로 검토받으려면 Team 이상이 필요합니다.

---

## 세부 문서 안내

Code Review는 2026년 10월 GA 출시와 함께 공식 문서가 세분화됐어요:

- `code-review` — 개요 및 시작
- `code-review-setup` — GitHub 연동 설정
- `code-review-customize` — 커스터마이징 (검토 항목 지정)
- `code-review-pull-requests` — PR 워크플로우
- `code-review-costs` — 비용 관리
- `code-review-troubleshooting` — 문제 해결

> 공식 문서 추정 기준. 실제 URL: `code.claude.com/docs/en/code-review` 외 하위 경로 참조.
