---
title: "[공] Code Review — AI가 PR 버그를 먼저 잡아주는 기능 (Team·Enterprise GA)"
description: "Claude Code의 Code Review 기능을 쓰면 PR을 올리기 전에 AI가 버그·보안 문제를 자동으로 찾아줘요. 2026년 10월 Team·Enterprise 정식 출시!"
tags: ["자동생성", "코드리뷰", "code review", "PR", "버그", "보안", "Team", "Enterprise"]
category: "advanced"
order: 27
lastUpdated: "2026-11-09"
---

<div class="note-star">
★ <strong>공식 출시</strong> — 2026년 10월 15일 Team·Enterprise 정식 공개(GA). 개인 Pro/Max 사용자는 별도 확인 필요. <code>[공]</code><br />
★ <code>/code-review</code> 슬래시 명령어와 GitHub PR 연동 두 가지 방식을 지원해요.
</div>

## Code Review가 뭔가요?

Pull Request(PR)를 올리기 **전** 또는 올린 **직후**에 클로드가 코드 전체를 읽고 **버그·보안 취약점·성능 문제**를 자동으로 찾아주는 기능이에요.

> 🔍 **비유**: 직접 운전하다가 고속도로 나가기 전에 정비소에서 "오일·타이어·브레이크" 점검을 받는 것과 같아요. 도중에 차가 고장나는 것보다, 출발 전에 미리 발견하는 게 훨씬 싸고 안전하잖아요.

---

## 사용 방법

### 방법 1 — 터미널에서 `/code-review`

```bash
# 현재 변경사항(staged/unstaged) 리뷰
/code-review

# 특정 파일만 리뷰
/code-review src/payment/checkout.ts

# PR 번호 직접 지정 (GitHub 연동 시)
/code-review 142

# 리뷰 강도 설정 (low·medium·high·xhigh·max)
/code-review high

# 버그만 / 단순화도 함께
/code-review --max-findings 10
```

### 방법 2 — GitHub PR 자동 리뷰

1. GitHub Actions 워크플로에 Claude Code 연동 설정
2. PR을 올리면 자동으로 Claude가 인라인 코멘트로 리뷰 결과 게시
3. 팀원이 리뷰하기 전에 AI 1차 검토 완료

```yaml
# .github/workflows/code-review.yml 예시
name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          command: code-review
```

---

## 리뷰 결과 읽는 법

```
📋 Code Review 결과 예시
━━━━━━━━━━━━━━━━━━━━━━━
[HIGH] src/checkout.ts:42
  createCharge()가 호출될 때마다 새 idempotency key를 생성해요.
  → 버튼 더블클릭 시 중복 결제 발생 가능.
  제안: checkout session 단위로 key를 한 번만 생성하세요.

[MEDIUM] src/auth.ts:17
  JWT 만료 검사를 >, >=로 처리하면 경계값에서 1초 취약점.
  → 현재 시각과 정확히 같을 때 통과될 수 있어요.

[LOW] src/utils.ts:88
  for 루프 대신 Array.map()으로 단순화 가능.
━━━━━━━━━━━━━━━━━━━━━━━
```

| 심각도 | 의미 | 즉시 수정? |
|---|---|---|
| **HIGH** | 버그·보안 취약점 | ✅ 반드시 |
| **MEDIUM** | 잠재적 문제 | 권장 |
| **LOW** | 단순화·효율 개선 | 선택 |

---

## `/ultrareview` — 클라우드 멀티 에이전트 심층 리뷰

일반 `/code-review`보다 **훨씬 더 꼼꼼한** 리뷰가 필요할 때 써요. 여러 AI 에이전트가 병렬로 코드를 분석해요.

```bash
/ultrareview
# → 10~20분 소요, 더 많은 토큰 사용
# → 복잡한 보안 감사, 대규모 리팩토링 전 사용 추천
```

> ⚠️ `/ultrareview`는 비용이 많이 드니 중요한 릴리스 전이나 보안이 중요한 코드에만 써요.

---

## Code Review 설정 커스터마이징

```bash
# CLAUDE.md에 프로젝트별 리뷰 기준 추가 예시
## Code Review 규칙
- payment/ 폴더는 항상 보안 중심으로 리뷰
- 테스트 파일은 LOW 이슈 무시
- Python 코드는 PEP 8 위반도 체크
```

---

## 자주 묻는 질문

**Q: 리뷰가 너무 길어요. 줄일 수 있나요?**
```bash
/code-review low --max-findings 5
# → 가장 심각한 5개만 보고
```

**Q: 특정 파일은 리뷰에서 빼고 싶어요.**
```bash
# .claudeignore 파일에 추가
generated/
*.test.ts
vendor/
```

**Q: PR에 자동으로 코멘트 달게 하려면?**
```bash
/code-review --comment
# → GitHub PR에 인라인 코멘트로 자동 게시
```

---

## 연관 문서
- [GitHub Actions 연동](../../codeweb/)
- [Permission Modes — 자율성 조절](permission-modes.md)
- [ultrareview 심층 리뷰](ultraplan.md)
