---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts 정식 출시, 도구 입력값 기반 권한 규칙, /config에서 바로 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "권한", "config", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-13"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션에서 라이브 페이지를 바로 발행해요 🌐

Claude Code 세션에서 작업하면서 **공유 가능한 인터랙티브 페이지**를 바로 만들고 공개 URL로 배포할 수 있게 됐어요.

> 🍱 **비유**: 회의 자료를 만든 다음 PPT 파일을 이메일로 보내던 것에서 → 구글 슬라이드 링크 하나를 공유하는 것으로 바뀌는 것과 같아요. 내용이 바뀌어도 링크는 그대로예요.

**무엇을 만들 수 있나요?**

| 활용 예시 | 설명 |
|---|---|
| PR 워크스루 | 코드 변경 내역을 인라인 주석과 함께 정리한 페이지 |
| 데이터 대시보드 | 세션 데이터로 만든 차트·표 |
| 기술 문서 | 코드베이스 설명 페이지 |

```text
> 이 PR의 변경 사항을 diff 인라인 주석과 함께 정리한 아티팩트 페이지를 만들어줘.
```

Claude가 페이지를 만들고 "공개할까요?" 확인을 받아요. 승인하면 `claude.ai`의 비공개 URL로 배포돼요.

**현재 지원 범위:**
- Team·Enterprise 플랜에서 베타 출시 (주 27부터 Pro·Max도 포함!)
- 세션이 계속 작업하면서 페이지를 **실시간으로 업데이트**해요
- URL은 고정 — 내용이 바뀌어도 링크는 그대로예요

<div class="note-circle">
○ Artifacts에 대한 자세한 내용은 <code>next/claude-code-artifacts.md</code> 참조<br />
○ 아직 베타 단계예요 — 기능이 계속 확장 중이에요
</div>

---

### 2️⃣ 도구 입력값 기반 권한 규칙 — 더 세밀한 제어 🔧

이제 권한 규칙에서 **어떤 도구를** 쓰는지만이 아니라 **어떤 값을 넘기는지**까지 지정할 수 있어요.

`Tool(파라미터:값)` 형식으로 쓰면 돼요.

> 🍱 **비유**: 예전엔 "Claude가 에이전트를 실행하면 물어보기"였다면, 이제는 "Claude가 Opus 모델로 에이전트를 실행할 때만 물어보기"처럼 훨씬 구체적으로 설정할 수 있어요.

**예시:**

```json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

| 규칙 예시 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델 서브에이전트 실행 차단 |
| `Agent(isolation:*)` | isolation 값이 무엇이든 서브에이전트 실행 시 확인 |
| `Bash(command:rm*)` | `rm`으로 시작하는 명령어 차단 |

**`*` 와일드카드**를 쓰면 값이 무엇이든 해당 파라미터가 있으면 매칭돼요.

<div class="note-circle">
○ v2.1.178 이상에서 사용 가능해요<br />
○ <code>.claude/settings.json</code>의 <code>permissions.deny</code> 또는 <code>permissions.ask</code>에 적용 가능
</div>

---

### 3️⃣ `/config 키=값` — 프롬프트에서 바로 설정 변경 ⚙️

설정 메뉴를 열지 않고도 **채팅 프롬프트에서 바로** 설정을 바꿀 수 있어요.

```text
> /config thinking=false
> /config maxTokens=8096
> /config model=claude-sonnet-5
```

> 🍱 **비유**: TV 리모컨에서 메뉴로 들어가 볼륨을 조절하던 것에서 → "볼륨 50"이라고 말하면 바로 조절되는 것과 같아요.

**사용 가능한 곳:**
- 일반 대화 (인터랙티브 모드)
- `-p` 플래그를 쓴 비인터랙티브 모드
- Remote Control (모바일·브라우저)

<div class="note-circle">
○ v2.1.181 이상에서 사용 가능해요<br />
○ 설정 인터페이스(/config UI)에서는 Enter·Space로 변경하고 Esc로 저장·닫기로 개선됨
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| Auto mode 안전 강화 | `git reset --hard`, `git clean -fd`, `terraform destroy` 등 파괴적 명령어 자동 차단 |
| `attribution.sessionUrl` | `false`로 설정하면 커밋·PR에서 claude.ai 세션 링크 제거 |
| `sandbox.allowAppleEvents` | macOS 앱 자동화 작업 시 샌드박스에서 Apple Events 허용 (opt-in) |
| `CLAUDE_CLIENT_PRESENCE_FILE` | 컴퓨터 앞에 있을 때 모바일 알림 끄기 |
| 스트리밍 개선 | 긴 문단이 첫 줄바꿈 기다리지 않고 줄 단위로 실시간 표시 |
| API 연결 재시도 | "thinking" 중 연결 끊김 시 자동 재시도 (오류 메시지 대신) |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ 날짜 범위: 2026년 6월 15일 ~ 19일
</div>
