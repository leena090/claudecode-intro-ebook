---
title: "[공] .claude 폴더 완전 정복 — Claude가 읽는 모든 것"
description: "CLAUDE.md, settings.json, hooks, skills, subagents, rules, auto memory — .claude 디렉토리의 모든 파일이 하는 일을 알기 쉽게 설명합니다"
tags: ["자동생성", "claude-directory", ".claude", "CLAUDE.md", "settings.json", "hooks", "고급"]
category: "advanced"
order: 20
lastUpdated: "2026-04-20"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기반</strong>: <a href="https://code.claude.com/docs/en/claude-directory.md">code.claude.com/docs/en/claude-directory</a><br />
★ Claude Code가 세션을 시작할 때 읽는 모든 파일의 역할을 정리했습니다
</div>

## ".claude 폴더? 처음 들어봤는데요?"

Claude Code를 쓰다 보면 프로젝트 루트에 `.claude`라는 폴더가 생겨요. 이 폴더가 뭔지 모르고 지나치는 분이 많은데, **Claude의 두뇌 역할**을 하는 아주 중요한 폴더예요.

> 🗂️ **비유**: 새로 온 직원(Claude)에게 주는 "업무 매뉴얼 서랍"이에요. 서랍 안에 업무 규칙, 도구 목록, 자동 실행 명령 등이 정리되어 있어서, 출근(세션 시작)할 때마다 꺼내 읽어요.

---

## .claude 폴더의 위치

Claude Code는 두 곳의 `.claude` 폴더를 읽어요:

```
~/.claude/              ← 내 전체 시스템에 적용되는 전역 설정
  ├── settings.json     # 전역 기본 설정
  ├── CLAUDE.md         # 전역 지시사항
  └── hooks/            # 전역 훅

/내프로젝트/.claude/    ← 이 프로젝트에만 적용되는 설정
  ├── CLAUDE.md         # 프로젝트별 지시사항
  ├── settings.json     # 프로젝트 설정
  ├── hooks/            # 프로젝트 훅
  ├── skills/           # 커스텀 스킬
  ├── commands/         # 슬래시 명령어
  ├── subagents/        # 서브에이전트 정의
  └── memory/           # 자동 메모리
```

---

## 각 파일/폴더의 역할

### 📄 CLAUDE.md — 프로젝트 지시서

**가장 중요한 파일이에요.**

세션 시작 시 자동으로 읽혀서 Claude의 행동 방식을 정해요.

```markdown
# 프로젝트명: 내 블로그

## 기술 스택
- Next.js 15, TypeScript, Tailwind CSS
- 데이터베이스: PostgreSQL

## 코딩 규칙
- 한국어로 주석 작성
- 컴포넌트는 반드시 단위 테스트 포함
- console.log 사용 금지 (logger 사용)

## 실행 명령어
- `npm run dev` : 개발 서버
- `npm test` : 테스트
- `npm run build` : 빌드
```

> ✍️ **팁**: 팀 프로젝트라면 CLAUDE.md를 git에 포함시켜 팀원 모두가 동일한 Claude 행동을 경험하게 해요.

---

### ⚙️ settings.json — Claude 행동 설정

권한, 허용 명령어, 모델, 훅 등을 JSON으로 설정해요.

```json
{
  "permissions": {
    "allow": [
      "Bash(npm:*)",
      "Bash(git:*)",
      "Read(**)"
    ],
    "deny": [
      "Bash(rm -rf:*)"
    ]
  },
  "model": "claude-sonnet-4-6"
}
```

전역(`~/.claude/settings.json`)과 프로젝트(`.claude/settings.json`) 설정이 합쳐져서 적용돼요.

---

### 🪝 hooks/ — 자동 실행 스크립트

파일을 수정하거나 Claude 응답이 끝날 때 **자동으로 실행**되는 스크립트예요.

