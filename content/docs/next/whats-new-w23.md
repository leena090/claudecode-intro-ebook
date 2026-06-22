---
title: "[공] 주간 업데이트: 2026년 6월 1~5일 (Week 23)"
description: "오토 모드가 AWS·Google Cloud·Azure로 확장, 위험 파일 자동 보호, /plugin list 명령어, ultracode 키워드 변경 — Week 23 핵심 4가지"
tags: ["업데이트", "2026", "week23", "auto-mode", "plugin-list", "ultracode", "protected-paths", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-22"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05), Claude Code v2.1.158 → v2.1.165. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ 오토 모드(Auto mode)가 AWS·Google Cloud·Azure에서도 🆕

**오토 모드(Auto mode)** 란 Claude가 파일을 수정하거나 명령을 실행할 때 일일이 허락을 구하는 대신, **백그라운드에서 안전성을 자동 검사**하면서 작업을 진행하는 방식이에요.

기존엔 Anthropic 직접 API를 쓸 때만 됐는데, 이제 **AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure Foundry**에서도 Opus 4.7·Opus 4.8 모델로 오토 모드를 쓸 수 있어요.

> 🍱 **비유**: 예전엔 본사에서만 쓸 수 있던 자동화 시스템이, 이제 지방 지점(AWS·Google·Azure)에서도 똑같이 쓸 수 있게 된 거예요.

#### 사용 방법

```bash
# 환경 변수 먼저 켜기 (한 번만 설정하면 돼요)
export CLAUDE_CODE_ENABLE_AUTO_MODE=1

# Claude 실행 후 Shift+Tab으로 오토 모드 전환
claude
```

| 상태 | 오토 모드 이전 | 오토 모드 이후 |
|------|-------------|-------------|
| 파일 수정 시 | "이 파일 수정할까요?" 매번 물음 | 백그라운드 검사 후 자동 진행 |
| 명령 실행 시 | 허락 요청 | 안전하면 자동 실행 |
| 위험 작업 시 | 허락 요청 | 여전히 허락 요청 (안전 보장) |

<div class="note-circle">
○ <a href="/docs/advanced/permission-modes">권한 모드(Permission Modes) 전체 설명</a> 참조
</div>

---

### 2️⃣ 위험한 파일은 자동 편집 모드에서도 항상 물어봐요 🔒

`acceptEdits`(자동 편집) 모드에서 작업 중일 때, Claude가 **위험할 수 있는 설정 파일들**은 이제 항상 먼저 물어보고 수정해요.

> 🍱 **비유**: 청소 로봇이 방을 알아서 청소하다가도, **중요 서류 봉투나 귀중품 근처는 건드리기 전에 꼭 주인한테 물어보는 거예요**.

#### 보호되는 파일 목록

| 파일 종류 | 예시 |
|---------|------|
| 셸 시작 파일 | `.zshenv`, `.bash_login` |
| Git 설정 | `~/.config/git/` 아래 모든 파일 |
| 패키지 설정 | `.npmrc`, `.bazelrc` |
| 커밋 훅 설정 | `.pre-commit-config.yaml` |

이 파일들은 `bypassPermissions` 모드가 아닌 이상, **어떤 자동 모드에서도 허락 없이 수정되지 않아요**.

---

### 3️⃣ `/plugin list` — 설치된 플러그인 한 번에 보기 📋

설치된 플러그인을 `/plugin` 메뉴를 열지 않고도 바로 목록으로 볼 수 있어요.

```text
# Claude Code 안에서
> /plugin list

# 켜진 것만 보기
> /plugin list --enabled

# 꺼진 것만 보기
> /plugin list --disabled
```

터미널에서도 바로 조회할 수 있어요:

```bash
# 터미널에서 (Claude 실행 없이)
claude plugin list
```

---

### 4️⃣ 동적 워크플로 트리거 키워드: `workflow` → `ultracode` ✨

[Dynamic Workflows(동적 워크플로)](/docs/advanced/dynamic-workflows)를 명시적으로 시작할 때 쓰는 특별 키워드가 **`workflow`에서 `ultracode`로 변경**됐어요.

> 🍱 **비유**: 전에는 마법 주문이 "아브라카다브라"였는데, 이제는 "수리수리마수리"로 바뀐 거예요 — 자연어로 말해도 Claude가 알아듣는 건 똑같아요.

```text
# 키워드를 앞에 붙이면 즉시 워크플로 시작
> ultracode — 전체 코드베이스에서 SQL 인젝션 취약점 감사해줘

# 자연어로 요청해도 돼요 (여전히 잘 작동해요)
> 전체 fetch() 호출을 새 HttpClient 방식으로 마이그레이션하는 워크플로 만들어줘
```

`ultracode` 키워드는 프롬프트에서 **보라색(violet)으로 강조**돼서 워크플로 모드가 활성화됐음을 바로 알 수 있어요.

---

## 기타 변경사항 요약

| 변경 내용 | 설명 |
|---------|------|
| Stop/SubagentStop 훅 개선 | 훅에서 `additionalContext` 반환으로 Claude에게 피드백 전달 가능 |
| `claude mcp` 보안 강화 | 환경변수·인증 헤더·URL 시크릿을 로그에 출력하지 않음 |
| 병렬 Bash 실패 격리 | 배치 실행 중 하나가 실패해도 나머지는 계속 실행 |
| 자동완성 클릭 동작 변경 | 자동완성 메뉴에서 클릭하면 입력창에 채워짐 (Enter 눌러야 실행) |
| `/effort` 알림 개선 | 선택한 레벨이 기본값으로 유지될 때 확인 메시지 표시 |
| Windsurf → Devin Desktop | `/ide`, `/terminal-setup`, `/scroll-speed`에서 편집기 이름이 변경됨 |
| `/btw` 클립보드 복사 | `c` 키로 마지막 답변 마크다운을 클립보드에 복사 가능 |
| OTEL 라벨 지원 | `OTEL_RESOURCE_ATTRIBUTES`가 메트릭 데이터포인트 라벨로 연결됨 |
| grep 후 편집 | `grep`/`egrep`/`fgrep`으로 파일 조회 후 별도 Read 없이 바로 편집 가능 |

---

<div class="note-circle">
○ 릴리즈: Claude Code <a href="https://code.claude.com/docs/en/changelog#2-1-158" target="_blank">v2.1.158 → v2.1.165</a><br />
○ 기간: 2026-06-01 ~ 2026-06-05<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">code.claude.com/docs/en/whats-new/2026-w23</a><br />
○ 연관: <a href="/docs/advanced/dynamic-workflows">Dynamic Workflows</a> · <a href="/docs/advanced/permission-modes">권한 모드</a> · <a href="/docs/next/whats-new-w24">Week 24 업데이트</a>
</div>
