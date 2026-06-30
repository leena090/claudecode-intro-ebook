---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "세션에서 살아있는 웹페이지 만들기(Artifacts), 권한 규칙에 파라미터 매칭, /config 명령어로 즉시 설정 변경"
tags: ["업데이트", "2026", "week25", "artifacts", "permissions", "config", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-06-30"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a><br />
📦 배포 버전: v2.1.178 → v2.1.183
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 세션에서 살아있는 웹페이지를 만들어요 🌐

> 🍱 **비유**: 종이에 숫자를 적어서 보여주는 것과 실제 대시보드를 열어서 보여주는 것의 차이예요. Artifacts는 Claude Code 세션에서 만든 내용을 실제 웹페이지로 발행해 주는 기능이에요.

Claude Code에게 **PR 요약 페이지**, **데이터 대시보드** 같은 것을 만들어달라고 하면, 결과를 터미널 텍스트 대신 **claude.ai의 비공개 URL**에 실제 웹페이지로 올려줘요. 작업이 계속되면서 페이지도 실시간으로 업데이트돼요.

**사용해보기:**
```
> 이 PR에서 바뀐 코드를 한눈에 볼 수 있는 페이지를 만들어줘.
```

그러면 Claude가 "이 페이지를 발행할까요?" 라고 물어봐요. 승인하면 바로 URL이 생겨요.

**어떤 상황에서 유용할까요?**

| 상황 | 활용 예시 |
|---|---|
| PR 리뷰 요청 | 변경 내용을 주석과 함께 시각화 |
| 데이터 분석 | 세션 데이터로 만든 차트·표 |
| 팀 공유 | 링크 하나로 결과물 전달 |
| 보고서 | 코드 실행 결과를 깔끔하게 정리 |

<div class="note-circle">
○ <strong>현재: Team·Enterprise 플랜 베타</strong> — 개인 Pro/Max 플랜은 추후 지원 예정<br />
○ URL은 claude.ai의 비공개 페이지 — 로그인 없이도 링크 소유자는 접근 가능<br />
○ 세션이 계속 작업하는 동안 페이지가 자동으로 업데이트돼요
</div>

---

### 2️⃣ 파라미터로 권한 규칙 정밀 설정 🎯

이전까지는 "Agent 도구 전체 허용/차단" 같은 큰 단위 규칙만 만들 수 있었어요. 이제 **Tool(파라미터:값)** 형식으로 훨씬 세밀하게 조정할 수 있어요.

> 🍱 **비유**: 도서관 출입 규칙을 "외부인 전체 금지" 대신 "외부인 중 연구자 카드 소지자만 허용"처럼 세밀하게 정할 수 있게 된 거예요.

**예시: Opus 모델 사용 서브에이전트 차단**
```json
// .claude/settings.json
{
  "permissions": {
    "deny": ["Agent(model:opus)"]
  }
}
```

이렇게 하면 Opus를 요청하는 서브에이전트는 차단하고, Sonnet·Haiku 서브에이전트는 허용돼요.

**와일드카드 지원:**
```json
{
  "permissions": {
    "ask": ["Agent(isolation:*)"]
  }
}
```

`*` 와일드카드를 쓰면 isolation 값이 무엇이든 "물어보기" 모드가 적용돼요.

<div class="note-circle">
○ deny, ask 규칙 모두 파라미터 매칭 가능<br />
○ 비용 제어에 특히 유용해요 — Opus는 Sonnet보다 약 5배 비싸거든요
</div>

---

### 3️⃣ `/config key=value` — 프롬프트에서 바로 설정 변경 ⚙️

설정을 바꾸려면 메뉴를 열거나 JSON 파일을 직접 편집해야 했어요. 이제 프롬프트에서 바로 가능해요.

```
> /config thinking=false
```

> 🍱 **비유**: 에어컨 리모컨을 꺼내는 대신 "온도 25도로 내려줘"라고 말로 바로 조작하는 거예요.

**`-p` 플래그 (비대화 모드)에서도 동작:**
```bash
claude -p "코드 리뷰해줘" --config thinking=false
```

**Remote Control에서도 사용 가능** — 모바일에서 Claude Code를 원격 조작할 때도 쓸 수 있어요.

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| Auto 모드 안전 강화 | "원하지 않는데 파일 삭제" 방지 — `git reset --hard`, `git clean -fd`, `git stash drop`, `terraform destroy` 자동 차단 |
| `attribution.sessionUrl` | `false`로 설정하면 커밋·PR에 claude.ai 세션 링크가 자동 삽입되지 않음 |
| `/config` UX 개선 | Enter·Space 모두 선택 변경, Esc는 이제 저장 후 닫기 (이전: 취소) |
| `sandbox.allowAppleEvents` | macOS에서 샌드박스 명령이 Apple Events를 보낼 수 있도록 허용 |
| `CLAUDE_CLIENT_PRESENCE_FILE` | 지정 파일이 있으면 모바일 푸시 알림 억제 (컴퓨터 앞에 있을 때) |
| 스트리밍 개선 | 긴 문단이 첫 줄 바꿈까지 기다리지 않고 한 줄씩 바로 출력 |
| 연결 끊김 자동 재시도 | "생각 중" 상태에서 API 연결이 끊겨도 자동 재시도 (이전: 오류 메시지) |
| `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` | 암시적 팀 실험 모드 — Agent 도구에서 `name` 파라미터로 팀원을 직접 지정 가능 |
| 중첩 스킬 로드 | `.claude/skills` 하위 디렉토리 스킬도 해당 폴더 작업 시 자동 로드 |
| 버그 수정 | 커스텀 `ANTHROPIC_BASE_URL`·Foundry에서 프롬프트 캐싱이 작동 안 하던 문제 해결 |
| 버그 수정 | 네트워크 드라이브·클라우드 동기화 폴더에서 파일이 0바이트로 저장되던 문제 해결 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ Artifacts 기능은 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서</a>에서 자세히 확인 가능해요
</div>
