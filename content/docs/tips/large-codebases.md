---
title: "[공] 큰 프로젝트·모노레포에서 Claude Code 효율적으로 쓰기"
description: "수십만 줄 코드나 여러 패키지로 구성된 모노레포에서 Claude Code를 효율적으로 활용하는 설정법 — CLAUDE.md 계층화, 불필요한 파일 차단, 코드 인텔리전스 플러그인"
tags: ["팁", "모노레포", "대규모", "CLAUDE.md", "worktree", "sparsePaths", "성능", "자동생성"]
category: "tips"
order: 12
lastUpdated: "2026-05-31"
---

<div class="note-star">
★ <strong>공식 문서 기반</strong> — code.claude.com/docs/en/large-codebases 에서 발행. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서 전문 보기</a>
</div>

## 큰 프로젝트에서 무슨 문제가 생기나요?

파일이 수천 개가 넘는 대형 프로젝트나 여러 패키지가 묶인 모노레포(monorepo, 모노레포)에서 Claude Code를 쓰면, 기본 설정으로는 두 가지 문제가 생겨요.

1. **컨텍스트 낭비** — 지금 손대지 않는 패키지의 지침·파일까지 Claude가 읽어야 해요
2. **느린 응답** — 필요 없는 내용을 처리하느라 토큰과 시간이 낭비돼요

> 📚 **비유**: 도서관 전체를 외우라는 것처럼 — "역사 코너에 있는 책만 찾아줘"라고 했는데 Claude가 소설·과학·요리 코너까지 다 읽고 나서 답하는 상황이에요. 필요한 코너만 열어주면 훨씬 빠르고 정확해져요.

아래 설정들을 조합해서 Claude가 "지금 필요한 것만" 보도록 조절해요.

---

## 1. CLAUDE.md 파일을 폴더별로 나누기

큰 프로젝트에서 루트 한 곳에만 `CLAUDE.md`를 두면 모든 패키지 지침이 뒤섞여요. **폴더마다 별도 `CLAUDE.md`** 를 두면, Claude가 해당 폴더 작업을 할 때만 그 지침을 읽어요.

```
내-프로젝트/
  CLAUDE.md                  ← 전체 공통 규칙 (커밋 컨벤션 등)
  packages/
    api/
      CLAUDE.md              ← API 패키지 전용 지침
    web/
      CLAUDE.md              ← 프론트엔드 전용 지침
    shared/
      CLAUDE.md              ← 공유 라이브러리 전용 지침
```

루트 `CLAUDE.md` 예시:
```markdown
이 프로젝트는 packages/ 아래 세 개 패키지로 구성됩니다.
- packages/api: Node.js REST API (Express, TypeScript, PostgreSQL)
- packages/web: React 프론트엔드 (Vite, TypeScript, TailwindCSS)
- packages/shared: 공유 TypeScript 유틸리티

각 패키지 디렉토리에서 명령을 실행하세요. 루트에서 실행하지 마세요.
```

> ✂️ **효과**: `packages/api/`에서 Claude를 시작하면 `packages/web/CLAUDE.md`는 로드되지 않아요.

---

## 2. 특정 CLAUDE.md 제외하기 — `claudeMdExcludes`

루트에서 Claude를 시작해도 특정 패키지의 지침은 아예 무시하고 싶을 때 사용해요.

```json
// .claude/settings.local.json (본인만 적용, git에 커밋 안 됨)
{
  "claudeMdExcludes": [
    "**/packages/admin-dashboard/**",
    "**/packages/legacy-*/**"
  ]
}
```

> 🙈 **비유**: 도서관에서 "역사 코너는 아예 잠가두세요"라고 하는 것처럼 — 내가 절대 안 건드리는 팀의 패키지는 처음부터 제외해버려요.

---

## 3. 불필요한 파일 읽기 차단 — `permissions.deny`

`.gitignore`에 없는 빌드 산출물이나 벤더 코드가 있을 때, 아예 읽지 못하도록 막아요.

