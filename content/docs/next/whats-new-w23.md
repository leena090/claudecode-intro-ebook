---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "Bedrock·Vertex·Foundry에서 Auto Mode 지원, 위험 파일 자동 보호, /plugin list 명령어, 버전 정책 강제"
tags: ["업데이트", "2026", "week23", "auto-mode", "bedrock", "vertex", "plugin-list", "safe-edits", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-20"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ Bedrock · Vertex · Foundry에서도 Auto Mode 사용 가능 🌐

**Auto Mode(오토 모드)** 가 Anthropic 직접 API뿐 아니라 **클라우드 서비스를 통해 Claude를 쓰는 경우에도 사용 가능**해졌어요.

지원 환경:
- **Amazon Bedrock(베드락)** — AWS를 통해 Claude 사용하는 경우
- **Google Cloud Vertex AI(버텍스)** — GCP를 통해 사용하는 경우
- **Microsoft Foundry(파운드리)** — Azure를 통해 사용하는 경우

```bash
# 환경변수 설정으로 활성화 (기업 환경 등 서드파티 제공자용)
export CLAUDE_CODE_ENABLE_AUTO_MODE=1

# 그 다음 Shift+Tab 으로 Auto Mode 전환
```

> 🍱 **비유**: 이전에는 Anthropic 본사 식당에서만 "셀프 서비스(자동 모드)"를 쓸 수 있었는데, 이제 프랜차이즈 가맹점(Bedrock·Vertex·Foundry)에서도 같은 서비스가 돼요.

<div class="note-circle">
○ Opus 4.7·Opus 4.8 모두 지원<br />
○ 기존 Auto Mode처럼 권한 확인 대신 백그라운드 안전 검사로 작동<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permission-modes#enable-auto-mode-on-bedrock-vertex-ai-or-foundry" target="_blank">서드파티 Auto Mode 활성화</a>
</div>

---

### 2️⃣ 위험한 파일은 자동 편집에서 자동 보호 🛡️

**acceptEdits(자동 수락) 모드**에서 작업하더라도, **실행 코드가 담긴 특수 파일은 Claude가 쓰기 전에 반드시 물어보도록** 바뀌었어요.

**보호되는 파일 예시:**

| 파일 유형 | 예시 경로 |
|-----------|-----------|
| 셸 시작 파일 | `.zshenv`, `.bash_login` |
| Git 설정 | `~/.config/git/` 하위 모든 파일 |
| npm 설정 | `.npmrc` |
| Bazel 빌드 설정 | `.bazelrc` |
| pre-commit 훅 | `.pre-commit-config.yaml` |

```bash
# acceptEdits 모드로 실행해도
claude --permission-mode acceptEdits

# 위 보호 파일들은 여전히 "쓸까요?" 라고 물어봐요
```

> 🍱 **비유**: 청소 로봇이 방 청소는 자동으로 하더라도, 금고 앞에 오면 꼭 주인에게 물어보는 것과 같아요. 방(일반 코드 파일)은 알아서 치우지만, 금고(시스템 설정 파일)는 허락 없이 손대지 않아요.

<div class="note-circle">
○ <code>bypassPermissions</code> 모드에서만 이 보호가 비활성화돼요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permission-modes#protected-paths" target="_blank">Protected paths 목록</a>
</div>

---

### 3️⃣ /plugin list — 설치된 플러그인 한 눈에 확인 📋

새 명령어 `/plugin list`로 **현재 설치된 플러그인 목록을 바로** 볼 수 있어요. 메뉴를 열지 않아도 돼요.

```bash
# 모든 설치된 플러그인 보기
> /plugin list

# 활성화된 플러그인만 보기
> /plugin list --enabled

# 비활성화된 플러그인만 보기
> /plugin list --disabled

# 터미널(셸)에서도 사용 가능
claude plugin list
```

> 🍱 **비유**: 냉장고 문을 열지 않고도 "냉장고 재고 보기" 버튼을 누르면 뭐가 들었는지 바로 보이는 것과 같아요.

---

### 4️⃣ 기업 배포용 — Claude Code 버전 범위 강제 🏢

**관리형 배포(managed deployments)** 환경에서 조직 관리자가 **허용되는 Claude Code 버전 범위를 지정**할 수 있게 됐어요.

```json
// managed-settings.json (관리자 설정 파일)
{
  "requiredMinimumVersion": "2.1.163",   // 이 버전 미만이면 시작 안 됨
  "requiredMaximumVersion": "2.2.0"       // 이 버전 초과도 차단 가능
}
```

**범위를 벗어난 버전이 설치된 사용자는?**
- 시작 시 "업데이트 필요" 메시지 표시
- `claude update`, `claude install`, `claude doctor` 명령어는 계속 사용 가능

> 🍱 **비유**: 회사 내부 시스템에 접속할 때 "이 앱은 구버전입니다. 최신 버전을 설치해야 사용할 수 있습니다"라고 뜨는 것과 같아요. 너무 오래된 버전도, 검증 안 된 최신 버전도 차단할 수 있어요.

<div class="note-circle">
○ 개인 사용자에게는 해당 없음 — 기업 관리형 배포용<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/admin-setup#decide-what-to-enforce" target="_blank">관리 설정 강제 옵션</a>
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|------|------|
| Dynamic Workflows 트리거 | `workflow` 키워드 → **`ultracode`** 로 변경 (보라색으로 강조 표시됨) |
| Stop·SubagentStop 훅 | `additionalContext`를 반환하면 오류 대신 Claude에게 피드백으로 전달돼 작업 계속 가능 |
| `claude mcp` 보안 강화 | 환경변수 참조 값·자격증명 헤더·URL 내 시크릿이 목록에서 자동 가려짐 |
| 병렬 Bash 실패 처리 | 병렬 실행 중 한 도구가 실패해도 나머지는 독립적으로 계속 진행 |
| grep 후 편집 | 단일 파일 `grep`/`egrep`/`fgrep` 결과를 본 후에는 별도 Read 없이 바로 편집 가능 |
| 자동완성 클릭 동작 변경 | 자동완성 목록에서 클릭 → 즉시 실행 대신 프롬프트에 채워짐 (Enter로 실행) |
| `/effort` 알림 | 선택한 레벨이 새 세션 기본값으로 저장될 때 확인 메시지 표시 |
| OTEL 메트릭 라벨 | `OTEL_RESOURCE_ATTRIBUTES` 값이 메트릭 데이터포인트에 라벨로 붙어 팀·레포 별 사용량 분석 가능 |
| Windsurf → Devin Desktop | `/ide`, `/terminal-setup`, `/scroll-speed`에서 편집기 이름 업데이트 |
| `/btw` `c` 단축키 | `c`를 누르면 마크다운 답변 전체를 클립보드에 복사 |

---

<div class="note-circle">
○ Week 23 범위: Claude Code v2.1.158 ~ v2.1.165<br />
○ Dynamic Workflows 키워드 변경(`workflow` → `ultracode`)은 워크플로를 사용하고 있다면 주의
</div>
