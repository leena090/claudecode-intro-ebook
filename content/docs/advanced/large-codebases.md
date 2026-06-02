---
title: "[공] 대형 코드베이스 & 모노레포 설정 — 클로드가 헷갈리지 않게 범위 줄이기"
description: "수십만 줄 코드나 여러 패키지 묶음(모노레포)에서 Claude Code가 효율적으로 작동하도록 CLAUDE.md 계층화·claudeMdExcludes·sparsePaths 등 핵심 설정 정리"
tags: ["고급", "모노레포", "large-codebases", "CLAUDE.md", "sparsePaths", "claudeMdExcludes", "additionalDirectories", "자동생성"]
category: "advanced"
order: 28
lastUpdated: "2026-06-02"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — 2026-06-02 신규 문서. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 왜 대형 코드베이스에선 특별 설정이 필요한가요?

코드베이스가 커질수록, Claude는 **관계없는 파일·지시사항**을 컨텍스트 창에 잔뜩 채우게 돼요. 그러면:

- 토큰 낭비 → **비용 증가**
- 필요한 정보가 밀려남 → **성능 저하**

> 🍱 **비유로 설명하면**: 요리사한테 "파스타 레시피 알려줘"라고 했는데, 요리사가 도서관 책 3,000권을 다 책상에 올려놓고 찾기 시작하는 거예요. 처음부터 요리 코너 책만 가져오면 훨씬 빠른데요. 이 설정들은 "필요한 책만 가져오게" 하는 방법이에요.

---

## 설정 한눈에 보기

| 하고 싶은 것 | 사용할 설정 |
|------------|-----------|
| 지금 작업하는 폴더의 규칙만 읽게 | CLAUDE.md 계층화 |
| 안 쓰는 패키지의 CLAUDE.md는 무시 | `claudeMdExcludes` |
| 빌드 결과물·자동생성 파일은 읽지 말게 | `permissions.deny` Read 규칙 |
| 큰 저장소에서 필요한 폴더만 체크아웃 | `worktree.sparsePaths` |
| 다른 패키지나 저장소 파일도 편집하게 | `additionalDirectories` / `--add-dir` |
| 폴더마다 전용 지식·절차 넣기 | 디렉토리별 스킬 |

---

## 1. CLAUDE.md 계층화 — 필요한 지시사항만

큰 코드베이스의 문제 중 하나는 **하나의 CLAUDE.md에 모든 규칙을 다 넣는 것**이에요. 프론트엔드 작업 중인데 백엔드 API 규칙까지 읽어야 하면 낭비예요.

**해결책**: 폴더마다 각자의 CLAUDE.md를 만드세요.

```
내 프로젝트/
  CLAUDE.md                     ← 전체 공통 규칙
  packages/
    api/
      CLAUDE.md                 ← API 전용 규칙
    web/
      CLAUDE.md                 ← 프론트엔드 전용 규칙
    shared/
      CLAUDE.md                 ← 공통 유틸리티 규칙
```

**Claude가 CLAUDE.md를 읽는 방식:**
- `packages/api/`에서 시작하면 → `packages/api/CLAUDE.md` + 루트 `CLAUDE.md`만 읽음
- `packages/web/CLAUDE.md`는 **읽지 않음** (지금 작업과 무관)

> 🍱 **비유**: 지역별 담당 직원처럼 — 서울 담당자는 서울 업무 매뉴얼만 읽고 일해요. 부산 매뉴얼까지 외울 필요 없어요.

**루트 CLAUDE.md 예시:**
```markdown
# 전체 공통 규칙
이 저장소에는 packages/ 아래 세 개의 패키지가 있어요:
- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, TailwindCSS)
- packages/shared: 두 패키지가 공유하는 TypeScript 유틸리티

명령어는 루트가 아닌 각 패키지 폴더에서 실행하세요.
```

**packages/api/CLAUDE.md 예시:**
```markdown
# API 패키지 전용 규칙
- 테스트 실행: npm test (Vitest 사용)
- 개발 서버: npm run dev (포트 3001)
- DB 마이그레이션: npm run migrate
- API 라우트는 src/routes/ 안에 있어요.
- DB 쿼리는 src/db/ 의 Knex를 써요. 라우트 핸들러에 직접 SQL 문자열 쓰지 마세요.
```

---

## 2. `claudeMdExcludes` — 안 쓰는 패키지 CLAUDE.md 무시하기

루트에서 Claude를 시작하면, 어느 폴더든 파일을 읽는 순간 그 폴더의 CLAUDE.md가 컨텍스트에 들어와요. **다른 팀이 관리하는 패키지나 레거시 코드**의 CLAUDE.md는 무시하고 싶을 때:

