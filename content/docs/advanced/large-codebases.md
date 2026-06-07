---
title: "[공] 대형 코드베이스·모노레포 — Claude Code 맞춤 설정 가이드"
description: "수백만 줄짜리 저장소나 여러 패키지를 담은 모노레포에서 Claude가 관련 없는 코드를 읽느라 토큰을 낭비하지 않도록 설정하는 실전 가이드"
tags: ["고급", "모노레포", "monorepo", "large-codebase", "CLAUDE.md", "worktree", "settings"]
category: "advanced"
order: 23
lastUpdated: "2026-06-07"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 이 문서는 <a href="https://code.claude.com/docs/en/large-codebases">code.claude.com/docs/en/large-codebases</a>를 바탕으로 작성됐어요.
</div>

## 왜 대형 프로젝트에서 따로 설정이 필요한가요?

Claude Code는 소형 프로젝트에 맞춰 기본 설정이 튜닝돼 있어요. 파일이 많아지면 Claude가 **지금 작업과 전혀 상관없는 파일**을 읽느라 컨텍스트 창을 채우기 시작해요. 결과:

- 💸 토큰 낭비 (= 비용 증가)
- 🐌 응답 품질 저하 (관련 없는 정보가 판단을 흐림)
- ⏳ 느려지는 응답 속도

이 가이드는 **"Claude에게 지금 필요한 코드만 보여주는"** 방법을 알려드려요.

---

## 핵심 설정 6가지 한눈에 보기

