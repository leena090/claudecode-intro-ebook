---
title: "[공] 대규모 코드베이스 설정 — 모노레포와 큰 프로젝트에서 Claude 제대로 쓰기"
description: "여러 패키지가 한 폴더에 있는 모노레포(monorepo)나 파일 수천 개짜리 대형 프로젝트에서 Claude Code가 올바른 코드만 집중해 보도록 설정하는 방법"
tags: ["monorepo", "모노레포", "대규모코드", "CLAUDE.md", "워크트리", "고급", "자동생성"]
category: "advanced"
order: 29
lastUpdated: "2026-06-12"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/large-codebases" target="_blank">공식 문서: code.claude.com/docs/en/large-codebases</a>
</div>

## 왜 대규모 코드베이스 설정이 필요한가요?

작은 프로젝트(파일 수십 개)에서는 Claude가 프로젝트 전체를 읽어도 무리가 없어요. 하지만 **모노레포**나 대형 프로젝트(파일 수천 개)에서는 다릅니다.

> 🍱 **비유**: 작은 도서관(소규모 프로젝트)에서는 사서가 책 위치를 다 외우지만, 대형 국립 도서관(대규모 프로젝트)에서는 분류 체계 없이는 원하는 책을 찾기 힘든 것처럼요.

**모노레포(monorepo)란?**
여러 개의 독립적인 프로젝트나 패키지가 하나의 저장소(repository)에 함께 있는 구조예요.

```
my-company-repo/
├── packages/
│   ├── frontend/      ← 프론트엔드 앱
│   ├── backend/       ← 백엔드 API
│   ├── shared/        ← 공통 라이브러리
│   └── mobile/        ← 모바일 앱
└── tools/
    └── cli/
```

---

## 방법 1: 중첩 CLAUDE.md 파일

각 패키지 폴더에 **별도의 CLAUDE.md** 를 두면 Claude가 해당 패키지 맥락에 집중해요.

```
my-company-repo/
├── CLAUDE.md              ← 전체 공통 규칙
├── packages/
│   ├── frontend/
│   │   └── CLAUDE.md      ← 프론트엔드 전용 규칙
│   └── backend/
│       └── CLAUDE.md      ← 백엔드 전용 규칙
```

**루트 CLAUDE.md 예시:**
```markdown
# 공통 규칙
- 모든 커밋은 Conventional Commits 형식 사용
- 영어로만 코드 작성
```

**frontend/CLAUDE.md 예시:**
```markdown
# 프론트엔드 전용
- React 18 + TypeScript 사용
- 스타일: Tailwind CSS
- 절대로 inline style 사용하지 말 것
```

`frontend/` 폴더에서 Claude를 실행하면 루트 + frontend 두 파일을 모두 읽어요. `[공]`

---

## 방법 2: 패키지별 Skills

자주 쓰는 패턴을 **Skills(스킬)** 로 만들어두면 Claude가 각 패키지 맥락에 맞게 작업해요.

```bash
# 백엔드 패키지에서만 쓰는 스킬
packages/backend/.claude/skills/
├── create-endpoint.md    ← API 엔드포인트 생성 패턴
└── db-migration.md       ← DB 마이그레이션 패턴
```

---

## 방법 3: Sparse Worktree (듬성듬성 작업 트리)

파일이 너무 많아서 Claude가 전체를 다 읽지 않아야 할 때, **필요한 부분만 보이게** 할 수 있어요.

> 🍱 **비유**: 창고에 물건이 너무 많을 때 — 오늘 필요한 물건만 앞으로 꺼내두는 것처럼, 지금 작업에 필요한 파일만 Claude에게 보여줘요.

```bash
# 현재 작업 범위를 packages/frontend만으로 제한
git sparse-checkout set packages/frontend

# Claude는 이제 frontend 폴더만 봐요
claude
```

---

## 방법 4: Code Intelligence 연동

대형 저장소에서 Claude가 함수 정의를 찾거나 관련 파일을 빠르게 찾으려면 코드 인덱스(code intelligence) 설정이 도움이 돼요.

```json
// settings.json
{
  "codeIntelligence": {
    "enabled": true,
    "indexPath": ".claude/index"
  }
}
```

이렇게 하면 Claude가 `grep`으로 전체를 뒤지지 않아도 빠르게 관련 코드를 찾아요.

---

## 실전 권장 설정 (모노레포)

```
my-project/
├── CLAUDE.md                     ← 전사 공통 규칙
├── .claude/
│   └── settings.json             ← 전체 설정
├── packages/
│   ├── frontend/
│   │   ├── CLAUDE.md             ← 프론트 전용
│   │   └── .claude/skills/       ← 프론트 스킬
│   └── backend/
│       ├── CLAUDE.md             ← 백엔드 전용
│       └── .claude/skills/       ← 백엔드 스킬
```

<div class="note-circle">
○ 모노레포가 아니더라도 파일 500개 이상이면 패키지별 CLAUDE.md 분리를 추천해요<br />
○ 처음엔 루트 CLAUDE.md만 만들고, 필요할 때마다 하위 CLAUDE.md를 추가하세요<br />
○ Sparse Worktree는 git 명령어라 처음엔 어색할 수 있어요 — 먼저 중첩 CLAUDE.md만 써봐요
</div>
