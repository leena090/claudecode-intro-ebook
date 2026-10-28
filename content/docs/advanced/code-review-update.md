---
title: "[공] Code Review 정식 출시 — 로컬 리뷰 + PR 리뷰 완전판 (2026년 10월)"
description: "Claude Code의 코드 리뷰 기능이 정식(GA) 출시됐어요. 로컬 코드 리뷰, PR 리뷰 설정, 비용 관리까지 전용 문서 6개가 새로 추가됐습니다"
tags: ["자동생성", "코드리뷰", "CodeReview", "GA", "PR리뷰", "로컬리뷰", "ultrareview"]
category: "advanced"
order: 29
lastUpdated: "2026-10-28"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/code-review">code.claude.com/docs/en/code-review</a><br />
★ <strong>[공]</strong> 마케팅 발표: Oct 15, 2026 (Team·Enterprise 정식 출시)<br />
👉 <strong>Team·Enterprise 플랜</strong> 대상으로 일반 공개(GA)됐어요
</div>

## Code Review가 뭔가요?

**Code Review(코드 리뷰)** 기능은 Claude Code가 **코드 변경 사항을 직접 검토하고 문제점을 찾아주는 기능**이에요. 사람 리뷰어가 보기 전에 버그·보안 취약점·스타일 문제를 잡아줘요.

> 🍱 **비유**: 편집자(Claude)가 원고(코드)를 먼저 한 번 읽고 "여기 문법 틀렸어요", "이 부분 논리가 이상해요"를 메모해 주는 거예요. 최종 편집장(사람 리뷰어)의 부담이 줄어들어요.

---

## 무엇이 달라졌나요?

### 정식 출시 전 vs 후

| | **이전 (리서치 프리뷰)** | **지금 (GA, Oct 15)** |
|---|---|---|
| 대상 | 제한된 사용자 | **Team·Enterprise 전체** |
| 문서 | 단일 페이지 | **6개 전용 페이지** |
| 기능 | PR 리뷰 기본 | **로컬 리뷰 + PR 리뷰 + 비용 관리** |

---

## 새로 추가된 기능들

### 1. 로컬 코드 리뷰 (code-review-local)

PR을 올리기 **전에** 터미널에서 바로 리뷰받는 기능이에요.

```bash
# 현재 변경 사항을 즉시 로컬 리뷰
/code-review

# 특정 파일만 리뷰
/code-review src/payments/
```

> 🍱 **비유**: 원고를 출판사에 보내기 전에, 먼저 집에서 교정 프로그램으로 한 번 확인하는 것과 같아요.

### 2. PR 리뷰 설정 (code-review-setup)

GitHub·GitLab PR에 자동으로 Claude가 리뷰를 남기도록 설정할 수 있어요.

```yaml
# .claude/settings.json 예시 (기업 환경)
{
  "codeReview": {
    "enabled": true,
    "onPullRequest": true,
    "reviewLevel": "standard"
  }
}
```

### 3. 리뷰 커스터마이즈 (code-review-customize)

팀의 코딩 규칙에 맞게 리뷰 기준을 조정할 수 있어요.

```markdown
<!-- CLAUDE.md에 추가 -->
## 코드 리뷰 규칙
- 모든 API 함수에는 에러 처리 필수
- 변수명은 한국어 사용 금지 (영어만)
- console.log는 프로덕션 코드에 남기지 말 것
```

### 4. 비용 관리 (code-review-costs)

리뷰에 사용하는 토큰 비용을 모니터링하고 제한할 수 있어요.

| 설정 | 효과 |
|---|---|
| 리뷰 깊이 조정 | 토큰 사용량 조절 |
| 팀 예산 설정 | 월별 리뷰 비용 상한 설정 |
| 리뷰 범위 제한 | 특정 파일·디렉토리만 리뷰 |

---

## /ultrareview와의 차이

비슷하지만 다른 두 기능을 비교해 봐요.

| 기능 | `/code-review` (일반) | `/ultrareview` |
|---|---|---|
| 에이전트 수 | 1개 | **여러 개 (병렬)** |
| 속도 | 빠름 | 느림 |
| 깊이 | 표준 | **매우 깊음** |
| 비용 | 낮음 | **높음** |
| 적합한 경우 | 일상적 PR | 중요한 릴리즈 전 최종 검토 |

> 🍱 **비유**: `/code-review`는 동네 편의점 영수증 검토, `/ultrareview`는 세무사 연말 결산 검토예요.

---

## 어떻게 시작하나요?

### Pro·Max 개인 사용자
```bash
# 터미널에서 바로 사용 가능
/code-review
```

### Team·Enterprise
1. 관리자가 Code Review 활성화 설정
2. GitHub/GitLab 연동 설정
3. PR 자동 리뷰 ON

---

## 📚 공식 문서 페이지 목록

| 문서 | 내용 |
|---|---|
| `code-review` | 개요 |
| `code-review-local` | 로컬 리뷰 방법 |
| `code-review-setup` | 설치·설정 |
| `code-review-customize` | 커스터마이즈 |
| `code-review-pull-requests` | PR 연동 |
| `code-review-costs` | 비용 관리 |
| `code-review-troubleshooting` | 문제 해결 |
