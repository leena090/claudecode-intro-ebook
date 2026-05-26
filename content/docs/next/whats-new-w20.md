---
title: "[공] 주간 업데이트: 2026년 5월 11일 ~ 15일 (Week 20)"
description: "에이전트 뷰(claude agents)로 모든 세션 한눈에, /goal로 목표 달성까지 자동 진행, 패스트 모드가 Opus 4.7로 업그레이드"
tags: ["업데이트", "2026", "week20", "에이전트뷰", "goal", "fast-mode", "자동생성"]
category: "next"
order: 7
lastUpdated: "2026-05-21"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — v2.1.139 ~ v2.1.142 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w20" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w20</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ 에이전트 뷰 — 모든 세션을 한 화면에서 `[공]` <span class="badge">리서치 프리뷰</span>

```bash
claude agents
```

> 🍱 **비유**: 여러 배달 기사가 동시에 배달하는 걸 한 화면 CCTV로 보는 것처럼 — 어떤 기사(세션)가 이동 중인지, 어떤 기사가 도착을 기다리는지(내 입력이 필요한지) 한눈에 확인해요.

클로드 코드를 여러 개 동시에 돌릴 때, 이제 `claude agents`를 치면 **모든 세션이 대시보드** 형태로 나타나요. 각 세션이 한 행(row)으로 보이고:

| 상태 표시 | 의미 |
|---|---|
| 실행 중 | 클로드가 현재 작업 중 |
| 입력 대기 | 내 응답이 필요함 |
| 완료 | 작업이 끝남 |

- 특정 행을 선택하면 그 세션의 **전체 대화**로 들어가요.
- `←` 키를 누르면 대시보드 목록으로 돌아와요.
- 대시보드에서 나와도 **백그라운드 세션은 계속 실행**돼요 — 터미널을 닫아도 진행 중이에요.

```bash
# 특정 디렉토리의 세션만 보기
claude agents --cwd /내/프로젝트/경로

# 백그라운드 세션 시작할 때 옵션 주기
claude agents --model claude-sonnet-4-6 --effort high
```

<div class="note-star">
★ <code>claude agents</code> 실행 시 쓸 수 있는 플래그들: <code>--add-dir</code>, <code>--settings</code>, <code>--mcp-config</code>, <code>--plugin-dir</code>, <code>--permission-mode</code>, <code>--model</code>, <code>--effort</code>, <code>--dangerously-skip-permissions</code>
</div>

---

### 2️⃣ /goal — 조건 충족까지 클로드가 자동으로 계속 `[공]` <span class="badge">v2.1.139</span>

```
> /goal all tests in test/auth pass and the lint step is clean
```

> 🍱 **비유**: 네비게이션처럼 — "목적지에 도착할 때까지"가 조건이면, 길이 막혀도 우회하고, 신호가 걸려도 기다리며 결국 목적지까지 데려다줘요. 매번 "다음 단계로 가도 돼?"라고 물어보지 않아요.

`/goal`에 **완료 조건**을 적으면, 클로드가 그 조건을 충족할 때까지 **자동으로 턴을 이어가요**.

**작동 방식**:
1. 내가 `/goal 조건문`을 입력
2. 클로드가 한 턴 작업
3. **빠른 모델이 조건 충족 여부 자동 확인**
4. 조건 미충족 → 클로드가 다음 턴 시작 (내 입력 없이)
5. 조건 충족 → 제어권 반환, goal 자동 해제

**언제 쓰면 좋나요?**
- 모듈 마이그레이션: "모든 호출부가 컴파일되고 테스트 통과"
- 버그 수정: "특정 테스트 파일의 실패가 0개"
- 린트 정리: "lint 오류 0개"

`interactive`, `-p`, Remote Control 모드 모두 지원해요. `[공]`

---

### 3️⃣ 패스트 모드 — 이제 Opus 4.7 기본 `[공]` <span class="badge">리서치 프리뷰</span>

```
> /fast
```

`/fast`(패스트 모드)가 이제 **Opus 4.6 대신 Opus 4.7**을 기본으로 써요.

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 기본 모델 | Opus 4.6 | **Opus 4.7** |
| 속도 | 약 2.5배 빠름 | 약 2.5배 빠름 (동일) |
| 가격 | $30/$150 per MTok | $30/$150 per MTok (동일) |

> 🍱 **비유**: 같은 빠른 배달 서비스인데, 배달 기사가 더 실력 좋은 시니어로 바뀐 것처럼 — 속도는 그대로, 퀄리티가 올라갔어요.

Opus 4.6으로 고정하고 싶다면:
```bash
export CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1
```

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **되감기 "여기까지 요약"** | Rewind 메뉴에 "Summarize up to here" 추가 — 최근 턴은 유지하고 이전 컨텍스트를 압축해요 |
| **훅 exec 실행** | `args: string[]` 형식으로 훅을 정의하면 쉘 없이 직접 실행 — 경로에 공백이 있어도 따옴표 없이 안전해요 |
| **continueOnBlock** | `PostToolUse` 훅에서 거부 이유를 클로드에게 전달하고 턴을 계속 이어갈 수 있어요 |
| **terminalSequence** | 훅 JSON 출력에 새 필드 추가 — 터미널 없이도 데스크톱 알림, 창 제목, 벨 소리 전송 가능 |
| **API 키 사용 시 자동 비활성화** | `ANTHROPIC_API_KEY` 등을 설정하면 Remote Control·/schedule·Claude.ai MCP 커넥터·알림 기능이 자동 꺼져요 |
| **MCP stdio 환경변수** | stdio 서버가 `CLAUDE_PROJECT_DIR` 환경변수를 받아요 (훅과 동일) |
| **플러그인 상세 정보** | `claude plugin details <이름>`으로 컴포넌트 목록과 예상 토큰 비용 확인 가능 |
| **SKILL.md 단독 인식** | `skills/` 폴더 없이 루트에 `SKILL.md`만 있어도 스킬로 인식해요 |
| **/feedback 세션 포함** | `/feedback` 작성 시 최근 24시간 또는 7일 세션을 함께 첨부할 수 있어요 |
| **subagent_type 대소문자 무관** | `"Code Reviewer"`나 `"code-reviewer"` 등 어떻게 써도 올바른 에이전트로 연결돼요 |

---

## 버전 정보

이번 주 업데이트: **v2.1.139 → v2.1.142** `[공]`

```bash
claude --version
```
