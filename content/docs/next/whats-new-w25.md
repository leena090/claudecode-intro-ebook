---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts로 결과물을 URL로 공유하고, Tool(param:value)로 세밀한 권한 설정, /config로 설정 즉시 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "권한", "config명령어", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-07-14"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션 결과를 URL로 공유 🔗

Claude Code가 만든 결과물(분석, PR 설명, 대시보드 등)을 **링크 하나**로 팀원에게 보낼 수 있게 됐어요. 지금은 Team/Enterprise 플랜 베타.

> 🍱 **비유**: 작업 결과를 터미널 화면에서 읽는 게 아니라, 예쁜 웹 페이지로 만들어서 링크를 보내는 거예요. 카카오톡으로 "이 링크 봐" 하면 누구나 열어볼 수 있어요.

**어떻게 사용하나요?**

```
> Make an artifact that walks through this PR with the diff annotated inline.
```

- Claude가 페이지를 만들고 **공개 여부 확인**을 물어봐요
- 승인하면 `claude.ai` 주소의 URL이 생성돼요
- 링크를 공유하면 → 팀원이 브라우저에서 바로 열람 가능

| 아티팩트 예시 | 설명 |
|---|---|
| PR 워크스루 | 변경 내역을 인라인 주석과 함께 시각화 |
| 세션 데이터 대시보드 | 분석 결과를 차트·표로 정리 |
| 인터랙티브 리포트 | 클릭해서 탐색 가능한 라이브 문서 |

<div class="note-circle">
○ 현재 Team/Enterprise 베타 → 이후 Pro/Max로 확대 예정<br />
○ 아티팩트는 세션이 계속 작업하면 URL 내용도 자동 갱신돼요
</div>

---

### 2️⃣ 권한 규칙에 파라미터 매칭 추가 🎯

**`Tool(param:value)`** 문법을 사용해서 특정 파라미터를 가진 도구 호출만 허용/차단할 수 있어요.

> 🍱 **비유**: 이전엔 "Agent 도구 전체 차단"만 가능했어요. 이제는 "Opus 모델을 쓰는 Agent만 차단"처럼 더 세밀하게 설정할 수 있어요. 출퇴근 게이트에서 회사증을 보는 게 아니라, 직급까지 확인하는 것처럼요.

**사용 예시:**

```json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

| 규칙 예시 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델을 요청하는 서브에이전트 차단 |
| `Agent(isolation:*)` | isolation 값이 있는 모든 서브에이전트 차단 |
| `Bash(command:rm*)` | `rm`으로 시작하는 명령어 차단 |

- `*`은 와일드카드 — 모든 값을 의미해요
- 허용(`allow`)·차단(`deny`)·확인(`ask`) 규칙 모두에서 사용 가능

---

### 3️⃣ `/config key=value` — 대화창에서 설정 즉시 변경 ⚙️

설정을 바꾸려면 `settings.json`을 직접 수정해야 했는데, 이제 **대화창에서 바로** 명령어 한 줄로 변경할 수 있어요.

```
> /config thinking=false
> /config model=claude-sonnet-5
> /config autoMode=false
```

> 🍱 **비유**: TV 리모컨으로 채널을 바꾸는 것처럼, 설정 파일을 열지 않아도 채팅창에서 설정을 바꿀 수 있어요.

**지원 범위:**
- `-p` 플래그(비대화형 모드)에서도 작동
- Remote Control에서도 적용 가능
- `/config` 인터페이스: Enter/Space로 선택, Esc로 저장·닫기

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| Auto mode 안전 강화 | `git reset --hard`, `git clean -fd`, `git stash drop`, `terraform destroy` — 명시적 요청 없이 실행 불가 |
| `attribution.sessionUrl` | `false`로 설정 시 커밋·PR에 claude.ai 세션 링크 미포함 |
| `sandbox.allowAppleEvents` | macOS에서 샌드박스 명령어가 Apple Events 전송 허용 |
| `CLAUDE_CLIENT_PRESENCE_FILE` | 이 파일이 있으면 모바일 푸시 알림 자제 (자리에 있는 신호) |
| 긴 문단 스트리밍 개선 | 첫 줄 구분 기다리지 않고 줄 단위로 스트리밍 |
| 생각 중 연결 끊김 처리 | "Connection closed while thinking" 오류 대신 자동 재시도 |
| Agent Teams 실험 기능 | `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 설정 시 Agent 도구에서 `name` 파라미터로 팀원 직접 생성 |
| 중첩 스킬 로드 | `.claude/skills` 하위 폴더의 스킬도 로드, 이름 충돌 시 `<dir>:<name>` 형식으로 구분 |
| 프롬프트 캐싱 버그 수정 | 커스텀 `ANTHROPIC_BASE_URL` 및 Microsoft Foundry에서 미적용 문제 수정 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ Artifacts는 아직 베타 — 안정화 후 요금제 확대 예정
</div>
