---
title: "[공] Claude Code 주간 업데이트 W30~W34 (2026년 7월~8월)"
description: "Claude Opus 5 기본 모델 전환, 자체 호스팅 환경, 세션 간 메시지, /design 스킬, Auto mode 기본화 등 2026년 7~8월 주요 5주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "자체호스팅", "크로스세션", "Auto모드", "design스킬"]
category: "next"
order: 17
lastUpdated: "2026-09-13"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W34) 내용을 한국어로 정리한 것입니다.
<br />★ 오늘 날짜 기준(2026-09-13) 최신 5주치 업데이트를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 5주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Claude Opus 5** 기본 모델, iOS 시뮬레이터 패널, Claude Security 플러그인 |
| **W31** | (미발행) | — |
| **W32** | 8/3~8/7 | **세션 간 메시지**, **자체 호스팅 환경**, Auto mode 기본화 |
| **W33** | 8/10~8/14 | Desktop 자동 재시작, Fork mode 기본화, GitLab MR 통합 |
| **W34** | 8/17~8/21 | **/design 스킬**, Concise 출력 스타일, 폰으로 세션 시작 |

---

## W30 · 7월 20~24일 — Claude Opus 5 출시

### 🤖 Claude Opus 5: 기본 Opus 모델 교체

Claude Code의 기본 Opus 모델이 **Opus 4.8 → Opus 5**로 바뀌었어요.

> 💡 **비유로 설명하면**: 회사 컴퓨터가 조용히 신형 CPU로 교체된 것처럼, 같은 Claude Code를 쓰는데 갑자기 더 빠르고 영리하게 처리해준다는 뜻이에요.

**주요 변경 사항:**

| 항목 | 이전 (Opus 4.8) | 이후 (Opus 5) |
|---|---|---|
| 기본 모델 | Opus 4.8 | **Opus 5** |
| 컨텍스트 창 | 200k | **1M 토큰** (Max, Team, Enterprise) |
| Fast mode 가격 | $30/$150/MTok | **$10/$50/MTok** |
| Fast mode 속도 | 2.5배 빠름 | 2.5배 빠름 |

```bash
# 모델을 직접 지정할 수도 있어요
> /model claude-opus-5
```

**어디서 쓸 수 있나요?**
- Max, Team Premium, Enterprise pay-as-you-go: 기본 자동 전환
- Amazon Bedrock, Google Cloud: 1M 버전 별도 선택 필요
- Anthropic API: 기본 자동 전환

### 📱 iOS 시뮬레이터 패널 (Desktop 전용)

Claude Code Desktop(macOS)에 **iOS 시뮬레이터 화면이 옆에 바로 보이는** 패널이 추가됐어요.

> 🍎 **이런 분에게 유용해요**: iPhone 앱을 만들고 있을 때, 클로드가 코드 수정 후 시뮬레이터를 실행하면 바로 옆에 화면이 보여서 "잘 됐나?" 확인하러 Xcode 앱을 따로 켤 필요가 없어요.

- Pro, Max, Team 플랜 공개 베타
- Xcode + iOS 플랫폼 설치 필요

### 🔒 Claude Security 플러그인

코드베이스 취약점을 **멀티 에이전트 방식으로 자동 스캔**하는 플러그인이 출시됐어요.

```bash
# 플러그인 설치
> /plugin install claude-security@claude-plugins-official

# 스캔 실행
> /claude-security
```

스캔 결과는 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장돼요.

---

## W32 · 8월 3~7일 — 세션 간 소통 & 자체 호스팅

### 💬 세션 간 메시지 (Cross-session Messaging)

**같은 컴퓨터에서 열린 여러 Claude Code 세션이 서로 메시지를 보낼 수 있어요!**

> 📡 **비유로 설명하면**: 팀 동료들이 각자 다른 파일을 작업하다가 "내가 고친 이 함수 이름, 너도 써야 해"라고 메신저로 알려주는 것처럼, 클로드 세션들이 자기들끼리 정보를 전달해줘요.

```bash
# 현재 세션에서 다른 세션에 알리기
> "payments API 작업 중인 세션에 users.name이 users.display_name으로 바뀌었다고 알려줘"
```

```bash
# 어떤 세션들이 있는지 확인
> /list-agents
```

- macOS, Linux 지원 (v2.1.224 이상)
- Windows는 W34에서 추가됨

### 🖥️ 자체 호스팅 환경 (Self-hosted Environments)

**회사 내부 서버에서 클라우드 세션을 실행**할 수 있게 됐어요. Team/Enterprise 플랜 공개 베타.

> 🏢 **비유로 설명하면**: 이제까지 Claude Code 클라우드 세션은 Anthropic 서버에서만 돌렸다면, 이제는 **우리 회사 서버에서** 직접 돌릴 수 있어요. 내부 데이터베이스나 사내 API에 바로 붙을 수 있게 되는 거죠.

```bash
# 내 서버를 러너로 등록
claude self-hosted-runner setup
```

관리자가 claude.ai/admin-settings/cloud-environments 에서 **Allow self-hosted environments** 먼저 켜야 해요.

### ⚡ Auto mode가 기본값으로 (8월 14일부터)

**Pro, Max, Team 플랜에서 Auto mode가 새 세션 기본값이 됐어요.**