| 훅 이벤트 | 언제 실행? |
|---------|---------|
| `PreToolUse` | Claude가 도구를 쓰기 **직전** |
| `PostToolUse` | Claude가 도구를 쓴 **직후** |
| `Stop` | Claude가 응답을 **완료**했을 때 |
| `Notification` | 알림이 필요할 때 |

**예시: 파일 저장 후 자동 포맷팅**
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "npx prettier --write ${file}"
      }]
    }]
  }
}
```

> ⚙️ **비유**: 자동문처럼요. 사람이 지나가면(파일 수정) 문이 자동으로 열리는(포맷터 실행) 것처럼, 훅은 특정 상황이 되면 자동으로 명령을 실행해요.

👉 자세한 내용: [훅 자동화 가이드](/docs/config/permissions-guide)

---

### 🎯 skills/ — 커스텀 스킬 정의

`/스킬명` 형태로 호출하는 커스텀 명령어예요. 자주 하는 작업을 스킬로 등록해두면 편해요.

```markdown
<!-- .claude/skills/deploy-check.md -->
# deploy-check
배포 전 체크리스트를 실행합니다.

1. `npm test` 실행
2. `npm run build` 확인
3. `git status` 확인
4. 배포 준비 완료 여부 보고
```

```bash
# 사용법
/deploy-check
```

---

### 💬 commands/ — 슬래시 명령어

스킬보다 단순한 빠른 명령어예요. 마크다운 프롬프트 파일로 정의해요.

```
.claude/commands/
  daily-report.md   → /daily-report 로 호출
  code-review.md    → /code-review 로 호출
```

---

### 🤖 subagents/ — 전문 서브에이전트

특정 역할에 특화된 AI 에이전트를 정의해요.

```markdown
<!-- .claude/subagents/security-reviewer.md -->
---
name: security-reviewer
description: 보안 취약점 전문 리뷰어
---
당신은 OWASP Top 10 전문가입니다.
코드에서 XSS, SQL Injection, 인증 취약점을 찾아 보고하세요.
```

👉 자세한 내용: [서브에이전트 만들기](/docs/advanced/agent-teams)

---

### 🧠 memory/ — 자동 메모리

Claude가 자동으로 기억해두는 내용이 저장돼요.

```
.claude/memory/
  learnings.md    ← Claude가 배운 것들을 자동으로 기록
  preferences.md  ← 내 선호도 자동 기록
```

`/memory add` 명령으로 수동으로 추가할 수도 있어요.

> 🗒️ **비유**: 직원이 업무 중 새로 알게 된 내용을 자신의 메모장에 기록하는 것처럼요. 다음 세션에도 그 내용을 기억해요.

---

## 전체 구조 요약 다이어그램

```
세션 시작
    ↓
~/.claude/CLAUDE.md     ← 전역 지시사항 읽기
    ↓
.claude/CLAUDE.md       ← 프로젝트 지시사항 읽기
    ↓
settings.json 적용      ← 권한, 모델 설정
    ↓
hooks 등록              ← 자동 실행 설정
    ↓
skills, commands 로드   ← /명령어 등록
    ↓
memory 로드             ← 이전 학습 내용 복원
    ↓
✅ Claude 준비 완료!
```

---

## 처음 시작하는 분을 위한 최소 설정

`.claude` 폴더가 없어도 Claude Code는 잘 작동해요. 하지만 있으면 훨씬 편리해요.

**최소 권장 설정:**
```bash
# 프로젝트 루트에서
mkdir .claude

cat > .claude/CLAUDE.md << 'EOF'
# 프로젝트 설명
(여기에 프로젝트 소개 한 문단)

## 코딩 규칙
- (팀 코딩 스타일)

## 자주 쓰는 명령어
- npm run dev : 개발 서버
EOF
```

이것만 해도 Claude가 매 세션마다 프로젝트를 이해하고 시작해요!

---

*출처: [공] [code.claude.com/docs/en/claude-directory](https://code.claude.com/docs/en/claude-directory.md) (공식 발표 기준)*
