---
title: "[공] Code Review 정식 출시 — Team·Enterprise에서 AI 자동 PR 리뷰"
description: "Claude Code의 AI 에이전트 기반 코드 리뷰가 GA(정식 출시)됐습니다 — 설정, 비용, 활용법 정리"
tags: ["자동생성", "code-review", "PR", "코드리뷰", "Team", "Enterprise", "GA"]
category: "next"
order: 19
lastUpdated: "2026-10-30"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026-10-15 (마케팅 페이지 기준 "Now generally available for Team and Enterprise")<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/code-review">code.claude.com/docs/en/code-review</a>
</div>

## Code Review가 뭔가요?

**Claude가 PR(Pull Request)을 열면 자동으로 코드를 읽고, 문제점을 코멘트로 달아주는 기능**입니다.

> 🏫 **비유로 설명하면**: 코드를 제출하면, 경험 많은 선배 개발자가 항상 옆에서 "이 부분은 버그 가능성이 있어요", "여기 보안 취약점이 있어요" 하고 집어주는 것과 같아요. 24시간, 쉬지 않고, 무섭지 않게.

---

## 어떤 것을 잡아주나요?

| 카테고리 | 예시 |
|----------|------|
| 🐛 버그 | null 체크 누락, 경계값 오류, 예외 처리 빠짐 |
| 🔒 보안 | SQL 인젝션, XSS, 인증 로직 허점 |
| 📋 코드 품질 | 중복 코드, 복잡도 높은 함수, 명명 규칙 |
| ⚡ 성능 | 불필요한 루프, N+1 쿼리, 메모리 낭비 |
| 🧪 테스트 | 커버리지 미흡, 엣지 케이스 누락 |

---

## 어떤 플랜에서 쓸 수 있나요?

| 플랜 | 지원 여부 |
|------|-----------|
| Pro | ❌ (미지원) |
| Max | ❌ (미지원) |
| **Team** | ✅ **정식 지원** |
| **Enterprise** | ✅ **정식 지원** |
| API (Console) | 별도 설정 필요 |

---

## 공식 문서 구조 (GA 기념 세분화)

Code Review가 GA되면서 공식 문서가 **7개 서브페이지**로 확장됐습니다:

1. `code-review` — 개요
2. `code-review-setup` — GitHub·GitLab 연동 설정
3. `code-review-customize` — 리뷰 규칙 커스터마이즈
4. `code-review-pull-requests` — PR별 리뷰 동작 방식
5. `code-review-costs` — 비용 계산 방법
6. `code-review-troubleshooting` — 문제 해결
7. `code-review-local` — 로컬에서 리뷰 실행

> 📌 문서 확장 규모로 볼 때, Code Review는 단순 기능을 넘어 **Claude Code의 핵심 기능 중 하나**로 자리잡았습니다.

---

## 기존 `/ultrareview`와 차이점은?

| 항목 | Code Review (GA) | /ultrareview |
|------|-----------------|--------------|
| 실행 방식 | PR 열릴 때 자동 | 명령어 직접 실행 |
| 주 용도 | 팀 협업, CI 파이프라인 | 개인·로컬 심층 분석 |
| 설정 필요 | GitHub/GitLab 연동 설정 | 없음 (바로 사용) |
| 플랜 | Team·Enterprise | 모든 플랜 |

---

## 시작하는 방법

1. **GitHub 또는 GitLab 연동**: Claude Code 설정에서 저장소 연결
2. **리뷰 활성화**: `.claude/settings.json`에 `code-review: true` 추가 (추정)
3. **PR 생성**: PR을 열면 Claude가 자동으로 리뷰 시작
4. **커스터마이즈**: 리뷰 기준, 무시할 파일, 언어별 규칙 설정 가능

> ⚙️ 정확한 설정 방법은 [공식 code-review-setup 문서](https://code.claude.com/docs/en/code-review-setup)를 참고하세요.

---

## 비용은 어떻게 되나요?

Code Review는 **Claude가 PR 전체를 읽고 분석**하므로 토큰 비용이 발생합니다.

- PR 크기(줄 수)에 따라 비용 달라짐
- 공식 [code-review-costs](https://code.claude.com/docs/en/code-review-costs) 페이지에서 계산기 제공 (추정)
- Team 플랜의 경우 월 $500 공유 크레딧 내에서 사용 가능

> 💡 **팁**: 초기에는 핵심 저장소에만 적용하고, 비용 패턴을 확인한 뒤 범위를 넓혀가세요.