```json
// .claude/settings.local.json (개인용, git에 올리지 않음)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

> 🍱 **비유**: 회사 전체 업무 매뉴얼 중 "다른 부서 거"를 미리 제외하고 내 책상에 올려두는 것처럼 — 나는 내 부서 것만 봐요.

**패턴 예시:**
- `"**/packages/*/CLAUDE.md"` — 모든 패키지 CLAUDE.md 제외 (루트는 유지)
- `"**/packages/web/**"` — web 패키지 전체 제외

<div class="note-circle">
○ <code>settings.local.json</code>은 gitignore로 자동 제외 → 개인 설정이에요.<br />
○ 팀 공통으로 적용하려면 <code>settings.json</code>에 넣어서 커밋하세요.
</div>

---

## 3. Read 거부 규칙 — 빌드 파일·자동생성 코드 차단

`node_modules/`, `dist/`, `build/` 같은 폴더는 `.gitignore`에 있으면 자동 제외돼요. 하지만 **체크인된 자동생성 코드나 외부 SDK**는 별도로 막아야 해요.

```json
// .claude/settings.json (팀 공통으로 커밋)
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

> 🍱 **비유**: 창고에 있는 물건은 다 팔 수 있지만, "외주 납품 제품"이라고 표시된 선반은 건드리지 말라고 규칙을 정해두는 것처럼 — 클로드가 읽지 않아야 할 파일에 "접근 금지" 표지를 붙이는 거예요.

---

## 4. `worktree.sparsePaths` — 필요한 폴더만 체크아웃

`--worktree` 옵션으로 격리된 작업 공간을 만들 때, 기본적으로 **전체 저장소**를 체크아웃해요. 수천 개의 파일이 있는 저장소라면 느릴 수 있어요.

`sparsePaths`로 필요한 폴더만 체크아웃하세요:

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

> 🍱 **비유**: 원격 근무하러 사무실 물건을 집에 가져갈 때, 필요한 서류 2개만 챙기는 것처럼 — 전체 서류함(저장소)을 다 들고 가지 않아도 돼요.

- `symlinkDirectories`: `node_modules`처럼 큰 폴더는 **복사 대신 바로가기**로 연결해서 디스크 절약
- `.claude`를 꼭 포함하세요 — 설정 파일이 워크트리 안에서도 동작하려면 필요해요

---

## 5. `additionalDirectories` — 다른 패키지 파일도 수정하기

`packages/api/`에서 Claude를 시작했는데, `packages/shared/`의 파일도 함께 수정해야 할 때:

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

또는 시작할 때 바로 지정:
```bash
# packages/api/ 폴더에서
claude --add-dir ../shared
```

> 🍱 **비유**: 내 사무실(packages/api/)에서 일하는데, 오늘은 옆 사무실(packages/shared/) 서류도 꺼내 볼 권한이 필요한 것처럼.

---

## 6. 디렉토리별 스킬 — 폴더 전용 지식 추가

각 폴더에 **그 영역에만 필요한 작업 절차나 패턴**을 스킬로 넣을 수 있어요.

```
packages/
  api/
    .claude/skills/
      api-testing/
        SKILL.md     ← API 테스트 작성 방법
  web/
    .claude/skills/
      component-patterns/
        SKILL.md     ← 컴포넌트 작성 패턴
```

`packages/api/`에서 작업할 때는 `api-testing` 스킬만 로드돼요. `component-patterns`는 로드되지 않아요.

```markdown
<!-- packages/api/.claude/skills/api-testing/SKILL.md -->
---
name: api-testing
description: API 패키지에서 테스트를 쓰거나 수정할 때 사용하는 패턴
---

## 테스트 파일 위치
테스트는 src/__tests__/에 있고 src/ 구조를 그대로 따라요.

## 실행 방법
- 전체: npm test
- 단일 파일: npm test -- src/__tests__/routes/users.test.ts
```

---

## 어디서 Claude를 시작하느냐가 중요해요

| 시작 위치 | Claude가 접근하는 파일 | 로드되는 CLAUDE.md |
|-----------|---------------------|-------------------|
| 저장소 루트 | 전체 파일 | 루트 CLAUDE.md만 (하위 폴더는 접근 시 추가) |
| 하위 폴더 (예: `packages/api/`) | 그 폴더만 | 해당 폴더 + 모든 상위 폴더 CLAUDE.md |

> **팁**: 특정 패키지 작업만 할 때는 루트가 아닌 **해당 패키지 폴더에서 시작**하세요. 불필요한 컨텍스트를 줄일 수 있어요.

---

## 설정 한 번에 보기 (예시: packages/api/)

```json
// packages/api/.claude/settings.json
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

이 설정 하나로:
- 워크트리는 api + shared만 체크아웃
- node_modules는 바로가기로 연결 (디스크 절약)
- shared 폴더 파일도 편집 가능
- 빌드 결과물은 읽지 않음

---

## 한 줄 요약

> 큰 코드베이스에서 Claude가 느리거나 엉뚱한 파일을 건드린다면:  
> **CLAUDE.md를 폴더별로 나누고, 필요 없는 건 `claudeMdExcludes`로 막고, 빌드 파일은 `deny`로 차단하세요.**

---

## 더 알아보기

- [공식 문서 — Large codebases](https://code.claude.com/docs/en/large-codebases)
- [CLAUDE.md & 메모리](/docs/config/permissions-guide) — CLAUDE.md 기본 사용법
- [스킬 가이드](/docs/config/skills-guide) — 디렉토리별 스킬 만들기
- [워크트리](/docs/advanced/worktrees) — 병렬 작업 격리
