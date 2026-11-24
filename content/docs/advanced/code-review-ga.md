---
title: "[공] Code Review — AI가 PR을 자동으로 검토해요 (정식 출시)"
description: "Team·Enterprise에서 정식 출시된 Code Review 기능. Claude가 풀 리퀘스트(PR)를 자동으로 검토하고 버그를 잡아줘요"
tags: ["자동생성", "Code Review", "코드리뷰", "PR", "풀리퀘스트", "Team", "Enterprise", "2026"]
category: "advanced"
order: 27
lastUpdated: "2026-11-24"
---

<div class="note-star">
★ <strong>[공]</strong> — 2026-10-15 Team·Enterprise 정식(GA) 출시 기준. 공식 문서: <a href="https://code.claude.com/docs/en/code-review">code.claude.com/docs/en/code-review</a><br/>
★ Code Review는 Team·Enterprise 플랜에서만 사용할 수 있어요 (공식 발표 기준).
</div>

## Code Review가 뭔가요?

Claude가 GitHub 풀 리퀘스트(PR, Pull Request)를 자동으로 읽고, 버그나 개선점을 댓글로 달아주는 기능이에요.

> 📋 **비유로 설명하면**: 경험 많은 선배 개발자가 내가 작성한 코드를 24시간 내내 검토해주는 것과 같아요. 근데 그 선배가 절대 피곤해하지 않고, PR이 올라올 때마다 바로바로 봐줘요.

---

## 무엇을 잡아주나요?

```
✅ 버그 (버그, bug) — 잠재적 오류, null 참조, 경계값 문제
✅ 보안 취약점 — SQL 인젝션, XSS 등
✅ 성능 문제 — 불필요한 반복 연산, N+1 쿼리
✅ 코드 스타일 — 팀 규칙 위반
✅ 테스트 누락 — 중요한 케이스가 빠진 경우
```

---

## 어떻게 작동하나요?

```
1. GitHub PR 생성
   ↓
2. Claude가 자동으로 diff(변경 내용) 읽기
   ↓
3. 문제 감지 시 인라인 댓글 작성
   ↓
4. 전체 요약 코멘트 추가
   ↓
5. 개발자가 댓글 확인 후 수정
```

---

## 설정 방법 (간단 요약)

**1단계: GitHub App 설치**
- Claude Code 설정 → Integrations → GitHub Code Review

**2단계: 리포지토리 연결**
- 검토받을 리포지토리 선택

**3단계: PR 열면 자동 작동!**

> 💡 **자세한 설정은** 공식 문서 `code.claude.com/docs/en/code-review-setup`에서 확인하세요.

---

## Code Review 종류

| 종류 | 설명 | 적합한 상황 |
|---|---|---|
| **자동 리뷰** | PR 생성 시 자동 실행 | 모든 PR을 자동 검토할 때 |
| **로컬 리뷰** | 커밋 전에 미리 검토 | push 전에 자체 점검할 때 |
| **UltraReview** | 더 깊은 분석 | 중요한 PR, 복잡한 변경 |

---

## PR Steward와 뭐가 다른가요?

| 기능 | Code Review | PR Steward |
|---|---|---|
| 역할 | 코드 품질 검토 | PR 전체 흐름 관리 |
| 댓글 내용 | 버그·개선점 지적 | 머지 전 체크리스트 |
| 주요 사용자 | 개발팀 | 팀 리더, DevOps |

---

## 비용 참고

Code Review는 토큰을 소비해요. PR 크기에 따라 다르지만, 대부분의 PR은 수천 토큰 정도 사용해요.

> 💰 **비용이 걱정되면**: `code-review-costs` 공식 문서에서 예상 비용 계산기를 제공해요.

---

## 정식 출시 전과 달라진 점 (2026-10-15 기준)

- ✅ Team·Enterprise에서 **정식(GA) 사용 가능**
- ✅ 커스터마이즈 옵션 확대 (어떤 종류의 버그를 중점 검토할지 설정 가능)
- ✅ 공식 Docs에 Setup·Customize·Troubleshooting 가이드 추가
- ✅ 로컬 리뷰(push 전 자체 점검) 기능 추가
