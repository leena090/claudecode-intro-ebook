---
title: "[공] Claude Code 주간 업데이트 W25~W29 (2026년 6월~7월)"
description: "아티팩트 공유, /rewind, Sonnet 5 기본 모델 전환, 모바일 지원, MCP 커넥터 등 2026년 6~7월 주요 5주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "아티팩트", "Sonnet5", "모바일", "MCP"]
category: "next"
order: 15
lastUpdated: "2026-07-18"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W25~W29) 내용을 한국어로 정리한 것입니다.
<br />★ 오늘 날짜 기준(2026-07-18) 최신 5주치 업데이트를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 5주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W25** | 6/15~6/19 | 아티팩트(Artifacts) 공유 기능 |
| **W26** | 6/22~6/26 | MCP 로그인, `/rewind` 되돌리기 |
| **W27** | 6/29~7/3 | **Sonnet 5 기본 모델 전환**, Desktop Linux 베타 |
| **W28** | 7/6~7/10 | 내장 브라우저, `/doctor` 점검 |
| **W29** | 7/13~7/17 | 아티팩트 MCP 실시간 데이터, 스크린 리더 모드 |

---

## W25 · 6월 15~19일 — 아티팩트(Artifacts) 출시

### 🖼️ 세션 결과를 공유 가능한 페이지로 발행

Claude Code가 만들어준 결과물을 **공개 링크**로 바로 공유할 수 있게 됐어요.

> 🍱 **비유로 설명하면**: 클로드가 만들어준 리포트나 차트를 지금까지는 스크린샷 찍어서 보내야 했다면, 이제는 **구글 드라이브 공유 링크처럼** 바로 URL 하나로 전달할 수 있어요.

```bash
# 세션에서 아티팩트 생성
/artifact create  # 또는 클로드가 자동으로 제안
```

- **비공개 기본**: 발행된 아티팩트는 기본적으로 나만 볼 수 있어요
- **조직 내 공유**: 팀원에게만 공개 설정 가능
- **공개 링크**: 외부 공유도 선택 가능

### ⚙️ 기타 W25 변경

- **도구 파라미터 매칭**: `deny` 및 `ask` 규칙에서 구체적인 도구 파라미터 값을 조건으로 지정 가능
- **`/config` 명령어**: 프롬프트에서 바로 설정 변경 (`/config theme dark` 등)

---

## W26 · 6월 22~26일 — MCP 인증 & `/rewind`

### 🔐 `claude mcp login` — MCP 서버 로그인

외부 도구(GitHub, Notion, Slack 등) MCP 서버에 **터미널에서 직접 인증**할 수 있어요.

```bash
claude mcp login github   # GitHub MCP 서버에 로그인
```

> 🍱 **비유로 설명하면**: 클로드한테 GitHub 접근을 허용할 때 이전엔 설정 파일을 직접 수정해야 했다면, 이제는 **앱 처음 실행할 때 로그인 버튼 누르듯** 간단하게 됩니다.

### ⚡ `!` 프리픽스 — 셸 명령어 결과에 바로 답변 요청

```bash
! git diff HEAD~1    # git 차이를 클로드한테 바로 설명 요청
```

평소 `!` 뒤에 셸 명령어를 실행하면 그 결과를 클로드가 이어받아 분석해줘요.

### ↩️ `/rewind` — `/clear` 이전으로 대화 되돌리기

실수로 `/clear`로 대화를 지웠는데 이전 내용이 필요할 때 사용하는 명령어예요.

```bash
/rewind   # /clear 전 상태로 복원
```

> 🍱 **비유로 설명하면**: 문서 편집에서 "실행 취소(Ctrl+Z)" 같은 기능이에요.

---

## W27 · 6월 29일~7월 3일 — Sonnet 5 기본 모델 전환 ⭐

### 🚀 Claude Sonnet 5 — 이제 기본 모델로