| 목적 | 사용 방법 |
|---|---|
| 현재 작업 코드의 규칙만 로드 | [디렉토리별 CLAUDE.md 파일 나누기](#1-디렉토리별-claudemd-파일-나누기) |
| 안 쓰는 패키지 규칙 파일 제외 | [`claudeMdExcludes` 설정](#2-claudemdexcludes로-관련-없는-파일-제외) |
| 빌드 결과물·외부 라이브러리 읽기 차단 | [`Read` 거부 규칙](#3-read-거부-규칙으로-불필요한-파일-차단) |
| 심볼 위치를 검색 대신 언어 서버로 | [코드 인텔리전스 플러그인](#4-코드-인텔리전스-플러그인으로-파일-탐색-줄이기) |
| 워크트리에 일부 디렉토리만 체크아웃 | [`worktree.sparsePaths`](#5-worktreesparsepaths로-필요한-디렉토리만-체크아웃) |
| 여러 패키지·저장소 동시 접근 | [`--add-dir` 또는 `additionalDirectories`](#6-여러-패키지저장소-동시-접근) |

---

## 예시 모노레포 구조

이 가이드의 모든 예시는 이런 모노레포를 기준으로 해요:

```text
monorepo/
  CLAUDE.md                     # 전체 저장소 규칙
  packages/
    api/
      CLAUDE.md                 # API 패키지 전용 규칙
      .claude/skills/
      src/
    web/
      CLAUDE.md                 # 프론트엔드 전용 규칙
      .claude/skills/
      src/
    shared/
      CLAUDE.md                 # 공통 라이브러리 규칙
      src/
```

---

## 1. 디렉토리별 CLAUDE.md 파일 나누기

### 문제

루트에 CLAUDE.md 하나로 모든 규칙을 담으면, `packages/api/`에서 작업할 때 `packages/web/`의 프론트엔드 규칙까지 로드돼요.

### 해결: 레이어 구조

Claude Code는 실행 위치부터 상위 디렉토리의 CLAUDE.md를 **모두 읽어요**. 그리고 하위 디렉토리는 **Claude가 그 폴더의 파일을 실제로 읽을 때** 추가로 로드해요.

**루트 CLAUDE.md** — 전체 저장소 공통 규칙:
```markdown
# CLAUDE.md (루트)

이 저장소는 세 개의 패키지로 구성된 모노레포예요:
- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, TailwindCSS)
- packages/shared: 공통 TypeScript 유틸리티

명령어는 루트가 아닌 각 패키지 디렉토리에서 실행하세요.
```

**packages/api/CLAUDE.md** — API 패키지 전용 규칙:
```markdown
# packages/api/CLAUDE.md

이 패키지는 REST API 서버예요.

- 테스트 실행: `npm test` (Vitest 사용)
- 개발 서버 실행: `npm run dev` (포트 3001)
- DB 마이그레이션: `npm run migrate`

API 라우트는 src/routes/ 에 있어요.
DB 쿼리는 src/db/의 Knex를 사용하고, 라우트 핸들러에 SQL 문자열 직접 작성 금지.
```

> 🏢 **비유**: 회사 전체 규정(루트 CLAUDE.md)은 모든 부서가 공유하고, 각 부서(api, web, shared)는 자기 부서 매뉴얼(패키지별 CLAUDE.md)을 따로 관리하는 거예요.

---

## 2. claudeMdExcludes로 관련 없는 파일 제외

루트에서 실행할 때 관련 없는 패키지의 CLAUDE.md가 로드되는 걸 막을 수 있어요.

```json
// .claude/settings.local.json (개인용, git에 커밋 안 함)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

> 💡 **팁**: 내가 절대 안 건드리는 다른 팀 패키지, 레거시 코드, 외부 라이브러리 등을 여기서 제외하면 돼요.

---

## 3. Read 거부 규칙으로 불필요한 파일 차단

`node_modules/`, `dist/`, `build/`처럼 `.gitignore`에 있는 건 자동으로 제외돼요. 하지만 **저장소에 커밋된 빌드 결과물이나 벤더 코드**는 직접 차단해야 해요.

```json
// .claude/settings.json (팀 전체 공유, 저장소에 커밋)
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

> 🚫 **비유**: "이 방에는 들어가지 마세요" 표지판을 붙이는 것처럼요. Claude가 자동으로 생성된 코드나 외부 라이브러리를 읽으러 들어가지 않아요.

---

## 4. 코드 인텔리전스 플러그인으로 파일 탐색 줄이기

대형 코드베이스에서 심볼 정의·참조를 찾으려면 Claude가 수많은 파일을 grep해야 해요. 코드 인텔리전스 플러그인을 쓰면 **언어 서버(Language Server)**를 통해 직접 점프할 수 있어요.

```bash
# TypeScript 언어 서버 플러그인 설치
/plugin install typescript-lsp@claude-plugins-official
```

공식 마켓플레이스에서 TypeScript, Python, Go, Rust 등 주요 언어 플러그인을 제공해요.

> 🗺️ **비유**: 서울 지하철 노선도(언어 서버)를 쓰면 강남역에서 홍대까지 바로 경로를 찾지만, 지도 없이 걷는 건(파일 탐색) 시간이 오래 걸리는 것처럼요.

---

## 5. worktree.sparsePaths로 필요한 디렉토리만 체크아웃

`--worktree` 플래그로 새 git 워크트리를 만들 때 기본적으로 전체 저장소가 체크아웃돼요. 대형 저장소에선 이게 느리고 공간도 많이 써요.

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

- `sparsePaths`: 이 디렉토리만 체크아웃 (루트의 개별 파일은 항상 포함)
- `symlinkDirectories`: `node_modules/` 같은 큰 폴더는 복사 대신 심링크로 연결

> 🏠 **비유**: 집 이사를 할 때 모든 가구를 다 옮기지 않고 "침실 가구만, 주방 집기만" 골라서 이동하는 것처럼요.

---

## 6. 여러 패키지·저장소 동시 접근

`packages/api/`에서 실행하면 그 폴더만 접근할 수 있어요. 인접 패키지에도 접근하려면:

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

또는 실행할 때 직접 지정:

```bash
claude --add-dir ../shared
```

| 방법 | CLAUDE.md 로드 | 스킬 로드 |
|---|---|---|
| `additionalDirectories` 설정 | ❌ 안 함 | ❌ 안 함 |
| `--add-dir` 플래그 | 기본 ❌ (환경변수로 활성화) | ✅ 함 |

---

## 7. 디렉토리별 스킬 추가하기

각 패키지마다 전용 스킬을 만들면 Claude가 해당 패키지를 작업할 때만 로드해요:

```bash
mkdir -p packages/api/.claude/skills/api-testing
```

```markdown
<!-- packages/api/.claude/skills/api-testing/SKILL.md -->
---
name: api-testing
description: API 패키지에서 테스트 작성·수정 시 사용하는 테스트 패턴. packages/api/에서 작업할 때 사용.
---

## 테스트 위치
테스트는 src/__tests__/ 아래 src/ 구조를 미러링해서 위치해요.

## 실행 방법
- 전체 테스트: `npm test`
- 단일 파일: `npm test -- src/__tests__/routes/users.test.ts`

## 패턴
- HTTP 단언에는 `supertest` 사용 (raw fetch 금지)
- DB 테스트는 항상 롤백되는 트랜잭션으로 래핑
```

> 📚 **비유**: 도서관에서 "경제학 섹션"에 갔을 때만 경제학 사서가 나타나는 것처럼요. api 패키지에서 작업할 때만 api-testing 스킬이 로드돼요.

---

## Claude 실행 위치에 따른 차이

| 실행 위치 | 파일 접근 | 로드되는 CLAUDE.md | 사용 시기 |
|---|---|---|---|
| 저장소 루트 | 모든 파일 | 루트만 (하위는 필요 시) | 여러 패키지에 걸친 작업 |
| 특정 서브디렉토리 | 그 하위 트리만 | 해당 디렉토리 + 모든 상위 | 특정 패키지 집중 작업 |

> 💡 **팁**: "오늘은 api 패키지만 건드릴 거야" 싶으면 `packages/api/`에서 실행하세요. web 패키지 규칙이 컨텍스트에 안 들어와요.

---

## 전체 설정 조합 예시

최종 구성:

```text
monorepo/
  CLAUDE.md                                    ← 전체 공통 규칙
  .claude/settings.json                        ← 워크트리 세션용 거부 규칙
  packages/
    api/
      CLAUDE.md                                ← API 전용 규칙
      .claude/settings.json                    ← 워크트리, additionalDirectories, 거부 규칙
      .claude/skills/api-testing/SKILL.md      ← API 테스트 스킬
    web/
      CLAUDE.md
      .claude/skills/component-patterns/SKILL.md
    shared/
      CLAUDE.md
```

`packages/api/`에서 Claude를 실행하면:
- ✅ 루트 CLAUDE.md + `packages/api/CLAUDE.md` 로드 (web 규칙은 제외)
- ✅ `packages/api/`와 `packages/shared/` 읽기·수정 가능
- ✅ `dist/`, `build/` 읽기 차단
- ✅ api-testing 스킬 필요 시 로드
- ✅ 워크트리는 `.claude/`, `packages/api/`, `packages/shared/`, 루트 파일만 체크아웃

---

## 더 알아보기

- [공식 Large Codebases 문서](https://code.claude.com/docs/en/large-codebases)
- [CLAUDE.md 메모리 가이드](https://code.claude.com/docs/en/memory)
- [설정 파일 레퍼런스](https://code.claude.com/docs/en/settings)
- [스킬 공식 문서](https://code.claude.com/docs/en/skills)
- [비용 관리 가이드](https://code.claude.com/docs/en/costs)
