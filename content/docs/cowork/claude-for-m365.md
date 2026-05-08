---
title: "[공] Claude for Microsoft 365 — 엑셀·워드·파워포인트 안에서 Claude 쓰기"
description: "Anthropic이 Microsoft 365 앱 전용 Claude 통합을 하나의 제품으로 공식화했어요. 엑셀, 워드, 파워포인트 안에서 Claude를 바로 쓰는 방법을 소개합니다."
tags: ["자동생성", "Microsoft 365", "M365", "엑셀", "워드", "파워포인트", "Office", "통합", "코워크"]
category: "cowork"
order: 10
lastUpdated: "2026-05-08"
---

<div class="note-star">
★ <strong>[공] 공식 마케팅 변경 감지 (2026-05-08)</strong><br />
Anthropic 공식 사이트 nav에서 "Claude for Excel", "Claude for Word", "Claude for PowerPoint" 세 항목이 <strong>"Claude for Microsoft 365"</strong> 하나로 통합됐어요.<br />
이 문서는 마케팅 페이지 공개 정보 기준입니다. 세부 기능은 공식 발표 기준으로 업데이트될 수 있어요.
</div>

## 엑셀, 워드, PPT… 앱 안에서 Claude를 바로 쓸 수 있어요

지금까지 "오피스 파일 자동화"를 배울 때는 **Claude 코워크가 컴퓨터를 대신 조작**하는 방식이었어요.
Claude가 엑셀을 열고, 클릭하고, 입력하는 식이었죠.

그런데 이제 또 하나의 방법이 있어요.

**Claude for Microsoft 365**는 엑셀·워드·파워포인트 같은 Microsoft 365 앱 **안에 Claude를 직접 통합**한 제품이에요.

> 🍱 **비유로 설명하면**: 주방장을 집에 불러서 냉장고를 대신 열게 하는 것(코워크)과, 냉장고 문 안쪽에 주방장이 처음부터 붙어 있는 것(Claude for M365)의 차이예요.

---

## "Claude for Excel·Word·PowerPoint"에서 달라진 것

Anthropic은 2026년 5월 기준, 공식 사이트 메뉴에서 개별 앱 이름을 하나로 통합했어요.

| 이전 명칭 (2026-04까지) | 새 명칭 (2026-05~) |
|----------------------|-----------------|
| Claude for Excel | ➡ |
| Claude for Word | **Claude for Microsoft 365** |
| Claude for PowerPoint | ➡ |

세 개가 하나로 묶인 셈이에요. 기능 자체가 없어진 게 아니라, **한 지붕 아래 통합된 것**으로 이해하시면 돼요. `[공]`

---

## 코워크 커넥터와 뭐가 달라요?

헷갈릴 수 있는 부분이에요. 간단히 정리할게요.

| 구분 | Claude 코워크 커넥터 (M365) | Claude for Microsoft 365 |
|------|--------------------------|------------------------|
| 위치 | Claude 코워크 화면에서 | 엑셀·워드·PPT 앱 안에서 |
| 접근 방식 | Claude가 OneDrive 파일에 API로 접근 | M365 앱 안에 Claude가 내장 |
| 대상 파일 | 주로 OneDrive·SharePoint 파일 | 지금 열려 있는 앱 파일 |
| 설치 | 코워크 커넥터 설정에서 연결 | Microsoft 365 조직 관리자 설정 |

<div class="note-circle">○ 회사에서 Microsoft 365를 쓰고 있다면 IT 관리자에게 "Claude for Microsoft 365 활성화 가능한지" 물어보세요. 조직 단위로 설정해요.</div>

---

## 어디서 찾아요?

Anthropic 공식 사이트에서 **Features → Claude for Microsoft 365** 메뉴로 들어가면 자세한 안내를 볼 수 있어요.

또는 Microsoft 365 앱 안에서 **"Copilot" 또는 확장 프로그램 메뉴**를 찾아보면 Claude가 통합되어 있을 수 있어요 (조직 설정에 따라 다름).

---

## 개인 사용자라면?

아직 회사 계정이 없거나, 개인 Microsoft 계정을 쓰고 있다면 Claude for Microsoft 365 통합이 바로 적용되지 않을 수 있어요.

이 경우 대신 쓸 수 있는 방법:

1. **코워크 M365 커넥터** — OneDrive 파일에 Claude가 접근 ([커넥터 설정 방법](/docs/cowork/cowork-connectors))
2. **코워크 컴퓨터 제어** — 엑셀 등 앱을 Claude가 직접 조작 ([오피스 자동화](/docs/cowork/cowork-office))

---

## 앞으로 어떻게 활용할 수 있나요?

Claude for Microsoft 365를 통해 기대할 수 있는 활용 예시예요 (공식 발표 기준 추정):

| 앱 | 활용 예시 |
|----|--------|
| 📊 **Excel** | 수식 자동 작성, 데이터 분석 설명, 차트 추천 |
| 📝 **Word** | 문서 요약, 문체 개선, 번역, 보고서 초안 생성 |
| 📑 **PowerPoint** | 슬라이드 개요 제안, 발표 스크립트 작성, 디자인 조언 |
| 📧 **Outlook** | 이메일 요약, 답장 초안 작성, 일정 정리 |
| 💬 **Teams** | 회의 요약, 액션 아이템 추출 |

<div class="note-circle">○ 위 내용은 마케팅 페이지 공개 정보와 일반적인 M365 AI 통합 기능을 바탕으로 작성한 것이에요. 정확한 기능 목록은 Anthropic 공식 페이지에서 확인해 주세요. <strong>추정 포함</strong></div>

---

## 코워크가 있는데 이게 왜 필요해요?

좋은 질문이에요. 간단히 답하면:

- **코워크**: Claude가 나 대신 앱을 조작해요. 내가 컴퓨터 앞에 없어도 작동해요.
- **Claude for M365**: 내가 앱을 쓰는 도중에, 옆에서 바로 도움을 줘요.

예를 들어, 지금 엑셀로 보고서를 작성하는 중에 "이 데이터를 어떻게 시각화하면 좋을까?" 하고 바로 물어볼 수 있어요. 앱을 나가거나 Claude 창을 따로 열 필요가 없어요.

---

## 다음 단계

- [커넥터로 OneDrive·SharePoint 연결하기](/docs/cowork/cowork-connectors) — M365 파일을 Claude 코워크와 연결
- [오피스 파일 자동화](/docs/cowork/cowork-office) — 컴퓨터 제어로 엑셀·PPT 자동화
- [예약 작업으로 자동화](/docs/cowork/cowork-scheduled) — 반복 업무를 밤마다 자동으로
