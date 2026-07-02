---
title: "[공] 주간 업데이트: 2026년 6월 15~19일 (Week 25)"
description: "Artifacts로 라이브 페이지 발행, Tool(param:value) 권한 규칙, /config key=value 즉시 설정"
tags: ["업데이트", "2026", "week25", "artifacts", "artifacts아티팩트", "config설정", "권한파라미터", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-07-02"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
버전: <strong>v2.1.178 → v2.1.183</strong> · 주요 기능 3개<br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션에서 라이브 웹 페이지 발행 🌐

Claude Code 세션 안에서 만든 결과물을 **비공개 URL 웹 페이지로 바로 발행**할 수 있어요. 세션이 계속 작업하는 동안 페이지도 자동으로 업데이트돼요.

> 🍱 **비유**: 친구한테 "내가 만든 보고서" 링크를 하나 보내면, 친구가 링크를 열 때마다 내가 방금 업데이트한 최신 내용이 보이는 것과 같아요. Claude가 계속 다듬는 동안 페이지도 실시간으로 바뀌어요.

#### 어떨 때 유용한가요?

- PR 변경 내역을 diff 주석으로 보여주는 리뷰 페이지
- 세션 데이터로 만든 대시보드
- 터미널 텍스트로는 표현하기 어려운 시각적 결과물

#### 사용법

```text
> Make an artifact that walks through this PR with the diff annotated inline.
```

Claude가 아티팩트(Artifact) 발행 승인을 요청하면 허락하면 돼요. 이후 `claude.ai`의 비공개 URL로 발행돼요.

<div class="note-circle">
○ 현재 <strong>Team 및 Enterprise 플랜에서 베타</strong> 운영 중이에요<br />
○ 링크를 공유할 수 있지만, 기본적으로 비공개 URL이에요<br />
○ 이전에 이미 <code>claude-code-artifacts.md</code>에서 소개됐어요 — 이번에 공식 w25 채널에도 수록됐어요
</div>

---

### 2️⃣ 권한 규칙에서 파라미터 값 매칭 (v2.1.178) 🔒

`deny` 및 `ask` 권한 규칙에서 이제 **도구의 입력 파라미터까지 조건으로 지정**할 수 있어요. `Tool(param:value)` 형식이에요.

> 🍱 **비유**: 문지기가 "모든 손님"을 막는 게 아니라, "고급 VIP 룸 열쇠를 가진 손님만" 막는 것처럼, 이제 도구 이름뿐 아니라 어떤 값으로 부르는지까지 규칙으로 설정할 수 있어요.

#### 예시 — Opus 모델로 서브에이전트 실행을 막기

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

위 설정을 넣으면 Claude Code가 Opus 모델을 사용하는 서브에이전트를 생성하려 할 때 자동으로 차단돼요.

#### 와일드카드 `*` 사용

```json
{
  "permissions": {
    "ask": ["Agent(isolation:*)"]
  }
}
```

`*`을 사용하면 해당 파라미터에 어떤 값이든 매칭돼요. 위 예시는 `isolation` 파라미터가 있는 모든 Agent 호출 시 확인을 요청해요.

<div class="note-circle">
○ v2.1.178 이상 필요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permissions#match-by-input-parameter">permissions#match-by-input-parameter</a>
</div>

---

### 3️⃣ 프롬프트에서 설정 바로 변경 `/config key=value` (v2.1.181) ⚙️

설정 화면을 열지 않고도, **대화창에서 바로 `/config key=value` 형식으로** 설정을 바꿀 수 있어요.

> 🍱 **비유**: 리모컨 메뉴를 여러 번 누르는 대신, "TV 볼륨 30"이라고 말하면 바로 바뀌는 것처럼, 이제 설정 화면 안 열고 바로 명령으로 설정을 바꿔요.

#### 사용법

```text
# thinking(사고 모드) 끄기
> /config thinking=false

# 특정 설정 값 확인
> /config
```

`-p` 플래그(비대화 모드)에서도 사용 가능해요:

```bash
claude -p "작업 내용" --config thinking=false
```

<div class="note-circle">
○ v2.1.181 이상 필요<br />
○ Remote Control에서도 동작해요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/commands#all-commands">commands#all-commands</a>
</div>

---

## 기타 개선 사항

| 항목 | 내용 |
|------|------|
| 🚨 Auto mode 안전장치 강화 | `git reset --hard`, `git clean -fd`, `git stash drop`, `terraform destroy` 같은 파괴적 명령어를 명시적으로 요청하지 않으면 자동 차단 |
| 🔗 `attribution.sessionUrl` | `false`로 설정하면 커밋·PR에 claude.ai 세션 링크가 자동으로 붙지 않아요 (웹·Remote Control 세션) |
| 🍎 `sandbox.allowAppleEvents` | macOS에서 샌드박스 명령이 Apple Events를 전송할 수 있도록 허용하는 옵션 추가 |
| 📱 `CLAUDE_CLIENT_PRESENCE_FILE` | 이 경로에 파일을 만들어두면 "내가 컴퓨터 앞에 있음"으로 인식 → 모바일 푸시 알림 억제 |
| 📄 스트리밍 개선 | 긴 문단이 첫 줄바꿈 대기 없이 **한 줄씩 실시간으로** 표시돼요 |
| 🔁 API 재연결 자동 재시도 | 생각 중(thinking) 상태에서 연결이 끊기면 "Connection closed while thinking" 에러 대신 **자동 재시도**해요 |
| 🤝 Agent Teams 실험 기능 | `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 설정 시, Agent 도구의 `name` 파라미터로 팀원(teammate)을 직접 호출 가능 |
| 📁 중첩 Skills 디렉토리 | `.claude/skills` 하위 폴더의 skill도 해당 폴더에서 작업할 때 로드. 이름 충돌 시 `<dir>:<name>` 형태로 구분 |
| 🐛 버그 수정 | 커스텀 `ANTHROPIC_BASE_URL` 및 Foundry에서 프롬프트 캐싱 읽기 실패 수정 |
| 💾 네트워크 드라이브 수정 | 네트워크 드라이브·클라우드 동기화 폴더에서 Write/Edit 시 파일이 0바이트 또는 잘린 문제 수정 |

---

## 정리

w25는 **Artifacts(라이브 페이지)**, **세밀한 권한 제어**, **빠른 설정 변경**이 중심이에요.

특히 Auto mode에서 파괴적 git 명령어가 자동 차단되는 건 실수로 로컬 변경사항을 날리는 상황을 막아주는 중요한 안전장치예요. 실수로 `git reset --hard`를 Claude가 실행하는 걸 막아줍니다.
