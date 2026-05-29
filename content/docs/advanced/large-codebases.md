---
title: "[공] 모노레포·대형 코드베이스에서 Claude Code 설정하기"
description: "여러 프로젝트가 한 저장소에 담긴 모노레포나 초대형 코드베이스에서 Claude Code를 제대로 쓰는 설정법"
tags: ["자동생성", "모노레포", "monorepo", "대형코드", "CLAUDE.md", "nested", "sparse worktree", "skills"]
category: "advanced"
order: 27
lastUpdated: "2026-05-29"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/large-codebases">code.claude.com/docs/en/large-codebases</a><br />
★ 모노레포·대형 코드베이스 전용 설정 가이드입니다. 일반 소규모 프로젝트라면 <a href="/docs/config/claude-md">CLAUDE.md 기본 설정</a>부터 보세요.
</div>

## 코드 창고가 너무 크면 생기는 문제

혼자 작은 프로젝트를 할 땐 Claude Code를 그냥 켜면 되지만, 코드 파일이 수백~수천 개인 대형 저장소에서는 상황이 달라요.

Claude가 "내가 지금 어느 부분을 봐야 하지?"를 모르면:
- 필요 없는 파일까지 읽느라 **느려져요**
- 다른 팀 코드 규칙을 내 코드에 섞어서 **엉뚱한 제안을 해요**
- 컨텍스트 창이 빨리 차서 **자꾸 잊어버려요**

> 🍱 **비유로 설명하면**: 도서관 사서한테 "책 찾아줘"라고 하면 35만 권을 다 뒤져야 하지만, "3층 과학 코너에서 찾아줘"라고 하면 훨씬 빨리 찾아줘요. 큰 프로젝트에서도 Claude한테 "이 부분만 봐줘"를 알려줘야 해요.

---

## 모노레포(monorepo)가 뭔가요?

**모노레포**('모노레포', mono = 하나, repo = 저장소)는 **하나의 저장소에 여러 독립 프로젝트가 함께 들어있는 구조**예요.

```
my-company/              ← 저장소 하나
├── frontend/            ← 웹 프론트엔드 프로젝트
├── backend/             ← API 서버 프로젝트
├── mobile-app/          ← 앱 프로젝트
└── shared-libs/         ← 공통 라이브러리
```

각 폴더마다 언어, 프레임워크, 규칙이 다를 수 있어요. Claude가 이 구조를 이해하게 만드는 게 핵심이에요.

---

## 핵심 설정 3가지

### 1️⃣ 중첩 CLAUDE.md (Nested CLAUDE.md, '네스티드 클로드MD')

루트 폴더에 하나, 각 하위 프로젝트 폴더마다 하나씩 CLAUDE.md 파일을 둬요.

```
my-company/
├── CLAUDE.md               ← "전체 프로젝트 공통 규칙"
├── frontend/
│   └── CLAUDE.md           ← "React 써요. TypeScript 필수예요"
├── backend/
│   └── CLAUDE.md           ← "Python 3.12 써요. PostgreSQL 연결은 이렇게 해요"
└── shared-libs/
    └── CLAUDE.md           ← "여기서 수정하면 frontend·backend 둘 다 영향 가요"
```

Claude는 **현재 작업 중인 폴더부터 위로 올라가며** CLAUDE.md를 겹겹이 읽어요. 상위 규칙 + 해당 폴더 규칙을 합쳐서 사용하죠.

> 🍱 **비유로 설명하면**: 회사 전체 규칙집(루트 CLAUDE.md)이 있고, 각 팀 규칙집(하위 CLAUDE.md)이 따로 있는 것과 같아요. 개발팀에서 일하면 회사 규칙 + 개발팀 규칙을 모두 따르는 거예요. 다른 팀 규칙은 몰라도 돼요.

**루트 CLAUDE.md 예시:**
```markdown
# 회사 전체 규칙
- 모든 커밋 메시지는 한국어로
- PR은 반드시 리뷰 1명 필요
- 비밀번호·API 키는 절대 코드에 직접 쓰지 않기
```

