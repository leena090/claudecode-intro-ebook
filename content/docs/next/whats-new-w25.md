---
title: "[공] 2026년 25주차 새 기능 — 아티팩트·파라미터 권한·/config 직접 설정"
description: "세션에서 인터랙티브 페이지를 발행하는 Artifacts, 도구 파라미터로 세밀하게 권한 제어, 채팅창에서 바로 설정 변경하는 /config key=value (v2.1.178~v2.1.183)"
tags: ["자동생성", "whats-new", "artifacts", "permissions", "config", "auto-mode", "v2.1.178"]
category: "next"
order: 15
lastUpdated: "2026-06-29"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/whats-new/2026-w25">code.claude.com/docs/en/whats-new/2026-w25</a><br />
★ <strong>해당 버전</strong>: v2.1.178 → v2.1.183 (2026년 6월 15~19일)<br />
★ Team·Enterprise 플랜 기능과 전체 플랜 기능이 혼합되어 있습니다. 각 기능 설명에 명시.
</div>

---

## 이번 주 핵심 3가지

| # | 기능 | 한 줄 요약 | 대상 |
|---|------|-----------|------|
| ① | Artifacts (아티팩츠) | 세션 결과를 웹 페이지로 발행 | Team·Enterprise (베타) |
| ② | 파라미터 기반 권한 | `Tool(파라미터:값)` 으로 세밀한 접근 제어 | 전체 |
| ③ | `/config key=value` | 채팅창에서 직접 설정 변경 | 전체 |

---

## ① Artifacts (아티팩츠) — 세션 결과를 살아있는 페이지로

> 🎨 **Team·Enterprise 베타 기능**

### 이게 뭔가요?

Claude Code가 세션 안에서 작업한 결과를 **인터랙티브한 웹 페이지**로 만들어 `claude.ai`의 비공개 URL에 게시하는 기능이에요.

> 📋 **비유로 설명하면**: 선생님이 칠판에 적어둔 내용을 "찍어서 인쇄해 게시판에 붙여주는 것"이에요. 대화창에서 스크롤하며 보던 내용을 **별도 페이지로 만들어서** 링크를 공유하거나 브라우저에서 열어볼 수 있게 됩니다.

### 어떻게 쓰나요?

Claude Code에게 이렇게 말하면 됩니다:

```
> 이 PR의 변경 내용을 인라인 코드 주석으로 설명하는 페이지를 만들어줘
```

또는:

```
> 세션 데이터로 대시보드를 만들어서 아티팩트로 발행해줘
```

→ 발행 전에 Claude가 "이 URL에 게시해도 될까요?" 확인을 요청합니다.

### 어떤 상황에서 유용한가요?

| 상황 | 활용 예시 |
|------|---------|
| PR 리뷰 공유 | diff가 인라인으로 설명된 페이지를 팀에 공유 |
| 분석 보고서 | 코드 분석 결과를 깔끔한 HTML 페이지로 |
| 온보딩 문서 | 새 팀원을 위한 코드베이스 설명 페이지 |

> ⚠️ **현재 Team·Enterprise 플랜의 베타 기능**입니다. Pro·Max 플랜은 추후 지원 예정.

---

## ② 파라미터 기반 권한 매칭 — `Tool(param:value)` 문법 (v2.1.178)

### 이게 뭔가요?

기존에는 "어떤 **도구**를 쓸 수 있나"만 허용/차단할 수 있었는데, 이제는 **도구에 넘기는 값**까지 보고 판단할 수 있게 됐어요.

> 🚪 **비유로 설명하면**: 건물 보안이 "직원증을 가진 사람만 입장"에서 "직원증을 가지고 *소형 가방*만 든 사람만 입장"으로 업그레이드된 거예요. 도구(직원증)만 보는 게 아니라, 그 도구에 붙은 파라미터(가방 크기)까지 확인하는 것이죠.

### 문법

