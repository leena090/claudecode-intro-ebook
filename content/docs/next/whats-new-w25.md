---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts로 작업 결과를 링크 공유, 권한 규칙에서 툴 파라미터 정밀 매칭, /config key=value로 즉석 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "권한설정", "config", "파라미터매칭", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-06-27"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a><br />
버전 범위: v2.1.178 → v2.1.183
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts (아티팩트) — Claude 결과물을 링크로 팀에 공유 🔗

터미널 화면에만 뜨던 Claude Code 결과물을 이제 **실시간 웹페이지**로 만들어 링크로 공유할 수 있어요.

```text
# Claude에게 아티팩트 요청
> 이 PR의 변경사항을 인라인 주석과 함께 보여주는 페이지를 아티팩트로 만들어줘

# 또는
> 프로젝트 현황 대시보드를 아티팩트로 만들어줘
```

> 🍱 **비유**: 형광등 아래 공사 현장처럼 터미널에서만 볼 수 있던 결과물을, 이제 유리창이 달린 전시장에서 누구나 볼 수 있도록 내보내는 거예요. 링크 하나로 팀원 전체가 볼 수 있어요.

**어떻게 작동하나요?**

| 항목 | 내용 |
|---|---|
| **생성 방식** | Claude에게 요청 → 발행 승인 → `claude.ai` 비공개 URL 생성 |
| **실시간 업데이트** | 세션이 계속 작업하면 페이지도 자동으로 갱신 |
| **사용 예시** | PR 리뷰 문서, 세션 데이터 기반 대시보드, 코드 변경 요약 |
| **플랜 제한** | Team·Enterprise 플랜 전용 (베타). Pro·Max는 미지원 |

<div class="note-circle">
○ 아티팩트 상세 사용법 → <a href="/docs/next/claude-code-artifacts">아티팩트 공유 가이드</a><br />
○ 승인 없이는 발행되지 않아요 — Claude가 먼저 묻고, 내가 허락해야 올라가요
</div>

---

### 2️⃣ 권한 규칙에서 툴 파라미터 매칭 (v2.1.178) 🎯

지금까지 권한 규칙은 `"도구 이름"` 수준만 매칭할 수 있었어요. 이제 **도구의 세부 옵션(파라미터)**까지 지정해서 훨씬 정밀하게 차단할 수 있어요.

```json
// .claude/settings.json
{
  "permissions": {
    "deny": [
      "Agent(model:opus)",
      "Agent(isolation:*)"
    ]
  }
}
```

> 🍱 **비유**: 건물 출입 통제를 "모든 방문객 차단"이 아니라, "배달 왔는데 3층 이상은 못 올라가요"처럼 세부 조건으로 제한하는 것과 같아요.

**문법 설명:**

| 문법 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델을 요청하는 서브에이전트만 차단 |
| `Agent(isolation:*)` | `isolation` 파라미터가 있는 서브에이전트 모두 차단 (`*` = 와일드카드) |
| `Bash(command:rm *)` | `rm`으로 시작하는 명령만 차단 |

`deny` 뿐만 아니라 `ask` (승인 요청) 규칙에도 동일하게 사용할 수 있어요.

---

### 3️⃣ `/config key=value` — 대화 중에 바로 설정 변경 (v2.1.181) ⚙️

설정을 바꾸려면 Settings 화면을 열어서 찾아야 했는데, 이제 채팅창에서 바로 입력할 수 있어요.

```text
# 생각 단계(thinking) 끄기
> /config thinking=false

# 언어 설정 변경
> /config language=ko

# 서브에이전트 최대 수 설정
> /config maxAgents=5
```

> 🍱 **비유**: 에어컨 리모컨처럼 — 온도 조절하러 실외기까지 나갈 필요 없이, 앉은 자리에서 바로 조작하는 것과 같아요.

**어디서 사용할 수 있나요?**

| 환경 | 지원 |
|---|---|
| 대화 중 채팅창 | ✅ |
| `-p` 플래그(비대화 모드) | ✅ |
| Remote Control(원격 모바일) | ✅ |
| GitHub Actions 같은 CI | ✅ |

---

## 기타 개선사항

| 항목 | 내용 |
|---|---|
| **Auto mode 파괴 명령 자동 차단** | `git reset --hard`, `git clean -fd`, `git stash drop` 등 내가 명시적으로 요청하지 않으면 실행 안 됨. `terraform destroy`도 마찬가지 |
| **커밋 URL 숨기기** | `attribution.sessionUrl: false` 설정 시 커밋·PR에 `claude.ai` 세션 링크를 포함하지 않음 |
| **/config UI 개선** | Enter와 Space 모두 설정 변경 가능, Esc 키가 "저장 후 닫기"로 동작 |
| **macOS Apple Events 허용** | `sandbox.allowAppleEvents: true` 설정 시 샌드박스 명령에서 Apple Events 전송 허용 |
| **자리에 있을 때 알림 억제** | `CLAUDE_CLIENT_PRESENCE_FILE`에 마커 파일 경로 지정 시 자리에 있는 동안 모바일 푸시 알림 안 옴 |
| **단락 스트리밍 개선** | 긴 문단이 첫 줄바꿈 전에 기다리지 않고 줄 단위로 바로 출력됨 |
| **API 연결 끊김 자동 재시도** | 생각 중(thinking) 네트워크 끊김 시 "Connection closed" 오류 대신 자동 재시도 |
| **중첩 스킬 로딩 개선** | `.claude/skills` 하위 폴더의 스킬이 자동 로드되고, 이름 충돌 시 `<폴더>:<이름>` 형식으로 구분 |
| **버그 수정** | 커스텀 `ANTHROPIC_BASE_URL` 및 Foundry에서 프롬프트 캐싱 안 되던 문제 수정 |
| **버그 수정** | 네트워크 드라이브·클라우드 동기화 폴더에서 Write/Edit가 빈 파일·잘린 파일 만들던 문제 수정 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ Auto mode의 파괴 명령 차단은 <strong>내가 요청하지 않은 경우</strong>에만 적용돼요. "git reset --hard 실행해줘"라고 직접 요청하면 실행해요
</div>
