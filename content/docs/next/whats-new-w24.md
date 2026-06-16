---
title: "[공] 주간 업데이트: 2026년 6월 8일 ~ 12일 (Week 24)"
description: "/cd로 세션 작업 폴더 전환, 서브에이전트가 서브에이전트 생성, --safe-mode로 설정 초기화 진단"
tags: ["업데이트", "2026", "week24", "cd-command", "sub-agents", "safe-mode", "fallback-model", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-06-16"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 24 (2026-06-08 ~ 2026-06-12) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w24</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Claude Code가 안 켜진다고요? `--safe-mode`로 원인 찾기 🚑

Claude Code를 쓰다 보면 플러그인, 훅(hook), CLAUDE.md 설정이 꼬여서 이상하게 작동하거나 아예 안 켜지는 경우가 생겨요. 이럴 때 **`--safe-mode`(세이프 모드)** 로 실행하면 모든 커스텀 설정을 무시하고 기본 상태로만 실행해줘요.

```bash
# 안전 모드로 실행
claude --safe-mode

# 또는 환경변수로 설정
export CLAUDE_CODE_SAFE_MODE=1
```

**세이프 모드에서 꺼지는 것들:**

| 꺼지는 기능 | 예시 |
|------------|------|
| CLAUDE.md 파일 | 프로젝트/전역 지침 무시 |
| Skills (스킬) | 커스텀 슬래시 명령어 없음 |
| Plugins (플러그인) | 설치된 플러그인 모두 비활성화 |
| Hooks (훅) | 자동 실행 스크립트 없음 |
| MCP 서버 | 외부 도구 연결 없음 |

**세이프 모드에서 켜져 있는 것들:**

| 켜지는 기능 | 설명 |
|------------|------|
| 인증(로그인) | 계정 연결은 그대로 |
| 모델 선택 | 어떤 모델 쓸지는 작동 |
| 기본 도구 | Read, Edit, Bash 등 내장 도구 |
| 권한 설정 | 기본 권한 체계 |

> 🍱 **비유**: 컴퓨터가 이상할 때 "안전 모드(Safe Mode)로 부팅"하는 것과 완전히 같아요. 기본 드라이버만 올리고 서드파티 프로그램은 다 끈 채로 켜보는 거예요. 세이프 모드에서는 정상 → 일반 모드에서만 문제 → 커스텀 설정 중에 문제 있다는 뜻이에요.

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/debug-your-config#test-against-a-clean-configuration" target="_blank">Test against a clean configuration</a>
</div>

---

### 2️⃣ `/cd` — 세션 종료 없이 작업 폴더 이동 📂

지금까지 다른 프로젝트 폴더로 이동하려면 Claude Code를 종료하고 다시 열어야 했어요. 이제 **`/cd` 명령어**로 세션을 유지한 채 작업 디렉토리(폴더)를 바꿀 수 있어요.

```text
> /cd ../other-project
> /cd ~/Documents/my-app
```

**기존 방식 vs 새 방식 비교:**

| 방식 | 캐시 유지? | CLAUDE.md 처리 |
|------|-----------|----------------|
| 종료 후 재시작 | ❌ 처음부터 | 시스템 프롬프트로 교체 |
| `/cd` 명령어 | ✅ 유지 | 메시지로 추가(교체 아님) |

> 🍱 **비유**: 편의점에서 일하다가 옆 편의점으로 파견 나가는 것과 같아요. 퇴근하고 다음날 새로 출근하는 게 아니라, 바로 걸어가서 이어서 일하는 거예요. 그동안 배운 내용(캐시)은 다 기억하고 있어요.

<div class="note-circle">
○ 처음 들어가는 폴더라면 "신뢰할까요?" 확인 메시지가 떠요 (보안 기능)<br />
○ `--resume`·`--continue`도 새 폴더 기준으로 찾아줘요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/commands#all-commands" target="_blank">Commands reference</a>
</div>

---

### 3️⃣ 서브에이전트가 서브에이전트를 만든다 — 중첩 에이전트 트리 🌳

[서브에이전트(Sub-agents)](/docs/advanced/agents-parallel)는 Claude가 복잡한 작업을 할 때 만드는 "도우미 Claude"예요. 이제 그 도우미가 **또 다른 도우미를 만들 수** 있게 됐어요. 마치 나뭇가지처럼 퍼지는 구조예요.

```text
# 에이전트 트리 확인
> /agents
```

**트리 구조 예시:**

```
main Claude
├── 서브에이전트 A (리서치 담당)
│   ├── 서브에이전트 A-1 (파일 1 분석)
│   └── 서브에이전트 A-2 (파일 2 분석)
└── 서브에이전트 B (수정 담당)
    └── 서브에이전트 B-1 (테스트 실행)
```

| 항목 | 내용 |
|------|------|
| 백그라운드 에이전트 최대 깊이 | 5단계 (무한 중첩 방지) |
| 포그라운드 에이전트 | 제한 없음 (자연스럽게 수렴) |
| `/agents` 패널 | 자손 수 + main까지 경로 표시 |

> 🍱 **비유**: 팀장이 팀원에게 일을 맡기고, 팀원이 필요하면 인턴에게 세부 작업을 나눠주는 것과 같아요. 이제 Claude도 이 팀 구조를 자동으로 만들어서 복잡한 작업을 더 효율적으로 처리해요.

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/sub-agents#spawn-nested-subagents" target="_blank">Spawn nested subagents</a>
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|------|------|
| `fallbackModel` 설정 | 기본 모델이 불안정할 때 대체 모델 최대 3개까지 순서대로 시도 (대화형 세션에도 적용) |
| 세션 제목 자동 번역 | 한국어로 대화하면 세션 제목도 한국어로 생성돼요. `language` 설정으로 고정 가능 |
| `disableBundledSkills` 설정 | 내장 스킬·워크플로·빌트인 명령어를 모델에게 숨겨요 |
| 플러그인 마켓 검색 | `/plugin` 마켓플레이스 탐색 중 검색창 추가 |
| 차단 규칙 글로브 지원 | deny 규칙에서 `"*"` 처럼 와일드카드 사용 가능 |
| Amazon Bedrock 지역 자동 인식 | `AWS_REGION` 미설정 시 `~/.aws` 설정 파일에서 자동으로 리전 읽기 |
| `claude update` 안내 개선 | 업데이트 다운로드 전에 대상 버전 번호를 먼저 알려줘요 |
| `claude agents --json --all` | 완료된 세션 포함, `id`·`state` 필드 추가 |

---

<div class="note-circle">
○ Week 24 범위: Claude Code v2.1.166 ~ v2.1.176<br />
○ 기간: 2026년 6월 8일 ~ 12일
</div>
