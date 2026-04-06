---
title: "설치 전 준비물 체크리스트"
description: "Claude Code 시작에 필요한 준비물과 요금 안내"
tags: ["설치", "준비물", "요금제"]
category: "setup"
order: 1
lastUpdated: "2026-04-06"
---

> 📅 최종 업데이트: 2026년 4월 6일

## 준비물은 딱 3가지

Claude Code를 시작하려면 이것만 있으면 됩니다:

1. 💻 **컴퓨터** (Windows 또는 Mac)
2. 🌐 **인터넷 연결**
3. 🔑 **Claude 계정 + Pro 이상 요금제**

그게 끝이에요. 하나씩 확인해볼게요.

---

## 💻 1. 컴퓨터

| 운영체제 | 사용 가능 |
|---------|----------|
| **Windows 10/11** | ✅ |
| **macOS** (Mac) | ✅ |
| **Linux** | ✅ (고급 사용자) |
| iPad/태블릿 | ❌ (모니터링만 가능) |
| 스마트폰 | ❌ (원격 제어만 가능) |

노트북이든 데스크톱이든 상관없어요. 인터넷만 되면 됩니다.

---

## 🌐 2. 인터넷 연결

Claude는 Anthropic 서버에서 동작합니다. 그래서 **인터넷이 항상 필요**해요. Wi-Fi든 유선이든 연결만 되어 있으면 OK.

---

## 🔑 3. Claude 계정 + 요금제

### 계정 만들기 (무료)

1. 브라우저에서 **claude.ai** 접속
2. "Sign Up" 클릭
3. 이메일 또는 Google 계정으로 가입
4. 이메일 인증 완료

### 요금제 선택

<mark>Claude Code를 쓰려면 **Pro 이상** 요금제가 필요합니다.</mark>

| 요금제 | 월 가격 | Claude Code | 코워크 | 추천 대상 |
|--------|--------|-------------|--------|----------|
| **무료** | $0 | ❌ | ❌ | 웹앱 채팅만 |
| **Pro** | $20 (~27,000원) | ✅ | ✅ | 대부분의 분들 |
| **Max 5x** | $100 (~135,000원) | ✅ | ✅ | 많이 쓰는 분 |
| **Max 20x** | $200 (~270,000원) | ✅ | ✅ | 하루종일 쓰는 분 |

<div class="note-circle">
○ 처음 시작한다면 Pro($20/월)로 충분합니다. 나중에 부족하면 언제든 올릴 수 있어요.
</div>

### Pro 결제 방법

1. claude.ai 로그인
2. 좌측 하단 프로필 클릭 → "Upgrade to Pro"
3. 카드 정보 입력 (Visa, Mastercard, 해외 결제 가능 카드)
4. 결제 완료 → 바로 Claude Code 사용 가능

---

## 설치 방식 선택

Claude Code를 쓰는 방법은 여러 가지예요. 상황에 맞게 고르세요:

### 🥇 가장 쉬운 방법: Desktop 앱

| | Mac | Windows |
|---|---|---|
| 다운로드 | claude.ai/download | claude.ai/download |
| 설치 방법 | DMG 파일 실행 → 드래그 | EXE 파일 실행 → 다음 클릭 |
| 실행 | Applications에서 Claude 클릭 | 시작 메뉴에서 Claude 검색 |

Desktop 앱 하나로 **채팅 + 코워크 + Claude Code** 세 가지를 전부 쓸 수 있어요.

### 🥈 설치 없는 방법: 웹 버전

브라우저에서 **claude.ai/code** 접속하면 끝. 아무것도 설치 안 해도 돼요.

### 🥉 개발자용: 터미널 (npm)

```bash
# Mac: 터미널 열고 입력
npm install -g @anthropic-ai/claude-code

# Windows: PowerShell 열고 입력  
npm install -g @anthropic-ai/claude-code
```

이 방법은 **Node.js**가 필요합니다. 다음 가이드에서 자세히 안내해요.

---

## ✅ 준비 체크리스트

시작 전에 확인해보세요:

- [ ] Windows 또는 Mac 컴퓨터 확인
- [ ] 인터넷 연결 확인
- [ ] claude.ai 계정 가입 완료
- [ ] Pro 이상 요금제 결제 완료
- [ ] 설치 방식 결정 (Desktop 앱 / 웹 / 터미널)

---

## 다음 단계

준비가 됐으면 설치를 시작해볼까요? 터미널 방식으로 가시려면 Node.js 설치부터!
