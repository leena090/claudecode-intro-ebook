---
title: "[공] 클라우드 환경 설정 — 웹 세션의 네트워크·도구·스크립트 직접 구성하기"
description: "Claude Code 웹 세션이 돌아가는 클라우드 환경을 직접 설정할 수 있어요. 네트워크 접근 범위, 환경 변수, 설정 스크립트까지 한 번에 정리합니다"
tags: ["자동생성", "클라우드환경", "cloud-environments", "웹세션", "네트워크", "설정"]
category: "codeweb"
order: 5
lastUpdated: "2026-07-30"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a>
<br />★ 웹 세션(Claude Code on the web) 리서치 프리뷰: Pro·Max·Team 플랜, Enterprise Premium 플랜
</div>

## 클라우드 환경이 뭔가요?

Claude Code를 웹 브라우저에서 사용할 때, 작업이 **클라우드의 가상 컴퓨터(VM)**에서 실행돼요. 이 VM 환경을 **"클라우드 환경"** 이라고 불러요.

> 🍱 **비유로 설명하면**: 내 집 컴퓨터 대신 **임시 원룸을 빌려서 일하는 것**과 같아요. 그 원룸에 어떤 도구(Python, Node.js 등)가 있고, 밖에 어떤 인터넷 연결이 되는지, 방 시작할 때 무슨 준비를 할지 — 이걸 설정하는 게 "클라우드 환경 설정"이에요.

---

## 기본 환경(Default)

처음 웹 온보딩 시 자동으로 만들어지는 환경이에요. 기본 설정은:

- **네트워크 접근**: Trusted (패키지 저장소 등 허용 목록만)
- **환경 변수**: 없음
- **설정 스크립트**: 없음

기본 환경 하나만 있으면 모든 세션이 여기서 실행돼요.

---

## 환경 설정하기

[claude.ai/code](https://claude.ai/code) 접속 → 메시지 입력창 위 **구름 아이콘** 클릭

여기서 할 수 있는 것:
- 새 환경 추가
- 기존 환경 수정
- 환경 보관(Archive)

<div class="note-star">
★ 환경은 <strong>삭제가 아니라 보관</strong>만 됩니다. 보관된 환경은 새 세션에서 선택할 수 없게 돼요.
</div>

---

## 네트워크 접근 수준

| 수준 | 설명 |
|---|---|
| **None** | 인터넷 연결 없음 |
| **Trusted** | 기본값. npm·PyPI 등 일반 패키지 저장소 + GitHub만 허용 |
| **Full** | 모든 도메인 허용 |
| **Custom** | 내가 직접 도메인 목록 지정 |

> 🍱 **비유로 설명하면**: Trusted는 "학교 도서관 인터넷"처럼 승인된 사이트만, Custom은 "내가 화이트리스트 만들어서" 관리하는 것, Full은 제한 없는 일반 인터넷이에요.

### Custom 도메인 설정 예시

```
api.example.com
*.internal.example.com
registry.example.com
```

- 한 줄에 하나씩 입력
- `*.`으로 시작하면 모든 서브도메인 허용

---

## 환경 변수 설정

`.env` 파일 형식으로 입력하면 돼요:

```
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=postgres://localhost:5432/myapp
```

<div class="note-star">
⚠️ <strong>주의</strong> — 환경 변수는 이 환경을 쓰는 <strong>모든 사람이 볼 수 있어요</strong>. API 키·비밀번호 같은 중요 정보는 절대 여기 넣지 마세요.
</div>

---

## 설정 스크립트(Setup Script)

세션이 시작될 때 Claude Code가 실행되기 **전에** 딱 한 번 실행되는 Bash 스크립트예요.

> 🍱 **비유로 설명하면**: 직원이 출근하기 전에 청소부가 먼저 사무실을 정리해두는 것처럼, Claude가 일 시작하기 전에 필요한 도구를 미리 설치해두는 역할이에요.

### 사용 예시: gh CLI 설치

```bash
#!/bin/bash
apt update && apt install -y gh
```

### 중요 규칙

- **종료 코드 0** 이어야 해요 — 오류 나면 세션 시작 실패
- **5분 이내**에 완료해야 해요
- 설치가 실패해도 괜찮으면 `|| true` 붙여서 계속 진행시키기

---

## 환경 캐싱

설정 스크립트가 처음 실행된 후 **파일 시스템 스냅샷**을 저장해요. 이후 세션은 이 스냅샷에서 시작하니까 매번 설치하지 않아도 돼요.

캐시는 약 **7일** 후 자동 만료되거나, 환경 설정을 바꾸면 다시 빌드돼요.

---

## 기본 제공 도구

클라우드 VM(Ubuntu 24.04)에 미리 설치된 도구들:

| 분류 | 포함 도구 |
|---|---|
| Python | Python 3.x, pip, poetry, pytest, ruff |
| Node.js | 20·21·22 (nvm), npm, yarn, pnpm |
| 데이터베이스 | PostgreSQL 16, Redis 7.0 |
| 언어 | Ruby, PHP, Java, Go, Rust, C/C++ |
| 도구 | Docker, git, jq, ripgrep, vim |

정확한 버전은 세션에서 Claude에게 `check-tools` 실행해달라고 부탁하면 돼요.

---

## 팀·엔터프라이즈: 공유 환경

Team·Enterprise 플랜의 오너·관리자는 **조직 전체가 공유하는 환경**을 만들 수 있어요.

- [claude.ai/admin-settings](https://claude.ai/admin-settings) → Cloud environments
- 팀원 모두 같은 설정으로 시작 가능
- Claude Tag(슬랙 연동)도 공유 환경 사용

---

## 관련 자료

- [웹에서 Claude Code 시작하기](/codeweb/codeweb-intro)
- [공식 클라우드 환경 문서 (영문)](https://code.claude.com/docs/en/cloud-environments)
- [Claude Code on the Web](https://code.claude.com/docs/en/claude-code-on-the-web)
