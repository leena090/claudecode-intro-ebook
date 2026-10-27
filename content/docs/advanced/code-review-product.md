---
title: "[공] Code Review — AI가 PR을 미리 검토해줘요"
description: "Claude Code Review는 GitHub Pull Request를 자동으로 분석해 버그와 문제점을 잡아내는 AI 코드 리뷰 서비스입니다. Team과 Enterprise 플랜에서 정식 출시(GA)됐습니다"
tags: ["자동생성", "코드리뷰", "CodeReview", "PR", "GitHub", "Team", "Enterprise", "자동화", "품질관리"]
category: "advanced"
order: 27
lastUpdated: "2026-10-27"
---

## 📝 Code Review란?

Claude Code의 **Code Review** 기능은 마치 **경험 많은 선배 개발자가 PR을 미리 훑어봐 주는 것**처럼, GitHub Pull Request를 자동으로 검토해줍니다.

> **공식 발표** (2026-10-15): "Team과 Enterprise 플랜에서 Code Review 정식 출시(Generally Available). 버그가 프로덕션에 도달하기 전에 더 많이 잡아내세요."

---

## 🎯 무엇을 해주나요?

Code Review는 PR이 열리면 자동으로:

1. **버그 탐지**: 로직 오류, 경계값 문제, 잘못된 타입 처리 등 찾기
2. **보안 취약점**: XSS, SQL 인젝션, 인증 우회 등 OWASP 주요 취약점
3. **성능 문제**: 불필요한 N+1 쿼리, 비효율적인 루프 등
4. **코드 품질**: 복잡한 함수, 중복 코드, 테스트 누락 등

마치 **원고를 제출하기 전에 맞춤법·논리 검토를 받는 것**처럼, 합병(merge)하기 전에 문제를 잡을 수 있어요.

---

## 🔧 어떻게 설정하나요?

### 기본 설정 단계

```bash
# 1. GitHub 연동 확인
# Claude Code → GitHub 앱 설치 필요

# 2. 저장소(레포지토리)에서 Code Review 활성화
# code.claude.com → Code Review → 저장소 선택

# 3. 이제 PR을 열면 자동으로 리뷰가 달립니다
```

### 로컬에서도 실행 가능

터미널에서 직접 실행할 수도 있어요:
```bash
/code-review          # 현재 브랜치의 diff 리뷰
/code-review ultra    # 클라우드 멀티 에이전트 깊은 리뷰
```

---

## 📊 플랜별 이용 가능 여부

| 플랜 | 이용 가능 | 방식 |
|------|-----------|------|
| Pro / Max | ⚠️ 제한적 (확인 필요) | 로컬 `/code-review` |
| **Team** | ✅ **정식 출시 (GA)** | GitHub PR 자동 리뷰 |
| **Enterprise** | ✅ **정식 출시 (GA)** | GitHub PR 자동 리뷰 |

---

## 📂 관련 공식 문서

Code Review는 여러 세부 문서로 구성돼 있어요:

| 문서 | 내용 |
|------|------|
| `code-review.md` | Code Review 제품 개요 |
| `code-review-setup.md` | 설정 방법 |
| `code-review-local.md` | 로컬(`/code-review`) 사용법 |
| `code-review-customize.md` | 커스터마이징 (특정 파일 제외 등) |
| `code-review-pull-requests.md` | PR 통합 상세 |
| `code-review-costs.md` | 비용 계산 |
| `code-review-troubleshooting.md` | 문제 해결 |

> 🔗 공식 문서: [code.claude.com/docs/en/code-review](https://code.claude.com/docs/en/code-review)

---

## 💡 실무 팁

**혼자 개발할 때도 유용해요!**
- PR을 올리기 전에 자신의 코드를 한번 더 검토받을 수 있어요
- 실수로 넣은 `console.log`, 하드코딩된 비밀번호 등을 미리 잡아낼 수 있어요
- "이 코드가 맞나?" 하는 불안감을 줄여줘요

**출처**: [code.claude.com/docs/en/code-review](https://code.claude.com/docs/en/code-review) — 공식 문서 기준
