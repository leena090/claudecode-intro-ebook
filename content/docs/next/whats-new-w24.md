---
title: "[공] 주간 업데이트: 2026년 6월 8일 ~ 12일 (Week 24)"
description: "/cd로 세션 이동, 서브에이전트가 서브에이전트를 낳는 중첩 구조(최대 5단계), --safe-mode로 설정 문제 진단"
tags: ["업데이트", "2026", "week24", "cd-command", "subagents", "safe-mode", "fallback-model", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-18"
---

<div class="note-star">
★ <strong>공식 출처</strong> — Claude Code Week 24 (2026-06-08~12), v2.1.166 → v2.1.176. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w24</a>
</div>

## 이번 주 한눈에 보기

| 번호 | 기능 | 한 줄 요약 |
|------|------|-----------|
| 1 | **`/cd`** | 세션 유지한 채로 다른 폴더로 이동 |
| 2 | **중첩 서브에이전트** | 서브에이전트가 다시 서브에이전트를 낳아요 (최대 5단계) |
| 3 | **`--safe-mode`** | 설정 다 끄고 맨 몸으로 실행해서 문제 원인 찾기 |

---

## 1. `/cd` — 세션 재시작 없이 폴더 이동 📂

보통 다른 프로젝트 폴더로 이동하려면 Claude Code를 완전히 종료하고 다시 켜야 했어요. 이제 `/cd` 명령어 하나로 **세션을 유지한 채**로 다른 폴더로 넘어갈 수 있어요.

> 🍱 **비유**: TV 채널을 바꿀 때 TV를 끄고 다시 키지 않아도 되는 것처럼, Claude Code도 재시작 없이 "다른 프로젝트 보여줘" 하면 바로 전환돼요.

### 쓰는 법

```bash
# 이웃 프로젝트 폴더로 이동
> /cd ../other-project

# 절대 경로도 됩니다
> /cd /home/user/work/new-app
```

### 좋은 점

- **프롬프트 캐시 유지** — 기존 대화 맥락이 사라지지 않아요
- **새 폴더의 CLAUDE.md 자동 추가** — 이동한 폴더의 CLAUDE.md가 대화에 덧붙여져요
- **자동 신뢰 물음** — 처음 가는 폴더면 "이 폴더를 신뢰할까요?" 확인해요
- **`--resume`·`--continue` 지원** — 이동 후 세션도 나중에 이어갈 수 있어요

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/commands#all-commands" target="_blank">Commands reference</a>
</div>

---

## 2. 서브에이전트가 서브에이전트를 낳는다 🌳

기존에 Claude는 복잡한 작업을 할 때 **서브에이전트(하위 도우미)** 를 만들어 일을 나눴어요. 그런데 그 서브에이전트는 더 이상 스스로 도우미를 만들 수 없었죠.

이번 업데이트부터는 **서브에이전트도 자기 서브에이전트를 만들 수 있어요**. 최대 **5단계**까지 중첩 가능해요.

```
메인 Claude
  └─ 서브에이전트 A (1단계)
       └─ 서브에이전트 A-1 (2단계)
            └─ 서브에이전트 A-1-a (3단계)  ← 이제 가능!
  └─ 서브에이전트 B (1단계)
       └─ 서브에이전트 B-1 (2단계)
```

> 🍱 **비유**: 팀장(Claude)이 팀원(서브에이전트)에게 일을 나눴는데, 그 팀원이 필요하면 알바생(서브-서브에이전트)을 다시 부를 수 있는 거예요. 회사처럼 조직도 구조가 생긴 거죠.

### 어떻게 확인하나요?

```bash
# 에이전트 뷰에서 전체 트리 구조 확인
> /agents
```

프롬프트 아래 패널에 **트리 구조**가 표시되고, 각 행에 **자손 개수**와 **메인까지의 경로**가 보여요.

<div class="note-star">
★ 5단계 이상 중첩은 막혀 있어요. 무한 루프 방지를 위해서예요.
</div>

---

## 3. `--safe-mode` — "설정 다 꺼보자" 진단 모드 🩺

Claude Code가 갑자기 이상하게 작동하거나 오류가 날 때, **원인이 어디인지** 찾기 어려울 때 있잖아요. CLAUDE.md 문제인지, 플러그인 문제인지, MCP 서버 문제인지.

`--safe-mode`(세이프 모드)는 **모든 커스터마이징을 끄고** 기본 상태로만 실행하는 진단 모드예요.

> 🍱 **비유**: 자동차에 문제가 생겼을 때, 블랙박스·하이패스·네비 등 추가 장치를 다 뽑고 기본 차 기능만 테스트해보는 거예요. 그래도 문제가 있으면 차 자체 결함, 없어지면 추가 장치 문제인 거죠.

### 쓰는 법

```bash
# 방법 1: 실행 옵션
claude --safe-mode

# 방법 2: 환경 변수
export CLAUDE_CODE_SAFE_MODE=1
claude
```

### safe-mode에서 꺼지는 것들

| 꺼지는 것 | 계속 작동하는 것 |
|-----------|----------------|
| CLAUDE.md 파일 | 인증(로그인) |
| 플러그인 | 모델 선택 |
| Skills | 기본 도구 |
| Hooks | 권한 설정 |
| MCP 서버 | |
| 커스텀 명령어·에이전트 | |

### 활용법

1. `claude --safe-mode`로 실행
2. 문제가 사라지면 → 위 목록 중 하나가 원인
3. 하나씩 다시 켜서 원인 찾기

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/debug-your-config#test-against-a-clean-configuration" target="_blank">Test against a clean configuration</a><br />
○ 연관 가이드: <a href="/docs/config/debug-your-config">설정 디버깅 가이드</a>
</div>

---

## 기타 자잘한 개선들

<details>
<summary>더 보기</summary>

- **`fallbackModel`**: 기본 모델이 과부하·오류일 때 대신 쓸 모델을 최대 3개 지정할 수 있어요 (`--fallback-model` 옵션도 추가)
- **세션 제목 자동 언어화**: 대화를 한국어로 하면 세션 제목도 한국어로 생성돼요 (`language` 설정으로 고정도 가능)
- **플러그인 검색 기능**: `/plugin` 메뉴에서 마켓플레이스 플러그인 검색창이 생겼어요
- **`disableBundledSkills`**: 기본 내장 Skills·Workflows·명령어를 숨길 수 있는 설정
- **거부 규칙 glob 패턴**: deny 규칙에서 `"*"` 패턴으로 모든 도구를 한 번에 거부 가능
- **Amazon Bedrock 지역 자동 감지**: `AWS_REGION` 없어도 `~/.aws` 설정에서 자동으로 읽어요
- **`claude update` 개선**: 다운로드 전에 목표 버전을 미리 알려줘요
- **`enforceAvailableModels`**: `availableModels` 허용 목록이 기본 모델도 제한하도록 강화

</details>

---

<div class="note-circle">
○ 공식 전체 변경 로그: <a href="https://code.claude.com/docs/en/changelog#2-1-166" target="_blank">v2.1.166–v2.1.176 changelog</a><br />
○ 이전 주간 업데이트: <a href="/docs/next/whats-new-w23">Week 23 업데이트</a> · <a href="/docs/next/whats-new-w22">Week 22 업데이트</a>
</div>