> 🚦 **비유로 설명하면**: 예전에는 신호등에서 항상 "이 길 가도 되나요?" 물어봤다면, 이제는 클로드가 알아서 안전한지 판단하고 지나가요. 위험한 명령만 물어봐요.

이미 직접 기본값을 설정해뒀다면 그대로 유지돼요.

```json
// 미리 auto mode 기본값으로 설정하기
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

---

## W33 · 8월 10~14일 — 자동화 강화

### 🔄 Desktop 사용량 한도 후 자동 재개

Desktop 앱에서 세션 한도에 걸렸을 때 **자동으로 재시작되는 체크박스**가 생겼어요.

> ⏰ **이런 분에게 유용해요**: 밤새 긴 작업을 클로드에 맡기고 잤는데, 새벽에 사용량 한도에 걸려서 멈춰있는 경우가 있었죠. 이제는 한도 리셋 후 자동으로 이어서 작업해요.

한도 카드에서 **Auto-continue when limits reset** 체크박스를 선택하면 돼요.

### 🍴 Fork mode 기본화

**/subtask 명령어**로 서브 에이전트를 실행할 때 **현재까지의 대화 맥락을 그대로 물려받는** fork mode가 기본값이 됐어요.

> 🧬 **비유로 설명하면**: 서브 작업을 맡길 때 "처음부터 설명해야 하는 새 직원"이 아니라 "이미 우리 대화를 다 들어온 복사본 동료"에게 부탁하는 거예요.

```bash
# 지금까지 논의한 맥락을 그대로 가져가는 서브 태스크
> /subtask 지금까지 바꾼 parser 로직에 맞는 유닛 테스트 초안 작성해줘
```

### 🦊 GitLab MR 통합

GitLab 사용자를 위한 기능들이 대폭 추가됐어요:

- `claude --worktree <GitLab MR URL>` 로 MR에서 바로 브랜치 분기
- 바닥 상태바에 `!N` 배지 표시
- `glpat-`, `glrt-` 등 GitLab 토큰 자동 숨김

---

## W34 · 8월 17~21일 — 디자인 & 사용성

### 🎨 /design 스킬 (리서치 프리뷰)

**UI 디자인 아트보드를 CLI에서 바로** 만들 수 있어요!

> 🖌️ **비유로 설명하면**: 피그마 디자이너에게 "이런 화면 만들어줘"라고 말하는 것처럼, 클로드한테 원하는 디자인을 말하면 편집 가능한 아트보드를 만들어줘요. 마음에 드는 걸 고르면 바로 코드로 구현까지 해줘요.

```bash
# 디자인 요청
> /design 사용자들이 실제 쓰는 기능 중심으로 composer를 재디자인해줘
```

- Pro, Max, Team, Enterprise 플랜
- v2.1.234 이상 필요
- 아티팩트 기반 (아티팩트 지원 환경에서만)

### 📝 Concise 출력 스타일

새로운 **Concise(간결) 출력 스타일**이 추가됐어요. 결론만 먼저 보여주고 설명은 필요할 때만 해줘요.

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** → **Concise** 선택.

> ✂️ **이런 분에게 유용해요**: "파일 수정해줘" 했을 때 긴 설명 없이 바로 수정 결과만 보고 싶은 분. 단, 에러 보고나 보안 경고 등 중요한 내용은 항상 전체 내용을 보여줘요.

### 📲 폰에서 내 컴퓨터 세션 시작

`claude remote-control` 을 실행 중인 컴퓨터가 **Claude 앱 Code 탭 맨 위에 디바이스 카드로 표시**돼요.

```bash
# 내 컴퓨터에서 실행
claude remote-control
```

폰의 Claude 앱 → Code 탭 → 디바이스 카드 탭 → 폴더 선택 → 세션 시작!

Remote Control이 리서치 프리뷰를 졸업해 **정식 기능**이 됐어요. 🎉

---

## 📋 기타 주요 변경 사항 (W30~W34)

| 기능 | 내용 | 주차 |
|---|---|---|
| `ANTHROPIC_DEFAULT_MODEL` 환경변수 | 기본 시작 모델 설정 | W34 |
| `/review` 명령어 | `/code-review` 의 별칭으로 추가 | W32 |
| `/code-review` 백그라운드 실행 | 리뷰 중 다른 작업 가능 | W30 |
| 200개 서브에이전트 제한 제거 | 장시간 세션에서 제한 없이 | W32 |
| 이모지 자동완성 | `:heart:` 입력 시 이모지 삽입 | W30 |
| 마크다운 내 프롬프트 렌더링 | 내 입력도 마크다운으로 표시 | W34 |
| Ultraplan 제거 | `/ultraplan` 명령어 삭제, plan mode 사용 | W32 |
| Task 도구 (TaskCreate 등) 비활성화 | Opus 5 이상에서 기본 비활성 | W33 |
| Windows 세션 간 메시지 | Windows에서도 SendMessage 지원 | W34 |
| spellcheck 설정 | 입력 중 맞춤법 밑줄 표시 옵션 | W34 |

---

<div class="tip-box">
💡 <strong>팁</strong>: Ultraplan(<code>/ultraplan</code>)이 완전히 제거됐어요. 같은 기능은 <strong>plan mode</strong> 또는 <strong>Claude Code on the web</strong>의 플래닝 기능을 쓰면 돼요.
</div>
