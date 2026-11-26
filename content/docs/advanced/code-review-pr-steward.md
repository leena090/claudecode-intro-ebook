---
title: "[공] Code Review GA — PR 버그를 AI가 자동으로 잡아줘요"
description: "2026년 10월 정식 출시된 Code Review 기능과 PR Steward, Approvals, /ship 명령어를 입문자 눈높이로 설명합니다"
tags: ["자동생성", "code-review", "pr-steward", "approvals", "ship", "자동화"]
category: "advanced"
order: 24
lastUpdated: "2026-11-26"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/code-review">code.claude.com/docs/en/code-review</a><br />
★ Team·Enterprise 플랜 이상에서 사용 가능 (2026-10-15 GA)
</div>

## "PR 올리기 전에 버그 한 번만 더 확인해주면 좋겠는데…"

혼자 코딩할 때 가장 무서운 건 **내가 놓친 버그가 그대로 메인 브랜치에 들어가는 것**이죠. Code Review 기능이 그 걱정을 덜어줍니다.

> 🔍 **비유로 설명하면**: 출판사 편집자가 원고를 검수하듯, Claude가 여러분의 코드 변경사항을 꼼꼼히 읽고 "이 부분은 오류가 날 것 같아요", "여기는 개선할 수 있어요" 하고 알려줍니다. 직접 고치진 않고, 검수 의견만 제시합니다.

---

## Code Review 기능 패밀리 한눈에 보기

2026년 10월, Code Review가 GA(정식 서비스)로 전환되면서 관련 기능들이 대폭 확장됐습니다.

| 기능 | 역할 | 비유 |
|------|------|------|
| **Code Review** | PR 버그·개선점 자동 감지 | 편집자의 원고 검수 |
| **PR Steward** | PR을 처음부터 끝까지 관리 | 프로젝트 매니저 |
| **Approvals** | PR 승인 흐름 자동화 | 결재 라인 관리자 |
| **/ship 명령어** | PR 준비→제출 한 번에 | 배송 버튼 하나로 택배 발송 |

---

## 1. Code Review — 버그 감지 AI

### 어떻게 쓰나요?

PR(풀 리퀘스트)을 GitHub에 올리면, Claude가 변경된 코드를 읽고 **코멘트**를 답니다.

```
GitHub PR → Claude가 자동 분석 → 인라인 코멘트 작성
```

### 주요 특징
- **심각도 분류**: `important`(중요 버그) / `pre_existing`(기존 버그) / `nit`(소소한 개선)
- **/ultrareview** 명령어: 여러 에이전트가 병렬로 더 꼼꼼히 검토
- `/code-review` 슬래시 명령어로 로컬에서도 실행 가능

> ⚙️ **설정 방법**: 공식 문서 [code-review-setup](https://code.claude.com/docs/en/code-review-setup) 참고

---

## 2. PR Steward — PR 관리 자동화

> 📢 **공식 문서**: `code.claude.com/docs/en/pr-steward`

**PR Steward**(피알 스튜어드)는 단순 리뷰를 넘어 PR 전체 생명주기를 관리합니다.

| 단계 | PR Steward가 하는 일 |
|------|---------------------|
| PR 생성 시 | 자동으로 리뷰 시작, 라벨 추가 |
| 수정 요청 받으면 | 코드 자동 수정 후 재제출 |
| CI 실패 시 | 원인 분석 후 수정 시도 |
| 승인되면 | 머지(병합) 준비 완료 알림 |

> 🤖 **비유**: PR Steward는 비서처럼 PR 처리를 대신해주는 에이전트입니다. 여러분은 "이 기능 추가해줘"라고 말하면, PR 생성부터 승인까지 알아서 처리합니다.

---

## 3. Approvals — 승인 흐름 자동화

> 📢 **공식 문서**: `code.claude.com/docs/en/approvals`

**Approvals**(어프루벌스)는 코드가 메인 브랜치에 들어가기 전 **자동 승인 규칙**을 설정하는 기능입니다.

예를 들어:
- "테스트가 모두 통과해야만 머지 가능"
- "보안 관련 파일 변경은 추가 검토 필요"
- "Claude가 버그 없다고 판단한 경우 자동 승인"

이런 규칙을 코드로 정의해두면, Claude가 자동으로 체크하고 통과/거부를 결정합니다.

---

## 4. /ship 명령어 — 배포 한 방에

> 📢 **공식 문서**: `code.claude.com/docs/en/ship-command`

```
/ship
```

이 명령어 하나로:
1. 현재 작업 내용 → PR 생성
2. Code Review 자동 실행
3. CI 테스트 확인
4. 승인 조건 충족 시 머지

> 🚢 **비유**: 짐 다 싸고 "배송 버튼" 하나 누르면 택배 기사가 와서 가져가는 것처럼요. 복잡한 Git 명령어 없이, `/ship` 하나로 배포 준비 완료.

---

## 🔧 어떻게 시작하나요?

1. **Team 또는 Enterprise 플랜** 필요
2. GitHub 연동 설정 (`/github` 또는 MCP 설정)
3. 공식 설정 가이드: [code-review-setup](https://code.claude.com/docs/en/code-review-setup)

> 💡 **팁**: 처음에는 `/code-review` 명령어로 로컬에서 현재 diff를 리뷰하는 것부터 시작해보세요. 별도 설정 없이도 바로 사용 가능합니다.

---

## 📌 정리

| 나의 상황 | 쓸 기능 |
|-----------|---------|
| PR 올리기 전 한 번 더 검토하고 싶다 | Code Review |
| PR 처리 과정 자동화하고 싶다 | PR Steward |
| 머지 조건을 규칙으로 정해두고 싶다 | Approvals |
| 한 번에 배포 완료하고 싶다 | /ship |

Code Review 기능은 2026년 10월 15일부터 **정식 서비스(GA)**로 전환되어 Team·Enterprise 모든 사용자가 이용할 수 있습니다.
