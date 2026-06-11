---
title: "[공] 대형 코드베이스·모노레포에서 Claude Code 쓰기"
description: "수백만 줄짜리 프로젝트나 여러 패키지가 모인 모노레포에서 Claude Code가 필요한 부분만 집중하도록 설정하는 가이드"
tags: ["monorepo", "모노레포", "대형코드베이스", "CLAUDE.md", "settings", "worktree", "자동생성"]
category: "advanced"
order: 28
lastUpdated: "2026-06-11"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong>. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 왜 설정이 필요해요?

프로젝트가 커질수록 **Claude의 컨텍스트 창**이 관련 없는 내용으로 꽉 찰 수 있어요. `packages/api`를 수정하는데 `packages/web` 의 규칙이나 파일까지 불러온다면, Claude가 헤매고 비용도 올라가요.

> 🍱 **비유**: 레스토랑 주방에서 일하는데 냉장고에 전체 식자재가 가득 쌓여있으면 오늘 점심 메뉴 재료 찾기가 어렵잖아요. 오늘 필요한 재료만 꺼내놓으면 훨씬 빠르게 요리할 수 있는 것처럼요.

---

## 1. CLAUDE.md 파일을 폴더별로 나누기

하나의 루트 `CLAUDE.md`에 모든 규칙을 넣으면 관련 없는 내용도 항상 불러와요. **폴더마다 CLAUDE.md를 두면** Claude가 해당 폴더 작업할 때만 관련 규칙을 불러요.

```text
monorepo/
  CLAUDE.md              ← 전체 공통 규칙
  packages/
    api/
      CLAUDE.md          ← API 전용 규칙
    web/
      CLAUDE.md          ← 프론트엔드 전용 규칙
    shared/
      CLAUDE.md          ← 공유 라이브러리 규칙
```

**루트 CLAUDE.md 예시:**
```markdown
이 프로젝트는 packages/ 아래에 3개 패키지가 있어요:
- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, Tailwind)
- packages/shared: 공통 TypeScript 유틸리티

명령어는 반드시 패키지 폴더 안에서 실행하세요 (루트 아님).
```

**`packages/api/CLAUDE.md` 예시:**
```markdown
- 테스트 실행: `npm test`
- 개발 서버: `npm run dev` (포트 3001)
- DB 마이그레이션: `npm run migrate`
- API 라우트는 src/routes/, DB 쿼리는 src/db/ 에만 작성
```

`packages/api`에서 Claude를 시작하면 루트 + api CLAUDE.md만 불러오고, web의 CLAUDE.md는 불러오지 않아요. `[공]`

---

## 2. 관련 없는 CLAUDE.md 제외하기

루트에서 Claude를 시작하는데 특정 팀의 패키지 규칙은 볼 필요가 없다면 `claudeMdExcludes` 로 제외할 수 있어요.

```json
// .claude/settings.local.json (내 컴퓨터에서만 적용)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

<div class="note-circle">
○ <code>settings.local.json</code> 은 git에 커밋되지 않아요 (개인 설정용)<br />
○ 패턴은 절대 경로 기준이라 <code>**/</code> 로 시작해야 해요
</div>

---

## 3. 불필요한 파일 읽기 차단하기

빌드 결과물(`dist/`, `build/`)이나 자동 생성 파일을 Claude가 실수로 열지 않도록 막을 수 있어요.

```json
// .claude/settings.json (팀 전체 공유용)
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

> 🍱 **비유**: 도서관 사서에게 "이 책장은 보지 마세요" 라고 표시해두는 것처럼요 — Claude가 그 파일들을 건너뛰어요.

---

## 4. 다른 패키지 접근 허용하기

`packages/api`에서 시작했는데 `packages/shared`도 수정해야 할 때:

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

또는 실행할 때 한 번만:
```bash
claude --add-dir ../shared
```

---

## 5. Worktree 생성 시 필요한 폴더만 체크아웃하기

기본으로 `--worktree`를 쓰면 전체 저장소가 체크아웃돼서 느릴 수 있어요. `worktree.sparsePaths`로 필요한 폴더만 지정하면 훨씬 빠르게 시작해요.

```json
// packages/api/.claude/settings.json
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

> 🍱 **비유**: 회사에서 오늘 필요한 서류만 가방에 챙겨가는 것처럼요 — 전체 서류함을 들고 다니지 않아요.

`symlinkDirectories`로 `node_modules`를 심볼릭 링크로 처리하면 여러 worktree가 같은 패키지를 공유해 디스크도 절약돼요.

---

## 6. 폴더별 Skills 추가하기

`packages/api` 전용 테스트 패턴은 `packages/web` 작업할 때 불필요해요. **폴더 안에 Skills를 두면** 해당 폴더 작업 시에만 불러와요.

```bash
mkdir -p packages/api/.claude/skills/api-testing
```

```markdown
# packages/api/.claude/skills/api-testing/SKILL.md
---
name: api-testing
description: packages/api 테스트 작성·수정 시 사용하는 패턴
---

- 테스트: src/__tests__/ 폴더 (src/ 미러 구조)
- DB 테스트: setupTestDb() / teardownTestDb() 사용 (트랜잭션 롤백)
- HTTP 테스트: supertest 사용 (raw fetch 사용 금지)
- 외부 서비스 모킹: src/__tests__/mocks/
```

---

## 설정 조합 예시 (모노레포 완성본)

```text
monorepo/
  CLAUDE.md
  .claude/settings.json                    ← worktree 세션용 deny 규칙
  packages/
    api/
      CLAUDE.md
      .claude/settings.json                ← worktree + additionalDirs + deny
      .claude/skills/api-testing/SKILL.md
    web/
      CLAUDE.md
      .claude/skills/component-patterns/
    shared/
      CLAUDE.md
```

```json
// packages/api/.claude/settings.json (팀 공유)
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

`packages/api`에서 시작하면:
- ✅ 루트 + api CLAUDE.md만 불러옴 (web은 제외)
- ✅ `packages/api/` + `packages/shared/` 읽기·쓰기 가능
- ✅ `dist/`, `build/` 폴더는 안 열림
- ✅ api-testing 스킬 온디맨드 로드
- ✅ worktree는 api + shared + .claude만 체크아웃 (빠름)

<div class="note-circle">
○ 팀 전체 규칙은 <code>.claude/settings.json</code> 에 커밋<br />
○ 개인 설정은 <code>.claude/settings.local.json</code> (gitignore됨)<br />
○ 프로젝트 settings.json 은 시작 디렉토리에서만 불러와요 — 부모 폴더 settings는 상속 안 됨
</div>
