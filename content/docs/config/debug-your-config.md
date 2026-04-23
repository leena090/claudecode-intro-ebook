---
title: "[공] 설정이 왜 안 먹히지? — 설정 디버그 완전 가이드"
description: "CLAUDE.md, settings.json, hooks, MCP, skills가 적용 안 될 때 /context·/doctor·/hooks·/mcp로 원인을 찾는 방법"
tags: ["자동생성", "debug", "디버그", "설정", "CLAUDE.md", "hooks", "MCP", "skills", "doctor", "context", "troubleshooting"]
category: "config"
order: 9
lastUpdated: "2026-04-23"
---

<div class="note-star">
★ "설정을 분명히 했는데 클로드가 무시해요" — 이 문서가 바로 그 상황을 위한 거예요.<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/debug-your-config">code.claude.com/docs/en/debug-your-config</a>
</div>

## 왜 내 설정이 적용 안 될까요?

Claude Code를 쓰다 보면 이런 상황이 생겨요:

- CLAUDE.md에 "항상 한국어로 답해"라고 썼는데 영어로 답해요
- settings.json에 훅(hooks)을 넣었는데 실행이 안 돼요
- MCP 서버를 설치했는데 Claude가 그 도구를 못 써요
- 스킬(skills)을 만들었는데 `/스킬명` 명령어가 인식 안 돼요

> 🍱 **비유로 설명하면**: 레시피를 분명히 냉장고에 붙여놨는데 요리사(Claude)가 다른 방식으로 요리해요. "레시피 못 봤어요?" 하고 물어보면 "어, 냉장고에 붙어 있었나요? 전 오늘 다른 냉장고 봤어요" 할 수도 있어요. 어떤 파일을 실제로 읽었는지 확인하는 게 먼저예요.

---

## 진단 도구 4가지

Claude Code에는 **설정이 제대로 로드됐는지 확인하는 내장 명령어 4개**가 있어요.

| 명령어 | 역할 | 언제 써요? |
|---|---|---|
| `/context` | 현재 컨텍스트 창 전체 내용 보기 | CLAUDE.md가 로드됐는지 확인 |
| `/doctor` | 설정 전체 진단 보고서 | 뭔가 잘못됐는데 뭔지 모를 때 |
| `/hooks` | 훅 설정 목록 보기 | hooks가 안 실행될 때 |
| `/mcp` | MCP 서버 상태 확인 | MCP 도구가 안 보일 때 |

---

## `/context` — 클로드가 실제로 뭘 읽고 있나

```
> /context
```

이 명령어를 실행하면 **현재 대화에 로드된 모든 것**이 보여요:
- 어떤 CLAUDE.md 파일들이 불러와졌는지
- 각 파일이 어느 경로에서 왔는지
- 토큰을 얼마나 쓰고 있는지

### 확인 포인트

```
📄 CLAUDE.md 로드 목록:
  [1] ~/.claude/CLAUDE.md (전역)        — 247 토큰
  [2] /my-project/CLAUDE.md (프로젝트)  — 512 토큰
  [3] /my-project/src/CLAUDE.md (하위)  — 89 토큰
```

내가 넣은 CLAUDE.md가 목록에 없다면?

**체크리스트:**

- [ ] 파일 이름이 정확히 `CLAUDE.md` 인지 확인 (대소문자 구별!)
- [ ] 파일 위치가 프로젝트 루트 또는 `~/.claude/` 인지 확인
- [ ] `@` 임포트 문법 사용 시 경로가 정확한지 확인

> 🍱 **비유로 설명하면**: 요리사에게 "오늘 어떤 레시피 봤어요?"라고 물어보는 것과 같아요. 목록에 없으면 레시피가 엉뚱한 데 있거나 이름이 틀린 거예요.

---

## `/doctor` — 전체 설정 건강검진

```
> /doctor
```

모든 설정 항목을 스캔해서 **문제가 있는 곳을 짚어줘요**.

### 출력 예시

```
🔍 Claude Code 설정 진단 보고서
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ CLAUDE.md         — 정상 (전역 + 프로젝트 2개 로드됨)
✅ settings.json     — 정상 (프로젝트 설정 적용 중)
⚠️  hooks            — 경고: PreToolUse 훅이 0ms 이내 응답 없음
❌ MCP: my-server    — 오류: 연결 실패 (포트 3000 응답 없음)
✅ skills            — 정상 (3개 로드됨)

권장 조치:
  • hooks: 타임아웃 설정 확인 또는 훅 스크립트 권한 (chmod +x) 확인
  • MCP: `my-server` 프로세스가 실행 중인지 확인
```

`/doctor`가 알려주는 항목:

| 표시 | 의미 |
|---|---|
| ✅ | 정상 로드·작동 중 |
| ⚠️ | 로드됐지만 경고 있음 |
| ❌ | 오류 — 적용 안 됨 |

> 🍱 **비유로 설명하면**: 자동차 출발 전 전체 점검 보고서 같아요. 엔진, 타이어, 연료, 브레이크 중 뭐가 문제인지 한 번에 알 수 있어요.

---

## `/hooks` — 훅이 제대로 등록됐는지 확인

```
> /hooks
```

현재 등록된 **모든 훅(hooks)의 목록과 상태**를 보여줘요.

