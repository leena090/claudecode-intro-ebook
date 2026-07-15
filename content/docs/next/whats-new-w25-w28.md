---
title: "[공] Claude Code 최신 기능 총정리 — W25~W28 (2026년 6~7월)"
description: "Artifacts, Sonnet 5 기본 모델 전환, Linux 데스크톱 출시, /radio, /doctor 강화까지 — 2026년 6월 셋째 주부터 7월 둘째 주까지 4주치 업데이트"
tags: ["자동생성", "whats-new", "업데이트", "2026", "sonnet5", "linux", "artifacts"]
category: "next"
order: 15
lastUpdated: "2026-07-15"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — code.claude.com/docs/en/whats-new/2026-w25 ~ w28. <code>[공]</code><br />
2026년 6월 15일 ~ 7월 10일 (W25~W28), 버전 v2.1.178 ~ v2.1.206
</div>

## 4주 핵심 요약

| 주차 | 버전 | 핵심 기능 |
|------|------|-----------|
| W25 (6/15~19) | v2.1.178~183 | Artifacts 출시, /config 직접 설정 |
| W26 (6/22~26) | v2.1.185~193 | MCP CLI 로그인, ! 자동 응답, /rewind |
| W27 (6/29~7/3) | v2.1.195~201 | **Sonnet 5 기본 모델**, Linux 앱 베타, /radio |
| W28 (7/6~10) | v2.1.202~206 | 데스크톱 내장 브라우저, /doctor 진단+수정 |

---

## W25 (6월 15~19일) · v2.1.178~183

### 🎨 Artifacts — 세션 중 웹페이지를 즉시 만들어 공유!

Claude Code가 이제 대화 중에 **실시간 웹페이지(Artifacts)**를 만들고 공유 URL을 발급해줘요. Team·Enterprise 요금제에서 베타로 시작했어요 (W27에서 Pro·Max로 확대).

> 🏗️ **비유**: 건축 설계사가 설계도를 그리면서 바로 3D 미리보기 링크를 뽑아주는 것처럼, Claude가 코딩하면서 "여기 보세요!" 링크를 즉석에서 만들어줘요.

```text
> 이 PR 변경사항을 한눈에 보기 좋게 정리한 페이지 만들어줘.
```

Artifacts는 세션이 계속 작업하면서 **실시간으로 업데이트**돼요. 링크를 받은 사람도 항상 최신 버전을 볼 수 있어요.

### 🔐 권한 규칙에 파라미터 매칭 (v2.1.178)

`deny`·`ask` 규칙에서 이제 도구의 특정 파라미터 값으로 세밀하게 제어할 수 있어요.

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

- `Agent(model:opus)` — Opus 모델을 요청하는 서브에이전트 차단
- `Agent(isolation:*)` — 워크트리 격리를 사용하는 모든 서브에이전트 차단

### ⚙️ /config key=value — 대화창에서 바로 설정 변경 (v2.1.181)

```text
> /config thinking=false
> /config theme=dark
```

이제 설정 화면을 열지 않고 대화창에서 직접 설정을 바꿀 수 있어요! `-p` 헤드리스 모드와 Remote Control에서도 작동해요.

**기타 W25 개선사항:**
- Auto mode: `git reset --hard`, `git clean -fd`, `terraform destroy` 실수 차단 강화
- `"attribution.sessionUrl": false` → 커밋·PR에서 claude.ai 세션 링크 제거 가능
- 스트리밍: 긴 단락이 줄 단위로 즉시 표시 (이전: 단락 전체 완성 후 표시)
- API 연결이 thinking 중 끊겨도 자동 재시도

---

## W26 (6월 22~26일) · v2.1.185~193

### 🔑 CLI에서 MCP 서버 인증 (v2.1.186)

이제 터미널에서 바로 MCP(모델 컨텍스트 프로토콜) 서버에 로그인·로그아웃할 수 있어요!