**backend/CLAUDE.md 예시:**
```markdown
# 백엔드 전용 규칙
- Python 3.12 사용
- 데이터베이스: PostgreSQL (포트 5432)
- 테스트: pytest 사용
- API 문서: FastAPI 자동 생성 (/docs 경로)
```

---

### 2️⃣ 패키지별 스킬 (Per-package Skills, '퍼패키지 스킬스')

각 하위 프로젝트마다 전용 스킬(skill)을 배치할 수 있어요. 스킬은 "이 프로젝트에서 자주 쓰는 작업 방법"을 미리 가르쳐두는 파일이에요.

```
frontend/
└── .claude/
    └── skills/
        ├── run-tests.md      ← "프론트엔드 테스트 실행 방법"
        └── deploy-preview.md ← "미리보기 배포 방법"

backend/
└── .claude/
    └── skills/
        ├── run-migrations.md ← "DB 마이그레이션 실행 방법"
        └── seed-data.md      ← "테스트 데이터 삽입 방법"
```

`frontend/` 폴더에서 작업할 때는 frontend 스킬만, `backend/`에서는 backend 스킬만 로드돼요.

---

### 3️⃣ Sparse Worktree (스파스 워크트리)

**초대형 저장소** (수만 개 파일)에서는 일부 폴더만 체크아웃해서 Claude가 불필요한 파일을 아예 볼 수 없게 해요.

```bash
# backend와 shared-libs만 보이게 설정
git sparse-checkout init --cone
git sparse-checkout set backend/ shared-libs/
```

이렇게 하면 `frontend/`는 로컬에 아예 없는 것처럼 돼서, Claude가 실수로 frontend 파일을 건드릴 일이 없어요.

> 🍱 **비유로 설명하면**: 큰 회사 사무실에서 내 팀 구역만 출입증이 통과되고, 다른 팀 구역은 아예 들어갈 수 없는 것과 같아요.

---

## 📋 상황별 설정 추천표

| 저장소 규모 | 구조 | 추천 설정 |
|------------|------|-----------|
| 소규모 (파일 ~500개) | 단일 프로젝트 | 루트 CLAUDE.md 하나만 |
| 중간 (파일 ~5,000개) | 2~5개 하위 프로젝트 | 중첩 CLAUDE.md |
| 대형 (파일 ~50,000개) | 5~20개 하위 프로젝트 | 중첩 CLAUDE.md + 패키지별 스킬 |
| 초대형 (파일 10만개+) | 수십~수백 패키지 | Sparse Worktree + 중첩 CLAUDE.md |

---

## 실전 팁

### ✅ 잘 작동하는 패턴

- 각 CLAUDE.md는 **해당 폴더에서만 유효한 규칙**만 써요 (상위에서 이미 쓴 건 다시 안 써도 돼요)
- 하위 폴더 CLAUDE.md에서 `# This file extends the root CLAUDE.md` 같은 주석으로 관계를 명시하면 관리가 편해요
- 스킬 파일 이름을 동사형으로 (`run-tests.md`, `create-component.md`)

### ❌ 자주 하는 실수

- 루트 CLAUDE.md에 모든 걸 다 몰아넣기 → 너무 길어지면 Claude가 중요한 내용을 놓쳐요
- 서로 다른 폴더의 CLAUDE.md에 **충돌하는 규칙** 쓰기 → 하위 폴더 규칙이 우선이에요, 혼란스러우면 통합하세요

---

## 자주 묻는 질문

**Q. CLAUDE.md를 너무 많이 만들면 복잡하지 않나요?**
분산된 규칙 파일이 오히려 더 깔끔해요. Claude가 현재 작업 맥락에 딱 맞는 규칙만 읽으니까요.

**Q. Claude가 자꾸 이상한 파일을 건드려요.**
`.claudeignore` 파일에 무시할 폴더를 적거나, Sparse Worktree로 아예 보이지 않게 하세요.

**Q. 팀원들이 각자 다른 CLAUDE.md를 쓰면요?**
루트 CLAUDE.md는 공통으로 관리하고, 개인 설정은 `~/.claude/CLAUDE.md` (홈 디렉토리)에 두면 저장소를 건드리지 않아요.
