---
title: "[공] Claude Code 주간 업데이트 — 2026년 25주차 (6/15 ~ 6/19)"
description: "세션 결과를 공개 URL로 공유하는 Artifacts, Tool(param:value) 권한 규칙, /config key=value로 즉시 설정 변경"
tags: ["자동생성", "주간업데이트", "whats-new", "2026-w25", "artifacts", "permissions", "config", "Team", "Enterprise"]
category: "next"
order: 12
lastUpdated: "2026-07-03"
---

<div class="note-star">
★ <strong>출처</strong> — Claude Code 공식 주간 업데이트 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">Week 25</a> <code>[공]</code><br />
★ <strong>대상 버전</strong> — v2.1.178 → v2.1.183 (2026년 6월 15일 ~ 19일)<br />
★ <strong>주요 테마</strong> — 결과물 공유 + 정밀한 권한 제어 + 즉시 설정 변경
</div>

---

## 이번 주 한 줄 요약

> "터미널 텍스트로는 부족할 때 — Claude가 실제 웹 페이지를 만들어드려요."

---

## 1️⃣ Artifacts — 세션 결과물을 라이브 URL로 공유하기 🌐

### 이게 뭔가요?

Claude Code가 대화하면서 만든 결과물을 **claude.ai의 비공개 URL에 실시간 웹 페이지로 발행**해주는 기능이에요. 세션이 계속 작업하는 동안 그 페이지도 함께 업데이트돼요.

> 🍱 **비유**: 회의 중에 누군가가 노트북으로 발표자료를 실시간으로 만들면서 스크린에 보여주는 것과 같아요. Claude가 작업하는 내용이 곧바로 웹 페이지에 반영돼요.

### 어떤 상황에서 쓸까요?

터미널 텍스트보다 시각적으로 보여줘야 할 때 딱이에요:

| 활용 예시 | 설명 |
|---|---|
| PR 리뷰 페이지 | diff를 주석 달아 인라인으로 볼 수 있는 페이지 |
| 세션 데이터 대시보드 | 분석 결과를 차트로 정리한 페이지 |
| 팀 공유 보고서 | 코드 설명 + 결과를 한 페이지로 |

### 사용 방법

Claude에게 자연어로 요청하면 돼요:

```text
> Make an artifact that walks through this PR with the diff annotated inline.
> (이 PR을 diff에 주석 달아서 아티팩트로 만들어줘)
```

Claude가 페이지를 만들고 "발행하겠습니다" 승인 요청을 보내요. 승인하면 `claude.ai`에 비공개 URL이 생겨요.

<div class="note-circle">
○ <strong>현재 베타</strong> — Team 플랜과 Enterprise 플랜에서만 사용 가능해요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/artifacts" target="_blank">code.claude.com/docs/en/artifacts</a>
</div>

---

## 2️⃣ 도구 파라미터로 권한 규칙 매칭 (v2.1.178) 🎯

### 이게 뭔가요?

`.claude/settings.json`의 권한 규칙에서 **도구 이름뿐 아니라 도구의 입력 파라미터까지** 지정할 수 있게 됐어요. `Tool(param:value)` 형식으로 써요.

> 🍱 **비유**: 경비실에서 "출입증 가진 사람 통과"가 아니라 "출입증 + A팀 소속인 사람만 통과"처럼 조건을 더 세밀하게 설정하는 것과 같아요.

### 문법

```json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

| 예시 규칙 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델 요청하는 서브에이전트 차단 |
| `Agent(isolation:*)` | isolation 값이 있는 모든 서브에이전트 차단 |

<div class="note-circle">
○ <code>*</code>은 와일드카드로 사용 가능해요<br />
○ <code>deny</code> 뿐 아니라 <code>ask</code> 규칙에도 같이 쓸 수 있어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permissions#match-by-input-parameter" target="_blank">권한 규칙 상세</a>
</div>

---

## 3️⃣ `/config key=value` — 프롬프트에서 바로 설정 변경 (v2.1.181) ⚙️

### 이게 뭔가요?

설정 화면을 열지 않고도 **채팅창에서 바로** `key=value` 형식으로 설정을 바꿀 수 있어요.

> 🍱 **비유**: 리모컨으로 TV 설정 메뉴에 들어가지 않고 음성 명령으로 "볼륨 30으로 해줘" 하는 것과 같아요.

```text
> /config thinking=false
> /config model=claude-sonnet-4-6
```

**어디서든 작동해요:**
- 일반 인터랙티브 모드
- `-p` 플래그 (비인터랙티브 모드)
- Remote Control (폰·브라우저에서)

<div class="note-circle">
○ 이전에는 <code>/config</code>로 메뉴를 열어야 했어요 — 이제 한 줄 명령으로 끝나요<br />
○ 전체 설정 키 목록: <a href="https://code.claude.com/docs/en/settings" target="_blank">settings 문서</a> 참조
</div>

---

## 기타 개선사항

| 항목 | 내용 |
|---|---|
| Auto mode 안전망 강화 | 요청하지 않은 `git reset --hard`, `git clean -fd`, `terraform destroy` 자동 차단 |
| 커밋·PR 세션 링크 숨기기 | `attribution.sessionUrl: false`로 Web/Remote Control 세션의 claude.ai 링크 제거 가능 |
| `/config` UI 개선 | Enter·Space 둘 다 설정 변경, Esc로 저장+닫기 |
| `sandbox.allowAppleEvents` | macOS에서 샌드박스 명령이 Apple Events 전송 허용 옵션 |
| 긴 문단 스트리밍 개선 | 첫 줄바꿈 기다리지 않고 줄 단위로 실시간 출력 |
| API 연결 끊김 자동 재시도 | thinking 중 "Connection closed" 에러 자동 재시도로 변환 |
| Write/Edit 파일 손상 수정 | 네트워크 드라이브·클라우드 동기화 폴더에서 파일이 0바이트로 저장되던 버그 수정 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ Artifacts 기능은 현재 Team/Enterprise 전용 (공식 발표 기준)
</div>
