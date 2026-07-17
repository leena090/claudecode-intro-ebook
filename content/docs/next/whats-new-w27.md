---
title: "[공] 주간 업데이트: 2026년 6월 29일 ~ 7월 3일 (Week 27)"
description: "Claude Sonnet 5 기본 모델 전환, Chrome 확장 정식 출시, 서브에이전트 백그라운드 기본 실행, Linux 데스크톱 베타"
tags: ["업데이트", "2026", "week27", "sonnet5", "chrome", "linux", "desktop", "radio", "subagents", "자동생성"]
category: "next"
order: 17
lastUpdated: "2026-07-17"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 27 (2026-06-29 ~ 2026-07-03) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w27" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w27</a>
</div>

## 이번 주 핵심 변경 (5개)

---

### 1️⃣ Claude Sonnet 5 — 이제 기본 모델이에요 🌟

이번 주부터 Claude Code의 **기본 모델**이 Sonnet 4.6에서 **Claude Sonnet 5**로 바뀌었어요.

> 🍱 **비유**: 지금까지 타던 버스(Sonnet 4.6)가 신형 버스(Sonnet 5)로 교체된 거예요. 같은 노선이지만 더 빠르고 쾌적해요. 요금(비용)도 동일해요.

**Sonnet 5는 어떻게 다른가요?**

| 항목 | Sonnet 4.6 | Sonnet 5 |
|---|---|---|
| 코딩 성능 | 좋음 | 더 좋음 |
| 에이전트 작업 | 좋음 | 더 좋음 |
| 응답 속도 | 빠름 | 유사 |
| 비용 | 동일 | 동일 |

<div class="note-circle">
○ 기존에 모델을 직접 지정(claude-sonnet-4-6)해서 쓰던 분들은 자동 전환되지 않아요<br />
○ 전환 전 모델로 돌아가려면: <code>/config model claude-sonnet-4-6</code><br />
○ 공식 모델 ID: <code>claude-sonnet-5</code>
</div>

---

### 2️⃣ Claude for Chrome — 정식 출시 (GA) 🌐

리서치 프리뷰로 운영되던 **Chrome 브라우저 확장**이 이번 주 정식 출시됐어요.

> 🍱 **비유**: 베타 테스트 중이던 신제품이 드디어 공식 매장에 진열된 것과 같아요. 이제 더 안정적으로 쓸 수 있어요.

**무엇을 할 수 있나요?**
- 웹 앱을 보면서 Claude Code가 브라우저 동작 감지
- 콘솔 로그·에러를 Claude Code가 자동으로 읽어서 디버깅
- 폼 자동 채우기, 웹 데이터 추출

**설치 방법:**
```bash
# Claude Code에서 Chrome 확장 설정
/mcp add chrome

# 또는 공식 문서 참조
```

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/chrome" target="_blank">code.claude.com/docs/en/chrome</a><br />
○ macOS에서만 지원 (추정 — 공식 확인 필요)
</div>

---

### 3️⃣ 서브에이전트 백그라운드 실행 — 이제 기본 🤖

이전까지 서브에이전트(보조 AI)는 기본적으로 **포그라운드**(사용자가 볼 수 있는 화면)에서 실행됐어요. 이번 업데이트로 기본이 **백그라운드**로 바뀌었어요.

> 🍱 **비유**: 요리사(Claude)가 여러 요리를 동시에 할 때, 이전에는 보조 요리사가 주방 한가운데서 일해서 통로가 막혔어요. 이제는 뒤쪽 조용한 공간에서 일해서 주방이 깔끔해요.

**어떤 효과가 있나요?**
- 메인 대화 화면이 더 깔끔해져요
- 여러 서브에이전트가 동시에 일할 때 화면 혼잡도 감소
- `/agents`로 언제든지 진행 상황 확인 가능

<div class="note-circle">
○ 기존 동작 유지하려면 <code>subagents.runInBackground: false</code> 설정<br />
○ 서브에이전트가 완료되면 메인 화면에 결과가 표시돼요
</div>

---

### 4️⃣ Linux 데스크톱 앱 — 베타 출시 🐧

드디어 **Linux에서도 Claude Code 데스크톱 앱**을 쓸 수 있게 됐어요 (베타).

> 🍱 **비유**: Mac·Windows 고객만 받던 서비스가 Linux 고객한테도 열린 것과 같아요.

**지원 배포판:**
- Ubuntu (우분투)
- Debian (데비안)

**설치 방법:**
```bash
# Ubuntu/Debian
sudo apt install claude-desktop
```

<div class="note-circle">
⚠️ 베타 버전이에요 — 기능이 Mac/Windows 버전보다 제한될 수 있어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">code.claude.com/docs/en/desktop-linux</a>
</div>

---

### 5️⃣ `/radio` — Claude FM 채널 수신 📻

Claude Code 안에서 `/radio`를 입력하면 **Claude FM** 채널을 들을 수 있어요. (공식 발표 기준 — 정확한 기능 추정 포함)

```bash
/radio
```

> 🍱 **비유**: 라디오 채널 돌리듯이 Claude가 보내는 알림이나 방송을 듣는 기능이에요.

<div class="note-circle">
⚠️ 이 기능의 세부 내용은 <strong>추정</strong>이에요 — 공식 문서에서 확인하세요<br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w27" target="_blank">공식 문서 바로가기</a>
</div>
