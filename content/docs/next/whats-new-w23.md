---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "AWS·Google·Microsoft 클라우드에서 Auto 모드 지원, acceptEdits 보호 경로 강화, /plugin list 명령어, 관리자 버전 제어"
tags: ["업데이트", "2026", "week23", "auto-mode", "bedrock", "vertex", "foundry", "plugin-list", "버전관리", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-25"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ AWS·Google·Microsoft 클라우드에서도 Auto 모드 사용 가능 🌐

**Auto 모드**(자동 모드)는 클로드가 허락 요청을 줄이고 알아서 처리하는 편한 모드예요. 이번 업데이트로 세 곳의 클라우드에서도 쓸 수 있게 됐어요.

- **Amazon Bedrock** (아마존 베드록)
- **Google Cloud Vertex AI** (구글 클라우드 버텍스)
- **Microsoft Foundry** (마이크로소프트 파운드리)

> 🍱 **비유**: 카드 결제기(Auto 모드)가 편의점에서만 됐는데, 이제 대형마트·백화점에서도 된다는 거예요. 기업에서 AWS나 Google Cloud 쓰는 분들도 Auto 모드를 이제 쓸 수 있어요.

**활성화 방법:**

```bash
export CLAUDE_CODE_ENABLE_AUTO_MODE=1
```

설정한 뒤 Claude Code에서 **Shift+Tab**을 누르면 Auto 모드로 전환돼요.

| 사용 가능 모델 | 클라우드 |
|---|---|
| Opus 4.7, Opus 4.8 | Amazon Bedrock |
| Opus 4.7, Opus 4.8 | Google Vertex AI |
| Opus 4.7, Opus 4.8 | Microsoft Foundry |

<div class="note-circle">
○ 회사 IT 팀에서 AWS·Google·Azure 통해 Claude Code 쓰는 경우 활성화해달라고 요청하세요<br />
○ 개인 Pro/Max 플랜은 기존대로 Auto 모드가 바로 사용 가능해요
</div>

📄 Auto 모드 자세히 → [Auto 모드 설정 가이드](/docs/advanced/auto-mode-config)

---

### 2️⃣ 중요한 설정 파일 실수로 수정되는 것 차단 🛡️

Claude가 파일을 수정할 때, **중요한 시스템 설정 파일**은 이제 자동으로 건드리지 않아요. "acceptEdits(자동 허용)" 모드에서도 이 파일들은 반드시 **직접 확인**을 받고 수정해요.

> 🍱 **비유**: 자동세차기(acceptEdits 모드)가 세차는 자동으로 하지만, 차 유리가 열려있으면 경고를 먼저 보내는 것과 같아요. 잘못 건드리면 큰일 날 파일은 항상 물어보고 수정해요.

**자동 수정이 차단되는 파일 예시:**

| 파일 종류 | 예시 |
|---|---|
| 터미널 시작 설정 | `.zshenv`, `.bash_login` |
| Git 설정 | `~/.config/git/` 내 파일 |
| 패키지 관리 설정 | `.npmrc`, `.bazelrc` |
| 커밋 전 검사 설정 | `.pre-commit-config.yaml` |

<div class="note-circle">
○ <code>bypassPermissions</code>(완전 자동) 모드에서는 여전히 자동 수정돼요 — 이 모드는 충분히 이해하고 쓰세요<br />
○ 공식 명칭: "Protected paths(보호 경로)"
</div>

---

### 3️⃣ `/plugin list` — 설치된 플러그인 바로 확인 🔌

플러그인 목록을 보려면 메뉴를 열어야 했는데, 이제 명령어 하나로 바로 확인할 수 있어요.

```bash
# 설치된 전체 플러그인 목록
/plugin list

# 켜진 플러그인만 보기
/plugin list --enabled

# 꺼진 플러그인만 보기
/plugin list --disabled

# 터미널(Claude Code 밖)에서도 사용 가능
claude plugin list
```

> 🍱 **비유**: 핸드폰 앱 목록을 보려면 설정 > 앱 관리로 들어가야 했는데, 이제 단축어 하나로 바로 목록이 뜨는 것과 같아요.

---

### 4️⃣ 기업 관리자용 — 허용 버전 범위 설정 🏢

여러 명이 함께 쓰는 회사 환경에서, 관리자가 **사용 가능한 Claude Code 버전 범위**를 지정할 수 있어요.

범위를 벗어난 버전은 시작 시 자동으로 종료되고 업데이트 안내를 보여줘요.

```json
// 관리 설정 파일 (managed-settings.json) 예시
{
  "requiredMinimumVersion": "2.1.163",
  "requiredMaximumVersion": "2.2.0"
}
```

<div class="note-circle">
○ 입문자 개인 사용에는 해당 없어요 — 회사 IT 관리자용 기능이에요<br />
○ <code>claude update</code>, <code>claude install</code>, <code>claude doctor</code>는 범위 제한과 무관하게 항상 작동해요
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| `ultracode` 키워드 | 다이나믹 워크플로 트리거 키워드가 `workflow` → `ultracode`로 변경됨 |
| Stop 훅 피드백 | Stop·SubagentStop 훅이 `additionalContext`로 Claude에게 피드백 전달 가능 |
| `claude mcp` 보안 강화 | list/get/add 명령어가 비밀번호·API키를 화면에 표시하지 않음 |
| Bash 병렬 실행 개선 | 병렬 명령 중 하나 실패해도 나머지는 계속 실행됨 |
| grep으로 본 파일 편집 | 단일 파일 grep 후 별도 Read 없이 바로 편집 가능 |
| 자동완성 명령어 클릭 | 클릭하면 실행 대신 프롬프트에 채워짐 (Enter로 실행) |
| `/effort` 알림 | 선택한 노력 레벨이 기본값으로 저장될 때 확인 메시지 표시 |
| Windsurf → Devin Desktop | IDE 이름 변경 반영 (`/ide`, `/terminal-setup` 등) |
| `/btw` 복사 단축키 | `c`를 누르면 마지막 응답 마크다운을 클립보드에 복사 |

<div class="note-circle">
○ Week 23 범위: Claude Code v2.1.158 ~ v2.1.165<br />
○ <code>ultracode</code> 키워드 변경: 기존 자연어로 "workflow 만들어줘"는 여전히 동작해요
</div>
