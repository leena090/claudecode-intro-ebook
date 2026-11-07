---
title: "[공] Mods — Claude Code를 내 입맛대로 바꾸는 플러그인"
description: "JavaScript/TypeScript로 Claude Code의 UI와 동작을 바꾸는 Mods. 패널 추가, 도구 호출 가로채기, 커맨드 추가까지 — 나만의 Claude Code를 만들어요"
tags: ["자동생성", "mods", "플러그인", "커스터마이징", "TypeScript", "JavaScript", "UI", "v2.1.287"]
category: "advanced"
order: 27
lastUpdated: "2026-11-07"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/plugins/mods/overview">code.claude.com/docs/en/plugins/mods/overview</a><br />
★ <strong>v2.1.287</strong> 이상에서 사용 가능 (데스크톱 앱은 v2.1.286+)
</div>

## Mods가 뭐예요?

**Mods(모드)는 Claude Code의 모습과 동작을 바꾸는 플러그인**입니다.

JavaScript 또는 TypeScript로 작성한 이벤트 핸들러를 통해, Claude Code가 도구를 호출할 때·프롬프트를 보낼 때·화면을 그릴 때 등 여러 순간에 개입할 수 있어요.

> 🎮 **비유로 설명하면**: Claude Code가 기본 게임이라면, Mods는 그 게임을 커스터마이징하는 "모드 파일"이에요. 미니맵을 추가하거나, 특정 행동을 차단하거나, 완전히 새로운 UI를 넣을 수 있죠. 단, 이 모드 파일은 여러분이 직접 만들거나, 신뢰할 수 있는 마켓플레이스에서 가져옵니다.

---

## Mods로 무엇을 할 수 있나요?

### 🖼️ 화면에 패널 추가
- 프롬프트 창 옆에 나만의 패널 표시
- 탭·버튼·텍스트 필드 포함 가능
- 예) "컨텍스트 창 사용량 차트"를 항상 옆에 보여주기

### 🔧 도구 호출 가로채기
- Claude가 `rm -rf` 같은 위험한 명령어를 실행하기 전에 멈추고 확인
- 도구 호출 결과를 바꾸거나, 아예 직접 처리하기

### 📝 커맨드 추가
- `/replay` 같은 나만의 커맨드 만들기
- Claude가 작업 중에도 즉시 실행 가능

### 👀 실시간 정보 표시
- 스피너 옆에 "도구 호출 횟수: 3…" 표시
- 토큰 사용량을 날씨 예보처럼 표시

---

## 기본 제공 Mods (Built-in)

Claude Code에 이미 포함된 Mods도 있어요. `/plugin` → Installed 탭 → Built-in에서 확인할 수 있습니다.

| 이름 | 하는 일 |
|------|---------|
| `cc-plugin-diff` | `/diff` 명령어와 차이점 패널 담당 |
| `cc-plugin-agents-md` | `AGENTS.md` 파일을 프로젝트 지시사항으로 로드 |
| `cc-plugin-you-should-know` | 옆 에이전트가 놓친 정보를 프롬프트 위에 표시 (기본 꺼짐) |
| `cc-plugin-telemetry` | 사용 분석 데이터 전송 |

---

## 무료 샘플 Mods 체험해보기

Anthropic이 `claude-code-playground` 저장소에 샘플 Mods를 공유하고 있어요.

| 이름 | 무엇을 하나요? |
|------|--------------|
| `token-weather` 🌤️ | 컨텍스트 창 얼마나 찼는지를 "날씨 예보" 형식으로 표시 |
| `blast-radius` 💥 | `rm -rf`, force push 같은 위험 명령 실행 전 영향 범위 보여주고 확인 요청 |
| `replay-theater` 🎬 | `/replay` 커맨드로 직전 작업에서 Claude가 수정한 파일을 단계별 재생 |

---

## 간단 체험: 도구 호출 횟수 표시 Mod

공식 문서의 예제 코드예요. Claude가 도구를 쓸 때마다 스피너에 "도구 호출: 3…"을 표시합니다.

```javascript
// hooks/register.js
let calls = 0

export function register(on) {
  // 도구 호출될 때마다 카운트 올리기
  on('tool.call', async ($, e, next) => {
    calls += 1
    $.ui.invalidate('ui.render')
    return next(e)
  })

  // 스피너 그릴 때 카운트 덧붙이기
  on('ui.render', { component: 'Spinner' }, async ($, e, next) => {
    return next({ ...e, props: { ...e.props, suffix: ' · 도구 호출: ' + calls + '…' } })
  })
}
```

> 💡 **핵심**: 두 훅이 `calls` 변수를 공유해요. 하나가 세고, 다른 하나가 표시합니다.

---

## Mods 설치 방법

```bash
# 마켓플레이스에서 설치 (세션 안에서)
/plugin install token-chart@your-org

# 또는 터미널에서
claude plugin install token-chart@your-org
```

이미 세션이 열려 있다면 `/reload-plugins`로 즉시 반영할 수 있어요.

---

## 꼭 알아야 할 보안 주의사항 ⚠️

**Mods는 여러분 계정의 권한으로 실행돼요.** 신뢰할 수 없는 출처의 Mod는 절대 설치하지 마세요.

Mod가 할 수 있는 일:
- 파일 읽기·쓰기 (내 컴퓨터 어디서든)
- API 키 등 환경 변수 접근
- 모든 프롬프트·도구 호출 감시
- 모델 API 직접 호출 (내 비용 차감!)

> 🔍 **팁**: 설치 전에 `claude plugin validate ./mod-폴더`를 실행하면 이 Mod가 어떤 이벤트를 처리하고 어떤 API를 쓰는지 목록을 볼 수 있어요. 실제로 실행하지 않고도요!

---

## Mods vs 다른 커스터마이징 방법

| | Mods | 설정 훅(Hooks) | 스킬(Skills) | MCP 서버 |
|--|------|--------------|------------|--------|
| 무엇인가 | JS/TS 함수 | 쉘 스크립트·HTTP | SKILL.md 파일 | 외부 서버 |
| UI 추가 가능 | ✅ | ❌ | ❌ | ❌ |
| 도구 호출 가로채기 | ✅ | ✅ | ❌ | ❌ |
| 언제 선택 | 패널·커맨드·이벤트 가로채기 | 스크립트로 차단·로그 | 반복 지시 저장 | 외부 시스템 연동 |

---

## 사용 가능한 환경

| 환경 | 훅 실행 | UI 표시 |
|------|--------|--------|
| 터미널 `claude` | ✅ | ✅ |
| 데스크톱 앱 Code 탭 | ✅ | ✅ |
| VS Code 확장 | ✅ | ✅ (v2.1.299+) |
| `claude -p` / Agent SDK | ✅ | ❌ |
| 클라우드 세션 | ✅ | ❌ |

---

## 더 알아보기

- 나만의 Mod 만들기: `claude`에 "도구 호출 횟수를 보여주는 Mod 만들어줘"라고 말하면 됩니다. Claude가 직접 작성해줘요.
- 공식 문서: [code.claude.com/docs/en/plugins/mods/overview](https://code.claude.com/docs/en/plugins/mods/overview)
- 샘플 저장소: `anthropics/claude-code-playground` (GitHub)
