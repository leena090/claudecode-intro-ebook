---
title: "[공] 대형 코드베이스·모노레포에서 Claude Code 설정하기"
description: "파일이 수천 개인 큰 프로젝트에서 Claude Code가 헤매지 않게 하는 방법. 중첩 CLAUDE.md, 스파스 워크트리, 코드 인텔리전스, 패키지별 스킬 설정을 초보자 언어로 풀어봐요."
tags: ["자동생성", "모노레포", "monorepo", "대형 코드베이스", "CLAUDE.md", "스파스 워크트리", "sparse worktree", "large codebase"]
category: "advanced"
order: 27
lastUpdated: "2026-05-28"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — code.claude.com/docs/en/large-codebases. <code>[공]</code><br />
★ <strong>대상</strong>: 여러 패키지·팀이 함께 쓰는 큰 프로젝트를 관리하는 분, 또는 처음으로 큰 회사 코드베이스에 입문한 분
</div>

## 대형 코드베이스가 왜 문제가 되나요?

Claude Code는 기본적으로 **현재 디렉터리 전체를 읽어서 이해**하려고 해요. 파일이 수십 개면 괜찮지만, 수천~수만 개면?

> 🍱 **비유**: 서울 전체 지도를 외우고 강남구 카페 하나를 찾는 것과, 처음부터 강남구 지도만 들고 가는 것. 둘 다 찾을 순 있지만 효율이 다르죠.

특히 **모노레포**(monorepo, 모노리포)라고 부르는 형태 — 여러 패키지·서비스가 **하나의 Git 저장소**에 모여 있는 구조 — 에서 이 문제가 두드러져요.

---

## 핵심 해결책 4가지

### 1. 중첩 CLAUDE.md — "각 팀의 팀원 설명서"

`CLAUDE.md` 파일을 **각 패키지 폴더마다 따로** 만들 수 있어요.

```
monorepo/
├── CLAUDE.md          ← 전체 프로젝트 공통 지침
├── packages/
│   ├── frontend/
│   │   └── CLAUDE.md  ← 프론트엔드 전용 지침
│   └── backend/
│       └── CLAUDE.md  ← 백엔드 전용 지침
```

> 🍱 **비유**: 회사 전체 취업규칙(루트 CLAUDE.md)이 있고, 팀별 업무 매뉴얼(패키지별 CLAUDE.md)도 따로 있는 것처럼요.

**예시** — `packages/frontend/CLAUDE.md`:
```markdown
# Frontend Package
- 이 패키지는 React + TypeScript만 씁니다.
- 스타일은 Tailwind CSS 사용. 인라인 style 금지.
- API 호출은 항상 `src/api/` 폴더의 함수만 써요.
- 백엔드 코드(`packages/backend/`)는 직접 수정하지 마세요.
```

클로드는 현재 작업 중인 패키지의 CLAUDE.md를 우선 읽어요.

---

### 2. 스파스 워크트리(Sparse Worktree) — "필요한 파일만 꺼내기"

Git의 **Sparse Checkout** 기능을 활용해서, 실제로 필요한 패키지 파일만 로컬에 꺼내는 방법이에요.

```bash
# 예: frontend 패키지만 꺼내서 작업
git sparse-checkout set packages/frontend shared/utils
```

> 🍱 **비유**: 도서관 전체 책을 책상 위에 올려두는 게 아니라, 오늘 공부할 책 2~3권만 꺼내두는 것.

Claude Code와 함께 쓰면 — 작업 범위가 줄어들어서 더 정확하고 빠른 응답을 받을 수 있어요.

---

### 3. 패키지별 스킬 — "팀마다 다른 자동화 도구"

각 패키지 폴더에 `.claude/skills/` 폴더를 만들어서, **그 패키지에서만 쓸 스킬**을 따로 등록할 수 있어요.

```
packages/backend/
└── .claude/
    └── skills/
        └── run-tests.md  ← 백엔드 전용 테스트 실행 스킬
```

예시 스킬 파일 (`run-tests.md`):
```markdown
---
name: run-tests
description: 백엔드 테스트 실행
---

cd packages/backend && npm test
```

이러면 프론트엔드 작업 중에 백엔드 테스트 스킬이 뜨지 않아요.

---

### 4. 코드 인텔리전스(Code Intelligence) 연동

대형 코드베이스에서 클로드가 "이 함수가 어디서 쓰이는지" 더 잘 파악하게 하려면 **코드 인텔리전스 도구**를 MCP 서버로 연결할 수 있어요.

대표적인 도구: **Sourcegraph**, **tree-sitter**, **ctags** 연동

> 🍱 **비유**: 클로드에게 "책 색인(index)"을 줘서, 전체를 다 읽지 않아도 원하는 내용을 바로 찾게 해주는 것.

설정 예시 (`.claude/mcp.json`):
```json
{
  "mcpServers": {
    "sourcegraph": {
      "command": "sourcegraph-mcp",
      "args": ["--repo", "."]
    }
  }
}
```

---

## 실전 팁 — 대형 코드베이스에서 이렇게 시작하세요

| 상황 | 추천 설정 |
|---|---|
| 처음 온보딩 | 루트 CLAUDE.md에 전체 구조 설명 + 각 패키지 역할 |
| 특정 패키지만 작업 | 패키지별 CLAUDE.md + sparse worktree |
| 팀 공통 작업 기준 | 루트 `.claude/settings.json`에 공통 rules |
| 자주 쓰는 작업 자동화 | 패키지별 `.claude/skills/` |

---

## 자주 하는 실수

❌ **루트에서 클로드에게 모든 패키지 파일 다 읽히기** → 컨텍스트 낭비, 느려짐  
✅ **작업 대상 패키지 폴더로 이동 후 claude 실행**

```bash
# ❌ 비효율적
cd /monorepo
claude "backend API 수정해줘"

# ✅ 효율적
cd /monorepo/packages/backend
claude "API 수정해줘"
```

---

**참고 링크**
- [공식 문서] code.claude.com/docs/en/large-codebases
- [관련] CLAUDE.md 기초 — `config/claude-md.md`
- [관련] 워크트리(Worktrees) — `advanced/worktrees.md`
