---
title: "[공] Claude Code 주간 업데이트 W30~W34 (2026년 7~8월)"
description: "Opus 5 기본 모델 전환, 자동 모드 기본값 변경, 세션 간 메시지, 자체 호스팅 환경, /design 스킬, Concise 출력 스타일 등 2026년 7~8월 주요 5주치 업데이트"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "자동모드", "크로스세션", "셀프호스팅", "design스킬", "Concise"]
category: "next"
order: 17
lastUpdated: "2026-09-03"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W34) 내용을 한국어로 정리한 것입니다.
<br />★ 오늘 날짜 기준(2026-09-03) W30~W34 주요 업데이트 5주치를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 5주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Opus 5** 기본 모델 전환, iOS 시뮬레이터, Claude Security 플러그인 |
| **W32** | 8/3~8/7 | **세션 간 메시지**, **자체 호스팅 환경** (공개 베타), 자동 모드 기본값 변경 |
| **W33** | 8/10~8/14 | 사용 한도 후 자동 재개, 포크 모드 기본값, GitLab MR 지원 |
| **W34** | 8/17~8/21 | **/design 스킬**, **Concise 출력 스타일**, 휴대폰에서 세션 시작 (정식 출시) |

> 📌 W31은 공식 What's New 페이지에 게시되지 않았어요.

---

## W30 · 7월 20~24일 — Opus 5 기본 모델 전환

### 🤖 Claude Opus 5 — 새 기본 Opus 모델

**Opus 5**(`claude-opus-5`)가 Claude Code의 새 기본 Opus 모델이 됐어요.

> 🔧 **비유로 설명하면**: 이전까지 "제일 비싼 장인 도구"였던 Opus 4.8이 한 단계 업그레이드된 거예요. 더 강력해지면서도 **Fast Mode 가격이 내려갔어요** ($10/$50 per MTok).

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **기본 적용** | Max · Team Premium · Enterprise · Anthropic API |
| **컨텍스트** | **100만 토큰** (API, Max, Team, Enterprise 플랜) |
| **Fast Mode** | $10/$50 per MTok (기존 Opus 4.8의 $30/$150보다 저렴!) |

```bash
# Opus 5로 직접 전환
/model claude-opus-5
```

<div class="note-star">
★ <strong>Fast Mode 가격 변경</strong>: Opus 4.8 시절 $30/$150이었던 Fast Mode 요금이 Opus 5 기준으로 <strong>$10/$50</strong>으로 크게 내려갔어요. 소비 기반(consumption-based) 플랜에서만 적용됩니다.
</div>

### 📱 iOS 시뮬레이터 (공개 베타)

**Claude Code Desktop(macOS)** 에 iOS 시뮬레이터 창이 추가됐어요.

> 📱 **비유로 설명하면**: 클로드가 아이폰 앱을 만들고 직접 탭해보면서 테스트하는 걸 내 화면에서 **실시간으로 구경할 수 있어요**. 마치 어깨 너머로 클로드가 폰을 만지는 걸 보는 느낌이죠.

- Claude가 앱을 빌드·실행·검사할 때 시뮬레이터 창이 자동으로 열려요
- 기기 화면이 실시간 스트리밍됩니다
- 직접 시뮬레이터를 조작할 수도 있어요
- **요구 사항**: Xcode + iOS 플랫폼 설치, Claude Desktop v1.24012.0 이상

### 🔒 Claude Security 플러그인 (신규)

코드베이스 전체에서 보안 취약점을 **다중 에이전트가 자동 스캔**하는 플러그인이에요.

> 🛡️ **비유로 설명하면**: 내 코드의 보안 구멍을 찾는 전문 감사팀이 자동으로 투입되는 거예요. 탐정 여러 명이 각자 다른 각도에서 코드를 뜯어보는 것처럼요.

```bash
# 공식 Anthropic 마켓플레이스에서 설치
/plugin install claude-security@claude-plugins-official
/reload-plugins
# 스캔 시작
/claude-security
```

- 저장소 전체 · 브랜치 차이 · PR · 단일 커밋 스캔 선택 가능
- 결과는 `CLAUDE-SECURITY-<timestamp>/` 폴더에 저장돼요

---

## W32 · 8월 3~7일 — 세션 간 메시지 & 자체 호스팅 환경

### 💬 세션 간 메시지 (Cross-session Messaging)

여러 Claude Code 세션이 **서로 메시지를 주고받을 수 있어요**.