2026년 7월 1일부터 **Claude Sonnet 5**가 Claude Code의 기본 모델이 됐어요.

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-sonnet-5` |
| **특징** | 코딩·에이전트·전문 업무에서 최전선 성능 |
| **기본 적용** | Pro/Max/Team 플랜 모두 |

<div class="note-star">
★ 기존에 Opus 4.8로 설정해두신 분은 그 설정이 그대로 유지돼요. 아무것도 안 하신 분들만 Sonnet 5로 자동 전환됩니다.
</div>

### 🌐 Chrome 확장이 GA(정식 출시)로

Claude in Chrome이 **리서치 프리뷰**에서 **정식 출시**로 격상됐어요.

- 웹 앱 테스트, 콘솔 로그 디버깅
- 폼 자동 입력, 웹 페이지 데이터 추출
- 기존 확장 설치 유저는 자동 업데이트

### 🤖 서브에이전트 기본 백그라운드 실행

서브에이전트(subagents)가 이제 기본적으로 **백그라운드**에서 실행돼요.

> 🍱 **비유로 설명하면**: 이전엔 클로드가 여러 작업을 시킬 때 앞 작업이 끝나야 다음 작업을 시작하는 "1명씩 순서대로"였다면, 이제는 **여러 직원이 동시에 각자 맡은 일을 하는** 방식으로 바뀐 거예요.

### 🐧 Claude Desktop Linux 베타 출시

드디어 **Linux에서도 Claude Desktop 앱** 사용 가능! Ubuntu와 Debian 지원.

```bash
# Ubuntu / Debian 설치
curl -fsSL https://claude.ai/install.sh | bash
```

### 📻 `/radio` — Claude FM

`/radio` 명령어로 Claude FM이라는 특별 채널 청취 가능. (공식 발표 기준 — 상세 기능 추정)

---

## W28 · 7월 6~10일 — 내장 브라우저 & `/doctor`

### 🌐 Desktop 내장 브라우저로 외부 사이트 탐색

Claude Code Desktop 앱에서 **외부 사이트를 직접 탐색**할 수 있게 됐어요.

> 🍱 **비유로 설명하면**: 지금까지 클로드가 "이 웹사이트 확인해줘"라는 요청을 받으면 일일이 열어서 스크린샷 찍는 방식이었다면, 이제는 **자체 브라우저 탭이 생겨서** 클로드가 직접 인터넷을 돌아다닐 수 있어요.

### 🏥 `/doctor` — 설정 전체 점검

```bash
/doctor
```

Claude Code 설정 전반을 자동 점검해주는 명령어예요. CLAUDE.md, MCP 서버, 훅(hooks), 스킬 등이 제대로 로드됐는지 확인해줘요.

> 🍱 **비유로 설명하면**: 자동차 정기검진처럼 "현재 클로드 설정이 정상 작동하는지" 한 번에 체크해주는 진단 도구예요.

### 🛡️ Auto mode 보호 기능 강화

- **트랜스크립트 보호**: Auto mode 실행 중 대화 내용 보호 기능 추가
- **Agent view 업그레이드**: 여러 세션 관리 화면 개선

---

## W29 · 7월 13~17일 — 아티팩트 MCP 실시간 데이터 연결

### 🔗 아티팩트 + MCP = 실시간 데이터 페이지

발행된 아티팩트(Artifacts)에서 **MCP 커넥터를 통해 실시간 데이터를 가져올 수** 있게 됐어요.

| 이전 | 이후 |
|---|---|
| 아티팩트는 발행 당시 데이터 고정 | 아티팩트가 실시간으로 데이터 갱신 |
| 정적 페이지 | 라이브 대시보드 |

> 🍱 **비유로 설명하면**: 이전엔 클로드가 만들어준 리포트가 인쇄된 종이처럼 그 순간 데이터만 담았다면, 이제는 **구글 스프레드시트처럼 항상 최신 데이터로 업데이트**되는 페이지를 만들 수 있어요.

### ♿ 스크린 리더 모드 출시

시각 보조 기술(스크린 리더) 사용자를 위한 **전용 접근성 모드**가 추가됐어요.

- VoiceOver(macOS), NVDA(Windows) 등과 호환
- 화면 확대경, 색각 이상 테마 지원
- 애니메이션 감소 옵션

---

## 어떤 기능이 가장 중요한가요?

| 우선순위 | 기능 | 이유 |
|---|---|---|
| ⭐⭐⭐ | **Sonnet 5 기본 전환** | 별도 설정 없이 더 좋은 모델 사용 |
| ⭐⭐⭐ | **아티팩트 공유** | 팀 협업 혁신적 개선 |
| ⭐⭐ | **`/rewind`** | 실수 복구가 훨씬 쉬워짐 |
| ⭐⭐ | **`/doctor`** | 설정 문제 자가 진단 가능 |
| ⭐ | **Desktop Linux 베타** | Linux 사용자에게 게임 체인저 |

---

<div class="note-star">
★ 더 자세한 내용은 공식 What's New 페이지를 참고하세요:
<br />W25: <a href="https://code.claude.com/docs/en/whats-new/2026-w25">code.claude.com/docs/en/whats-new/2026-w25</a>
<br />W26: <a href="https://code.claude.com/docs/en/whats-new/2026-w26">code.claude.com/docs/en/whats-new/2026-w26</a>
<br />W27: <a href="https://code.claude.com/docs/en/whats-new/2026-w27">code.claude.com/docs/en/whats-new/2026-w27</a>
<br />W28: <a href="https://code.claude.com/docs/en/whats-new/2026-w28">code.claude.com/docs/en/whats-new/2026-w28</a>
<br />W29: <a href="https://code.claude.com/docs/en/whats-new/2026-w29">code.claude.com/docs/en/whats-new/2026-w29</a>
</div>
