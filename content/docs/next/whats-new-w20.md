---
title: "[공] 주간 업데이트: 2026년 5월 11일 ~ 15일 (Week 20)"
description: "claude agents로 모든 세션 한눈에 관리, /goal로 목표 달성까지 자동 실행, Fast Mode가 Opus 4.7 기본값으로"
tags: ["업데이트", "2026", "week20", "agent-view", "goal", "fast-mode", "자동생성"]
category: "next"
order: 6
lastUpdated: "2026-05-24"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — v2.1.139 ~ v2.1.142 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w20" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w20</a>
</div>

## 이번 주 핵심 변경 (3가지)

---

### 1️⃣ Agent View — 모든 세션을 한 화면에서 관리

```bash
claude agents
```

> 🍱 **비유**: 여러 직원이 각자 다른 방에서 일하고 있을 때, 사장님이 각 방을 따로 들러봐야 했다면 — 이제는 **CCTV 모니터처럼** 한 화면에서 누가 일하고, 누가 지시를 기다리고, 누가 끝났는지 한눈에 볼 수 있어요.

**리서치 프리뷰** 기능이에요. 지금 실행 중인 모든 Claude Code 세션을 목록으로 보여줘요:

| 상태 | 의미 |
|------|------|
| 진행 중 | Claude가 혼자 작업 중 |
| 입력 대기 | Claude가 내 결정을 기다리는 중 |
| 완료 | 작업 끝 |

```bash
claude agents                 # 전체 세션 대시보드 열기
claude agents --cwd ./myapp   # 특정 폴더의 세션만 보기
```

대시보드에서 **각 세션(행)에 접속하면** 그 대화로 들어가서 직접 대화할 수 있고, `←` 키를 누르면 다시 목록으로 돌아와요. 터미널을 닫아도 백그라운드 세션은 계속 실행 중이에요. `[공]`

새 세션을 시작할 때도 플래그를 붙일 수 있어요:

```bash
# 특정 설정·모델로 백그라운드 세션 실행
claude agents --model claude-opus-4-7 --settings ./team.json
```

---

### 2️⃣ /goal — "조건 충족될 때까지 계속 작업해"

```
/goal all tests in test/auth pass and the lint step is clean
```

> 🍱 **비유**: "숙제 다 할 때까지 나오지 마"라고 방에 들여보내면 아이가 스스로 끝낼 때까지 반복하는 것처럼, Claude도 목표 조건을 주면 **조건이 충족될 때까지 스스로 계속 작업**해요.

**사용법:**

```
/goal 달성 조건을 영어로 씁니다
```

예시:

```
# 로그인 테스트 전체 통과할 때까지
/goal all tests in test/auth pass

# 린트(코드 스타일 검사) 오류 0개까지
/goal npm run lint returns zero errors

# 빌드 결과물이 생성될 때까지
/goal dist/bundle.js exists
```

매 작업 턴이 끝날 때마다 **빠른 모델이 조건 충족 여부를 자동 확인**해요. 아직 안 됐으면 다음 작업을 시작하고, 충족되면 멈춰요. `[공]`

**언제 유용할까요?**

- 테스트 전체를 통과시켜야 할 때 (코드 고침 → 실행 → 실패 → 다시 고침... 반복)
- 린트 오류를 모두 없애야 할 때
- 특정 파일이나 폴더가 만들어질 때까지 기다려야 할 때

---

### 3️⃣ Fast Mode → Opus 4.7 기본값으로 업그레이드

`/fast`를 켜면 이제 **Opus 4.7** (이전: Opus 4.6)로 실행돼요.

> 🍱 **비유**: 같은 요금으로 예전엔 작년 모델 렌터카를 줬다면, 이제 올해 최신 모델을 빌려줘요. 가격은 그대로인데 차가 더 좋아졌어요.

```
/fast       ← 이제 Opus 4.7 빠른 버전으로 실행돼요
```

**변경된 내용:**

| 항목 | 이전 | 이후 |
|------|------|------|
| `/fast` 기본 모델 | Opus 4.6 | **Opus 4.7** |
| 속도 | 약 2.5배 빠름 | 동일 (약 2.5배) |
| 가격 | $30/$150 per MTok | **동일** |

Opus 4.6으로 고정하고 싶으면 환경변수를 설정하면 돼요:

```bash
export CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE=1
```

`[공]`

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **`claude agents` 실행 옵션** | `--add-dir`, `--settings`, `--mcp-config`, `--model`, `--effort` 등으로 백그라운드 세션 세부 설정 가능 |
| **훅 — 쉘 없이 직접 실행** | `args: string[]` 형식으로 셸을 거치지 않고 명령어를 직접 실행, 경로에 따옴표 불필요 |
| **훅 — 차단 시 대화 계속** | `continueOnBlock` 옵션을 켜면 훅이 거절해도 이유를 Claude에게 전달하고 대화를 이어가요 |
| **Rewind — "여기까지 요약"** | 대화를 되감을 때 오래된 부분은 요약하고 최근 것만 남길 수 있어요 |
| **API 키 사용 시 일부 기능 비활성화** | `ANTHROPIC_API_KEY`를 설정하면 Remote Control, `/schedule`, claude.ai MCP 커넥터 자동 비활성화 |
| **MCP — 프로젝트 경로 자동 전달** | MCP 서버에 `CLAUDE_PROJECT_DIR` 환경변수가 자동으로 전달돼요 |
| **플러그인 상세 보기** | `claude plugin details <이름>` 명령어로 플러그인 구성과 예상 토큰 비용 확인 가능 |
| **/feedback 히스토리 포함** | 피드백 보낼 때 최근 24시간이나 7일간의 세션도 포함 가능 |
| **에이전트 타입 대소문자 무시** | `"Code Reviewer"` → `code-reviewer` 자동 변환돼요 |

---

## 버전 정보

이번 주 업데이트: **v2.1.139 → v2.1.142** `[공]`

버전 확인:
```bash
claude --version
```
