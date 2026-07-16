---
title: "[공] 윈도우 WSL에서 Claude Code 세션 실행하기"
description: "Windows의 Claude 데스크톱 앱에서 WSL 2(Windows Subsystem for Linux) 안의 리눅스 환경으로 세션을 실행하는 방법. 윈도우에서 리눅스 프로젝트 작업할 때 성능이 훨씬 좋아져요"
tags: ["WSL", "윈도우", "windows", "wsl2", "리눅스", "linux", "데스크톱", "자동생성"]
category: "codeweb"
order: 6
lastUpdated: "2026-07-16"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code Desktop의 WSL 2 지원. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-wsl" target="_blank">공식 문서: desktop-wsl</a>
</div>

## WSL이 뭔가요?

**WSL(Windows Subsystem for Linux, 윈도우 서브시스템 포 리눅스)**은 Windows 안에서 리눅스를 실행할 수 있게 해주는 기능이에요.

> 🍱 **비유**: 윈도우 집 안에 리눅스 방을 하나 만들어 놓은 거예요. 리눅스 방에서 일(코딩)을 하면 리눅스 도구를 그대로 쓸 수 있어요.

**왜 WSL에서 Claude Code를 실행하나요?**

리눅스 배포판(예: Ubuntu) 파일시스템 안에 프로젝트가 있을 때, Windows에서 그 파일에 접근하면 **네트워크 파일시스템**을 통해야 해서:

1. **속도가 느려요** — 파일 읽기/쓰기가 훨씬 느림
2. **파일 변경 감지가 안 돼요** — `git`, `file watcher` 등이 제대로 작동 안 함

WSL 세션으로 실행하면 리눅스 안에서 직접 실행되니까 이 문제가 사라져요.

---

## 설치 요구사항

| 항목 | 조건 |
|---|---|
| Windows | Windows 10 또는 11 |
| WSL 버전 | **WSL 2** (WSL 1은 미지원) |
| 배포판 | Ubuntu 등 WSL 2 배포판 1개 이상 설치 |
| Git | WSL 배포판 안에 git 설치 필요 |

### WSL 2 설치 확인

```powershell
# PowerShell에서 WSL 버전 확인
wsl --list --verbose
```

결과에서 VERSION이 2인 배포판이 있어야 해요:

```
  NAME      STATE           VERSION
* Ubuntu    Running         2
```

WSL이 없다면 Microsoft 공식 문서를 참고해서 설치해요 → [WSL 설치 안내](https://learn.microsoft.com/windows/wsl/install)

---

## WSL 세션 시작하는 법

### 1단계: 배포판 선택

Claude 데스크톱 앱의 **Code 탭**에서 새 세션을 시작해요. 환경 선택 메뉴를 열면 **WSL** 섹션에 설치된 배포판 목록이 나와요.

> 🍱 **비유**: 세션을 시작하기 전에 "어느 방에서 일할까요?" 메뉴가 뜨는 거예요 — Windows 방, Ubuntu 방, Debian 방 등.

### 2단계: 폴더 선택

세션이 시작되면 해당 배포판의 홈 디렉토리(`/home/사용자이름/`)에서 시작해요. 폴더 선택기로 프로젝트 폴더를 골라요.

📂 폴더 경로는 Linux 경로 형식이에요: `/home/you/project`

### 3단계: 작업 폴더 신뢰

처음 들어가는 폴더는 **작업 공간 신뢰(workspace trust)** 확인 창이 떠요. "신뢰(Trust)"를 클릭하면 돼요.

<div class="note-circle">
○ 폴더 신뢰는 배포판과 폴더 조합별로 따로 설정돼요<br />
○ Ubuntu에서 신뢰한 폴더를 Debian에서 열면 다시 물어봐요
</div>

---

## 첫 번째 세션은 좀 느려요

배포판 안에 Claude Code를 처음 설치하는 과정이 있어서 **첫 번째 세션은 시간이 좀 걸려요**. 다음 번부터는 빠르게 시작돼요.

---

## 자주 쓰는 폴더는 바로 접근 가능

최근 작업한 폴더들은 배포판별로 선택기에 저장돼요. 다음에는 클릭 한 번으로 바로 접속할 수 있어요.

**팁**: `\\wsl.localhost\Ubuntu\home\사용자이름\프로젝트` 경로를 일반 폴더 선택기에서 선택해도 자동으로 해당 배포판 안에서 세션이 시작돼요.

---

## WSL 세션에서 쓸 수 있는 것들

| 기능 | 가능 여부 |
|---|---|
| 여러 세션 동시 실행 | ✅ |
| 사이드 채팅 | ✅ |
| 시각적 diff 리뷰 | ✅ |
| 브랜치·PR 상태 | ✅ |
| Worktrees | ✅ |
| VS Code와 연동 | ✅ (Remote WSL 확장 통해 열림) |

---

## WSL 세션에서 아직 안 되는 것들

| 미지원 기능 | 설명 |
|---|---|
| 통합 터미널 | 현재 미지원 |
| 커넥터·플러그인 | 현재 미지원 |
| 세션 포크 | 현재 미지원 |
| 파일 브라우저 패널 | 현재 미지원 |
| `@파일` 자동완성 | 작성창에서 @로 파일 제안 미지원 |

> 🍱 **비유**: WSL 방에서 일할 수 있는데, 일부 장비(통합 터미널, 플러그인)는 아직 WSL 방으로 가져오지 못했어요.

---

## 회사 관리 기기에서 WSL 사용

회사에서 관리하는 기기는 **관리자 설정에 따라** WSL 세션이 차단될 수 있어요.

"장치가 관리됨(device is managed)" 오류가 뜨면 회사 IT 관리자에게 문의하세요.

---

## 언제 WSL 세션을 쓰면 좋나요?

✅ **WSL 세션 추천하는 상황:**
- 프로젝트 파일이 WSL(리눅스) 파일시스템 안에 있을 때
- `git`, `npm`, `python` 등 리눅스 도구를 써야 할 때
- 파일 변경 감지가 중요한 프로젝트 (핫 리로드 등)

❌ **굳이 WSL 세션이 필요 없는 상황:**
- 프로젝트가 Windows 드라이브(`C:\Users\...`)에 있을 때
- Windows 전용 앱 개발 중일 때

> 🍱 **요약**: 리눅스 도구로 만든 프로젝트는 리눅스 방(WSL)에서 일하는 게 훨씬 빠르고 안정적이에요.
