---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "CLI에서 MCP 서버 인증, ! 명령어 실행 결과를 Claude가 바로 해석, /rewind로 /clear 이전 대화 복원"
tags: ["업데이트", "2026", "week26", "mcp", "shell-mode", "rewind", "자동생성"]
category: "next"
order: 16
lastUpdated: "2026-07-10"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a><br />
📦 릴리즈: v2.1.185 → v2.1.193 / 주요 기능 2가지
</div>

## 이번 주 핵심 변경 (2가지)

---

### 1️⃣ `claude mcp login` — CLI에서 MCP 서버 인증 (v2.1.186) `[공]`

지금까지 MCP(엠씨피, Model Context Protocol) 서버에 로그인하려면 Claude Code를 켜고 `/mcp` 메뉴를 열어야 했어요. 이제 **터미널에서 바로 인증**할 수 있어요.

> 🍱 **비유**: 앱을 켜야만 로그인할 수 있었는데, 이제 앱 실행 전에 열쇠(토큰)를 먼저 등록해둘 수 있는 것과 같아요.

**사용 방법**

```bash
# MCP 서버 로그인 (OAuth 흐름 실행)
claude mcp login sentry

# 로그아웃 (저장된 자격증명 삭제)
claude mcp logout sentry
```

**뭐가 좋아요?**

| 기존 | 변경 후 |
|------|---------|
| Claude Code 세션 열고 → /mcp → 인증 | 터미널에서 `claude mcp login sentry` 한 줄 |
| 세션마다 인증 반복 필요할 수 있음 | 한 번 인증하면 저장됨 |
| 스크립트·자동화에서 불편함 | 배치 스크립트에서도 사용 가능 |

<div class="note-circle">
○ OAuth 인증 흐름을 직접 실행해요 (브라우저 창이 열릴 수 있어요)<br />
○ MCP 서버를 많이 쓰는 분께 특히 편리해요
</div>

---

### 2️⃣ `!` 명령어 결과를 Claude가 바로 해석 (v2.1.186) `[공]`

`!` 접두사로 셸 명령어를 실행하면, 이제 **Claude가 그 결과를 자동으로 분석**해줘요.

> 🍱 **비유**: 이전엔 Claude한테 "테스트 돌려봐" 했더니 결과만 보여줬는데, 이제 결과를 보고 "3번 테스트가 실패했는데 이런 이유인 것 같아요"까지 설명해줘요.

**사용 예시**

```
> ! npm test
```

Claude가 테스트를 실행하고 → 결과를 보고 → "4번 테스트가 실패했어요. async 함수의 Promise 처리 오류인데 이렇게 수정하면 돼요" 식으로 해석까지 해줘요.

```
> ! git log --oneline -5
```

최근 커밋 5개를 보여주면서 "어제부터 배포 관련 작업 3건이 있었고..." 맥락을 설명해줘요.

**이전 동작으로 되돌리려면**

결과만 컨텍스트에 추가되고 분석 없이 넘어가게 하려면:

```json
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

<div class="note-circle">
○ Claude의 분석 응답도 일반 프롬프트와 같은 토큰 비용이 들어요<br />
○ 오류 메시지를 해석하거나 명령어 결과를 바로 다음 작업에 연결할 때 편리해요
</div>

---

## 이번 주 세부 개선 사항

| 항목 | 내용 |
|------|------|
| `/rewind` 강화 | `/clear`로 대화를 지운 이후 지점으로도 되감기 가능 |
| 샌드박스 보안 | `sandbox.credentials` 설정으로 자격증명 파일·비밀 환경변수 접근 차단 |
| 조직 모델 제한 | 관리자가 설정한 모델 제한이 `/model`, `--model`, 모델 선택 UI 전체에 적용됨 |
| 서브에이전트 알림 | 백그라운드 에이전트가 권한 요청 시 메인 세션에 팝업으로 표시 (이전: 자동 거부) |
| 성능 개선 | 스트리밍 응답 CPU 사용량 37% 감소, 장시간 세션 메모리 증가 문제 개선 |
| `/review` 개선 | `/review <pr>`이 `/code-review medium`과 같은 리뷰 엔진 사용 |
| `!` 자동완성 | `!` 명령어 입력 시 파일 경로 자동완성 지원 |
| `/install-github-app` | GitHub App만 설치하고 Actions 워크플로우·시크릿 단계는 건너뛸 수 있게 됨 |

<div class="note-circle">
○ <strong>공식 발표 기준</strong> — v2.1.185~v2.1.193 릴리즈 내역<br />
○ 전체 변경 로그: <a href="https://code.claude.com/docs/en/changelog#2-1-185" target="_blank">code.claude.com/docs/en/changelog#2-1-185</a>
</div>
