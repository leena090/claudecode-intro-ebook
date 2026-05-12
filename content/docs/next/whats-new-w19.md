---
title: "[공] 주간 업데이트: 2026년 5월 4일 ~ 8일 (Week 19)"
description: "zip/URL에서 플러그인 설치, Ctrl+R 히스토리 검색 모든 프로젝트, 워크트리 설정 세분화, Auto 모드 강제 차단 규칙"
tags: ["업데이트", "2026", "week19", "플러그인", "워크트리", "자동생성"]
category: "next"
order: 5
lastUpdated: "2026-05-12"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — v2.1.128 ~ v2.1.136 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w19" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w19</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ 플러그인 — ZIP 파일이나 URL에서 바로 설치

```bash
# URL에서 바로 로드 (현재 세션만)
claude --plugin-url https://example.com/my-plugin.zip

# ZIP 파일에서 로드
claude --plugin-dir ./my-plugin.zip
```

> 🍱 **비유**: 앱 스토어에 올리기 전에 APK 파일로 먼저 테스트해보는 것처럼, 마켓플레이스 등록 전에 ZIP 파일로 플러그인을 먼저 써볼 수 있어요.

회사 내부 플러그인을 사내 파일 저장소에서 바로 불러오는 용도로도 좋아요. `[공]`

---

### 2️⃣ Ctrl+R — 모든 프로젝트 히스토리 검색

`Ctrl+R`로 과거 명령어를 검색할 때, 이제 **모든 프로젝트**의 히스토리를 검색해요.

```
Ctrl+R → 검색어 입력 → 모든 프로젝트에서 찾아줌
Ctrl+S → 현재 프로젝트/세션으로 범위 좁히기
```

> 🍱 **비유**: 스마트폰에서 "이 채팅방에서만"이 아니라 "모든 채팅"을 검색하는 것처럼, 지난주에 다른 저장소에서 썼던 명령어도 찾을 수 있어요.

이전 버전(v2.1.124)에서 범위가 현재 프로젝트로 좁혀졌다가, 이번에 원래대로 돌아왔어요. `[공]`

---

### 3️⃣ 워크트리 시작 브랜치 설정

워크트리를 만들 때 **어느 브랜치를 기준**으로 시작할지 설정할 수 있어요.

```json
// .claude/settings.json 또는 ~/.claude/settings.json
{
  "worktree": {
    "baseRef": "head"
  }
}
```

| 값 | 동작 |
|----|------|
| `"fresh"` (기본값) | 원격 저장소 기본 브랜치에서 시작 (깨끗한 상태) |
| `"head"` | 현재 로컬 HEAD에서 시작 (내 최근 커밋 포함) |

`"head"`를 쓰면 아직 push하지 않은 최근 작업 내용을 워크트리에서 이어서 작업할 수 있어요. `[공]`

---

### 4️⃣ Auto 모드 — 강제 차단 규칙 (hard_deny)

Auto 모드에서 "절대 실행하면 안 되는 작업"을 명시적으로 막을 수 있어요.

```json
{
  "autoMode": {
    "hard_deny": [
      "Bash(rm -rf *)",
      "Bash(git push --force)"
    ]
  }
}
```

기존 허용 규칙(allow)이 있어도 `hard_deny` 목록에 있으면 **무조건 차단**돼요. `[공]`

> 🍱 **비유**: 직원 접근 권한을 줬어도, 금고는 절대 열 수 없는 것처럼 — 예외 없는 절대 금지 규칙이에요.

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **훅 — effort 값 전달** | 훅 스크립트가 현재 effort 레벨(`low`/`medium`/`high`)을 `$CLAUDE_EFFORT` 환경변수로 받을 수 있어요 |
| **MCP 서버 도구 수 표시** | `/mcp` 명령어에서 각 서버의 도구 개수와 0개인 서버를 표시 |
| **서브에이전트 캐시 개선** | 서브에이전트 요약이 프롬프트 캐시를 활용해 토큰 비용 약 3배 절감 |
| **OTEL 변수 격리** | Bash, 훅, MCP 서브프로세스가 CLI의 OpenTelemetry 설정을 상속받지 않아요 |
| **OAuth 안정성 수정** | 병렬 세션에서 토큰 갱신 충돌로 인한 로그인 오류 수정 |
| **`--channels` 개선** | Console (API 키) 인증에서도 `--channels` 플래그 사용 가능 |

---

## 버전 정보

이번 주 업데이트: **v2.1.128 → v2.1.136** `[공]`

버전 확인:
```bash
claude --version
```
