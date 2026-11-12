---
title: "[공] Code Review — Claude가 PR을 직접 리뷰해요 (2026 GA)"
description: "2026년 10월 Team·Enterprise 정식 출시. Claude가 PR을 열어 버그를 잡고 인라인 코멘트를 남기는 Code Review 기능 완전 가이드"
tags: ["자동생성", "코드 리뷰", "code review", "PR", "GitHub", "팀", "enterprise", "2026"]
category: "advanced"
order: 27
lastUpdated: "2026-11-12"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — Claude가 PR(풀 리퀘스트)을 보고 버그를 찾아 인라인 코멘트를 남겨요. 2026년 10월 Team·Enterprise에서 GA(정식 출시)됐어요. <code>[공] 공식 문서 기준</code>
</div>

## Code Review가 뭔가요?

> 🔍 **비유로 설명하면**: 경험 많은 선배 개발자가 내가 올린 코드를 24시간 아무 때나 꼼꼼히 봐주는 것과 같아요. "여기 버그 있어요", "이 부분 개선하면 좋겠어요" 하고 GitHub PR에 직접 코멘트를 달아줘요.

Code Review는 Claude가:
1. GitHub·GitLab PR을 자동으로 감지
2. 코드를 분석해서 버그·개선점 찾기
3. **인라인 코멘트** 형태로 PR에 직접 피드백 남기기

**이전에도 `/code-review` 명령어는 있었지만**, 이번 GA(정식 출시) 버전은 더 깊이 통합됐어요.

---

## 어디서 사용할 수 있어요?

| 플랜 | Code Review |
|---|---|
| Pro / Max | ❌ (개인 플랜은 미지원) |
| **Team** | ✅ **GA (정식 출시)** |
| **Enterprise** | ✅ **GA (정식 출시)** |

> 💡 2026년 10월 15일 Team·Enterprise에서 정식 출시됐어요. `[공] 마케팅 발표 기준`

---

## Code Review 설정하기

공식 문서에 따르면 Code Review 설정은 여러 단계로 나뉘어요:

### 1단계: 기본 설정
- `code.claude.com/docs/en/code-review-setup` 문서 참고
- GitHub App 또는 GitLab 연동 필요

### 2단계: 커스터마이징
- `code.claude.com/docs/en/code-review-customize` 참고
- 어떤 파일·폴더를 검토할지, 어떤 종류의 버그를 중점 체크할지 설정

### 3단계: PR과 연동
- `code.claude.com/docs/en/code-review-pull-requests` 참고
- PR이 생성되면 자동으로 Claude가 리뷰 시작

---

## `/ultrareview` vs Code Review — 차이점

| 기능 | `/ultrareview` | Code Review (GA) |
|---|---|---|
| 위치 | 로컬 CLI 명령어 | GitHub·GitLab PR 통합 |
| 실행 방식 | 직접 실행 | 자동 트리거 |
| 출력 | 터미널 | PR 인라인 코멘트 |
| 플랜 | 클라우드 멀티에이전트 | Team·Enterprise |

> 💡 `/ultrareview`는 로컬에서 쓰는 강력한 CLI 리뷰 도구, Code Review GA는 팀 협업에 맞게 GitHub·GitLab에 직접 통합되는 형태예요.

---

## 로컬 Code Review (`/code-review`)

혼자 쓸 때는 로컬 `/code-review` 명령어도 있어요:

```bash
# 현재 diff 리뷰
/code-review

# 특정 파일 대상
/code-review src/payments/

# 노력도 설정 (low/medium/high/xhigh/max)
/code-review high
```

| 명령 | 설명 |
|---|---|
| `/code-review` | 현재 변경된 파일 리뷰 |
| `/code-review --comment` | PR에 코멘트로 결과 올리기 |
| `/code-review --fix` | 발견된 문제 자동 수정 |
| `/ultrareview` | 클라우드 멀티에이전트로 더 깊은 리뷰 |

---

## 비용 주의사항

Code Review를 쓸 때 토큰 소비를 고려해야 해요:
- 큰 PR일수록 더 많은 토큰 사용
- `/ultrareview`는 여러 에이전트가 동시에 돌아서 비용이 더 높아요
- 팀 플랜에서는 **공유 API 크레딧** ($500/월 풀 크레딧) 안에서 소비돼요

> 자세한 비용 계산은 `code.claude.com/docs/en/code-review-costs` 참고

---

## 공식 문서 목록

- 개요: `code.claude.com/docs/en/code-review`
- 설정: `code.claude.com/docs/en/code-review-setup`
- 커스터마이징: `code.claude.com/docs/en/code-review-customize`
- PR 연동: `code.claude.com/docs/en/code-review-pull-requests`
- 비용: `code.claude.com/docs/en/code-review-costs`
- 문제 해결: `code.claude.com/docs/en/code-review-troubleshooting`
- 로컬 리뷰: `code.claude.com/docs/en/code-review-local`
