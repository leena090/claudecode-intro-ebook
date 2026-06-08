---
title: "[공] 대형 코드베이스·모노레포에서 Claude Code 쓰기"
description: "파일이 수천 개인 큰 프로젝트나 여러 패키지로 나뉜 모노레포(monorepo)에서 Claude Code를 효율적으로 사용하는 설정 방법을 안내해요. CLAUDE.md 분리, 불필요한 파일 차단, 워크트리 최적화까지."
tags: ["자동생성", "모노레포", "monorepo", "대형코드베이스", "CLAUDE.md", "sparsePaths", "설정"]
category: "advanced"
order: 29
lastUpdated: "2026-06-08"
---

<div class="note-star">
★ <strong>공식 문서</strong> — <a href="https://code.claude.com/docs/en/large-codebases.md">code.claude.com/docs/en/large-codebases</a> 기반 정리입니다. <code>[공]</code>
</div>

## 큰 프로젝트에서 Claude Code가 느려지는 이유

작은 프로젝트에선 잘 되던 Claude Code가, 파일이 수천 개를 넘어가거나 여러 패키지로 나뉜 모노레포에서는 성능이 떨어지는 경우가 있어요.

> 🍱 **비유로 설명하면**: 방이 5개인 집 청소를 부탁받으면 빠른데, 방이 200개인 호텔 전체 청소를 부탁받으면 어디서 시작해야 할지 몰라 헤매는 것과 같아요. 관련 없는 방의 정보까지 전부 클로드 머릿속에 들어가면 정작 우리 방 청소가 느려져요.

이 문서는 Claude Code가 **필요한 부분만 빠르게 읽도록** 설정하는 방법을 안내해요.

---

## 📋 이 문서에서 다루는 설정 목록

| 설정 | 효과 |
|---|---|
| 폴더별 CLAUDE.md 분리 | 지금 작업하는 패키지 지침만 불러오기 |
| `claudeMdExcludes` | 내가 안 쓰는 패키지 CLAUDE.md 건너뛰기 |
| `Read` 차단 규칙 | 빌드 결과물·vendor 코드 읽기 차단 |
| 코드 인텔리전스 플러그인 | 심볼 검색을 파일 스캔 대신 언어 서버로 |
| `worktree.sparsePaths` | 워크트리에 필요한 디렉토리만 체크아웃 |
| `additionalDirectories` / `--add-dir` | 다른 패키지·저장소 접근 허용 |
| 폴더별 Skills | 해당 패키지 전용 지식만 로드 |

---

## 1️⃣ 폴더별 CLAUDE.md 파일 나누기

하나의 루트 CLAUDE.md에 모든 패키지 규칙을 담으면 클로드 머릿속이 가득 차요. 대신 각 폴더에 자기 파일을 두세요:

```
내 프로젝트/
  CLAUDE.md                    ← 전체 공통 규칙
  packages/
    api/
      CLAUDE.md                ← API 서버 전용 규칙
    web/
      CLAUDE.md                ← 프론트엔드 전용 규칙
    shared/
      CLAUDE.md                ← 공유 라이브러리 규칙
```

`packages/api/` 안에서 Claude Code를 실행하면:
- 루트 `CLAUDE.md` + `packages/api/CLAUDE.md` 만 불러요
- `packages/web/CLAUDE.md`는 불러오지 않아요 ✅

**루트 CLAUDE.md 예시:**
```markdown
이 프로젝트는 packages/ 아래에 3개 패키지가 있어요:
- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, Tailwind)
- packages/shared: 공유 TypeScript 유틸리티

명령어는 각 패키지 폴더 안에서 실행하세요 (루트 아님).
```

---

## 2️⃣ 불필요한 CLAUDE.md 파일 건너뛰기

루트에서 시작할 때 다른 팀 패키지의 CLAUDE.md를 건너뛰려면 `claudeMdExcludes` 설정을 써요:

`.claude/settings.local.json` (개인용, git에 올라가지 않아요):

```json
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

---

## 3️⃣ 빌드 결과물·vendor 코드 읽기 차단

`.gitignore`에 있는 폴더(`node_modules/`, `dist/` 등)는 자동으로 검색에서 제외돼요. 하지만 git에 올라간 generated 코드는 직접 차단해야 해요:

`.claude/settings.json`:
```json
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

## 4️⃣ 코드 인텔리전스 플러그인 설치

함수 정의·참조를 찾을 때 파일을 하나씩 스캔하지 않고, **언어 서버(Language Server)**를 통해 바로 찾게 해줘요. 속도가 훨씬 빨라져요.

TypeScript 예시:
```
> /plugin install typescript-lsp@claude-plugins-official
```

Python, Go, Rust 등 다른 언어도 공식 마켓플레이스에서 설치할 수 있어요.

---

## 5️⃣ 워크트리에 필요한 폴더만 체크아웃

`--worktree` 플래그를 쓸 때 큰 저장소 전체가 아닌 **필요한 디렉토리만** 체크아웃해요:

`.claude/settings.json`:
```json
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

`symlinkDirectories`는 `node_modules` 같은 큰 폴더를 복사하지 않고 **심볼릭 링크(symlink)**로 연결해서 디스크 공간을 절약해요.

> 🍱 **비유**: 도서관 전체 책을 다 가져오는 대신, 내 연구에 필요한 책들만 책상에 가져다 놓는 거예요.

---

## 6️⃣ 다른 패키지·저장소에 접근 허용

`packages/api/`에서 작업 중인데, `packages/shared/`의 파일도 수정해야 할 때:

**영구 설정** (`.claude/settings.json`):
```json
{
  "permissions": {
    "additionalDirectories": [
      "../shared",
      "../web"
    ]
  }
}
```

**임시 접근** (실행 시):
```bash
claude --add-dir ../shared
```

---

## 7️⃣ 폴더별 Skills(스킬) 추가

각 패키지에 해당 영역 전용 스킬을 두면, 다른 패키지 작업 중에는 불러오지 않아요:

```
packages/api/
  .claude/skills/api-testing/
    SKILL.md     ← API 테스트 패턴 설명
packages/web/
  .claude/skills/component-patterns/
    SKILL.md     ← React 컴포넌트 패턴 설명
```

---

## 전체 설정 한눈에 보기

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

이 설정 하나로:
- ✅ `packages/api/` + `packages/shared/` 파일만 읽고 수정
- ✅ `packages/web/` CLAUDE.md는 불러오지 않음
- ✅ 빌드 결과물은 읽지 않음
- ✅ 워크트리는 두 패키지만 체크아웃

---

## 관련 문서

- [CLAUDE.md 설정하기](/docs/config/claude-md) — 프로젝트 지침 작성 방법
- [워크트리(Worktrees) 활용하기](/docs/advanced/worktrees) — 병렬 작업을 위한 격리 환경
- [스킬(Skills) 만들기](/docs/config/skills-guide) — 재사용 가능한 작업 지침
