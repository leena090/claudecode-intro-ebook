---
title: "[공] Claude Code 주간 업데이트 — 2026년 30~34주차 (7/20 ~ 8/21)"
description: "Opus 5 기본 모델 전환, 세션 간 메시지, 자체 호스팅 환경, 자동 모드 기본값, /design 스킬, Concise 출력 스타일, 폰에서 세션 시작까지 — 5주 핵심 기능 한국어 정리"
tags: ["자동생성", "주간업데이트", "whats-new", "2026-w30", "2026-w32", "2026-w33", "2026-w34", "opus5", "cross-session", "self-hosted", "auto-mode", "design", "concise"]
category: "next"
order: 17
lastUpdated: "2026-09-01"
---

<div class="note-star">

★ **출처** — Claude Code 공식 주간 업데이트 [W30](https://code.claude.com/docs/en/whats-new/2026-w30) · [W32](https://code.claude.com/docs/en/whats-new/2026-w32) · [W33](https://code.claude.com/docs/en/whats-new/2026-w33) · [W34](https://code.claude.com/docs/en/whats-new/2026-w34) `[공식]`  
★ **대상 버전** — v2.1.214 → v2.1.239 (2026년 7월 20일 ~ 8월 21일)  
★ **주요 테마** — 더 강력한 모델 + 세션 협업 + 기업 인프라 + 출력 스타일 개선

</div>

---

## 이번 5주 한 줄 요약

> "Claude Code가 혼자 일하는 도구에서 **팀으로 일하는 플랫폼**으로 진화했어요 — 세션끼리 메시지 주고받고, 회사 서버에서 직접 돌리고, 폰에서 PC 작업을 시작합니다."

---

## 🌟 W30 (7월 20~24일) — Opus 5 · iOS 시뮬레이터 · 보안 플러그인

### 🤖 Claude Opus 5 — 새 기본 Opus 모델

**Opus 5**가 Claude Code의 기본 Opus 모델로 전환됐어요.

> 🍱 **비유**: Opus 4.8이 현대 소나타라면, Opus 5는 제네시스 G80 같아요. 기존 차도 잘 달리지만, 새 차는 더 조용하고 더 멀리 달립니다.

| 항목 | 내용 |
|---|---|
| 기본 사용 플랜 | Max, Team Premium, Enterprise, Anthropic API |
| 컨텍스트 창 | **1M 토큰** (Anthropic API, Max, Team, Enterprise) |
| Fast Mode | **Opus 5** 적용, 가격 **$10/$50 per MTok** |
| 지원 플랫폼 | AWS Bedrock, Google Cloud Agent Platform 포함 |

```bash
# Opus 5로 직접 전환하기
> /model claude-opus-5
```

> ⚠️ **이전 변경**: Fast Mode가 Opus 4.8 → Opus 5로 이전됐어요. Opus 4.7은 Fast Mode 지원 종료.

---

### 📱 iOS 시뮬레이터 — Desktop에서 iPhone 앱 실시간 확인

Mac에서 Claude Code Desktop을 쓰는 개발자라면 이제 **iOS 앱을 시뮬레이터 창으로 바로 보면서** 클로드와 대화할 수 있어요.

> 🖥️ **비유**: 예전엔 클로드가 코드 수정 → 내가 시뮬레이터 켜서 확인 → 다시 클로드에게 결과 설명. 이제는 클로드가 직접 시뮬레이터 화면을 보면서 수정합니다.

**조건**:
- macOS + Xcode (iOS 플랫폼 설치됨)
- Claude Desktop v1.24012.0 이상
- Pro, Max, Team 플랜 (퍼블릭 베타)

```
> Build the app and run it in the simulator to check the onboarding flow.
```

→ 앱이 실행되면 Desktop 옆에 시뮬레이터 창이 자동으로 열려요.

---

### 🔒 Claude Security 플러그인 — 코드 취약점 자동 스캔

**Claude Security** 플러그인이 공식 마켓플레이스에 출시됐어요. 멀티 에이전트가 협력해서 전체 코드베이스를 보안 스캔합니다.

**스캔 과정**:
1. 에이전트들이 아키텍처 분석 → 위협 모델 구축
2. 취약점 탐색 → 서로 독립적으로 교차 검증
3. `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 리포트 저장

**스캔 범위 선택 가능**: 전체 레포, 브랜치 diff, PR, 특정 커밋

```bash
# 설치
> /plugin install claude-security@claude-plugins-official
> /reload-plugins

# 스캔 시작
> /claude-security
```

---

## 🌟 W32 (8월 3~7일) — 세션 간 메시지 · 자체 호스팅 · Auto 모드 기본값

### 💬 세션 간 메시지 (Cross-session Messaging)

**같은 컴퓨터에서 열린 Claude Code 세션들이 서로 메시지를 주고받을 수 있어요.**

> 🏢 **비유**: 같은 회사 건물의 두 팀이 각자 업무 보다가 필요하면 메신저로 "3층 팀, 4층 팀이 방금 users.name을 users.display_name으로 바꿨어요" 하고 알려주는 것과 같아요.

**사용법**:
```text
# 세션 A에서 세션 B에게 알리기
Tell the session working on the payments API that users.name is now users.display_name
```

- `@세션이름` 으로 멘션해서 직접 메시지 전송 (W33 추가)
- `/list-agents` — 현재 연결 가능한 세션 목록 확인
- 메시지 도착 시 `Message from` 행 표시 → `Ctrl+O`로 내용 확장

**지원 범위**: macOS, Linux (v2.1.224+), Windows (W34부터 지원)

---

### 🏗️ 자체 호스팅 환경 (Self-hosted Environments)

회사 보안 정책 때문에 외부 서버를 못 쓰는 팀을 위한 기능이에요. **회사 내부 인프라에서 Claude Code 클라우드 세션을 실행**할 수 있어요.

> 🏠 **비유**: 은행 창구를 외부에 맡기는 대신 은행 건물 안에 직접 설치하는 것과 같아요. 고객(클로드)은 같은 서비스를 쓰지만, 실제 업무는 우리 건물 안에서 처리됩니다.

**설정 방법**:
```bash
# 1. 어드민 설정에서 "자체 호스팅 환경 허용" 활성화
# (claude.ai/admin-settings/cloud-environments)

# 2. 러너 설치 및 시작
claude self-hosted-runner setup
```

설정 완료 시 어드민 페이지에 `Healthy` 상태로 표시돼요.

**지원 플랜**: Team, Enterprise (퍼블릭 베타)

---

### ⚡ Auto 모드가 기본값으로 전환 (8월 14일부터)

2026년 8월 14일부터 **Auto 모드가 신규 세션의 기본 권한 모드**가 됐어요.

> 🚗 **비유**: 자동차 변속기가 수동에서 자동으로 기본 설정이 바뀐 것과 같아요. 원하면 여전히 수동(다른 모드)으로 바꿀 수 있어요.

| 상황 | 변화 |
|---|---|
| 기존에 기본값 설정 없던 분 | 8월 14일부터 자동으로 Auto 모드 적용 |
| 이미 다른 기본값 설정한 분 | 변경 없음 (한 번의 전환 프롬프트 확인 후) |
| 조직이 관리하는 설정 | 변경 없음 |

```json
// 미리 Auto 모드를 기본값으로 설정하기
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

**추가**: Auto 모드의 분류기 호출이 더 이상 사용 한도에서 차감되지 않아요.

---

## 🌟 W33 (8월 10~14일) — 한도 자동 재개 · Fork 모드 기본 · GitLab 지원

### ⏸️ 사용 한도 후 자동 재개 (Desktop)

Desktop에서 세션 한도에 걸렸을 때 **"자동 재개"** 체크박스 하나로 한도가 초기화되면 자동으로 작업을 이어나갈 수 있어요.

> 🍜 **비유**: 밥솥 타이머가 끝나면 알아서 보온으로 바뀌는 것처럼, 한도가 풀리면 클로드가 알아서 작업을 계속합니다.

- Desktop의 한도 카드에서 **"Auto-continue when limits reset"** 체크
- 재개 예정 시간이 표시됨 (`Auto-resuming at 10:30 PM`)
- 주간 한도 초과 시에는 지원되지 않음

---

### 🌿 Fork 모드가 기본값으로 전환

**Fork 모드** — 지금까지 나눈 대화 전체를 물려받아 시작하는 서브에이전트 방식 — 이 이제 대화형 세션에서 기본으로 켜졌어요.

```text
# /subtask로 포크 서브에이전트 시작
> /subtask draft unit tests for the parser changes so far
```

서브에이전트가 아래 패널에 나타나고, 결과가 완료되면 대화에 삽입됩니다.

> ℹ️ **끄고 싶으면**: `CLAUDE_CODE_FORK_SUBAGENT=0` 환경변수 설정

---

### 🦊 GitLab MR(머지 리퀘스트) 지원

GitHub PR처럼 GitLab MR도 이제 워트리로 바로 분기할 수 있어요.

```bash
# GitLab MR에서 바로 워트리 세션 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

- 플러그인 마켓플레이스가 `gitlab.com` URL 클론 지원
- MR과 연결된 세션은 `!N` 레이블로 표시
- GitLab 토큰(`glpat-`, `glrt-` 등) 자동 마스킹

---

## 🌟 W34 (8월 17~21일) — /design 스킬 · Concise 스타일 · 폰에서 세션 시작

### 🎨 /design 스킬 — UI 아트보드를 CLI에서

UI 디자인 목업을 Claude Code 안에서 바로 만들 수 있어요.

```text
> /design redesign the composer based on what people actually use it for
```

- 클로드가 편집 가능한 아트보드 캔버스를 발행하고 링크를 알려줌
- 원하는 아트보드 선택 → 클로드가 바로 구현

**사용 가능 플랜**: Pro, Max, Team, Enterprise (리서치 프리뷰, v2.1.234+)

---

### ✂️ Concise 출력 스타일 — 군더더기 없는 응답

새 내장 출력 스타일 **Concise**가 추가됐어요. 결론부터 말하고 서문·내레이션은 생략합니다.

> 📖 **비유**: 뉴스 기사에서 "오늘 날씨는 맑습니다"가 첫 줄에 오고 상세 설명이 뒤따르는 것처럼, Concise 스타일은 "답"이 맨 앞에 옵니다.

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** 에서 선택. `/clear` 또는 새 세션에서 적용됩니다.

> **참고**: 오류 보고, 보안 경고, 위험한 작업 확인은 Concise 스타일이어도 전체 내용을 표시해요.

---

### 📱 폰에서 내 PC 세션 시작

**Remote Control**이 리서치 프리뷰를 졸업하고 정식 출시됐어요. 이제 핸드폰 Claude 앱의 Code 탭에서 집 컴퓨터나 사무실 PC의 Claude Code 세션을 시작할 수 있습니다.

> 🏡 **비유**: 외출 중에 집 컴퓨터를 원격으로 켜는 것과 같아요. 폰으로 접속 → 작업 시작 → PC가 실제로 처리.

```bash
# PC에서 Remote Control 시작하기
claude remote-control
```

→ 폰 Claude 앱 → Code 탭 → 상단 "Devices" 섹션에서 PC 확인 → 탭하면 디렉토리 선택 후 세션 시작

**추가 기능** (W34):
- 폰에서 effort 레벨 변경 → PC 세션에 즉시 적용
- PC의 현재 권한 모드도 연결 기기에 표시

---

## 📋 기타 주요 변경 사항

### W32 기타
- **200개 서브에이전트 제한 폐지** — 장시간 세션에서 더 이상 서브에이전트 거부 없음
- `/fork`로 복사한 세션이 이제 별도 워트리에서 코드 수정
- 워트리 격리 강화 — Bash 명령어와 git 리다이렉트까지 차단

### W33 기타
- `@세션이름` 멘션으로 다른 세션에 직접 메시지 전송
- Task 추적 도구(TaskCreate 등) — **Opus 4.8, Sonnet 5, Fable 5 이후 모델에서 기본 비활성화** (`CLAUDE_CODE_ENABLE_TODO_TOOLS=1`로 재활성화)
- VS Code 확장: 세션 목록을 그룹으로 정리 가능
- `/review` 가 `/code-review`의 별칭으로 추가

### W34 기타
- **`ANTHROPIC_DEFAULT_MODEL`** 환경변수 — 새 세션의 기본 모델 지정
- **spellcheck 설정** — 프롬프트 입력 중 오타 밑줄 표시 (`aspell`/`hunspell` 필요)
- `/goal` 체크인 — 30분마다 자동 백그라운드 작업 확인 (설정: `CLAUDE_CODE_GOAL_CHECKIN_MINUTES=0`)
- **내 프롬프트도 마크다운 렌더링** — 대화록에서 내가 쓴 글도 코드 블록 등 서식 표시
- `keybindingFlavor: "readline"` — `Ctrl+W`를 Bash처럼 공백 단위로 삭제
- GitLab MR 배지(`MR !N`) — footer에 초록/노랑/파랑으로 상태 표시

---

## 📌 Ultraplan 종료 안내

> ⚠️ **W32에서 Ultraplan 리서치 프리뷰 종료** — `/ultraplan` 명령어와 `ultraplan` 키워드가 제거됐어요.  
> 대신 **Plan 모드** 또는 **Claude Code on the web**을 사용하세요.

---

*공식 출처: [W30](https://code.claude.com/docs/en/whats-new/2026-w30) · [W32](https://code.claude.com/docs/en/whats-new/2026-w32) · [W33](https://code.claude.com/docs/en/whats-new/2026-w33) · [W34](https://code.claude.com/docs/en/whats-new/2026-w34) — 공식 발표 기준*
