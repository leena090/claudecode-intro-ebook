---
title: "[공] Claude Code 주간 업데이트 W30~W34 (2026년 7~8월)"
description: "Opus 5 출시, 세션 간 메시지, 자체 호스팅 환경, Auto mode 기본값 변경, /design 스킬 등 2026년 7~8월 주요 5주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "Opus5", "cross-session-messaging", "self-hosted", "auto-mode", "design-skill"]
category: "next"
order: 17
lastUpdated: "2026-08-22"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W34) 내용을 한국어로 정리한 것입니다.
<br />★ 오늘 날짜 기준(2026-08-22) 최신 5주치 업데이트를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 5주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Claude Opus 5 출시**, iOS 시뮬레이터, 보안 플러그인 |
| **W32** | 8/3~8/7 | **세션 간 메시지 전송**, 자체 호스팅 환경, Auto mode 기본값 |
| **W33** | 8/10~8/14 | Desktop 자동 재개, Fork mode 기본 활성화, GitLab 지원 |
| **W34** | 8/17~8/21 | **/design 스킬**, Concise 출력 스타일, 폰에서 세션 시작 |

> 📌 W31(7/27~7/31)은 공식 What's New 페이지가 게시되지 않았습니다. (주간 업데이트 없음)

---

## W30 · 7월 20~24일

### 🤖 Claude Opus 5 — 새로운 최상위 Opus 모델

> 🏆 **비유로 설명하면**: 핵심 팀원이 승진한 것과 같아요. 기존의 Opus 4.8 자리에 Opus 5가 들어와 Max·Team·Enterprise 플랜 기본 모델이 됐습니다.

Claude Opus 5가 Claude Code의 새로운 기본 Opus 모델이에요. Opus 4.8보다 긴 작업을 더 잘 처리하고, 코딩과 전문 업무 성능도 향상됐습니다.

| 항목 | 내용 |
|---|---|
| 모델 ID | `claude-opus-5` |
| 컨텍스트 창 | **1M 토큰** (API·Max·Team·Enterprise) |
| Fast Mode 가격 | **$10/$50 per MTok** (기존 Opus 4.8의 $30/$150에서 변경) |
| 기본 적용 플랜 | Max, Team Premium, Enterprise pay-as-you-go, API |
| 클라우드 플랫폼 | Amazon Bedrock, Google Cloud Agent Platform |

```bash
# 직접 전환하는 방법
> /model claude-opus-5
```

> ⚠️ **Fast Mode 변경**: Fast Mode가 이제 Opus 5 기준입니다. Opus 4.7은 Fast Mode 지원이 종료됐습니다.

---

### 📱 iOS 시뮬레이터가 Desktop에 내장됩니다 (공개 베타)

**Claude Code Desktop(macOS)**에 **iOS 시뮬레이터 창**이 붙었어요.

> 🔭 **비유로 설명하면**: 지금까지는 Claude가 아이폰 앱을 빌드해줘도 시뮬레이터를 직접 열어서 확인해야 했다면, 이제는 **대화창 옆에 폰 화면이 실시간으로** 표시되는 거예요.

- Claude가 앱을 빌드하거나 실행하면 시뮬레이터 창이 자동으로 열립니다
- Claude가 직접 탭하면서 기능을 테스트하는 걸 실시간으로 볼 수 있어요
- 원하면 시뮬레이터를 직접 조작할 수도 있습니다
- **필요 조건**: Xcode + iOS 플랫폼 설치, Desktop v1.24012.0 이상

```bash
> Build the app and run it in the simulator to check the onboarding flow.
# → 시뮬레이터 창이 자동으로 열리며 테스트 진행
```

**대상**: Pro, Max, Team 플랜

---

### 🔒 Claude Security 플러그인 — 코드 취약점 자동 스캔

공식 Anthropic 마켓플레이스에서 **Claude Security 플러그인**을 설치하면 **멀티 에이전트 보안 스캔**이 가능해집니다.

> 🕵️ **비유로 설명하면**: 여러 명의 보안 전문가가 팀으로 코드를 동시에 검토하는 것과 같아요. 각자 다른 각도(아키텍처 분석, 위협 모델링, 취약점 탐색, 교차 검증)로 확인하고 최종 보고서를 만들어줍니다.

```bash
# 설치 방법
> /plugin install claude-security@claude-plugins-official
> /reload-plugins

# 스캔 시작
> /claude-security
```

- 결과는 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장
- 전체 저장소, 브랜치 diff, PR, 특정 커밋 단위로 스캔 가능
- 발견된 취약점은 **선택적으로 패치 생성** 가능

---

## W32 · 8월 3~7일

### 💬 세션 간 메시지 전송 — 클로드끼리 대화!

