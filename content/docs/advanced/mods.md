---
title: "[공] Mods — TypeScript로 Claude Code 화면과 동작 바꾸기"
description: "Claude Code의 Mods 기능으로 화면 패널 추가, 커스텀 명령어 등록, 도구 호출 가로채기 등을 JavaScript/TypeScript로 구현하는 방법"
tags: ["자동생성", "고급", "mods", "커스터마이즈", "플러그인", "TypeScript", "JavaScript"]
category: "advanced"
order: 27
lastUpdated: "2026-11-05"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Code 공식 문서. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/plugins/mods/overview" target="_blank">공식 문서: code.claude.com/docs/en/plugins/mods/overview</a>
</div>

## Mods가 뭔가요?

**Mods(모드)** 는 Claude Code의 화면과 동작을 JavaScript/TypeScript 코드로 바꿀 수 있는 기능이에요.

> 🏠 **비유**: Claude Code를 집이라고 생각해 보세요.  
> - **Skills**: 집에 붙여 놓는 메모지 (Claude가 읽는 지침)  
> - **Hooks(설정파일형)**: 집 현관에 달린 경보기 (외부 스크립트로 이벤트 감지)  
> - **Mods**: 집 내부에 직접 들어가 방 배치를 바꾸고 새 버튼을 다는 것 🛠️

Mods는 Claude Code **안에서** 실행되기 때문에, 외부 도구로는 불가능한 일들을 할 수 있어요.

---

## Mods로 뭘 할 수 있나요?

| 기능 | 설명 | 예시 |
|------|------|------|
| 🖼️ **패널 추가** | 화면 옆에 새 창(패널) 그리기 | 컨텍스트 창 사용량 차트 |
| 🎨 **화면 재디자인** | Claude Code 기본 UI 요소 변경 | 도구 호출 행(row) 스타일 바꾸기 |
| 🛑 **이벤트 가로채기** | 도구 호출·프롬프트를 멈추고 판단 | 위험한 명령어 실행 전 확인 창 |
| ⌨️ **커스텀 명령어** | `/명령어` 추가 | `/replay` 로 마지막 작업 다시보기 |
| 📊 **데이터 공유** | 여러 훅(hook)이 같은 변수 공유 | 도구 호출 횟수를 세어 스피너에 표시 |

---

## Mods vs 다른 도구 비교

| | Mods | Settings Hook | Skill | MCP 서버 |
|--|------|--------------|-------|---------|
| 작성 언어 | JavaScript/TypeScript | 쉘 스크립트 | Markdown | 아무 언어 |
| 화면(UI) 그리기 | ✅ 가능 | ❌ 불가 | ❌ 불가 | ❌ 불가 |
| 도구 호출 가로채기 | ✅ 가능 | ✅ 가능 | ❌ 불가 | ❌ 불가 |
| 선택 기준 | UI 패널, 커스텀 명령어 필요 시 | 스크립트로 이벤트 처리 | 반복 지침 | 외부 시스템 연동 |

---

## Mods 구조 (파일 3개)

```
my-mod/
├── .claude-plugin/
│   └── plugin.json     ← 플러그인 선언
└── hooks/
    ├── hooks.json      ← 코드 파일 위치 지정
    └── register.js     ← 실제 코드 (이벤트 핸들러)
```

---

## 실제 예시: 도구 호출 횟수 표시

아래는 Claude가 도구를 쓸 때마다 스피너에 "tool calls: 3…" 처럼 카운트를 보여주는 Mod예요.

```javascript
// hooks/register.js
let calls = 0  // 두 훅이 공유하는 변수

export function register(on) {
  // 도구 호출될 때마다 실행
  on('tool.call', async ($, e, next) => {
    calls += 1
    $.ui.invalidate('ui.render')   // 화면 다시 그리기
    return next(e)                  // 도구는 그대로 실행
  })

  // 스피너 그릴 때마다 실행
  on('ui.render', { component: 'Spinner' }, async ($, e, next) => {
    return next({
      ...e,
      props: { ...e.props, suffix: ' · tool calls: ' + calls + '…' }
    })
  })
}
```

> 💡 `on('이벤트명', 핸들러함수)` 형태로 이벤트를 구독해요.

---

## Anthropic이 제공하는 샘플 Mods

| 이름 | 기능 |
|------|------|
| `token-weather` | 컨텍스트 창 사용량을 날씨 예보처럼 표시 |
| `blast-radius` | `rm -rf` 같은 위험 명령어 실행 전 미리보기 창 띄움 |
| `replay-theater` | `/replay` 명령어로 마지막 작업의 파일 변경 내역 단계별 재생 |

샘플 코드는 [claude-code-playground 저장소](https://github.com/anthropics/claude-code-playground/tree/main/claude-code/mods)에서 볼 수 있어요.

---

## Mods 설치 방법

```bash
# 세션에서 플러그인 마켓플레이스로 설치
/plugin install 플러그인이름@마켓플레이스이름

# 로컬 폴더로 테스트 (한 세션만)
claude --plugin-dir ./my-mod
```

설치 후 현재 세션에 적용하려면:
```bash
/reload-plugins
```

---

## Mods가 작동하는 환경

| 환경 | 훅 실행 | 화면 표시 |
|------|---------|---------|
| 터미널 `claude` | ✅ | ✅ |
| Desktop App (Code 탭) | ✅ | ✅ |
| VS Code 확장 | ✅ | ✅ |
| `claude -p` (헤드리스) | ✅ | ❌ |
| 클라우드 세션 | ✅ | ❌ |
| WSL 세션 | ❌ | ❌ |

---

## 보안 주의사항 ⚠️

Mods는 **내 권한으로 실행**돼요. 신뢰할 수 없는 소스의 Mod는 설치하지 마세요.

Mods가 할 수 있는 것:
- 내 파일 읽고 쓰기
- 환경 변수·API 키 접근
- 내 세션의 모든 프롬프트·도구 호출 감시
- 모델 API 사용 (내 계정 비용 발생 가능)

설치 전 미리 확인하려면:
```bash
claude plugin validate ./my-mod
```

---

## 내장 Mods (Built-in)

Claude Code에 기본으로 포함된 Mods도 있어요:

| 이름 | 기능 |
|------|------|
| `cc-plugin-diff` | `/diff` 명령어 패널 |
| `cc-plugin-agents-md` | `AGENTS.md` 자동 로드 |
| `cc-plugin-you-should-know` | 놓칠 수 있는 사항을 프롬프트 위에 힌트로 표시 |

---

> 📌 **정리**: Mods는 Claude Code를 "내 입맛대로" 바꿀 수 있는 강력한 도구예요.  
> UI를 바꾸거나, 위험한 명령어를 걸러내거나, 작업 통계를 보여주는 패널을 만들 수 있어요.  
> Claude에게 "이런 Mod 만들어줘"라고 부탁하면 직접 짜줘요! 🎉

---

> **다음 단계**: Mod를 만들고 싶다면 세션에서 아래처럼 말해 보세요:  
> _"도구 호출 횟수를 스피너에 표시하는 Mod를 만들어줘"_
