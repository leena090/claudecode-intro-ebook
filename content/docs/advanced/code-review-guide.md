---
title: "[공] Code Review — PR 버그를 AI 에이전트가 잡아주는 기능 완전 가이드"
description: "2026년 10월 GA 전환된 Code Review 기능. 로컬 리뷰부터 PR 자동 리뷰, 비용·커스텀 설정까지 한 번에 정리 (Team·Enterprise 대상)"
tags: ["자동생성", "코드리뷰", "PR", "GitHub", "팀플랜", "자동화", "고급"]
category: "advanced"
order: 29
lastUpdated: "2026-11-15"
---

<div class="note-star">
★ <strong>[공]</strong> 2026년 10월 15일 Team·Enterprise 대상 정식(GA) 출시 확인.<br/>
★ 마케팅 페이지 "Latest feature announcements"에서 확인됨.<br/>
★ 공식 문서: code.claude.com/docs/en/code-review
</div>

## Code Review가 뭔가요?

**Code Review**는 Pull Request나 로컬 변경 코드를 Claude 에이전트가 자동으로 검토하고 버그·개선점을 찾아주는 기능이에요.

> 🔍 **비유로 설명하면**: 배 위의 항법사가 항로를 계속 체크하듯이, Code Review는 여러분이 코드를 작성할 때 옆에서 계속 "이 부분 위험해요", "여기 더 나은 방법이 있어요"라고 말해주는 짝꿍이에요.

---

## 무엇이 달라졌나요? (2026년 10월 GA)

마케팅 페이지 발표 기준:

> *"Code Review: Catch more bugs before they reach production. Now generally available for Team and Enterprise."*

| 항목 | 프리뷰 (이전) | GA (현재) |
|---|---|---|
| 대상 | 선택 사용자 | **Team·Enterprise 전체** |
| 안정성 | 베타 수준 | 프로덕션 사용 권장 |
| 문서 | 단일 페이지 | **6개 세부 가이드**로 확장 |

---

## Code Review 모드 두 가지

### 1. 로컬 Code Review

내 컴퓨터에서 작성 중인 코드를 바로 검토:

```bash
# 현재 변경 사항 검토 (추정 — 공식 발표 기준)
claude /code-review

# 특정 파일만 검토
claude /code-review src/auth/login.ts

# 최근 N개 커밋 검토
claude /code-review --commits 3
```

### 2. PR Code Review (GitHub 연동)

Pull Request를 열면 Claude 에이전트가 자동으로 리뷰 댓글을 달아줘요:

```yaml
# .github/workflows/claude-review.yml (추정)
name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          mode: review
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

---

## 세부 가이드 목록 (공식 문서 기준)

llms.txt에서 확인된 Code Review 관련 공식 문서:

| 문서 | 내용 (추정) |
|---|---|
| `code-review` | 개요 및 시작하기 |
| `code-review-local` | 로컬 환경 리뷰 설정 |
| `code-review-setup` | GitHub 연동 설정 |
| `code-review-customize` | 리뷰 기준 커스텀 |
| `code-review-pull-requests` | PR 리뷰 워크플로우 |
| `code-review-costs` | 비용 관리·최적화 |
| `code-review-troubleshooting` | 문제 해결 |

---

## 리뷰 기준 커스텀하기

팀 고유의 코딩 스타일이나 주의 사항을 Claude에게 미리 알려줄 수 있어요:

```yaml
# .claude/review-config.yml (추정 — 공식 발표 기준)
review:
  focus:
    - security          # 보안 취약점 강조
    - performance       # 성능 이슈 체크
    - test-coverage     # 테스트 누락 경고
  
  ignore:
    - style-nitpicks    # 스타일 세부 사항 무시
  
  custom_rules:
    - "모든 외부 입력값은 반드시 검증할 것"
    - "async 함수는 항상 try-catch 처리"
```

---

## 비용 관리 팁

Code Review는 API 토큰을 사용해요. 비용을 줄이는 실용 팁:

| 전략 | 절감 효과 |
|---|---|
| 작은 PR로 쪼개기 | 한 번에 적은 코드 → 토큰 절감 |
| 중요 파일만 리뷰 | `.claude/review-ignore` 활용 |
| 모델 선택 | Haiku 5.5로 1차 필터 후 Opus로 심층 리뷰 |
| 리뷰 빈도 조절 | draft PR은 리뷰 스킵 |

---

## 팀에서 활용하는 법

```
1. PR 오픈 시 Claude 자동 리뷰 → 댓글로 초안 피드백
2. 개발자가 Claude 댓글 확인 → 수정 적용
3. 사람 리뷰어는 로직·아키텍처 중심으로 검토
4. Claude가 잡은 버그는 머지 전 수정 필수
```

> 🕹️ **비유**: 체스 게임에서 AI가 "이 수는 나쁜 수입니다"라고 힌트를 주는 것처럼, Code Review는 "이 코드는 이런 위험이 있어요"라고 먼저 알려주고, 최종 판단은 사람이 해요.

---

## 현재 가용 플랜

- ✅ **Team plan** (월 $20/seat~)
- ✅ **Enterprise plan**
- ❌ 개인 Pro/Max plan 불포함 (공식 발표 기준)

---

## 정리

Code Review는 "PR 열기 전에 AI에게 먼저 검토받기"를 자동화해요. 버그가 프로덕션에 올라가기 전에 걸러내는 첫 번째 안전망 역할이에요.

> 출처: claude.com/claude-code (마케팅 페이지, Oct 15, 2026) `[공]`
> 공식 문서: code.claude.com/docs/en/code-review
