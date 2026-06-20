---
title: "[공] 주간 업데이트: 2026년 6월 8일 ~ 12일 (Week 24)"
description: "/cd로 세션 디렉토리 이동, 서브에이전트가 서브에이전트 생성, safe mode로 설정 문제 진단"
tags: ["업데이트", "2026", "week24", "cd-command", "subagents", "safe-mode", "fallback-model", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-06-20"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 24 (2026-06-08 ~ 2026-06-12) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w24</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ /cd — 세션을 끊지 않고 다른 폴더로 이동 📁

새 명령어 `/cd`로 **현재 대화(세션)를 유지한 채로 작업 폴더를 바꿀 수** 있어요.

```text
# 현재 세션에서 다른 프로젝트 폴더로 이동
> /cd ../other-project

# 절대 경로도 사용 가능
> /cd /home/user/my-new-project
```

**기존 방법 vs /cd 비교:**

| | 기존 방법 | `/cd` 사용 |
|--|-----------|-----------|
| 대화 이어가기 | ❌ 새 세션 시작 | ✅ 이어서 진행 |
| 프롬프트 캐시 | 새로 로딩 | 유지됨 |
| CLAUDE.md 적용 | 새 세션 전체 교체 | 새 폴더 것이 추가됨 |
| `--resume` 위치 | 이전 폴더 | 새 폴더 기준으로 저장 |

처음 방문하는 폴더면 "이 폴더를 신뢰할까요?" 라고 한 번 물어봐요.

> 🍱 **비유**: 이사 없이 집을 바꾸는 것과 같아요. 짐(대화 내용)을 그대로 갖고 다른 방(폴더)으로 들어가요. 새 방에는 새 방 규칙(CLAUDE.md)이 추가되지만, 지금까지 나눈 대화는 그대로예요.

---

### 2️⃣ 서브에이전트가 서브에이전트를 만들 수 있어요 🤖🤖

이제 **서브에이전트(subagent, 하위 에이전트)가 자기 자신의 서브에이전트를 추가로 만들 수** 있어요. 복잡한 작업을 트리(나무) 구조로 나누어 처리해요.

```text
# 에이전트 트리 구조 보기
> /agents
```

**작동 방식:**

```
메인 에이전트
├── 서브에이전트 A (1단계)
│   ├── 서브에이전트 A-1 (2단계)
│   └── 서브에이전트 A-2 (2단계)
└── 서브에이전트 B (1단계)
    └── 서브에이전트 B-1 (2단계)
        └── 서브에이전트 B-1-1 (3단계, 최대 5단계)
```

- `/agents` 패널에서 각 에이전트의 하위 에이전트 수와 경로 확인 가능
- **최대 5단계 깊이까지만** 허용 (무한 증식 방지)

> 🍱 **비유**: 팀장이 팀원에게 일을 맡기면, 팀원도 자기 밑에 인턴을 쓸 수 있는 것과 같아요. 단, 관리 복잡도 때문에 조장-팀원-인턴까지 5단계만 허용해요.

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/sub-agents#spawn-nested-subagents" target="_blank">중첩 서브에이전트 생성</a>
</div>

---

### 3️⃣ Safe Mode(세이프 모드) — 설정 문제를 깔끔하게 진단 🔧

Claude Code가 뭔가 이상하게 작동할 때, **모든 커스터마이징을 끈 채로 시작**해서 어디서 문제가 생겼는지 찾을 수 있어요.

```bash
# 커맨드로 시작
claude --safe-mode

# 환경변수로 설정
export CLAUDE_CODE_SAFE_MODE=1
```

**Safe Mode에서 꺼지는 것:**

| 꺼지는 항목 | 예시 |
|-------------|------|
| CLAUDE.md | 프로젝트·홈 디렉토리 모두 |
| Skills(스킬) | 커스텀 명령어 포함 |
| Plugins(플러그인) | 설치된 모든 플러그인 |
| Hooks(훅) | PreToolUse, PostToolUse 등 |
| MCP 서버 | 모든 외부 도구 연결 |
| 커스텀 subagents | 정의된 커스텀 에이전트 |

**Safe Mode에서도 살아있는 것:**

| 계속 작동 | 내용 |
|-----------|------|
| 인증 | 로그인 상태 유지 |
| 모델 선택 | 사용하던 모델 유지 |
| 기본 도구 | Read, Edit, Bash 등 |
| 권한 설정 | 기본 권한 동작 |

> 🍱 **비유**: 컴퓨터가 이상할 때 "안전 모드로 부팅" 하는 것과 똑같아요. 불필요한 프로그램을 모두 끄고 기본 상태로만 켜봐서, 어떤 프로그램이 문제였는지 골라내요.

**Safe Mode에서 문제가 사라진다면?** → CLAUDE.md, 플러그인, 훅, MCP 서버 중 하나가 원인이에요.

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/debug-your-config#test-against-a-clean-configuration" target="_blank">깔끔한 설정으로 테스트</a>
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|------|------|
| `fallbackModel` 체인 | 기본 모델 실패 시 최대 **3개 대체 모델**을 순서대로 시도 (`--fallback-model`도 대화형에서 동작) |
| 세션 제목 자동 언어 | 한국어로 대화하면 세션 제목도 한국어로 생성 (`language` 설정으로 고정 가능) |
| `claude agents --json --all` | 완료된 세션 포함, `id`·`state` 필드 추가, 차단·예약 세션도 포함 |
| 플러그인 마켓플레이스 검색 | `/plugin` 메뉴에 검색창 추가 |
| `disableBundledSkills` | 기본 내장 스킬·워크플로·명령어를 모델에게 숨기는 새 설정 |
| deny rules 글로브 지원 | 도구 이름 위치에 `"*"` 사용 시 모든 도구 차단, 알 수 없는 이름은 시작 시 경고 |
| 세션 간 메시지 보안 강화 | `SendMessage`로 전달된 메시지가 사용자 권한을 넘겨받지 않음, auto mode에서 차단 |
| Bedrock 리전 자동 감지 | `AWS_REGION` 미설정 시 `~/.aws` 설정 파일에서 자동 읽기 |
| `enforceAvailableModels` | `availableModels` 허용 목록이 기본 모델도 제한 |
| Chrome 도구 일괄 호출 | 여러 도구를 한 번의 호출로 처리해 속도 향상 |
| `claude update` 알림 | 다운로드 전에 목표 버전 번호 먼저 표시 |
| `footerLinksRegexes` | 정규식 매핑으로 하단 바에 커스텀 링크 뱃지 추가 |

---

<div class="note-circle">
○ Week 24 범위: Claude Code v2.1.166 ~ v2.1.176<br />
○ 세션 제목 자동 언어화 — 한국어 대화 시 한국어 제목이 붙어요!
</div>
