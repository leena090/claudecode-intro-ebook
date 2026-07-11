---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 7월 10일 (Week 25~28)"
description: "Sonnet 5 기본 모델 전환, Linux 데스크탑 베타, Artifacts 확대, MCP 셸 로그인, 데스크탑 내장 브라우저, /doctor 진단까지 4주 핵심 변경"
tags: ["업데이트", "2026", "week25", "week26", "week27", "week28", "sonnet5", "linux", "artifacts", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-11"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25~28 (2026-06-15 ~ 2026-07-10) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/index" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/index</a>
</div>

## 이번 4주, 무엇이 달라졌나요?

2026년 6월 중순부터 7월 초까지 4주 동안 굵직한 변화가 많았어요. 가장 큰 것은 **Sonnet 5가 기본 모델이 된 것**과 **Linux에서도 데스크탑 앱을 쓸 수 있게 된 것**이에요.

각 주별로 핵심만 뽑아서 설명할게요. ☕

---

## Week 25 (6월 15~19일): Artifacts, 권한 정밀 제어, /config 직접 설정

### 🎨 Artifacts — 대화창에서 웹 페이지 만들기

Artifacts(아티팩트)는 Claude Code가 대화 중에 **실시간 웹 페이지를 만들어서 공유 가능한 URL로 올려주는 기능**이에요.

> 🍱 **비유**: 마치 회사에서 프레젠테이션을 만들면 링크로 공유하는 것처럼, Claude가 코드 리뷰나 대시보드 같은 결과물을 예쁜 웹 페이지로 만들어줘요.

**어떻게 쓰나요?**
```text
> 이번 PR 변경 내용을 한눈에 보기 좋게 정리한 페이지 만들어줘
```

Claude가 페이지를 만든 뒤 "공개할까요?" 질문이 나와요. 승인하면 claude.ai의 비공개 URL로 올라가요.

| 항목 | 내용 |
|------|------|
| 처음 출시 | Week 25 — Team·Enterprise 베타 |
| 일반 공개 | Week 27 — **Pro·Max 포함 전체 플랜** |
| 저장 위치 | claude.ai (비공개 URL) |
| 용도 예시 | PR 리뷰 페이지, 세션 데이터 대시보드, 코드 설명 문서 |

<div class="note-circle">
○ v2.1.178 이상에서 사용 가능<br />
○ Week 27부터 Pro·Max 플랜도 포함됨 (전체 플랜 확대)
</div>

---

### 🔐 권한 규칙 파라미터 매칭 — `Tool(param:value)` 문법

이제 권한 규칙을 더 정밀하게 설정할 수 있어요. 도구 이름뿐 아니라 **어떤 값으로 실행하는지**까지 제한할 수 있거든요.

> 🍱 **비유**: 이전에는 "자동차 전체를 금지"하는 식이었다면, 이제는 "빨간 자동차만 금지" 같은 세밀한 제어가 가능해요.

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

위 설정은 "Opus 모델로 서브에이전트를 실행하는 것만 금지"예요. `*` 와일드카드도 사용 가능해요.

```json
"deny": ["Agent(isolation:*)"]  // 격리된 환경(worktree) 서브에이전트 전체 금지
```

---

### ⚙️ /config key=value — 설정 바로 바꾸기

설정 메뉴를 열지 않고 프롬프트에서 바로 설정값을 바꿀 수 있어요:

```text
> /config thinking=false
```

`-p` 비대화형 모드나 Remote Control에서도 사용 가능해요.

---

## Week 26 (6월 22~26일): MCP CLI 로그인, ! 명령어 자동 응답, /rewind

### 🔑 `claude mcp login` — 셸에서 MCP 서버 인증

MCP(Model Context Protocol) 서버에 로그인할 때 이전에는 Claude Code 안의 `/mcp` 메뉴를 써야 했어요. 이제는 **셸에서 직접** 처리할 수 있어요:

```bash
# 셸에서 바로 OAuth 인증 (Claude Code 세션 안 열어도 됨)
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

> 🍱 **비유**: 앱을 열지 않고 터미널에서 직접 카카오 로그인처럼 처리하는 거예요.

---

### ❗ ! 명령어 — 실행 결과에 Claude가 자동 응답

`!` 접두사로 셸 명령어를 실행하면 이제 Claude가 **결과를 보고 자동으로 분석**해줘요:

```text
> ! npm test
```

테스트가 실패하면 Claude가 실패 내용을 보고 자동으로 원인과 해결책을 설명해줘요. 이전에는 결과만 컨텍스트에 추가됐는데, 이제 분석까지 해줘요.

<div class="note-circle">
○ 이전 동작(분석 없이 컨텍스트만 추가)으로 돌아가려면:<br />
<code>settings.json</code>에 <code>"respondToBashCommands": false</code> 추가
</div>

---

### ⏪ /rewind — /clear 이전으로 되감기

실수로 `/clear`로 대화를 지웠어도 이제 되돌릴 수 있어요:

```text
> /rewind
```

`/clear` 실행 전 대화 시점으로 복원돼요.

---

**Week 26 기타 개선:**
- 백그라운드 서브에이전트의 권한 요청이 메인 세션에 바로 표시됨
- 스트리밍 응답 CPU 사용량 약 37% 감소
- `/review <pr>` 명령어가 `/code-review medium`과 같은 품질로 업그레이드

---

## Week 27 (6월 29 ~ 7월 3일): Sonnet 5 기본 모델, Chrome GA, Linux 데스크탑 베타, /radio

### 🤖 Claude Sonnet 5 — 이제 기본 모델이에요!

가장 큰 변화예요. **Sonnet 5가 Pro, Team Standard, Enterprise 구독 시트의 기본 모델**이 됐어요.

| 항목 | 내용 |
|------|------|
| 모델 ID | `claude-sonnet-5` |
| 컨텍스트 창 | 네이티브 100만 토큰 (1M context window) |
| 기본 설정 | Adaptive thinking(사고 기능) 켜진 상태 |
| API 홍보 가격 | $2/$10 per 백만 토큰 (2026년 8월 31일까지) |
| 최소 버전 | Claude Code v2.1.197 이상 |

> 🍱 **비유**: 전에는 포르쉐(Opus)가 기본차였는데, 이제는 Tesla(Sonnet 5)가 기본차가 됐어요. 가격 대비 성능이 더 좋아서요.

**Sonnet 5로 바꾸기:**
```text
> /model claude-sonnet-5
```

<div class="note-circle">
○ Sonnet 5는 코딩·도구 사용에서 최고 수준 성능을 Sonnet 가격에 제공<br />
○ Claude Code v2.1.197 이상으로 업데이트 필요: <code>claude update</code>
</div>

---

### 🌐 Claude in Chrome — 정식 출시 (GA)

Chrome 확장 프로그램이 베타를 졸업하고 **정식 출시**됐어요. Anthropic 직접 플랜 사용자 전체 이용 가능.

Claude Code가 브라우저를 직접 조작할 수 있어요: 탭 열기, 클릭, 폼 입력, 콘솔 로그 읽기. 여러분의 로그인 상태도 공유해서 실제 로그인이 필요한 앱도 테스트할 수 있어요.

---

### 🏃 서브에이전트 — 기본으로 백그라운드 실행

이전에는 서브에이전트(하위 AI)가 끝날 때까지 Claude가 기다렸어요. 이제는 **기본으로 백그라운드에서 병렬 실행**돼요.

> 🍱 **비유**: 이전에는 배달원이 하나가 배달 끝나야 다음 배달 출발. 이제는 배달원 여러 명이 동시에 출발해요.

권한 요청은 메인 세션에서 표시되니 안심하고 사용하세요.

---

### 🐧 Claude Desktop on Linux — 베타 출시!

드디어 **Linux에서도 Claude 데스크탑 앱**을 쓸 수 있어요!

| 항목 | 지원 내용 |
|------|---------|
| 배포판 | Ubuntu 22.04+, Debian 12+ |
| 아키텍처 | x86_64, arm64 |
| 기능 | Chat, Cowork, Claude Code 탭 모두 포함 |
| 업데이트 방식 | apt 패키지 자동 업데이트 |
| 상태 | 베타 (2026-07-11 기준) |

macOS·Windows와 동일한 경험이에요. 상세 설치 방법은 별도 문서를 참조하세요.

---

### 📻 /radio — Claude FM 음악 스트리밍

코딩할 때 들을 배경음악이 생겼어요!

```text
> /radio
```

lo-fi 라디오 스트림이 브라우저에서 열려요. 브라우저가 없는 환경에서는 스트림 URL을 출력해요.

<div class="note-circle">
○ Amazon Bedrock, Google Cloud Agent Platform, Microsoft Foundry에서는 사용 불가
</div>

---

**Week 27 기타 개선:**
- 권한 모드 이름 변경: "default" → **"Manual"** (CLI·VS Code·JetBrains 전체)
  - `--permission-mode manual`도 `default`와 동일하게 작동
- `AskUserQuestion` 대화상자가 더 이상 자동으로 계속되지 않음
- Org 관리자가 콘솔에서 조직 기본 모델 설정 가능
- `/dataviz` 스킬 추가 — 차트·대시보드 디자인 가이드

---

## Week 28 (7월 6~10일): 데스크탑 내장 브라우저, /doctor 진단

### 🌍 데스크탑 내장 브라우저 — 외부 사이트 탐색

Claude Code 데스크탑 앱에 **내장 브라우저**가 생겼어요. 문서 사이트, 디자인 파일, 외부 서비스 등 어떤 사이트든 Claude가 직접 접근해서 읽고 클릭하고 상호작용할 수 있어요.

> 🍱 **비유**: 이전에는 Claude가 집 안(로컬 앱)만 볼 수 있었는데, 이제는 인터넷도 직접 볼 수 있어요. 안전 검사관(safety classifier)이 외부 사이트 작업을 감시해요.

- 브라우저 세션 지속 여부는 설정으로 선택 가능
- 안전 분류기가 외부 사이트 작업 검토

---

### 🏥 /doctor — 설치 환경 전체 진단 + 자동 수정

`/doctor`(또는 `/checkup`)가 대폭 강화됐어요. 이제 **읽기 전용 리포트**가 아니라 **진단 + 수정**을 해줘요:

```text
> /doctor
```

**진단 항목:**
- 설치 상태 확인
- 사용하지 않는 스킬·MCP 서버·플러그인 찾기 (컨텍스트 비용 기준)
- 로컬 CLAUDE.md가 저장소 파일과 중복되는지 확인
- CLAUDE.md에서 Claude가 코드베이스에서 유추할 수 있는 내용 제거 제안
- 느린 훅(hook) 감지

수정 전 항상 확인 질문을 해요. 강제로 바꾸지 않아요.

---

**Week 28 기타 개선:**
- Auto mode가 세션 기록 파일 조작 차단 + `rm -rf`를 변수로 실행할 때 확인 요청
- `/commit-push-pr`이 origin 외에 설정된 push remote에도 자동 허용
- Gateway: `/login`이 Anthropic 공개 게이트웨이 엔드포인트 지원

---

## 전체 요약 표

| 주차 | 핵심 기능 | 버전 |
|------|-----------|------|
| w25 | Artifacts, 권한 파라미터 매칭, /config key=value | v2.1.178~183 |
| w26 | claude mcp login, ! 자동 응답, /rewind | v2.1.185~193 |
| w27 | **Sonnet 5 기본 모델**, Chrome GA, Linux 데스크탑, /radio | v2.1.195~201 |
| w28 | 데스크탑 내장 브라우저, /doctor 진단+수정 | v2.1.202~206 |

<div class="note-circle">
○ 업데이트: <code>claude update</code><br />
○ 공식 전체 변경 내역: <a href="https://code.claude.com/docs/en/changelog" target="_blank">code.claude.com/docs/en/changelog</a>
</div>