```json
.claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

- `Agent(model:opus)` → Opus 모델을 요청하는 서브에이전트 차단
- `Agent(isolation:*)` → `isolation` 파라미터가 있는 모든 서브에이전트 차단 (`*` = 와일드카드)

### 활용 예시

| 규칙 | 효과 |
|------|------|
| `Agent(model:opus)` | 비싼 Opus 모델 서브에이전트 차단 |
| `Agent(isolation:*)` | 워크트리 격리 서브에이전트 차단 |
| `Bash(command:rm*)` | rm으로 시작하는 명령 차단 |

> 📌 **공식 문서**: [code.claude.com/docs/en/permissions#match-by-input-parameter](https://code.claude.com/docs/en/permissions#match-by-input-parameter)

---

## ③ `/config key=value` — 채팅창에서 바로 설정 변경 (v2.1.181)

### 이게 뭔가요?

`/config`를 입력하면 설정 인터페이스가 열렸는데, 이제는 **채팅창에서 직접** `키=값` 형식으로 설정을 바꿀 수 있어요.

> 🌡️ **비유로 설명하면**: 에어컨 온도를 바꾸려면 리모컨을 찾아서 메뉴를 눌러야 했는데, 이제는 그냥 말로 "21도로 해줘"라고 하면 되는 것과 같아요.

### 사용 방법

```
> /config thinking=false
```

```
> /config model=sonnet
```

- `--dangerously-skip-permissions` 없이 `-p` 플래그와 함께도 작동
- Remote Control(리모트 컨트롤)에서도 사용 가능

### 기존 방법 vs 새 방법

| 방법 | 이전 | 이후 |
|------|------|------|
| thinking 끄기 | `/config` → 목록 탐색 → Enter | `/config thinking=false` |
| 모델 변경 | `/model` 명령 사용 | `/config model=sonnet` |
| 자동화 스크립트 | 불가 | `-p "/config key=val"` 로 가능 |

---

## 기타 개선 사항

### 🛡️ Auto mode 안전 강화

Auto mode (오토 모드)가 이제 더 똑똑하게 위험한 명령을 차단해요:

- `git reset --hard` — 로컬 작업 내용을 삭제하는 명령 차단
- `git clean -fd` — 추적되지 않은 파일 삭제 차단
- `git stash drop` — 스태시 삭제 차단
- `terraform destroy` — 명시적으로 요청하지 않은 경우 차단

> 💡 직접 "이 스택 삭제해줘"라고 요청한 경우에는 실행 가능합니다.

### 기타 소소한 개선

| 항목 | 내용 |
|------|------|
| `attribution.sessionUrl` | 커밋·PR에 claude.ai 세션 링크를 넣지 않으려면 `false`로 설정 |
| `/config` UX | Enter·Space 둘 다 설정 변경, Esc가 저장 후 닫기로 변경 |
| `sandbox.allowAppleEvents` | 샌드박스 명령이 macOS Apple Events를 보낼 수 있도록 허용 |
| `CLAUDE_CLIENT_PRESENCE_FILE` | 이 파일이 있으면 모바일 푸시 알림 억제 (컴퓨터 앞에 있을 때) |
| 스트리밍 개선 | 긴 문단을 줄 단위로 스트리밍 (첫 줄바꿈 전까지 기다리지 않음) |
| 자동 재시도 | 생각(thinking) 중 연결 끊기면 자동으로 재시도 |
| 중첩 Skills | `.claude/skills/` 하위 디렉터리의 스킬도 자동 로드 |
| 버그 수정 | 커스텀 `ANTHROPIC_BASE_URL`에서 프롬프트 캐싱 오류 수정, 네트워크 드라이브에서 파일 0바이트 문제 수정 |

---

## 이번 주 한 줄 정리

> **아티팩츠**로 결과를 페이지로 발행하고, **파라미터 권한**으로 세밀하게 제어하고, **`/config key=val`**로 설정을 한 방에 — v2.1.178~183의 업그레이드.

---

*공식 전체 체인지로그: [code.claude.com/docs/en/changelog#2-1-178](https://code.claude.com/docs/en/changelog#2-1-178)*