> 💡 **비유로 설명하면**: 혼자 일하는 사람 여럿이 각자 책상에서 일하다가 이제 서로 메모를 전달할 수 있게 된 거예요.

같은 기기에서 열려 있는 여러 Claude Code 세션이 **서로 메시지를 주고받을 수 있게** 됐습니다.

```bash
# 한 세션에서 다른 세션에 메시지 보내기
> Tell the session working on the payments API that users.name is now users.display_name

# 현재 대화 가능한 세션 목록 보기
> /list-agents

# 프롬프트에서 직접 @ 멘션
> @payments-api-session users.name이 users.display_name으로 바뀌었어
```

- 메시지를 받은 세션에는 `Message from` 행이 표시되고, `Ctrl+O`로 확인
- 세션 이름이 유일하다면 확인 없이 바로 전달
- **지원**: macOS, Linux, (W34부터) Windows도 지원

> 📋 관련 공식 문서: [cross-session-messaging](https://code.claude.com/docs/en/cross-session-messaging)

---

### 🏢 자체 호스팅 환경 (Self-hosted Environments) — 공개 베타

Team·Enterprise 플랜이라면 **회사 인프라 안에서 클라우드 세션을 실행**할 수 있게 됐어요.

> 🏭 **비유로 설명하면**: 클라우드 카페 대신 **회사 구내식당에서 Claude가 일하는** 느낌이에요. 외부 인터넷 없이 회사 내부 시스템(DB, 서버, API)에 접근할 수 있습니다.

```bash
# 자체 러너 설정 (Owner 권한 필요)
claude self-hosted-runner setup
```

**관리자 설정 순서:**
1. `claude.ai/admin-settings/cloud-environments`에서 **Allow self-hosted environments** 켜기
2. `claude self-hosted-runner setup` 실행 → 안내에 따라 환경 생성
3. 상태가 **Healthy**로 바뀌면 사용자들이 세션 시작 시 해당 환경 선택 가능

**장점**:
- 회사 내부 네트워크 서비스에 직접 접근
- claude.ai, 모바일 앱, 데스크톱 앱, `claude --cloud`에서 선택 가능

---

### 🚦 Auto mode가 기본 권한 모드로! (8월 14일부터)

> 🚗 **비유로 설명하면**: 처음엔 조심조심 운전 교습소 도로처럼 매번 확인받았다면, 이제는 **내비게이션 믿고 고속도로 달리는** 모드가 기본이 된 거예요.

**8월 14일부터** Pro, Max, Team 플랜 신규 세션의 **기본 권한 모드가 Auto mode**로 변경됩니다.

| 변경 전 | 변경 후 |
|---|---|
| 기본 = 수동 확인 모드 | 기본 = **Auto mode** |
| 위험한 작업마다 팝업 | 분류기(classifier)가 자동 판단 |
| 분류기 호출이 사용량 소모 | **분류기 호출은 사용량 제외** |

```json
// 미리 Auto mode로 설정하려면 ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

- 이미 직접 기본 모드를 설정한 분은 변경 프롬프트가 뜨면 수락/거절 선택 가능
- 조직 관리형 설정은 변경되지 않음
- 언제든지 `/mode` 명령어로 모드 변경 가능

---

## W33 · 8월 10~14일

### ⏰ Desktop: 사용량 한도 후 자동 재개

Desktop 앱에서 세션 한도에 걸렸을 때 **"한도 리셋 시 자동 재개"** 체크박스가 생겼어요.

> ⏱️ **비유로 설명하면**: 퇴근 후 빨래를 돌리고 싶은데 시간이 안 됐을 때 **예약 세탁**처럼, 한도가 풀리는 시각을 기다렸다가 Claude가 자동으로 이어서 작업합니다.

- 세션 한도 카드에서 **Auto-continue when limits reset** 체크
- 카드에 재개 시각 표시 (`Auto-resuming at HH:MM`)
- 주간 한도 카드에는 적용되지 않음

CLI에서도 설정 가능:

```bash
# /config에서 "Continue automatically at usage limit" 항목 토글
```

---

### 🍴 Fork Mode — 이제 기본으로 켜져 있어요

**Fork mode**가 이제 대화형 세션에서 **기본 활성화**됩니다.

> 🌿 **비유로 설명하면**: 협업 문서를 편집할 때 원본 건드리지 않고 **복사본에 먼저 작업해서 합치는** 방식이에요. Claude가 서브태스크를 받을 때 지금까지의 대화 맥락을 그대로 가져가서 다시 설명할 필요가 없어요.

```bash
> /subtask draft unit tests for the parser changes so far
# → 현재 대화 맥락을 공유한 채로 백그라운드에서 서브태스크 실행
```

- 서브태스크는 대화창 아래 패널에 표시되고, 완료되면 결과가 대화에 도착
- **끄려면**: `CLAUDE_CODE_FORK_SUBAGENT=0` 환경변수 설정

---

### 🦊 GitLab 머지 리퀘스트 & 마켓플레이스 지원

GitHub에서만 되던 것들이 GitLab에서도 됩니다!

| 기능 | 방법 |
|---|---|
| MR URL로 워크트리 생성 | `claude --worktree <GitLab MR URL>` |
| 에이전트 뷰에서 MR 표시 | 세션 이름 옆 `!N` 배지 |
| 마켓플레이스에서 GitLab 지원 | `gitlab.com` URL (중첩 서브그룹 포함) |
| 토큰 자동 보호 | `glpat-`, `glrt-` 등 GitLab 토큰 자동 마스킹 |

```bash
# GitLab MR로부터 워크트리 브랜치 열기
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

---

## W34 · 8월 17~21일

### 🎨 /design 스킬 — UI 아트보드 초안 생성 (연구 프리뷰)

> 🖌️ **비유로 설명하면**: 디자이너에게 "이런 화면 어때요?"라고 물으면 바로 몇 가지 시안을 그려서 보여주는 것처럼, Claude가 UI 아트보드 초안을 만들어줘요.

```bash
> /design redesign the composer based on what people actually use it for
# → 공개 캔버스 링크 출력 → 아트보드 선택 → 구현 요청
```

- **Artifacts 위에서 동작**: 편집 가능한 아트보드 캔버스를 발행
- 프로토타입 선택 후 "이걸 구현해줘"라고 말하면 코드로 만들어줌
- **대상**: Pro, Max, Team, Enterprise 플랜 (v2.1.233 이상)

> 📋 관련 문서: [artifacts#availability](https://code.claude.com/docs/en/artifacts#availability)

---

### 📝 Concise 출력 스타일 — 결과부터 먼저!

**Concise**라는 새 빌트인 출력 스타일이 추가됐어요.

> ✂️ **비유로 설명하면**: 기자가 뉴스를 쓸 때 "육하원칙 중 가장 중요한 것부터" 쓰는 역 피라미드 방식이에요. 들어가는 말 없이 핵심 결과부터 바로 보여줍니다.

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → Output style → Concise 선택

**Concise 스타일의 특징**:
- ❌ 전문(preamble), 내레이션 없음
- ✅ 작업 품질은 Default와 동일
- ✅ 자세한 설명 요청 시에는 full 답변
- ✅ 오류, 보안 경고, 위험 작업 확인은 항상 완전하게 표시

> 설정 후 `/clear`로 새 세션 시작해야 적용됩니다.

---

### 📱 폰에서 내 PC에 세션 시작하기 (Remote Control 정식 출시!)

**Remote Control이 연구 프리뷰를 졸업**하고 정식 기능이 됐습니다.

> 🎮 **비유로 설명하면**: 집에 있는 PC를 스마트폰으로 원격 켜서 조작하는 것과 같아요. Claude 앱에서 탭 한 번으로 내 컴퓨터에 세션을 시작할 수 있어요.

```bash
# 내 PC에서 Remote Control 시작
claude remote-control
```

- **모바일 Code 탭** 상단에 연결된 기기 카드가 표시됩니다
- 탭 → 디렉토리 선택 → 세션 시작
- 폰이나 claude.ai/code에서 effort 레벨 변경 → 내 PC 세션에 즉시 반영

---

## 그 외 주요 변경

| 항목 | 내용 |
|---|---|
| 🗑️ Ultraplan 삭제 | `/ultraplan` 명령어 및 `ultraplan` 키워드 제거됨 (plan mode 또는 웹 사용 권장) |
| 📊 서브에이전트 제한 완화 | 세션당 200개 서브에이전트 캡 **제거** |
| 🔡 내 프롬프트도 마크다운으로 | 내가 입력한 텍스트도 대화창에서 마크다운 렌더링 |
| 🌍 새 환경변수 | `ANTHROPIC_DEFAULT_MODEL` — 새 세션 기본 모델 설정 |
| 🔠 Readline 키 바인딩 | `keybindingFlavor: "readline"` 설정 시 `Ctrl+W`가 공백까지 삭제 |
| ✏️ 맞춤법 검사 | `spellcheck` 설정 활성화 시 입력창에서 오타 밑줄 표시 |
| 🪄 Write 도구 변경 | 최신 모델에서 이번 세션 중 읽지 않은 파일도 덮어쓰기 가능 |

---

<div class="tip-box">
💡 <strong>이번 5주의 핵심 메시지</strong><br/>
Claude Code가 단순 코딩 도우미를 넘어 <strong>팀 워크플로우 중심</strong>으로 진화하고 있어요. 세션끼리 소통하고, 회사 인프라 안에서 실행되고, 폰에서 PC 세션을 원격 시작하는 기능들은 모두 같은 방향을 가리킵니다.
</div>
