---
title: "[공] PR Steward · Code Review · Approvals · Ship — GitHub 자동화 완전 정리"
description: "코드 리뷰, PR 감시, 승인 정책, /ship 명령어까지. 2026년 하반기 클로드 코드의 GitHub 자동화 기능 4총사를 한국어로 정리합니다"
tags: ["자동생성", "PR Steward", "Code Review", "Approvals", "Ship", "GitHub", "PR", "자동화", "팀플랜"]
category: "advanced"
order: 27
lastUpdated: "2026-11-27"
---

<div class="note-star">
★ <strong>[공]</strong> Code Review GA 발표: <a href="https://code.claude.com/docs/en/code-review">code.claude.com</a> (Oct 15, 2026, Team·Enterprise 정식 출시)<br />
★ <strong>[공]</strong> PR Steward 공식 문서: <a href="https://code.claude.com/docs/en/pr-steward">code.claude.com/docs/en/pr-steward</a><br />
★ <strong>[공]</strong> Approvals 공식 문서: <a href="https://code.claude.com/docs/en/approvals">code.claude.com/docs/en/approvals</a><br />
★ <strong>[공]</strong> Ship Command 공식 문서: <a href="https://code.claude.com/docs/en/ship-command">code.claude.com/docs/en/ship-command</a>
</div>

## 한 줄 요약

클로드가 이제 GitHub PR을 혼자서 감시하고, 리뷰하고, 승인하고, 머지까지 도와줍니다. 사람은 방향만 잡아줘도 돼요.

> 🏢 **비유**: 회사에 꼼꼼한 직원을 뽑았어요. 이 직원은 24시간 GitHub를 보면서 "이 PR 리뷰해야 할 것 같은데요?", "여기 버그 있어요", "승인 조건 충족됐어요" — 이런 말을 해줘요. 여러분은 최종 OK만 하면 됩니다.

---

## 기능 4총사 한눈에 보기

| 기능 | 역할 | 대상 플랜 |
|------|------|-----------|
| **Code Review** | AI가 PR에서 버그·문제점 자동 감지 | Team·Enterprise (GA) |
| **PR Steward** | PR 전체 라이프사이클 자동 감시 | Team·Enterprise (추정) |
| **Approvals** | 조직 맞춤 승인 정책 자동 적용 | Enterprise (추정) |
| **Ship Command** | `/ship`으로 머지까지 원스텝 처리 | Team·Enterprise (추정) |

> ⚠️ **플랜 정보**: 각 기능의 정확한 플랜 조건은 공식 문서에서 확인하세요. 위 표는 현재 공개된 정보 기준 추정입니다.

---

## 1. Code Review — 버그 잡는 AI 리뷰어

**Code Review**는 클로드가 PR을 열면 자동으로 코드를 훑어보고 문제점을 찾아주는 기능이에요.

> 🔍 **비유**: 꼼꼼한 선배가 코드를 보면서 "이 부분 null 체크 빠졌는데?", "여기 성능 문제 생길 수 있어" 라고 미리 알려주는 것이에요.

### 주요 기능

- **자동 리뷰**: PR이 열리면 클로드가 자동으로 코드 분석
- **버그 감지**: 로직 오류, 보안 취약점, 성능 문제 등 감지
- **로컬 리뷰**: 푸시 전에 로컬에서도 먼저 리뷰 가능 (`code-review-local`)
- **비용 관리**: 리뷰 비용 모니터링 기능 포함

### 설정 방법

```bash
# 공식 문서 참조
# https://code.claude.com/docs/en/code-review-setup
```

> 2026년 10월 15일 **Team·Enterprise 정식 출시(GA)**됐어요. 이전에는 베타였어요.

---

## 2. PR Steward — PR 전담 감시자

**PR Steward**는 Code Review보다 더 넓은 범위를 담당해요. PR이 열리는 순간부터 머지되는 순간까지 전 과정을 클로드가 감시해요.

> 👮 **비유**: Code Review가 "코드 보는 사람"이라면, PR Steward는 "PR 전체를 담당하는 담당자"예요. 체크리스트 관리, 리뷰어 연락, 충돌 감지까지 다 해요.

### 주요 문서 구조 (공식)

| 문서 | 내용 |
|------|------|
| `pr-steward` | 개요 및 개념 |
| `pr-steward-setup` | 초기 설정 방법 |
| `pr-steward-pull-requests` | PR 처리 흐름 |
| `pr-steward-security` | 보안 고려 사항 |
| `pr-steward-troubleshooting` | 문제 해결 |

---

## 3. Approvals — 조직 맞춤 승인 정책

**Approvals**는 "어떤 조건에서 PR을 자동 승인할 수 있는지" 를 정의하는 기능이에요.

> 🗂️ **비유**: 회사 결재 시스템이에요. "50만원 미만은 팀장 승인, 500만원 이상은 임원 승인" 처럼, PR도 "파일 수 10개 이하, 테스트 통과 시 자동 승인" 같은 규칙을 만들 수 있어요.

### 주요 문서 구조 (공식)

| 문서 | 내용 |
|------|------|
| `approvals` | 개요 |
| `approvals-setup` | 초기 설정 |
| `approvals-pull-requests` | PR 승인 흐름 |
| `approvals-github-rules` | GitHub 규칙 연동 |
| `approvals-policy` | 정책 작성 가이드 |
| `approvals-classifiers` | 자동 분류 기준 |
| `approvals-troubleshooting` | 문제 해결 |

---

## 4. Ship Command — 한 번에 배포까지

**Ship Command**는 `/ship` 명령어로 "리뷰 → 승인 → 머지" 과정을 한 번에 처리해주는 기능이에요.

> 🚀 **비유**: 마트에서 "셀프 계산대" 처럼, 클로드에게 `/ship`이라고 하면 나머지 절차를 대신 처리해줘요.

```bash
# 예시 (공식 문서 참조)
/ship
```

---

## 어떤 플랜이 필요한가요?

마케팅 페이지 기준:

| 기능 | 개인 | Team | Enterprise |
|------|------|------|------------|
| Code Review | ❌ | ✅ GA | ✅ GA |
| PR Steward | ❌ | 추정 ✅ | ✅ |
| Approvals | ❌ | 추정 ❌ | 추정 ✅ |
| Ship Command | ❌ | 추정 ✅ | ✅ |

> ⚠️ Approvals와 Ship Command의 정확한 플랜 조건은 **공식 문서 기준**으로 확인하세요.

---

## 정리

2026년 하반기에 클로드 코드의 GitHub 연동이 크게 강화됐어요. 혼자 개발하는 분보다는 **팀 단위로 개발하는 분**에게 더 유용한 기능들이에요. Code Review는 이제 Team 플랜에서 정식 사용 가능합니다.

**공식 문서**: [code.claude.com/docs/en/code-review](https://code.claude.com/docs/en/code-review)
