---
title: "[공] 대형 프로젝트·모노레포에서 Claude Code 쓰기 — 덜 보고 더 정확하게"
description: "코드베이스가 크면 Claude가 엉뚱한 파일까지 읽어 토큰을 낭비해요. 디렉토리별 CLAUDE.md, claudeMdExcludes, 스파스 워크트리 등으로 Claude의 시야를 딱 필요한 곳만 좁히는 법"
tags: ["자동생성", "모노레포", "대형프로젝트", "CLAUDE.md", "설정", "worktree", "sparsePaths"]
category: "config"
order: 12
lastUpdated: "2026-05-26"
---

> **[공] 공식 문서 기반** · 출처: [code.claude.com/docs/en/large-codebases](https://code.claude.com/docs/en/large-codebases)

## 큰 프로젝트에서 Claude가 느려지는 이유

Claude Code는 코드베이스 어디서든 잘 작동하지만, 프로젝트가 커질수록 **관련 없는 파일까지 읽으면서** 토큰이 낭비되고 답변 품질이 떨어져요.

> 🛒 **비유로 설명하면**: 마트에서 "우유 사와줘"라고 부탁했는데, 직원이 1층부터 4층까지 전 매장을 훑고 나서야 우유를 찾아오는 것과 같아요. 미리 "유제품은 2층 냉장 코너"라고 알려주면 훨씬 빠르죠. 이 페이지는 Claude에게 **"지금 일하는 코너만 봐"** 라고 알려주는 설정들을 모은 가이드예요.

이 페이지에서 배울 설정들 한눈에:

| 원하는 것 | 사용하는 설정 |
|---|---|
| 지금 작업 중인 폴더 규칙만 로드 | **디렉토리별 CLAUDE.md** |
| 안 쓰는 패키지 지침은 로드 안 함 | **`claudeMdExcludes`** |
| 빌드 결과물·외부 라이브러리 읽기 차단 | **Read deny rules** |
| 심볼 정의를 파일 다 뒤지지 않고 찾기 | **코드 인텔리전스 플러그인** |
| 워크트리 생성 시 필요한 폴더만 체크아웃 | **`worktree.sparsePaths`** |
| 다른 패키지 파일도 수정하기 | **`--add-dir`** |
| 폴더별 전용 스킬 | **디렉토리별 Skills** |

---

## 1. 디렉토리별 CLAUDE.md 계층화

### 왜 필요한가요?

프로젝트 루트에 CLAUDE.md 파일 하나만 두면 두 가지 문제가 생겨요:
- 팀 전체 규칙을 다 넣다 보면 파일이 너무 길어져요
- 지금 `packages/api/`에서 작업 중인데 `packages/web/` 규칙까지 Context(컨텍스트)에 올라와요

해결책은 **폴더마다 CLAUDE.md를 따로 두는 것**이에요. Claude는 시작 위치부터 루트까지 모든 CLAUDE.md를 읽고, 작업 중인 하위 폴더의 CLAUDE.md도 필요할 때 자동으로 읽어요.

### 구조 예시

```text
내-프로젝트/
  CLAUDE.md                     ← 전체 공통 규칙
  packages/
    api/
      CLAUDE.md                 ← API 서버 전용 규칙
    web/
      CLAUDE.md                 ← 프론트엔드 전용 규칙
    shared/
      CLAUDE.md                 ← 공유 라이브러리 전용 규칙
```

**루트 CLAUDE.md** — 전체에 적용되는 규칙:
```markdown
# 프로젝트 구조
packages/ 아래에 3개 패키지가 있어요:
- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, TailwindCSS)
- packages/shared: api·web이 공통으로 쓰는 TypeScript 유틸

명령은 각 패키지 디렉토리 안에서 실행하세요.
```

**packages/api/CLAUDE.md** — API 전용 규칙:
```markdown
# API 패키지 규칙
- 테스트 실행: `npm test` (Vitest)
- 개발 서버: `npm run dev` (포트 3001)
- DB 마이그레이션: `npm run migrate`

API 라우트는 src/routes/ 안에 있어요. SQL 문자열 직접 작성 금지, Knex를 쓰세요.
```

`packages/api/`에서 Claude를 시작하면:
- ✅ 루트 CLAUDE.md + packages/api/CLAUDE.md → 로드
- ❌ packages/web/CLAUDE.md → 로드 안 함 (관련 없으므로)

> 💡 **팁**: CLAUDE.md 파일은 Git에 커밋하세요. 팀원들이 같은 지침을 공유할 수 있어요.

> 🔄 **CLAUDE.md를 최신 상태로 유지하려면**: PR 리뷰 때 CLAUDE.md 수정도 함께 검토하고, 큰 모델 업데이트 후에는 오래된 지침이 없는지 점검해보세요. `Stop` 훅(훅)을 써서 세션이 끝날 때 Claude가 CLAUDE.md 업데이트를 자동 제안하게 할 수도 있어요.

---

## 2. claudeMdExcludes — 특정 CLAUDE.md 파일 제외

루트에서 Claude를 시작하면 작업 중인 폴더의 CLAUDE.md가 하나씩 로드돼요. **내가 절대 작업하지 않는 팀의 패키지**는 아예 로드에서 제외할 수 있어요.

```json
// .claude/settings.local.json (이 파일은 Git에 안 올라가요 — 개인 설정)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

패턴 예시:

| 패턴 | 효과 |
|---|---|
| `**/packages/*/CLAUDE.md` | 모든 패키지의 CLAUDE.md 제외 (루트만 유지) |
| `**/packages/web/**` | web 패키지 전체 제외 (rules 파일 포함) |
| `/home/user/monorepo/legacy/CLAUDE.md` | 특정 파일 절대경로로 제외 |

> ⚠️ **주의**: `claudeMdExcludes`는 **고정된 목록**이에요. 오늘은 api, 내일은 web에서 작업한다면, 이 설정 대신 **직접 해당 폴더에서 Claude를 시작하는 게** 더 좋아요.

---

## 3. Read deny rules — 빌드 결과물·외부 라이브러리 읽기 차단

`.gitignore`에 있는 `node_modules/`, `dist/`, `build/`는 Claude가 자동으로 검색 결과에서 제외해요. 하지만 **Git에 커밋된 외부 라이브러리나 자동 생성 파일**은 직접 차단해야 해요.

```json
// .claude/settings.json (팀 전체 적용)
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

이 설정을 하면 Claude가 `dist/`, `build/`, `.generated.` 파일들을 읽으려 해도 차단돼요. `cat`, `head`, `grep`, `find` 같은 Bash(배쉬) 명령도 마찬가지예요.

> ⚠️ **한계**: 특정 경로가 검색 결과 목록에 나오는 건 막지 못해요. 파일을 **열어서 읽는** 것만 차단해요.

---

## 4. 코드 인텔리전스 플러그인 — 심볼 찾기를 빠르게

큰 코드베이스에서 `UserService`가 어디서 정의됐는지 찾으려면 Claude가 파일을 여러 개 뒤져야 해요. **코드 인텔리전스(Code Intelligence) 플러그인**을 설치하면 Language Server(언어 서버)를 통해 바로 정의로 이동하고 참조를 찾아요.

```
/plugin install typescript-lsp@claude-plugins-official
```

TypeScript(타입스크립트), Python(파이썬), Go(고), Rust(러스트) 등 주요 언어를 지원해요. 팀 전체에 적용하려면 `.claude/settings.json`에 추가:

```json
{
  "enabledPlugins": {
    "typescript-lsp@claude-plugins-official": true
  }
}
```

> 🔑 **필요 조건**: 언어별 Language Server 바이너리가 각 개발자 PC에 설치되어 있어야 해요. (예: TypeScript는 `typescript-language-server`)

---

## 5. worktree.sparsePaths — 워크트리 생성 시 필요한 폴더만

`--worktree` 플래그로 격리된 작업 공간을 만들 때, 기본적으로 **전체 저장소**를 복사해요. 큰 저장소에서는 오래 걸리죠. `sparsePaths`(스파스 패스)를 쓰면 **필요한 폴더만** 체크아웃해요.

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

- `sparsePaths`: 이 폴더들만 워크트리에 체크아웃
- `symlinkDirectories`: 이 폴더들은 복사 대신 심볼릭 링크(symlink)로 연결 (node_modules 중복 방지)

> 🍱 **비유**: 도서관 책 전체를 복사기로 복사하는 대신, 지금 필요한 3권만 복사하는 것과 같아요.

> 💡 **팁**: `.claude` 폴더를 `sparsePaths`에 꼭 포함하세요. 그래야 워크트리 안에서도 `settings.json`, 훅, 스킬이 작동해요.

---

## 6. --add-dir / additionalDirectories — 다른 패키지 접근

`packages/api/`에서 Claude를 시작하면 기본적으로 `packages/api/` 안의 파일만 읽고 쓸 수 있어요. **공유 라이브러리(`packages/shared/`)** 파일도 수정해야 한다면?

**즉석으로 접근 권한 주기 (명령줄)**:
```bash
claude --add-dir ../shared
```

**팀 전체에 기본으로 주기 (settings.json)**:
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

두 방법의 차이:

| 방법 | CLAUDE.md·rules 로드 | Skills 로드 |
|---|---|---|
| `additionalDirectories` 설정 | ❌ 안 함 | ❌ 안 함 |
| `--add-dir` 플래그 | ⚙️ 환경변수 필요 | ✅ 함 |

`--add-dir`로 추가한 폴더의 CLAUDE.md도 로드하려면:
```bash
CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1 claude --add-dir ../shared
```

---

## 7. 디렉토리별 Skills — 폴더 전용 전문 지식

**Skills(스킬)**는 Claude가 필요할 때만 로드하는 전문 지침이에요. 폴더마다 해당 폴더에 맞는 스킬을 넣어두면, API 작업 중에는 API 스킬만, 프론트엔드 작업 중에는 web 스킬만 로드해요.

```bash
# API 패키지에 테스트 스킬 만들기
mkdir -p packages/api/.claude/skills/api-testing
```

`packages/api/.claude/skills/api-testing/SKILL.md`:
```markdown
---
name: api-testing
description: packages/api/ 에서 테스트 작성·수정할 때 사용
---

## 테스트 실행
- 전체: `npm test`
- 단일 파일: `npm test -- src/__tests__/routes/users.test.ts`

## 주의사항
- HTTP 테스트는 `supertest` 사용 (직접 fetch 금지)
- DB 테스트는 항상 트랜잭션 안에서, rollback으로 마무리
```

스킬 설명(description)은 짧게, 핵심 키워드부터 쓰세요. 스킬이 많아지면 Claude가 설명 일부를 잘라서 읽으므로, 앞부분에 핵심 키워드가 있어야 올바른 스킬이 로드돼요.

---

## 모든 설정을 합쳤을 때의 효과

`packages/api/`에서 Claude를 시작하면:

| 항목 | 결과 |
|---|---|
| CLAUDE.md | 루트 + packages/api/ 만 로드, packages/web/ 은 제외 |
| 파일 접근 | packages/api/ + packages/shared/ (additionalDirectories) |
| Read 차단 | dist/, build/ 폴더 읽기 금지 |
| 스킬 | api-testing 스킬 대기 중 (필요 시 자동 로드) |
| 워크트리 | .claude/, packages/api/, packages/shared/ 만 체크아웃 |

> **[공] 공식 발표 기준** · 2026-05-26 확인

---

## 참고 링크

- 전체 설정 문서: [code.claude.com/docs/en/large-codebases](https://code.claude.com/docs/en/large-codebases)
- CLAUDE.md 상세: [Memory and project instructions](https://code.claude.com/docs/en/memory)
- 워크트리: [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees)
- 비용 관리: [Manage costs effectively](https://code.claude.com/docs/en/costs)
