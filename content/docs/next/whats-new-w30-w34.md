---
title: "[공] Claude Code 주간 업데이트 W30~W34 (2026년 7~8월)"
description: "Opus 5 출시, 자체 호스팅 환경, 세션 간 메시지, Auto 모드 기본값, Fork 모드 기본값, GitLab 지원, /design 스킬, Concise 출력 스타일, Remote Control GA 등 5주치 핵심 정리"
tags: ["자동생성", "주간업데이트", "Opus5", "자체호스팅", "AutoMode", "ForkMode", "GitLab", "RemoteControl", "ConciseStyle"]
category: "next"
order: 18
lastUpdated: "2026-08-27"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W34) 내용을 한국어로 정리한 것입니다.<br />
★ 2026년 7월 20일 ~ 8월 21일, 5주치 업데이트를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 5주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Opus 5** 출시, iOS 시뮬레이터, Claude Security 플러그인 |
| **W32** | 8/3~8/7 | **세션 간 메시지**, **자체 호스팅 환경**, Auto 모드 기본값 예고 |
| **W33** | 8/10~8/14 | Auto-continue, **Fork 모드 기본값**, GitLab MR 지원 |
| **W34** | 8/17~8/21 | **/design 스킬**, **Concise 출력 스타일**, Remote Control GA |

> ⚠️ W31은 공식 게시가 없었어요 (해당 주 업데이트 없음).

---

## 📅 W30 (7월 20~24일) — Opus 5 시대 개막

### ✨ 주요 기능

**① Claude Opus 5 출시** (`claude-opus-5`)
- Opus 계열 새 기본 모델, 100만 토큰(1M) 컨텍스트 창
- Fast 모드: **$10/$50 per MTok** (Opus 4.7 지원 종료)
- Max, Team Premium, Enterprise, Anthropic API에서 기본 모델로 전환
- 사용법: `/model claude-opus-5`

**② iOS 시뮬레이터 패널** (macOS Desktop 공개 베타)
- Claude가 앱을 시뮬레이터에서 빌드·테스트할 때 옆 패널에서 실시간 화면 확인
- Xcode + iOS 플랫폼 설치 필요, Desktop v1.24012.0 이상

**③ Claude Security 플러그인**
- 멀티 에이전트가 코드베이스 전체를 보안 취약점 스캔
- `/plugin install claude-security@claude-plugins-official` 후 `/claude-security`로 실행

### 기타 개선
- `/code-review`가 배경 서브에이전트로 실행 (대화 방해 없음)
- 세션당 서브에이전트 최대 20개 동시 실행 (기본값)
- Emoji 자동완성: `:heart:` 입력하면 이모지 삽입
- Auto 모드에서 `rm` 명령·백그라운드 작업 권한 다이얼로그 제거
- `/ultraplan` 기능 **삭제** 🗑️ (플랜 모드 또는 웹 Claude Code 사용 권장)

---

## 📅 W32 (8월 3~7일) — 세션이 서로 대화한다

### ✨ 주요 기능

**① 세션 간 메시지 (Cross-session Messaging)**  
- 같은 머신에서 열린 Claude Code 세션끼리 메시지를 주고받을 수 있어요
- Claude가 `ListAgents`로 다른 세션을 찾고 `SendMessage`로 메시지 전달
- 예시: "payments API 세션에게 users.name이 users.display_name으로 바뀌었다고 알려줘"
- `@세션이름`으로 다른 세션 언급, `/list-agents`로 세션 목록 확인
- macOS · Linux 지원, v2.1.224 이상 필요

