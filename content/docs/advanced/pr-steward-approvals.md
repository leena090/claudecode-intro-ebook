---
title: "[공] PR Steward·Approvals — PR 관리와 자동 승인 에이전트"
description: "PR Steward는 PR을 24시간 감시하는 에이전트예요. Approvals는 정책에 맞는 PR을 자동 승인해요. 둘 다 2026년 11월 기준 신규 공식 문서에서 확인됐어요"
tags: ["자동생성", "PRSteward", "Approvals", "PR", "GitHub", "자동화", "팀기능"]
category: "advanced"
order: 37
lastUpdated: "2026-11-25"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com/docs/en/pr-steward, approvals 계열 신규 문서 기반.
<br />★ 세부 작동 방식은 URL 구조로 추정한 내용 포함 — 공식 문서에서 최종 확인 권장.
</div>

## PR Steward란?

> 🛡️ **비유로 설명하면**: 아파트 경비원처럼 항상 대기하다가, 패키지(PR)가 오면 체크하고, 위험한 게 있으면 알려주고, 안전한 건 통과시켜 줘요.

**PR Steward**는 GitHub PR 흐름을 24시간 감시하는 Claude Code 에이전트예요:

- 📬 PR이 열리면 자동으로 체크
- 🔍 보안·품질·정책 위반 탐지
- 📢 이슈 발견 시 담당자 알림
- ✅ 안전한 PR 흐름 가속

---

## Approvals란?

> 🤖 **비유**: 회사에서 소액 결재는 팀장이 도장 안 찍어도 자동 승인되는 것처럼, 정해진 조건을 만족하는 PR은 Claude가 자동으로 승인해줘요.

**Approvals**는 정책 기반 자동 승인 시스템이에요:

- 📋 미리 정의한 정책(policy)에 맞는 PR 자동 승인
- 🔧 GitHub 브랜치 보호 규칙(branch protection rules)과 연동
- 🏷️ 분류기(classifiers)로 PR 유형 자동 판별
- 🚦 위험도에 따른 차등 승인

---

## PR Steward vs Approvals — 뭐가 달라요?

| 기능 | PR Steward | Approvals |
|---|---|---|
| 주 역할 | PR 감시·보호 | 자동 승인 |
| 작동 방식 | 이상 탐지 후 알림 | 정책 체크 후 승인 |
| 보안 초점 | 높음 | 중간 |
| 자동화 수준 | 감시 중심 | 액션 중심 |

> 함께 쓰면 강력해요 — Steward가 감시하고, Approvals가 처리해요.

---

## 어떻게 설정해요?

### PR Steward 설정

```bash
# 1. GitHub App 연결 (추정)
# 2. 레포에 PR Steward 활성화 (추정 — 공식 가이드: code.claude.com/docs/en/pr-steward-setup)
```

보안 고려사항은 별도 문서 `pr-steward-security`에서 다루고 있어요:
- 토큰 최소 권한 원칙
- 민감한 코드 접근 제한
- 감사 로그(audit log) 설정

### Approvals 설정

```yaml
# 정책 정의 예시 (추정 설정 형식)
# code.claude.com/docs/en/approvals-policy 참조

auto_approve_when:
  - all_tests_pass: true
  - no_security_issues: true
  - changed_files: ["docs/**", "tests/**"]  # 위험도 낮은 파일만
  
require_human_review:
  - any_security_issue: true
  - changed_files: ["src/auth/**", "src/payments/**"]  # 중요 파일
```

---

## GitHub 브랜치 룰 연동

`approvals-github-rules` 문서에서 다루는 연동 방식 (추정):

```
GitHub Branch Protection Rules
      ↓
Approvals Classifiers가 PR 분류
      ↓
정책(Policy)에 맞으면 자동 승인
정책에 안 맞으면 사람 리뷰 요청
```

> 🔑 GitHub의 "Required approvals" 설정과 함께 써야 의미 있어요.

---

## 분류기(Classifiers)란?

`approvals-classifiers`는 PR을 자동으로 분류하는 머신러닝 기반 도구예요 (추정):

| 분류 | 예시 |
|---|---|
| 🟢 저위험 | 문서 수정, 테스트 추가 |
| 🟡 중위험 | 로직 변경, 의존성 업데이트 |
| 🔴 고위험 | 인증·결제·보안 코드 변경 |

---

## 이런 팀에게 유용해요

- 🏃 **빠른 배포 필요한 스타트업** — 간단한 PR은 사람 대기 없이 즉시 머지
- 🏢 **대규모 팀** — PR 폭주할 때 Steward가 우선순위 정리
- 🔒 **보안 중요한 서비스** — 위험한 변경만 사람이 보고, 나머지는 자동화

---

*출처: [공] code.claude.com/docs/en/pr-steward, approvals 계열 (2026-11-25 신규 감지). 작동 방식 세부사항은 URL 구조 기반 추정 포함.*
