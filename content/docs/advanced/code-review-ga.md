---
title: "[공] Code Review 정식 출시 — 클로드가 PR을 직접 리뷰한다"
description: "2026년 10월 Team·Enterprise 플랜에 정식 출시된 Claude Code Review 기능의 사용법과 구성"
tags: ["자동생성", "code review", "코드리뷰", "PR", "pull request", "Team", "Enterprise", "2026-10"]
category: "advanced"
order: 29
lastUpdated: "2026-11-18"
---

<div class="note-star">
★ <strong>출처</strong> — 공식 문서 (code.claude.com/docs/en/code-review*) + 마케팅 페이지 (2026-10-15 GA 발표). [공]<br />
★ <strong>Team과 Enterprise 플랜</strong>에서 정식(GA, Generally Available) 출시됐어요.<br />
★ "더 많은 버그를 프로덕션 전에 잡아내세요" — 공식 슬로건이에요.
</div>

## Code Review란? 🔍

**Code Review(코드 리뷰)**는 GitHub PR(풀 리퀘스트, Pull Request)이 열리면 Claude가 자동으로 코드를 검토하고 댓글을 달아주는 기능이에요.

> 💡 **비유**: 경험 많은 선임 개발자가 24시간 대기하면서, PR이 올라오면 즉시 "이 부분 버그 있어요", "더 좋은 방법이 있어요" 같은 리뷰를 달아주는 거예요.

---

## 2026년 10월 — 정식 출시(GA)가 의미하는 것

| 단계 | 의미 |
|------|------|
| 이전 (Research Preview) | 일부 사용자만 베타 사용 |
| 정식 출시 (GA) | Team·Enterprise 모든 사용자가 사용 가능 |

**지원 플랜**:
- ✅ Team ($20/seat/월, 연간)
- ✅ Enterprise (별도 문의)
- ❌ Pro/Max/Individual (공식 미발표 기준 미포함)

---

## 작동 방식

```
1. 개발자가 GitHub에 PR(풀 리퀘스트) 생성
         ↓
2. Claude Code Review가 PR의 diff(변경사항)를 자동 감지
         ↓
3. Claude가 코드를 분석:
   - 버그·로직 오류 체크
   - 보안 취약점 탐지
   - 코드 품질·가독성 제안
         ↓
4. GitHub PR에 인라인 댓글로 리뷰 등록
         ↓
5. 개발자가 리뷰 보고 수정 또는 논의
```

---

## 공식 문서 구성 (6개 페이지로 세분화)

Code Review는 이제 하나의 큰 섹션으로 성장했어요:

| 문서 | 내용 |
|------|------|
| code-review | 개요 |
| code-review-setup | 설정 가이드 |
| code-review-customize | 리뷰 동작 커스터마이징 |
| code-review-pull-requests | PR별 세부 설정 |
| code-review-costs | 비용 관리 |
| code-review-troubleshooting | 문제 해결 |

---

## 빠른 시작 (Team 기준)

### 1단계 — GitHub 연동

Claude Code Desktop 또는 웹에서:
1. Settings → Integrations → GitHub 연결
2. 리뷰를 적용할 레포지토리 선택

### 2단계 — Code Review 활성화

```bash
# 레포지토리 루트에 설정 파일 추가
# .claude/code-review.json
{
  "enabled": true,
  "trigger": "pr_opened",
  "scope": ["src/", "lib/"],
  "language": "ko"
}
```

> ⚠️ 위 설정 형식은 공식 문서 패턴 기반 예시예요. 정확한 설정은 `code-review-setup` 공식 문서를 확인하세요.

### 3단계 — PR 열고 리뷰 확인

PR을 열면 Claude가 자동으로 리뷰를 달아줘요.  
리뷰에 `/autofix` 명령어로 직접 수정도 가능해요.

---

## 로컬 Code Review vs PR Code Review

| | 로컬 (code-review-local) | PR (code-review) |
|--|--|--|
| 시점 | 커밋 전 로컬에서 | PR 생성 후 GitHub에서 |
| 방법 | `claude review` 명령어 | GitHub webhook 자동 실행 |
| 결과 | 터미널 출력 | GitHub PR 인라인 댓글 |
| 플랜 | 개인도 사용 가능 | Team/Enterprise 필요 |

---

## /ultrareview와 차이점

| | Code Review | /ultrareview |
|--|--|--|
| 성격 | 자동화 (PR마다 자동 실행) | 수동 (직접 명령어 입력) |
| 깊이 | 표준 리뷰 | 멀티 에이전트 심층 분석 |
| 비용 | 상대적으로 저렴 | 더 많은 토큰 소모 |
| 적합한 경우 | 일상 PR 리뷰 | 중요 아키텍처 변경 |

---

## 비용 관리 팁

Code Review는 PR마다 토큰을 소모해요. 비용을 줄이려면:

1. **범위 제한**: 전체 코드베이스 대신 중요 디렉토리만 지정
2. **트리거 조건**: 모든 PR이 아닌 특정 브랜치(`main`, `staging`)에만 활성화
3. **파일 크기 제한**: 너무 큰 diff는 분할 처리
4. **비용 예산 설정**: `code-review-costs` 문서의 spend limit 활용

---

## 정리

| 질문 | 답변 |
|------|------|
| 개인 Pro 플랜에서 쓸 수 있나요? | 현재 Team/Enterprise 전용 (공식 발표 기준) |
| 한국어 리뷰 댓글이 가능한가요? | 설정으로 언어 지정 가능 (추정) |
| 모든 언어 지원하나요? | 주요 프로그래밍 언어 지원 (공식 미발표) |
| 기존 리뷰어와 충돌하나요? | Claude 댓글은 별도 계정으로 표시, 사람 리뷰와 공존 |

> 🔗 **공식 문서**: code.claude.com/docs/en/code-review  
> 🔗 **설정 가이드**: code.claude.com/docs/en/code-review-setup
