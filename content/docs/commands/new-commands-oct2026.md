---
title: "[공] 2026년 9~10월 신규 명령어 — plugin eval·mcp login·auth login·project purge"
description: "llms.txt 기반으로 확인된 2026년 9~10월 신규 추가 명령어 4가지 총정리"
tags: ["자동생성", "명령어", "신규", "2026", "plugin-eval", "mcp-login", "auth-login", "project-purge"]
category: "commands"
order: 9
lastUpdated: "2026-10-18"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/llms.txt">code.claude.com/docs/llms.txt</a> (2026-10-18 기준)
<br />★ 이 문서는 llms.txt 인덱스에 새로 등장한 명령어 설명을 바탕으로 작성했습니다. 세부 옵션은 <a href="https://code.claude.com/docs/en/cli-reference">공식 CLI 레퍼런스</a>에서 확인하세요.
</div>

## 신규 명령어 요약

| 명령어 | 분류 | 한 줄 설명 |
|---|---|---|
| `claude plugin eval` | 플러그인 | 플러그인을 평가 케이스로 테스트 |
| `claude mcp login` | MCP | 쉘에서 MCP 서버 인증 |
| `claude auth login` | 인증 | Claude Code 로그인 (OAuth 코드 붙여넣기 지원) |
| `claude project purge` | 프로젝트 | 프로젝트 로컬 상태 정리 |

---

## `claude plugin eval` — 플러그인 테스트

### 무엇인가요?

**`claude plugin eval`**은 내가 만든 플러그인(plugin)이 제대로 작동하는지 **평가 케이스(eval cases)로 자동 테스트**하는 명령어예요.

> 🧪 **비유로 설명하면**: 플러그인을 요리라고 하면, `plugin eval`은 **"레시피대로 요리했는지 검사하는 품질 테스트"**예요. 직접 먹어보기 전에 자동으로 맛을 확인해 주는 거죠.

### 기본 사용법

```bash
# 현재 디렉토리의 플러그인 평가 실행
claude plugin eval

# 특정 플러그인 평가
claude plugin eval my-plugin/

# 결과 저장
claude plugin eval --output results.json
```

### 어떤 상황에 쓰나요?

- 플러그인을 만들고 배포 전 마지막 점검
- CI/CD 파이프라인에서 플러그인 품질 자동 검사
- 팀원이 만든 플러그인 검토

<div class="note-star">
★ 플러그인(Plugin) 만들기에 대한 공식 문서: <a href="https://code.claude.com/docs/en/plugins">code.claude.com/docs/en/plugins</a>
</div>

---

## `claude mcp login` — MCP 서버 인증

### 무엇인가요?

**`claude mcp login`**은 쉘(터미널)에서 바로 **MCP 서버에 로그인 인증**하는 명령어예요.

> 🔑 **비유로 설명하면**: MCP 서버가 회원제 서비스라면, `mcp login`은 **"회원증을 제시하는 입구 게이트"**예요.

### 기본 사용법

```bash
# MCP 서버 인증 시작
claude mcp login

# 특정 서버 인증
claude mcp login github
claude mcp login slack
```

### 어떤 상황에 쓰나요?

- 처음 MCP 서버를 연결할 때
- 인증이 만료돼서 다시 로그인해야 할 때
- 여러 MCP 서버를 순차적으로 인증할 때

---

## `claude auth login` — Claude Code 로그인

### 무엇인가요?

**`claude auth login`**은 Claude Code 자체에 로그인하는 명령어예요. 특히 **OAuth 코드를 터미널에 붙여넣기**하는 방식을 지원해서 브라우저 없이도 인증할 수 있어요.

> 🚪 **비유로 설명하면**: 기존에는 "정문(브라우저)으로만 들어갈 수 있었다"면, `auth login`의 붙여넣기 방식은 **"인증 코드를 받아서 뒷문으로도 들어갈 수 있게 된 것"**이에요. 서버·CI 환경처럼 브라우저가 없는 곳에서 유용해요.

### 기본 사용법

```bash
# 인터랙티브 로그인
claude auth login

# 1. 명령 실행하면 인증 URL 출력
# 2. 브라우저에서 URL 열어서 인증
# 3. OAuth 코드를 복사해서 터미널에 붙여넣기
# 4. 로그인 완료!
```

### 어떤 상황에 쓰나요?

- 새 서버나 CI/CD 환경에서 처음 설정할 때
- 브라우저 접근이 어려운 원격 서버 환경
- GitHub Actions 등 자동화 환경에서 인증

---

## `claude project purge` — 프로젝트 상태 정리

### 무엇인가요?

**`claude project purge`**는 프로젝트의 **로컬 상태(local state)를 깨끗이 청소**하는 명령어예요.

> 🧹 **비유로 설명하면**: 집에서 오래된 물건들이 쌓이면 청소를 해야 하죠? `project purge`는 Claude Code 프로젝트에 쌓인 **"캐시·임시 파일·오래된 상태 데이터"를 한 번에 비워주는 청소기**예요.

### 기본 사용법

```bash
# 현재 프로젝트 상태 정리
claude project purge

# 특정 프로젝트 정리
claude project purge my-project/

# 확인 없이 바로 정리 (주의: 되돌릴 수 없음)
claude project purge --force
```

### 언제 쓰나요?

| 상황 | 이유 |
|---|---|
| Claude가 이상하게 동작할 때 | 캐시가 꼬였을 가능성 |
| 프로젝트를 처음부터 다시 시작하고 싶을 때 | 이전 컨텍스트 완전 초기화 |
| 디스크 공간이 부족할 때 | 임시 파일 정리 |

<div class="note-star">
★ <strong>주의</strong>: purge 후에는 Claude Code가 해당 프로젝트의 이전 맥락을 잊어버려요. 중요한 세션 정보는 미리 `/memory save` 등으로 저장해두세요.
</div>

---

## Plugins 공식 문서 신규 섹션

2026년 9~10월 사이 공식 문서에 **Plugins** 전용 서브디렉토리가 새로 생겼어요:

| 문서 | 설명 |
|---|---|
| [plugins/overview](https://code.claude.com/docs/en/plugins/overview) | 플러그인 전체 개요 |
| [plugins/install](https://code.claude.com/docs/en/plugins/install) | 플러그인 설치·관리 |
| [plugins/create](https://code.claude.com/docs/en/plugins/create) | 플러그인 직접 만들기 |
| [plugins/create-marketplace](https://code.claude.com/docs/en/plugins/create-marketplace) | 플러그인 마켓플레이스 개설 |
| [plugins/mods/overview](https://code.claude.com/docs/en/plugins/mods/overview) | Mods(인터페이스 커스터마이징) 개요 |

> 📦 **Mods란?**: 플러그인으로 Claude Code 인터페이스 자체를 바꾸는 기능이에요. 새 사이드 패널 추가, 상태바 커스터마이징, 슬래시 명령어 추가 등이 가능합니다.

---

## 관련 문서

- [전체 CLI 플래그 정리](../reference/all-cli-flags.md) — 모든 명령어·플래그 목록
- [2026년 4월 신규 명령어](./new-commands-apr2026.md) — 이전 명령어 업데이트
- [플러그인 기초](../advanced/plugins.md) — Plugin 사용 입문
