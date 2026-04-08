---
title: "Claude Code 웹 시작하기"
description: "claude.ai/code 접속부터 GitHub 연결, 첫 코딩 지시, 결과 확인까지 단계별로 따라해봅니다."
tags: ["Claude Code 웹", "시작하기", "GitHub 연결", "PR", "diff 보기", "기본 허용 도메인"]
category: "codeweb"
order: 2
lastUpdated: "2026-04-08"
---


# Claude Code 웹 시작하기

## 준비물 확인

시작 전에 아래 두 가지가 준비되어 있는지 확인해주세요.

- Claude Pro, Max, Team, 또는 Enterprise 계정
- GitHub 계정 (없다면 github.com에서 무료 생성)

---

## 1단계: claude.ai/code 접속

브라우저를 열고 주소창에 아래 주소를 입력합니다.

```
claude.ai/code
```

<mark>크롬, 엣지, 사파리 모두 됩니다.</mark> 특별히 설치할 것은 없습니다.

처음 접속하면 Claude 로그인 화면이 나타납니다. 평소 쓰는 계정으로 로그인하세요.

---

## 2단계: GitHub 계정 연결

로그인 후 화면에 **"GitHub 연결"** 또는 **"Connect GitHub"** 버튼이 보입니다.

버튼을 클릭하면 GitHub 로그인 페이지로 이동합니다. GitHub 아이디와 비밀번호를 입력하고 로그인합니다.

로그인하면 권한 허용 화면이 나타납니다. **"Authorize"** 버튼을 클릭해서 Claude가 내 GitHub에 접근할 수 있도록 허용합니다.

<div class="note-circle">○ 이 권한은 언제든지 GitHub 설정에서 취소할 수 있습니다. 너무 걱정하지 마세요.</div>

---

## 3단계: Claude GitHub 앱 설치

GitHub와 연결했으면, 이번에는 어떤 저장소(repository)에서 작업할지 설정해야 합니다.

화면에 **"Install Claude GitHub App"** 버튼이 나타납니다. 클릭하면 GitHub 앱 설치 페이지로 이동합니다.

여기서 선택할 수 있습니다.

- **All repositories** — 내 모든 저장소에 설치
- **Only select repositories** — 특정 저장소만 선택

처음에는 연습용 저장소 하나만 선택하는 것을 권장합니다. 나중에 언제든지 추가할 수 있습니다.

**Install** 버튼을 눌러서 설치를 완료합니다.

---

## 4단계: 작업할 저장소 선택

Claude Code 웹 화면으로 돌아오면, 연결한 저장소 목록이 보입니다.

작업하고 싶은 저장소를 클릭해서 선택합니다.

<div class="note-circle">○ 저장소가 없다면, github.com에서 새 저장소를 먼저 만들어야 합니다. 화면 오른쪽 상단 "+" 버튼 → "New repository"를 클릭하세요.</div>

---

## 5단계: 첫 번째 코딩 지시 내리기

저장소를 선택하면 대화창이 나타납니다. 여기서 AI에게 무엇을 만들지 말로 설명합니다.

예를 들어 이렇게 입력할 수 있습니다.

```
README.md 파일을 만들어줘.
프로젝트 이름은 "나의 첫 번째 웹사이트"이고,
어떤 프로젝트인지 간단한 설명을 3줄로 써줘.
```

또는 더 복잡한 작업도 됩니다.

```
index.html 파일을 만들어줘.
배경은 하늘색, 가운데에 "안녕하세요"라는 큰 글자가 있고,
아래에 버튼이 하나 있는 간단한 웹페이지를 만들어줘.
```

Enter 키를 누르거나 전송 버튼을 클릭하면 AI가 작업을 시작합니다.

---

## 6단계: AI가 작업하는 동안

AI는 Anthropic의 클라우드 서버에서 코딩을 시작합니다.