### 출력 예시

```
📎 등록된 훅
  PreToolUse  → /home/user/.claude/hooks/pre-tool.sh  [active]
  PostToolUse → ./claude/hooks/post-tool.sh            [active]
  Stop        → ./claude/hooks/notify.sh               [inactive — 파일 없음]
```

### 훅이 안 실행될 때 체크리스트

- [ ] 훅 스크립트 파일이 실제로 존재하는지 확인
- [ ] 실행 권한이 있는지 확인 (`chmod +x your-hook.sh`)
- [ ] 경로가 절대 경로인지 상대 경로인지 확인
- [ ] 훅 타입(PreToolUse, PostToolUse, Stop 등)이 올바른지 확인

```bash
# 권한 부여 예시
chmod +x .claude/hooks/my-hook.sh

# 훅 스크립트 직접 실행 테스트
echo '{"tool_name":"Bash","tool_input":{"command":"ls"}}' | .claude/hooks/my-hook.sh
```

> 🍱 **비유로 설명하면**: "출발 전 자동으로 문자 보내기" 기능을 설정했는데 안 된다면, 문자 앱이 설치됐는지·연락처가 있는지 먼저 확인해야겠죠. `/hooks`가 바로 그 확인이에요.

---

## `/mcp` — MCP 서버 연결 상태 확인

```
> /mcp
```

설치한 **MCP(Model Context Protocol · 모델 컨텍스트 프로토콜) 서버들의 상태**를 보여줘요.

### 출력 예시

```
🔌 MCP 서버 상태
  github   — ✅ 연결됨 (32개 도구 사용 가능)
  postgres — ❌ 연결 실패: ECONNREFUSED 5432
  slack    — ⚠️ 연결됨 (인증 만료 경고)
```

### MCP 오류 유형별 대처

| 오류 | 원인 | 해결 |
|---|---|---|
| `ECONNREFUSED` | 서버 프로세스가 꺼져 있음 | 서버 실행 후 재시도 |
| `Timeout` | 서버 응답이 너무 느림 | timeout 값 늘리기 |
| `Authentication failed` | API 키·토큰 만료 | `.env` 또는 설정에서 키 갱신 |
| `Tool not found` | 툴 이름이 settings와 다름 | 툴 이름 대소문자 확인 |

```bash
# MCP 서버 재시작 예시 (npx 방식)
npx @modelcontextprotocol/server-postgres restart

# .claude/settings.json에서 MCP 설정 확인
cat .claude/settings.json | grep -A 10 '"mcpServers"'
```

---

## 자주 발생하는 상황별 진단 흐름

### 상황 1: CLAUDE.md를 수정했는데 클로드가 무시해요

```
1. /context 실행
2. CLAUDE.md 목록 확인
3. 해당 파일이 없으면 → 파일 이름/위치 재확인
4. 있는데도 무시한다면 → /doctor로 문법 오류 확인
5. 여전히 이상하다면 → /clear 후 새 세션에서 재확인
```

### 상황 2: settings.json 수정 후 반영 안 돼요

```
1. /doctor 실행 → settings.json 항목 상태 확인
2. JSON 문법 오류 여부 확인 (쉼표 빠뜨림, 괄호 안 맞음)
3. 전역(~/.claude/)과 프로젝트(.claude/) 설정 중 어느 쪽인지 확인
4. 클로드 재시작
```

> 💡 JSON 문법 확인은 터미널에서:
> ```bash
> cat .claude/settings.json | python3 -m json.tool
> ```

### 상황 3: skills(스킬)가 로드 안 돼요

```
1. /doctor 실행 → skills 항목 확인
2. 스킬 파일이 .claude/skills/ 또는 ~/.claude/skills/ 에 있는지 확인
3. 파일 확장자가 .md인지 확인
4. front-matter(---로 시작하는 설정 블록)가 올바른지 확인
```

---

## 진단 명령어 없이도 쓸 수 있는 팁

### 설정 파일 위치 빠른 확인

```bash
# 전역 설정 파일들
ls -la ~/.claude/

# 프로젝트 설정 파일들
ls -la .claude/

# CLAUDE.md 파일 모두 찾기 (현재 디렉토리 기준)
find . -name "CLAUDE.md" -not -path "*/node_modules/*"
```

### 로그 파일로 더 깊은 진단

Claude Code의 내부 로그를 보고 싶다면:

```bash
# 환경 변수로 디버그 로그 켜기
CLAUDE_LOG_LEVEL=debug claude

# 로그 파일 위치 (추정 — OS에 따라 다를 수 있음)
tail -f ~/.claude/logs/claude-code.log
```

---

## 더 알아보기

- [공식 문서 — debug-your-config](https://code.claude.com/docs/en/debug-your-config)
- [공식 문서 — troubleshooting](https://code.claude.com/docs/en/troubleshooting)
- [CLAUDE.md 작성법 (이 ebook)](/docs/config/claude-md)
- [settings.json 완전 정리 (이 ebook)](/docs/config/settings-json)
- [hooks 입문 (이 ebook)](/docs/config/hooks-intro)
- [MCP 설정법 (이 ebook)](/docs/config/mcp-setup)
- [.claude 디렉토리 탐구 — 공식 문서](https://code.claude.com/docs/en/claude-directory)
