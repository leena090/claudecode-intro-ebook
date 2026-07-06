---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "세션 결과를 링크로 공유하는 Artifacts, 도구 파라미터 기반 권한 규칙, /config로 즉시 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "permissions", "config", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-07-06"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts(아티팩트) — 세션 결과를 링크 하나로 공유해요 🔗

Claude Code가 작업한 결과물을 **웹 페이지로 즉시 발행**할 수 있어요. 주소를 받아서 팀원이나 고객에게 공유하면 돼요.

> 🍱 **비유**: 마치 구글 문서(Google Docs)처럼, Claude가 만든 보고서나 PR 설명서를 "공유 링크"로 뚝딱 내보내는 거예요. 터미널 텍스트를 복사해서 붙여넣지 않아도 돼요.

**사용 방법:**

```text
> 이번 PR 변경사항을 diff로 주석 달아서 페이지로 만들어줘
```

Claude가 페이지를 만들면 "발행할까요?" 라는 확인이 나와요. 승인하면 `claude.ai`의 비공개 URL로 발행돼요.

| 항목 | 내용 |
|---|---|
| 어디에 발행? | claude.ai의 비공개 URL |
| 업데이트 방식 | 세션이 계속 작업하면 페이지도 자동 갱신 |
| 이용 가능 플랜 | Team, Enterprise (베타) |
| 활용 예시 | PR 설명, 데이터 대시보드, 온보딩 가이드 |

<div class="note-circle">
○ Artifacts는 Team·Enterprise 플랜 베타로 제공돼요<br />
○ 세션이 더 작업하면 발행된 페이지가 즉시 업데이트돼요
</div>

---

### 2️⃣ 도구 파라미터 기반 권한 규칙 — "이 모델만 차단"이 가능해요 🔒

기존에는 특정 도구 전체를 허용/차단했다면, 이제 도구의 **파라미터 값 기준**으로 세밀하게 제어할 수 있어요.

> 🍱 **비유**: "회사 차량 전체 사용 금지"가 아니라 "300만 원 이상 차량만 사용 금지"처럼, 더 구체적인 조건으로 제어하는 거예요.

**새로운 문법: `Tool(파라미터:값)`**

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

이렇게 하면 Opus 모델을 요청하는 서브에이전트만 차단돼요.

| 예시 규칙 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델 서브에이전트 차단 |
| `Agent(isolation:*)` | isolation 값이 뭐든 서브에이전트 차단 |
| `Bash(command:rm*)` | rm으로 시작하는 명령어 차단 (추정 — 와일드카드 지원 확인 중) |

**`*` 와일드카드** — 값 자리에 `*`를 쓰면 해당 파라미터가 존재하는 모든 경우를 잡아요.

<div class="note-circle">
○ 기존 도구 이름 기반 규칙은 그대로 작동해요<br />
○ `ask` 목록에도 같은 문법을 사용할 수 있어요
</div>

---

### 3️⃣ `/config 설정명=값` — 프롬프트에서 바로 설정 변경 ⚙️

설정을 바꾸려면 설정 화면을 열어야 했죠. 이제 `/config` 명령어 하나로 프롬프트에서 바로 변경할 수 있어요.

> 🍱 **비유**: TV 리모컨으로 채널을 바꾸는 것처럼, 이제 대화 중에도 Claude Code 설정을 즉시 바꿀 수 있어요.

```text
# 확장 사고 끄기
> /config thinking=false

# 모델 변경
> /config model=claude-opus-4-8

# verbose 모드 켜기
> /config verbose=true
```

**어디서나 사용 가능:**

| 사용 방식 | 예시 |
|---|---|
| 대화 중 | `/config thinking=false` |
| 비대화 모드(`-p`) | `claude -p "/config thinking=false"` |
| 리모트 컨트롤 | 모바일 앱에서도 같은 문법 사용 |

<div class="note-circle">
○ 설정 화면(/config 인터페이스)에서 Enter·Space 모두 선택 가능, Esc는 저장 후 닫기로 변경됐어요<br />
○ 어떤 설정 이름을 쓸 수 있는지 궁금하면 <code>/config</code> 를 단독으로 입력해 화면을 열어보세요
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| Auto mode 안전 강화 | `git reset --hard`, `git clean -fd`, `terraform destroy` 등 파괴적 명령어 자동 차단 |
| 세션 URL 숨기기 | `attribution.sessionUrl: false` 설정으로 커밋/PR에서 claude.ai 링크 제거 |
| 푸시 알림 일시 정지 | `CLAUDE_CLIENT_PRESENCE_FILE` 환경변수로 자리에 있을 때 모바일 알림 억제 |
| 긴 응답 스트리밍 개선 | 긴 문단이 첫 줄바꿈을 기다리지 않고 줄 단위로 스트리밍 |
| API 연결 끊김 자동 재시도 | 사고(thinking) 중 연결 끊김 시 자동 재연결 |
| 네트워크 드라이브 파일 저장 버그 수정 | 클라우드 동기화 폴더에서 파일이 빈 파일로 저장되던 문제 해결 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ Artifacts 기능은 "아티팩츠(아티팩트)"라고 불러요 — claude.ai에서도 같은 단어를 써요
</div>
