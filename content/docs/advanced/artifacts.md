---
title: "[공] Artifacts — Claude 작업 결과를 링크 하나로 공유하기"
description: "Claude Code 세션의 결과물(보고서, 대시보드, 인터랙티브 페이지)을 조직 내부에서 공유 가능한 비공개 URL로 만들어 주는 Artifacts 기능"
tags: ["고급", "artifacts", "아티팩트", "공유", "링크", "대시보드", "자동생성"]
category: "advanced"
order: 22
lastUpdated: "2026-06-19"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Code on the web 환경에서 사용 가능한 Artifacts 기능. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서: code.claude.com/docs/en/artifacts</a>
</div>

## Artifacts가 뭔가요?

**Artifacts(아티팩트)** 는 Claude Code 세션에서 만든 결과물(보고서, 차트, 데이터 대시보드 등)을 **살아있는 인터랙티브 페이지로 만들어 비공개 URL로 공유**하는 기능이에요.

> 🍱 **비유**: 친구에게 요리를 보내는 대신, 요리 사진을 찍어 링크를 공유하는 것과 같아요. 받는 사람은 링크만 클릭하면 완성된 요리를 바로 볼 수 있어요. 직접 요리 재료나 레시피(코드)를 보내지 않아도 돼요.

---

## 어떻게 쓰나요?

Claude Code on the web 세션에서 Claude가 결과물을 만든 뒤, **Artifacts로 내보내기** 를 선택하면 돼요.

```
Claude Code 세션
    ↓ 결과물 완성
Artifacts로 내보내기
    ↓
비공개 URL 생성
    ↓
팀원에게 링크 공유 🔗
```

> 🍱 **비유**: 구글 스프레드시트에서 "공유" 버튼 누르면 링크가 생기잖아요. Artifacts도 똑같아요. Claude가 만든 결과물에 "공유" 버튼이 생기는 거예요.

---

## 어떤 결과물을 Artifacts로 만들 수 있나요?

| 결과물 종류 | 예시 |
|------------|------|
| 📊 데이터 대시보드 | 매출 분석 차트 |
| 📝 보고서 | 코드 리뷰 결과 요약 |
| 🌐 인터랙티브 페이지 | 버튼 클릭 가능한 프로토타입 |
| 📋 문서 | API 문서, 변경 이력 정리 |

---

## Artifacts의 특징

| 항목 | 내용 |
|------|------|
| 공개 범위 | 비공개 URL (조직 내부용) |
| 인터랙티브 | 클릭·스크롤 가능한 살아있는 페이지 |
| 코드 불필요 | 받는 사람이 Claude Code나 코딩 지식 없어도 OK |
| 공유 방식 | URL 링크 하나 |

> 🍱 **비유**: Figma 디자인 파일을 공유할 때 "디자인 툴 없어도 이 링크로 보면 돼요"라고 하는 것처럼, Artifacts도 "Claude Code 없어도 이 링크로 결과를 볼 수 있어요"예요.

---

## 이럴 때 쓰면 좋아요

### ✅ 팀에게 결과 보고할 때

```
개발자 → Claude Code로 버그 분석 완료
       → Artifacts로 "버그 분석 보고서" 링크 생성
       → 팀장에게 링크만 전달
팀장   → 링크 클릭 → 인터랙티브 보고서 확인
```

### ✅ 클라이언트에게 프로토타입 보여줄 때

```
개발자 → Claude Code로 UI 프로토타입 완성
       → Artifacts로 인터랙티브 페이지 링크 생성
       → 클라이언트에게 링크 전달
클라이언트 → 클릭해보면서 피드백 제공
```

---

## 주의사항

<div class="note-circle">
○ Artifacts는 <strong>Claude Code on the web</strong> 환경(클라우드 세션)에서 사용할 수 있어요<br />
○ 생성된 URL은 <strong>조직 내부에서만</strong> 접근 가능한 비공개 링크예요<br />
○ 공개 인터넷에 노출되지 않아 민감한 업무 정보도 안전하게 공유할 수 있어요
</div>

---

## 관련 기능

- 🌐 **Claude Code on the web** → [웹에서 Claude Code 시작하기](/docs/codeweb/codeweb-start)
- 📤 **세션 공유** → 세션 결과를 Artifacts로 내보내기
- 🔗 **공식 문서** → [artifacts](https://code.claude.com/docs/en/artifacts)
