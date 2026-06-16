---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "Bedrock·Vertex에서 Auto Mode 사용, 실수로 셸 설정 파일 덮어쓰는 사고 방지, /plugin list 신규 명령어, 관리형 배포 버전 고정"
tags: ["업데이트", "2026", "week23", "auto-mode", "bedrock", "plugin-list", "protected-paths", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-16"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ 설정 파일을 건드리기 전엔 꼭 물어봐요 — 보호 경로(Protected Paths) 🛡️

지금까지는 `acceptEdits` 모드(자동 수락 모드)에서 Claude가 파일을 수정할 때 물어보지 않았어요. 그런데 `.zshenv`나 `.npmrc` 같은 **시스템 설정 파일**을 Claude가 실수로 바꿔버리면… 터미널이 안 열리거나 패키지 설치가 망가지는 심각한 사고가 생길 수 있었죠.

이제부터는 **아무리 자동 모드여도** 이런 민감한 파일은 Claude가 수정 전에 꼭 확인을 요청해요.

**보호되는 파일 목록 (Protected Paths):**

| 파일/경로 | 설명 |
|-----------|------|
| `.zshenv`, `.bash_login` 등 | 터미널 시작 시 자동 실행되는 셸 설정 파일 |
| `~/.config/git/` | Git 전역 설정 폴더 |
| `.npmrc` | Node.js 패키지 설정 |
| `.bazelrc` | Bazel 빌드 설정 |
| `.pre-commit-config.yaml` | 커밋 전 자동 검사 설정 |

> 🍱 **비유**: 집을 청소해주는 도우미한테 "다 알아서 해줘"라고 했어도, 금고나 중요 서류함은 혼자 열지 않고 먼저 물어보는 것과 같아요. Claude도 이제 중요한 파일은 혼자 건드리지 않아요.

<div class="note-circle">
○ <code>bypassPermissions</code> 모드에서만 보호 경로도 자동 승인돼요 (일반 사용자는 해당 없음)<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permission-modes#protected-paths" target="_blank">Protected paths</a>
</div>

---

### 2️⃣ `/plugin list` — 지금 뭐가 설치돼 있지? 🔌

설치된 플러그인(plugin)을 확인하려면 이제 `/plugin` 메뉴를 열지 않아도 돼요. 새 명령어 **`/plugin list`** 로 바로 목록을 볼 수 있어요.

```text
> /plugin list
> /plugin list --enabled
> /plugin list --disabled
```

셸에서도 쓸 수 있어요:

```bash
claude plugin list
```

| 옵션 | 설명 |
|------|------|
| `/plugin list` | 전체 플러그인 목록 |
| `/plugin list --enabled` | 활성화된 것만 |
| `/plugin list --disabled` | 비활성화된 것만 |

> 🍱 **비유**: 스마트폰 앱 목록을 보려면 홈 화면을 뒤지는 대신 설정 → 앱 관리 로 한 번에 볼 수 있는 것과 같아요. `/plugin list`가 그 역할이에요.

---

### 3️⃣ Auto Mode, 이제 AWS·Google Cloud에서도 🌐

**Auto Mode(오토 모드)** 는 Claude가 작업 중간에 "이거 해도 돼요?" 하고 물어보지 않고 스스로 판단해서 진행하는 모드예요. 지금까지는 Claude의 직접 API에서만 쓸 수 있었는데, 이제 **AWS Bedrock, Google Cloud Vertex AI, Azure Foundry**에서도 사용할 수 있어요.

```bash
# 환경변수 하나로 활성화
export CLAUDE_CODE_ENABLE_AUTO_MODE=1

# 그 다음 Shift+Tab으로 모드 전환
```

<div class="note-circle">
○ Opus 4.7·Opus 4.8 모델에서 지원<br />
○ 기업에서 AWS·GCP로 Claude Code를 운영 중이라면 이제 Auto Mode 가능<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permission-modes#enable-auto-mode-on-bedrock-vertex-ai-or-foundry" target="_blank">Enable auto mode on third-party providers</a>
</div>

---

### 4️⃣ 버전 잠금 — 회사 전체 Claude Code 버전 통일 (관리자용) 🔒

기업/팀 관리자라면 이제 **직원들이 쓰는 Claude Code 버전을 범위로 고정**할 수 있어요. 너무 오래된 버전이나 아직 테스트 안 된 최신 버전을 막는 데 유용해요.

```json
// managed-settings.json
{
  "requiredMinimumVersion": "2.1.163",
  "requiredMaximumVersion": "2.1.170"
}
```

범위 밖 버전을 쓰는 직원이 Claude Code를 실행하면 시작 시 오류 메시지와 함께 종료돼요. `claude update`·`claude install`·`claude doctor` 명령은 범위 밖이어도 계속 작동해서 업데이트는 할 수 있어요.

> 🍱 **비유**: 회사 보안 정책으로 "인터넷 익스플로러 11 이상, Chrome 120 이하만 허용"처럼 브라우저 버전을 통제하는 것과 같아요.

<div class="note-circle">
○ 개인 사용자에게는 해당 없는 기능이에요 (기업 관리자 대상)<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/admin-setup#decide-what-to-enforce" target="_blank">Decide what to enforce</a>
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|------|------|
| `workflow` → `ultracode` 키워드 변경 | Dynamic Workflows 트리거 키워드가 바뀌었어요. 이전 방식("make a workflow for...")도 여전히 작동해요 |
| 병렬 도구 오류 독립 처리 | 여러 도구를 동시에 실행할 때 하나가 실패해도 나머지는 계속 실행돼요 |
| `grep`으로 본 파일 바로 편집 | 이제 `grep`으로 파일을 조회했다면 별도 Read 없이 바로 수정할 수 있어요 |
| 자동완성 클릭 동작 변경 | 자동완성 메뉴에서 명령어를 클릭하면 바로 실행 대신 입력창에 채워져요 (Enter로 실행) |
| `/effort` 알림 추가 | 선택한 노력 레벨이 기본값으로 저장될 때 확인 메시지가 표시돼요 |
| Windsurf → Devin Desktop | `/ide` 등에서 편집기 이름이 변경됐어요 (회사 리브랜딩) |
| `claude mcp` 비밀 정보 보호 | `claude mcp list/get/add` 명령에서 API 키·비밀번호가 더 이상 출력되지 않아요 |

---

<div class="note-circle">
○ Week 23 범위: Claude Code v2.1.158 ~ v2.1.165<br />
○ 기간: 2026년 6월 1일 ~ 5일
</div>
