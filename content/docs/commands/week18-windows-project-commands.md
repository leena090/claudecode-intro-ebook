---
title: "[공] Week 18 업데이트: 윈도우 완전 지원 + 프로젝트 정리 명령어"
description: "Git Bash 없이도 윈도우에서 Claude Code 실행, 프로젝트 데이터 정리, PR URL로 세션 찾기 (2026년 4월 27일~5월 1일)"
tags: ["자동생성", "업데이트", "윈도우", "Windows", "PowerShell", "명령어", "week18"]
category: "commands"
order: 8
lastUpdated: "2026-05-10"
---

> **공식 발표 기준** · 출처: [code.claude.com/docs/en/whats-new/2026-w18](https://code.claude.com/docs/en/whats-new/2026-w18) (v2.1.120 → v2.1.126)

---

## 이번 주 뭐가 달라졌나요?

| 기능 | 한마디 | 누구에게 중요? |
|------|--------|--------------|
| 🪟 윈도우에서 Git Bash 불필요 | 파워셸(PowerShell)로 바로 실행 | **윈도우 사용자 전원** |
| 🔑 브라우저 없이 로그인 | OAuth 코드 터미널에 직접 붙여넣기 | WSL2·SSH·컨테이너 사용자 |
| 🗑️ `claude project purge` | 프로젝트 데이터 통째로 정리 | 저장공간 또는 기록 초기화 원할 때 |
| 🔗 PR URL로 세션 이어가기 | PR 링크 → 세션 바로 찾기 | PR 만든 세션으로 돌아갈 때 |

---

## 🪟 윈도우에서 이제 Git Bash 없어도 됩니다

### 무슨 말인가요?

지금까지 윈도우에서 Claude Code를 쓰려면 **Git for Windows** (Git Bash)가 반드시 설치돼 있어야 했어요. 그런데 이번 업데이트로, 그 요구사항이 사라졌습니다.

> 🍱 **비유로 설명하면**: 예전엔 외국 식당 가려면 통역사(Git Bash)를 꼭 데려가야 했어요. 이제는 식당이 한국어도 지원하니까(PowerShell), 통역사 없이 바로 주문할 수 있어요.

### 어떻게 작동하나요?

Git Bash가 없으면 Claude Code가 **파워셸(PowerShell)**을 자동으로 셸 도구로 사용합니다.

| 상황 | 이전 | 이번 업데이트 후 |
|------|------|-----------------|
| Git Bash 있음 | 정상 작동 | 정상 작동 (변화 없음) |
| Git Bash 없음 | ❌ 오류 / 실행 불가 | ✅ PowerShell로 자동 전환 |
| PowerShell 7 (Store 설치) | 못 찾는 경우 있음 | ✅ 자동 감지 |
| PowerShell 7 (.NET global tool) | 못 찾는 경우 있음 | ✅ 자동 감지 |

### PowerShell 도구 활성화 팁

파워셸이 기본 셸로 인식되면, Claude가 `Bash 도구` 대신 `PowerShell 도구`를 메인으로 씁니다. 별도 설정 없이 자동으로 전환돼요.

<div class="note-star">
★ <strong>윈도우 사용자라면 확인하세요</strong><br />
Git Bash 없이 Claude Code를 처음 설치하는 경우:<br />
<code>claude --version</code> 으로 설치 확인 후, 바로 사용 시작 가능합니다.<br /><br />
PowerShell 7 설치 방법: 마이크로소프트 스토어에서 "PowerShell" 검색 → 무료 설치
</div>

<div class="note-circle">
○ 이 기능의 버전 태그: "Windows" (공식 릴리스 표기). 시스템 설정은 <a href="https://code.claude.com/docs/en/setup">Setup guide</a> 참조.
</div>

---

## 🔑 브라우저 없이 로그인 — WSL2·SSH·컨테이너 사용자용

### 어떤 문제가 있었나요?

`claude auth login`을 하면 브라우저가 열리고 로그인을 완료하면 `localhost`로 코드가 자동 전송됐어요.

그런데 **WSL2**(윈도우 안의 리눅스 환경), **SSH 원격 서버**, **도커 컨테이너** 환경에서는 이 자동 전송이 작동하지 않는 경우가 있었어요. 로컬 포트로 리다이렉트가 안 되거든요.

> 🍱 **비유로 설명하면**: 편의점 무인 계산기(브라우저 자동 콜백)가 고장났을 때, 직원한테 영수증 번호 직접 말해주고 결제하는 것처럼 — 이제 코드를 터미널에 직접 붙여넣으면 돼요.

### 어떻게 쓰나요?

```bash
claude auth login
```

명령어 실행 후 브라우저가 열리면:
1. 브라우저에서 로그인 완료
2. 화면에 표시된 **OAuth 코드** 복사
3. 터미널로 돌아와서 붙여넣기 (Ctrl+V)
4. Enter

자동 리다이렉트가 안 돼도, 코드를 수동으로 붙여넣으면 완료됩니다.

**함께 수정된 것들 (v2.1.126):**
- 느린 네트워크나 프록시(Proxy) 환경에서의 로그인 타임아웃 수정
- IPv6 전용 개발 컨테이너에서의 로그인 오류 수정

<div class="note-circle">
○ v2.1.126에서 개선됐어요. CLI 전체 레퍼런스는 <a href="https://code.claude.com/docs/en/cli-reference">CLI reference</a> 참조.
</div>

---

## 🗑️ `claude project purge` — 프로젝트 데이터 완전 정리

### 뭘 지우나요?

이 명령어를 실행하면 해당 프로젝트에 저장된 다음 데이터를 **모두 삭제**합니다:

- 📄 대화 기록 (트랜스크립트)
- ✅ 작업 목록 (할 일)
- 📁 파일 수정 이력
- ⚙️ 프로젝트 설정 항목

> 🍱 **비유로 설명하면**: 책상 서랍을 통째로 비우는 거예요. 그냥 치우는 게 아니라, 서랍 자체를 뺐다가 새 서랍을 꽂는 수준의 완전 초기화입니다.

### 사용법

**먼저 미리보기로 확인하세요 (필수 권장):**
```bash
claude project purge --dry-run
```
실제 삭제 없이 "이렇게 지워집니다"를 먼저 보여줘요.

**실제 삭제:**
```bash
claude project purge
```
확인 질문이 뜨면 `y` 입력.

**확인 질문 없이 바로 삭제:**
```bash
claude project purge -y
# 또는
claude project purge --yes
```

**직접 고르면서 삭제 (대화형):**
```bash
claude project purge -i
# 또는
claude project purge --interactive
```
삭제할 항목을 하나하나 선택할 수 있어요.

**모든 프로젝트 한꺼번에:**
```bash
claude project purge --all
```

### 플래그 요약표

| 플래그 | 역할 |
|--------|------|
| `--dry-run` | 삭제 미리보기만 (실제 삭제 안 함) |
| `-y` / `--yes` | 확인 질문 생략 |
| `-i` / `--interactive` | 항목별로 직접 선택 |
| `--all` | 모든 프로젝트 정리 |

<div class="note-star">
★ <strong>주의</strong>: 삭제한 데이터는 복구할 수 없어요. 반드시 <code>--dry-run</code>으로 먼저 확인하세요.
</div>

<div class="note-circle">
○ v2.1.126에 새로 추가됐어요.
</div>

---

## 🔗 PR URL로 세션 이어가기

### 어떤 기능인가요?

Claude Code가 `gh pr create`(깃허브 PR 생성)로 PR을 만들면, 그 PR과 세션을 자동으로 연결합니다.

이제 그 PR의 URL을 `/resume` 화면에 붙여넣으면 **그 PR을 만든 세션으로 바로 이동**합니다.

> 🍱 **비유로 설명하면**: PR이 "영수증" 역할을 해요. 영수증 번호(PR URL)를 보여주면, 그 주문을 처리한 직원(세션)이 누군지 바로 찾아줍니다. 세션 이름을 기억 못해도 돼요.

### 사용법

**방법 1 — 세션 선택 화면에서:**
```
> /resume
```
선택 화면이 뜨면, PR URL을 붙여넣으세요:
```
https://github.com/your-org/your-repo/pull/1234
```
첫 글자 입력 순간 검색 모드로 전환되고, 해당 PR을 만든 세션이 필터링돼요. Enter로 재개.

**방법 2 — 커맨드라인에서 바로:**
```bash
claude --from-pr 1234
```

### 지원하는 서비스

| 서비스 | URL 형태 |
|--------|---------|
| GitHub | `github.com/.../pull/번호` |
| GitHub Enterprise | 기업 도메인 PR URL |
| GitLab | Merge Request URL |
| Bitbucket | Pull Request URL |

<div class="note-circle">
○ v2.1.122에 추가됐어요. 세션 관리 자세한 내용은 <a href="https://code.claude.com/docs/en/sessions">Sessions guide</a> 참조.
</div>

---

## 그 외 업데이트 (v2.1.120~126)

| 업데이트 | 한마디 |
|---------|--------|
| MCP 서버 `alwaysLoad: true` | 특정 서버의 도구를 항상 로드하도록 설정 (지연 로딩 방지) |
| `claude plugin prune` | 쓰지 않는 플러그인 의존성 자동 정리 (`plugin uninstall --prune` 연계 삭제) |
| `/skills` 검색창 | 기술 목록이 길어도 타이핑으로 바로 필터링 |
| `PostToolUse` 훅 전체 적용 | MCP 도구뿐 아니라 **모든 도구**의 출력 결과를 훅으로 교체 가능 |
| `claude ultrareview` 서브커맨드 | CI/스크립트에서 비대화형으로 실행, `--json` 플래그로 JSON 출력 |
| `--dangerously-skip-permissions` 범위 확대 | `.claude/`, `.git/`, `.vscode/`, 셸 설정 파일까지 허용 (재앙성 삭제 명령은 여전히 경고) |
| 게이트웨이 모델 목록 | `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1` 환경변수로 자체 게이트웨이 모델 선택 가능 |
| MCP 서버 자동 재시도 | 시작 오류 시 최대 3번 자동 재시도 |
| `ANTHROPIC_BEDROCK_SERVICE_TIER` | Bedrock 서비스 등급 선택: `default`, `flex`, `priority` |
| `/terminal-setup` | iTerm2 클립보드 접근 자동 설정 (tmux 환경에서 `/copy` 작동) |
| Vertex AI mTLS 지원 | X.509 인증서 기반 Workload Identity Federation 지원 |
| 메모리 누수 수정 | 이미지 많은 세션, `/usage` 대형 이력, 장시간 실행 도구 관련 |

---

## 윈도우 사용자 시작 가이드

아직 Claude Code 설치 전이라면:

```powershell
# Windows PowerShell에서
irm https://claude.ai/install.ps1 | iex
```

Git Bash 없이도 설치·실행됩니다. PowerShell 7이 자동 감지돼요.

```bash
# 설치 확인
claude --version

# 로그인
claude auth login
# 브라우저에서 로그인 → 코드 복사 → 터미널에 붙여넣기
```

---

## 다음 단계

- **Week 19 업데이트** — 플러그인 URL 설치, Ctrl+R 전체 히스토리 검색, Auto mode 강력 차단 규칙
- **전체 명령어 레퍼런스** — 모든 CLI 명령어 목록
- **세션 관리 가이드** — `/resume`, 세션 이름 붙이기, 이어가기
