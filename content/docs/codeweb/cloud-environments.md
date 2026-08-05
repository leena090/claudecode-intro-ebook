---
title: "[공] 클라우드 환경 설정 — 웹 세션의 네트워크·환경변수·스크립트 맞춤 설정"
description: "Claude Code 웹 세션에서 클라우드 환경을 설정하는 방법 — 네트워크 접근 수준, 환경변수, 셋업 스크립트, 환경 캐싱까지"
tags: ["자동생성", "클라우드환경", "웹세션", "환경설정", "cloud-environments"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-05"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서 신규 등재 — <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a> (2026-08-05 확인)
</div>

## 클라우드 환경이 뭔가요?

Claude Code를 웹(`claude.ai/code`)에서 쓰면 Anthropic의 **클라우드 서버에서 세션이 실행**돼요. 이 환경을 내 프로젝트 상황에 맞게 설정할 수 있어요.

> 🍱 **비유로 설명하면**: 회사 컴퓨터를 처음 받으면 "인터넷 접근 권한, 기본 설치 프로그램, 환경변수" 같은 걸 IT팀이 설정해주죠? 클라우드 환경 설정은 내가 직접 그 과정을 하는 거예요 — Claude Code의 클라우드 "작업실"을 꾸미는 거예요.

---

## 무엇을 설정할 수 있나요?

| 설정 항목 | 내용 |
|---|---|
| **네트워크 접근 수준** | 인터넷 차단 / 일부 허용 / 전체 허용 |
| **환경변수** | API 키 같은 값을 세션에 주입 |
| **셋업 스크립트** | 세션 시작 시 자동 실행할 명령어 |
| **환경 캐싱** | 설정 결과를 저장해 다음 세션 빠르게 시작 |

---

## 네트워크 접근 수준

웹 세션에서 Claude Code가 인터넷을 얼마나 쓸 수 있는지 결정해요.

| 수준 | 설명 | 적합한 상황 |
|---|---|---|
| **차단(Blocked)** | 외부 인터넷 없음 | 보안 민감 코드, 내부 전용 |
| **제한(Restricted)** | 허용 목록 도메인만 접근 | 특정 API만 쓰는 프로젝트 |
| **전체(Full)** | 인터넷 자유 접근 | npm install, API 호출 등 |

<div class="note-star">
★ 기본값은 프로젝트 생성 시 선택한 수준이에요. 프로젝트 설정에서 언제든 변경할 수 있어요.
</div>

---

## 환경변수 주입

클라우드 세션에서 API 키나 설정값이 필요할 때 환경변수로 안전하게 전달해요.

**예시 — `.claude/environments/` 폴더 사용:**
```yaml
# .claude/environments/my-env.yaml
env:
  DATABASE_URL: "postgresql://..."
  API_KEY: "..."
```

<div class="note-star">
⚠️ <strong>주의</strong>: 환경변수에 실제 비밀번호나 API 키를 그냥 넣으면 Git에 올라갈 수 있어요. 비밀값은 반드시 시크릿 관리 도구를 쓰거나 `.gitignore`에 추가하세요.
</div>

---

## 셋업 스크립트

세션이 시작될 때 자동으로 실행할 명령어를 등록해요. 매번 손으로 설치하지 않아도 돼요.

**예시 — Node.js 프로젝트 자동 설정:**
```bash
#!/bin/bash
# .claude/setup.sh
npm install
cp .env.example .env
```

> 🍱 **비유로 설명하면**: "가게 문 열면 자동으로 커피머신 켜고, 오늘의 메뉴판 꺼내놓기" 같은 거예요 — 세션 시작 때마다 반복 작업을 자동화해요.

---

## 환경 캐싱

셋업 스크립트 실행 결과(의존성 설치 등)를 저장해두면 다음 세션에서 훨씬 빠르게 시작할 수 있어요.

```
처음 세션: 의존성 설치 (2~3분)
↓ 캐싱
다음 세션: 캐시에서 바로 로드 (수초)
```

---

## 언제 이 기능이 필요한가요?

| 상황 | 도움이 되는 설정 |
|---|---|
| 회사 내부 API에만 접근해야 할 때 | 네트워크 제한 수준 설정 |
| 매번 `npm install` 하기 귀찮을 때 | 셋업 스크립트 + 캐싱 |
| API 키를 Claude에게 전달해야 할 때 | 환경변수 주입 |
| 팀원 모두 같은 환경에서 작업해야 할 때 | 환경 설정 공유 |

---

<div class="note-star">
★ 공식 문서: <a href="https://code.claude.com/docs/en/cloud-environments">code.claude.com/docs/en/cloud-environments</a><br />
★ 웹에서 Claude Code 시작하기: <a href="https://code.claude.com/docs/en/web-quickstart">code.claude.com/docs/en/web-quickstart</a>
</div>
