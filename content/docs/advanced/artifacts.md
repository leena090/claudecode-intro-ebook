---
title: "[공] Artifacts — Claude 작업 결과를 조직 내 공유 페이지로"
description: "Claude Code의 결과물(보고서, 대시보드, 코드 분석)을 클릭 한 번으로 인터랙티브 웹 페이지로 만들어 조직 내부에서 공유"
tags: ["자동생성", "artifacts", "공유", "대시보드", "결과물", "팀협업"]
category: "advanced"
order: 10
lastUpdated: "2026-06-24"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong>. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서: code.claude.com/docs/en/artifacts</a>
</div>

## Artifacts(아티팩츠)란?

**Claude Code가 만든 결과물을, 조직 내부에서 공유할 수 있는 인터랙티브(반응형) 웹 페이지로 자동 변환해 주는 기능**이에요.

> 🍱 **비유**: Claude한테 "이번 달 판매 현황 분석해줘" 했더니, 결과를 카카오톡 링크처럼 보내줄 수 있는 페이지로 바로 만들어 주는 거예요. 팀장님께 슬랙으로 링크만 보내면, 팀장님은 Claude Code 없이도 예쁜 보고서를 볼 수 있어요.

---

## 어떻게 동작하나요?

```
Claude Code 작업 → 결과 생성 → Artifact URL 생성 → 링크 공유
```

1. Claude Code가 분석·보고서·대시보드 등을 만들어요
2. `/share` 또는 세션 출력 공유 옵션을 선택해요
3. **조직 내부 전용 비공개 URL**이 생성돼요
4. 그 링크를 팀원에게 보내면 → 인터랙티브 페이지로 확인 가능!

---

## 어떤 걸 Artifact로 만들 수 있나요?

| 작업 유형 | Artifact 예시 |
|-----------|--------------|
| 코드 분석 | 버그 목록 + 수정 제안 인터랙티브 페이지 |
| 데이터 리포트 | 차트·표가 포함된 분석 보고서 |
| 문서 생성 | API 문서, README, 스펙 |
| 코드 리뷰 결과 | PR 검토 요약 페이지 |
| 테스트 결과 | 테스트 커버리지 대시보드 |

---

## 어떤 분들께 특히 유용할까요?

**개발자가 아닌 팀원과 결과를 공유해야 할 때** 딱이에요!

> 🍱 **상황 예시**: 개발팀 대리님이 Claude Code로 "이번 달 에러 로그 분석"을 돌렸어요. 결과를 Artifact로 만들면 → 기획팀 과장님께 링크 하나 보내면 → 과장님은 터미널 없이 웹 브라우저에서 예쁜 보고서를 볼 수 있어요!

| 역할 | 어떻게 쓰나요? |
|------|--------------|
| 개발자 | Claude Code로 분석 → Artifact 링크 생성 |
| 기획자/관리자 | 링크만 받아서 웹에서 확인 |
| 경영진 | Claude Code 몰라도 결과물 확인 가능 |

---

## 보안 & 접근 제한

Artifact는 **조직 내부 전용 비공개 URL**로 생성돼요.

| 항목 | 내용 |
|------|------|
| 공개 범위 | 조직 내부만 (외부 인터넷에서 접근 불가) |
| URL 방식 | 비공개 URL (추측 불가능한 긴 주소) |
| 인증 | 조직 계정 로그인 필요 (추정) |
| 만료 | 설정에 따라 다름 (추정) |

<div class="note-circle">
○ Artifact는 외부 공개가 아닌 <strong>조직 내부 공유</strong>를 위한 기능이에요<br />
○ 민감한 코드나 내부 데이터가 외부에 노출되지 않도록 설계됐어요
</div>

---

## 팀에서 쓰는 방법 (Claude Code on the Web)

```
1. Claude Code 웹 버전(code.claude.com)에서 세션 실행
2. 원하는 분석·보고서 작업 수행
3. 세션 출력 공유 옵션 선택
4. 생성된 URL을 Slack/이메일로 공유
```

> 🍱 **한 줄 요약**: "Claude Code의 결과물을 팀 전체가 볼 수 있는 링크 하나로 만들어주는 기능"이에요.

<div class="note-circle">
○ Enterprise·Team 플랜에서 활용도가 높아요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/artifacts" target="_blank">code.claude.com/docs/en/artifacts</a>
</div>
