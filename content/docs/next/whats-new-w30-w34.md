---
title: "[공] 2026년 7~8월 Claude Code 주요 업데이트 총정리 (W30~W34)"
description: "Opus 5·Auto 모드 기본화·세션 간 메시지·자체 호스팅 환경·/design 스킬·간결 출력 스타일까지 — 7~8월 5주치 업데이트 한 번에"
tags: ["자동생성", "업데이트", "Opus5", "auto mode", "cross-session-messaging", "self-hosted", "design skill", "Concise style", "GitLab"]
category: "next"
order: 18
lastUpdated: "2026-08-25"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 릴리스 노트 원문:<br />
&nbsp;&nbsp;<a href="https://code.claude.com/docs/en/whats-new/2026-w30">W30 (Jul 20–24)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 (Aug 3–7)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w33">W33 (Aug 10–14)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w34">W34 (Aug 17–21)</a>
</div>

## 한 눈에 보는 변화 타임라인

| 주차 | 날짜 | 핵심 변화 |
|---|---|---|
| **W30** | 7월 20–24일 | 🆕 Opus 5 출시, iOS 시뮬레이터 패널, Claude Security 플러그인 |
| **W32** | 8월 3–7일 | 💬 세션 간 메시지, 🏠 자체 호스팅 환경, ⚙️ Auto 모드 기본화 |
| **W33** | 8월 10–14일 | 🔄 사용 한도 후 자동 재개, 🍴 Fork 모드 기본 ON, 🦊 GitLab MR 지원 |
| **W34** | 8월 17–21일 | 🎨 /design 스킬, 📝 Concise 출력 스타일, 📱 폰에서 세션 시작 |

---

## W30 (7월 20–24일) — Opus 5 + iOS 시뮬레이터 + 보안 플러그인

### 🆕 Claude Opus 5 출시

Claude Code의 기본 Opus 모델이 **Opus 5**로 교체됐어요. 100만 토큰 컨텍스트, Fast Mode 가격 인하($30 → $10 / MTok) 포함.

➡️ 상세 내용: [Claude Opus 5 출시 정리](./claude-opus-5)

---

### 📱 iOS 시뮬레이터 패널 (Desktop 전용)

macOS용 Claude Code Desktop에 **iOS 시뮬레이터 패널**이 추가됐어요.

> 🍱 **비유로 설명하면**: "클로드가 내 iPhone 앱을 직접 조작하면서 버그를 고치는 걸 옆에서 화면으로 보는 느낌"이에요.

**이런 분께 유용해요:**
- iOS 앱 개발 중이신 분
- "클로드야, 이 화면 이동 흐름 확인해줘" 같은 부탁을 하고 싶은 분

**사용 조건:**
- macOS + Xcode (iOS 플랫폼 설치됨)
- Claude Desktop v1.24012.0 이상
- Pro·Max·Team 요금제 (공개 베타)

```text
> Build the app and run it in the simulator to check the onboarding flow.
```

대화에서 시뮬레이터 관련 요청을 하면 옆에 패널이 자동으로 열려요.

---

### 🔒 Claude Security 플러그인

**코드베이스 보안 취약점 스캔** 플러그인이 공식 마켓플레이스에 등장했어요.

> 🍱 **비유로 설명하면**: 보안 전문가 여러 명이 팀을 꾸려서 내 코드를 샅샅이 검사한 뒤 보고서를 써주는 느낌이에요.

```bash
# 설치
> /plugin install claude-security@claude-plugins-official

# 설치 후 스캔 시작
> /claude-security
```

결과는 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장돼요.

---

## W32 (8월 3–7일) — 세션 간 대화·자체 호스팅·Auto 모드 기본화

### 💬 세션 간 메시지 (Cross-session Messaging)

Claude Code 세션들이 **서로 메시지를 주고받을 수 있게** 됐어요.

> 🍱 **비유로 설명하면**: 사무실에서 팀원들이 메신저로 소통하듯, 내 여러 개의 클로드 세션이 서로 내용을 전달해줘요.

```text
# A 세션에서 B 세션에게 변경 사항 알리기
Tell the session working on the payments API that users.name is now users.display_name

# 또는 @ 로 직접 멘션
@payments-api users.name이 users.display_name으로 바뀌었어
```

실행 중인 세션 목록 확인:
```bash
/list-agents
```

- macOS, Linux에서 사용 가능 (Windows는 W34부터 지원)
- v2.1.224 이상 필요

➡️ 상세 내용: [세션 간 메시지 기능](../advanced/cross-session-messaging)

---

### 🏠 자체 호스팅 환경 (Self-hosted Environments)

**자체 서버에서 Claude Code 클라우드 세션을 실행**할 수 있는 기능이 Team·Enterprise 공개 베타로 출시됐어요.

> 🍱 **비유로 설명하면**: "회사 내부 보안망 안에서만 접근할 수 있는 서버에서 클로드가 일하는 느낌"이에요.

```bash
# 내 서버/컨테이너를 러너로 등록
claude self-hosted-runner setup
```

- Team, Enterprise 플랜 공개 베타
- 어드민 설정에서 "Allow self-hosted environments" 활성화 필요

➡️ 상세 내용: [자체 호스팅 환경](../advanced/self-hosted-environments)

