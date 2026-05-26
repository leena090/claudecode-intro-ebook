---
title: "[공] Week 19 업데이트: 플러그인 URL 설치 · Ctrl+R 전체 검색 · Auto mode 강력 차단"
description: "URL에서 플러그인 즉시 설치, 모든 프로젝트 히스토리 검색, Auto mode에서 절대 차단 규칙 설정 (2026년 5월 4일~8일)"
tags: ["자동생성", "업데이트", "플러그인", "히스토리", "auto-mode", "week19"]
category: "advanced"
order: 23
lastUpdated: "2026-05-10"
---

> **공식 발표 기준** · 출처: [code.claude.com/docs/en/whats-new/2026-w19](https://code.claude.com/docs/en/whats-new/2026-w19) (v2.1.128 → v2.1.136)

---

## 이번 주 뭐가 달라졌나요?

| 기능 | 한마디 | 누구에게 중요? |
|------|--------|--------------|
| 📦 플러그인 URL 설치 | `.zip` 파일이나 URL로 플러그인 바로 적용 | 플러그인 개발자·테스터 |
| ⌨️ Ctrl+R 전체 검색 | 모든 프로젝트 명령 기록에서 검색 | 자주 같은 명령 재사용하는 분 |
| 🚫 Auto mode 강력 차단 | 절대 실행 금지 규칙 설정 | Auto mode 사용자 |
| 🌿 워크트리 기본 분기 설정 | `fresh` 또는 `head` 선택 | 병렬 작업 워크트리 사용자 |

---

## 📦 플러그인 URL에서 바로 설치

### 어떤 기능인가요?

이전까지 플러그인을 설치하려면 마켓플레이스에 올라가 있어야 하거나, 로컬 디렉터리 경로를 지정해야 했어요.

이제 두 가지가 새로 됩니다:
1. **`.zip` 파일**을 플러그인 디렉터리로 직접 지정
2. **URL**에서 플러그인 아카이브를 바로 내려받아서 적용

> 🍱 **비유로 설명하면**: 앱스토어에 올리지 않고, 개발자가 직접 보내준 설치파일(.apk)로 바로 설치하는 것처럼요. 팀 내부용 플러그인이나 "이거 써볼게요" 테스트용으로 딱입니다.

### 사용법

**URL로 바로 설치 (세션 한정):**
```bash
claude --plugin-url https://example.com/my-plugin.zip
```
이 방식은 현재 세션에서만 적용돼요. 세션이 끝나면 사라집니다.

**`.zip` 파일로 설치:**
```bash
claude --plugin-dir ./my-plugin.zip
# 또는 디렉터리 (기존 방식)
claude --plugin-dir ./my-plugin/
```
`--plugin-dir`이 이제 디렉터리뿐 아니라 `.zip` 파일도 받습니다.

### 언제 쓰나요?

| 상황 | 방법 |
|------|------|
| 마켓플레이스 올리기 전 테스트 | `--plugin-url` |
| 팀 내부 전용 플러그인 배포 | 사내 저장소 URL → `--plugin-url` |
| 로컬에 zip 파일 있을 때 | `--plugin-dir my-plugin.zip` |

<div class="note-star">
★ <strong>보안 주의</strong>: 신뢰할 수 없는 출처의 URL 플러그인은 설치하지 마세요. 플러그인은 훅, 커스텀 도구, 스크립트를 포함할 수 있습니다.
</div>

<div class="note-circle">
○ 플러그인 전체 가이드: <a href="https://code.claude.com/docs/en/plugins">Plugins guide</a>
</div>

---

## ⌨️ Ctrl+R — 모든 프로젝트 명령 기록 검색

### 어떤 기능인가요?

`Ctrl+R`은 이전에 입력한 명령이나 프롬프트를 검색하는 단축키예요.

그런데 v2.1.124 업데이트에서 **현재 세션 또는 현재 프로젝트**의 기록만 검색하도록 변경됐었어요. 이번 v2.1.129 업데이트로 다시 **모든 프로젝트**의 기록을 검색하는 방식으로 복원됐습니다.

> 🍱 **비유로 설명하면**: 예전엔 전체 메모장을 검색했는데, 어느 날 "지금 열려있는 메모장만" 검색하게 바뀌었다가, 이번에 다시 전체 검색으로 돌아온 거예요.

### 사용법

**전체 프로젝트 기록 검색:**
```
Ctrl+R
```
입력창에 검색어 타이핑 → 전체 프로젝트 기록에서 매칭

**현재 프로젝트/세션만 좁혀서 검색:**
```
Ctrl+R → 검색 중 → Ctrl+S
```
`Ctrl+S`를 누르면 현재 프로젝트·세션으로 필터링됩니다.

### 실제 활용 예시

```
상황: 지난주에 다른 프로젝트에서 실행한 "DB 마이그레이션 명령" 다시 쓰고 싶다.

1. Ctrl+R 누르기
2. "마이그레이션" 또는 "migrate" 타이핑
3. 전체 기록에서 찾아서 선택
4. Enter → 현재 세션에서 실행
```

<div class="note-star">
★ <strong>알아두세요</strong>: 민감한 내용(API 키, 비밀번호 등)이 포함된 프롬프트는 기록에 남지 않도록 주의하세요. Ctrl+R 검색 기록은 전체 프로젝트에 걸쳐 보입니다.
</div>

<div class="note-circle">
○ v2.1.129에서 복원됐어요. 인터랙티브 모드 전체 단축키: <a href="https://code.claude.com/docs/en/interactive-mode">Interactive mode guide</a>
</div>

---

## 🚫 Auto mode 강력 차단 규칙 (`hard_deny`)

### 기존 Auto mode 권한 구조

Auto mode(자동 모드)에서는 Claude가 허가 없이 파일을 수정하고 명령을 실행합니다. `settings.json`으로 허용·차단 규칙을 설정할 수 있었어요.

그런데 기존 `deny` 규칙은 **더 구체적인 `allow` 규칙이 있으면 무시**될 수 있었습니다.

이번에 추가된 `hard_deny`는 다릅니다.

> 🍱 **비유로 설명하면**: 일반 `deny`는 "이 구역은 출입 제한"인데, 특별 출입증(allow 규칙)이 있으면 들어갈 수 있었어요. `hard_deny`는 "이 구역은 출입 절대 금지 — 어떤 출입증도 무효" 수준의 규칙입니다.

### 설정 방법

`settings.json` 파일에 `autoMode.hard_deny` 배열을 추가합니다:

```json
{
  "autoMode": {
    "allow": [
      "Bash(git *)",
      "Write(*)"
    ],
    "hard_deny": [
      "Bash(rm -rf *)",
      "Bash(git push --force *)",
      "Bash(DROP TABLE *)"
    ]
  }
}
```

### `deny`와 `hard_deny` 비교

| 구분 | `deny` | `hard_deny` |
|------|--------|-------------|
| 다른 `allow` 규칙으로 우회 가능? | ✅ 가능 | ❌ 불가능 |
| 절대 차단? | 아니오 | **예** |
| 사용 예시 | 일반적인 제한 | 데이터 삭제, 강제 푸시 등 재앙 방지 |

### 어떤 명령어를 `hard_deny`로 막아야 할까요?

```json
"hard_deny": [
  "Bash(rm -rf *)",
  "Bash(git push --force*)",
  "Bash(git reset --hard*)",
  "Bash(DROP *)",
  "Bash(DELETE FROM * WHERE*)"
]
```

> 한 번 실행하면 되돌리기 어렵거나 불가능한 명령들을 `hard_deny`에 넣으세요.

<div class="note-star">
★ <strong>Auto mode 설정 파일 위치</strong><br />
<code>~/.claude/settings.json</code> (전역) 또는 프로젝트 <code>.claude/settings.json</code>에 추가하세요.<br />
자세한 내용: <a href="https://code.claude.com/docs/en/auto-mode-config">Auto mode config guide</a>
</div>

<div class="note-circle">
○ v2.1.128~ 에서 추가됐어요.
</div>

---

## 🌿 워크트리(Worktree) 기본 분기 설정

### 어떤 기능인가요?

`--worktree` 옵션으로 병렬 작업 공간(워크트리)을 만들 때, 어느 브랜치에서 분기할지를 이제 설정으로 제어할 수 있습니다.

> 🍱 **비유로 설명하면**: 복사본을 만들 때, "원본(로컬 HEAD)"에서 복사할지, "최신 클라우드 버전(remote default)"에서 복사할지 고르는 거예요.

### 설정 방법

`settings.json`에 `worktree.baseRef` 추가:

```json
{
  "worktree": {
    "baseRef": "fresh"
  }
}
```

| 값 | 의미 | 특징 |
|----|------|------|
| `fresh` | 원격 기본 브랜치(remote default) | **기본값**. 아직 푸시 안 한 커밋이 새 워크트리에 들어가지 않음 |
| `head` | 로컬 HEAD | 내 로컬 작업이 워크트리에 포함됨 |

### 언제 각각 써야 할까요?

- **`fresh` (기본)**: 깨끗한 시작점 원할 때. 여러 에이전트가 각각 독립적으로 실험할 때.
- **`head`**: 현재 내 작업 내용을 워크트리에도 가져가고 싶을 때. 내 변경사항이 기반이 필요한 작업일 때.

<div class="note-circle">
○ 워크트리 전체 가이드: <a href="https://code.claude.com/docs/en/advanced">Advanced guide</a>
</div>

---

## 그 외 업데이트 (v2.1.128~136)

| 업데이트 | 한마디 |
|---------|--------|
| 훅(Hook)에 `effort.level` / `$CLAUDE_EFFORT` | 현재 effort 수준을 훅 스크립트·Bash 도구에서 읽을 수 있음 |
| `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` | 풀스크린 렌더러 비활성화 → 터미널 네이티브 스크롤백 유지 |
| `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` | Homebrew·WinGet으로 설치한 경우 백그라운드 자동 업데이트 |
| `CLAUDE_CODE_SESSION_ID` 환경변수 | Bash 서브프로세스 환경에도 세션 ID 전달 (훅의 `session_id`와 동일) |
| `/mcp` 도구 수 표시 | MCP 서버별 연결된 도구 개수 표시, 도구 0개인 서버 경고 |
| `--channels` 콘솔 인증 지원 | API 키 인증 환경에서도 채널 기능 사용 가능 |
| 서브에이전트 캐시 최적화 | 진행 상황 요약이 프롬프트 캐시 히트 → `cache_creation` 토큰 비용 약 **3배** 절감 |
| OAuth 신뢰성 개선 | 병렬 세션 동시 갱신 시 401 오류, MCP 갱신 토큰 손실, 자격증명 쓰기 경합 수정 |
| `parentSettingsBehavior` 관리자 키 | SDK `managedSettings`를 정책 병합에 포함시키는 관리자 설정 |

---

## Auto mode 완전 안전하게 쓰는 법

Auto mode를 처음 설정하는 분을 위한 권장 `settings.json` 구조:

```json
{
  "autoMode": {
    "allow": [
      "Read(*)",
      "Write(src/*)",
      "Bash(npm run test)",
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git push origin*)"
    ],
    "deny": [
      "Bash(git push --force*)"
    ],
    "hard_deny": [
      "Bash(rm -rf *)",
      "Bash(git reset --hard*)",
      "Bash(DROP *)",
      "Bash(DELETE FROM*)"
    ]
  }
}
```

> **계층 구조**: `hard_deny` > `allow` > `deny`. `hard_deny`가 최우선입니다.

---

## 다음 단계

- **Auto mode 설정 전체 가이드** — 허용·차단 규칙 상세 설명
- **플러그인 마켓플레이스** — 공식 마켓에서 플러그인 찾기
- **워크트리 가이드** — 병렬 개발 환경 설정하기