화면에 AI가 무엇을 하고 있는지 실시간으로 보입니다. 파일을 만들거나, 코드를 수정하거나, 오류를 고치는 과정을 볼 수 있습니다.

<mark>작업이 오래 걸리면 브라우저를 닫아도 됩니다.</mark> AI는 멈추지 않고 계속 작업합니다. 나중에 다시 접속하면 결과를 확인할 수 있습니다.

---

## 7단계: diff 보기 — 뭐가 바뀌었는지 확인하기

AI가 작업을 마치면 **diff 보기** 화면이 나타납니다.

diff는 "차이(difference)"의 줄임말입니다. 기존 코드에서 무엇이 추가되고 무엇이 삭제되었는지 색으로 보여줍니다.

- 초록색 줄: 새로 추가된 내용
- 빨간색 줄: 삭제된 내용

개발자가 아니어도 이 화면을 보면서 AI가 무엇을 했는지 대략적으로 파악할 수 있습니다.

<div class="note-circle">○ 변경 내용이 마음에 들지 않으면 대화창에 "다시 해줘" 또는 "이 부분만 바꿔줘"라고 입력하면 됩니다.</div>

---

## 8단계: PR 만들기

결과가 마음에 들면 **PR(Pull Request)** 을 만들어서 내 저장소에 코드를 저장합니다.

PR은 "이 변경 내용을 저장소에 반영할게요"라는 요청입니다. 마치 워드 문서를 최종 저장하는 것과 비슷합니다.

화면에서 **"Create PR"** 버튼을 클릭하면 됩니다.

PR이 생성되면 GitHub에 자동으로 저장됩니다. 나중에 github.com에서 확인할 수 있습니다.

---

## 전체 흐름 요약

```
접속 → GitHub 연결 → 앱 설치 → 저장소 선택 → 지시 입력 → AI 작업 → diff 확인 → PR 생성
```

딱 이 순서입니다. 한 번만 해보면 두 번째부터는 훨씬 빠르게 진행됩니다.

---

## 🌐 기본 허용 도메인 목록 (공식 문서 추가)

Claude Code 웹은 **샌드박스 환경**에서 돌아가기 때문에, 기본적으로 외부 인터넷 접근이 제한돼요. 하지만 개발에 꼭 필요한 도메인 **50개 이상**은 **기본 허용**되어 있습니다.

> 🍱 **비유로 설명하면**: 아이 방에 인터넷 차단기를 걸되, 교육용 사이트 몇 개는 화이트리스트로 풀어준 것과 같아요.

**기본 허용 카테고리 (공식 문서 기준):**

| 카테고리 | 예시 도메인 |
|---|---|
| 📦 패키지 레지스트리 | npm, PyPI, RubyGems, crates.io, pkg.go.dev |
| 🐳 컨테이너 | Docker Hub, ghcr.io, gcr.io |
| 🐙 Git 호스팅 | github.com, gitlab.com, bitbucket.org |
| ☁️ 클라우드 | AWS, GCP, Azure CLI·API 엔드포인트 |
| 📚 문서 | developer.mozilla.org, docs.python.org, go.dev |
| 🎨 CDN | cdn.jsdelivr.net, unpkg.com, fonts.googleapis.com |

→ 전체 목록: [공식 문서](https://code.claude.com/docs/en/claude-code-on-the-web#default-allowed-domains)

**즉**, npm install, pip install, Docker pull, 공식 문서 검색, CDN 리소스 가져오기 같은 **일반적인 개발 작업은 추가 설정 없이 바로 가능**해요.

---

## 다음 단계

첫 번째 작업에 성공했다면, 이제 더 강력한 기능을 살펴봅시다.

- [Auto-fix — PR 올리면 AI가 알아서 고쳐줌](./codeweb-autofix) — 오류를 AI가 자동으로 수정하는 방법
- [원격 세션 — 터미널과 웹을 오가며 작업하기](./codeweb-remote) — 더 유연하게 작업하는 고급 방법
