---
title: "[공] 주간 업데이트: 2026년 6월 8일 ~ 12일 (Week 24)"
description: "/cd로 세션 내 폴더 이동, 서브에이전트가 서브에이전트를 생성하는 재귀 에이전트, 설정 오류 복구를 위한 safe mode"
tags: ["업데이트", "2026", "week24", "cd-command", "subagents", "safe-mode", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-26"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 24 (2026-06-08 ~ 2026-06-12) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w24</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ `/cd` — Claude와 대화 중에 폴더 이동 🗂️

이제 **`/cd`** 명령어로 Claude Code 세션을 종료하지 않고도 **작업 폴더(디렉토리)를 바꿀 수 있어요.**

```bash
# 현재 폴더 확인
> pwd
/Users/me/project-a

# Claude 대화 중에 다른 폴더로 이동
> /cd ../project-b

# 이제 project-b 폴더에서 작업
> ls
README.md  src/  package.json
```

> 🍱 **비유**: 예전엔 Claude Code를 쓰다 다른 프로젝트로 이동하려면 대화를 끊고 새로 시작해야 했어요. 이제는 통화 중에 앱을 전환하는 것처럼 — 대화를 유지하면서 작업 공간만 바꿀 수 있어요.

**언제 유용할까요?**

| 상황 | 사용 예시 |
|------|-----------|
| 여러 프로젝트를 동시에 참조할 때 | `/cd ../backend` → `/cd ../frontend` |
| 공유 라이브러리와 메인 프로젝트를 번갈아 볼 때 | `/cd ~/shared-utils` |
| 테스트 결과를 다른 폴더에서 확인할 때 | `/cd ./test-outputs` |

<div class="note-circle">
○ 세션의 대화 기록은 유지된 채로 폴더만 바뀌어요<br />
○ 상대 경로(`../`)와 절대 경로(`/home/user/`) 모두 사용 가능
</div>

---

### 2️⃣ 재귀 서브에이전트 — 에이전트가 에이전트를 부를 수 있어요 🤖🤖🤖

이제 **서브에이전트(subagent)가 자신만의 서브에이전트를 추가로 생성**할 수 있어요. 이전에는 메인 Claude만 서브에이전트를 부를 수 있었지만, 이제 서브에이전트도 필요할 때 다른 에이전트에게 일을 맡길 수 있어요.

> 🍱 **비유**: 팀장(Claude)이 팀원(서브에이전트)에게 일을 맡겼더니, 그 팀원이 "이 부분은 제가 직접 처리하기 어려워서 다른 전문가(또 다른 서브에이전트)에게 맡겠습니다"라고 하는 것과 같아요. 조직도가 한 단계 더 깊어진 거죠.

**구조 비교:**

```
[이전]                          [이후]
Claude (메인)                   Claude (메인)
├── 서브에이전트 A               ├── 서브에이전트 A
├── 서브에이전트 B               │   ├── 서브에이전트 A-1
└── 서브에이전트 C               │   └── 서브에이전트 A-2
                                ├── 서브에이전트 B
                                └── 서브에이전트 C
```

**어떤 상황에 도움이 될까요?**

| 작업 유형 | 예시 |
|-----------|------|
| 대규모 코드 분석 | 프론트엔드 에이전트가 컴포넌트별 서브에이전트를 생성 |
| 복잡한 테스트 | 테스트 에이전트가 유닛/통합/E2E 에이전트를 각각 생성 |
| 멀티 레포 작업 | 각 레포 담당 에이전트가 파일별 에이전트를 추가 생성 |

<div class="note-circle">
○ 재귀 깊이에는 내부 제한이 있어요 — 무한 루프 방지<br />
○ 복잡한 작업을 더 체계적으로 분할할 수 있어요<br />
○ 고급 기능이에요 — 일반 작업에선 메인 Claude가 직접 처리하는 게 더 빨라요
</div>

---

### 3️⃣ Safe Mode — 설정이 망가졌을 때 복구하는 방법 🔧

Claude Code 설정(CLAUDE.md, 훅, 플러그인 등)이 잘못돼서 아예 시작이 안 될 때를 위한 **Safe Mode(안전 모드)** 가 추가됐어요.

```bash
# Safe Mode로 시작
claude --safe-mode

# 또는 줄인 형태
claude --safe
```

**Safe Mode에서는 뭐가 달라지나요?**

| 항목 | 일반 모드 | Safe Mode |
|------|-----------|-----------|
| CLAUDE.md 파일 | 로드됨 | ⛔ 무시됨 |
| 훅(Hooks) | 실행됨 | ⛔ 비활성화 |
| 플러그인 | 로드됨 | ⛔ 비활성화 |
| 기본 기능 | 정상 | ✅ 정상 |

> 🍱 **비유**: 컴퓨터가 바이러스나 잘못된 드라이버 때문에 부팅이 안 될 때 **"안전 모드(Safe Mode)"** 로 켜는 것과 똑같아요. 기본 기능만 켠 상태로 들어가서 문제를 고칠 수 있어요.

**Safe Mode 활용 흐름:**

```
1. claude --safe-mode 로 시작
2. 어떤 설정이 문제인지 확인
   > /doctor
   > /hooks
3. 문제 있는 설정 수정
4. 일반 모드로 재시작
   > exit
   $ claude (일반 시작)
```

<div class="note-circle">
○ 설정 파일을 잘못 수정해서 Claude가 안 켜질 때 이 방법을 먼저 써보세요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/troubleshooting" target="_blank">Troubleshooting</a>
</div>

---

<div class="note-circle">
○ Week 24 범위: 2026-06-08 ~ 2026-06-12<br />
○ /cd 명령어: 가볍게 쓰기 좋은 실용 단축키<br />
○ Safe Mode: 설정 문제 발생 시 가장 먼저 시도해보세요
</div>
