---
title: "[공] 대규모 코드베이스·모노레포 설정 — 큰 프로젝트에서 Claude 집중시키기"
description: "수십만 줄 규모 프로젝트나 모노레포에서 Claude가 엉뚱한 파일에 시간 낭비하지 않도록 설정하는 방법. 중첩 CLAUDE.md, sparse worktrees, code intelligence, per-package skills 활용법"
tags: ["고급", "모노레포", "large-codebase", "CLAUDE.md", "worktree", "자동생성"]
category: "advanced"
order: 30
lastUpdated: "2026-06-10"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026-05 Claude Code 공식 문서 신규 추가. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 큰 프로젝트에서 Claude가 헤매는 이유

작은 프로젝트(파일 수십 개)에서는 Claude가 빠르게 전체를 파악해요. 하지만 **수백~수천 개 파일**, **여러 패키지가 섞인 모노레포(monorepo)** 에서는 다른 이야기가 돼요.

> 🍱 **비유**: 동네 슈퍼마켓(소형 프로젝트)에서는 어디에 뭐가 있는지 금방 파악하지만, 대형 창고형 마트(대형 프로젝트)에서는 라면이 식품관 A동 3층인지, 생활용품관 B동 1층인지 매번 헤매는 것처럼요. 안내 지도가 필요해요.

이 문서에서는 Claude에게 **"어디만 집중하면 되는지"** 를 알려주는 4가지 방법을 설명해요.

---

## 방법 1: 중첩 CLAUDE.md — 각 폴더마다 맞춤 지침

`CLAUDE.md` 파일을 **프로젝트 루트뿐 아니라 각 패키지 폴더에도** 따로 넣을 수 있어요.

```
my-monorepo/
├── CLAUDE.md          ← 전체 프로젝트 공통 지침
├── packages/
│   ├── frontend/
│   │   └── CLAUDE.md  ← 프론트엔드 전용 지침
│   ├── backend/
│   │   └── CLAUDE.md  ← 백엔드 전용 지침
│   └── shared/
│       └── CLAUDE.md  ← 공통 라이브러리 지침
```

**frontend/CLAUDE.md 예시:**
```markdown
# Frontend Package

## 기술 스택
- React 18 + TypeScript
- Tailwind CSS (클래스명 줄이기 지향)
- 상태 관리: Zustand만 사용 (Redux 금지)

## 파일 컨벤션
- 컴포넌트: PascalCase.tsx
- 훅: use로 시작, camelCase.ts

## 주의사항
- `src/legacy/` 폴더는 건드리지 말 것 (레거시, 리팩토링 예정)
```

> 🍱 **비유**: 부서마다 다른 업무 지침서를 두는 것처럼 — 개발팀 지침서, 디자인팀 지침서, 영업팀 지침서가 각각 따로 있는 거예요.

Claude는 어느 패키지 폴더에서 작업하느냐에 따라 **그 폴더의 CLAUDE.md를 우선 적용**해요.

---

## 방법 2: Sparse Worktrees — 필요한 부분만 꺼내오기

**Sparse worktrees** 를 쓰면 전체 모노레포에서 **지금 당장 필요한 패키지만 가져와서** Claude가 집중할 수 있어요.

```bash
# payment 패키지만 별도 worktree로 꺼내기
git worktree add ../payment-work --sparse
cd ../payment-work
git sparse-checkout set packages/payment packages/shared
```

이렇게 하면 Claude는 `packages/payment`와 `packages/shared`만 보고, 나머지 200개 폴더는 신경 안 써요.

> 🍱 **비유**: 도서관 전체(전체 모노레포)에서 필요한 책 3권(관련 패키지)만 뽑아서 따로 독서실에 가져가는 거예요 — 집중력이 훨씬 올라가요.

**`.worktreeinclude` 파일로 자동화:**
```
# .worktreeinclude
packages/payment/**
packages/shared/**
packages/auth/**
```

```bash
# 설정 파일에 따라 자동으로 sparse checkout
claude --worktree packages/payment
```

---

## 방법 3: Code Intelligence — Claude가 전체 구조를 미리 파악

**Code Intelligence** 설정을 켜면 Claude가 프로젝트의 **전체 심볼(함수·클래스·변수) 인덱스**를 미리 만들어요. 덕분에 파일을 일일이 읽지 않고도 "이 함수가 어디 있는지" 빠르게 파악해요.

```json
// .claude/settings.json
{
  "codeIntelligence": {
    "enabled": true,
    "indexPaths": ["packages/", "src/"],
    "excludePaths": ["node_modules/", "dist/", "legacy/"]
  }
}
```

> 🍱 **비유**: 도서관에 책 목록 카드가 있으면 (Code Intelligence 인덱스), 원하는 책을 찾으러 모든 서가를 돌아다닐 필요 없이 카드만 보면 되는 것처럼요.

**효과:**
- 함수 정의·참조 찾기 속도 10배 이상 빨라짐
- "이 함수를 쓰는 곳이 어디야?" 같은 질문에 즉각 답변
- 대규모 리팩토링 시 영향 범위 빠르게 분석

---

## 방법 4: Per-Package Skills — 패키지별 특화 명령어

**Per-package skills** 는 각 패키지 폴더에 전용 명령어를 만들어서, Claude가 그 패키지에서 작업할 때만 쓸 수 있게 해요.

```
packages/payment/.claude/
└── skills/
    ├── run-payment-tests.md  ← 결제 테스트만 실행
    ├── deploy-staging.md     ← 스테이징 배포
    └── audit-transactions.md ← 거래 내역 감사
```

**`run-payment-tests.md` 예시:**
```markdown
# 결제 패키지 테스트 실행

결제 관련 테스트만 격리해서 실행해줘:
1. 먼저 `packages/payment/` 디렉토리로 이동
2. `npm run test:payment` 실행
3. 실패 시 에러 메시지를 한국어로 요약해줘
```

```bash
# 사용 방법
/run-payment-tests
```

> 🍱 **비유**: 결제팀에는 결제 업무 전용 체크리스트, 배송팀에는 배송 전용 체크리스트 — 팀마다 자기 업무에 맞는 도구를 따로 갖는 거예요.

---

## 4가지 방법 한눈에 비교

| 방법 | 효과 | 적합한 상황 |
|------|------|------------|
| **중첩 CLAUDE.md** | 패키지별 컨텍스트 제공 | 항상 권장 |
| **Sparse Worktrees** | 집중 범위 좁히기 | 특정 패키지만 작업 시 |
| **Code Intelligence** | 전체 심볼 빠르게 탐색 | 함수/클래스 참조가 많은 대형 프로젝트 |
| **Per-Package Skills** | 반복 작업 자동화 | 패키지별 특수 명령어가 있을 때 |

---

## 권장 설정 (대형 모노레포 기준)

```
1. 루트 CLAUDE.md 작성 (전체 프로젝트 개요)
2. 각 주요 패키지에 CLAUDE.md 추가
3. .claude/settings.json에 codeIntelligence 켜기
4. 자주 쓰는 작업은 per-package skills로 등록
5. 특정 패키지만 집중할 때는 --worktree 사용
```

<div class="note-circle">
○ 처음부터 완벽하게 설정하려 하지 마세요 — CLAUDE.md 하나만 시작해도 효과가 있어요<br />
○ 프로젝트가 커질수록 설정도 점진적으로 추가하는 게 좋아요
</div>

📄 관련 내용 → [CLAUDE.md 기초 가이드](/docs/config/claude-md) | [Worktrees 고급 활용](/docs/advanced/worktrees)
