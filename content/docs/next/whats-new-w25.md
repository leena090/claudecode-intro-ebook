---
title: "[공] 주간 업데이트: 2026년 6월 15일 ~ 19일 (Week 25)"
description: "Artifacts로 대화 결과물을 웹 페이지로 공유, /config 명령어 직접 설정, auto 모드 파괴적 명령어 자동 차단"
tags: ["업데이트", "2026", "week25", "artifacts", "config", "auto-mode", "permissions", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 25 (2026-06-15 ~ 2026-06-19) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w25" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w25</a><br />
📦 릴리즈 범위: Claude Code v2.1.178 → v2.1.183
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ Artifacts — 대화 결과물을 살아있는 웹 페이지로 공유 🌐

Claude Code가 세션 안에서 **살아있는 인터랙티브 페이지**를 만들어 claude.ai의 비공개 URL에 발행할 수 있게 됐어요. 페이지는 세션이 계속 작업하면서 **제자리에서 자동 업데이트**돼요.

> 🍱 **비유로 설명하면**: 음식점 주방(세션)에서 요리하면서 손님 테이블(URL) 위 메뉴판이 실시간으로 바뀌는 것과 같아요. 손님은 자기 링크만 열어두면 업데이트된 내용을 계속 볼 수 있어요.

**어떻게 쓰나요?**

```
# PR 변경 내역을 인라인 주석과 함께 페이지로 만들기
Make an artifact that walks through this PR with the diff annotated inline.

# 세션 데이터로 대시보드 만들기
이 테스트 결과를 보기 좋은 대시보드 페이지로 만들어줘.
```

Claude가 발행 요청 확인 프롬프트를 보여주면 승인하면 돼요. 그러면 공유 가능한 URL이 생겨요.

**언제 쓰면 좋아요?**

| 상황 | 예시 |
|---|---|
| PR 리뷰 공유 | diff가 인라인 주석과 함께 달린 페이지 |
| 데이터 대시보드 | 테스트 결과, 성능 지표 시각화 |
| 문서 작성 | 팀원에게 링크로 공유할 작업 보고서 |
| 튜토리얼 | 단계별 안내 페이지 |

<div class="note-circle">
○ 현재 <strong>Team · Enterprise 플랜 베타</strong> 기능이에요<br />
○ 페이지는 기본적으로 비공개(private) URL이에요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/artifacts" target="_blank">artifacts</a>
</div>

---

### 2️⃣ `/config key=value` — 프롬프트에서 설정 바로 바꾸기 ⚙️

이제 Settings 메뉴를 열지 않아도 **프롬프트 창에서 바로 설정을 바꿀 수** 있어요.

```bash
# thinking(확장 사고) 끄기
/config thinking=false

# 모델 바꾸기
/config model=claude-opus-4-8
```

> 🍱 **비유로 설명하면**: TV 리모컨의 메뉴 버튼을 일일이 눌러서 설정에 들어가던 걸, 이제는 리모컨에 "밝기 60"이라고 말하면 바로 바뀌는 것과 같아요.

**활용 팁:**
- `-p` 플래그(비대화 모드)에서도 작동해요
- Remote Control(원격 제어)에서도 사용 가능해요

---

### 3️⃣ Auto 모드 — 파괴적 명령어 자동 차단 🛡️

Auto 모드(허락 없이 자동 실행하는 모드)를 쓸 때, Claude가 이제 **내가 요청하지 않은 위험한 git 명령어를 스스로 차단**해요.

**자동으로 막히는 명령어:**

| 명령어 | 차단 이유 |
|---|---|
| `git reset --hard` | 내가 작업 중인 파일을 날려버릴 수 있어요 |
| `git clean -fd` | 추적 안 되는 파일 전부 삭제 |
| `git stash drop` | 보관 중인 작업 삭제 |
| `terraform destroy` | 내가 특정 스택을 명시하지 않으면 차단 |

> 🍱 **비유로 설명하면**: 집 청소를 부탁했는데, 조수가 "서재 정리도 할까요? 책을 다 버려도 될까요?"라고 묻지 않고 버려버리는 걸 막는 것과 같아요. 내가 "그 책들 버려줘"라고 명시적으로 말해야 해요.

<div class="note-circle">
○ Auto 모드(<code>--dangerously-skip-permissions</code> 대신 쓰는 안전 버전)에서만 작동해요<br />
○ 직접 요청했을 때는 실행돼요 — "git reset --hard 실행해줘"라고 하면 OK
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `attribution.sessionUrl` 설정 | `false`로 설정하면 커밋/PR에서 claude.ai 세션 링크 제거 |
| 스킬 중첩 디렉토리 | 하위 `.claude/skills` 폴더의 스킬도 해당 폴더 작업 시 로드됨. 이름 충돌 시 `dir:name` 형식으로 구분 |
| `sandbox.allowAppleEvents` | 샌드박스 명령어에서 macOS Apple Events 허용 (새 opt-in 설정) |
| 길고 이어지는 문단 스트리밍 | 긴 단락이 첫 줄바꿈 전까지 기다리지 않고 한 줄씩 나와요 |
| 사고 중 연결 끊김 자동 재시도 | "Connection closed while thinking" 오류 대신 자동으로 재시도해요 |
| 권한 규칙 파라미터 매칭 | `Tool(param:value)` 문법으로 도구의 입력값 기반 deny/ask 규칙 설정 가능 |
| 팀 에이전트(실험) | `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 설정 시 Agent 도구로 팀원 직접 소환 |
| 프롬프트 캐싱 버그 수정 | 커스텀 `ANTHROPIC_BASE_URL` 및 Microsoft Foundry에서 프롬프트 캐싱 미작동 수정 |
| 파일 쓰기 버그 수정 | 네트워크 드라이브·클라우드 동기화 폴더에서 파일이 0바이트로 저장되던 문제 수정 |

<div class="note-circle">
○ Week 25 범위: Claude Code v2.1.178 ~ v2.1.183<br />
○ Artifacts는 Team/Enterprise 베타이므로 Pro/Max 사용자는 아직 사용 불가
</div>
