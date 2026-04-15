---
title: "새 PC로 설정 옮기기 — dotfiles 동기화"
description: "클로드 코드의 스킬, 에이전트, 메모리, 훅을 GitHub으로 백업하고 새 컴퓨터에서 한 줄로 복원하는 방법"
tags: ["동기화", "백업", "dotfiles", "새PC", "설정"]
category: "config"
order: 7
lastUpdated: "2026-04-15"
---

## 왜 동기화가 필요한가요?

클로드 코드의 모든 설정은 **내 컴퓨터 로컬**에 저장됩니다. 새 맥북을 사거나, 회사 PC와 집 PC를 오가며 작업한다면? **스킬, 메모리, 훅이 전부 따로** 놀게 됩니다.

| 항목 | 자동 동기화? | 저장 위치 |
|------|:---:|------|
| Claude 계정/구독 | ✅ | Anthropic 클라우드 |
| 대화 기록 | ✅ | Anthropic 클라우드 |
| **스킬/커맨드** | ❌ | `~/.claude/commands/` |
| **에이전트** | ❌ | `~/.claude/agents/` |
| **메모리** | ❌ | `~/.claude/projects/*/memory/` |
| **훅** | ❌ | `~/.claude/hooks/` |
| **settings.json** | ❌ | `~/.claude/settings.json` |
| **CLAUDE.md** | ❌ | `~/.claude/CLAUDE.md` |

> 💡 **핵심 요약**: 로그인 정보만 클라우드에 있고, **실제로 클로드를 똑똑하게 만든 모든 것**은 내 컴퓨터에만 있습니다.

---

## 해결책: GitHub Private Repo

가장 깔끔한 방법은 `~/.claude/` 폴더의 핵심 파일만 골라서 **비공개 GitHub 저장소**에 보관하는 것입니다.

### 왜 GitHub인가요?

- **버전 관리** — 설정을 바꿨다가 문제가 생기면 이전 상태로 되돌릴 수 있습니다
- **선택적 동기화** — `.gitignore`로 API 키 같은 민감한 파일은 제외합니다
- **복원 속도** — 터미널에서 명령어 한 줄이면 끝입니다

---

## Step 1: 동기화 대상 정하기

모든 파일을 올릴 필요는 없습니다. 아래 기준으로 나눕니다.

### ✅ 포함할 것 (내가 만든 설정)

```
~/.claude/
├── CLAUDE.md              ← 나만의 지시사항
├── settings.json          ← 훅, 권한, MCP 설정
├── commands/              ← 슬래시 커맨드 (스킬)
├── agents/                ← 에이전트 정의 파일
├── skills/                ← 스킬 팩 (SKILL.md + references)
├── hooks/                 ← 자동 실행 스크립트
├── refs/                  ← 레퍼런스 문서
└── projects/*/memory/     ← 프로젝트 메모리
```

### ❌ 제외할 것 (자동 생성되는 캐시/로그)

```
sessions/          ← 세션 임시 데이터
cache/             ← 캐시
logs/              ← 로그
backups/           ← 자동 백업 (대용량)
file-history/      ← 파일 변경 이력
history.jsonl      ← 대화 기록 (대용량)
settings.local.json ← PC별 로컬 설정
```

---

## Step 2: 저장소 만들기

### 2-1. 폴더 초기화

```bash
mkdir -p ~/.claude/dotfiles-repo
cd ~/.claude/dotfiles-repo
git init
```

### 2-2. .gitignore 만들기

민감 정보와 대용량 캐시를 제외합니다.

```bash
cat > .gitignore << 'EOF'
# 캐시/로그 (PC별 고유)
sessions/
cache/
logs/
telemetry/
backups/
file-history/
paste-cache/
shell-snapshots/
downloads/
tasks/
teams/
channels/

# 민감 정보
settings.local.json
mcp-needs-auth-cache.json
*.env
*credentials*
*secret*

# 대용량
history.jsonl

# OS
.DS_Store
EOF
```

### 2-3. 핵심 파일 복사

```bash
# 설정 파일
cp ~/.claude/CLAUDE.md .
cp ~/.claude/settings.json .

# 스킬, 에이전트, 훅, 레퍼런스
cp -r ~/.claude/commands .
cp -r ~/.claude/agents .
cp -r ~/.claude/skills .
cp -r ~/.claude/hooks .
cp -r ~/.claude/refs .

# 메모리 (프로젝트별)
mkdir -p projects
for d in ~/.claude/projects/*/; do
  name=$(basename "$d")
  mkdir -p "projects/$name"
  [ -d "$d/memory" ] && cp -r "$d/memory" "projects/$name/"
done
```

### 2-4. GitHub에 올리기

```bash
git add -A
git commit -m "Initial: Claude Code dotfiles"

# GitHub CLI로 비공개 저장소 생성 + 푸시
gh repo create my-claude-dotfiles --private --source=. --push
```

> ⚠️ **반드시 `--private`** 옵션을 사용하세요! settings.json에 MCP 서버 경로 등 개인 정보가 있을 수 있습니다.

---

## Step 3: 새 PC에서 복원하기 (가장 중요!)

새 컴퓨터를 세팅할 때, 이 **세 줄**만 실행하면 됩니다:

```bash
# 1. 저장소 다운로드
git clone https://github.com/내아이디/my-claude-dotfiles.git ~/.claude/dotfiles-repo

# 2. 폴더로 이동
cd ~/.claude/dotfiles-repo

# 3. 설치 스크립트 실행
bash setup.sh
```

`setup.sh`는 각 파일을 `~/.claude/` 안의 올바른 위치에 **심볼릭 링크**로 연결합니다. 원본은 git 저장소에 있으므로, 나중에 변경사항을 push하면 자동으로 반영됩니다.

---

## Step 4: 변경사항 업데이트

스킬을 새로 만들거나, 메모리가 추가되면:

```bash
cd ~/.claude/dotfiles-repo
git add -A
git commit -m "스킬 추가: /새로운스킬"
git push
```

> 💡 **팁**: 클로드에게 "dotfiles 업데이트해줘"라고 말하면 이 과정을 자동으로 해줍니다.

---

## 주의사항

### MCP 서버 경로

`settings.json`의 MCP 서버 설정에는 **절대 경로**가 포함되어 있습니다:

```json
"capcut-api": {
  "command": "/Users/mylee/Desktop/nomore-company/VectCutAPI/.venv/bin/python3"
}
```

새 PC에서는 사용자 이름이 다를 수 있으므로, 복원 후 경로를 확인하세요.

### API 키는 절대 올리지 마세요

`.env` 파일이나 API 키가 포함된 파일은 `.gitignore`에 추가되어 있지만, **커밋 전 항상 확인**하는 습관을 들이세요.

```bash
# 커밋 전 확인
git diff --staged | grep -i "key\|token\|secret\|password"
```

---

## 요약 체크리스트

| 단계 | 할 일 | 명령어 |
|:---:|------|------|
| 1 | 저장소 만들기 | `gh repo create --private` |
| 2 | 핵심 파일 복사 | `cp -r commands agents skills hooks refs .` |
| 3 | GitHub에 올리기 | `git add -A && git commit && git push` |
| 4 | **새 PC에서 복원** | `git clone → bash setup.sh` |
| 5 | 변경사항 반영 | `git add -A && git push` |

> 한 번 세팅해두면, 어느 컴퓨터에서든 **내 클로드**를 그대로 사용할 수 있습니다. 스킬도, 메모리도, 훅도 전부요.