> 📮 **비유로 설명하면**: 창구 A에서 일하는 클로드가 창구 B에서 일하는 클로드에게 "결제 API 담당자에게 `users.name`이 `users.display_name`으로 바뀌었다고 전해줘"라고 쪽지 보내는 거예요.

```text
# 세션 A에서 → 세션 B로 메시지 전달 요청
결제 API 작업 중인 세션에게 users.name이 users.display_name으로 바뀌었다고 알려줘
```

- 같은 기기의 다른 세션을 `/list-agents`로 확인
- 프롬프트에서 `@`으로 세션 이름 멘션하면 바로 메시지 전송
- 대화 내역이나 파일은 전송되지 않아요 (텍스트 메시지만)
- macOS / Linux 지원 (v2.1.224 이상)

### 🏢 자체 호스팅 환경 (Self-Hosted Environments) — 공개 베타

**내 조직의 인프라에서 Claude Code 클라우드 세션을 직접 실행**하는 기능이에요.

> 🏭 **비유로 설명하면**: "클로드 작업실을 우리 회사 서버 안에 직접 설치하는 것"이에요. 외부 클라우드가 아닌 사내 네트워크에서 내부 서비스에 접근하며 작업할 수 있어요.

- **Team · Enterprise 플랜** 공개 베타
- `claude self-hosted-runner` 명령어로 자체 러너 설치
- 사용자가 `claude --cloud`로 세션 시작 시 자체 인프라에서 실행
- 어드민 설정 → **Allow self-hosted environments** 활성화 필요

```bash
# 설정 마법사 실행 (Owner 계정으로)
claude self-hosted-runner setup
```

### ⚙️ 자동 모드가 기본값이 됩니다 (8월 14일부터)

**2026년 8월 14일**부터 Pro · Max · Team 플랜의 신규 세션 기본 권한 모드가 **자동 모드(auto mode)** 로 바뀌었어요.

> 🤖 **비유로 설명하면**: 이전에는 새 세션을 열면 클로드가 파일 수정할 때마다 "이거 해도 돼요?"라고 물어봤어요. 이제는 **안전하다고 판단되는 건 알아서 진행**하고, 위험한 것만 물어봐요.

| 항목 | 내용 |
|---|---|
| **적용 대상** | Pro · Max · Team 플랜 신규 세션 |
| **내 설정 우선** | 직접 모드를 설정해두셨다면 그대로 유지돼요 |
| **조직 관리 설정** | 조직에서 관리하는 모드도 그대로 유지 |
| **언제든 변경 가능** | `/mode bypass` 등으로 언제든 바꿀 수 있어요 |

```json
// 미리 자동 모드로 설정해두려면 (~/.claude/settings.json)
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

<div class="note-star">
★ <strong>중요:</strong> 자동 모드에서 클래시파이어(AI 안전 판단기) 호출은 사용량 한도에서 제외됩니다. 더 편하게 쓸 수 있어요.
</div>

#### 🚫 Ultraplan 제거됨

W32에서 `/ultraplan` 명령어와 `ultraplan` 키워드가 완전히 제거됐어요.
- 대신 **plan 모드** 또는 **Claude Code on the web**을 사용하세요

---

## W33 · 8월 10~14일 — 자동 재개 & 포크 모드 기본값

### ⏰ 사용 한도 후 자동 재개 (Desktop)

Claude Code Desktop에서 세션 한도에 걸렸을 때 **한도가 풀리면 자동으로 재개**돼요.

> 🛑 **비유로 설명하면**: 은행 ATM 시간 제한에 걸렸을 때 "자정이 되면 자동으로 다시 연결해줄게"라고 예약해두는 거예요.

- 한도 카드에 **"Auto-continue when limits reset"** 체크박스 등장
- 카드에 재개 예정 시각 표시
- 주간 한도 카드에는 표시되지 않아요

### 🌿 포크 모드 기본값 ON

`/subtask`로 부분 작업을 맡길 때 **대화 전체 컨텍스트를 그대로 물려받아** 작업해요.

> 🌱 **비유로 설명하면**: 지금까지 나눈 대화를 새 서브 클로드에게 그대로 복사해서 건네주는 거예요. 처음부터 설명할 필요 없이요.

```bash
# 현재까지 논의한 내용을 바탕으로 단위 테스트 작성
/subtask 파서 변경 사항에 대한 단위 테스트 작성해줘
```

- 포크를 끄려면: `CLAUDE_CODE_FORK_SUBAGENT=0`

### 🦊 GitLab 머지 리퀘스트 + 마켓플레이스 지원

- `--worktree` 옵션에 GitLab MR URL 바로 사용 가능
- 플러그인 마켓플레이스에서 GitLab URL 지원
- Claude Code가 `glpat-` 등 GitLab 토큰도 자동 숨김 처리

```bash
# GitLab MR을 바탕으로 워크트리 세션 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

