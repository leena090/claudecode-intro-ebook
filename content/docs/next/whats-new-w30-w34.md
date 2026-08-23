---
title: "[공] 주간 업데이트 W30·W32~W34 (2026-07~08)"
description: "2026년 7~8월 Claude Code 주요 업데이트 요약. /design 스킬, Concise 출력 스타일, Remote Control 정식 출시, ANTHROPIC_DEFAULT_MODEL 환경변수 등"
tags: ["자동생성", "whats-new", "주간업데이트", "2026-07", "2026-08", "w30", "w32", "w33", "w34"]
category: "next"
order: 18
lastUpdated: "2026-08-23"
---

<div class="note-star">
★ <strong>[공] 2026-07~08 공식 업데이트</strong> — W30(7월 21~25), W32(8월 4~8), W33(8월 10~14), W34(8월 17~21) 요약<br />
출처: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new</a>
</div>

## 2026년 7~8월 Claude Code 업데이트 요약

지난 한 달 동안 Claude Code에 굵직한 업데이트가 여러 개 들어왔어요. 가장 눈에 띄는 것들을 소개할게요.

---

## 🎨 /design 스킬 — 디자인도 이제 Claude Code에서 (W34, 리서치 프리뷰)

```bash
/design 결제 화면 새로 디자인해줘
```

> 🖼️ **비유로 설명하면**: 코드를 짜기 전에 스케치북에 화면 디자인을 그려보는 거예요. 클로드가 여러 디자인 시안을 만들어주면, 맘에 드는 걸 골라 "이걸로 구현해줘"라고 하면 돼요.

- Claude Design의 아트보드 워크플로우를 CLI·Desktop에서 사용
- `/design` 실행 → 클로드가 편집 가능한 아트보드 캔버스 링크를 게시
- 시안 중 하나 선택 → "이걸로 구현해줘" 지시
- **Pro, Max, Team, Enterprise** 사용 가능
- 요구 버전: v2.1.233+

---

## ✂️ Concise 출력 스타일 — 결론부터 말하기 (W34, v2.1.237)

```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** → **Concise** 선택.

**기존 Default 스타일**과 차이점:
- ✅ 서두·부연 설명 생략, **결과부터** 제시
- ✅ 작업 품질은 Default와 동일
- ✅ 설명을 요청하면 여전히 상세하게 답변
- ✅ 오류·보안 경고·위험 확인 메시지는 전체 내용 유지

> ⚡ **비유**: 보고서 요약만 먼저 받고, 세부 내용이 필요하면 그때 더 물어보는 방식이에요.

---

## 📱 Remote Control 정식 출시 — 폰에서 세션 시작 (W34)

```bash
# 내 컴퓨터에서 실행
claude remote-control
```

그러면 **폰의 Claude 앱 → Code 탭** 상단에 **Devices 섹션**이 생겨요. 내 맥북·PC가 카드로 표시되고, 탭하면 디렉터리를 고르고 세션을 시작할 수 있어요.

- Remote Control이 **리서치 프리뷰 종료 → 정식 출시** 🎉
- 폰에서 노력 수준(Effort Level) 변경 → 컴퓨터 세션에 즉시 반영
- 폰에서 Permission Mode도 확인 가능

---

## 🌟 그 외 주요 업데이트 (W34)

| 기능 | 설명 | 버전 |
|------|------|------|
| **자동 재개** | claude.ai 사용량 한도 초기화 시 세션 자동 계속 (설정: `Continue automatically at usage limit`) | v2.1.234 |
| **맞춤법 검사** | 프롬프트 입력 중 오타에 밑줄 표시 (aspell·hunspell·ispell 사용) | v2.1.237 |
| **GitLab MR 배지** | `glab auth login` 인증 시 하단에 MR !N 배지 표시 (초안·열림·병합 가능 색상 구분) | v2.1.237 |
| **`ANTHROPIC_DEFAULT_MODEL`** | 환경 변수로 새 세션 기본 모델 설정 (`/model` 수동 선택 시 덮어씀) | v2.1.237 |
| **프롬프트 마크다운 렌더링** | 내가 입력한 프롬프트도 이제 마크다운·코드블록이 렌더링됨 | v2.1.236 |
| **`/permissions` 작업 중 실행** | 클로드가 작업 중에도 `/permissions` 열거나 `/add-dir` 실행 가능 | v2.1.235 |
| **`keybindingFlavor: "readline"`** | `Ctrl+W`가 Bash처럼 공백까지만 지움 (기존: `/` 등 구두점 포함) | v2.1.234 |
| **`/goal` 체크인 개선** | 백그라운드 작업 대기 중 30분마다 자동 체크인 (비활성화: `CLAUDE_CODE_GOAL_CHECKIN_MINUTES=0`) | v2.1.234 |

---

## 📋 W30~W33 업데이트 (2026-07-21 ~ 08-14) 주요 항목

<div class="note-star">
ℹ️ W30·W32·W33 전체 내용은 공식 문서에서 확인하세요:<br />
<a href="https://code.claude.com/docs/en/whats-new/2026-w30">W30</a> · 
<a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32</a> · 
<a href="https://code.claude.com/docs/en/whats-new/2026-w33">W33</a><br />
(W31은 공식 발표 없음 — 해당 주 업데이트 없거나 번호 건너뜀)
</div>

이 기간의 주요 흐름:
- **Claude Opus 5 출시** (2026-07-24, W30) → [별도 문서 참조](./claude-opus5.md)
- **Cross-session messaging 정식 지원** (Windows: v2.1.234, W34) → [별도 문서 참조](../advanced/cross-session-messaging.md)
- **Fast 모드 Opus 4.7 지원 완전 종료** (2026-07-24) → [별도 문서 참조](../advanced/fast-mode-opus5.md)
- **Self-hosted Environments** 문서 섹션 신설 (6개 페이지) — 기업용 자체 호스팅 환경 상세 가이드 추가

---

## 관련 문서

- 🎨 [Claude Design](../design/01-what-is-claude-design.md) — 디자인 도구 소개
- 📱 [Remote Control](../advanced/remote-control.md) — 폰·다른 기기에서 세션 제어
- 🤖 [Claude Opus 5](./claude-opus5.md) — 새 모델 상세
- 💬 [세션 간 메시지](../advanced/cross-session-messaging.md) — 세션끼리 소통
