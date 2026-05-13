---
title: "[공] 주간 업데이트: 2026년 4월 27일 ~ 5월 1일 (Week 18)"
description: "Windows에서 Git Bash 불필요, 로그인 방법 개선, 프로젝트 정리 명령어, PR URL로 세션 재개"
tags: ["업데이트", "2026", "week18", "windows", "pr", "자동생성"]
category: "next"
order: 4
lastUpdated: "2026-05-12"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — v2.1.120 ~ v2.1.126 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w18" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w18</a>
</div>

## 이번 주 핵심 변경 4가지

---

### 1️⃣ Windows — Git Bash 없어도 됩니다

**전**: Windows에서 Claude Code를 쓰려면 "Git for Windows"를 따로 설치해야 했어요.

**후**: 이제 Git Bash 없이도 됩니다. **PowerShell**이 자동으로 쉘로 사용돼요.

> 🍱 **비유**: 예전엔 주방에 특수 칼이 반드시 있어야 요리할 수 있었는데, 이제 일반 칼로도 똑같이 할 수 있게 된 거예요.

**추가로**: PowerShell 7을 Microsoft Store, MSI, .NET 전역 도구로 설치했어도 자동으로 인식해요. `[공]`

---

### 2️⃣ 로그인 — 브라우저 콜백이 안 될 때 코드 붙여넣기

WSL2, SSH 세션, 컨테이너 환경에서는 로그인할 때 브라우저가 "localhost로 리다이렉트"를 못 하는 경우가 있었어요.

이제는 브라우저에서 OAuth 코드를 **복사해서 터미널에 바로 붙여넣을 수** 있어요:

```bash
claude auth login
# 브라우저가 열리면 코드를 복사 → 터미널에 붙여넣기
```

느린 네트워크나 프록시 환경에서의 로그인 타임아웃 문제도 함께 수정됐어요. `[공]`

---

### 3️⃣ 프로젝트 기록 삭제 — `claude project purge`

특정 프로젝트의 Claude Code 기록을 통째로 삭제하는 명령어가 생겼어요.

삭제 대상: 대화 기록, 작업 내역, 파일 이력, 프로젝트 설정

```bash
# 미리 보기 (실제로 삭제 안 됨)
claude project purge --dry-run

# 실제 삭제
claude project purge

# 확인 없이 바로 삭제
claude project purge -y

# 모든 프로젝트 삭제
claude project purge --all
```

> 🍱 **비유**: 스마트폰 앱에서 "캐시 및 데이터 삭제"를 누르는 것과 비슷해요. 앱은 남아있고 기록만 지워집니다.

---

### 4️⃣ PR URL로 세션 재개 — `/resume`

Claude Code로 PR을 만들면, 이제 **그 PR 링크로 작업했던 세션을 다시 찾을 수** 있어요.

```
# 세션 선택 화면 열기
/resume

# 선택 화면에 PR URL 붙여넣기
https://github.com/내-조직/내-저장소/pull/1234
```

또는 처음부터 명령어로:

```bash
claude --from-pr 1234
```

GitHub, GitHub Enterprise, GitLab, Bitbucket 모두 지원해요. `[공]`

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **PostToolUse 훅** | 이제 모든 도구의 출력값을 훅으로 바꿀 수 있어요 (기존엔 MCP 도구만) |
| **ultrareview CLI** | `claude ultrareview` 명령어로 CI/스크립트에서 코드 리뷰를 비대화식으로 실행 가능 |
| **/skills 검색** | 스킬 목록에 텍스트 필터가 생겨서 긴 목록에서 빠르게 찾을 수 있어요 |
| **MCP 자동 재시도** | MCP 서버가 시작 시 오류나면 최대 3회 자동 재시도 |
| **메모리 누수 수정** | 이미지 많은 세션, 긴 대화 내역에서의 메모리 문제 해결 |
| **Vertex AI mTLS** | X.509 인증서 기반 워크로드 자격증명 연동 지원 (기업용) |

---

## 버전 정보

이번 주 업데이트: **v2.1.120 → v2.1.126** `[공]`

버전 확인:
```bash
claude --version
```
