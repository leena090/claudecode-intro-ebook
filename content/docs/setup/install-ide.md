---
title: "VS Code & IDE에서 사용하기"
description: "코드 에디터에 설치해서 개발하면서 Claude Code 사용하기"
category: "setup"
order: 6
tags: ["설치", "VS Code", "IDE", "확장", "플러그인", "Antigravity"]
lastUpdated: "2026-03-23"
---

## IDE에서 Claude Code 사용의 장점

코드 에디터(IDE)에 Claude Code를 설치하면:

✅ **현재 코드 선택** → **AI에 질문** → **바로 수정**
✅ **파일 열어두고 바로 작업** — 에디터를 옮기지 않아도 됨
✅ **개발 흐름 방해 없음** — 한 곳에서 모든 작업 완료
✅ **더 빠른 작업** — 마우스 이동 최소화

---

## 🎯 지원하는 IDE들

| IDE | 설치 난이도 | 추천도 | 특징 |
|-----|----------|-------|------|
| **VS Code** | ⭐ 매우 쉬움 | ⭐⭐⭐ | 가장 인기, 초보자 추천 |
| **Cursor** | ⭐ 기본 내장 | ⭐⭐⭐ | Claude Code 기본 내장 |
| **Antigravity** | ⭐ 매우 쉬움 | ⭐⭐⭐ | 구글 기반 AI 코딩 도구, 설치 불필요 |
| **JetBrains** | ⭐⭐ 쉬움 | ⭐⭐ | 전문가용 (IntelliJ 등) |
| **Sublime Text** | ⭐⭐ 쉬움 | ⭐ | 간단한 에디터 |

---

## 1️⃣ VS Code에 설치하기 (가장 추천)

### Step 1: VS Code 설치

VS Code가 아직 없다면:

1. **공식 웹사이트 방문**
   - https://code.visualstudio.com 접속

2. **다운로드 클릭**
   - Windows 또는 Mac 버전 선택
   - 자동 다운로드 시작

3. **설치 파일 실행**
   - 다운로드된 설치 파일 더블클릭
   - "다음" 버튼 계속 클릭
   - 완료!

4. **VS Code 열기**
   - Applications 폴더에서 실행 (Mac)
   - 또는 시작 메뉴에서 검색 (Windows)

### Step 2: Claude Code 확장 설치

1. **VS Code 열고 확장탭 열기**
   - 왼쪽 사이드바에서 네모 4개 모양 아이콘 클릭
   - 또는 `Ctrl+Shift+X` (Windows) / `Cmd+Shift+X` (Mac)

2. **"Claude Code" 검색**
   - 상단 검색창에 "Claude Code" 입력
   - Anthropic 공식 확장 찾기

3. **설치 버튼 클릭**
   - 파란색 "Install" 버튼 클릭
   - 자동 설치 시작

4. **로그인**
   - 설치 완료 후 Claude 계정으로 로그인
   - API Key 입력 (필요시)

### Step 3: 사용하기

1. **코드 열기**
   - VS Code에서 파일 또는 폴더 열기

2. **코드 선택 후 AI에 질문**
   - 수정하고 싶은 코드 선택
   - 오른쪽 클릭 → "Ask Claude Code"
   - 또는 명령어 팔레트 (`Cmd+Shift+P`) → "Claude Code" 입력

3. **AI의 제안 받기**
   - Claude가 코드 설명 또는 수정 제안
   - "Apply" 클릭으로 자동 적용

---

## 2️⃣ Cursor에 사용하기 (최고 추천!)

**Cursor는 Claude Code가 기본으로 내장된 코드 에디터입니다!** 별도 설치가 필요 없습니다.

### Step 1: Cursor 설치

1. **공식 웹사이트 방문**
   - https://www.cursor.sh 접속

2. **다운로드 클릭**
   - Windows 또는 Mac 선택

3. **설치 파일 실행**
   - 일반 코드 에디터처럼 설치

4. **Cursor 열기**
   - 설치 완료 후 실행

### Step 2: Claude 계정 연동 (자동)

1. **처음 실행**
   - Cursor를 처음 열면 계정 연동 안내

2. **Claude 계정 로그인**
   - 화면 안내대로 로그인
   - 또는 명령어 팔레트 (`Cmd+Shift+P`) → "Claude" 입력

