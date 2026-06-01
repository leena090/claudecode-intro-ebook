---
title: "[공] 대규모 코드베이스·모노레포 설정 — Claude가 필요한 코드만 보게 하는 법"
description: "수백만 줄 코드베이스나 모노레포에서 CLAUDE.md 분리, 워크트리 sparse 체크아웃, 코드 인텔리전스 플러그인으로 Claude 성능 유지하기"
tags: ["고급", "모노레포", "대용량", "CLAUDE.md", "worktree", "설정", "자동생성"]
category: "advanced"
order: 29
lastUpdated: "2026-06-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026-05-25 공식 문서 신규 추가. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 왜 대규모 코드베이스에서 별도 설정이 필요한가요?

Claude Code는 작은 프로젝트에 맞게 기본값이 설정돼 있어요. 코드베이스가 커질수록 **관련 없는 코드들이 컨텍스트 창을 가득 채워** 토큰 비용이 늘고 성능이 떨어져요.

> 🍱 **비유**: 작은 가게에선 상품 목록을 달달 외워도 되지만, 대형 마트라면 "오늘 내 구역만" 집중하는 게 훨씬 효율적이죠. Claude도 "내가 작업하는 코드만" 보도록 좁혀줘야 해요.

이 문서의 설정들은 **각각 독립적**이에요. 전부 적용할 필요 없이 상황에 맞는 것만 골라 쓰면 됩니다.

---

## 설정 1: CLAUDE.md 파일을 디렉토리별로 나누기

### 기본 원칙

- **루트 CLAUDE.md**: 레포지토리 전체에 적용되는 공통 규칙
- **각 패키지/서브시스템 CLAUDE.md**: 해당 영역에만 적용되는 규칙

```
monorepo/
  CLAUDE.md                    ← 전체 공통 규칙
  packages/
    api/
      CLAUDE.md                ← API 서버 전용 규칙
    web/
      CLAUDE.md                ← 프론트엔드 전용 규칙
    shared/
      CLAUDE.md                ← 공유 라이브러리 규칙
```

`packages/api/`에서 Claude를 시작하면 루트 + `packages/api/` CLAUDE.md만 로드해요. `packages/web/`의 내용은 컨텍스트에 안 들어와요.

> 🍱 **비유**: 회사 전체 규정집(루트)과 우리 팀 업무 매뉴얼(패키지)을 따로 두는 것처럼, 지금 하는 일과 관련 없는 다른 팀 매뉴얼은 꺼내놓지 않아요.

### 불필요한 CLAUDE.md 제외하기

루트에서 시작할 때 특정 패키지의 CLAUDE.md를 아예 로드하지 않으려면:

```json
// .claude/settings.local.json (개인 설정, git에 커밋 안 됨)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

---

## 설정 2: 빌드 산출물·외부 코드 읽기 차단

`.gitignore`에 있는 경로(node_modules, dist 등)는 자동으로 제외돼요. 그 외 체크인된 경로(외부 SDK, 자동 생성 코드)는 직접 차단해야 해요.

```json
// .claude/settings.json (팀 공유)
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

> 🍱 **비유**: 도서관에서 "금서 목록"을 만드는 것처럼, Claude가 열어볼 수 없는 파일 목록을 지정해요.

---

## 설정 3: 코드 인텔리전스 플러그인으로 파일 읽기 줄이기

심볼 정의·참조를 찾을 때 파일을 일일이 grep하는 대신, **언어 서버(Language Server)** 에 물어보게 해요. 파일 읽기 횟수가 크게 줄어요.

```bash
# TypeScript LSP 플러그인 설치 예시
/plugin install typescript-lsp@claude-plugins-official
```

지원 언어: TypeScript, Python, Go, Rust 등 (공식 마켓플레이스 확인)

---

## 설정 4: 워크트리 Sparse Checkout (필요한 디렉토리만 체크아웃)

`--worktree` 플래그로 워크트리를 만들 때 기본적으로 레포 전체를 복사해요. 큰 레포에선 시간과 디스크를 낭비해요.

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

- `sparsePaths`: 워크트리에 체크아웃할 디렉토리 목록 (루트 파일은 자동 포함)
- `symlinkDirectories`: node_modules처럼 큰 디렉토리를 복사 대신 심볼릭 링크로 처리

> 🍱 **비유**: 이사할 때 집 전체를 통째로 옮기는 게 아니라, 지금 당장 필요한 짐만 가져가는 것처럼요.

---

## 설정 5: 여러 패키지·레포에 접근 허용

`packages/api/`에서 Claude를 시작했는데 `packages/shared/`의 타입 정의도 수정해야 할 때:

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

또는 Claude 시작 시:

```bash
claude --add-dir ../shared
```

---

## 설정 6: 디렉토리별 스킬(Skills) 추가

각 패키지마다 그 영역 전용 스킬을 넣어두면, Claude가 해당 패키지 파일 작업 시에만 해당 스킬을 로드해요.

```bash
mkdir -p packages/api/.claude/skills/api-testing
# packages/api/.claude/skills/api-testing/SKILL.md 작성
```

```markdown
---
name: api-testing
description: API 패키지 테스트 작성 시 사용. packages/api/ 작업 때만 로드됨.
---

## 테스트 구조
테스트는 src/__tests__/에 src/ 구조를 미러링해서 배치...
```

> 🍱 **비유**: API 팀만 쓰는 업무 매뉴얼이 있고, 프론트엔드 팀만 쓰는 매뉴얼이 따로 있는 것처럼, 관련 없는 팀 매뉴얼은 꺼내지 않아요.

---

## 통합 예시 (모노레포 전체 설정)

```
monorepo/
  CLAUDE.md                              ← 전체 규칙
  .claude/settings.json                  ← 워크트리용 deny 규칙
  packages/
    api/
      CLAUDE.md                          ← API 전용 규칙
      .claude/settings.json              ← worktree, additionalDirs, deny
      .claude/skills/api-testing/
    web/
      CLAUDE.md
      .claude/skills/component-patterns/
    shared/
      CLAUDE.md
```

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

이 설정 기준으로 `packages/api/`에서 Claude 시작 시:
- ✅ 루트 + `packages/api/` CLAUDE.md 로드 (web, shared 제외)
- ✅ `packages/api/`와 `packages/shared/` 파일 읽기·편집 가능
- ✅ `dist/`, `build/` 읽기 차단
- ✅ api-testing 스킬 자동 로드
- ✅ 워크트리 생성 시 `.claude/`, `packages/api/`, `packages/shared/`만 체크아웃

---

> 💡 **입문자 팁**: 처음에는 **디렉토리별 CLAUDE.md 분리**부터 시작해보세요. 규모가 더 커지면 빌드 산출물 차단 → 코드 인텔리전스 플러그인 순서로 추가하면 돼요. 모든 설정을 한꺼번에 적용할 필요는 없어요.
