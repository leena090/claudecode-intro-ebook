---
title: "[공] Code Review 정식 출시 + Projects 기능 — 팀 코딩 한 단계 업 (2026년 9~10월)"
description: "Code Review가 Team·Enterprise에 정식 출시됐어요. Projects 기능으로 여러 에이전트 세션을 한 곳에서 묶어 관리할 수도 있어요"
tags: ["자동생성", "코드리뷰", "Code Review", "Projects", "PR리뷰", "팀기능", "에이전트관리"]
category: "next"
order: 20
lastUpdated: "2026-10-25"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — Code Review(Oct 15)와 Projects(Sep 17)가 나란히 출시. 팀 단위 Claude Code 활용이 본격화됐어요.
<br />★ <strong>Code Review 정식 출시</strong> — Team·Enterprise 플랜에서 GA(정식 출시). "배포 전 더 많은 버그 잡기"가 목표예요.
<br />★ <strong>Projects</strong> — 연관된 코딩 세션을 묶어서 여러 에이전트를 한 화면에서 관리. Claude Code Desktop 전용.
<br />★ <strong>공식 문서</strong>: code.claude.com/docs/en/code-review | code.claude.com/docs/en/claude-projects
</div>

---

## Code Review 정식 출시 (Oct 15, 2026)

### 무슨 기능이에요?

PR(풀 리퀘스트)을 올리면 **Claude가 자동으로 코드를 리뷰해주는 기능**이에요.

> 👓 **비유로 설명하면**: 회사에서 코드를 올리면 선배 개발자가 댓글로 "여기 버그 있을 수 있어요", "이 부분 더 효율적으로 바꿀 수 있어요"라고 알려주는 것처럼, Claude가 자동으로 그 역할을 해줘요.

### 어떻게 작동하나요?

1. GitHub·GitLab에 PR 올림
2. Claude Code가 자동으로 변경된 코드 분석
3. 버그 가능성, 개선 포인트를 PR 댓글로 달아줌
4. 팀원이 검토하고 반영 여부 결정

### 어떤 플랜에서 쓸 수 있어요?

| 플랜 | Code Review |
|---|---|
| Free / Pro / Max | ❌ 미포함 |
| **Team** | ✅ GA 정식 출시 |
| **Enterprise** | ✅ GA 정식 출시 |

> ℹ️ **참고**: 개인 Max 플랜에서도 `/ultrareview` 명령으로 수동 코드 리뷰는 할 수 있어요.

### Code Review 관련 문서 구조 (신규)

공식 문서에 Code Review 전용 페이지가 6개나 새로 생겼어요:

| 문서 | 내용 |
|---|---|
| `code-review` | 개요 |
| `code-review-setup` | 설치·설정 |
| `code-review-customize` | 커스터마이징 |
| `code-review-pull-requests` | PR 워크플로우 |
| `code-review-costs` | 비용 |
| `code-review-troubleshooting` | 문제 해결 |

이렇게 많은 문서가 생겼다는 건 **팀 기능으로 진지하게 자리 잡았다**는 뜻이에요.

---

## Projects 기능 (Sep 17, 2026)

### 무슨 기능이에요?

"연관된 코딩 세션을 묶어서 여러 Claude Code 에이전트를 한 번에 감독할 수 있는 기능"이에요.

> 🗂️ **비유로 설명하면**: 회사에서 "전자상거래 프로젝트" 폴더 안에 "프론트엔드 팀", "백엔드 팀", "QA 팀" 서류를 모아두는 것처럼, Claude Code 세션들을 프로젝트 단위로 묶어서 보는 거예요.

### 어떻게 작동하나요?

1. Claude Code Desktop에서 관련 세션들을 하나의 Project로 묶음
2. 여러 에이전트 세션을 한 화면에서 확인·감독
3. 세션 간 컨텍스트 공유 및 병렬 작업 관리

### 핵심 이점

| 상황 | Projects 없을 때 | Projects 있을 때 |
|---|---|---|
| 동시 에이전트 3개 실행 | 창 3개 따로 관리 | 한 화면에서 통합 감독 |
| 프론트+백엔드 동시 작업 | 세션 간 연결 어려움 | 프로젝트로 묶어 맥락 유지 |
| 장기 작업 현황 파악 | 각 창 일일이 확인 | 요약된 현황 한눈에 |

### 어디서 쓸 수 있어요?

- **Claude Code Desktop 전용** (macOS, Windows, Linux 베타)
- 현재 웹·터미널 버전에서는 미지원 (추정)

---

## 함께 알아두면 좋은 것: claude-security 문서 신규

llms.txt에 `code.claude.com/docs/en/claude-security` 페이지가 새로 추가됐어요. 이름으로 보면 **Claude Security 제품(보안 특화 에디션)** 관련 문서 같아요. (내용 상세는 추정 — 공식 발표 기준 확인 필요)

---

## 9~10월 팀 기능 요약

```
Sep 17   → Projects 출시 (Claude Code Desktop)
Oct 15   → Code Review GA (Team·Enterprise)
```

> 💡 **입문자 관점**: Code Review와 Projects는 팀·기업 사용자를 위한 기능이에요. 혼자 쓰는 분은 `/ultrareview` 명령으로 개인 코드 리뷰를 활용해보세요.
