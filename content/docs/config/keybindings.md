---
title: "키보드 단축키 커스터마이징"
description: "keybindings.json으로 단축키를 내 맘대로 바꾸는 방법"
tags: ["설정", "단축키", "키바인딩"]
category: "config"
order: 7
lastUpdated: "2026-04-06"
---


## 단축키도 바꿀 수 있어요

Claude Code의 키보드 단축키가 불편하다면? 내가 원하는 키로 바꿀 수 있습니다.

---

## 설정 파일 위치

| 운영체제 | 경로 |
|---------|------|
| **Mac** | `~/.claude/keybindings.json` |
| **Windows** | `%USERPROFILE%\.claude\keybindings.json` |

이 파일이 없으면 새로 만들면 됩니다.

---

## 기본 단축키

자주 쓰는 단축키 목록:

| 기능 | Mac | Windows |
|------|-----|---------|
| 메시지 보내기 | Enter | Enter |
| 줄바꿈 | Shift+Enter | Shift+Enter |
| 되감기 (rewind) | Esc+Esc | Esc+Esc |
| 자동완성 | Tab | Tab |
| 역방향 자동완성 | Shift+Tab | Shift+Tab |
| 음성 모드 | 스페이스바 (길게) | 스페이스바 (길게) |
| 세션 종료 | Ctrl+C | Ctrl+C |

---

## 단축키 바꾸기

`keybindings.json` 파일에 이렇게 적으면 됩니다:

```json
{
  "bindings": {
    "submit": "ctrl+enter",
    "newline": "enter"
  }
}
```

이 예시는:
- **Ctrl+Enter** = 메시지 보내기 (원래 Enter)
- **Enter** = 줄바꿈 (원래 Shift+Enter)

카카오톡처럼 Enter로 줄바꿈, Ctrl+Enter로 전송하고 싶을 때 유용해요!

---

## 활용 예시

### 카카오톡 스타일로 바꾸기
```json
{
  "bindings": {
    "submit": "ctrl+enter",
    "newline": "enter"
  }
}
```

### 특정 키 조합 추가
```json
{
  "bindings": {
    "submit": "ctrl+enter",
    "newline": "enter",
    "interrupt": "ctrl+c"
  }
}
```

<div class="note-circle">
○ 파일을 수정하면 Claude Code가 자동으로 반영합니다. 재시작할 필요 없어요!
</div>

---

## 다음 단계

설정을 마쳤으니, 이제 코워크나 Claude Code 웹 같은 **다른 Claude 도구**도 알아볼까요?
