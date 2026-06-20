---
title: "[공] Artifacts(아티팩트) — 세션 결과물을 팀원과 공유하는 비공개 웹 페이지"
description: "Claude Code 작업 결과를 클릭 한 번으로 비공개 URL 웹 페이지로 변환해 팀원과 공유하는 Artifacts 기능. Team·Enterprise 전용 베타."
tags: ["고급", "artifacts", "아티팩트", "공유", "team", "enterprise", "대시보드", "PR리뷰", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-20"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Artifacts 베타 기능 안내. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서: code.claude.com/docs/en/artifacts</a><br />
⚠️ <strong>Team 또는 Enterprise 플랜 전용</strong> (개인 Pro·Max 플랜 사용 불가)
</div>

## Artifacts(아티팩트)가 뭔가요?

Claude Code 세션에서 작업한 결과물을 **비공개 웹 페이지(URL)로 자동 생성**해 주는 기능이에요.

터미널 텍스트로 보기 어려운 것들 — PR 리뷰 대조표, 대시보드 차트, 설계 대안 비교 — 을 **클릭 한 번으로 예쁜 페이지**로 만들어 팀원에게 공유할 수 있어요.

> 🍱 **비유**: 작업 결과를 메모장 텍스트로 보내는 대신, 깔끔한 슬라이드 자료로 만들어 공유하는 것과 같아요. 내용은 같지만 훨씬 보기 편하고 인터랙티브(상호작용 가능)해요.

---

## 언제 쓰면 좋아요?

| 상황 | 설명 |
|------|------|
| **PR 리뷰** | diff(변경 내역)를 주석과 함께 나란히 보여주는 페이지 |
| **대시보드** | 세션이 수집한 데이터로 차트·통계 페이지 |
| **설계 대안 비교** | 여러 구현 방법을 나란히 놓고 비교하는 페이지 |
| **진행 타임라인** | Claude가 긴 작업을 하는 동안 실시간으로 업데이트되는 현황 페이지 |
| **팀 공유** | Slack에 텍스트를 붙여 넣는 대신, 링크 하나로 공유 |

---

## 어떻게 사용하나요?

### 만들기 — Claude에게 요청하거나 자동 생성

```text
# 요청 예시: PR 리뷰 아티팩트
Make an artifact that walks through this PR with the diff annotated inline.

# 요청 예시: 대시보드
Build a dashboard artifact of last week's deploy failures by service.

# 요청 예시: 설계 대안 비교 (4가지 레이아웃)
Make an artifact with four different layouts for the settings panel. Lay them out as a grid.
```

Claude가 HTML/Markdown 파일을 작성한 후 퍼블리시(publish, 게시) 전에 확인을 물어봐요:

```
Claude wants to publish "Deploy failures by service" (deploy-failures.html) to a private page on claude.ai
```

**Yes**를 선택하면 URL이 생성되고 브라우저가 자동으로 열려요.

> 💡 `Ctrl+]` 을 누르면 터미널에서 가장 최근 아티팩트를 다시 열 수 있어요.

### 업데이트하기 — 같은 URL에서 실시간 갱신

```text
# 추가 수정 요청
Add a per-region breakdown below the summary chart and republish.

# 다른 세션에서 업데이트할 때는 URL 제공
Update https://claude.ai/code/artifact/5fbea6f3-... with today's numbers.
```

페이지를 열고 있는 팀원에게도 **자동으로 업데이트된 내용**이 보여요. 각 퍼블리시는 버전으로 저장되고, Share(공유) 메뉴에서 어떤 버전을 보여줄지 선택할 수 있어요.

### 공유하기 — 조직 내부에서만

새 아티팩트는 처음엔 **나만 볼 수 있어요**. 브라우저에서 **Share(공유)** 버튼으로 팀원에게 권한을 줄 수 있어요.

- 특정 사람에게 공유
- 조직 전체에 공유

단, **조직 외부 공유는 불가능**해요. 외부에 보내려면 Claude에게 HTML 파일 자체를 받아서 파일로 전달해야 해요.

---

## 무엇을 만들 수 있나요?

### PR 리뷰 페이지

```text
Make an artifact that walks through this PR.
Render the diff with margin annotations and color-code findings by severity.
```

### 인터랙티브 조정 패널

```text
Build an artifact with sliders for the easing curve, duration, and delay
so I can try values on this transition. Show the animation live as I move them.
```

### 작업 진행 체크리스트

```text
Turn this migration plan into a checklist artifact.
Check items off as you complete them and add a note for anything you skip.
```

### 결과를 세션으로 가져오기 (트릭)

```text
Make a triage board artifact with each open issue as a draggable card
across Now / Next / Later / Cut columns. Add a "Copy as prompt" button
that gives me the final ordering to paste back here.
```

---

## 디자인 커스터마이징

아티팩트는 자체 기본 디자인을 쓰지만, **프로젝트 디자인 시스템을 발견하면 그것을 우선 적용**해요.

```markdown
# CLAUDE.md 또는 테마 파일에 기록
## Design system

- Colors: primary #1a4d8f, accent #f59e0b, surface #f8fafc
- Typography: Inter for body, JetBrains Mono for code
- Spacing: 8px scale, 6px border radius
```

---

## 페이지 제약 사항 (알아두기)

| 제약 | 설명 |
|------|------|
| 외부 요청 없음 | CSS·JS·폰트·이미지를 외부에서 불러올 수 없어요 (모두 인라인 처리) |
| 백엔드 없음 | 폼 데이터 저장, 로그인, API 호출 불가 |
| 단일 페이지 | 여러 페이지 라우팅 없음 (앵커 링크로 대체) |
| 파일 형식 | `.html`, `.htm`, `.md`만 가능 |
| 최대 크기 | 렌더링 결과 16 MiB 이하 |

> 🍱 **비유**: 출판된 잡지처럼, 내용은 풍성하지만 독자가 직접 글을 바꾸거나 서버에 저장할 수는 없어요.

---

## 끄는 방법 (개인 설정)

```json
// settings.json
{
  "disableArtifact": true
}
```

```bash
# 환경변수
export CLAUDE_CODE_DISABLE_ARTIFACT=1
```

브라우저 자동 열기만 끄려면:
```bash
export CLAUDE_CODE_ARTIFACT_AUTO_OPEN=0
```

---

## 사용 가능 조건

<div class="note-circle">
○ <strong>플랜</strong>: Team 또는 Enterprise (Pro·Max 사용 불가)<br />
○ <strong>로그인</strong>: <code>/login</code>으로 claude.ai 계정으로 로그인 (API 키만으로는 불가)<br />
○ <strong>모델 제공자</strong>: Anthropic API 직접 사용 시만 (Bedrock·Vertex·Foundry 사용 시 불가)<br />
○ <strong>조직 정책</strong>: CMEK·HIPAA·Zero Data Retention 설정 없어야 함<br />
○ <strong>실행 환경</strong>: Claude Code CLI, 데스크톱 앱 v1.13576.0 이상
</div>

---

## 관리자 설정 (Team·Enterprise)

- **활성화/비활성화**: claude.ai 관리자 → Settings > Claude Code > Capabilities > Artifacts
- **보존 기간 설정**: Settings > Data & privacy controls
- **감사 로그**: `claude_artifact_*` 이벤트 타입으로 기록
- **도메인 허용**: `*.claudeusercontent.com` 아웃바운드 허용 필요
