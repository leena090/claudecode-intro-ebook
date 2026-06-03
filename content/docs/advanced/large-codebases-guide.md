---
title: "[공] 대규모 코드베이스·모노레포에서 Claude Code 최적화하기"
description: "큰 저장소에서 Claude가 엉뚱한 파일을 읽느라 토큰을 낭비하지 않도록 — CLAUDE.md 분리, claudeMdExcludes, worktree.sparsePaths, 코드 인텔리전스 플러그인까지 한 번에 정리"
tags: ["고급", "모노레포", "대규모코드베이스", "claudeMd", "worktree", "설정최적화", "자동생성"]
category: "advanced"
order: 28
lastUpdated: "2026-06-03"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026-05-25 신규 공식 문서 기반. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 왜 대규모 코드베이스에서 설정이 필요한가요?

코드가 적을 때는 Claude Code를 그냥 켜도 잘 돼요. 하지만 저장소가 커지면 이런 문제가 생겨요:

- 지금 작업과 무관한 패키지의 규칙·파일을 읽어 **토큰 낭비**
- 컨텍스트 창이 가득 차서 **Claude 성능 저하**
- 빌드 산출물(dist/, build/)을 읽어 **잘못된 정보** 학습

> 🏠 **비유**: 부동산 중개인에게 "302호 수리 견적 내줘"라고 했는데, 건물 전체 도면 + 모든 층 설계도를 다 꺼내 읽는다면 시간 낭비잖아요. 관련 부분만 딱 꺼내서 보는 게 훨씬 효율적이에요. `[공]`

---

## 핵심 설정 한눈에 보기

| 목적 | 사용 방법 |
|---|---|
| 패키지별 다른 규칙 적용 | 디렉토리별 CLAUDE.md 파일 |
| 특정 CLAUDE.md 파일 제외 | `claudeMdExcludes` 설정 |
| 빌드 산출물·벤더 코드 읽기 차단 | `permissions.deny`에 Read 규칙 |
| 파일 스캔 대신 언어 서버로 검색 | 코드 인텔리전스 플러그인 |
| 워크트리에 필요한 디렉토리만 체크아웃 | `worktree.sparsePaths` |
| 다른 패키지·저장소 접근 허용 | `--add-dir` 또는 `additionalDirectories` |

---

## 디렉토리별 CLAUDE.md 분리

한 파일에 모든 규칙을 우겨넣지 말고, **각 패키지/서브시스템 폴더에 CLAUDE.md를 따로** 두세요.

```
모노레포/
  CLAUDE.md              # 저장소 전체 공통 규칙
  packages/
    api/
      CLAUDE.md          # API 패키지 전용 규칙
    web/
      CLAUDE.md          # 프론트엔드 전용 규칙
    shared/
      CLAUDE.md          # 공유 라이브러리 규칙
```

Claude Code는 작업 중인 파일이 있는 디렉토리와 그 위 조상 디렉토리의 CLAUDE.md만 읽어요. `packages/api/`에서 작업하면 `packages/web/CLAUDE.md`는 아예 로드되지 않아요!

### 루트 CLAUDE.md 예시

```markdown
이 저장소는 3개 패키지로 구성된 모노레포입니다:

- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, TailwindCSS)
- packages/shared: 공유 TypeScript 유틸리티

명령은 각 패키지 디렉토리에서 실행하세요 (루트 아님).
```

### 패키지별 CLAUDE.md 예시 (packages/api/CLAUDE.md)

```markdown
이 패키지는 REST API 서버입니다.

- 테스트 실행: `npm test` (Vitest 사용)
- 개발 서버: `npm run dev` (포트 3001)
- DB 마이그레이션: `npm run migrate`

API 라우트는 src/routes/에 있어요.
DB 쿼리는 src/db/의 Knex만 써요. 라우트 핸들러에 raw SQL 문자열 직접 작성 금지.
```

---

## 불필요한 CLAUDE.md 제외하기

루트에서 Claude를 시작할 때 내가 작업하지 않는 패키지의 CLAUDE.md까지 로드되는 게 싫다면:

```json
// .claude/settings.local.json (개인 전용, git 미추적)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

> 💡 `settings.local.json`에 넣으면 git에 추적되지 않아 개인 설정으로만 유지돼요. 팀 전체에 적용하려면 `settings.json`에 넣으세요.

---

## 빌드 산출물·벤더 코드 읽기 차단

`.gitignore`에 있는 `node_modules/`, `dist/`는 자동으로 제외돼요. 하지만 git에 추적되는 벤더 코드나 생성된 파일은 명시적으로 차단해야 해요.

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

---

## 코드 인텔리전스 플러그인으로 파일 스캔 줄이기

큰 코드베이스에서 심벌(함수명, 타입 등)의 정의·참조를 찾으려면 Claude가 수많은 파일을 grep으로 뒤져요. **코드 인텔리전스 플러그인**을 쓰면 언어 서버(Language Server)가 바로 정답을 알려줘요.

```bash
# TypeScript 언어 서버 플러그인 설치
/plugin install typescript-lsp@claude-plugins-official
```

지원 언어: TypeScript, Python, Go, Rust 등

---

## worktree에서 필요한 디렉토리만 체크아웃

`--worktree` 플래그로 격리된 작업 공간을 만들 때, 기본적으로 전체 저장소를 체크아웃해요. `worktree.sparsePaths`로 필요한 디렉토리만 체크아웃하면 **빠르고 가볍게** 시작할 수 있어요.

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

- `sparsePaths`: 체크아웃할 디렉토리 목록
- `symlinkDirectories`: `node_modules/`처럼 복사 대신 심링크로 연결 (용량 절약)

---

## 다른 패키지·저장소 접근 허용

`packages/api/`에서 시작했지만 `packages/shared/` 파일도 수정해야 한다면:

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

또는 실행 시 직접 추가:

```bash
claude --add-dir ../shared
```

| 방법 | CLAUDE.md 로드 | 스킬 로드 |
|---|---|---|
| `additionalDirectories` 설정 | ❌ | ❌ |
| `--add-dir` 플래그 | ✅ (환경변수 설정 시) | ✅ |

---

## 패키지별 스킬 추가

각 패키지 폴더 안에 `.claude/skills/`를 만들고 해당 패키지 전용 스킬을 넣으면, Claude가 그 패키지 안에서 작업할 때만 스킬을 로드해요.

```bash
mkdir -p packages/api/.claude/skills/api-testing
```

`packages/api/.claude/skills/api-testing/SKILL.md` 작성:

```markdown
---
name: api-testing
description: API 패키지 테스트 패턴. packages/api/ 테스트 작성·수정 시 사용.
---

## 테스트 구조
테스트는 src/__tests__/에 src/와 동일한 구조로 배치.

## 실행 명령
- 전체: `npm test`
- 단일 파일: `npm test -- src/__tests__/routes/users.test.ts`
- 감시 모드: `npm test -- --watch`
```

---

## 권장 설정 조합 (모노레포 예시)

`packages/api/.claude/settings.json`:

```json
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

이 설정으로 `packages/api/`에서 Claude를 시작하면:
- 루트 CLAUDE.md + `packages/api/CLAUDE.md`만 로드 (`packages/web/`은 제외)
- `packages/api/`와 `packages/shared/` 파일 읽기/수정 가능
- `dist/`, `build/` 폴더 읽기 차단
- 워크트리에 `.claude/`, `packages/api/`, `packages/shared/`만 체크아웃

---

## 참고 자료

- [CLAUDE.md 메모리 관리](../config/claude-md.md)
- [권한 설정](../config/permissions-guide.md)
- [Worktrees 격리 작업](./worktrees.md)
