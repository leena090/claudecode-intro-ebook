---
title: "권한 모드 완전 정리 — default·acceptEdits·plan·auto·bypass"
description: "Shift+Tab 한 번이면 클로드의 작업 스타일이 바뀐다. 파일 수정할 때마다 물어볼지, 알아서 할지, 감시 없이 다 맡길지 — 5가지 모드를 비유로 정리"
tags: ["고급", "permission mode", "권한 모드", "auto", "오토 모드", "acceptEdits", "plan mode", "bypassPermissions", "shift+tab", "dangerously skip"]
category: "advanced"
order: 20
lastUpdated: "2026-08-26"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — <code>Shift+Tab</code>으로 <strong>default → acceptEdits → plan</strong> 순환. 계정 조건을 만족하면 <strong>auto</strong>까지, 플래그로 켜면 <strong>bypassPermissions</strong>까지 나와요. <code>[공식]</code>
<br />★ <strong>2026-08-14 중요 변경 🆕</strong> — <code>auto</code> 모드가 Pro·Max·Team 플랜에서 <strong>기본 권한 모드</strong>가 됐어요! 이제 새 세션을 시작하면 auto mode가 기본으로 켜져 있어요. <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 공식 문서</a>
<br />★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/permission-modes">code.claude.com/docs/en/permission-modes</a>
</div>

<div class="note-star" style="border-color: #3182ce; background: #ebf8ff; margin-top: 8px;">
🔔 <strong>[공] 2026-08-14부터 auto mode가 기본값</strong><br />
이전에는 <code>default</code> 모드로 시작했지만, 이제 Pro·Max·Team 플랜의 새 세션은 <strong>auto mode</strong>로 시작해요.<br />
이전에 직접 설정한 모드가 있으면 그대로 유지돼요. 조직 관리 설정도 유지.<br />
auto mode의 AI 분류기 API 호출이 이제 <strong>사용량 한도에서 제외</strong>돼요.
</div>

## 권한 모드가 뭔가요?

클로드가 **파일 수정하거나 명령어를 실행할 때 얼마나 자주 나한테 물어볼지** 결정하는 설정이에요. 같은 작업이라도 모드에 따라 흐름이 완전히 달라져요.

> 🍱 **비유로 설명하면**: 인턴을 새로 뽑았다고 쳐봐요.
> - **default** → "커피 한 잔 내릴 때도 저한테 물어보세요" (초반 일주일)
> - **acceptEdits** → "문서 수정은 알아서, 결제 관련만 물어보세요" (일 좀 익숙해진 후)
> - **plan** → "계획만 짜오세요. 실행은 제 허락받고" (큰 프로젝트 시작 전)
> - **auto** → "알아서 일하세요. 대신 안전 체크 담당자가 옆에 있어요" (신뢰 단계)
> - **bypassPermissions** → "다 알아서 해. 대신 격리된 실험실에서만" (다 맡기는 단계)

---

## 5가지 모드 한눈에 비교

| 모드 | 물어보지 않고 실행하는 것 | 언제 쓰면 좋아요? |
|---|---|---|
| **`default`** | 읽기만 | 처음, 민감한 작업 |
| **`acceptEdits`** | 읽기 + **파일 수정** + mkdir/touch/mv/cp/rm 같은 기본 명령 | 내가 옆에서 `git diff`로 검토하는 흐름 |
| **`plan`** | 읽기만 (수정·실행 X) | 코드베이스 먼저 훑고 플랜 짜기 |
| **`auto`** ⭐NEW | **거의 모든 것** (백그라운드 안전 체크 있음) | 긴 작업, 프롬프트 피로 줄이기 |
| **`dontAsk`** | 미리 승인된 도구만 | CI·스크립트처럼 자동화 파이프라인 |
| **`bypassPermissions`** | **전부** (보호 경로 제외) | 컨테이너·VM 같은 격리 환경 전용 |

어떤 모드에서도 **보호 경로**(`.git`, `.claude`, `.vscode` 등)는 자동 승인되지 않아요. 안전장치.

---

## 모드 전환 방법 — 3가지

### 방법 1: 세션 중에 `Shift+Tab`

가장 많이 쓰는 방법.

```
Shift+Tab 한 번 → acceptEdits (화면에 "⏵⏵ accept edits on")
Shift+Tab 두 번 → plan ("⏸ plan mode on")
Shift+Tab 세 번 → default로 복귀
```

> 🍱 **비유로 설명하면**: 자동차 기어 레버 같아요. D → S → M 식으로 순환.

### 방법 2: 시작할 때 플래그로

