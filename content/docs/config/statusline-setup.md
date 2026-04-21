---
title: "컨텍스트 게이지 바 설치 — 남은 한도·진행률 한눈에"
description: "Claude Code 프롬프트 창 아래에 컨텍스트 사용률·5시간 한도 리셋까지 남은 시간을 색상 진행바로 표시하는 공식 기능"
tags: ["설정", "statusline", "컨텍스트", "진행바", "한도"]
category: "config"
order: 8
lastUpdated: "2026-04-21"
---


## 이게 뭔가요?

Claude Code로 한참 작업하다 보면 갑자기 <mark>**"컨텍스트가 가득 찼습니다"**</mark> 또는 <mark>**"5시간 한도에 도달했습니다"**</mark>라고 뜨면서 멈춰버릴 때가 있어요. 당황스럽죠.

**Statusline(상태 표시줄)**은 프롬프트 창 바로 아래에 작은 **게이지 바**를 띄워서, 이런 일이 일어나기 전에 미리 볼 수 있게 해주는 공식 기능입니다.

### Before / After

**설치 전 — 아무 정보 없음**

```
>
```

**설치 후 — 한눈에**

```
[Opus 4.7] ████████░░░░░░░░░░░░ 47% context
📁 claudecode-intro-ebook · 세션 28분 · 5h리셋 54분후
>
```

<div class="note-star">
⭐ 이건 Anthropic <strong>공식 기능</strong>이에요(2026-03 추가). 써드파티 도구 설치 아니고, 꼼수도 아닙니다. <code>settings.json</code>에 한 줄만 넣으면 돼요.
</div>

---

## 어디서 동작하나요?

| 플랫폼 | 동작 |
|---|---|
| **Claude Code 터미널(CLI)** | ✅ 동작 |
| Claude 웹앱 (claude.ai) | ❌ 해당 없음 |
| Claude Desktop 앱 | ❌ 해당 없음 |
| Claude Code 웹 (claude.ai/code) | ❌ 해당 없음 |

즉 **터미널에서 `claude` 명령어로 쓰는 분**만 해당돼요. 웹앱만 쓰시면 이 챕터는 건너뛰세요.

---

## 왜 유용한가요? (구독자 관점)

구독자에게 가장 아픈 순간은 **작업 중간에 한도·컨텍스트가 다 차는 것**이에요. Statusline이 있으면:

- **빨강이 뜨면** = 컨텍스트 80%↑ → 지금 [<code>/rewind → Summarize from here</code>](/docs/tips/token-saving-web-cowork) 쓸 타이밍
- **5시간 리셋 10분 전** = "중요한 작업 미루고 커피 한 잔"
- **세션 경과 시간** = "아까부터 얼마나 썼지?" 감각

결국 <mark>**예측 가능성**</mark>이 생기는 거예요. 갑자기 끊기는 일을 대폭 줄일 수 있습니다.

---

## 가장 쉬운 설치 — "말로 시키기" (추천)

Claude Code 세션 안에서 **한 줄**만 치세요. Claude가 스크립트·설정 파일을 전부 알아서 만들어 줍니다.

### 1단계 — 자연어 명령

```
/statusline 모델 이름이랑 현재 컨텍스트 퍼센트를 초록/노랑/빨강 진행바로 보여줘
```

### 2단계 — Claude가 자동으로 생성

- `~/.claude/statusline.sh` (스크립트 파일)
- `~/.claude/settings.json` 의 `statusLine` 필드 (설정 연결)

### 3단계 — 새 세션으로 확인

```bash
# 현재 세션 나가기
exit

# 다시 실행
claude
```

프롬프트 바 아래에 게이지 바가 나타납니다. 끝.

<div class="callout insight">
<div class="callout-head"><span class="stamp">💡</span>자연어 예시 — 내가 원하는 모양으로 요청</div>
<ul>
<li><code>/statusline 세션 경과시간이랑 5시간 한도 리셋까지 남은 시간도 추가해줘</code></li>
<li><code>/statusline Git 브랜치도 같이 보여줘</code></li>
<li><code>/statusline 이모지 빼고 더 심플하게</code></li>
<li><code>/statusline 게이지 바 색깔 진한 파랑으로 바꿔줘</code></li>
</ul>
<p>Claude가 기존 스크립트를 <strong>알아서 수정</strong>해줘요. 파일을 직접 건드릴 필요 없습니다.</p>
</div>

---

## 삭제도 한 줄

마음에 안 들면 언제든 지울 수 있어요.

```
/statusline 삭제
```

또는:

```
/statusline delete
```

---

## 수동 설치 (고급) — 복사 붙여넣기용

자연어로 설정했더니 원하는 모양이 안 나온다거나, **정확히 이 모양으로** 하고 싶다면 아래 스크립트를 그대로 복사하세요. 이 책에서 쓰는 **구독자 맞춤 버전**이에요.