3. **완료!**
   - 별도 설치 불필요

### Step 3: 사용하기

**Cursor는 모든 기능이 이미 포함되어 있습니다:**

```
코드 선택 → Cmd+K (또는 Ctrl+K)
→ AI에 무엇을 해달라고 입력
→ AI가 자동으로 수정 제안
→ Tab으로 수락 또는 거부
```

**Cursor 추천 이유:**
- ✅ Claude Code가 기본 내장
- ✅ 별도 설치 불필요
- ✅ 더 깔끔한 UI
- ✅ 개발자들이 많이 사용

---

## 3️⃣ Antigravity (구글 AI 코딩 도구)

**Antigravity는 Google이 만든 AI 기반 코딩 도구입니다.** 별도 설치 없이 브라우저에서 바로 사용할 수 있습니다.

<div class="note-circle">
○ Antigravity = "구글판 AI 코딩 도구" — 설치 없이 브라우저에서 코딩
</div>

### Step 1: 접속

1. **브라우저 열기**
   - Chrome, Safari 등 아무 브라우저 사용 가능

2. **주소창에 입력**
   ```
   https://antigravityai.org
   ```

3. **Google 계정으로 로그인**
   - 기존 구글 계정 그대로 사용
   - 별도 가입 불필요

### Step 2: 프로젝트 만들기

1. **새 프로젝트 클릭**
   - 화면의 "New Project" 또는 "+" 버튼

2. **사용할 언어/프레임워크 선택**
   - Python, JavaScript, HTML 등 선택

3. **파일 만들기**
   - 좌측 파일 트리에서 새 파일 추가

### Step 3: AI와 함께 코딩

```
코드 입력 → 오른쪽 AI 패널에 질문 입력
→ AI가 수정 제안 → 수락/거부 선택
```

**Antigravity 주요 기능:**
- ✅ 구글 계정으로 즉시 로그인
- ✅ 설치 없이 브라우저에서 실행
- ✅ Google 인프라 기반 — 안정적
- ✅ AI가 코드 자동 완성 + 설명 제공
- ✅ 비개발자도 자연어로 앱 만들기 가능

<div class="note-star">
★ 코딩을 처음 시작하는 분이라면 Antigravity를 먼저 경험해보세요. 구글 계정만 있으면 5분 안에 첫 번째 앱을 만들 수 있습니다.
</div>

---

## 4️⃣ JetBrains IDE (IntelliJ, PyCharm, WebStorm 등)

IntelliJ IDEA, PyCharm, WebStorm 등을 사용한다면:

### Step 1: 플러그인 설치

1. **IDE 열기**
   - IntelliJ, PyCharm, WebStorm 등 실행

2. **Preferences/Settings 열기**
   - Mac: Cmd+, (쉼표)
   - Windows: Ctrl+Alt+S

3. **Plugins 검색**
   - 좌측 메뉴에서 "Plugins" 선택

4. **Marketplace 탭 클릭**
   - 상단의 "Marketplace" 선택

5. **"Claude" 검색**
   - 검색창에 "Claude Code" 입력
   - Anthropic 공식 플러그인 찾기

6. **Install 클릭**
   - 설치 시작
   - IDE 재시작 필요

### Step 2: 설정

1. **Preferences 다시 열기**
   - Mac: Cmd+,
   - Windows: Ctrl+Alt+S

2. **Claude 설정**
   - 좌측 메뉴에서 "Claude Code" 찾기
   - API Key 입력 (필요시)

3. **저장**
   - OK 또는 Apply 클릭

### Step 3: 사용하기

1. **코드 선택**
   - IDE에서 수정할 코드 선택

2. **단축키 사용**
   - Mac: Cmd+K
   - Windows: Ctrl+K
   - 또는 우클릭 → "Ask Claude Code"

3. **요청 입력**
   - 팝업 창에 원하는 요청 입력
   - Enter로 실행

---

## 📋 IDE별 단축키

