---
title: "내보내기 · 핸드오프 — PDF부터 Claude Code까지"
description: "완성한 시안을 PDF/PPTX/HTML/Canva로 내보내고, 클로드 코드로 바로 개발까지 넘기는 법"
tags: ["디자인", "특별부록", "export", "handoff", "claude-code"]
category: "design"
order: 5
lastUpdated: "2026-04-18"
---


## 완성했으면 다음은 "어디에 쓸 건가"

시안을 만든 뒤 할 수 있는 5가지 길입니다.

```
          ┌─ 📄 PDF   → 보고서·제안서
          ├─ 📊 PPTX  → 발표 자료
캔버스 ─┼─ 🎨 Canva  → 계속 디자인 작업
          ├─ 💻 HTML  → 웹에 바로 올리기
          └─ 🚀 Claude Code → 실제 앱 개발
```

---

## 📤 Export 버튼 — 5가지 선택

캔버스 오른쪽 상단 **Export** 버튼 클릭 시 나오는 옵션입니다. [[공식]](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)

| 형식 | 용도 | 추천 상황 |
|------|------|----------|
| 📦 .zip | 모든 에셋 일괄 | 팀원에게 파일째 전달 |
| 📄 PDF | 인쇄·리포트 | 경영진 보고, 고객 제안 |
| 📊 PPTX | 파워포인트 | 투자유치, 사내 발표 |
| 🎨 Canva | 캔바에서 이어 편집 | 디자이너가 마무리 |
| 💻 Standalone HTML | 웹 파일 | 바로 브라우저에서 확인 |

---

## 🚀 하이라이트: Claude Code로 핸드오프

<mark>시안을 "실제 작동하는 코드"로 바로 바꿀 수 있습니다.</mark>

### 2가지 경로

#### 경로 1: 로컬 Claude Code로 보내기

```
Export → Send to local coding agent
```

내 Mac/Windows에 깔려있는 **Claude Code CLI**로 시안 정보가 자동 전달됩니다.

```bash
# Mac 터미널 / Windows PowerShell
claude
→ 방금 받은 디자인 기반으로 React 컴포넌트 짜줘.
```

#### 경로 2: Claude Code Web으로 보내기

```
Export → Send to Claude Code Web
```

브라우저에서 바로 **claude.ai/code** 로 이동 → 깃허브 리포에 반영.

---

## 실전: 시안 → 코드 전체 흐름

### 1단계: 클로드 디자인에서 완성

```
SaaS 대시보드 시안. 상단 KPI 3개, 그래프, 테이블.
```

시안 확정.

### 2단계: Export → Send to Claude Code Web

### 3단계: 클로드 코드에서 한마디

```
이 디자인을 Next.js 16 + Tailwind 4로 구현해줘.
- 컴포넌트는 shadcn/ui 사용
- 데이터는 일단 mock 데이터로
- 반응형은 모바일·태블릿·데스크톱 3종
```

### 4단계: PR 생성 → 리뷰 → 머지

<mark>디자이너 없이 "아이디어 → 동작하는 웹앱"이 몇 시간 안에 가능합니다.</mark>

---

## 📄 PDF 내보내기 — 보고서용

### 잘 나오는 팁

```
이 시안을 A4 세로(210x297mm)로 내보낼 거야.
- 상단 여백 20mm
- 페이지 번호 하단 중앙
- 인쇄 시 재단선 고려해서 bleed 3mm
```

미리 PDF 용도를 알려주면 레이아웃이 인쇄 친화적으로 조정돼요.

### 용도별 추천

| 용도 | 설정 |
|------|------|
| 투자제안서 | A4 가로, 10~15장 |
| 원페이저 | A4 세로 1장 |
| 브로셔 | A4 3단 접지 |
| 인포그래픽 | 커스텀(긴 세로) |

---

## 📊 PPTX 내보내기 — 발표용

```
16:9 와이드스크린 슬라이드 10장으로 내보낼 거야.
각 장 제목 상단, 본문 중앙, 출처 하단 고정.
```

### 파워포인트에서 다시 편집 가능

PPTX로 받으면 **파워포인트/키노트에서 직접 수정**할 수 있어요. 텍스트·도형 전부 개별 요소로 풀려서 나옵니다.

---

## 🎨 Canva로 이어가기

