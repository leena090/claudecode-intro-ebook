---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts 공개 베타(Team·Enterprise), 권한 규칙에 입력 파라미터 매칭, /config key=value로 프롬프트에서 바로 설정 변경 — v2.1.178→v2.1.183"
tags: ["업데이트", "2026", "week25", "artifacts", "permissions", "config", "auto-mode", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-07"
---

<div class="note-star">

★ **공식 발표 기준** — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. `[공]`  
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>  
★ **대상 버전** — v2.1.178 → v2.1.183

</div>

## 이번 주 핵심 변경 (3개)

> "아티팩트로 Claude 결과물을 링크로 공유하고, 권한 규칙을 더 세밀하게 제어하며, 설정을 대화창에서 바로 바꿉니다."

---

## 🖼️ Artifacts — Claude Code 결과물을 링크로 공유 (Team·Enterprise 베타)

**Artifacts**는 Claude Code가 세션 중에 만든 대시보드·보고서·차트·문서를 **비공개 웹페이지로 발행**해서 팀원과 공유할 수 있는 기능이에요.

> 🍱 **비유**: 말로 설명하는 대신 "이 링크 클릭해봐" 하고 보내는 것과 같아요. 결과물이 살아있는 페이지로 만들어져요.

### 어떻게 쓰나요?

```
> 이 PR의 변경 내역을 설명하는 아티팩트 페이지 만들어줘
```

Claude가 페이지를 생성한 뒤 **발행 승인 프롬프트**가 뜨고, 승인하면 `claude.ai`의 비공개 URL이 생성돼요.

<div class="note-circle">

○ **현재 Team·Enterprise 플랜 베타** 제공 중이에요  
○ 자세한 내용은 → **[아티팩트 공유 가이드](/docs/next/claude-code-artifacts)**

</div>

---

## 🔒 권한 규칙에 입력 파라미터 매칭 추가 (v2.1.178)

### 기존 권한 규칙의 한계

기존에는 "어떤 도구"를 허용/차단하는지만 규칙으로 설정할 수 있었어요. 예를 들어 `Agent` 도구 전체를 차단하거나 허용하는 식이었죠.

이번 업데이트로 **도구의 입력 파라미터 값**까지 조건으로 쓸 수 있어요.

> 🍱 **비유**: "택배 출입을 허용한다"가 아니라 "CJ대한통운 택배만 허용한다"처럼 **더 세밀한 문지기 역할**을 할 수 있어요.

### 문법: `Tool(param:value)`

| 규칙 예시 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델을 요청하는 서브에이전트 차단 |
| `Agent(isolation:*)` | isolation 값이 있는 모든 서브에이전트 차단 |
| `Bash(command:rm*)` | rm으로 시작하는 Bash 명령 차단 |

### 설정 예시

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"],
    "ask": ["Agent(isolation:*)"]
  }
}
```

<div class="note-circle">

○ `*`는 와일드카드 — 값이 존재하는 모든 경우에 매칭돼요  
○ 기존 규칙 문법(`Bash`, `Read` 등)과 완전히 호환돼요

</div>

---

## ⚙️ `/config key=value` — 대화창에서 설정 바로 변경 (v2.1.181)

### 기존 방식

```
/config
```

`/config`를 치면 인터랙티브 메뉴가 열렸어요. 화살표로 항목을 선택하고 Enter를 누르는 방식이었죠.

### 새 방식: 바로 값 지정

```
> /config thinking=false
> /config effort=max
> /config model=opus
```

대화창에서 `키=값` 형식으로 바로 입력하면 설정이 즉시 변경돼요.

> 🍱 **비유**: TV 리모컨에서 채널을 12번 누르는 대신 숫자 버튼으로 바로 "12"를 치는 것과 같아요 — 훨씬 빠르죠.

### 어디서도 동작해요

| 사용 방법 | 예시 |
|---|---|
| 대화창 (인터랙티브) | `/config thinking=false` |
| `-p` 플래그 (비대화형) | `claude -p "/config model=opus && 리팩토링해줘"` |
| Remote Control | 모바일에서도 동일하게 사용 가능 |

---

## 📦 이번 주 기타 개선

| 기능 | 내용 |
|---|---|
| **Auto 모드 파괴적 명령 차단** | `git reset --hard`, `git clean -fd`, `git stash drop`, `terraform destroy` — 직접 요청하지 않았다면 Auto 모드에서 자동으로 차단 |
| **`attribution.sessionUrl` 설정** | `false`로 설정하면 커밋·PR에 claude.ai 세션 링크가 포함되지 않음 (웹·Remote Control 세션) |
| **긴 문단 줄 단위 스트리밍** | 이전에는 긴 문단을 통째로 기다렸지만 이제 줄 단위로 흘러나와서 훨씬 자연스러워요 |
| **thinking 중 연결 끊김 자동 재시도** | API 연결이 도중에 끊겨도 "Connection closed while thinking" 대신 자동 재연결 |
| **`sandbox.allowAppleEvents`** | macOS에서 샌드박스 명령이 Apple Events를 보낼 수 있도록 허용하는 선택적 설정 |
| **`CLAUDE_CLIENT_PRESENCE_FILE`** | 자리에 있을 때 모바일 푸시 알림 억제 — 지정한 파일이 존재하는 동안 알림 안 감 |
| **네트워크 드라이브 파일 쓰기 버그 수정** | Write·Edit 도구가 클라우드 동기화 폴더나 네트워크 드라이브에서 빈 파일을 만들던 버그 수정 |
| **프롬프트 캐시 버그 수정** | 커스텀 `ANTHROPIC_BASE_URL` 및 Microsoft Foundry에서 캐시가 작동하지 않던 문제 수정 |

---

## 📌 업데이트 방법

```bash
# npm으로 설치한 경우
npm update -g @anthropic-ai/claude-code

# 인스톨 스크립트 (macOS/Linux)
curl -fsSL https://claude.ai/install.sh | bash
```

전체 변경 내역 → [공식 Changelog v2.1.178–v2.1.183](https://code.claude.com/docs/en/changelog#2-1-178)
