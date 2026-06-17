---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 5일 (Week 23)"
description: "Bedrock·Vertex·Foundry에서 Auto mode 지원, acceptEdits 보호 경로 강화, /plugin list 신규 명령어, 버전 요구사항 관리 설정"
tags: ["업데이트", "2026", "week23", "auto-mode", "bedrock", "plugin-list", "acceptEdits", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-17"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w23</a>
</div>

## 이번 주 핵심 변경 (4개)

---

### 1️⃣ Bedrock·Vertex·Foundry에서도 Auto mode 사용 가능 🌐

이제 AWS Bedrock(베드록), Google Vertex AI(버텍스 AI), Azure Foundry(파운드리) 같은 **기업용 클라우드 환경에서도 Auto mode(오토 모드)를 쓸 수 있어요**.

> 🍱 **비유**: Auto mode는 "혼자 일하게 놔두되 위험한 건 본인이 판단해" 모드예요. 이전엔 Anthropic 직접 API에서만 됐는데, 이제 회사 서버(Bedrock/Vertex/Foundry)에서도 된다는 거예요 — 기업 직원들도 드디어 이 기능을 쓸 수 있게 됐어요.

**활성화 방법:**

```bash
# 환경변수 설정 (한 번만 하면 돼요)
export CLAUDE_CODE_ENABLE_AUTO_MODE=1

# 설정 후 Claude Code 실행
claude

# Shift+Tab 으로 모드 전환 (Normal → Auto → ...)
```

| 항목 | 내용 |
|------|------|
| 지원 모델 | Opus 4.7, Opus 4.8 |
| 지원 플랫폼 | AWS Bedrock, Google Vertex AI, Azure Foundry |
| 전환 방법 | `Shift+Tab` 으로 순환 |
| 환경변수 | `CLAUDE_CODE_ENABLE_AUTO_MODE=1` |

<div class="note-circle">
○ Bedrock·Vertex·Foundry 사용 중이면 이 환경변수가 없으면 Auto mode가 보이지 않아요<br />
○ Auto mode 자체 설명: <a href="/docs/config/admin-setup-guide">Auto mode 설정</a>
</div>

---

### 2️⃣ acceptEdits 모드에서 위험한 파일은 항상 물어봐요 🛡️

`acceptEdits`(어셉트에딧) 모드에서도 이제 **특정 파일을 수정하려 하면 반드시 승인을 물어봐요**. 이전엔 `acceptEdits`면 모든 파일 편집을 자동 허용했는데, 이번에 "보호 경로(protected paths)"라는 개념이 생겼어요.

> 🍱 **비유**: 집 청소를 도우미에게 맡겼어요(acceptEdits). 거실, 주방, 화장실은 자유롭게 청소해도 되지만 — **금고, 여권 서랍, 개인 일기장**은 "이것도 건드려요?" 라고 꼭 물어보게 한 거예요.

**보호되는 파일 목록:**

| 유형 | 예시 파일 |
|------|---------|
| 셸 시작 파일 | `.zshenv`, `.bash_login` |
| Git 설정 | `~/.config/git/` 아래 모든 파일 |
| 패키지 설정 | `.npmrc` |
| 빌드 도구 | `.bazelrc`, `.pre-commit-config.yaml` |

```bash
# acceptEdits 모드로 실행
claude --permission-mode acceptEdits

# 위 파일을 수정할 때 Claude가 이렇게 물어봐요:
# > .zshenv을 수정하려고 합니다. 승인하시겠어요? [Y/n]
```

<div class="note-circle">
○ <code>bypassPermissions</code>(바이패스퍼미션) 모드는 예외 — 이 모드에서는 보호 경로도 자동 승인돼요<br />
○ 보호 경로 전체 목록: <a href="https://code.claude.com/docs/en/permission-modes#protected-paths" target="_blank">공식 문서</a>
</div>

---

### 3️⃣ `/plugin list` — 설치된 플러그인 한눈에 확인 🔌

**`/plugin list`** 명령어가 새로 생겼어요. 플러그인 메뉴를 열지 않고도 지금 설치된 플러그인을 바로 볼 수 있어요.

```bash
# 전체 목록 보기
> /plugin list

# 활성화된 것만 보기
> /plugin list --enabled

# 비활성화된 것만 보기
> /plugin list --disabled

# 터미널(셸)에서도 사용 가능
claude plugin list
claude plugin list --enabled
```

> 🍱 **비유**: 냉장고에 뭐가 있는지 확인하려고 문을 활짝 열 필요 없이, "냉장고 목록 보여줘" 하면 문 열지 않고도 리스트를 딱 보여주는 거예요.

| 옵션 | 설명 |
|------|------|
| (없음) | 전체 플러그인 목록 |
| `--enabled` | 활성화된 플러그인만 |
| `--disabled` | 비활성화된 플러그인만 |

<div class="note-circle">
○ Claude Code v2.1.163 이상 필요<br />
○ 플러그인 설치: <a href="/docs/advanced/plugin-marketplace">플러그인 마켓플레이스</a>
</div>

---

### 4️⃣ 조직 배포 버전 요구사항 설정 (기업·팀용) 🏢

회사나 팀에서 Claude Code를 관리 배포할 때, **허용 버전 범위를 강제**할 수 있게 됐어요. 범위 밖의 버전은 시작 자체를 거부해요.

> 🍱 **비유**: 회사 IT팀이 "공식 지원 버전(2.1.163 이상)만 사용 가능, 너무 낮거나 너무 높은 버전은 실행 금지"라는 정책을 만들 수 있는 거예요. 오래된 버전 때문에 생기는 보안 구멍을 막을 수 있어요.

```json
// managed-settings.json (기업 관리자용 설정 파일)
{
  "requiredMinimumVersion": "2.1.163",
  "requiredMaximumVersion": "2.2.0"
}
```

| 설정 | 설명 |
|------|------|
| `requiredMinimumVersion` | 이 버전 **미만**이면 실행 거부 |
| `requiredMaximumVersion` | 이 버전 **초과**면 실행 거부 |

범위 밖 버전 실행 시 메시지가 뜨고, 사용자는 아래 명령으로 복구할 수 있어요:

```bash
claude update    # 업데이트
claude install   # 재설치
claude doctor    # 진단·수리
```

<div class="note-circle">
○ Claude Code v2.1.163 이상에서 동작<br />
○ 기업·팀 관리자용 기능 — 개인 사용자는 해당 없어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/admin-setup#decide-what-to-enforce" target="_blank">managed deployment 설정</a>
</div>

---

### ⚠️ 중요 변경: Dynamic Workflows 키워드가 바뀌었어요

**`workflow`** 트리거 키워드가 **`ultracode`** 로 변경됐어요.

| 항목 | 이전 (Week 22) | 현재 (Week 23~) |
|------|--------------|----------------|
| 명시적 키워드 | `workflow` | `ultracode` |
| 키워드 색상 | 표시 없음 | **보라색(violet)** 강조 |
| 자연어 요청 | ✅ 여전히 작동 | ✅ 여전히 작동 |

```bash
# 이전 방식 (여전히 자연어로 작동)
> "전체 코드베이스에서 보안 취약점 찾아 수정해줘"

# 명시적 키워드 사용 (새 방식)
> ultracode — 전체 fetch() 호출을 HttpClient로 마이그레이션해줘
```

> 🍱 **비유**: 카페에서 "아메리카노 주세요"라고 하면 알아서 주지만, "**아쑤**!"라고 외치면 바리스타가 "아, 특별 주문이구나" 하고 더 신경 써서 만드는 것처럼 — `ultracode`가 그 특별 주문 신호예요.

<div class="note-circle">
○ 이전의 <code>workflow</code> 키워드는 더 이상 자주색으로 강조되지 않아요<br />
○ 자연어 요청(예: "전체 코드 리팩토링 워크플로 만들어줘")은 계속 작동해요<br />
○ Dynamic Workflows 자세히: <a href="/docs/advanced/dynamic-workflows">Dynamic Workflows 가이드</a>
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|------|------|
| Stop·SubagentStop 훅 | `hookSpecificOutput.additionalContext` 반환 → Claude에게 피드백 전달·작업 계속 가능 |
| `claude mcp` 명령 | 환경변수 시크릿·인증 헤더·URL 시크릿 자동 가리기 |
| 병렬 도구 실패 | 하나가 실패해도 나머지 도구는 계속 실행 (이전엔 전체 취소) |
| grep으로 본 파일 | 단일 파일 `grep`·`egrep`·`fgrep`으로 본 파일은 별도 Read 없이 편집 가능 |
| 자동완성 클릭 | 클릭 → 프롬프트에 채워짐 (바로 실행 안 됨, Enter 눌러야 실행) |
| `/effort` | 기본값 설정 시 "이 레벨이 새 세션의 기본값으로 설정됩니다" 확인 메시지 표시 |
| `OTEL_RESOURCE_ATTRIBUTES` | 메트릭 데이터에 팀·저장소 같은 커스텀 레이블 추가 가능 |
| Windsurf → Devin Desktop | `/ide`, `/terminal-setup`, `/scroll-speed`에서 이름 변경됨 |
| `/btw` 단축키 | `c`를 누르면 마지막 답변을 클립보드에 복사 |

---

<div class="note-circle">
○ Week 23 범위: Claude Code v2.1.158 ~ v2.1.165<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">code.claude.com/docs/en/whats-new/2026-w23</a>
</div>
