---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "세션 결과물을 링크로 공유하는 Artifacts, 도구 파라미터 기반 권한 규칙, /config로 즉석 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "권한규칙", "config", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-08"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션 결과를 링크 하나로 공유 🔗

Claude Code 세션에서 만든 결과물(분석 대시보드, PR 설명, 코드 리뷰 요약 등)을 **클릭 가능한 라이브 페이지**로 바로 만들 수 있어요. claude.ai에 프라이빗 URL로 올라가고, 세션이 계속 작업하면 페이지도 **자동으로 업데이트**돼요.

> 🍱 **비유**: 동료한테 코드 리뷰 결과를 설명할 때 터미널 화면 캡처를 공유하는 게 아니라, 인터랙티브하게 볼 수 있는 **웹 페이지 링크**를 보내는 것과 같아요.

**어떻게 요청하나요?**

```text
# PR 인라인 diff가 포함된 워크스루 페이지 만들어줘
Make an artifact that walks through this PR with the diff annotated inline.
```

**주요 특징:**

| 항목 | 내용 |
|---|---|
| 공개 범위 | 프라이빗 URL (링크 아는 사람만 접근) |
| 자동 업데이트 | 세션이 계속 작업하면 페이지 내용도 갱신 |
| 지원 플랜 | Team·Enterprise (베타) |
| 출력 형태 | HTML 인터랙티브 페이지 |

<div class="note-circle">
○ "터미널 텍스트로는 표현이 어려운 결과물"에 특히 유용해요<br />
○ 세션 데이터로 만든 대시보드, PR 워크스루, 보고서에 적합
</div>

---

### 2️⃣ 도구 파라미터 기반 권한 규칙 🎯

권한 설정에서 **도구 이름뿐 아니라 파라미터 값**까지 지정해서 더 정밀하게 허용/차단할 수 있게 됐어요.

> 🍱 **비유**: 이전에는 "서브에이전트 전부 차단"이었다면, 이제는 "Opus 모델 쓰는 서브에이전트만 차단"처럼 **조건을 달 수 있는** 거예요.

**문법:**

```
도구이름(파라미터:값)
```

**예시들:**

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"],
    "ask": ["Agent(isolation:*)"]
  }
}
```

| 규칙 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델 사용하는 서브에이전트 차단 |
| `Agent(isolation:*)` | isolation 값이 있는 서브에이전트는 먼저 물어봄 |
| `Bash(command:rm*)` | `rm`으로 시작하는 명령어 차단 |

**와일드카드** `*`를 쓰면 "이 파라미터가 어떤 값이든" 규칙이 적용돼요.

<div class="note-circle">
○ 팀 환경에서 비용 제어할 때 유용해요 — 비싼 모델 사용 서브에이전트만 제한<br />
○ v2.1.178부터 적용
</div>

---

### 3️⃣ `/config` — 프롬프트에서 바로 설정 변경 ⚙️

설정 메뉴를 열지 않고도 **채팅창에서 직접** 설정값을 바꿀 수 있어요.

> 🍱 **비유**: 스마트폰 설정 앱을 열어서 와이파이를 끄는 게 아니라, 화면에 "와이파이 꺼줘"라고 말하면 바로 꺼지는 것과 같아요.

**사용법:**

```text
# 생각 모드(extended thinking) 끄기
/config thinking=false

# 모델 변경
/config model=claude-sonnet-4-6

# 언어 설정
/config language=ko
```

**어디서도 작동해요:**

| 환경 | 지원 |
|---|---|
| 일반 세션 프롬프트 | ✅ |
| `-p` 플래그 (비대화형 모드) | ✅ |
| Remote Control (모바일) | ✅ |

<div class="note-circle">
○ v2.1.181부터 적용<br />
○ /config 인터페이스에서 Enter/Space 둘 다 설정 변경, Esc는 저장 후 닫기로 바뀜
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| Auto mode 안전장치 강화 | `git reset --hard`, `git clean -fd`, `git stash drop`, `terraform destroy` 등 파괴적 명령을 명시적으로 요청하지 않으면 자동 차단 |
| `attribution.sessionUrl: false` | 커밋·PR에 claude.ai 세션 링크 자동 삽입 비활성화 옵션 |
| `sandbox.allowAppleEvents` | macOS에서 샌드박스 명령이 Apple Events를 보낼 수 있도록 허용하는 옵션 |
| 모바일 알림 억제 | `CLAUDE_CLIENT_PRESENCE_FILE` 환경변수로 컴퓨터 앞에 있을 때 모바일 알림 끄기 |
| 스트리밍 개선 | 긴 단락이 줄 단위로 스트림돼 더 빠르게 응답이 보임 |
| 연결 끊김 자동 재시도 | thinking 중 API 연결이 끊겨도 자동 재시도 (이전: "Connection closed" 에러) |
| 네스트 스킬 | `.claude/skills` 하위 폴더의 스킬도 자동 로딩, 이름 충돌 시 `<dir>:<name>` 형태로 표시 |
| 버그 수정 | Write/Edit가 네트워크 드라이브나 클라우드 동기화 폴더에서 0바이트 파일 생성하던 문제 수정 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183
</div>
