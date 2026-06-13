---
title: "[공] 대형 코드베이스에서 Claude Code 설정하기 — 모노레포와 거대한 프로젝트"
description: "수천 개 파일이 있는 모노레포나 대형 단일 프로젝트에서 Claude Code가 헷갈리지 않도록 nested CLAUDE.md, sparse worktree, 코드 인텔리전스를 설정하는 법을 알아봐요"
tags: ["고급", "모노레포", "대형코드베이스", "CLAUDE.md", "sparse-worktree", "자동생성"]
category: "advanced"
order: 22
lastUpdated: "2026-06-13"
---

<div class="note-star">
★ <strong>공식 기능</strong> — 공식 문서 신규 추가 (2026-06). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 대형 코드베이스가 왜 어려울까요?

Claude Code가 코드를 이해하려면 파일을 읽어야 해요. 그런데 프로젝트가 수천 개 파일로 이루어져 있으면 어떨까요?

> 🍱 **비유로 설명하면**: 국립도서관 책 수백만 권 중에서 "요리 레시피 책" 하나를 찾아달라고 하면 어떨까요? 제대로 분류가 안 돼 있으면 도서관 사서도 헷갈리겠죠. Claude Code도 마찬가지예요. 대형 코드베이스에서는 **어디에 무엇이 있는지 지도를 만들어줘야** 해요.

---

## 핵심 전략 3가지

### 1️⃣ Nested CLAUDE.md (중첩 안내 파일)

프로젝트 루트의 `CLAUDE.md` 하나만으로는 모든 하위 패키지를 다 설명하기 어려워요. 각 패키지 폴더 안에도 **폴더별 CLAUDE.md를 추가**하면 돼요.

```
/프로젝트루트/
  CLAUDE.md              ← 전체 프로젝트 안내
  packages/
    frontend/
      CLAUDE.md          ← 프론트엔드 전용 안내
    backend/
      CLAUDE.md          ← 백엔드 전용 안내
    shared-utils/
      CLAUDE.md          ← 공통 유틸 안내
```

각 폴더의 CLAUDE.md에 쓸 내용:
```markdown
# Frontend Package

## 이 패키지 역할
사용자 화면을 담당. React 기반.

## 금지사항
- 백엔드 서비스 직접 호출 금지 (항상 API 레이어 통해서)
- styled-components 대신 Tailwind CSS 사용

## 주요 파일
- src/components/ → 재사용 컴포넌트
- src/pages/ → 페이지 컴포넌트
```

> 🍱 **비유**: 건물 각 층에 안내판이 있는 것처럼 — 1층 안내데스크(루트 CLAUDE.md)에선 전체 안내, 각 층 입구(패키지별 CLAUDE.md)에선 그 층 전용 안내를 해요.

---

### 2️⃣ Sparse Worktree (드문드문 워크트리)

모노레포에서 지금 작업하는 패키지만 골라서 Claude Code에게 보여주는 방법이에요. 수천 개 파일을 다 보여주는 게 아니라 **지금 필요한 부분만** 건네주는 거예요.

```bash
# 예: frontend 패키지만 작업하는 워크트리 만들기
git worktree add ../work-frontend HEAD

# 그 폴더에서 Claude Code 실행
cd ../work-frontend
claude
```

<div class="note-star">
★ Worktree를 쓰면 기존 작업 중인 main 브랜치와 충돌 없이 동시에 여러 작업을 할 수 있어요. <code>[공]</code>
</div>

---

### 3️⃣ 패키지별 Skills (전용 지시사항)

각 패키지에 특화된 Claude의 작업 방식을 정의할 수 있어요.

```
packages/frontend/.claude/skills/
  react-patterns.md      ← React 코딩 패턴 지시
  testing-guide.md       ← 테스트 작성 방식
```

---

## 대형 코드베이스 체크리스트

시작 전에 이것들을 확인하세요:

- [ ] 루트 CLAUDE.md에 전체 구조 설명 작성
- [ ] 각 패키지/모듈별 CLAUDE.md 추가
- [ ] 자주 바뀌지 않는 파일들 `.claudeignore`에 추가
- [ ] 지금 작업하는 패키지만 sparse worktree로 분리

---

## 실전 팁

### 대형 프로젝트에서 Claude에게 첫 메시지 보내는 법

```bash
# ✅ 좋은 방식: 범위를 명확히 알려줘요
> 나는 지금 packages/payment 모듈만 수정할 거야. 
  이 폴더 안의 파일들만 봐주고, 다른 패키지는 건드리지 마.

# ❌ 나쁜 방식: 범위 없이 요청
> 결제 관련 코드 전부 리팩토링해줘
```

### 자주 쓰는 `.claudeignore` 항목

```
# .claudeignore
node_modules/
dist/
build/
.git/
**/*.min.js
**/*.lock
coverage/
```

---

## 더 알아보기

- [공식 문서 — Large Codebases](https://code.claude.com/docs/en/large-codebases)
- [CLAUDE.md 작성법](/docs/config/claude-md)
- [Worktrees 활용법](/docs/advanced/worktrees)