---

## W34 · 8월 17~21일 — /design 스킬 & Concise 스타일

### 🎨 /design 스킬 (리서치 프리뷰)

말로 설명하면 Claude가 **UI 아트보드(artboard)를 설계**해서 편집 가능한 캔버스로 발행해줘요.

> 🖼️ **비유로 설명하면**: "결제 화면 새로 디자인해줘"라고 말하면, 클로드가 여러 시안을 그려서 구글 슬라이드처럼 보여주는 거예요. 거기서 내가 원하는 안을 고르고 "이걸로 구현해줘" 하면 끝이에요.

```text
> /design 결제 화면을 사용자가 실제로 쓰는 방식에 맞게 재디자인해줘
```

- Claude Code Desktop · CLI 지원
- Pro · Max · Team · Enterprise 플랜
- v2.1.234 이상 필요
- [아티팩트](https://code.claude.com/docs/en/artifacts)가 지원되는 환경 필요

### 📝 Concise 출력 스타일 (신규)

Claude가 **결과를 먼저, 설명은 나중에** 쓰는 새 스타일이에요.

> 📝 **비유로 설명하면**: 보고서를 쓸 때 결론 먼저, 배경 설명은 뒤에 두는 피라미드 구조예요. 바쁜 개발자에게 딱!

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** → Concise 선택

- 결과를 먼저 보여주고, 부연 설명 생략
- "더 자세히 설명해줘" 하면 전체 내용을 답해줘요
- 오류 · 보안 경고 · 위험한 작업 확인은 항상 전체 내용 유지
- v2.1.237 이상 필요

### 📱 휴대폰에서 내 컴퓨터 세션 시작 (정식 출시)

Remote Control이 리서치 프리뷰를 졸업하고 **정식 출시**됐어요.

> 📲 **비유로 설명하면**: 집에 있는 컴퓨터를 스마트폰으로 켜고, 클로드한테 "그 폴더에서 이 작업 해줘"라고 시킬 수 있어요.

```bash
# 내 컴퓨터에서 Remote Control 시작
claude remote-control
```

- 모바일 앱 **Code 탭** 상단에 "Devices" 섹션 표시
- 기기 카드를 탭 → 디렉터리 선택 → 세션 시작
- 휴대폰에서 effort 레벨·권한 모드 변경도 가능

---

## 기타 중요한 업데이트 (W30~W34 합산)

| 기능 | 설명 |
|---|---|
| **ANTHROPIC_DEFAULT_MODEL** 환경변수 | 신규 세션 기본 모델 지정 (`/model` 선택 시 우선 적용) |
| **Concise 스타일** | 결과 먼저, 설명 생략 (v2.1.237+) |
| 이모지 단축코드 | `:heart:` 입력 → 이모지 자동완성 |
| 세션 프롬프트 마크다운 | 내 질문도 이제 마크다운으로 렌더링됨 |
| 서브에이전트 200개 제한 제거 | 장시간 세션도 새 서브에이전트 계속 사용 가능 |
| VS Code 세션 그룹 | 세션 목록을 그룹으로 묶어 정리 가능 |
| GitLab 배지 | 풋터에 MR 번호·상태 표시 |
| 맞춤법 검사 | `spellcheck` 설정 → 입력 중 오타 밑줄 표시 |
| 소비 한도 후 자동 재개 | usage limit 후 `/config`에서 자동 재개 on/off |

---

## 무엇을 먼저 써볼까요?

입문자라면 이 순서로 해보세요:

1. **Concise 출력 스타일** → `/config`에서 바로 켤 수 있어요. 불필요한 설명이 줄어들어 시원해요
2. **자동 모드** → 매번 "이거 해도 돼요?" 물어보는 게 피곤하셨다면 기본값이 됐으니 이제 편해요
3. **/design** → 화면 디자인 시안이 필요할 때 한번 써보세요
4. **Remote Control** → 스마트폰에서 내 컴퓨터 작업하기 (외출 중에도 클로드 작업 시작!)