| 작업 | VS Code | Cursor | Antigravity | JetBrains |
|------|---------|--------|-------------|-----------|
| AI 열기 | Cmd+Shift+A | Cmd+K | 우측 패널 클릭 | Cmd+K |
| 대화 시작 | Cmd+I | Cmd+K | 입력창에 바로 입력 | Cmd+K |
| 도움말 | Cmd+/ | Cmd+/ | ? 버튼 | Cmd+/ |
| 설정 | Cmd+, | Cmd+, | 우상단 프로필 | Cmd+, |

---

## 🔧 IDE별 설정 팁

### VS Code 추가 설정

```json
// settings.json에 추가
{
  "claude-code.autoSave": true,
  "claude-code.theme": "dark",
  "claude-code.fontSize": 14
}
```

**설정 열기:**
- Mac: Cmd+, (쉼표)
- Windows: Ctrl+,

### Cursor 추가 설정

```json
// cursor_settings.json
{
  "claude.model": "claude-3-5-sonnet",
  "claude.autoSave": true
}
```

---

## 💡 IDE 선택 가이드

### VS Code를 추천하는 경우

✅ 가장 인기 있는 에디터
✅ 무료 + 가벼움
✅ 초보자도 사용하기 쉬움
✅ 온라인 튜토리얼 많음

### Cursor를 추천하는 경우 (최고 추천!)

✅ Claude Code 기본 내장
✅ 별도 설치 불필요
✅ 통합이 더 깔끔함
✅ Claude 사용자 최적화

### Antigravity를 추천하는 경우

✅ 코딩을 처음 시작하는 분
✅ 설치가 귀찮은 분
✅ 구글 계정만 있으면 바로 시작하고 싶은 분
✅ 간단한 앱을 AI와 함께 빠르게 만들고 싶은 분

### JetBrains를 추천하는 경우

✅ 전문적인 개발 환경 원할 때
✅ Python, Java 등 특정 언어 전문
✅ 고급 기능 필요할 때
✅ 회사에서 기본으로 제공할 때

---

## 🚀 실전 사용 예시

### 예시 1: Python 파일 수정

```
1. Cursor/VS Code에서 hello.py 열기
2. 수정하고 싶은 부분 선택
3. Cmd+K (또는 Ctrl+K) 입력
4. "이 함수를 더 빠르게 만들어줄래?" 입력
5. Claude가 최적화된 코드 제안
6. Tab으로 수락
7. 완료!
```

### 예시 2: HTML 웹사이트 만들기

```
1. VS Code 열기
2. 새 파일 만들기 (index.html)
3. "정보를 표시하는 간단한 웹사이트 만들어줄래?" 입력
4. 코드 생성 대기
5. 자동으로 HTML 코드 작성
6. 브라우저에서 열어서 확인
7. 필요하면 수정 요청
```

---

## ⚠️ 자주 나오는 문제

### Q: 확장/플러그인이 설치되지 않습니다

**A:**
1. IDE 재시작 해보기
2. 인터넷 연결 확인
3. 계정 로그인 상태 확인
4. 공식 웹사이트에서 최신 버전 다운로드

### Q: API Key를 어디서 얻나요?

**A:**
1. https://claude.ai 접속
2. 계정 설정 → API Keys 섹션
3. "Create new API Key" 클릭
4. 생성된 키를 IDE에 입력

### Q: 코드 선택 후 AI 메뉴가 안 나와요

**A:**
1. Claude 계정 로그인 확인
2. 확장/플러그인 최신 버전 확인
3. IDE 재시작
4. 명령어 팔레트에서 "Claude" 검색해서 실행

---

## 💡 쉽게 이해하기

### IDE 확장 = 스마트폰 앱의 "위젯"

- **스마트폰 위젯**: 앱을 열지 않고 홈화면에서 바로 기능 사용
- **IDE 확장**: 에디터를 닫지 않고 그 안에서 바로 Claude Code 사용
- 마찬가지로 더 편하고 빠릅니다!

---

## ✨ 다음 단계

이제 당신의 코드 에디터에서 직접 Claude Code를 사용할 수 있습니다!

**추천 학습 순서:**
1. IDE 확장 설치 완료
2. 기본 명령어 배우기 (`/help`, `/status` 등)
3. 간단한 파일부터 AI에게 수정 요청해보기
4. 점차 복잡한 작업 시도

**당신이 선택한 IDE가 최고의 선택입니다!** 🚀
