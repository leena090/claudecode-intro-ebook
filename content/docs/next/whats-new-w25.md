---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts로 세션에서 클라우드에 라이브 페이지 게시, 권한 규칙에 파라미터 매칭, /config key=value로 즉시 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "permissions", "config", "auto-mode", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-07-05"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션에서 바로 라이브 페이지 게시 📄

**Artifacts(아티팩트)**는 Claude Code 세션 안에서 만든 결과물을 **claude.ai의 비공개 URL에 라이브 페이지로 즉시 게시**하는 기능이에요.

> 🍱 **비유로 설명하면**: 지금까지는 코딩 결과를 터미널 텍스트로만 볼 수 있었는데, 이제는 "잠깐, 이거 예쁜 웹페이지로 만들어줘!"라고 하면 진짜 브라우저에서 열리는 페이지가 뚝딱 만들어져요. 마치 화이트보드에 그린 다이어그램을 클릭 한 번에 예쁜 슬라이드로 바꿔주는 것과 같아요.

#### 어떤 상황에 쓰면 좋아요?

| 상황 | 예시 |
|------|------|
| PR 내용 시각화 | 변경된 코드 diff를 주석과 함께 예쁘게 정리 |
| 데이터 대시보드 | 세션 데이터로 차트·테이블 만들기 |
| 코드 워크스루 | "이 기능이 어떻게 동작하는지 설명 페이지 만들어줘" |
| 팀 공유 | 분석 결과를 링크로 팀원과 공유 |

#### 사용 방법

```text
> 이 PR의 diff를 주석과 함께 설명하는 아티팩트 페이지 만들어줘
```

Claude Code가 "페이지를 게시할까요?" 확인 메시지를 보내면, 승인하면 바로 링크가 생성돼요.

<div class="note-circle">
○ Team 및 Enterprise 플랜에서 베타 제공 중이에요<br />
○ 세션이 계속 작업하면 페이지도 실시간으로 업데이트돼요<br />
○ 기본 비공개 URL — 직접 공유한 사람만 볼 수 있어요
</div>

---

### 2️⃣ 권한 규칙에서 파라미터 매칭 🎯

**`Tool(param:value)`** 구문으로 권한 규칙을 **더 세밀하게 지정**할 수 있게 됐어요.

> 🍱 **비유**: 이전에는 "에이전트 도구 전체 차단"처럼 큰 단위로만 권한을 설정할 수 있었는데, 이제는 "Opus 모델을 쓰는 에이전트만 차단"처럼 **조건을 달아서** 설정할 수 있어요. 건물 출입증이 "1층만 통과"에서 "1층 중에서도 회의실만 통과"로 세밀해진 거예요.

#### 사용 예시

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"],
    "ask": ["Bash(command:rm*)"]
  }
}
```

#### 주요 패턴

| 규칙 | 의미 |
|------|------|
| `Agent(model:opus)` | Opus 모델로 서브에이전트 생성 시 차단 |
| `Agent(isolation:*)` | 격리(worktree) 설정된 에이전트 전체 매칭 |
| `Bash(command:git*)` | git으로 시작하는 모든 bash 명령 매칭 |

<div class="note-circle">
○ `*`는 와일드카드 — 아무 값이나 매칭돼요<br />
○ v2.1.178 이상 필요
</div>

---

### 3️⃣ `/config key=value` — 프롬프트에서 바로 설정 변경 ⚙️

이제 설정 메뉴를 열지 않고도, **프롬프트 창에서 직접 설정값을 바꿀 수 있어요**.

> 🍱 **비유**: 이전엔 TV 채널을 바꾸려면 리모컨 메뉴 → 설정 → 채널 → 확인을 눌러야 했는데, 이제는 "채널 11번으로 바꿔"라고 말하면 바로 바뀌는 것과 같아요.

#### 사용 방법

```text
> /config thinking=false
> /config model=claude-sonnet-4-6
```

- 비인터랙티브 모드(`-p` 플래그)에서도 동작해요
- Remote Control(원격 제어)에서도 사용 가능해요

<div class="note-circle">
○ v2.1.181 이상 필요<br />
○ 설정 UI에서 Enter와 Space 모두 선택값 변경, Esc가 저장 후 닫기로 개선됨
</div>

---

## 그 외 개선사항

<div class="note-circle">

🔒 <strong>Auto mode 안전 강화</strong><br />
Auto mode에서 아래 위험한 명령을 자동 차단해요 (명시적으로 요청했을 때만 허용):
<ul>
  <li><code>git reset --hard</code> — 로컬 변경 사항 전체 삭제</li>
  <li><code>git clean -fd</code> — 미추적 파일 강제 삭제</li>
  <li><code>git stash drop</code> — 스태시 삭제</li>
  <li><code>terraform destroy</code> — 인프라 전체 삭제 (요청한 스택 외)</li>
</ul>

📎 <strong>커밋/PR에서 세션 링크 제거</strong><br />
<code>attribution.sessionUrl: false</code> 설정하면 웹·Remote Control 세션의 커밋·PR에서 claude.ai 세션 링크가 빠져요.

📱 <strong>자리에 있을 때 모바일 알림 억제</strong><br />
<code>CLAUDE_CLIENT_PRESENCE_FILE</code>을 마커 파일 경로로 지정하면, 파일이 있는 동안 모바일 푸시 알림이 억제돼요. 컴퓨터 앞에 있을 때 폰 알림이 안 와요.

🔄 <strong>API 연결 끊김 자동 재시도</strong><br />
"thinking" 도중 연결이 끊겨도 이제 자동으로 재시도해요. "Connection closed while thinking" 오류가 사라져요.

📂 <strong>Skills 중첩 디렉토리 지원</strong><br />
<code>.claude/skills</code>의 하위 폴더에 있는 스킬도 해당 폴더 작업 시 자동 로드돼요. 이름 충돌 시 <code>&lt;dir&gt;:&lt;name&gt;</code> 형태로 구분돼요.

🐛 <strong>버그 수정</strong><br />
커스텀 <code>ANTHROPIC_BASE_URL</code> 및 Microsoft Foundry에서 프롬프트 캐싱이 안 읽히던 문제 수정. 네트워크 드라이브·클라우드 동기화 폴더에서 Write/Edit가 0바이트 파일로 저장되던 문제 수정.

</div>

---

## 관련 문서

- [Artifacts 공식 문서](https://code.claude.com/docs/en/artifacts) `[공]`
- [권한(Permissions) 설정](https://code.claude.com/docs/en/permissions) `[공]`
- [명령어 레퍼런스(/config)](https://code.claude.com/docs/en/commands) `[공]`