```bash
# Mac 터미널 / Windows PowerShell
claude --permission-mode plan
claude --permission-mode acceptEdits
claude --permission-mode dontAsk
claude --permission-mode bypassPermissions
```

`bypassPermissions`는 단축 플래그도 있어요:

```bash
claude --dangerously-skip-permissions
```

### 방법 3: 기본값으로 영구 설정

```json
// ~/.claude/settings.json 또는 .claude/settings.json
{
  "permissions": {
    "defaultMode": "acceptEdits"
  }
}
```

---

## 모드별 상세 — 언제 어떻게 쓰나

### 1️⃣ `default` — 매번 물어보는 기본 모드

- **허용**: 파일 읽기, 안전한 조회 명령 (`ls`, `cat`, `grep` 등)
- **차단**: 파일 수정·쓰기, 실행성 Bash, 네트워크 요청 — **매번 묻습니다**
- **언제?** 낯선 프로젝트 첫 접속, 민감한 운영 코드 다룰 때

> 🍱 **비유로 설명하면**: 신입 인턴 첫날. 하나하나 보고받고 싶을 때.

### 2️⃣ `acceptEdits` — 수정은 알아서, 나는 `git diff`로 확인

- **허용**: 파일 생성/수정 + `mkdir` `touch` `rm` `rmdir` `mv` `cp` `sed`
- **제한**: 작업 디렉토리(또는 `additionalDirectories`) 안에서만
- **언제?** 내가 편집기·`git diff`로 사후 검토하는 스타일

화면 상태 표시: `⏵⏵ accept edits on`

### 3️⃣ `plan` — 읽기만, 분석·설계 모드

- **허용**: 읽기·탐색 명령
- **차단**: 어떤 수정도 못 함. 플랜만 작성
- **언제?** 레거시 코드 이해, 대형 리팩토링 설계 전

`Shift+Tab`으로 진입하거나:

```bash
claude --permission-mode plan
# 또는 단일 프롬프트만 plan 모드로
> /plan 결제 시스템 전체 흐름 설명해줘
```

플랜 완료 후 선택지: `auto로 실행 / acceptEdits로 실행 / 하나씩 승인 / 플래닝 계속 / Ultraplan으로 다듬기`

### 4️⃣ `auto` ⭐ 2026 NEW — 물어보진 않되, 안전 체크는 해요

<div class="note-star">
★ <strong>Research Preview</strong> — Claude Code v2.1.83 이상 필수.
<br />★ 완전한 신뢰가 아니라 <strong>"별도 분류 모델이 백그라운드에서 감시"</strong>하는 구조예요. 위험해 보이는 액션은 자동 차단.
</div>

- **허용**: 거의 모든 것
- **안전장치**: 별도 분류 모델이 각 액션을 평가 → 위험하면 차단

**자동 차단되는 것들**:
- `curl | bash` 같은 외부 코드 다운로드+실행
- 민감한 데이터를 외부 엔드포인트로 전송
- 프로덕션 배포·마이그레이션
- 클라우드 저장소 대량 삭제
- IAM·리포지토리 권한 부여
- Force push, `main`으로 직접 푸시

**기본 허용**:
- 작업 디렉토리 내 파일 작업
- 락 파일·매니페스트에 선언된 의존성 설치
- `.env` 읽어서 매칭되는 API로 보내기
- 읽기 전용 HTTP 요청
- 현재 브랜치나 클로드가 만든 브랜치로 push

**필요 조건** (하나라도 안 맞으면 사용 불가):
- **요금제**: Max / Team / Enterprise / API (**Pro는 불가**)
- **관리자**: Team·Enterprise는 관리자가 먼저 활성화해야 함
- **모델**: Sonnet 4.6 / Opus 4.6 / Opus 4.7 (Max는 **Opus 4.7만**)
- **제공자**: Anthropic API만 (Bedrock·Vertex·Foundry 불가)

<div class="note-star">
★ <strong>v2.1.113 업데이트</strong>: Max 구독자가 Opus 4.7 모델을 사용할 때는 <code>--enable-auto-mode</code> 플래그를 따로 넣지 않아도 auto 모드를 쓸 수 있어요. 이전에는 플래그를 직접 붙여야 했지만 이제 Shift+Tab으로 바로 전환됩니다.
</div>

**대화 속 경계선도 지켜줘요**: "push 하지 마", "배포는 내가 검토한 후에" 같은 말을 전체 전환 기록에서 재확인해서 막아줍니다.

**3번 연속 차단되거나 총 20번 차단되면** 자동으로 default처럼 물어보는 모드로 폴백.

### 5️⃣ `dontAsk` — 미리 승인한 것만, 나머진 다 거부

