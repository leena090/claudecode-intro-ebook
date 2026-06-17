---
title: "[공] 주간 업데이트: 2026년 6월 8일 ~ 12일 (Week 24)"
description: "/cd로 세션 중 폴더 이동, 서브에이전트의 서브에이전트 생성, --safe-mode로 설정 문제 디버깅"
tags: ["업데이트", "2026", "week24", "cd-command", "sub-agents", "safe-mode", "nested-agents", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-06-17"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Week 24 (2026-06-08 ~ 2026-06-12) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w24</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ `/cd` — 세션 끊지 않고 다른 프로젝트로 이동 📁

**`/cd`(씨디)** 명령어가 새로 생겼어요. 대화를 끊지 않고 **다른 폴더(프로젝트)로 이동**할 수 있어요.

> 🍱 **비유**: 책을 읽다가 다른 책으로 갈아타는 건데, 책갈피와 메모가 그대로 따라와요. 이전에는 새 책으로 가려면 책을 완전히 덮고(세션 종료) 새로 열어야 했는데, 이제는 그냥 페이지를 넘기듯 이동해요.

```bash
# 다른 프로젝트 폴더로 이동
> /cd ../other-project

# 하위 폴더로 이동
> /cd ./src

# 절대 경로도 가능
> /cd /home/user/my-new-project
```

**핵심 특징:**

| 항목 | 내용 |
|------|------|
| 프롬프트 캐시 | 그대로 유지돼요 (처음부터 다시 읽지 않아요) |
| 새 CLAUDE.md | 새 폴더의 CLAUDE.md가 메시지로 추가됨 (기존 내용 대체 아님) |
| 세션 저장 위치 | 새 폴더의 프로젝트 저장소로 이동 |
| `--resume` · `--continue` | 새 폴더에서 세션을 찾아요 |
| 처음 방문 폴더 | "이 폴더를 신뢰하시겠어요?" 확인 요청 |

> 🍱 **비유 2**: 택시 타고 A건물 가다가 "아, B건물도 들를게요" 했을 때, 미터기는 계속 돌아가고 기사님 기억도 유지되면서 방향만 바꾸는 것과 같아요.

<div class="note-circle">
○ Claude Code v2.1.169 이상 필요<br />
○ 명령어 전체 목록: <a href="https://code.claude.com/docs/en/commands#all-commands" target="_blank">공식 명령어 레퍼런스</a>
</div>

---

### 2️⃣ 서브에이전트의 서브에이전트 — 중첩 에이전트 트리 🌳

이제 **서브에이전트(subagent)가 자신만의 서브에이전트를 만들 수 있어요**. 에이전트가 에이전트를 만들고, 그 에이전트가 또 에이전트를 만드는 **나무 구조(트리)**가 가능해졌어요.

> 🍱 **비유**: 팀장이 팀원에게 업무를 나눠줬는데, 그 팀원도 또 자기 팀원에게 나눠줄 수 있게 됐어요. 예전엔 팀장만 일을 나눌 수 있었는데, 이제는 모든 팀원이 "분대장"이 될 수 있어요.

```
이전 구조 (1단계):
메인 Claude
  ├── 서브에이전트 A
  ├── 서브에이전트 B
  └── 서브에이전트 C

이제 가능한 구조 (다단계):
메인 Claude
  ├── 서브에이전트 A
  │     ├── A의 서브에이전트 A-1
  │     └── A의 서브에이전트 A-2
  └── 서브에이전트 B
        └── B의 서브에이전트 B-1
```

**제한:**

| 실행 방식 | 최대 깊이 |
|-----------|----------|
| 백그라운드(background) 서브에이전트 | **5단계**까지 |
| 포어그라운드(foreground) 체인 | 제한 없음 (자체적으로 조절됨) |

**진행 상황 확인:**

```bash
# 에이전트 트리 전체 보기
> /agents
```

에이전트 패널에서 각 행에 "자손(descendant) 수"와 "메인(main)까지의 경로"가 표시돼요.

<div class="note-circle">
○ Claude Code v2.1.172 이상 필요<br />
○ 서브에이전트 자세히: <a href="https://code.claude.com/docs/en/sub-agents#spawn-nested-subagents" target="_blank">공식 문서</a>
</div>

---

### 3️⃣ `--safe-mode` — 설정 다 꺼두고 깨끗하게 실행 🧹

**`--safe-mode`(세이프 모드)** 옵션이 생겼어요. Claude Code가 이상하게 작동할 때, **모든 커스터마이징을 끄고** 기본 상태로만 실행해서 문제 원인을 찾을 수 있어요.

> 🍱 **비유**: 컴퓨터가 이상하게 느릴 때, '안전 모드'로 부팅하면 기본 드라이버만 켜지잖아요. 그러면 어떤 드라이버가 문제인지 알 수 있어요. Claude Code의 `--safe-mode`도 똑같아요 — 내가 추가한 모든 설정을 꺼두고 기본값만 켜요.

```bash
# 안전 모드로 실행
claude --safe-mode

# 환경변수로도 설정 가능
export CLAUDE_CODE_SAFE_MODE=1
claude
```

**안전 모드에서 꺼지는 것들:**

| 꺼지는 항목 | 설명 |
|------------|------|
| `CLAUDE.md` | 프로젝트 지침 파일 무시 |
| Skills(스킬) | 커스텀 슬래시 명령어 비활성화 |
| Plugins(플러그인) | 설치된 플러그인 비활성화 |
| Hooks(훅) | 자동 실행 훅 비활성화 |
| MCP 서버 | 외부 도구 연결 비활성화 |
| 커스텀 에이전트 | 사용자 정의 에이전트 비활성화 |

**여전히 작동하는 것들:**

| 항목 | 설명 |
|------|------|
| 인증 | 로그인·API 키 |
| 모델 선택 | `/model` 명령 |
| 기본 도구 | Read, Edit, Bash 등 내장 도구 |
| 권한 설정 | 일반 권한 체계 |

**언제 쓰면 좋을까요?**

```bash
# 상황 1: 무언가를 설치 후 Claude Code가 이상해졌을 때
claude --safe-mode
# → 안전 모드에서 정상이면? 플러그인·훅 중 하나가 원인

# 상황 2: CLAUDE.md 지침이 이상하게 작동할 때
claude --safe-mode
# → 안전 모드에서 정상이면? CLAUDE.md 내용 점검 필요
```

<div class="note-circle">
○ Claude Code v2.1.169 이상 필요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/debug-your-config#test-against-a-clean-configuration" target="_blank">설정 디버깅 가이드</a>
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|------|------|
| `fallbackModel` 설정 | 기본 모델이 혼잡하거나 오류 날 때 대체 모델 최대 3개 순서대로 시도. `--fallback-model` 플래그가 이제 대화 세션에도 적용 |
| 세션 제목 언어 | 대화 언어로 자동 생성. `language` 설정으로 고정 가능 |
| `claude agents --json` | `--all` 추가 시 완료된 세션 포함. `id`·`state` 필드 신규 추가 |
| 플러그인 마켓 검색 | `/plugin` 마켓플레이스 내 검색바 추가 |
| `disableBundledSkills` | 기본 내장 skills·workflows·명령어를 모델에게 숨기기. 환경변수: `CLAUDE_CODE_DISABLE_BUNDLED_SKILLS` |
| Deny rules 글로브 | `"*"` 으로 모든 도구 차단 가능. 알 수 없는 도구명은 시작 시 경고 |
| 교차 세션 메시지 보안 | `SendMessage`로 릴레이된 메시지는 user 권한을 갖지 않음. Auto mode에서 차단 |
| AWS Bedrock 리전 | `AWS_REGION` 없으면 `~/.aws` 파일에서 자동 읽기. `/status`에서 출처 표시 |
| `enforceAvailableModels` | `availableModels` 허용 목록이 기본(Default) 모델도 제약 |
| Claude in Chrome | 도구 한 번에 일괄 로드로 속도 개선 |
| `claude update` | 다운로드 전 대상 버전 안내 |
| `footerLinksRegexes` | 설정으로 하단 행에 커스텀 링크 배지 추가 가능 |

---

<div class="note-circle">
○ Week 24 범위: Claude Code v2.1.166 ~ v2.1.176<br />
○ Fable 5·Mythos 5는 수출통제로 접근 일시 정지 중 — 자세히: <a href="/docs/next/new-models-2026-06">신규 모델 안내</a><br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">code.claude.com/docs/en/whats-new/2026-w24</a>
</div>
