---
title: "[공] Claude Tag — Slack에서 Claude를 팀과 함께 쓰는 방법"
description: "Team·Enterprise용 새 Slack 통합 Claude Tag: @Claude를 채널에 초대해 팀이 함께 코딩 작업을 위임하는 방법"
tags: ["claude-tag", "팀협업", "slack", "신기능", "블로그", "자동생성"]
category: "next"
order: 14
lastUpdated: "2026-09-16"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기반</strong> — <a href="https://code.claude.com/docs/en/claude-tag">code.claude.com/docs/en/claude-tag</a><br />
★ <strong>[블] 최초 발표</strong>: 2026-06-23<br />
★ <strong>2026-09-16 업데이트</strong>: 공식 문서 등재 후 상세 내용 보완
</div>

---

## Claude Tag가 뭐예요? 🏷️

**2026년 6월 23일** 발표, **2026년 9월** 공식 문서 정식 등재된 **Claude Tag(클로드 태그)**는 Slack 채널에 Claude를 초대해서 팀이 함께 코딩 작업을 위임하는 도구예요.

공식 문서 설명:

> "Bring Claude into your team's Slack channels with Claude Tag and find its setup and usage documentation on claude.com."
> (Claude Tag로 Claude를 팀 Slack 채널에 초대하세요.)

---

## 기존 Slack 통합과 뭐가 달라요?

<div class="note-star">
⭐ <strong>중요</strong>: 이전 버전의 Slack 통합이 Team·Enterprise용으로는 Claude Tag로 대체됩니다.<br />
공식 문서: "Anthropic is retiring this earlier version for Team and Enterprise workspaces in favor of Claude Tag; it remains the setup path on Pro and Max plans."
</div>

| | 기존 Slack 통합 | Claude Tag |
|---|---|---|
| 대상 | 모든 플랜 | Team·Enterprise용 대체 |
| Pro·Max 플랜 | 계속 사용 | 기존 방식 유지 |
| Team·Enterprise | ~~기존 방식~~ | **Claude Tag로 전환** |

🍱 **비유로 설명하면**: 이전에는 Claude Code와 Slack이 전화기 코드로 연결되어 있었어요. Claude Tag는 무선으로 연결하는 새 방식이에요. 개인용(Pro·Max)은 아직 유선을 써도 되지만, 기업용(Team·Enterprise)은 이제 무선으로 넘어가야 해요.

---

## Claude Tag 사용법 (Team·Enterprise)

### 1단계: 설치 및 설정

설치 방법과 자세한 설정은 공식 사이트 `claude.com`의 Claude Tag 페이지에 있어요.

공식 문서: [code.claude.com/docs/en/claude-tag](https://code.claude.com/docs/en/claude-tag)

### 2단계: Slack 채널에 초대

```
/invite @Claude
```

Claude를 Slack 채널에 초대하면 팀원 모두가 함께 사용할 수 있어요.

### 3단계: 작업 위임

```
@Claude 이 PR의 버그 찾아줘

@Claude 오늘 빌드 실패 원인 분석해줘
```

팀 채널에서 `@Claude`로 멘션하면 Claude Code가 작업을 받아서 처리해요.

---

## 어떤 작업에 쓸 수 있나요?

| 시나리오 | 예시 |
|---|---|
| PR 리뷰 요청 | `@Claude 이 PR 리뷰해줘` |
| 빌드 실패 분석 | `@Claude CI 실패 원인 조사해줘` |
| 코드베이스 설명 | `@Claude 이 모듈이 어떻게 동작하는지 설명해줘` |
| 이슈 분류 | `@Claude 이 에러 버그인지 확인해줘` |

---

## Pro·Max 플랜 사용자라면?

기존 Slack 통합 방식을 그대로 사용하면 돼요. Claude Tag로 전환할 필요가 없어요.

공식 문서: [code.claude.com/docs/en/slack](https://code.claude.com/docs/en/slack)

---

## 📎 관련 가이드

- [Slack 통합 — Pro·Max 기존 방식](/docs/advanced/slack-integration)
- [Cowork — 팀과 함께 Claude Code 쓰기](/docs/cowork/cowork-intro)
- [주간 업데이트 W30~W37](/docs/next/whats-new-w30-w37)
- [공식 문서 — claude-tag](https://code.claude.com/docs/en/claude-tag)
