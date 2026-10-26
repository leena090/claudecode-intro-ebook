---
title: "[공] Code Review 정식 출시 — PR을 AI가 자동으로 검토해줘요"
description: "GitHub PR마다 여러 AI 에이전트가 병렬로 버그를 찾고, 검증 후 인라인 댓글로 알려주는 Code Review가 Team·Enterprise에 정식 출시됐어요 (2026년 10월 GA)"
tags: ["자동생성", "code-review", "PR", "GitHub", "team", "enterprise", "2026"]
category: "next"
order: 17
lastUpdated: "2026-10-26"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/code-review">code.claude.com/docs/en/code-review</a><br />
★ Team·Enterprise 플랜 전용. 마케팅 페이지 기준 2026년 10월 15일 정식 출시(GA).
</div>

## Code Review가 뭔가요?

GitHub에 PR(풀 리퀘스트)을 올리면 **Claude가 여러 에이전트를 동원해 자동으로 코드를 검토**하고, 발견한 버그나 문제를 인라인 댓글로 남겨주는 기능이에요.

> 🍱 **비유**: 코드를 제출하면 시니어 개발자 여럿이 각자 다른 관점에서 읽고 검토한 다음, "여기 이 부분은 이런 상황에서 버그가 생길 수 있어요"라고 포스트잇을 붙여놓는 것과 같아요. 그것도 10분 안에요.

---

## 어떻게 작동하나요?

검토는 **4단계 파이프라인**으로 진행돼요:

```
1️⃣ 찾기(Find)    → 여러 에이전트가 diff + 주변 코드 병렬 분석
2️⃣ 검증(Verify)  → 후보 발견 사항을 코드로 재확인, 오탐 제거
3️⃣ 순위화(Rank)  → 중복 제거 + 심각도 순 정렬
4️⃣ 게시(Post)    → PR에 인라인 댓글 + 요약 + 체크런 남기기
```

> 🍱 **비유**: 초안 글에서 맞춤법 오류를 찾는 것처럼요. 먼저 여러 명이 각자 읽고 → 의심스러운 부분 표시 → 다시 한번 확인해서 오탐 제거 → 최종 댓글로 알려주기.

---

## PR에서 볼 수 있는 것

검토가 끝나면 PR에 자동으로 추가돼요:

| 항목 | 내용 |
|------|------|
| **인라인 댓글** | 해당 코드 줄에 직접 달리는 발견 사항 |
| **체크런** | "Claude Code Review" 이름으로 생성, 상세 결과 포함 |
| **요약** | 전체 검토 결과 요약 (이슈 없으면 별도 알림) |

⚠️ **중요**: Code Review는 PR을 승인하거나 차단하지 않아요 — 머지 결정은 팀에게 있어요.

---

## 검토 레벨 3가지

| 레벨 | 특징 | 비용 |
|------|------|------|
| **Quick** | 가볍게 훑어봄 | 가장 저렴 |
| **Standard** | 균형 잡힌 깊이 (기본값) | 중간 |
| **Deep** | 가장 철저한 검토 | 가장 비쌈 |

> 중요한 서비스 코드에는 Deep, 일상적인 수정에는 Standard나 Quick을 쓰면 돼요.

---

## 언제 자동으로 검토가 시작되나요?

관리자가 설정한 방식에 따라 달라져요:

| 설정 | 검토 시작 시점 |
|------|--------------|
| PR 열릴 때 | PR 생성 시 1회 |
| 매 푸시마다 | 코드 변경할 때마다 |
| 요청 시에만 | `@claude review` 댓글 입력 시 |

### `@claude review` 댓글로 수동 요청

```
# PR 댓글에 입력하면 바로 검토 시작
@claude review
```

---

## 사용 조건 확인

| 조건 | 요구 사항 |
|------|----------|
| 플랜 | **Team 또는 Enterprise** 필수 |
| 코드 호스트 | **GitHub** (GitHub Enterprise Server/Cloud 포함) |
| 제외 | Zero Data Retention·HIPAA 설정 조직 불가 |
| 실행 위치 | Anthropic 인프라 (자체 호스팅 환경 아님) |

---

## /code-review vs Code Review — 뭐가 달라요?

헷갈릴 수 있는데, Claude Code에는 비슷한 이름의 기능이 두 개 있어요:

| 구분 | `/code-review` (슬래시 명령) | **Code Review** (이 기능) |
|------|------------------------|--------------------------|
| 시작 방법 | Claude Code 세션에서 직접 실행 | PR 자동 또는 `@claude review` |
| 실행 위치 | 내 세션의 서브에이전트 | Anthropic 인프라 |
| 대상 | 현재 브랜치 | GitHub PR |
| 플랜 제한 | 누구나 사용 가능 | Team/Enterprise 전용 |

> 개인 플랜이라면 `/code-review` 명령어로, 팀·기업 플랜이라면 자동 Code Review 서비스를 활용하세요.

---

## 관리자 설정 방법 (간략)

1. Claude 조직의 **Owner**가 GitHub App 설치
2. 검토할 **레포지토리** 선택
3. **검토 레벨** 및 **자동 실행 시점** 설정
4. (선택) **월 예산 한도** 설정으로 비용 관리

자세한 설정 방법: [code.claude.com/docs/en/code-review-setup](https://code.claude.com/docs/en/code-review-setup)

---

## 주의 사항

<div class="note-circle">
○ Code Review는 AI가 검토하는 것이므로 모든 버그를 찾아내지 못할 수 있어요<br />
○ "이슈 없음" 결과가 코드가 완벽하다는 의미는 아니에요<br />
○ REVIEW.md 파일로 검토 기준을 커스터마이즈할 수 있어요<br />
○ 공개 발표 기준: 2026년 10월 15일 Team·Enterprise GA
</div>
