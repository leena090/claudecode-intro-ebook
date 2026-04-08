---
title: "플러그인 마켓플레이스 — 남이 만든 Claude Code 확장 가져다 쓰기"
description: "/plugin marketplace add 부터 /plugin install 까지, 공식 플러그인 마켓플레이스 완전 가이드"
tags: ["고급", "플러그인", "마켓플레이스", "확장", "설치"]
category: "advanced"
order: 13
lastUpdated: "2026-04-09"
---

## 🏪 플러그인 마켓플레이스가 뭐예요?

**플러그인**은 Claude Code의 기능을 확장하는 패키지예요. 커스텀 명령어, 에이전트, 훅, MCP 서버, LSP 서버를 한 묶음으로 배포할 수 있습니다.

**마켓플레이스**는 이런 플러그인들을 모아둔 **카탈로그**예요. 마치 스마트폰의 앱스토어처럼, 남이 만들어둔 플러그인을 검색·설치·업데이트할 수 있습니다.

> 🍱 **비유로 설명하면**:
> - **플러그인** = 스마트폰 앱 (예: "KakaoTalk.apk")
> - **마켓플레이스** = 앱스토어 (예: "Google Play")
> - **`/plugin install` 명령** = 앱스토어에서 앱 다운로드 버튼

---

## 🎯 왜 쓰나요?

직접 커맨드·에이전트·훅·MCP 서버를 **하나씩 설치하는 건 번거롭고**, 여러 컴퓨터에서 같은 환경을 만들기도 어려워요. 플러그인 마켓플레이스는 이걸 해결합니다:

- ✅ **한 번 설치 → 어디서든 동일** — 팀원 전부 같은 커맨드·훅 쓰게
- ✅ **자동 업데이트** — 제작자가 올린 새 버전을 자동으로 받아옴
- ✅ **버전 관리** — 특정 버전·브랜치·커밋에 고정 가능
- ✅ **GitHub·npm에서 배포** — 익숙한 방식으로 공유

---

## 🚀 초간단 사용법 — 3단계

### 1단계: 마켓플레이스 추가

누군가 만든 마켓플레이스(예: `acme-corp/claude-plugins`)를 내 Claude Code에 등록해요.

```
/plugin marketplace add acme-corp/claude-plugins
```

> `owner/repo` 형식은 GitHub 저장소를 의미합니다. GitLab·직접 서버라면 전체 URL:
> `/plugin marketplace add https://gitlab.com/team/plugins.git`

### 2단계: 원하는 플러그인 설치

등록한 마켓플레이스 안의 플러그인을 설치합니다.

```
/plugin install code-formatter@claude-plugins
```

형식: `/plugin install [플러그인이름]@[마켓플레이스이름]`

### 3단계: 바로 사용

설치 끝. 해당 플러그인이 제공하는 커맨드·에이전트·훅이 **즉시 활성화**됩니다. 예를 들어 `code-formatter` 플러그인이 `/format` 커맨드를 제공하면:

```
/format
```

---

## 📦 마켓플레이스 관리 5가지 명령어

| 명령어 | 역할 |
|---|---|
| `/plugin marketplace add <source>` | 마켓플레이스 등록 |
| `/plugin marketplace list` | 등록된 마켓플레이스 목록 확인 |
| `/plugin marketplace update` | 모든 마켓플레이스 최신화 |
| `/plugin marketplace update <name>` | 특정 마켓플레이스만 최신화 |
| `/plugin marketplace remove <name>` | 마켓플레이스 제거 (설치된 플러그인도 함께 삭제) |

<div class="note-circle">
○ <strong>`remove` 주의</strong>: 마켓플레이스를 지우면 <strong>그 마켓플레이스에서 설치한 플러그인도 모두 제거</strong>됩니다. 단순 새로고침이 목적이면 <code>remove</code> 대신 <code>update</code>를 쓰세요.
</div>

---

## 🔍 플러그인 어디서 찾나요?

### 공식·커뮤니티 소스

| 출처 | 설명 |
|---|---|
| **GitHub 검색** | `"claude skill" path:/.claude/` 같은 쿼리로 공개 플러그인 탐색 (10,000+ 저장소) |
| **노모어매뉴얼 유튜브·커뮤니티** | 솔바드 수업·디스코드에서 공유되는 국내 플러그인 |
| **Anthropic 공식 마켓플레이스** | `claude-plugins-official` 이름은 **예약됨** (공식 마켓플레이스용) |

### 🚫 사칭 주의

Anthropic이 다음 이름들을 **공식용으로 예약**해뒀어요. 이 이름의 마켓플레이스가 있으면 **사칭**이니 설치하지 마세요:

- `claude-code-marketplace`
- `claude-code-plugins`
- `claude-plugins-official`
- `anthropic-marketplace`
- `anthropic-plugins`
- `official-claude-plugins` (사칭 차단)

---

## 🏢 회사·팀 환경에서 쓰기

### 팀원 전부에게 동일 마켓플레이스 강제

프로젝트 루트의 `.claude/settings.json`에 **사전 등록**하면, 팀원이 프로젝트를 열 때 자동으로 안내돼요. Claude한테 말로 시키면 됩니다:

