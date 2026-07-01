---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts로 세션 결과를 URL로 공유, 권한 규칙에 파라미터 매칭 추가, /config key=value로 즉시 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "permissions", "config", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-07-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션 결과를 살아있는 URL로 공유 🔗

Claude Code가 작업한 결과를 **claude.ai의 비공개 URL**에 실시간 퍼블리시해주는 기능이에요.

> 📬 **택배 영수증 비유**: 터미널 텍스트로 보던 PR 리뷰를 이제 "클릭해서 볼 수 있는 웹페이지"로 보내주는 것과 같아요. 화면을 캡처해서 보내던 걸 이제 링크 하나로 해결!

**어떻게 쓰나요?**

```text
> Make an artifact that walks through this PR with the diff annotated inline.
```

위처럼 요청하면 Claude Code가 "퍼블리시할까요?" 확인 후 URL을 생성해요. 세션이 계속 작업하면 그 URL의 내용도 실시간으로 업데이트돼요.

| 활용 예시 | 설명 |
|-----------|------|
| PR 워크스루 | diff에 주석 달린 인라인 페이지 |
| 세션 데이터 대시보드 | 터미널 텍스트 대신 시각적 대시보드 |
| 코드 리뷰 결과 | 팀원과 링크로 공유 |

> ⚠️ **현재 Team·Enterprise 플랜 베타**로 제공 중. Pro/Max는 추후 예정.

---

### 2️⃣ 권한 규칙에 파라미터 매칭 추가 🛡️

`deny`·`ask` 규칙에서 **도구의 입력 파라미터**까지 세밀하게 지정할 수 있어요.

> 🚦 **교통 신호 비유**: 이전엔 "에이전트 전체 금지"였다면, 이제는 "Opus 모델 쓰는 에이전트만 금지"처럼 세부 조건을 달 수 있는 거예요.

**문법**: `도구이름(파라미터:값)`

```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

| 예시 규칙 | 의미 |
|-----------|------|
| `Agent(model:opus)` | Opus 모델 쓰는 서브에이전트 차단 |
| `Agent(isolation:*)` | isolation 값이 있는 서브에이전트 차단 (`*` = 와일드카드) |

---

### 3️⃣ `/config key=value` — 설정을 대화하듯 즉시 변경 ⚙️

설정 UI를 열지 않고 대화창에서 바로 설정을 바꿀 수 있어요.

```text
> /config thinking=false
```

- `-p` 플래그(비대화형 모드)에서도 동작
- Remote Control(모바일/브라우저 원격)에서도 사용 가능

---

## 기타 개선사항 (Other wins)

| 항목 | 내용 |
|------|------|
| 🔒 Auto mode 보호 강화 | `git reset --hard`, `git clean -fd`, `terraform destroy` 등 파괴적 명령어는 명시 요청 없을 시 차단 |
| 🔕 세션 URL 생략 | `attribution.sessionUrl: false` 설정 시 커밋/PR에서 claude.ai 링크 제거 가능 |
| ⌨️ /config UI 개선 | Enter/Space로 설정 변경, Esc가 저장 후 닫기로 변경 |
| 🍎 macOS 샌드박스 | `sandbox.allowAppleEvents` 설정으로 샌드박스 명령이 Apple Events 전송 가능 |
| 📱 모바일 알림 억제 | `CLAUDE_CLIENT_PRESENCE_FILE` 환경변수로 PC 앞에 있을 때 모바일 푸시 억제 |
| 📄 스트리밍 개선 | 긴 문단도 첫 줄부터 바로 스트리밍 |
| 🔄 자동 재시도 | API 연결 중단 시 "Connection closed while thinking" 대신 자동 재시도 |
| 🤝 암시적 팀 | `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`로 모든 세션에 기본 팀 1개 자동 생성 |
| 📂 중첩 Skills | `.claude/skills` 하위 디렉토리 스킬 자동 로드, 이름 충돌 시 `<dir>:<name>` 표기 |
| 🐛 버그 수정 | 커스텀 `ANTHROPIC_BASE_URL`·Foundry에서 프롬프트 캐시 미적용 버그 수정 |
| 💾 파일 저장 | 네트워크 드라이브·클라우드 동기화 폴더에서 Write/Edit 0바이트 버그 수정 |

> 릴리즈: v2.1.178 → v2.1.183
