---
title: "[공] Claude Code 주간 업데이트 — 2026년 19주차 (5/4 ~ 5/8)"
description: "ZIP/URL로 플러그인 설치, Ctrl+R 전 프로젝트 히스토리 검색, worktree 분기점 설정, 자동 모드 절대 차단 규칙 — v2.1.128→v2.1.136 핵심 기능 한국어 정리"
tags: ["자동생성", "주간업데이트", "whats-new", "2026-w19", "plugin", "history", "worktree", "auto-mode", "ctrl-r"]
category: "next"
order: 5
lastUpdated: "2026-05-09"
---

<div class="note-star">

★ **출처** — Claude Code 공식 주간 업데이트 [Week 19](https://code.claude.com/docs/en/whats-new/2026-w19) `[공식]`  
★ **대상 버전** — v2.1.128 → v2.1.136 (2026년 5월 4일 ~ 8일)  
★ **주요 테마** — 플러그인 설치 유연성 확대 + 명령 기록 검색 편의성 개선

</div>

---

## 이번 주 한 줄 요약

> "플러그인을 URL 하나로 설치하고, 지난주 다른 프로젝트에서 쳤던 명령어도 Ctrl+R 하나로 찾아냅니다."

---

## 📦 플러그인을 ZIP 파일이나 URL로 바로 설치 (신규)

### 기존 방식의 불편함

플러그인을 쓰려면 Marketplace에 올라온 것을 찾아서 설치하거나, 로컬 폴더 경로(`--plugin-dir`)를 지정해야 했어요. **"잠깐만 써보고 싶다"**거나 **"사내에서만 쓰는 내부 플러그인"**을 배포하기가 번거로웠죠.

> 🍱 **비유**: 앱스토어에 올리지 않은 앱을 친구에게 보내주는 것과 같아요. 파일 하나 보내면 바로 설치.

### 두 가지 새 설치 방법

**방법 1 — `--plugin-dir`에 ZIP 파일 경로 지정**

```bash
# 폴더 대신 .zip 아카이브를 직접 지정
claude --plugin-dir ./my-plugin.zip
```

**방법 2 — `--plugin-url`로 URL에서 바로 다운로드**

```bash
# URL에서 ZIP 아카이브를 받아서 이번 세션에 로드
claude --plugin-url https://example.com/my-plugin.zip
```

### 어떤 상황에서 유용한가요?

| 사용 시나리오 | 방법 |
|---|---|
| Marketplace 등록 전 플러그인 테스트 | `--plugin-url` |
| 팀 내부용 플러그인을 아티팩트 저장소에서 배포 | `--plugin-url` |
| 로컬 ZIP 파일로 개발 중인 플러그인 사용 | `--plugin-dir` |

---

## 🔍 Ctrl+R 히스토리 검색 — 이제 모든 프로젝트 기록을 뒤집니다 (v2.1.129)

### 어떤 기능인가요?

터미널에서 **Ctrl+R**을 누르면 이전에 친 명령어를 역방향으로 검색할 수 있어요. 클로드 코드도 같은 방식으로 프롬프트 이력을 검색할 수 있는데, v2.1.124 이후로 **현재 세션만** 검색하도록 범위가 좁아졌었어요.

이번 업데이트에서 **원래대로 돌아왔어요** — `Ctrl+R`이 기본값으로 **모든 프로젝트의 모든 프롬프트**를 검색합니다.

> 🍱 **비유**: 다이어리가 여러 권인데 특정 메모를 찾을 때, 이번 주 다이어리만 뒤지는 게 아니라 **책장의 모든 다이어리를 한꺼번에 검색**해주는 것과 같아요.

### 검색 범위 조절하기

| 단축키 | 동작 |
|---|---|
| `Ctrl+R` | **전체 프로젝트** 이력 역방향 검색 시작 |
| `Ctrl+R` 이후 `Ctrl+S` | 검색 범위를 **현재 프로젝트 또는 현재 세션**으로 좁히기 |

### 실제 사용 예

```
Ctrl+R → 검색어 입력
                              ← 모든 프로젝트에서 일치 항목 표시
Ctrl+S → 범위 좁히기
                              ← 현재 프로젝트의 일치 항목만 표시
```

---

## 📦 이번 주 기타 업그레이드 모음

| 기능 | 내용 |
|---|---|
| **`worktree.baseRef` 설정** | `--worktree` 사용 시 분기점 결정: `fresh`(기본, 리모트 기본 브랜치) 또는 `head`(현재 로컬 HEAD). 기본값 `fresh`는 미푸시 커밋이 새 워크트리에 들어가지 않도록 보호 |
| **`autoMode.hard_deny` 규칙** | 자동 모드(auto mode)에서 어떤 허용 규칙이 있어도 **절대 실행 안 되는** 액션을 설정 가능. "이건 진짜 절대 자동으로 하면 안 돼"인 작업에 사용 |
| **훅에서 effort 레벨 조회** | 훅 JSON 입력에 `effort.level`이 포함, Bash 도구 명령에서는 `$CLAUDE_EFFORT` 환경변수로 현재 노력 레벨 확인 가능 |
| **`CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1`** | 풀스크린 대체 화면 렌더러를 끄고 터미널 기본 스크롤백 유지 |
| **`CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE`** | Homebrew/WinGet 설치 버전이 백그라운드에서 업그레이드를 진행하고 재시작 알림 제공 |
| **`CLAUDE_CODE_SESSION_ID` 환경변수** | Bash 도구 서브프로세스에서도 현재 세션 ID를 `$CLAUDE_CODE_SESSION_ID`로 접근 가능 |
| **`/mcp` 개선** | 각 MCP 서버의 연결된 도구 개수 표시 + 도구 0개로 연결된 서버 강조 표시 |
| **`--channels` 콘솔 인증** | API 키 기반 콘솔 계정에서도 `--channels` 옵션 사용 가능 |
| **서브에이전트 프롬프트 캐시** | 서브에이전트 진행 요약이 프롬프트 캐시를 활용 → `cache_creation` 토큰 비용 약 **3배 절감** |
| **OAuth 안정성 수정** | 여러 세션 동시 실행 시 토큰 갱신 경쟁으로 발생하던 401 오류, MCP OAuth 리프레시 토큰 소실, 로그인 루프 버그 수정 |
| **`parentSettingsBehavior` 어드민 키** | SDK `managedSettings`를 어드민 정책 병합에 포함할지 제어 (기업 어드민용) |

---

## 🧮 실용 팁 — 이번 주 업데이트 활용법

### 팀 내부 플러그인을 빠르게 공유하는 워크플로우

```bash
# 1. 플러그인 개발 후 ZIP으로 압축
zip -r my-team-plugin.zip ./my-plugin-folder/

# 2. 사내 파일 서버에 업로드
# (예: AWS S3, GCS, 내부 Nginx 등)

# 3. 팀원에게 URL 공유
claude --plugin-url https://internal.company.com/tools/my-team-plugin.zip
```

### `hard_deny`로 위험 명령어 원천 차단하기

```json
// settings.json 예시
{
  "autoMode": {
    "hard_deny": [
      { "tool": "Bash", "pattern": "rm -rf" },
      { "tool": "Bash", "pattern": "git push --force" }
    ]
  }
}
```

> 🍱 **비유**: 금고에 '절대 열지 마시오' 딱지를 붙이는 것과 같아요. 어떤 권한이 있어도 자동으로 열리지 않아요.

---

## 📌 업그레이드 방법

```bash
# npm으로 설치한 경우
npm update -g @anthropic-ai/claude-code

# 또는 인스톨 스크립트 재실행 (macOS/Linux)
curl -fsSL https://claude.ai/install.sh | bash
```

전체 변경 내역 → [공식 Changelog v2.1.128–v2.1.136](https://code.claude.com/docs/en/changelog#2-1-128)
