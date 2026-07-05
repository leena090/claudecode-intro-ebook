---
title: "[공] 주간 업데이트: 2026년 6월 22일 ~ 26일 (Week 26)"
description: "MCP 서버를 터미널에서 직접 로그인, ! 명령어 결과를 Claude가 자동 분석, /rewind로 /clear 이전 대화로 복귀"
tags: ["업데이트", "2026", "week26", "mcp", "shell", "rewind", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-07-05"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 26 (2026-06-22 ~ 2026-06-26) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w26" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w26</a>
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ `claude mcp login` — 터미널에서 MCP 서버 로그인 🔑

이제 MCP(Model Context Protocol) 서버에 **세션을 열지 않고 터미널에서 직접 로그인**할 수 있어요.

> 🍱 **비유로 설명하면**: 이전에는 Claude Code를 실행하고 `/mcp` 메뉴를 열어서 로그인해야 했는데, 이제는 카드 단말기에 카드를 직접 긁듯이 **터미널에서 명령어 하나로** 인증이 끝나요.

#### 사용 방법

```bash
# MCP 서버 인증 (OAuth 흐름 실행)
claude mcp login sentry

# 로그아웃
claude mcp logout sentry
```

- 브라우저에서 OAuth 인증 흐름이 진행돼요
- 인증 완료 후 자격증명이 안전하게 저장돼요
- 이후 세션에서는 자동으로 로그인 상태 유지

<div class="note-circle">
○ v2.1.186 이상 필요<br />
○ 인터랙티브 <code>/mcp</code> 메뉴 없이도 CI 환경 외 일반 터미널에서 편리하게 사용
</div>

---

### 2️⃣ `!` 명령어 결과를 Claude가 자동 분석 🤖

`!` prefix로 실행한 셸 명령어 결과를 **Claude가 자동으로 읽고 설명**해줘요.

> 🍱 **비유**: 이전엔 `! npm test`를 실행하면 오류가 쭉 나열되는데, 그걸 직접 읽고 "이게 무슨 의미야?"라고 다시 물어봐야 했어요. 이제는 오류가 나오는 순간 Claude가 "아, 이 에러는 A 때문인데, B로 고치면 돼요"라고 **자동으로 설명**해줘요. 마치 옆에 시니어 개발자가 앉아서 같이 화면을 보는 느낌이에요.

#### 사용 예시

```text
> ! npm test
# → 테스트 결과가 나오면 Claude가 자동으로 실패 원인 설명

> ! git status
# → 변경된 파일 목록을 Claude가 해석해서 설명

> ! python manage.py migrate
# → 마이그레이션 결과를 Claude가 분석
```

#### 자동 응답이 필요 없을 때

```json
// .claude/settings.json
{
  "respondToBashCommands": false
}
```

이 설정을 끄면 이전처럼 `!` 명령어 결과가 대화 컨텍스트에만 추가되고, Claude가 응답하지 않아요.

<div class="note-circle">
○ v2.1.186 이상 필요<br />
○ 응답 비용은 일반 프롬프트와 동일해요<br />
○ Bash 모드에서 <code>!</code> 명령어에 파일 경로 자동완성도 추가됐어요
</div>

---

## 그 외 개선사항

<div class="note-circle">

⏪ <strong>/rewind 강화 — /clear 이전으로 복귀 가능</strong><br />
이제 <code>/rewind</code>가 <code>/clear</code>로 지운 대화 이전으로도 되돌아갈 수 있어요. "아, 지우지 말았어야 했는데!"가 해결됐어요.

🔒 <strong>sandbox.credentials — 보안 강화</strong><br />
새 <code>sandbox.credentials</code> 설정으로 샌드박스 명령이 자격증명 파일과 비밀 환경변수를 읽지 못하게 차단할 수 있어요.

👥 <strong>서브에이전트 권한 요청이 메인 세션에 표시</strong><br />
백그라운드 서브에이전트가 권한을 요청하면 이제 메인 세션에 팝업으로 표시돼요. 어느 에이전트가 요청하는지 보여주고, Esc를 누르면 그 도구만 거부돼요 (이전엔 자동 거부됐어요).

⚡ <strong>성능 개선</strong><br />
스트리밍 응답의 CPU 사용량이 약 37% 줄었어요. 오래된 세션에서 터미널 출력 캐시로 인한 메모리 증가 문제도 개선됐어요.

🔍 <strong>/review &lt;pr&gt; 업그레이드</strong><br />
<code>/review &lt;pr번호&gt;</code>가 이제 <code>/code-review medium</code>과 같은 리뷰 엔진을 사용해요. 더 정확한 코드 리뷰를 받을 수 있어요.

🏢 <strong>조직 모델 제한</strong><br />
조직에서 모델 사용 제한을 설정하면, 이제 모델 피커·<code>--model</code>·<code>/model</code>·<code>ANTHROPIC_MODEL</code> 모두에 적용돼요. 제한된 모델 선택 시 "조직 설정으로 제한됨" 메시지가 표시돼요.

🌐 <strong>샌드박스 네트워크 허용 기억</strong><br />
샌드박스 네트워크 권한 다이얼로그에서 허용한 호스트가 세션 내내 기억돼요. 같은 호스트에 연결할 때마다 매번 묻지 않아요.

</div>

---

## 관련 문서

- [MCP 설정 공식 문서](https://code.claude.com/docs/en/mcp) `[공]`
- [인터랙티브 모드 (Shell !)](https://code.claude.com/docs/en/interactive-mode) `[공]`
- [명령어 레퍼런스](/commands) `[공]`
