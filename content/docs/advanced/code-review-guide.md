---
title: "[공] Code Review — Claude가 PR을 자동으로 리뷰해줘요"
description: "Claude Code의 Code Review 기능이 2026년 10월 Team·Enterprise에 정식 출시됐어요. AI가 PR을 열면 자동으로 버그·품질 문제를 잡아줍니다"
tags: ["자동생성", "코드리뷰", "code-review", "PR", "GitHub", "자동화", "팀기능"]
category: "advanced"
order: 36
lastUpdated: "2026-11-25"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com/docs/en/code-review 계열 신규 문서 기반. 세부 설정 옵션은 추정 포함.
<br />★ 2026-10-15 <strong>Team·Enterprise 정식(GA) 출시</strong> 확인됨.
</div>

## Code Review가 뭔가요?

> 🔍 **비유로 설명하면**: 평소에 혼자 코드 짜고 셀프 검토하다가 팀장한테 올리죠? Code Review는 **Claude가 팀장 역할**을 해줘요. PR 열리는 순간 자동으로 "이 부분 버그 날 것 같아요", "여기 보안 취약점이에요" 하고 알려줘요.

GitHub에서 Pull Request를 열면 Claude Code가 자동으로:
- 🐛 **버그 가능성** 검사
- 🔒 **보안 취약점** 탐지
- 📐 **코드 품질** 평가
- 💬 **인라인 코멘트** 작성

---

## 어느 플랜에서 쓸 수 있나요?

| 플랜 | Code Review |
|---|---|
| 개인 Pro/Max | ❌ |
| **Team** | ✅ **GA (2026-10-15)** |
| **Enterprise** | ✅ **GA (2026-10-15)** |
| API 직접 사용 | 별도 설정 필요 (추정) |

> 💡 **Team 플랜부터** 사용 가능해요. 1인 개발자는 아직 지원 안 돼요.

---

## 어떻게 작동해요?

```
GitHub에서 PR 열기
      ↓
Claude Code가 자동 감지
      ↓
코드 변경분(diff) 분석
      ↓
PR 코멘트로 리뷰 결과 게시
```

> 🏭 **비유**: 공장에서 컨베이어 벨트에 물건이 올라오면 품질 검사기가 자동으로 돌아가는 것처럼, PR이 올라오면 Claude가 자동으로 검사해요.

---

## 로컬 코드 리뷰도 가능해요

PR을 올리기 전에 **로컬에서 미리** 리뷰받는 `code-review-local` 기능도 추가됐어요 (추정).

```bash
# 로컬에서 현재 변경사항 리뷰 (추정 명령어)
claude review

# 특정 파일만 리뷰 (추정)
claude review src/payments.ts
```

---

## 리뷰 커스터마이즈

`code-review-customize` 기능으로 팀 스타일에 맞게 조정 가능 (추정):

```yaml
# .claude/code-review.yml (추정 설정 파일명)
focus:
  - security      # 보안 최우선
  - performance   # 성능 체크
skip:
  - style_guide   # 스타일은 린터에게 맡김
severity_threshold: warning  # 경고 이상만 코멘트
```

> ⚙️ 커스터마이즈 옵션 세부사항은 공식 문서 확인 권장: `code.claude.com/docs/en/code-review-customize`

---

## /ultrareview 와의 차이

| | Code Review | /ultrareview |
|---|---|---|
| 작동 방식 | PR 자동 트리거 | 수동 명령어 |
| 에이전트 수 | 단일 (추정) | 멀티 에이전트 |
| 대상 | PR diff | 전체 코드베이스 |
| 속도 | 빠름 | 느림(심층 분석) |
| 비용 | 상대적 저렴 | 높음 |

---

## 비용은 얼마나 들어요?

공식 문서에 `code-review-costs` 페이지가 별도로 존재해요. 대략:
- PR 크기(diff 줄 수)에 비례
- Team 플랜 풀 크레딧에서 차감
- 작은 PR(50줄 미만)은 매우 저렴 (추정)

> 💰 정확한 비용은 `code.claude.com/docs/en/code-review-costs` 참조

---

## 처음 설정하는 법

1. **GitHub App 설치** — Anthropic의 GitHub App을 레포에 추가 (추정)
2. **Team/Enterprise 플랜 확인**
3. `.claude/settings.json`에서 Code Review 활성화 (추정)
4. 테스트 PR 열어서 자동 리뷰 확인

> 📖 자세한 설정: `code.claude.com/docs/en/code-review-setup`

---

*출처: [공] code.claude.com/docs/en/code-review 계열 (2026-11-25 신규 감지). 마케팅: "Code Review: GA for Team and Enterprise" (Oct 15, 2026). 세부 옵션은 추정 포함.*
