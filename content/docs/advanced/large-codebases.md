---
title: "[공] 대형 코드베이스·모노레포에서 Claude Code 쓰기"
description: "수십만 줄짜리 큰 프로젝트나 여러 패키지가 합쳐진 모노레포에서 Claude Code가 집중력을 잃지 않도록 설정하는 방법"
tags: ["고급", "모노레포", "monorepo", "large-codebase", "CLAUDE.md", "자동생성", "worktrees"]
category: "advanced"
order: 27
lastUpdated: "2026-06-06"
---

<div class="note-star">
★ <strong>공식 문서 기반</strong> — code.claude.com/docs/en/large-codebases. <code>[공]</code><br />
★ 대상: 수십만 줄 규모의 큰 프로젝트, 여러 패키지가 있는 모노레포, 대형 단일 트리 코드베이스
</div>

## 큰 프로젝트에서 Claude Code가 힘드는 이유

파일이 수천 개인 큰 프로젝트를 Claude Code에 맡기면, Claude가 **엉뚱한 파일을 읽거나 집중력을 잃는 경우**가 생겨요.

> 🍱 **비유로 설명하면**: 도서관 전체(= 대형 코드베이스)를 한꺼번에 읽어달라고 하면 사람도 길을 잃듯이, Claude도 어디를 봐야 할지 헷갈려요. 이 가이드는 "지금 이 책장만 봐" 라고 알려주는 방법이에요.

---

## 해결책 1: 중첩 CLAUDE.md 파일 (Nested CLAUDE.md)

모노레포에서는 **최상위 + 각 패키지 폴더**에 각각 `CLAUDE.md`를 둘 수 있어요.

```
my-monorepo/
├── CLAUDE.md              ← 전체 공통 규칙
├── packages/
│   ├── api/
│   │   └── CLAUDE.md     ← api 패키지 전용 규칙
│   ├── web/
│   │   └── CLAUDE.md     ← web 패키지 전용 규칙
│   └── shared/
│       └── CLAUDE.md     ← 공용 라이브러리 규칙
└── tools/
    └── CLAUDE.md          ← 빌드 도구 전용 규칙
```

Claude가 `packages/api/` 안에서 작업할 때는 **최상위 CLAUDE.md + api/CLAUDE.md**를 모두 읽어요.

**최상위 CLAUDE.md 예시:**
```markdown
# 프로젝트 공통 규칙
- 이 프로젝트는 TypeScript 모노레포예요
- 패키지 간 직접 import 금지 (shared 패키지 통해서만)
- 모든 커밋은 feat/fix/chore 컨벤션 준수
```

**api/CLAUDE.md 예시:**
```markdown
# API 패키지 전용 규칙
- REST API 서버 (Express 기반)
- DB 접근은 항상 `/api/src/db/` 폴더 통해서
- 환경 변수는 .env.local에서 로드
- 테스트: jest + supertest
```

> 🍱 **비유**: 회사 전체 규정(최상위)과 부서별 규정(하위)을 따로 관리하는 것처럼, Claude도 계층적 지침을 자연스럽게 따라가요.

---

## 해결책 2: 스파스 워크트리 (Sparse Worktrees)

대형 레포에서 Claude가 **관련 없는 파일까지 읽지 않도록** 범위를 제한할 수 있어요.

`.worktreeinclude` 파일을 만들면 Claude가 해당 경로만 우선적으로 참조해요:

```bash
# .worktreeinclude 파일 생성
cat > .worktreeinclude << 'EOF'
packages/api/
packages/shared/
tools/scripts/
EOF
```

```bash
# 워크트리 분리 실행
claude --worktree
```

> 🍱 **비유**: 도서관에서 "경제학 섹션만 봐" 라고 딱 집어주는 것처럼, Claude의 시선을 원하는 폴더에 고정시켜요.

📄 자세한 워크트리 사용법 → [워크트리 가이드](/docs/advanced/worktrees)

---

## 해결책 3: 패키지별 스킬 (Per-package Skills)

각 패키지에 **전용 스킬(도구 모음)** 을 정의해서, 해당 패키지 작업 시에만 활성화할 수 있어요.

```bash
packages/api/.claude/
├── skills/
│   ├── run-api-tests.md    ← "API 테스트 실행해줘"에 응답하는 스킬
│   └── deploy-staging.md   ← "스테이징 배포해줘" 스킬
└── settings.json
```

```markdown
<!-- run-api-tests.md -->
---
name: run-api-tests
description: API 패키지 단위 테스트 실행
---

cd packages/api && npm test
```

```bash
# 스킬 사용
/run-api-tests
```

📄 스킬 만드는 방법 → [스킬 가이드](/docs/config/skills-guide)

---

## 해결책 4: CLAUDE.md에 폴더 지도 그려주기

Claude에게 프로젝트 구조를 명확히 알려주면 길을 잃지 않아요.

```markdown
<!-- 최상위 CLAUDE.md -->
# 프로젝트 구조 안내

## 폴더 역할
- /packages/api: REST API 서버 (Node.js + Express)
- /packages/web: 프론트엔드 앱 (React + Vite)
- /packages/shared: 공용 타입·유틸리티
- /tools: 빌드 스크립트·CI 설정

## 작업별 관련 폴더
- API 기능 추가: packages/api/src/routes/
- UI 컴포넌트: packages/web/src/components/
- 공용 타입 변경: packages/shared/types/
```

> 🍱 **비유**: 새 직원한테 "이 건물 1층은 영업팀, 2층은 개발팀, 3층은 인사팀이에요" 라고 알려주면 알아서 찾아가는 것처럼, 폴더 설명만 해줘도 Claude가 효율적으로 작업해요.

---

## 패턴별 권장 설정

| 프로젝트 유형 | 권장 조합 |
|--------------|-----------|
| **작은 모노레포** (3~5 패키지) | 중첩 CLAUDE.md만으로도 충분 |
| **중간 모노레포** (10개 이상 패키지) | 중첩 CLAUDE.md + 패키지별 스킬 |
| **대형 단일 트리** (수십만 줄) | 스파스 워크트리 + 최상위 CLAUDE.md 폴더 지도 |
| **마이크로서비스** (서비스별 레포) | 각 레포에 독립 CLAUDE.md |

---

## 실전 체크리스트

대형 코드베이스에 Claude Code를 처음 도입할 때:

- [ ] 최상위 `CLAUDE.md`에 전체 폴더 구조 설명 작성
- [ ] 주요 패키지마다 하위 `CLAUDE.md` 작성 (테스트 명령어, 의존성 특이사항 포함)
- [ ] `.worktreeinclude` 파일로 작업 범위 제한 (필요 시)
- [ ] 자주 쓰는 작업은 스킬로 등록
- [ ] `/context` 명령어로 Claude가 실제 무엇을 읽고 있는지 확인

```bash
# 현재 컨텍스트 확인
/context

# 로드된 설정 확인
/doctor
```

---

## 더 알아보기

- [공식 문서: large-codebases](https://code.claude.com/docs/en/large-codebases)
- [CLAUDE.md 작성 가이드](/docs/config/claude-md)
- [워크트리 가이드](/docs/advanced/worktrees) — 병렬 작업과 스파스 워크트리
- [스킬 가이드](/docs/config/skills-guide) — 반복 작업 자동화
