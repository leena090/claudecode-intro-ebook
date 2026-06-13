---
title: "[공] security-guidance 플러그인 — Claude가 자기 코드를 직접 점검해요"
description: "Claude가 코드를 작성하면서 동시에 보안 취약점을 스스로 검토하고 수정하는 security-guidance 플러그인 설치법과 사용법을 알아봐요"
tags: ["고급", "security-guidance", "보안", "플러그인", "취약점", "자동생성"]
category: "advanced"
order: 21
lastUpdated: "2026-06-13"
---

<div class="note-star">
★ <strong>공식 기능</strong> — Week 22 (2026-05-25) 신규 플러그인. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/security-guidance" target="_blank">공식 문서: code.claude.com/docs/en/security-guidance</a>
</div>

## security-guidance 플러그인이 뭔가요?

Claude가 코드를 수정할 때마다 **자동으로 보안 취약점을 검토**하고, 문제가 있으면 **같은 세션 안에서 바로 수정**해요. 별도의 보안 검토 단계 없이 코딩과 보안 점검이 동시에 이뤄지는 거예요.

> 🍱 **비유로 설명하면**: 요리사가 요리를 만들면서 동시에 식품안전관리사가 바로 옆에서 "이 재료 유통기한 확인했어요?", "이 온도에서 충분히 익혔나요?" 하고 실시간으로 체크하는 것과 같아요. 완성 후 따로 검사받는 게 아니라 **만드는 도중에** 잡아내는 거예요. `[공]`

---

## 설치하는 법

```bash
# Step 1: Anthropic 공식 마켓플레이스에서 설치
> /plugin install security-guidance@claude-plugins-official

# Step 2: 현재 세션에 즉시 적용
> /reload-plugins
```

설치하고 나면 Claude가 코드를 수정할 때마다 자동으로 작동해요. 따로 명령어를 입력할 필요가 없어요.

---

## 어떻게 작동하나요?

security-guidance 플러그인은 **3단계**로 검토해요. 작업 중요도에 따라 다른 강도로 점검해요.

| 단계 | 시점 | 방식 | 속도 |
|---|---|---|---|
| 1️⃣ 패턴 검사 | 파일 편집 즉시 | 알려진 취약점 패턴 빠른 스캔 | 빠름 |
| 2️⃣ 모델 검토 | 매 턴 끝날 때 | AI가 직접 코드 검토 | 보통 |
| 3️⃣ 심층 검토 | 커밋·푸시 시 | 에이전트가 전체 흐름 분석 | 철저함 |

> 🍱 **비유**: 1단계는 "문 잠갔나?" 확인, 2단계는 "오늘 들어온 사람 목록 검토", 3단계는 "CCTV 녹화 전체 돌려보기"예요. 쌓이는 게 아니라 각 타이밍마다 적절한 수준으로 점검해요.

---

## 어떤 보안 문제를 잡아내나요?

| 취약점 유형 | 예시 |
|---|---|
| 🔓 SQL 인젝션 | `SELECT * FROM users WHERE id = ${userId}` |
| 💉 XSS (크로스사이트 스크립팅) | `innerHTML = userInput` 직접 삽입 |
| 🔑 하드코딩된 시크릿 | `const apiKey = "sk-real-key-1234"` |
| 🔐 안전하지 않은 역직렬화 | `eval(userInput)` |
| 🌐 열린 리디렉션 | 검증 없는 URL 리디렉션 |

---

## 프로젝트별 보안 규칙 추가

기본 규칙 외에 **프로젝트에 맞는 보안 규칙**을 추가할 수 있어요.

```markdown
<!-- .claude/claude-security-guidance.md 파일 생성 -->

# 우리 프로젝트 보안 규칙

- 사용자 입력은 반드시 sanitize 함수를 통해 처리
- 외부 API 키는 환경 변수로만 사용 (코드에 직접 쓰지 말 것)
- 데이터베이스 쿼리는 반드시 prepared statement 사용
```

이 파일을 만들면 Claude가 우리 팀 규칙도 같이 확인해요.

---

## 알아두세요

<div class="note-star">
★ 플러그인 설치 후 <code>/reload-plugins</code>를 실행해야 현재 세션에 즉시 적용돼요.<br />
★ 새 세션을 시작하면 자동으로 로드돼요 (재설치 불필요). <code>[공]</code><br />
★ 보안 검토 자체에도 토큰이 소모돼요 (특히 3단계 심층 검토).
</div>

---

## 더 알아보기

- [공식 문서 — Security Guidance Plugin](https://code.claude.com/docs/en/security-guidance)
- [플러그인 마켓플레이스](/docs/advanced/plugin-marketplace)
- [Week 22 업데이트](/docs/next/whats-new-w22)