### 1단계 — 스크립트 파일 만들기

터미널에서:

```bash
mkdir -p ~/.claude
touch ~/.claude/statusline.sh
chmod +x ~/.claude/statusline.sh
```

그리고 **`~/.claude/statusline.sh`** 파일에 아래 내용을 붙여넣으세요 (텍스트 에디터로 열어서):

```bash
#!/bin/bash
# 구독자 맞춤 — 모델·컨텍스트·세션시간·5h 한도 리셋까지
# 가격 표시는 없음 (구독자는 의미 없음)

input=$(cat)

if command -v jq >/dev/null 2>&1; then
  MODEL=$(echo "$input" | jq -r '.model.display_name // .model.id // "Claude"')
  PCT=$(echo "$input" | jq -r '.context_window.used_percentage // 0' | cut -d. -f1)
  DIR=$(echo "$input" | jq -r '.workspace.current_dir // ""')
  DUR_MS=$(echo "$input" | jq -r '.cost.total_duration_ms // 0' | cut -d. -f1)
  RESET_AT=$(echo "$input" | jq -r '.rate_limits.five_hour.resets_at // 0' | cut -d. -f1)
else
  MODEL="Claude"; PCT=0; DIR=""; DUR_MS=0; RESET_AT=0
fi

[[ "$PCT" =~ ^[0-9]+$ ]] || PCT=0
(( PCT > 100 )) && PCT=100
(( PCT < 0 )) && PCT=0
[[ "$DUR_MS" =~ ^[0-9]+$ ]] || DUR_MS=0
[[ "$RESET_AT" =~ ^[0-9]+$ ]] || RESET_AT=0

# 색상: <50 초록 / 50~79 노랑 / 80+ 빨강
if (( PCT < 50 )); then
  COLOR=$'\033[32m'
elif (( PCT < 80 )); then
  COLOR=$'\033[33m'
else
  COLOR=$'\033[31m'
fi
DIM=$'\033[2m'
RESET=$'\033[0m'
BOLD=$'\033[1m'

BAR_LEN=20
FILLED=$(( PCT * BAR_LEN / 100 ))
EMPTY=$(( BAR_LEN - FILLED ))
BAR="${COLOR}"
for ((i=0;i<FILLED;i++)); do BAR+="█"; done
BAR+="${DIM}"
for ((i=0;i<EMPTY;i++)); do BAR+="░"; done
BAR+="${RESET}"

DUR_MIN=$(( DUR_MS / 60000 ))
if (( DUR_MIN < 60 )); then
  DUR_STR="${DUR_MIN}분"
else
  DUR_HOUR=$(( DUR_MIN / 60 ))
  DUR_REMAIN=$(( DUR_MIN % 60 ))
  DUR_STR="${DUR_HOUR}h${DUR_REMAIN}m"
fi

NOW=$(date +%s)
if (( RESET_AT > NOW )); then
  REMAIN_SEC=$(( RESET_AT - NOW ))
  REMAIN_MIN=$(( REMAIN_SEC / 60 ))
  if (( REMAIN_MIN < 60 )); then
    LIMIT_STR="5h리셋 ${REMAIN_MIN}분후"
  else
    LIMIT_H=$(( REMAIN_MIN / 60 ))
    LIMIT_M=$(( REMAIN_MIN % 60 ))
    LIMIT_STR="5h리셋 ${LIMIT_H}h${LIMIT_M}m후"
  fi
else
  LIMIT_STR=""
fi

DIR_NAME="${DIR##*/}"
[[ -z "$DIR_NAME" ]] && DIR_NAME="~"

printf "%b[%s]%b %s %b%s%% context%b\n" \
  "$BOLD" "$MODEL" "$RESET" \
  "$BAR" \
  "$COLOR" "$PCT" "$RESET"

if [[ -n "$LIMIT_STR" ]]; then
  printf "%b📁 %s · 세션 %s · %s%b\n" "$DIM" "$DIR_NAME" "$DUR_STR" "$LIMIT_STR" "$RESET"
else
  printf "%b📁 %s · 세션 %s%b\n" "$DIM" "$DIR_NAME" "$DUR_STR" "$RESET"
fi
```

### 2단계 — settings.json 수정

**`~/.claude/settings.json`** 파일을 열어서, 맨 아래 `}` 바로 위에 아래 구절 추가 (이미 다른 설정이 있으면 쉼표 `,`로 이어주세요).

```json
"statusLine": {
  "type": "command",
  "command": "~/.claude/statusline.sh",
  "padding": 2
}
```

settings.json 전체가 처음이라면 **새 파일**에 이렇게:

```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh",
    "padding": 2
  }
}
```

### 3단계 — Claude Code 재시작

```bash
exit
claude
```

---

## 색상 규칙

구독자에게 중요한 **3단 경고 시스템**이에요.

