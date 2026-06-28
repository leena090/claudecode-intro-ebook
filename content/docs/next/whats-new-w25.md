---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "아티팩트(세션 결과물을 링크로 공유), 도구 파라미터 권한 규칙, /config로 프롬프트에서 바로 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "permissions", "config", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-06-28"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts(아티팩트) — Claude 세션 결과를 링크 하나로 공유 🔗

Claude Code가 작업한 내용을 **살아있는 인터랙티브 페이지**로 발행해서, 링크를 팀원에게 공유할 수 있어요.

> 🍱 **비유**: 보고서를 Word 파일로 보내는 대신, 구글 독스 링크를 공유하는 것과 같아요. 받는 사람은 별도 파일 없이 바로 볼 수 있고, 작업이 계속되면 페이지도 실시간으로 업데이트돼요.

```text
# Claude에게 요청하기
Make an artifact that walks through this PR with the diff annotated inline.
```

Claude가 "발행할까요?" 라고 물어보면 승인하면 돼요. 그러면 `claude.ai`의 비공개 URL이 생성돼요.

| 항목 | 설명 |
|---|---|
| **현재 상태** | 베타(Beta) — Team·Enterprise 플랜 |
| **업데이트 방식** | 세션이 계속 작업하면 페이지도 자동 갱신 |
| **활용 예시** | PR 리뷰 요약, 세션 데이터 대시보드, 문서 초안 |
| **URL 범위** | `claude.ai` 내 비공개 URL (조직 내부 공유용) |

<div class="note-circle">
○ 터미널 텍스트로는 전달하기 어려운 내용을 시각적으로 정리할 때 유용해요<br />
○ Pro·Max 플랜은 현재 미지원 (Team/Enterprise만 베타 적용)
</div>

---

### 2️⃣ 도구 파라미터로 권한 규칙 세밀하게 설정 🎯

권한 규칙에서 도구 이름뿐 아니라 **입력 파라미터 값**으로도 허용·차단할 수 있어요.

> 🍱 **비유**: "모든 택배 수령 금지"가 아니라 "발신인이 ABC회사인 택배만 거부"처럼, 조건을 훨씬 구체적으로 걸 수 있어요.

**문법**: `Tool(파라미터이름:값)`

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

위 설정을 추가하면 **Opus 모델로 서브에이전트를 생성하는 것만** 차단해요.

| 예시 규칙 | 의미 |
|---|---|
| `Agent(model:opus)` | Opus 모델 서브에이전트 차단 |
| `Agent(isolation:*)` | 격리 값이 있는 모든 서브에이전트 차단 |
| `WebFetch(url:*github.com*)` | GitHub URL fetch 차단 |

- `*`은 와일드카드 — 어떤 값이든 매칭해요
- `deny`, `ask` 목록 모두에서 사용 가능해요

<div class="note-circle">
○ 기존 `Bash(command:rm*)` 스타일 규칙과 동일한 방식으로 확장된 거예요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permissions#match-by-input-parameter" target="_blank">Match by input parameter</a>
</div>

---

### 3️⃣ `/config key=value` — 프롬프트에서 바로 설정 변경 ⚙️

설정 메뉴를 열지 않고, 채팅창에서 바로 설정값을 바꿀 수 있어요.

```text
# 예: 사고(thinking) 기능 끄기
/config thinking=false

# 예: 자동완성 끄기
/config autoComplete=false
```

> 🍱 **비유**: TV 리모컨으로 채널을 바꾸는 것과 같아요. 설정 메뉴를 열지 않고 버튼 하나로 바로 바꿀 수 있어요.

**추가 활용 방법:**

| 방법 | 예시 |
|---|---|
| 비대화형 모드에서 | `claude -p "할 일" --config thinking=false` |
| Remote Control에서 | 폰·브라우저 원격 세션에서도 동일하게 사용 |
| `/config` 인터페이스 | Enter·Space로 설정 변경, Esc로 저장 후 닫기 (이번에 개선됨) |

<div class="note-circle">
○ 바꿀 수 있는 설정 목록은 <code>/config</code>를 입력해 인터페이스에서 확인하세요<br />
○ 세션이 끝나면 설정이 초기화될 수 있으니 영구 적용은 <code>settings.json</code>에 저장하세요
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| Auto mode 안전 강화 | `git reset --hard`, `git clean -fd`, `git stash drop`, `terraform destroy` 를 요청하지 않았을 때 자동 차단 |
| 세션 링크 제거 설정 | `attribution.sessionUrl: false` 설정으로 커밋·PR에서 claude.ai 링크 제거 |
| Apple Events 허용 | `sandbox.allowAppleEvents: true`로 macOS 앱 이벤트 샌드박스 허용 |
| 자리 이탈 알림 제어 | `CLAUDE_CLIENT_PRESENCE_FILE` 환경변수로 자리에 있을 때 모바일 푸시 알림 끄기 |
| 긴 단락 스트리밍 개선 | 첫 줄바꿈 기다리지 않고 줄 단위로 실시간 출력 |
| 사고 중 재연결 | API 연결이 끊겨도 자동 재시도 (이전: "Connection closed while thinking" 오류) |
| 네트워크 드라이브 버그 수정 | 네트워크 드라이브·클라우드 동기화 폴더에서 파일이 0바이트로 저장되던 문제 수정 |
| 중첩 스킬 지원 | `.claude/skills` 하위 디렉토리 스킬 자동 로드, 이름 충돌 시 `<dir>:<name>` 형태로 구분 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ "Auto mode 차단"은 명시적으로 요청했을 때는 실행돼요 — 의도치 않은 데이터 손실만 막는 거예요
</div>
