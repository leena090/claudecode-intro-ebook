---
title: "알아두면 편한 CLI 플래그 모음"
description: "--continue, --auto, --worktree 등 실전에서 자주 쓰는 플래그 총정리"
tags: ["팁", "플래그", "CLI", "세션"]
category: "tips"
order: 5
lastUpdated: "2026-04-06"
---


## CLI 플래그가 뭔가요?

`claude` 명령어 뒤에 붙이는 **옵션**이에요. 실행 방식을 바꿔줍니다.

```bash
claude --continue    ← "--continue"가 플래그
```

---

## 🔥 가장 많이 쓰는 플래그

### `--continue` (줄여서 `-c`) — 어제 하던 거 이어하기

```bash
# Mac 터미널 / Windows PowerShell
claude --continue

# 줄여서
claude -c

# 이어하면서 바로 질문도 가능
claude -c "아까 그 버그 고쳤어?"
```

어제(또는 방금 전) 하던 대화를 **그대로 이어갑니다**. 파일 상태, 대화 내용 전부 기억하고 있어요.

<mark>매일 아침 작업 시작할 때 `claude -c` 로 시작하면 됩니다!</mark>

---

### `--resume` (줄여서 `-r`) — 특정 세션 골라서 이어하기

```bash
# 최근 세션 목록에서 선택
claude --resume

# 특정 세션 ID로 바로 이어가기
claude --resume abc123
```

`--continue`가 "가장 최근 대화"를 이어간다면, `--resume`은 **여러 대화 중 골라서** 이어갈 수 있어요.

<div class="note-circle">
○ --continue = 가장 최근 1개 자동 / --resume = 목록에서 선택
</div>

---

### `--permission-mode auto` — 자동 승인 모드

```bash
claude --permission-mode auto
```

보통 Claude가 파일을 수정하거나 명령어를 실행할 때마다 "이거 해도 돼요?" 하고 물어봐요. 매번 승인하기 귀찮을 때 **auto 모드**를 쓰면 됩니다.

auto 모드는 **위험한 작업만 물어보고, 안전한 건 자동으로 승인**해요.

| 모드 | 동작 |
|------|------|
| **default** | 거의 다 물어봄 |
| **auto** | 안전한 건 자동 승인, 위험한 것만 물어봄 |
| **bypassPermissions** | 아무것도 안 물어봄 (⚠️ 위험!) |

<mark>대부분의 경우 `auto` 모드가 딱 좋아요. 편하면서도 안전합니다.</mark>

---

### `--dangerously-skip-permissions` — 전부 자동 승인 (⚠️ 주의!)

```bash
claude --dangerously-skip-permissions
```

이름에 "dangerously(위험하게)"가 들어있는 이유가 있어요. **모든 권한 확인을 건너뜁니다.**

**언제 쓰나요?**
- 자동화 파이프라인(CI/CD)에서 Claude를 돌릴 때
- Docker 컨테이너 같은 격리 환경에서
- 연습용 빈 프로젝트에서 빠르게 테스트할 때

**언제 쓰면 안 되나요?**
- ❌ 중요한 파일이 있는 폴더에서
- ❌ 실제 운영 서버에서
- ❌ 뭘 하는지 잘 모르는 상태에서

<div class="note-circle">
○ 처음이라면 이 플래그는 쓰지 마세요. `--permission-mode auto`로 충분합니다.
</div>

---

### `--remote` — 웹에서 실행하기

```bash
claude --remote "이 파일 리팩토링 해줘"
```

내 컴퓨터가 아니라 **Anthropic 클라우드**에서 작업을 실행합니다. 컴퓨터를 꺼도 작업이 계속돼요.

---

### `--worktree` — 독립 작업 공간

```bash
claude --worktree feature-new-design
```

현재 프로젝트를 **복사해서 별도의 공간**에서 작업합니다. 원본에 영향을 주지 않아서 안전하게 실험할 수 있어요.

---

## 📋 플래그 조합 예시

### "어제 하던 거 이어서, 자동 승인으로"
```bash
claude -c --permission-mode auto
```

### "이 작업 웹에서 돌려놓고 퇴근"
```bash
claude --remote "전체 테스트 실행하고 결과 정리해줘"
```

### "새로운 기능 실험해보기"
```bash
claude --worktree 실험-새디자인
```

### "자동화 스크립트에서 Claude 실행"
```bash
claude -p "README.md 업데이트" --permission-mode auto
```

---

## 전체 플래그 빠른 참조

| 플래그 | 줄임 | 용도 |
|--------|------|------|
| `--continue` | `-c` | 최근 대화 이어가기 |
| `--resume` | `-r` | 특정 세션 선택해서 이어가기 |
| `--permission-mode auto` | | 안전한 건 자동 승인 |
| `--dangerously-skip-permissions` | | 전부 자동 승인 (⚠️) |
| `--remote` | | 클라우드에서 실행 |
| `--worktree` | | 독립 작업 공간 |
| `--teleport` | | 웹 세션 가져오기 |
| `--model` | `-m` | 모델 지정 |
| `--print` | `-p` | 비대화형 모드 (1회 실행) |
| `--disable-slash-commands` | | 모든 스킬/커맨드 비활성화 |

---

## 다음 단계

플래그를 알았으니 이제 실전에서 활용해보세요! 더 궁금한 건 [FAQ 총정리](/docs/tips/faq)에서 확인하세요.