| 색상 | 범위 | 뜻 | 행동 |
|---|---|---|---|
| 🟢 **초록** | 0~49% | 여유 | 마음껏 작업 |
| 🟡 **노랑** | 50~79% | 주의 | 곧 정리 필요 |
| 🔴 **빨강** | 80%↑ | 경고 | 지금 `/rewind → Summarize from here` 또는 새 대화 |

빨강이 뜨면 **늦기 전에** 대화를 정리해야 해요. 갑자기 `"maximum length"` 에러가 뜨는 걸 미리 막을 수 있습니다.

---

## 더 풍부한 버전 — 공식 가능 항목

공식 문서에 따르면 **스크립트에 아래 필드들을 표시**할 수 있어요.

| 필드 | 뜻 |
|---|---|
| `model.display_name` | 모델 이름 (Opus 4.7 / Sonnet 4.6…) |
| `context_window.used_percentage` | 컨텍스트 사용률 % |
| `context_window.total_input_tokens` | 누적 입력 토큰 |
| `context_window.total_output_tokens` | 누적 출력 토큰 |
| `context_window.context_window_size` | 최대 컨텍스트 크기 (200K / 1M) |
| `cost.total_duration_ms` | 세션 경과 시간 (밀리초) |
| `cost.total_api_duration_ms` | 실제 API 대기 시간 |
| `cost.total_lines_added` | 이 세션에서 추가한 코드 줄 |
| `cost.total_lines_removed` | 이 세션에서 삭제한 코드 줄 |
| `cost.total_cost_usd` | 비용 환산값 (구독자는 참고용) |
| `rate_limits.five_hour.resets_at` | 5시간 한도 리셋 시각 (Unix epoch) |
| `rate_limits.seven_day.resets_at` | 주간 한도 리셋 시각 |
| `workspace.current_dir` | 현재 작업 폴더 |
| `session_id` / `session_name` | 세션 ID / 커스텀 이름 |

원하는 항목을 말로 시키면 됩니다. 예:

```
/statusline 컨텍스트 퍼센트랑 누적 입력·출력 토큰 숫자도 같이 보여줘
```

---

## 문제 해결

### Q. 명령어 쳤는데 아무것도 안 떠요

<div class="note-circle">
○ <strong>가장 흔한 원인</strong>: 현재 세션은 이미 떠 있어서 반영 안 됨. <code>exit</code> 후 <code>claude</code> 다시 실행해야 해요.
<br />○ 그래도 안 나오면 <code>cat ~/.claude/settings.json</code>에서 <code>statusLine</code> 필드가 제대로 들어갔는지 확인.
<br />○ <code>ls -la ~/.claude/statusline.sh</code>로 파일이 존재하고 <strong>실행 권한(rwxr-xr-x)</strong>이 있는지 확인. 없으면 <code>chmod +x ~/.claude/statusline.sh</code>.
</div>

### Q. 색이 안 나오고 이상한 기호만 떠요

터미널이 ANSI 색상을 지원하지 않는 경우예요. **iTerm2 / Warp / Ghostty** 같은 최신 터미널을 쓰세요. 기본 macOS Terminal도 지원은 하지만 일부 환경 변수 문제일 수 있어요.

### Q. Windows에서도 되나요?

네, 단 **PowerShell** 또는 **Git Bash** 환경에서 동작해요. 공식 문서에 PowerShell 버전 예시가 있으니 그걸 참고하세요. 또는 자연어로 *"Windows PowerShell용 statusline 만들어줘"*라고 시키면 알아서 만들어줘요.

### Q. 5시간 리셋 시각이 안 보여요

아직 한도 관련 데이터가 세션에 쌓이기 전일 수 있어요. 메시지 2~3개 보낸 뒤에 다시 확인하세요. 또는 한 번도 한도에 근접한 적이 없으면 비어있을 수 있습니다.

---

## 🎬 정리 — 3가지만 기억하세요

<div class="callout good">
<div class="callout-head"><span class="stamp">✅</span>핵심 요약</div>
<ol>
<li><strong>한 줄 설치</strong>: <code>/statusline 모델이랑 컨텍스트 퍼센트 진행바로 보여줘</code></li>
<li><strong>재시작 필수</strong>: <code>exit</code> → <code>claude</code> 다시 실행</li>
<li><strong>빨강 뜨면 정리</strong>: <code>/rewind → Summarize from here</code> 또는 새 대화</li>
</ol>
</div>

---

## 📎 관련 가이드

- [토큰 아끼는 법 — 웹·코워크·아티팩트](/docs/tips/token-saving-web-cowork) — 한도 절약의 전체 그림
- [settings.json 설정하기](/docs/config/settings-json) — 설정 파일 기본
- [키보드 단축키 커스터마이징](/docs/config/keybindings) — 함께 세팅하면 좋은 것

## 참고 자료 (공식)

- [Customize your status line — Claude Code Docs](https://code.claude.com/docs/en/statusline) — 모든 필드·예제