```bash
# 브라우저 OAuth 흐름을 터미널에서 바로 실행
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

> 🗝️ **비유**: 이전엔 앱을 열고 메뉴 > 설정 > 계정을 찾아야 했다면, 이제는 자동차 키처럼 명령어 하나로 잠금·해제!

### ❗ 셸 명령어 실행 후 Claude 자동 응답 (v2.1.186)

`!` 접두사로 명령어를 실행하면 이제 Claude가 결과를 **자동으로 보고 설명**해줘요!

```text
> ! npm test
```

→ 테스트 결과가 나오면 Claude가 바로 "3번 테스트가 실패한 이유는..." 이라고 설명해줘요.

<div class="note-circle">
○ 이전 동작(출력만 컨텍스트에 추가, 응답 없음)으로 돌아가려면: <code>"respondToBashCommands": false</code><br />
○ Bash 모드 <code>!</code> 명령에 파일 경로 자동완성도 추가됨
</div>

### ⏪ /rewind — /clear 이전 대화로 되돌리기

```text
> /rewind
```

실수로 `/clear`를 눌러 대화를 지워도 이제 되돌릴 수 있어요!

**기타 W26 개선사항:**
- 새 `sandbox.credentials` 설정 — 샌드박스 명령이 자격증명 파일·시크릿 환경변수 접근 차단 가능
- 조직 설정 모델 제한이 모델 피커, `--model`, `/model`에도 적용됨
- `/install-github-app` — GitHub 앱만 설치하고 Actions 워크플로우·시크릿 단계 생략 가능
- 스트리밍 CPU 사용량 약 37% 감소
- `/review <pr>` 이제 `/code-review medium`과 같은 리뷰 엔진 사용

---

## W27 (6월 29일~7월 3일) · v2.1.195~201

### 🆕 Claude Sonnet 5 — 새 기본 모델 등극!

2026년 6월 30일, **Sonnet 5**가 출시되어 Pro·Team Standard·Enterprise의 기본 모델이 됐어요.

```text
> /model claude-sonnet-5
```

| 항목 | 내용 |
|------|------|
| API 가격 | $2/$10 per MTok (2026년 8월 31일까지 프로모션) |
| 컨텍스트 창 | **100만 토큰 (1M)** |
| 사고 기능 | 기본 활성화 |
| 최소 버전 | v2.1.197 이상 |

> 📚 **비유**: 학교 교과서가 개정판으로 바뀐 것처럼, 기본 모델이 한 단계 업그레이드됐어요 — 더 저렴하면서 더 강력하게!

### 🐧 Linux 데스크톱 앱 베타 출시!

Ubuntu 22.04+, Debian 12+ 사용자도 이제 Claude Code 데스크톱 앱을 쓸 수 있어요!

```bash
# apt 저장소 등록 후 설치
sudo apt update && sudo apt install claude-desktop
```

Chat, Cowork, Claude Code 탭 모두 사용 가능. Computer Use·음성 입력은 아직 미지원이에요.

### 🌐 Chrome 확장 정식 출시 (GA)

Claude in Chrome이 **정식 버전**으로 출시됐어요 (Anthropic 직접 요금제 가입자 전체 대상). Claude가 브라우저를 직접 조작 — 탭 열기, 클릭, 폼 작성, 콘솔 로그 읽기까지 가능해요.

### 🎵 /radio — Claude FM 로파이 라디오!

```text
> /radio
```

코딩하면서 들을 lo-fi(로파이) 라디오 스트림이 생겼어요! 브라우저에서 자동으로 열려요.

> 🎶 Amazon Bedrock, Google Cloud Agent Platform, Microsoft Foundry 환경에서는 지원 안 돼요.

### 🤖 서브에이전트 백그라운드 실행 기본화 (v2.1.198)

이제 Claude가 서브에이전트를 실행하고 **기다리지 않고** 다음 작업을 계속해요. 권한 요청은 메인 세션에 그대로 표시돼요.

**기타 W27 개선사항:**
- Artifacts → Pro·Max 요금제로 GA 확대
- 조직 기본 모델을 관리자 콘솔에서 설정 가능 (모델 피커에 `"Org default"` 표시)
- 기본 권한 모드 이름 `"default"` → `"manual"`로 변경 (기능 동일, `--permission-mode manual` 동시 지원)
- 새 `/dataviz` 스킬 추가 — 차트·대시보드 디자인 가이드 + 색상 팔레트 유효성 검사기
- 백그라운드 에이전트가 작업 완료 후 자동으로 커밋·푸시·PR 생성
- 스트리밍 유휴 감시자(watchdog) 기본 활성화 — 5분간 응답 없으면 자동 재시도

---

## W28 (7월 6~10일) · v2.1.202~206

### 🌍 데스크톱 내장 브라우저

Claude Code 데스크톱 앱에 **내장 브라우저**가 생겼어요! 이제 외부 사이트 문서, 디자인 파일, 어떤 웹페이지든 Claude가 직접 열고 읽고 클릭할 수 있어요.

> 🌐 **비유**: 기존엔 Claude가 "그 문서 복사해서 붙여넣어줘"라고 해야 했다면, 이제는 창문을 직접 열고 확인해요.

브라우저는 샌드박스 처리되고, 외부 사이트 동작에 대해 안전성 검사가 적용돼요.

### 🩺 /doctor 강화 — 진단에서 수정까지! (v2.1.205)

```text
> /doctor
> /checkup   ← 같은 명령어, 별칭
```

기존 `/doctor`는 문제 보고만 했는데, 이제 **직접 수정**까지 제안하고 실행해줘요!

| 진단 항목 | 동작 |
|-----------|------|
| 설치 상태 | 진단 + 수정 제안 |
| 사용 안 하는 스킬·MCP·플러그인 | 발견 + 제거 제안 |
| 중복 CLAUDE.md 파일 | 통합 제안 |
| CLAUDE.md 내 불필요 내용 | 정리 제안 |
| 느린 훅(hooks) | 발견 + 알림 |

<div class="note-circle">
○ 변경 전 반드시 확인 요청 — 동의 없이 자동 수정 안 해요<br />
○ <code>/checkup</code>도 완전히 같은 명령어예요
</div>

**기타 W28 개선사항:**
- Auto mode: 세션 트랜스크립트 파일 변조 차단 + `rm -rf` 실행 전 확인 강화
- `/cd` 명령어에 디렉토리 경로 자동완성 추가
- `/commit-push-pr` — 기존에 설정된 push remote도 자동 허용
- Agent view: 에이전트 상태가 색상+AI 작성 헤드라인으로 표시

---

## 지금 바로 업데이트하세요!

```bash
# 최신 버전으로 업데이트
claude update

# 현재 버전 확인
claude --version
```

| 기능 | 최소 버전 |
|------|-----------|
| Sonnet 5 기본 모델 | v2.1.197 |
| /doctor 강화 | v2.1.205 |
| Linux 데스크톱 | 별도 apt 설치 |
| 권한 파라미터 매칭 | v2.1.178 |
| MCP CLI 로그인 | v2.1.186 |