**② 자체 호스팅 환경 (Self-hosted Environments)** (Team·Enterprise 공개 베타)
- 조직 내부 인프라에서 Claude Code 클라우드 세션 실행
- `claude self-hosted-runner setup`으로 설정 시작
- 세션이 내부 네트워크의 서비스에 접근 가능 (DB, 내부 API 등)
- 어드민 설정 → [클라우드 환경](https://claude.ai/admin-settings/cloud-environments)에서 활성화

**③ Auto 모드, 기본값 전환 예고**
- 2026년 8월 14일부터 Pro·Max·Team 플랜의 새 세션 기본값이 `auto` 모드로 변경
- 이미 기본값을 설정해두셨다면 유지, 조직 관리 기본값도 변경 없음
- 미리 적용하려면:
```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

### 기타 개선
- VS Code 확장: **Focus view** — 도구 활동을 한 줄로 접을 수 있어요 (`Ctrl+Alt+F`)
- `/review`가 `/code-review`의 별칭으로 추가
- `/fork`로 복사한 세션이 독립적인 워크트리에서 코드 변경
- 200개 서브에이전트/세션 상한 제거 (동시 실행·깊이 제한은 유지)
- Worktree 격리 강화: Bash 명령·git 리다이렉트도 메인 체크아웃 접근 차단

---

## 📅 W33 (8월 10~14일) — 한계 도달해도 자동으로 이어간다

### ✨ 주요 기능

**① Desktop: 사용 한도 후 자동 재개**
- Desktop의 Code 탭에서 세션 한도 도달 시 "Auto-continue when limits reset" 체크박스 표시
- 체크하면 한도 초기화 후 중단된 작업을 자동으로 이어서 실행
- 주간 한도 카드에는 제공되지 않음

**② Fork 모드, 기본값으로 전환** (v2.1.232)
- 대화형 세션에서 Fork 모드가 기본 활성화
- 서브에이전트가 전체 대화와 프롬프트 캐시를 그대로 이어받아 시작
- 컨텍스트를 처음부터 다시 설명할 필요 없음
- 비활성화: `CLAUDE_CODE_FORK_SUBAGENT=0`
- 사용법: `/subtask 지금까지 논의한 파서 변경 사항에 대한 유닛 테스트 작성해줘`

**③ GitLab MR + 마켓플레이스** (v2.1.232/233)
- 플러그인 마켓플레이스에서 gitlab.com URL 클론 지원
- `claude --worktree` 에 GitLab MR URL 전달 가능
- 예시: `claude --worktree https://gitlab.com/group/project/-/merge_requests/42`
- GitLab 토큰(`glpat-`, `glrt-` 등) 자동 리덱션 보호
- MR badge `!N`이 agent view에 표시

### 기타 개선
- `@세션이름`으로 다른 세션에 직접 메시지 (정확히 하나 일치 시 확인 없이 전달)
- 플러그인 마켓플레이스: `command` 소스 지원 — 로컬 명령어가 플러그인 디렉토리 출력
- `/code-review` (high/xhigh/max 노력 수준)도 배경 에이전트로 실행
- VS Code 확장: 세션 목록을 그룹으로 정리 (우클릭 → 그룹 생성/이동)
- `additionalMarketplaces`·`allowedMarketplaces`가 기존 설정 키의 별칭으로 추가
- Task 추적 도구(`TaskCreate`, `TodoWrite` 등) Opus 4.8, Sonnet 5, Fable 5 이상에서 기본 비활성화 (재활성화: `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`)

---

## 📅 W34 (8월 17~21일) — 디자인도 Claude Code로

### ✨ 주요 기능

**① /design 스킬** (리서치 프리뷰, Pro·Max·Team·Enterprise)
- Claude Design의 아트보드 워크플로우를 CLI와 Desktop에서 사용
- 간략한 설명만 주면 Claude가 편집 가능한 아트보드 캔버스를 발행
- 마음에 드는 아트보드를 골라 구현까지 바로 연결
- v2.1.233 이상 필요
- 사용법:
```
> /design 설정 페이지의 작곡기를 실제로 자주 사용하는 기능 중심으로 재설계해줘
```

**② Concise 출력 스타일** (v2.1.237)
- 새로운 내장 출력 스타일: 결과를 맨 앞에 바로 제시, 서론·이야기체 생략
- 작업은 Default 스타일과 동일하게 꼼꼼히 처리 (품질 저하 없음)
- 설명이나 상세 내용을 물어보면 완전한 답변 제공
- 오류 보고·보안 경고·파괴적 작업 확인은 전체 내용 유지
- 설정 방법 (택일):
  - `/config` → **Output style** → Concise 선택
  - 또는 `settings.json`에 `"outputStyle": "Concise"` 추가

**③ Remote Control GA** (정식 출시)
- `claude remote-control` 실행 시 휴대폰 Code 탭 상단에 장치 카드로 표시
- 휴대폰에서 머신의 디렉토리를 선택해 세션 시작 가능
- 리서치 프리뷰 졸업, 정식 기능으로 출시

### 기타 개선
- Claude.ai 사용 한도 초기화 후 세션 자동 재개 (`/config`에서 끌 수 있음)
- **Spellcheck**: `spellcheck` 설정 활성화 시 프롬프트 입력 중 맞춤법 밑줄 표시 (`aspell`/`hunspell`/`ispell` 필요)
- GitLab MR badge: `glab auth login` 후 MR이 있는 브랜치에서 Footer에 `MR !N` 배지 표시
- **`ANTHROPIC_DEFAULT_MODEL`** 환경변수: 새 세션의 기본 시작 모델 설정
- `/permissions` 또는 `/add-dir <경로>`를 Claude 작업 중에도 실행 가능
- `keybindingFlavor: "readline"` 설정 시 `Ctrl+W`가 Bash처럼 이전 공백까지 삭제
- 자체 호스팅 러너: `--defer-shutdown-max-min`으로 SIGTERM 후 연결된 세션 유지
- Windows 네이티브에서도 `SendMessage`·`ListAgents` 지원 (맥/리눅스와 동일)

---

## 종합 정리 — 입문자가 꼭 알아야 할 변화

| 변화 | 내 Claude Code에 미치는 영향 |
|---|---|
| **Opus 5 기본 모델** | `/model`을 바꾸지 않았다면 이미 Opus 5 사용 중 |
| **Auto 모드 기본값** | 8/14부터 새 세션이 자동으로 auto 모드로 시작 |
| **Fork 모드 기본값** | 서브에이전트에 컨텍스트 자동 전달 (더 편리해짐) |
| **Concise 스타일** | 간결한 답변이 좋으면 `/config`에서 바로 설정 |
| **/ultraplan 삭제** | 해당 명령 사용 중이셨다면 `/plan` 모드로 전환 |
| **GitLab 지원** | GitLab 사용자라면 MR 워크플로우 대폭 개선 |
