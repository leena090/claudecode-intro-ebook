---
title: "[공] CLI 플러그인 힌트 — 내 도구가 Claude에게 플러그인 설치를 권유하는 법"
description: "CLI·SDK 개발자를 위한 플러그인 힌트 프로토콜. CLAUDECODE 환경변수 감지 후 stderr로 힌트를 내보내면 Claude Code가 플러그인 설치를 사용자에게 제안합니다."
tags: ["자동생성", "plugin-hints", "플러그인힌트", "CLI개발자", "SDK", "CLAUDECODE", "고급"]
category: "advanced"
order: 25
lastUpdated: "2026-05-18"
---

<div class="note-star">
★ 출처: <a href="https://code.claude.com/docs/en/plugin-hints">code.claude.com/docs/en/plugin-hints</a> [공]<br />
★ CLI·SDK 유지관리자(maintainer) 대상 기능 — 일반 사용자에게는 해당 없음<br />
★ 공식 발표 기준
</div>

## 플러그인 힌트란?

자신이 만든 **CLI(명령줄 도구)나 SDK**가 Claude Code 안에서 실행될 때, "**이 도구에 맞는 공식 플러그인을 설치하면 더 잘 쓸 수 있어요**"라고 사용자에게 알려주는 기능이에요.

> 🏪 **비유로 설명하면**: 새 세탁기를 샀을 때 세탁기 앱이 "전용 세제를 추천해드릴까요?" 라고 물어보는 것처럼, 내가 만든 CLI가 Claude Code 사용자에게 "이 명령어와 잘 맞는 플러그인이 있어요, 설치할까요?" 라고 안내하는 방식이에요.

**이 기능을 쓸 수 있는 사람**: Anthropic 공식 플러그인 마켓플레이스에 플러그인이 등록된 CLI/SDK 개발자

---

## 작동 원리

Claude Code는 실행하는 모든 명령어에 `CLAUDECODE=1` 환경변수를 자동으로 설정해요.

내가 만든 CLI가 이 변수를 감지하면 → stderr에 힌트 태그 한 줄을 출력 → Claude Code가 읽어서 플러그인 설치 안내를 사용자에게 제시해요.

**핵심 규칙:**
- 힌트 태그는 **stderr**에 독립된 한 줄로 출력
- Claude Code가 이 줄을 **모델에 전달하기 전에 제거** (토큰 낭비 없음)
- 사용자가 **직접 확인 후 설치** (자동 설치 없음)
- 플러그인당 **평생 1회**만 알림 (반복 노출 없음)

---

## 코드 예시

### Node.js (JavaScript/TypeScript)
```javascript
if (process.env.CLAUDECODE) {
  process.stderr.write(
    '<claude-code-hint v="1" type="plugin" value="my-cli@claude-plugins-official" />\n'
  )
}
```

### Python
```python
import os, sys

if os.environ.get("CLAUDECODE"):
    print(
        '<claude-code-hint v="1" type="plugin" value="my-cli@claude-plugins-official" />',
        file=sys.stderr,
    )
```

### Go
```go
if os.Getenv("CLAUDECODE") != "" {
    fmt.Fprintln(os.Stderr,
        `<claude-code-hint v="1" type="plugin" value="my-cli@claude-plugins-official" />`)
}
```

### Shell
```shell
[ -n "$CLAUDECODE" ] &&
  printf '%s\n' '<claude-code-hint v="1" type="plugin" value="my-cli@claude-plugins-official" />' >&2
```

`my-cli` 부분을 공식 마켓플레이스에 등록된 내 플러그인 이름으로 바꿔요.

---

## 힌트 태그 형식

```
<claude-code-hint v="1" type="plugin" value="플러그인명@마켓플레이스" />
```

| 속성 | 필수 | 설명 |
|---|---|---|
| `v` | ✅ | 프로토콜 버전 (`1` 고정) |
| `type` | ✅ | 힌트 종류 (`plugin` 고정) |
| `value` | ✅ | `플러그인명@마켓플레이스` 형식 |

현재 지원하는 마켓플레이스: `claude-plugins-official` (Anthropic 공식만 가능)

---

## 어디서 힌트를 내보내면 좋을까요?

| 시점 | 이유 |
|---|---|
| `--help` 출력 시 | Claude가 모르는 CLI를 발견했을 때 가장 먼저 실행하는 명령 |
| 알 수 없는 서브명령 오류 시 | Claude가 CLI 사용에 막혔을 때 |
| 로그인·인증 성공 시 | 사용자가 설정 중인 맥락 |
| 최초 실행 환영 메시지 시 | 온보딩 자연스러운 순간 |

---

## 사용자에게 보이는 화면

조건을 통과하면 이런 안내가 표시돼요:

```
─────────────────────────────────────────────
  Plugin Recommendation

    The my-cli command suggests installing a plugin.

    Plugin: my-cli
    Marketplace: claude-plugins-official
    Official integration for my-cli deployments

    Would you like to install it?
    ❯ 1. Yes, install my-cli
      2. No
      3. No, and don't show plugin installation hints again

─────────────────────────────────────────────
```

- 30초 내 응답 없으면 **자동으로 "No"**
- "Yes"를 고르면 **사용자 범위로 설치**
- "다시 보지 않기"를 고르면 **해당 사용자에게는 영구 숨김**

---

## 조건 (이 조건을 통과해야 힌트가 표시됨)

1. **태그가 독립된 한 줄에 있어야 함** (중간에 끼어 있으면 무시)
2. **Anthropic 공식 마켓플레이스의 플러그인이어야 함** (다른 마켓플레이스 불가)
3. **아직 설치되지 않은 플러그인이어야 함**
4. **이전에 이 플러그인을 안내한 적 없어야 함**

---

## 공식 마켓플레이스 등록 방법

플러그인을 먼저 공식 마켓플레이스에 등록해야 힌트 기능이 작동해요:

- **Claude.ai**: [claude.ai/settings/plugins/submit](https://claude.ai/settings/plugins/submit)
- **Console**: [platform.claude.com/plugins/submit](https://platform.claude.com/plugins/submit)

---

> 📚 **관련 문서**
> - [플러그인 만들기](/docs/advanced/plugins) — 플러그인 개발 시작하기
> - [플러그인 마켓플레이스](/docs/advanced/plugin-marketplace) — 마켓플레이스 소개
> - [환경변수 레퍼런스](/docs/tips/useful-flags) — `CLAUDECODE` 등 환경변수 목록
