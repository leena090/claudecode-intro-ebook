---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts로 세션 결과를 웹페이지로 공유, 권한 규칙 파라미터 매칭, /config 직접 설정"
tags: ["업데이트", "2026", "week25", "artifacts", "permissions", "config", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-10"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a><br />
📦 릴리즈: v2.1.178 → v2.1.183 / 주요 기능 3가지
</div>

## 이번 주 핵심 변경 (3가지)

---

### 1️⃣ Artifacts(아티팩트) — 세션 결과를 실시간 웹페이지로 `[공]`

Claude Code 세션에서 만든 결과물을 **클릭 한 번으로 private URL 웹페이지**로 게시할 수 있게 됐어요.

> 🍱 **비유**: 요리 레시피를 종이에만 적어뒀는데, 이젠 버튼 하나로 예쁜 웹사이트에 올려서 가족한테 링크를 보낼 수 있는 것과 같아요. 요리(코드 작업)는 그대로이고 결과물만 멋지게 포장되는 거예요.

**어떤 때 쓰면 좋아요?**

| 상황 | 예시 |
|------|------|
| PR 리뷰 | 변경 내용을 코드 diff 주석이 달린 웹페이지로 정리 |
| 데이터 대시보드 | 세션 데이터로 만든 차트·통계를 팀원과 공유 |
| 작업 결과 보고 | 터미널 텍스트보다 훨씬 보기 좋은 리포트 |

**어떻게 요청하나요?**

```
> 이 PR의 변경 사항을 diff 주석이 달린 Artifact 페이지로 만들어줘
```

```
> 오늘 작업한 테스트 결과를 대시보드 아티팩트로 만들어줘
```

Claude가 페이지를 만들면 "이 주소로 게시할까요?" 확인 메시지가 나와요. 승인하면 `claude.ai`의 private URL로 올라가요.

<div class="note-circle">
○ 현재 Team·Enterprise 플랜 베타 기능이에요<br />
○ Private URL — 링크를 아는 사람만 볼 수 있어요<br />
○ 세션이 계속 작업하면 페이지가 실시간으로 업데이트돼요
</div>

---

### 2️⃣ 권한 규칙에서 파라미터 매칭 (v2.1.178) `[공]`

`settings.json`의 권한 규칙에서 도구 이름뿐만 아니라 **입력값(파라미터)까지 지정**할 수 있게 됐어요.

> 🍱 **비유**: 기존엔 "에이전트는 모두 금지"처럼 문을 통째로 잠갔다면, 이제 "에이전트 중에서도 Opus 모델 쓰는 것만 금지"처럼 **조건을 붙여서 잠글 수 있어요**.

**형식**: `Tool(파라미터:값)`

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"],
    "ask": ["Agent(isolation:*)"]
  }
}
```

| 규칙 예시 | 의미 |
|-----------|------|
| `Agent(model:opus)` | Opus 모델 사용하는 서브에이전트 차단 |
| `Agent(isolation:*)` | isolation 값이 있는 모든 에이전트 물어보기 |
| `Bash(command:rm*)` | rm으로 시작하는 명령어 차단 |

<div class="note-circle">
○ <code>*</code>는 와일드카드(어떤 값이든 매칭)로 사용 가능해요<br />
○ 기업 보안 정책을 세밀하게 적용할 때 유용해요
</div>

---

### 3️⃣ `/config key=value` — 프롬프트에서 설정 바로 변경 (v2.1.181) `[공]`

설정 화면을 열지 않고 **채팅창에서 바로 설정**을 바꿀 수 있어요.

**형식**: `/config 설정이름=값`

```
> /config thinking=false

> /config output.maxLines=100
```

> 🍱 **비유**: TV 리모컨으로 볼륨을 바꾸듯, 지금 대화하면서 Claude 설정을 바로 조정하는 거예요. 설정 메뉴를 찾아 들어갈 필요가 없어요.

**어디서 쓸 수 있어요?**

- 💬 대화 중 (`/config thinking=false`)
- 🔧 비대화형 모드: `claude -p "작업 내용" --config thinking=false`
- 📱 Remote Control에서도 사용 가능

---

## 이번 주 세부 개선 사항

| 항목 | 내용 |
|------|------|
| Auto mode 안전성 | `git reset --hard`, `git clean -fd`, `terraform destroy` 등 위험 명령어를 명시적 요청 없이 실행 차단 |
| 커밋 링크 제어 | `attribution.sessionUrl: false`로 커밋·PR에 claude.ai 링크 삽입 끄기 |
| /config UI 개선 | Enter·Space 모두 선택 변경, Esc는 저장 후 닫기 |
| iOS 알림 억제 | `CLAUDE_CLIENT_PRESENCE_FILE` 환경변수로 컴퓨터 앞에 있을 때 모바일 알림 끄기 |
| 스트리밍 개선 | 긴 단락이 줄바꿈 기다리지 않고 한 줄씩 스트리밍됨 |
| 자동 재시도 | API 연결이 thinking 중 끊기면 자동 재시도 (이전: 에러 표시) |
| 버그 수정 | 네트워크 드라이브·클라우드 폴더에서 Write/Edit가 빈 파일 만드는 문제 해결 |

<div class="note-circle">
○ <strong>공식 발표 기준</strong> — v2.1.178~v2.1.183 릴리즈 내역<br />
○ 전체 변경 로그: <a href="https://code.claude.com/docs/en/changelog#2-1-178" target="_blank">code.claude.com/docs/en/changelog#2-1-178</a>
</div>