디자이너나 마케터가 **캔바에서 마무리**하고 싶을 때.

```
Export → Open in Canva
```

시안이 캔바 프로젝트로 그대로 열려서 에셋 추가·수정이 편합니다.

> 💡 클로드 디자인 엔진 자체가 캔바 기반이라 호환이 완벽해요. [[R]](https://thenextweb.com/news/canva-anthropic-claude-design-ai-powered-visual-suite)

---

## 💻 Standalone HTML 내보내기

### 받으면 뭐가 들어있나

```
📁 design-export/
├── index.html       ← 바로 열면 보임
├── styles.css       ← 스타일시트
├── assets/          ← 이미지·폰트
│   ├── hero.jpg
│   └── logo.svg
└── scripts.js       ← 간단한 인터랙션 (있을 경우)
```

### 어디에 쓰나

- **포트폴리오 사이트에 바로 업로드**
- **Vercel·Netlify 드래그앤드롭 배포**
- **개발자에게 "이대로 구현해주세요" 레퍼런스**
- **로컬에서 상사에게 보여주기** (index.html 더블클릭)

---

## 🤝 팀 공유 — 권한 3단계

완성 시안을 팀원과 공유할 때. [[공식]](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)

| 권한 | 할 수 있는 것 |
|------|--------------|
| 👁️ View only | 보기만 |
| 💬 Comment | 댓글 달기 (수정 X) |
| ✏️ Edit | 직접 수정까지 |

### 공유 링크 만들기

```
오른쪽 상단 Share 버튼 → 권한 선택 → 링크 복사
```

링크 받은 사람은 **앤트로픽 계정이 없어도 볼 수 있는지** 플랜마다 다를 수 있으니 **유료 계정 초대**가 가장 안전합니다.

---

## 🏢 디자인 시스템 재활용

### 팀 디자인 시스템 등록의 힘

한 번 등록해두면 **이후 모든 시안에 자동 적용**됩니다.

```
우리 회사 디자인 시스템 등록:
- 색상: #00FF88 (primary), #0A0A0A (bg), #FAFAFA (surface)
- 폰트: Pretendard Variable, JetBrains Mono
- 버튼 컴포넌트: "PrimaryBtn", "SecondaryBtn", "GhostBtn"
- 둥글기: 버튼 8px, 카드 12px
- 간격: 4/8/16/24/32 (8px 그리드)
```

<mark>이후 "버튼 추가해줘" 한 마디면 정확히 PrimaryBtn 규격으로 들어옵니다.</mark>

### 코드 저장소 연결

깃허브 리포를 연결해두면 **실제 컴포넌트 코드 기반으로 시안을 그려요.**

```
연결 → https://github.com/우리회사/design-system
```

이후 시안에 나오는 버튼·카드가 실제 코드와 1:1 매칭됩니다. 개발자 핸드오프가 거의 공짜가 돼요.

---

## 🎯 내보내기 전 체크리스트

```
✅ 모든 텍스트 실제 내용으로 교체됐는가 (Lorem ipsum 없나)
✅ 색 대비 WCAG AA 통과했나
✅ 모바일/태블릿/데스크톱 다 만들었나
✅ 이미지·로고 저작권 OK인가
✅ 링크·CTA 버튼 목적지가 정의됐나
✅ 폰트 라이선스 확인했나
✅ 접근성 체크 받았나
```

내보내기 전에 클로드에게 이걸 직접 검토 시키세요.

```
이 시안 내보내기 전에 위 체크리스트 7개 검토해줘.
통과 못한 항목 알려주고 수정 제안해줘.
```

---

## 다음 단계

👉 [**실전 사용 사례**](/docs/design/06-use-cases) — 실제 결과물 사례 모음

👉 [Claude Code 핸드오프를 잘 하려면](/codeweb/claude-code-web-intro) (참고)

---

## 핵심 정리

1. **Export 버튼 5종**: zip / PDF / PPTX / Canva / HTML
2. **Send to Claude Code**: 시안 → 실제 코드까지 한 흐름
3. **PDF·PPTX**는 내보낼 때 **규격 미리 지정**
4. **디자인 시스템 + 깃허브 연결** = 개발 핸드오프 거의 공짜
5. 내보내기 전 **체크리스트 7개** 검토 요청
