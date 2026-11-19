---
title: "[공] Code Review GA — PR 버그를 AI가 자동으로 잡아주는 기능 정식 출시"
description: "GitHub PR에 Claude가 자동으로 버그를 찾고 인라인 코멘트로 알려주는 Code Review가 Team·Enterprise에 정식 출시됨"
tags: ["자동생성", "CodeReview", "PR", "GitHub", "Team", "Enterprise", "2026-10"]
category: "advanced"
order: 42
lastUpdated: "2026-11-19"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 claude.com/claude-code 마케팅 페이지 발표(2026-10-15)와 공식 문서를 토대로 작성했습니다.<br />
★ 현재 <strong>Team 플랜 및 Enterprise 플랜</strong>에서 사용 가능합니다.
</div>

## Code Review가 정식 출시됐어요!

GitHub PR을 올리면 **Claude가 자동으로 코드를 검토하고, 버그를 찾아 인라인 코멘트로 알려주는 기능**이 정식 출시(GA)됐습니다.

> 🔍 **비유로 설명하면**: 경험 많은 선배 개발자가 항상 PR을 검토해 주는 것과 같아요. 내가 올린 PR에 "여기 null 체크 빠졌어요", "이 로직 엣지케이스 있어요" 라고 댓글을 달아줍니다. 선배가 없는 1인 개발자도, 팀이 바쁠 때도 혼자 꼼꼼한 리뷰를 받을 수 있어요.

---

## Code Review가 하는 일

**공식 발표 기준:**
- PR의 각 변경사항을 검토
- 발견한 버그를 **직접 검증(verify)**
- GitHub PR에 **인라인 코멘트**로 결과 전달

```
# 흐름 예시

1. 개발자가 GitHub에 PR 생성
2. Code Review 자동 시작
3. Claude가 변경 코드 검토 → 버그 후보 발견
4. 발견한 내용을 다시 검증 (오탐 최소화)
5. GitHub PR에 인라인 코멘트로 결과 등록
6. 개발자가 코멘트 확인 후 수정 or 무시
```

---

## 어떤 버그를 찾아주나요?

| 카테고리 | 예시 |
|---|---|
| **로직 오류** | 조건문 반전, 엣지케이스 누락 |
| **Null 처리** | null/undefined 체크 미비 |
| **타입 오류** | 타입 불일치, 암묵적 변환 |
| **보안 취약점** | SQL 인젝션 가능성, 인증 누락 |
| **성능 이슈** | 불필요한 루프, 중복 쿼리 |

---

## 사용 조건

| 항목 | 내용 |
|---|---|
| **플랜** | Team 또는 Enterprise |
| **연동** | GitHub (Claude GitHub App 설치 필요) |
| **트리거** | PR 생성·업데이트 시 자동 or `@claude review` 요청 |
| **비용** | 사용량 크레딧 기반 (Team 플랜: 월 $500 풀 크레딧) |

---

## 설정 방법 개요

1. Claude 조직 설정에서 Code Review 활성화
2. GitHub 조직에 Claude GitHub App 설치
3. 검토할 레포지토리 선택
4. PR 올리면 자동 작동!

```
# 수동으로 리뷰 요청하기
# GitHub PR 코멘트에 입력:
@claude review
```

> 💡 `REVIEW.md` 파일로 "어떤 걸 검토해줘", "이 경로는 무시해줘" 등 커스터마이징도 가능해요.

---

## /ultrareview와의 차이

| | Code Review (GitHub) | /ultrareview (로컬) |
|---|---|---|
| **실행 방식** | PR 자동 or @claude 요청 | 세션 내 `/code-review ultra` |
| **결과 위치** | GitHub 인라인 코멘트 | 세션 출력 |
| **팀 공유** | 모든 팀원이 GitHub에서 확인 | 개인 세션 |
| **플랜** | Team/Enterprise | 모든 플랜 |

---

## 공식 문서

- [Code Review 개요](https://code.claude.com/docs/en/code-review) — 전체 안내
- [Code Review 설정](https://code.claude.com/docs/en/code-review-setup) — 설치 가이드
- [Code Review 커스터마이징](https://code.claude.com/docs/en/code-review-customize) — REVIEW.md로 조정
- [PR에서 리뷰 보기](https://code.claude.com/docs/en/code-review-pull-requests) — 리뷰 확인·요청

---

*출처: claude.com/claude-code 마케팅 발표 (2026-10-15) + 공식 문서*
*작성일: 2026-11-19 (자동 생성)*
