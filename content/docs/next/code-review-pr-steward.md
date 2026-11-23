---
title: "[공] Code Review GA + PR Steward — PR 버그·수정 자동화"
description: "Code Review는 GitHub PR에서 버그를 자동으로 찾고 인라인 댓글로 알려줘요. PR Steward는 실패한 CI·충돌·리뷰 피드백까지 자동으로 고쳐줘요. Team·Enterprise 정식 출시."
tags: ["자동생성", "신기능", "Code Review", "PR Steward", "GitHub", "Team", "Enterprise", "2026-10"]
category: "next"
order: 17
lastUpdated: "2026-11-23"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Team·Enterprise 정식 출시 (GA). 2026년 10월. <code>[공]</code><br />
👉 Code Review: <a href="https://code.claude.com/docs/en/code-review" target="_blank">code.claude.com/docs/en/code-review</a><br />
👉 PR Steward: <a href="https://code.claude.com/docs/en/pr-steward" target="_blank">code.claude.com/docs/en/pr-steward</a>
</div>

## 두 기능이 한 세트예요

**Code Review**와 **PR Steward**는 함께 쓰면 "PR 올리면 나머지는 Claude가 처리"하는 워크플로를 만들 수 있어요.

> 🏭 **비유**: 공장에서 제품이 나오면 품질검사원(Code Review)이 불량품을 골라내고, 수리팀(PR Steward)이 바로 수정해요. 사람은 최종 승인만 하면 되죠.

---

## Code Review — PR 버그 자동 발견

### 어떻게 동작하나요?

1. 개발자가 GitHub에 PR(Pull Request)을 올려요
2. Claude가 변경된 코드를 자동으로 검토해요
3. 버그·문제가 있으면 **해당 코드 줄에 인라인 댓글**로 알려줘요
4. 개발자가 댓글을 보고 수정 여부를 결정해요

```
📌 PR #123: 결제 모듈 추가
   ✅ 로직 정상
   ⚠️ 134번 줄: 결제 금액이 음수일 때 처리 없음
   ⚠️ 201번 줄: API 키 하드코딩됨 — 환경변수 사용 권장
```

### 직접 리뷰 요청하기

```
PR 댓글에: @claude review
```

이렇게 쓰면 즉시 리뷰가 시작돼요.

### REVIEW.md로 맞춤 설정

프로젝트 루트에 `REVIEW.md` 파일을 만들면 Code Review의 기준을 조정할 수 있어요:

```markdown
# REVIEW.md
## 중점 검사 항목
- SQL 인젝션 취약점
- 한국어 UI 텍스트 일관성

## 무시할 항목
- docs/ 폴더 (문서는 검사 안 함)
- *.test.ts 파일의 console.log
```

### 비용

- **Team·Enterprise** 사용자에게 Usage Credit으로 과금
- `/code-review-costs` 문서에서 예상 비용 확인 가능

---

## PR Steward — PR 자동 수정

### Code Review와의 차이

| 비교 | Code Review | PR Steward |
|-----|------------|-----------|
| 역할 | 문제 **발견** | 문제 **수정** |
| 행동 | 댓글로 알림 | 코드를 직접 고침 |
| CI 실패 처리 | ❌ | ✅ 자동 수정 시도 |
| 머지 충돌 처리 | ❌ | ✅ 자동 해결 시도 |

### 어떻게 동작하나요?

1. PR에 CI 테스트 실패, 머지 충돌, 리뷰 피드백이 생기면
2. PR Steward가 자동으로 세션을 열어서 수정을 시도해요
3. 수정이 완료되면 같은 PR 브랜치에 커밋을 올려요
4. 사람은 최종 검토·승인만 하면 돼요

### PR Steward 시작/중지

```
PR 댓글에 쓰기:
@claude steward start  ← 시작
@claude steward stop   ← 중지
```

또는 PR에 `claude:steward` 라벨을 붙이면 자동 시작!

### 보안 — PR Steward가 할 수 있는 것

| 가능 ✅ | 불가능 ❌ |
|--------|---------|
| 브랜치에 커밋 | 직접 머지 |
| CI 실패 수정 | PR 승인 |
| 머지 충돌 해결 | main 브랜치 직접 푸시 |

---

## Claude Ship — 하나로 묶는 명령어

`/ship` 명령어 하나로 Code Review + PR Steward를 연결해서 쓸 수 있어요:

```
/ship    ← PR 열고, 리뷰받고, 피드백 자동 수정까지
/steward ← 이미 열린 PR에 Steward만 붙이기
```

---

## 사용 조건

| 조건 | 내용 |
|-----|-----|
| 플랜 | **Team 또는 Enterprise** (개인 플랜 미지원) |
| GitHub 연동 | Claude GitHub App 설치 필요 |
| 설정 | 조직 관리자가 활성화해야 함 |

> 💡 **팁**: 혼자 쓰는 개인 플랜이라면 `/code-review` 명령어로 로컬에서 비슷하게 쓸 수 있어요.

---

## 한국 사용자에게 한마디

Code Review와 PR Steward가 정식 출시(GA)되면서, 팀 단위로 Claude Code를 쓰는 가장 큰 이유 중 하나가 생겼어요. "PR 올리면 Claude가 버그 찾고, 고쳐주고, 사람은 OK만 하면 된다"는 워크플로는 개발 속도를 크게 높여줄 거예요. 🚀
