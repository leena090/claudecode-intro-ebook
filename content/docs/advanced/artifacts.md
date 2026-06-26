---
title: "[공] Artifacts — Claude가 만든 결과물을 팀과 공유하는 링크"
description: "Claude Code 작업 결과를 조직 내 공유 가능한 비공개 URL로 발행하는 기능. 보고서, 분석 결과 등을 브라우저에서 바로 볼 수 있어요"
tags: ["artifacts", "공유", "팀협업", "결과물공유", "private-url", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-26"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code 공식 문서 기반. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서: code.claude.com/docs/en/artifacts</a>
</div>

## Artifacts가 뭔가요?

**Artifacts(아티팩트)** 는 Claude Code가 만든 결과물을 **조직 내 공유 가능한 비공개 링크(URL)** 로 만들어주는 기능이에요.

쉽게 말하면:
- Claude에게 "이 코드의 버그 분석 리포트 만들어줘" 라고 하면
- Claude가 분석 결과를 **웹 페이지 형태**로 만들어서
- **팀원과 공유할 수 있는 링크**를 생성해줘요

> 🍱 **비유**: Google Docs 링크를 공유하는 것과 비슷해요. Claude가 문서를 만들면 → 링크를 받아서 → 팀원들이 브라우저에서 바로 볼 수 있어요. 파일을 첨부하거나 이메일로 보낼 필요 없이요.

---

## 어디서 사용할 수 있나요?

Artifacts는 **Claude Code on the web (클라우드 환경)** 에서 사용할 수 있어요.

| 환경 | Artifacts 지원 |
|------|---------------|
| Claude Code on the web | ✅ 지원 |
| 데스크톱 앱 | 확인 필요 |
| 터미널 CLI | 확인 필요 |

---

## 어떤 결과물을 Artifacts로 만들 수 있나요?

| 결과물 종류 | 예시 |
|-------------|------|
| 📊 분석 리포트 | 코드 품질 분석, 버그 리포트 |
| 📋 문서 | API 문서, 기능 명세서 |
| 📈 데이터 시각화 | 차트, 그래프 (인터랙티브) |
| 🌐 웹 페이지 | 프로토타입, 데모 페이지 |
| 📝 요약 | 코드 리뷰 결과, 미팅 노트 |

---

## 실제 사용 흐름

```
1. Claude에게 작업 요청
   > "우리 React 앱의 접근성(accessibility) 문제를 분석하고
      팀이 공유할 수 있는 리포트로 만들어줘"

2. Claude가 분석 후 Artifact 생성
   ✅ 분석 완료. 팀 공유 링크가 생성됐어요:
   https://code.claude.com/artifacts/abc123xyz (비공개)

3. 팀원에게 링크 공유
   → 팀원이 브라우저에서 바로 확인 가능
   → 별도 설치 없음, 계정 불필요 (조직 내 접근 제어)
```

> 🍱 **비유**: 예전엔 Claude가 텍스트로 분석 결과를 알려줬다면, 이제는 "여기 예쁘게 만들어진 리포트 링크예요" 라고 주는 거예요. 마치 컨설팅 회사가 PPT 발표 대신 링크 하나를 주는 것처럼요.

---

## 중요 포인트

<div class="note-circle">
○ <strong>조직 내 비공개 URL</strong> — 공개 인터넷에 노출되지 않아요<br />
○ <strong>인터랙티브</strong> — 단순 텍스트가 아니라 클릭하고 탐색할 수 있는 형태<br />
○ <strong>Claude Code on the web 전용</strong> — 웹 환경에서 특히 강력한 기능이에요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/artifacts" target="_blank">code.claude.com/docs/en/artifacts</a>
</div>

---

## 관련 기능

- [Claude Code on the web 시작하기](/docs/webapp/webapp-intro) — 웹 환경 전체 가이드
- [Remote Control — 모바일에서 세션 이어가기](/docs/advanced/remote-control)
