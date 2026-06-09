---
title: "[공] 대형 코드베이스·모노레포에서 Claude Code 쓰기"
description: "수십만 줄짜리 프로젝트나 여러 패키지가 한 저장소에 모인 모노레포에서 Claude가 길을 잃지 않도록 설정하는 방법"
tags: ["고급", "모노레포", "large-codebase", "CLAUDE.md", "worktree", "스킬", "자동생성"]
category: "advanced"
order: 11
lastUpdated: "2026-06-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — code.claude.com 공식 문서 기준. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 이 문서가 필요한 사람

- 회사에서 규모가 큰 프로젝트(파일 수천 개 이상)를 다루는 분
- `packages/frontend`, `packages/backend`, `packages/shared` 같이 여러 패키지가 **한 저장소**에 있는 모노레포(monorepo)를 쓰는 분
- Claude가 "너무 많은 파일을 한꺼번에 보려다가 방향을 잃는" 느낌을 받은 분

> 🍱 **비유**: 도서관에 책이 10권이면 그냥 둘러보면 되지만, 책이 10만 권이면 분류 체계가 없으면 아무것도 못 찾잖아요. 대형 코드베이스에서 Claude가 헤매지 않으려면 "이 구역은 뭐하는 곳이야"를 미리 알려줘야 해요.

---

## 핵심 도구 4가지

### 1️⃣ 중첩 CLAUDE.md — 구역별 안내판

프로젝트 루트의 `CLAUDE.md`가 전체 지도라면, **각 패키지/디렉토리의 CLAUDE.md**는 그 구역 안내판이에요.

```
my-monorepo/
├── CLAUDE.md                  # 전체: "이 레포는 쇼핑몰이야"
├── packages/
│   ├── frontend/
│   │   └── CLAUDE.md          # 프론트엔드: "React 18, TypeScript 써"
│   ├── backend/
│   │   └── CLAUDE.md          # 백엔드: "NestJS, PostgreSQL, API 규칙은..."
│   └── shared/
│       └── CLAUDE.md          # 공유: "이 타입들은 프론트·백 모두 써"
```

**각 CLAUDE.md에 넣으면 좋은 것:**
- 이 패키지가 하는 일 (한 줄 요약)
- 주요 의존성과 버전
- 코딩 컨벤션 (네이밍, import 순서 등)
- 하지 말아야 할 것 (금지 패턴, deprecated 코드 등)

---

### 2️⃣ 패키지별 스킬(Skills) — 구역 전용 도구

`packages/frontend/.claude/skills/`에 프론트엔드 전용 스킬을 넣어두면, Claude가 프론트엔드 작업을 할 때만 그 스킬을 자동으로 써요.

```
packages/backend/.claude/skills/
├── create-api-endpoint.md     # "새 API 엔드포인트 만들기" 스킬
└── write-test.md              # "테스트 작성" 스킬
```

> 🍱 **비유**: 주방(백엔드)에는 요리 도구, 홀(프론트엔드)에는 서빙 도구. 주방에 갔을 때 서빙 도구를 들고 헤매지 않도록 구역별로 도구를 분리해두는 거예요.

---

### 3️⃣ Sparse Worktrees — 필요한 부분만 꺼내보기

10만 줄짜리 레포에서 `packages/frontend`만 작업할 때, 나머지 9만 줄은 Claude 컨텍스트 창을 낭비해요. **Sparse Worktree**는 필요한 디렉토리만 Claude에게 보여주는 방법이에요.

```bash
# 워크트리 생성 시 특정 경로만 포함
claude --worktree packages/frontend

# 또는 .worktreeinclude 파일로 포함할 경로 지정
echo "packages/frontend/" > .worktreeinclude
echo "packages/shared/" >> .worktreeinclude
```

> 🍱 **비유**: 100층 빌딩 전체 도면 대신 "3층 평면도만 줘" 하는 것처럼, 지금 작업하는 패키지 도면만 Claude한테 보여주는 거예요.

---

### 4️⃣ 코드 인텔리전스(Code Intelligence)

대형 코드베이스에서 Claude가 "이 함수가 어디서 호출되는지", "이 타입이 어디서 정의됐는지"를 빠르게 찾으려면 **코드 인텔리전스**가 도움이 돼요.

VS Code나 JetBrains 익스텐션이 설치되어 있다면 IDE의 심볼 인덱스를 Claude가 활용해요.

---

## 모노레포 설정 체크리스트

```
✅ 루트 CLAUDE.md: 전체 레포 개요 + 모노레포 구조 설명
✅ 각 패키지 CLAUDE.md: 패키지별 역할, 기술 스택, 컨벤션
✅ 패키지별 .claude/skills/: 자주 쓰는 작업 패턴 스킬화
✅ .worktreeinclude: 작업 범위 좁힐 때 사용
✅ 공통 타입/유틸: shared/ 패키지 CLAUDE.md에 명시
```

---

## 자주 하는 실수

| 실수 | 해결 방법 |
|---|---|
| 루트 CLAUDE.md에 모든 패키지 세부 정보 다 넣기 | 각 패키지 폴더에 개별 CLAUDE.md 분산 |
| 컨텍스트 창이 꽉 차서 응답 품질 저하 | `.worktreeinclude`로 작업 범위 제한 |
| Claude가 deprecated 패턴 계속 사용 | 각 패키지 CLAUDE.md에 "하지 마세요" 섹션 추가 |
| 패키지마다 다른 테스트 방법을 Claude가 헷갈려 함 | 각 패키지 CLAUDE.md에 테스트 명령어 명시 |

---

## 한 줄 요약

> 대형 코드베이스에서 Claude Code를 잘 쓰려면 **패키지별 CLAUDE.md**로 구역 안내판을 만들고, **스킬**로 자주 쓰는 패턴을 저장하고, **워크트리**로 지금 작업하는 범위만 보여주세요.

---

## 더 알아보기

- [CLAUDE.md 작성 가이드](/docs/config/claude-md)
- [스킬(Skills) 만들기](/docs/config/skills-guide)
- [워크트리 활용법](/docs/advanced/worktrees)
- [공식 문서: Set up Claude Code in a monorepo](https://code.claude.com/docs/en/large-codebases)
