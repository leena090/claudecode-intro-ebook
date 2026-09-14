---
title: "[공] 설정 레퍼런스 — settings.json 옵션 완전 정리"
description: "2026년 8월 공식 추가된 Settings Reference 페이지를 바탕으로, Claude Code settings.json의 주요 설정값을 한국어로 정리했어요"
tags: ["자동생성", "설정", "settings", "레퍼런스", "참조", "settings.json", "옵션"]
category: "config"
order: 12
lastUpdated: "2026-09-14"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — Claude Code의 모든 설정을 한 파일(<code>settings.json</code>)로 관리해요. 이 파일 하나로 모델 선택부터 권한까지 다 설정 가능! <code>[공]</code><br />
★ <strong>신규 페이지</strong> — 2026년 8월 공식 문서에 <code>settings-reference</code>와 <code>settings-example</code> 페이지가 추가됐어요<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/settings-reference">settings-reference</a> | <a href="https://code.claude.com/docs/en/settings-example">settings-example</a>
</div>

## settings.json이 뭔가요?

> 📱 **비유**: 스마트폰 '설정' 앱 같은 거예요.  
> 화면 밝기, 알림, 언어 등을 여기서 한 번에 바꾸듯이,  
> Claude Code의 각종 설정을 `settings.json` 파일 하나에서 관리해요.

Claude Code는 여러 곳에서 설정 파일을 찾아요:

| 위치 | 파일 | 적용 범위 |
|---|---|---|
| 사용자 홈 | `~/.claude/settings.json` | 내 모든 프로젝트 |
| 프로젝트 | `.claude/settings.json` | 이 프로젝트만 |
| 프로젝트(로컬) | `.claude/settings.local.json` | 이 프로젝트, git 제외 |

더 구체적인 설정이 더 넓은 설정을 덮어써요 (프로젝트 > 사용자 > 기본값).

---

## 주요 설정 항목

### 1. 모델 설정 (`model`)

```json
{
  "model": "claude-opus-5"
}
```

| 모델 ID | 설명 |
|---|---|
| `claude-sonnet-5` | 기본값, 일상 코딩에 적합 |
| `claude-opus-5` | 복잡한 작업, 장기 에이전트 |
| `claude-haiku-4-5-20251001` | 빠르고 가벼운 작업 |
| `claude-fable-5-1` | 최첨단, 접근 권한 필요 |

---

### 2. 권한 설정 (`permissions`)

> 🚦 **비유**: 인턴에게 "이것만 해도 돼, 이건 하지 마" 규칙 목록이에요.

```json
{
  "permissions": {
    "allow": [
      "Bash(git:*)",
      "Bash(npm run test:*)",
      "Read(**)"
    ],
    "deny": [
      "Bash(rm -rf:*)",
      "WebFetch(api.example.com:*)"
    ]
  }
}
```

**자주 쓰는 allow 패턴:**

| 패턴 | 의미 |
|---|---|
| `Bash(git:*)` | git 명령어는 다 허용 |
| `Read(**)` | 모든 파일 읽기 허용 |
| `Edit(src/**:*)` | src 폴더 편집 허용 |
| `Bash(npm run *:*)` | npm run 명령어 허용 |

---

### 3. 환경 변수 (`env`)

```json
{
  "env": {
    "NODE_ENV": "development",
    "API_BASE_URL": "https://api.example.com"
  }
}
```

> ⚠️ **중요**: 비밀번호, API 키는 여기에 직접 쓰지 마세요!  
> `settings.local.json`에 쓰거나, 운영체제의 환경 변수를 사용하세요.

---

### 4. Claude MD 설정 (`claudeMD`)

```json
{
  "claudeMD": {
    "disableProjectMdLoading": false,
    "additionalPaths": ["/home/user/shared-claude.md"]
  }
}
```

CLAUDE.md 파일의 동작을 제어해요.

---

### 5. 훅 설정 (`hooks`)

> 🎣 **비유**: 낚시 훅처럼, 특정 이벤트가 발생할 때 자동으로 뭔가를 실행해요.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo '명령어 실행 전 체크'"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $FILE"
          }
        ]
      }
    ]
  }
}
```

**주요 훅 이벤트:**

| 훅 | 언제 실행되나요? |
|---|---|
| `PreToolUse` | 도구 사용 **직전** |
| `PostToolUse` | 도구 사용 **직후** |
| `UserPromptSubmit` | 내가 메시지를 보낸 직후 |
| `Stop` | 클로드가 답변을 마쳤을 때 |

---

## 완성된 예시 파일

공식 문서(`settings-example.md`)에서 제공하는 예시 구조를 한국어 주석으로 설명했어요:

```json
{
  // 사용할 클로드 모델
  "model": "claude-opus-5",
  
  // 권한 설정
  "permissions": {
    "allow": [
      "Bash(git:*)",          // git 명령어 전체 허용
      "Bash(npm run test:*)"  // 테스트 실행 허용
    ],
    "deny": []                // 특별히 막을 건 없음
  },
  
  // 환경 변수
  "env": {
    "MY_PROJECT_NAME": "awesome-app"
  },
  
  // 훅 (자동 실행 규칙)
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "git diff --stat"  // 파일 수정 후 변경사항 표시
          }
        ]
      }
    ]
  }
}
```

---

## 자주 묻는 질문

### Q. settings.json이 없어도 쓸 수 있나요?

네! 없으면 기본값으로 동작해요. 자주 쓰는 설정이 생기면 그때 만들면 돼요.

### Q. 회사 프로젝트에서 settings.json을 git에 올려야 하나요?

`.claude/settings.json`은 팀이 공유하는 설정이면 git에 올려도 돼요.  
개인 설정이나 비밀 정보는 `.claude/settings.local.json`에 쓰고, `.gitignore`에 추가하세요.

### Q. 설정이 안 먹히면 어떻게 하나요?

```bash
# 현재 설정 확인
claude config list

# 설정 파일 위치 확인
claude config where
```

> 📌 **공식 문서**: [Settings Reference 전체 보기](https://code.claude.com/docs/en/settings-reference)