- **허용**: `permissions.allow` 규칙에 매칭되는 것 + 읽기 전용 Bash
- **거부**: 그 외 전부 (질문 없이 차단)
- **언제?** CI 파이프라인, 제한된 환경의 스크립트

```bash
claude --permission-mode dontAsk
```

### 6️⃣ `bypassPermissions` — 모든 체크 스킵 (위험)

<div class="note-star">
★ ⚠️ <strong>이 모드는 정말 위험</strong> — 보호 경로만 빼고 다 실행해요. 프롬프트 인젝션 방어도 없습니다.
<br />★ <strong>컨테이너·VM·devcontainer처럼 격리된 환경에서만</strong> 쓰세요.
<br />★ 관리자는 <code>permissions.disableBypassPermissionsMode: "disable"</code>로 조직 차원에서 차단할 수 있어요.
</div>

```bash
# 둘 다 같은 효과
claude --permission-mode bypassPermissions
claude --dangerously-skip-permissions
```

---

## 보호 경로 — 어떤 모드에서도 자동 승인 안 돼요

이 경로에 쓰는 건 **모든 모드에서 방어**돼요 (auto는 분류기로, 나머진 프롬프트로):

**보호 디렉토리**:
- `.git`, `.vscode`, `.idea`, `.husky`
- `.claude` (단, `.claude/commands`, `.claude/agents`, `.claude/skills`, `.claude/worktrees`는 예외 — 클로드가 자주 쓰니까)

**보호 파일**:
- `.gitconfig`, `.gitmodules`
- `.bashrc`, `.bash_profile`, `.zshrc`, `.zprofile`, `.profile`
- `.ripgreprc`, `.mcp.json`, `.claude.json`

---

## 실전 시나리오 — 어떤 모드를 언제?

### 시나리오 1: 내가 처음 본 레거시 코드

→ `Shift+Tab` 두 번 → **plan 모드** → 구조 파악하고 리팩토링 전략 세우기.

### 시나리오 2: 기능 하나 구현 중, 내가 옆에서 리뷰

→ `Shift+Tab` 한 번 → **acceptEdits** → 클로드가 파일 고치고, 나는 `git diff`로 확인.

### 시나리오 3: 새벽에 긴 리팩토링 돌리고 자고 싶어

→ **auto 모드** (계정 조건 충족 시) → "보호 경로 못 건드리고, 위험 액션은 자동 차단".

### 시나리오 4: devcontainer에서 실험

→ `claude --dangerously-skip-permissions` → **bypassPermissions**, 아무것도 안 물어봄.

### 시나리오 5: CI 파이프라인에서 자동 테스트 리뷰

→ `claude --permission-mode dontAsk -p "..."` → 미리 allow 리스트에 올린 도구만 실행, 나머진 거부.

---

## 헷갈리기 쉬운 점

### Q1. `bypassPermissions`와 `auto` 차이가 뭐예요?

| | `bypassPermissions` | `auto` |
|---|---|---|
| **안전 체크** | ❌ 없음 | ✅ 분류 모델이 감시 |
| **프롬프트 인젝션 방어** | ❌ 없음 | ✅ 있음 |
| **전제 환경** | 격리 환경 필수 | 일반 개발 환경 OK |
| **요구 조건** | 플래그로 켜기만 | 계정·모델·플랜 조건 있음 |

→ 대부분은 `bypassPermissions` 대신 **`auto`를 써야** 합니다. 안전 체크가 있으니까요.

### Q2. `Shift+Tab`을 눌러도 `auto`·`bypassPermissions`가 안 나와요

기본 순환에는 `default → acceptEdits → plan`만 포함돼요.
- `auto`: 계정 요구 조건 다 맞으면 자동 추가
- `bypassPermissions`: `--permission-mode bypassPermissions` 또는 `--allow-dangerously-skip-permissions`로 시작해야 순환에 편입

### Q3. 관리자가 특정 모드를 조직 전체에서 막을 수 있나요?

네. `permissions.disableAutoMode: "disable"` 또는 `permissions.disableBypassPermissionsMode: "disable"`을 **managed settings**에 넣으면 돼요.

---

## 더 알아보기

- [공식 문서 — Permission modes](https://code.claude.com/docs/en/permission-modes)
- [공식 문서 — Configure permissions](https://code.claude.com/docs/en/permissions) — allow/ask/deny 규칙 상세
- [`ultrathink` 문서](/docs/advanced/ultrathink) — 이 턴만 더 깊이 생각하게
- [`/ultraplan` 문서](/docs/advanced/ultraplan) — plan 모드의 클라우드 업그레이드 버전
- [Sandbox Security](/docs/advanced/sandbox-security) — OS 레벨 격리까지 거는 법