---

### ⚙️ Auto 모드가 기본 권한 모드로

**2026년 8월 14일**부터 Pro·Max·Team 플랜에서 **Auto 모드가 새 세션의 기본 권한 모드**가 됐어요.

| 변경 전 | 변경 후 |
|---|---|
| Default 모드 (매 작업마다 확인 요청) | **Auto 모드** (안전 분류기가 자동 판단) |

<div class="note-star">
★ 내가 직접 기본 모드를 설정해둔 경우는 그대로 유지돼요. 별도 설정이 없는 분들만 Auto 모드로 자동 전환됩니다.
</div>

수동으로 설정하려면:
```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

---

## W33 (8월 10–14일) — 자동 재개·Fork 기본 ON·GitLab MR

### 🔄 사용 한도 후 자동 재개 (Desktop)

Desktop에서 세션 한도에 걸렸을 때 **한도가 초기화되면 자동으로 이어서 진행**하는 옵션이 생겼어요.

> 🍱 **비유로 설명하면**: "일 하다가 작업 시간이 끝나서 잠깐 쉬는 중인데, 시간이 되면 알아서 다시 시작하는" 느낌이에요.

Desktop에서 한도 카드 → **Auto-continue when limits reset** 체크박스 활성화.

---

### 🍴 Fork 모드가 기본 ON

`/subtask`로 하위 작업을 시작할 때 이제 기본으로 **Fork 모드**가 사용돼요. 현재 대화 내용과 캐시를 그대로 물려받아 더 빠르게 시작해요.

```text
> /subtask draft unit tests for the parser changes so far
```

Fork를 끄려면: 환경 변수 `CLAUDE_CODE_FORK_SUBAGENT=0` 설정.

---

### 🦊 GitLab Merge Request 지원

이제 GitHub뿐만 아니라 **GitLab**도 `--worktree` 옵션에서 지원돼요.

```bash
# GitLab MR에서 워크트리 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

- 플러그인 마켓플레이스가 GitLab URL 지원
- 상태 표시줄에 `!N` 배지로 MR 상태 표시
- GitLab 토큰 패밀리(`glpat-`, `glrt-`)도 자동 난독화

---

## W34 (8월 17–21일) — /design·Concise 스타일·폰에서 세션 시작

### 🎨 /design 스킬 (UI 디자인 초안 자동 생성)

프롬프트 한 줄로 **편집 가능한 UI 아트보드**를 자동으로 만들어줘요.

> 🍱 **비유로 설명하면**: "어떤 화면 만들고 싶다"고 말하면 클로드가 여러 가지 UI 시안을 스케치해서 링크로 보내주는 느낌이에요.

```text
> /design redesign the composer based on what people actually use it for
```

- 아티팩트 기반으로 캔버스 발행
- 원하는 안 골라서 구현 요청 가능
- Pro·Max·Team·Enterprise 지원 (v2.1.233 이상)

---

### 📝 Concise 출력 스타일

새 내장 출력 스타일 **Concise(간결)**가 추가됐어요.

> 🍱 **비유로 설명하면**: "핵심만 말해줘"를 항상 켜두는 느낌이에요. 말 많은 설명 없이 결과부터 딱 나와요.

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** → Concise 선택.

- Default 스타일과 작업 품질 동일
- 설명 요청 시에는 자세히 답변
- 오류·보안 경고·위험 작업 확인은 항상 전체 내용 유지

---

### 📱 폰에서 내 컴퓨터의 세션 시작

**Remote Control**이 공식(GA)으로 출시됐어요. 내 컴퓨터에서 `claude remote-control`을 실행하면 모바일 앱 Code 탭에 내 컴퓨터가 **장치 카드**로 나타나요.

```bash
# 내 컴퓨터에서 실행
claude remote-control
```

모바일 앱 Code 탭 → 상단 Devices 섹션 → 내 컴퓨터 탭 → 폴더 선택 → 세션 시작

---

## 기타 눈에 띄는 작은 변화들

| 변화 | 내용 |
|---|---|
| **맞춤법 검사** | `spellcheck` 설정으로 입력 중 오타 표시 (aspell/hunspell 필요) |
| **나의 프롬프트도 마크다운** | 내가 입력한 내용도 이제 마크다운으로 렌더링 |
| **GitLab 풋터 배지** | `MR !N` 배지로 MR 상태 색상 표시 |
| **`ANTHROPIC_DEFAULT_MODEL`** | 환경 변수로 새 세션 기본 모델 지정 가능 |
| **Ctrl+W 설정** | `keybindingFlavor: "readline"`으로 Bash 방식 단어 삭제 |
| **Ultraplan 제거** | `/ultraplan` 명령어 삭제됨 — 대신 plan 모드 또는 웹 Claude Code 사용 |
| **TodoWrite 도구 비활성화** | Opus 4.8·Sonnet 5·Fable 5 이상에서 기본 비활성화 (재활성화: `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`) |

---

## 관련 문서

- [Claude Opus 5 상세](./claude-opus-5)
- [세션 간 메시지 기능](../advanced/cross-session-messaging)
- [자체 호스팅 환경](../advanced/self-hosted-environments)
- [권한 모드 안내](../advanced/permission-modes)
