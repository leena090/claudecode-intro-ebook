---
title: "[공] 클라우드 환경 설정 — 웹 세션이 실행되는 공간 꾸미기"
description: "Claude Code 웹 세션이 실행되는 클라우드 환경을 설정하는 방법. 네트워크 접근 수준, 환경 변수, 셋업 스크립트를 통해 세션 시작 전 개발 환경을 미리 준비해 두세요"
tags: ["자동생성", "클라우드환경", "cloud-environments", "웹세션", "네트워크", "셋업스크립트", "환경변수"]
category: "advanced"
order: 28
lastUpdated: "2026-08-08"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a>
<br />★ 대상: Claude Code on the web 사용자 (Pro, Max, Team, Enterprise)
<br />★ 웹 세션 소개: <a href="/docs/codeweb/codeweb-intro">Claude Code 웹 사용하기</a>
</div>

## 클라우드 환경이 뭔가요?

Claude Code 웹 버전(claude.ai/code)에서 "클라우드 세션"을 시작하면, Claude가 Anthropic의 서버에 있는 가상 컴퓨터 안에서 작업해요. 이 가상 컴퓨터를 **클라우드 환경(Cloud Environment)**이라고 부릅니다.

> 🍱 **비유로 설명하면**: 학교 수업을 들을 때 교실 환경이 중요하잖아요. 에어컨이 있는지, 화이트보드는 있는지, 인터넷이 연결됐는지... 클라우드 환경은 Claude가 일하는 "교실"의 환경을 미리 세팅해 두는 것이에요.

---

## 어디서 사용하나요?

클라우드 환경은 이런 곳에서 시작한 세션 모두에 적용돼요:

| 접근 방법 | 클라우드 환경 사용 여부 |
|---|---|
| Claude Code on the web (claude.ai/code) | ✅ 사용 |
| 터미널에서 `claude --cloud` | ✅ 사용 |
| Claude 모바일 앱 | ✅ 사용 |
| Claude 데스크톱 앱 | ✅ 사용 |
| Claude Tag (Slack 채널) | ✅ 사용 (공유 환경만) |
| 내 컴퓨터 터미널 세션 | ❌ 내 컴퓨터 환경 사용 |
| Remote Control 세션 | ❌ 내 컴퓨터 환경 사용 |

---

## 기본 환경 (Default)

처음 웹 설정을 하면 **Default 환경**이 자동으로 만들어져요:

- 🌐 **네트워크**: Trusted 수준 — npm, pip 같은 패키지 레지스트리 접근 가능
- 📦 **미리 설치된 도구들**: 기본 개발 도구 포함
- 🔧 **추가 설정 없음**: 환경 변수나 셋업 스크립트 없음

환경이 하나뿐이면 모든 세션이 Default에서 실행돼요.

---

## 환경 설정하기

### 어디서 설정하나요?

[claude.ai/code](https://claude.ai/code) 메시지 입력창 위에 있는 **환경 이름(클라우드 아이콘)** 버튼을 클릭하면 환경 선택기가 열려요.

### 설정할 수 있는 것들

#### 1️⃣ 네트워크 접근 수준

| 수준 | 허용 범위 |
|---|---|
| **Trusted** (기본) | npm, pip 등 패키지 레지스트리 + 허용 목록 도메인 |
| **Isolated** | 외부 인터넷 접근 차단 |
| **Unrestricted** | 모든 인터넷 접근 허용 |

#### 2️⃣ 환경 변수

`.env` 형식으로 설정해요:

```
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=postgres://localhost:5432/myapp
```

> ⚠️ **중요**: 환경 변수는 그 환경을 사용하는 모든 사람이 볼 수 있어요. **API 키나 비밀번호는 절대 여기에 넣지 마세요!**

#### 3️⃣ 셋업 스크립트

세션이 시작되기 전, Claude가 작업을 시작하기 전에 자동으로 실행되는 bash 스크립트예요:

```bash
#!/bin/bash
# 매 세션마다 자동 실행
npm install
pip install -r requirements.txt
echo "개발 환경 준비 완료!"
```

> 🍱 **비유로 설명하면**: 사무실 출근 전에 청소팀이 미리 책상 닦고, 컴퓨터 켜두고, 커피 끓여놓는 것과 같아요. Claude가 도착하면 바로 일 시작!

---

## CLI에서 환경 선택하기

터미널에서 기본 클라우드 환경을 선택하려면:

```bash
/remote-env
# 환경 목록에서 선택
```

이 설정은 `settings.json`의 `remote.defaultEnvironmentId` 키에 저장돼요.

---

## 팀/조직 공유 환경

**Team, Enterprise 플랜**에서는 관리자가 조직 전체에 공유되는 환경을 만들 수 있어요:

- 모든 팀원이 같은 환경에서 작업
- 일관된 개발 환경 보장
- 관리자가 [admin settings](https://claude.ai/admin-settings)에서 생성·관리

> 🍱 **비유로 설명하면**: 회사 전체가 같은 규격의 노트북과 소프트웨어를 쓰는 것처럼, 모든 팀원이 같은 클라우드 개발 환경에서 작업해요.

---

## 자체 호스팅 환경과의 차이

| 구분 | 클라우드 환경 | 자체 호스팅 환경 |
|---|---|---|
| 서버 위치 | Anthropic 서버 | 우리 회사 서버 |
| 내부 네트워크 접근 | ❌ | ✅ |
| 설정 난이도 | 쉬움 (UI에서 클릭) | 복잡 (인프라 필요) |
| 대상 요금제 | 모든 플랜 | Team, Enterprise |
| 베타 여부 | 일반 제공 | 공개 베타 |

내부 데이터베이스나 사내 API에 접근해야 한다면 → [자체 호스팅 환경](/docs/advanced/self-hosted-environments)

---

## 환경 보관(Archive) 방법

- 환경 편집 화면에서 **Archive** 버튼 클릭
- 삭제는 불가능, 보관만 가능
- 보관된 환경은 새 세션에서 선택 불가
- 이미 실행 중인 세션은 계속 사용 가능

---

## 관련 문서

- [Claude Code 웹 시작하기](/docs/codeweb/codeweb-intro)
- [자체 호스팅 환경 (팀/기업용)](/docs/advanced/self-hosted-environments)
- [Routines 자동화](/docs/advanced/routines)
