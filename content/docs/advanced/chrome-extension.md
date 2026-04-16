---
title: "Chrome 연동 — 코드 짜고 브라우저에서 바로 테스트"
description: "Claude Code가 크롬 브라우저를 직접 조작해서 웹 테스트, 디버깅, 자동화를 도와줍니다"
tags: ["Chrome", "브라우저", "테스트", "디버깅", "자동화", "beta"]
category: "advanced"
order: 17
lastUpdated: "2026-04-16"
---

## Chrome 연동이 뭔가요?

**Chrome 연동**은 Claude Code가 내 크롬 브라우저를 직접 열고 조작할 수 있게 해주는 기능이에요.

> 🩺 **비유로 설명하면**:
> 코드 의사가 환자(웹사이트)를 **직접 진찰하러 가는 것**이에요. 코드도 고치고, 브라우저에서 증상을 직접 확인하고, 테스트까지 해주는 거죠. 의사가 차트만 보는 게 아니라 환자 곁에 있는 셈입니다.

<div class="note-star">
★ <strong>Beta</strong> 상태입니다. 공식 출시 전이라 기능이 바뀔 수 있어요.
</div>

---

## 할 수 있는 일 6가지

| 기능 | 설명 |
|------|------|
| **라이브 디버깅** | 콘솔 에러를 읽고 → 코드를 바로 수정 |
| **디자인 확인** | 코드로 만든 UI를 브라우저에서 직접 비교 |
| **웹 앱 테스트** | 폼 입력, 버튼 클릭, 결과 검증을 자동으로 |
| **인증된 사이트 접근** | 이미 로그인된 구글 독스, Gmail 등 자유롭게 접근 |
| **데이터 추출** | 웹 페이지 내용을 CSV 파일로 저장 |
| **GIF 녹화** | 작업 과정을 움직이는 GIF로 기록 |

---

## 필요한 것

| 항목 | 조건 |
|------|------|
| **브라우저** | Google Chrome 또는 Microsoft Edge |
| **확장 프로그램** | Chrome 웹 스토어의 "Claude in Chrome" 확장 |
| **Claude Code 버전** | v2.0.73 이상 |
| **구독** | Pro / Max / Team / Enterprise |

<div class="note-circle">
○ <strong>지원하지 않는 브라우저</strong>: Brave, Arc, Firefox 등은 현재 사용할 수 없어요. WSL(Windows용 Linux 환경)도 미지원입니다.
</div>

---

## 시작하기

### 단계 1: Chrome 확장 설치

Chrome 웹 스토어에서 **"Claude in Chrome"** 을 검색해서 설치하세요.

### 단계 2: Chrome 모드로 Claude Code 실행

```bash
claude --chrome
```

또는 이미 실행 중인 세션에서:

```
/chrome
```

### 매번 `--chrome` 안 치려면

```
/chrome
```

→ 옵션에서 **"Enabled by default"** 를 선택하면 앞으로 자동으로 Chrome이 연결됩니다.

---

## 실전 예시 3가지

> 🧪 **예시 1: 로그인 폼 테스트**
> ```
> localhost:3000 열어서 로그인 폼에 잘못된 이메일 주소를 넣어봐.
> 오류 메시지가 제대로 나오는지 확인해줘.
> ```

> 🐛 **예시 2: 콘솔 에러 확인**
> ```
> 대시보드 페이지 콘솔에 에러가 있는지 확인하고,
> 있으면 원인을 찾아서 수정해줘.
> ```

> 📋 **예시 3: 데이터 자동 입력**
> ```
> 고객 연락처가 담긴 contacts.csv 파일을 열어서
> CRM 사이트의 추가 폼에 순서대로 입력해줘.
> ```

---

## 문제 해결

| 증상 | 원인 | 해결 방법 |
|------|------|----------|
| "확장이 감지되지 않음" | 확장이 비활성화 상태 | Chrome 재시작 → `/chrome` 재연결 |
| 브라우저가 멈추거나 무응답 | 팝업 창(alert 등)이 막고 있음 | 팝업을 닫은 후 다시 시도 |
| 연결이 끊김 | 오래 쓰면 연결이 해제됨 | `/chrome` → "Reconnect extension" 선택 |

---

## 관련 가이드

- 📖 [원격 제어 & 크로스 디바이스](/docs/advanced/remote-control) — 다른 기기에서 세션 접근
- 📖 [플러그인 마켓플레이스](/docs/advanced/plugin-marketplace) — 추가 기능 설치
- 📖 [Slack 연동](/docs/advanced/slack-integration) — 팀과 함께 작업하기