```
우리 팀 전체가 쓸 마켓플레이스를 .claude/settings.json에 등록해줘.
acme-corp/claude-plugins 레포이고,
code-formatter·deployment-tools 플러그인은 기본 활성화해줘.
```

Claude가 `extraKnownMarketplaces` 와 `enabledPlugins` 설정을 자동으로 작성해줄 거예요.

### 보안이 중요한 회사 — 허용된 마켓만

회사 IT 담당자가 **승인된 마켓플레이스만 허용**하고 나머지는 차단할 수도 있어요. `managed-settings.json` 에 `strictKnownMarketplaces` 설정:

```json
{
  "strictKnownMarketplaces": [
    {"source": "github", "repo": "acme-corp/approved-plugins"}
  ]
}
```

> 🛡 **완전 잠금**이 필요하면 `strictKnownMarketplaces: []` (빈 배열)로 설정. 사용자가 어떤 마켓도 추가 못 합니다.

---

## 🖥 CLI에서 비대화형으로 — 스크립트·CI 용

Claude Code 창 안의 `/plugin` 커맨드와 **똑같은 기능**을 터미널에서 직접 실행할 수 있어요. CI/CD 자동화에 유용:

```bash
# Mac 터미널 / Windows PowerShell
claude plugin marketplace add acme-corp/claude-plugins
claude plugin install code-formatter@claude-plugins
claude plugin marketplace list
claude plugin marketplace update
```

### 팀 프로젝트에 고정 (scope 옵션)

```bash
claude plugin marketplace add acme-corp/claude-plugins --scope project
```

`--scope project`는 마켓플레이스를 **`.claude/settings.json`** 에 저장해서 팀원 전체가 공유합니다.

---

## ⚠️ 설치 전 반드시 확인할 것

### 1. **출처가 신뢰할 만한가?**
- GitHub 저장소의 스타 수, 커밋 히스토리, 이슈 활동
- 제작자의 평판 (Twitter/X, 블로그)
- **모르는 출처 = 설치 금지**

### 2. **플러그인 안에 뭐가 들었나?**
플러그인은 **커맨드·훅·MCP 서버**를 포함할 수 있어요. 훅과 MCP는 **내 컴퓨터에서 코드를 실행**합니다.

설치 전에 Claude한테 말로 시켜서 검토:
```
이 플러그인 .claude-plugin/plugin.json 열어서 어떤 훅·MCP·커맨드가 들어있는지 요약해줘.
위험해 보이는 거 있으면 알려줘.
```

### 3. **`disableSkillShellExecution` 고려**
출처가 완전히 신뢰되지 않으면 `settings.json`에 이 옵션을 켜두세요. Claude한테 말로 시키면 돼요:
```
disableSkillShellExecution 를 true로 설정해줘.
외부 플러그인이 내 쉘을 함부로 못 쓰게.
```

---

## 🎨 내가 만든 플러그인을 배포하려면?

간단한 흐름:

1. **플러그인 만들기** — 커맨드·에이전트·훅 묶음
2. **`marketplace.json` 작성** — 플러그인 카탈로그 파일
3. **GitHub에 push** — 저장소로 공개
4. **공유** — `/plugin marketplace add 내이름/내레포` 로 누구나 설치 가능

상세한 스펙·schema·보안은 공식 문서 참조:
- 📖 [공식 Marketplace 가이드](https://code.claude.com/docs/en/plugin-marketplaces)
- 📖 [공식 Plugins 가이드](https://code.claude.com/docs/en/plugins)

---

## 💡 노모어매뉴얼에서 추천하는 사용 흐름 (왕초보 버전)

1. **처음엔 설치 금지** — 기본 Claude Code만 먼저 익히세요 (최소 1주일)
2. **신뢰할 수 있는 한두 개만** — 대표님이 추천하거나, GitHub 스타 많은 것만
3. **설치 전 Claude한테 검토시키기** — 위 "설치 전 반드시 확인할 것" 단계
4. **`/cost` 모니터링** — 플러그인 중 MCP 서버가 있으면 토큰 많이 먹을 수 있음
5. **한 번에 하나씩** — 여러 개 동시 설치하면 뭐가 문제인지 추적 안 됨

---

## 관련 가이드

- 📖 [플러그인 & 스킬 시스템](/docs/advanced/plugins) — 플러그인 만드는 법
- 📖 [스킬 시스템 가이드](/docs/config/skills-guide) — 더 가벼운 확장 방법
- 📖 [MCP 서버 설정](/docs/config/mcp-setup) — 플러그인 안의 MCP 서버 다루기
- 📖 [Hooks 가이드](/docs/config/hooks-intro) — 플러그인이 포함하는 훅 이해
- 📖 [settings.json 가이드](/docs/config/settings-json) — extraKnownMarketplaces 등록

---

## 💬 마지막 조언

플러그인 마켓플레이스는 **강력하지만 양날의 검**이에요. 좋은 건 **팀 전체 생산성을 확 올려주고**, 나쁜 건 **잘못 설치하면 보안·비용 문제**를 만듭니다.

> 🍱 **핵심 요약**: "설치는 간단, 검증은 꼼꼼" — 출처가 신뢰할 만한지, 안에 뭐가 들었는지, 얼마나 토큰을 먹는지, 이 세 가지만 확인하면 안전하게 쓸 수 있어요.
