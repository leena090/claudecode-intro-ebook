---
title: "[공] 클라우드 환경 설정 — 웹 세션을 내 입맛대로 꾸미기"
description: "Claude Code on the Web 세션의 네트워크 정책, 환경 변수, 설치 스크립트, 환경 캐싱을 설정하는 방법을 알아봐요"
tags: ["자동생성", "클라우드환경", "cloud-environments", "웹세션", "설정", "codeweb"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-09"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a>
<br />★ 이 기능은 <strong>Claude Code on the Web</strong> (웹 클라우드 세션)에서만 해당돼요. 터미널 CLI와는 다른 개념이에요.
</div>

## 클라우드 환경이 뭔가요?

**Claude Code on the Web**에서 작업할 때, 클로드는 **클라우드 원격 환경**에서 실행돼요. 이 환경을 내 프로젝트에 맞게 미리 설정해두면, 세션이 시작될 때마다 동일한 조건에서 작업할 수 있어요.

> 🏠 **비유로 설명하면**: 새 사무실(클라우드 서버)에 출근할 때마다 책상 배치를 처음부터 다시 잡아야 한다면 불편하겠죠? **클라우드 환경 설정**은 "출근하면 항상 이 책상 배치로 자동 세팅해줘"라고 미리 정해두는 거예요.

---

## 설정할 수 있는 4가지

| 항목 | 설명 |
|---|---|
| **네트워크 접근 정책** | 세션이 어떤 외부 URL에 접근할 수 있는지 제어 |
| **환경 변수** | API 키, 설정값 등을 세션에 자동으로 주입 |
| **설치 스크립트** | 세션 시작 시 자동으로 실행할 초기화 명령어 |
| **환경 캐싱** | 설치 결과를 저장해두어 다음 세션 시작을 빠르게 |

---

## 어디서 설정하나요?

클라우드 환경 설정은 **웹 대시보드** 또는 **`.claude/settings.json`**에서 관리해요.

```json
// .claude/settings.json
{
  "cloudEnvironments": {
    "networkPolicy": "restricted",
    "env": {
      "MY_API_KEY": "...",
      "NODE_ENV": "development"
    },
    "setupScript": "npm install && pip install -r requirements.txt"
  }
}
```

---

## 네트워크 접근 정책

세션에서 외부 인터넷 접근 범위를 정해요.

| 정책 | 의미 |
|---|---|
| `open` | 모든 외부 URL 접근 허용 |
| `restricted` | 허용 목록(allowlist)에 있는 곳만 접근 |
| `none` | 외부 인터넷 접근 차단 (보안 중시 환경) |

> 🔒 **팀·기업 사용자라면**: 보안 정책에 따라 `restricted` 또는 `none`으로 설정하는 걸 권장해요. 필요한 외부 서비스(GitHub, npm 등)만 allowlist에 추가하면 돼요.

---

## 환경 변수 주입

매 세션마다 필요한 API 키나 설정값을 자동으로 넣어줄 수 있어요.

```bash
# 직접 세션에서 주입하는 방법
export MY_API_KEY="sk-xxx..."

# 또는 settings.json의 env에 미리 등록
```

<div class="note-star">
★ <strong>보안 주의</strong> — API 키 등 민감한 값은 settings.json에 직접 평문으로 넣지 마세요. 대신 환경 변수 참조나 시크릿 관리 서비스를 활용하세요. <code>.env</code> 파일은 절대 커밋하지 마세요.
</div>

---

## 설치 스크립트

세션이 시작될 때 자동으로 실행할 명령어를 등록해요. 프로젝트 의존성 설치, 빌드, 초기화 등을 미리 설정해두면 편해요.

```bash
# 예시: Node.js + Python 프로젝트
npm install
pip install -r requirements.txt
cp .env.example .env
```

> ⏱️ **팁**: 설치 스크립트가 오래 걸리면 **환경 캐싱**을 활용해요. 의존성이 바뀌지 않으면 캐시된 결과를 재사용해 세션 시작이 훨씬 빨라져요.

---

## 환경 캐싱

설치 스크립트 실행 결과를 저장해두면, 이후 세션은 다시 설치하지 않아도 돼요.

```
첫 세션: npm install (2분 소요) → 결과 캐시 저장
다음 세션: 캐시 재사용 → 10초 만에 시작!
```

**캐시가 자동으로 무효화되는 경우**:
- `package.json`, `requirements.txt` 등 의존성 파일이 변경될 때
- 설치 스크립트 내용이 바뀔 때
- 수동으로 캐시를 초기화할 때

---

## 이런 분께 도움 돼요

| 상황 | 도움 여부 |
|---|---|
| 매번 `npm install`부터 다시 시작하기 귀찮은 분 | ✅ 설치 스크립트 + 캐싱 |
| 회사 보안 정책으로 외부 접근 제한이 필요한 분 | ✅ 네트워크 정책 |
| API 키를 매번 복붙하기 번거로운 분 | ✅ 환경 변수 |
| 팀원 모두가 동일한 개발 환경을 써야 하는 분 | ✅ 전체 활용 |

---

## 요약

| 기능 | 쓰는 이유 |
|---|---|
| **네트워크 정책** | 보안 제어 |
| **환경 변수** | API 키·설정 자동 주입 |
| **설치 스크립트** | 의존성 자동 설치 |
| **환경 캐싱** | 세션 시작 속도 향상 |

> 📚 **공식 문서**: [code.claude.com/docs/en/cloud-environments](https://code.claude.com/docs/en/cloud-environments)에서 최신 설정 옵션을 확인하세요.
