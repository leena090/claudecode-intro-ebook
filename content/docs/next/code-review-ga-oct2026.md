---
title: "[공] Code Review 기능 일반 공개 (GA): Team·Enterprise 사용자라면 꼭 써보세요"
description: "Claude Code의 AI 코드 리뷰가 Team과 Enterprise 플랜에서 공식 출시. /code-review 명령어로 PR 올리기 전에 버그를 잡아드립니다"
tags: ["자동생성", "코드리뷰", "code-review", "팀플랜", "엔터프라이즈", "2026", "신기능"]
category: "next"
order: 18
lastUpdated: "2026-11-03"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 2026년 10월 15일 Team·Enterprise에서 일반 공개(GA). <code>[공]</code>
</div>

## AI가 내 코드를 리뷰해준다고요?

Claude Code의 **Code Review 기능**이 2026년 10월 15일부터 **Team·Enterprise 플랜에서 정식 공개(GA)** 됐어요.

> 🔍 비유하자면, 경험 많은 선임 개발자가 내 코드를 꼼꼼히 훑어보고 "여기 버그 있어요", "이 부분 개선할 수 있어요"라고 조언해주는 것과 같아요. 그런데 이게 AI로 자동화됩니다.

---

## Code Review 종류 3가지

Claude Code는 코드 리뷰를 **세 가지 방식**으로 제공해요.

| 방식 | 명령어 | 특징 |
|------|--------|------|
| **로컬 리뷰** | `/code-review` | 현재 변경 사항을 로컬에서 빠르게 리뷰 |
| **울트라 리뷰** | `/ultrareview` | 클라우드 멀티 에이전트로 더 깊은 리뷰 |
| **GitHub 코드 리뷰** | GitHub 연동 | PR을 올리면 자동으로 AI가 리뷰 댓글 추가 |

---

## 1️⃣ 로컬 코드 리뷰 (`/code-review`)

가장 빠르게 쓸 수 있는 방식이에요. 현재 작업 중인 변경 사항을 Claude가 바로 검토해 줍니다.

```bash
# 현재 diff를 리뷰
/code-review

# 특정 파일 대상 리뷰
/code-review src/payment.js

# PR 번호 대상 리뷰
/code-review 42
```

### 리뷰 단계 조절하기

```bash
# 간단하게 (빠름)
/code-review low

# 보통 수준
/code-review medium

# 꼼꼼하게 (추천)
/code-review high

# 최고로 꼼꼼하게 (시간 걸림)
/code-review max
```

> 💡 처음엔 `medium`으로 시작하고, 중요한 PR에는 `high`를 써보세요.

---

## 2️⃣ 울트라 리뷰 (`/ultrareview`)

여러 AI 에이전트가 동시에 코드를 검토하는 **클라우드 기반 심층 리뷰**예요.

```bash
/ultrareview
```

- 버그, 성능, 보안, 가독성을 각각 다른 에이전트가 검토
- 더 넓은 범위의 문제 발견 가능
- 시간이 더 걸리지만 결과가 더 상세함

> ⚠️ 추정: `/ultrareview`는 소비량이 많으므로 큰 PR이나 중요한 릴리즈 직전에 사용하는 것이 경제적입니다 (공식 사용 가이드 참조).

---

## 3️⃣ GitHub 자동 리뷰 (`/autofix-pr`)

PR을 열면 Claude가 **자동으로 리뷰 댓글**을 달아주는 방식이에요.

```bash
# PR 자동 수정 활성화
/autofix-pr
```

활성화하면:
1. GitHub에 PR을 올릴 때마다 Claude가 자동 리뷰
2. 버그나 개선점이 있으면 인라인 댓글로 알려줌
3. 수정 제안을 바로 적용할 수도 있음

> 🤝 팀과 함께 쓸 때 특히 유용해요. 모든 PR에 자동으로 AI 리뷰어가 붙는 셈이니까요.

---

## 어떤 플랜에서 쓸 수 있나요?

| 기능 | Pro | Max | Team | Enterprise |
|------|-----|-----|------|------------|
| 로컬 `/code-review` | ✅ | ✅ | ✅ | ✅ |
| `/ultrareview` | ✅ | ✅ | ✅ | ✅ |
| GitHub 자동 리뷰 | — | — | ✅ | ✅ |

> 💡 GitHub 자동 리뷰 기능은 2026년 10월 15일부터 **Team·Enterprise에서 일반 공개(GA)**됐어요.

---

## 실제로 어떻게 써볼까요? (입문자 가이드)

### 1단계: 코드 작성 후 리뷰 요청

```bash
# 1. 파일 수정 후 Git diff가 있는 상태에서
/code-review medium

# Claude가 아래와 같이 응답합니다:
# ⚠️ payment.js:42 — 이중 클릭 시 중복 결제 가능
# 💡 auth.js:15 — 에러 처리가 없어요
# ✅ db.js — 문제 없음
```

### 2단계: 발견된 문제 수정

Claude가 알려준 문제를 직접 수정하거나, "고쳐줘"라고 부탁할 수 있어요.

```bash
# Claude에게 수정 요청
지금 발견한 중복 결제 버그 수정해줘
```

### 3단계: 최종 확인 후 PR 올리기

---

## 정리

```
📌 Code Review 사용 가이드

빠른 점검 → /code-review medium
중요한 릴리즈 → /code-review high 또는 /ultrareview
팀 협업 자동화 → /autofix-pr (Team·Enterprise)
```

> 🏷️ 출처: code.claude.com 공식 문서 (code-review-local, ultrareview, code-review). 2026-10-15 GA 발표 기준. GitHub 자동 리뷰는 Team·Enterprise 전용.