```json
// .claude/settings.json (팀 전체 적용, git에 커밋)
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

> 🚧 **비유**: "공사 중 출입 금지" 표지판처럼 — Claude가 자동 생성된 파일이나 외부 라이브러리 소스를 괜히 읽어서 컨텍스트를 낭비하지 않도록 막아요.

---

## 4. 워크트리 희소 체크아웃 — `worktree.sparsePaths`

Claude가 `--worktree` 플래그로 독립 작업공간(워크트리)을 만들 때, 전체 코드를 체크아웃하지 않고 **필요한 폴더만** 가져오도록 설정해요.

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

> 💡 `symlinkDirectories`로 `node_modules`를 심볼릭 링크로 처리하면, 워크트리마다 패키지를 중복 설치하지 않아도 돼요.

<div class="note-circle">
○ 경로는 항상 레포지토리 루트 기준으로 써요<br />
○ <code>.claude</code>는 반드시 포함 — 설정 파일과 스킬이 워크트리 안에 있어야 해요
</div>

---

## 5. 코드 인텔리전스 플러그인으로 파일 탐색 줄이기

큰 코드베이스에서 "이 함수가 어디서 정의됐지?" 찾을 때 Claude가 수십 개 파일을 읽어야 해요. **코드 인텔리전스 플러그인**을 설치하면 언어 서버(LSP)를 통해 즉시 찾아줘요.

```bash
# TypeScript 코드 인텔리전스 설치
/plugin install typescript-lsp@claude-plugins-official

# Python, Go, Rust 등도 공식 마켓에서 제공
```

> 🔎 **비유**: 책 전체를 뒤지는 대신 색인(인덱스)을 바로 찾는 것처럼 — 함수 정의, 참조 위치, 타입 오류를 파일 스캔 없이 바로 가져와요.

---

## 6. 다른 패키지·레포지토리 접근 허용 — `additionalDirectories`

`packages/api/`에서 Claude를 시작했는데, 작업 중에 `packages/shared/`도 수정해야 할 때:

```json
// packages/api/.claude/settings.json
{
  "permissions": {
    "additionalDirectories": [
      "../shared"
    ]
  }
}
```

또는 일회성으로:
```bash
claude --add-dir ../shared
```

---

## 폴더별 스킬로 영역 특화

각 패키지마다 전용 스킬(skill)을 두면, 해당 패키지 작업 시에만 관련 지침이 로드돼요.

```
packages/api/.claude/skills/api-testing/SKILL.md   ← API 테스트 패턴
packages/web/.claude/skills/component-patterns/SKILL.md  ← 컴포넌트 규칙
```

API 작업 중엔 `api-testing` 스킬만, 프론트엔드 작업 중엔 `component-patterns` 스킬만 로드돼요.

---

## 설정 한눈에 보기

| 문제 상황 | 사용할 설정 | 위치 |
|-----------|------------|------|
| 지금 작업과 무관한 패키지 지침이 로드됨 | 폴더별 `CLAUDE.md` 분리 | 각 폴더 |
| 특정 패키지 지침 영구 제외 | `claudeMdExcludes` | settings.local.json |
| 빌드 산출물·벤더 코드 차단 | `permissions.deny` | settings.json |
| 워크트리 생성이 너무 느림 | `worktree.sparsePaths` | settings.json |
| 심볼 탐색이 너무 많은 파일 읽음 | 코드 인텔리전스 플러그인 | `/plugin install` |
| 다른 패키지 파일도 수정 필요 | `additionalDirectories` | settings.json |

---

## 요약

```
✅ 폴더별 CLAUDE.md: 지금 작업 영역의 지침만 로드
✅ claudeMdExcludes: 필요 없는 패키지 지침 영구 제외
✅ permissions.deny: 빌드 산출물·자동생성 코드 읽기 차단
✅ worktree.sparsePaths: 워크트리 생성 시 필요한 폴더만 체크아웃
✅ 코드 인텔리전스 플러그인: 심볼 찾기를 파일 스캔 대신 LSP로 처리
```
