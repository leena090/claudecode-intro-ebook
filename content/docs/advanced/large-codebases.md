---
title: "[공] 대형 코드베이스·모노레포에서 클로드 코드 제대로 쓰기"
description: "프로젝트가 커질수록 클로드가 엉뚱한 파일 읽느라 시간·토큰 낭비가 생겨요. CLAUDE.md 계층화, 읽기 차단, 스파스 체크아웃까지 — 큰 코드베이스 전용 설정 완전 정리"
tags: ["고급", "모노레포", "monorepo", "large codebase", "CLAUDE.md", "claudeMdExcludes", "worktree", "sparsePaths", "code intelligence", "대형 프로젝트", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-05-27"
---

<div class="note-star">
★ <strong>출처</strong>: 공식 문서 <a href="https://code.claude.com/docs/en/large-codebases">code.claude.com/docs/en/large-codebases</a> — [공]<br />
★ <strong>2026-05-27 신규 등재</strong> — 공식 llms.txt에 오늘 처음 나타난 문서입니다<br />
★ 소규모 프로젝트에서도 쓸 수 있는 설정이지만, <strong>파일이 많을수록 효과가 커요</strong>
</div>

## 왜 대형 코드베이스에서는 설정이 필요한가요?

클로드 코드는 기본값이 **소규모 프로젝트 최적화**로 맞춰져 있어요. 파일이 수백 개, 패키지가 수십 개로 늘어나면 두 가지 문제가 생겨요.

> 🍱 **비유로 설명하면**: 책을 쓴다고 해봐요.
> - **소형 프로젝트** → 책 한 권. 클로드에게 "3장 고쳐줘" 하면 책 전체를 훑어봐도 5분이면 끝
> - **대형 프로젝트** → 도서관 한 동. 클로드에게 "3장 고쳐줘" 하면 관련 없는 수백 권까지 다 펼쳐보다가 시간과 토큰이 소진됨

**문제 1: 컨텍스트 낭비** — 지금 작업과 무관한 패키지의 CLAUDE.md가 줄줄이 로드됨  
**문제 2: 파일 읽기 낭비** — 빌드 결과물, 외부 라이브러리, 생성 코드까지 다 읽으려 함

이 가이드는 그 두 문제를 해결하는 설정들을 소개해요.

---

## 한눈에 보는 설정 7가지

| 설정 | 효과 | 설정 위치 |
|---|---|---|
| **CLAUDE.md 계층화** | 관련 패키지 지시만 로드 | 각 디렉토리에 파일 커밋 |
| **claudeMdExcludes** | 안 쓰는 패키지 CLAUDE.md 제외 | `.claude/settings.local.json` |
| **Read deny rules** | 빌드 결과물·외부 코드 읽기 차단 | `.claude/settings.json` |
| **Code intelligence plugin** | 심볼 검색을 언어 서버에 위임 | `/plugin install` |
| **worktree.sparsePaths** | 필요한 폴더만 체크아웃 | `.claude/settings.json` |
| **additionalDirectories** | 다른 패키지에 파일 접근 권한 | `.claude/settings.json` |
| **Per-directory skills** | 패키지별 스킬 분리 적재 | 각 패키지 `.claude/skills/` |

---

## ① CLAUDE.md 계층화 — 핵심 설정

### 문제

루트 하나짜리 CLAUDE.md가 모든 팀, 모든 패키지 규칙을 담으면:
- 내용이 계속 늘어나 수백 줄 → 토큰 낭비
- 또는 너무 간략해서 실용성 없음

### 해결

**루트 CLAUDE.md + 각 패키지(서브디렉토리) CLAUDE.md**로 나눠요.

```
monorepo/
  CLAUDE.md              ← 저장소 전체 공통 규칙
  packages/
    api/
      CLAUDE.md          ← API 패키지 전용 규칙
    web/
      CLAUDE.md          ← 프론트엔드 전용 규칙
    shared/
      CLAUDE.md          ← 공유 라이브러리 전용 규칙
```

> 🍱 **비유**: 회사 전체 규정집(루트) + 팀별 업무 매뉴얼(서브). 영업팀 직원이 개발팀 코드 리뷰 매뉴얼까지 외울 필요 없잖아요.

**클로드가 로드하는 시점**:
- 루트 CLAUDE.md → 시작 시 바로 로드
- packages/api/CLAUDE.md → `packages/api/` 디렉토리 파일을 실제로 읽을 때 자동 로드

`packages/api/`에서 시작하면 → `packages/api/CLAUDE.md` + 루트 CLAUDE.md만 로드 (web, shared는 로드 안 됨)

```markdown
# 루트 CLAUDE.md 예시
이 저장소는 packages/ 아래에 세 패키지가 있습니다:
- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, Tailwind)
- packages/shared: 공유 유틸리티

명령어는 저장소 루트가 아니라 각 패키지 디렉토리에서 실행하세요.
```

```markdown
# packages/api/CLAUDE.md 예시
REST API 서버 패키지입니다.

- 테스트 실행: npm test (Vitest)
- 개발 서버: npm run dev (포트 3001)
- DB 마이그레이션: npm run migrate
- 환경 변수: .env.example → .env 복사 후 사용

API 라우트는 src/routes/에 있습니다.
DB 쿼리는 src/db/의 Knex를 사용하세요. 라우트 핸들러에 raw SQL 직접 금지.
```

> 💡 **팁**: CLAUDE.md도 코드처럼 PR로 관리하세요. 대형 모델 업데이트 후에는 예전 모델의 한계를 보완하던 지시가 불필요해졌을 수 있어요.

---

## ② claudeMdExcludes — 불필요한 CLAUDE.md 제외

내가 절대 작업하지 않는 패키지의 CLAUDE.md가 로드되는 걸 막아요.

```json
// .claude/settings.local.json (git 제외, 개인용)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

> ⚠️ **주의**: 오늘 API 작업, 내일 Web 작업처럼 매일 다른 패키지를 건드린다면 excludes 대신 **해당 패키지 디렉토리에서 claude를 시작**하는 방법이 더 좋아요.

---

## ③ Read deny rules — 빌드 결과물 읽기 차단

`.gitignore`에 등록된 `node_modules/`, `dist/`, `build/`는 이미 검색에서 제외돼요.  
그런데 **git에 커밋된** 외부 SDK나 생성 코드는 기본적으로 읽힐 수 있어요.

```json
// .claude/settings.json (팀 전체 적용 시 커밋)
{
  "permissions": {
    "deny": [
      "Read(./**/dist/**)",
      "Read(./**/build/**)",
      "Read(./**/*.generated.*)",
      "Read(./vendor/**)"
    ]
  }
}
```

> 🍱 **비유**: "이 서랍은 열지 마세요" 표시를 붙이는 것과 같아요. 클로드가 실수로 열려 해도 차단됩니다.

---

## ④ Code intelligence plugin — 파일 스캔 없이 심볼 바로 찾기

대형 코드베이스에서 함수 정의를 찾을 때 파일을 수십 개 grep하는 것 vs 언어 서버(Language Server)에 바로 질문하는 것은 토큰 비용이 크게 달라요.

```
/plugin install typescript-lsp@claude-plugins-official
```

공식 마켓플레이스에서 TypeScript, Python, Go, Rust 등 언어 서버 플러그인을 제공해요.

팀 전체에 적용하려면:
```json
// .claude/settings.json
{
  "enabledPlugins": {
    "typescript-lsp@claude-plugins-official": true
  }
}
```

> 💡 이 설정은 ③번 Read deny rules와 함께 쓰면 더 효과적이에요. 차단으로 불필요한 파일을 제외하고, 언어 서버로 필요한 심볼을 정확히 찾아요.

---

## ⑤ worktree.sparsePaths — 필요한 폴더만 체크아웃

`--worktree` 플래그로 격리된 worktree를 만들 때, 기본으로는 저장소 전체가 체크아웃돼요.  
대형 저장소에서는 수십 초 + 수 GB가 낭비될 수 있어요.

```json
// .claude/settings.json
{
  "worktree": {
    "sparsePaths": [
      ".claude",
      "packages/api",
      "packages/shared"
    ],
    "symlinkDirectories": [
      "node_modules"
    ]
  }
}
```

- `sparsePaths`: 이 폴더들만 디스크에 체크아웃 (루트 레벨 파일은 항상 포함)
- `symlinkDirectories`: `node_modules` 같은 대용량 폴더는 심볼릭 링크로 공유

> 🍱 **비유**: 도서관 전체를 이동하는 대신 "1층 과학 코너 책들만 가져다 줘"라고 요청하는 것과 같아요.

---

## ⑥ additionalDirectories / --add-dir — 다른 패키지 접근 권한

`packages/api/`에서 시작한 클로드는 기본적으로 그 폴더 밖은 읽거나 쓸 수 없어요.  
공유 타입 업데이트처럼 여러 패키지를 함께 건드려야 할 때 필요해요.

**팀 전체 설정 (커밋)**:
```json
// packages/api/.claude/settings.json
{
  "permissions": {
    "additionalDirectories": [
      "../shared",
      "../web"
    ]
  }
}
```

**일회성 (실행 시)**:
```bash
claude --add-dir ../shared
```

| 방법 | CLAUDE.md 로드 | 스킬 로드 |
|---|---|---|
| `additionalDirectories` 설정 | ❌ 로드 안 됨 | ❌ 로드 안 됨 |
| `--add-dir` 플래그 | 환경변수 필요 | ✅ 로드됨 |

`--add-dir`로 추가한 디렉토리의 CLAUDE.md도 읽으려면:
```bash
CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1 claude --add-dir ../shared
```

---

## ⑦ Per-directory skills — 패키지별 스킬 분리

각 패키지/서브시스템 디렉토리에 해당 영역 전용 스킬을 넣어두면, 다른 패키지 작업 중엔 로드되지 않아요.

```
packages/
  api/.claude/skills/api-testing/SKILL.md    ← API 패키지에서만 로드
  web/.claude/skills/component-patterns/SKILL.md  ← Web 패키지에서만 로드
```

스킬 디렉토리 만들기:
```bash
mkdir -p packages/api/.claude/skills/api-testing
```

`packages/api/.claude/skills/api-testing/SKILL.md` 예시:
```markdown
---
name: api-testing
description: packages/api/의 테스트 작성·수정 시 사용. Vitest, supertest 패턴 안내.
---

## 테스트 구조
테스트는 src/__tests__/에 src/와 동일한 구조로 있습니다.

## 실행
- 전체: npm test
- 단일 파일: npm test -- src/__tests__/routes/users.test.ts

## 패턴
- HTTP 검증에는 supertest 사용 (fetch 직접 사용 금지)
- DB 테스트는 롤백 트랜잭션으로 감싸기
```

> 💡 **설명 글에 신경 써요**: 스킬이 많아지면 클로드가 이름+설명으로 어떤 스킬을 쓸지 결정해요. 설명이 길면 중간에 잘려요. "api-testing" 같이 짧고 핵심 키워드를 앞에 둔 설명이 효과적이에요.

---

## 모두 합친 설정 예시

```json
// packages/api/.claude/settings.json (팀 커밋용)
{
  "worktree": {
    "sparsePaths": [".claude", "packages/api", "packages/shared"],
    "symlinkDirectories": ["node_modules"]
  },
  "permissions": {
    "additionalDirectories": ["../shared"],
    "deny": [
      "Read(./**/dist/**)",
      "Read(./**/build/**)"
    ]
  }
}
```

```json
// .claude/settings.json (루트, worktree 세션용)
{
  "permissions": {
    "deny": [
      "Read(./**/dist/**)",
      "Read(./**/build/**)"
    ]
  }
}
```

`packages/api/`에서 시작하면:
- ✅ 루트 + packages/api/ CLAUDE.md 로드 (web, shared는 제외)
- ✅ packages/api/, packages/shared/ 파일 읽기·쓰기 가능
- ✅ dist/, build/ 폴더 읽기 차단
- ✅ api-testing 스킬 사용 가능
- ✅ worktree 생성 시 필요한 폴더만 체크아웃

---

## 여러 패키지 걸친 변경 시 팁

공유 타입 변경 → 모든 호출부 업데이트처럼 패키지를 넘나드는 작업이라면:

1. **한 세션에서 통째로 줘요** — 패키지별로 나눠 주면 결정 일관성이 깨져요
2. **계획을 파일에 저장해요** — `claude --plan > plan.md` 식으로 저장해두면, 긴 세션에서 컨텍스트가 압축돼도 계획은 남아요

---

## 관련 문서

| 문서 | 내용 |
|---|---|
| [CLAUDE.md 설정](/docs/config/claude-md) | CLAUDE.md 작성 방법 기초 |
| [Worktrees 활용](/docs/advanced/worktrees) | 격리 worktree 전체 가이드 |
| [플러그인 마켓플레이스](/docs/advanced/plugin-marketplace) | 언어 서버 플러그인 설치 |
| [권한 모드](/docs/advanced/permission-modes) | 파일 접근 권한 설정 |
