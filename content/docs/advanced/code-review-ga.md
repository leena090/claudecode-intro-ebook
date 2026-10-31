---
title: "[공] Code Review 정식 출시 — PR 머지 전에 Claude가 버그 잡아준다"
description: "2026-10-15부터 Team·Enterprise에 Code Review 정식 출시. /autofix-pr·/ultrareview와 다른 점, 설정법, 비용 구조까지 입문자 눈높이로 정리"
tags: ["자동생성", "code-review", "코드리뷰", "PR", "Team", "Enterprise", "CI", "버그", "신기능"]
category: "advanced"
order: 24
lastUpdated: "2026-10-31"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/code-review">code.claude.com/docs/en/code-review</a> 공식 문서와 2026-10-15 블로그 발표를 바탕으로 작성했어요.<br />
★ Code Review 기능은 <strong>Team·Enterprise 플랜</strong>에서만 이용 가능합니다 (2026-10-15 GA 기준).<br />
★ 세부 설정은 공식 문서의 <a href="https://code.claude.com/docs/en/code-review-setup">code-review-setup</a>, <a href="https://code.claude.com/docs/en/code-review-customize">code-review-customize</a>를 함께 참고하세요.
</div>

## 이 기능이 뭔가요?

> 🏥 **비유**: 병원에서 수술 전에 반드시 **두 번째 의사가 차트를 검토**하죠. Code Review는 코드를 머지(merge)하기 전에 **Claude가 두 번째 눈**이 되어 버그를 찾아주는 기능이에요.

**Claude Code Review**는 GitHub Pull Request(PR)에 Claude가 자동으로 리뷰 코멘트를 달아주는 기능이에요. 개발자가 PR을 열면, Claude가 코드를 분석해서:
- 잠재적 버그와 엣지 케이스
- 성능 이슈
- 보안 취약점
- 개선 가능한 코드 패턴

...을 코멘트로 알려줘요.

---

## `/ultrareview` · `/autofix-pr`과 어떻게 다른가요?

| 기능 | 언제 실행 | 어디서 | 용도 |
|---|---|---|---|
| **Code Review (신)** | PR 열릴 때 자동 | GitHub PR 화면 | 팀 전체 코드 품질 게이트 |
| `/ultrareview` | 수동 입력 시 | Claude Code CLI | 로컬에서 심층 분석 |
| `/autofix-pr` | 수동 활성화 시 | Claude Code CLI | PR 자동 수정 |

> 💡 **한 마디로**: Code Review는 "CI처럼 PR마다 자동으로 돌아가는 Claude 리뷰어"예요.

---

## 어떻게 설정하나요?

### 1단계: GitHub App 연결

```bash
# Claude Code 설정에서 GitHub 연동
claude settings → Integrations → GitHub → Connect
```

### 2단계: 리포지토리에서 Code Review 활성화

```yaml
# .github/claude/code-review.yml (예시)
code_review:
  enabled: true
  trigger: pull_request  # PR 생성 시 자동 실행
  focus:
    - bugs
    - security
    - performance
```

### 3단계: 팀원이 PR을 열면 자동으로 동작

PR이 열리면 Claude가 몇 분 안에 코멘트를 달아요. 팀원은 평소처럼 GitHub에서 PR 리뷰를 하면 돼요.

> ⚠️ 세부 설정 옵션은 <a href="https://code.claude.com/docs/en/code-review-customize">공식 customize 문서</a>를 확인하세요 (리뷰 포커스, 언어 설정, 제외 파일 등).

---

## 비용은 어떻게 되나요?

> 🏷️ Code Review는 API 토큰을 소비해요. PR 크기에 따라 토큰 사용량이 달라져요.

공식 문서(code-review-costs)에 따르면:
- PR당 코드 변경 규모에 비례해 토큰 소비
- Team·Enterprise 플랜의 공유 크레딧에서 차감
- 조직에서 리뷰 대상 리포지토리·브랜치를 설정해 비용 제어 가능

> 💡 **절약 팁**: 모든 PR에 돌릴 필요 없어요. `main` 브랜치 PR에만 적용하거나, 특정 폴더의 변경이 있을 때만 실행하도록 설정할 수 있어요.

---

## 팀에서 어떻게 활용하면 좋을까요?

### 입문 팀을 위한 추천 단계

```
1단계 (첫 달): 관찰 모드
   → Code Review 활성화, 팀이 코멘트 보고 익숙해지기
   → 얼마나 유용한지, 어떤 종류의 피드백이 오는지 확인

2단계 (두 번째 달): 선택적 적용
   → 중요한 리포지토리(결제, 인증 등)에만 집중 적용
   → 팀 코딩 컨벤션에 맞게 customize

3단계 (정착): 표준 프로세스화
   → "Claude 리뷰 통과"를 PR 머지 조건에 포함
   → 반복 피드백 패턴은 CLAUDE.md에 지침으로 추가
```

---

## 로컬 리뷰 (`/code-review-local`)도 추가됐어요

GitHub PR 외에도, 로컬 환경에서 현재 diff를 바로 리뷰하는 기능이 생겼어요:

```bash
# 현재 작업 중인 변경사항 즉시 리뷰
/code-review-local

# 또는 특정 브랜치와 비교
/code-review-local --base main
```

> 🎯 **언제 유용하냐면**: PR 올리기 전에 "혼자서 먼저 Claude한테 검토받고 싶을 때" 써요. 창피한 실수를 팀에 보내기 전에 걸러낼 수 있어요 😅

---

## 자주 묻는 질문

**Q: Pro 플랜도 쓸 수 있나요?**
A: 아니요, 2026-10-15 기준 **Team·Enterprise 전용**이에요. Pro 사용자는 `/ultrareview`나 `/code-review-local`을 대신 활용하세요.

**Q: Claude가 달아준 코멘트가 틀릴 수도 있나요?**
A: 네, Claude도 실수해요. 특히 도메인 특화 비즈니스 로직은 잘못 판단할 수 있어요. 팀이 최종 판단을 내리는 "보조 검토자" 역할로 활용하는 게 좋아요.

**Q: 한국어로 코멘트가 달리나요?**
A: 설정에서 응답 언어를 지정할 수 있어요. `language: ko` 설정으로 한국어 코멘트도 가능해요.
