---
title: "[공] Claude Security 플러그인 — 내 코드의 보안 구멍을 AI가 찾아준다"
description: "/claude-security 명령어 하나로 여러 에이전트가 협력해 취약점을 찾고, 검토한 패치까지 만들어줘요"
tags: ["자동생성", "보안", "플러그인", "claude-security", "취약점", "코드리뷰", "w30"]
category: "advanced"
order: 27
lastUpdated: "2026-08-17"
---

<div class="note-star">
★ <strong>[공]</strong> 2026-07-24 W30 업데이트로 출시된 공식 Anthropic 플러그인<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a>
</div>

## 이 플러그인이 뭔가요?

> 🍱 **비유로 설명하면**: 집을 짓고 나서 보안 전문가 팀을 불러서 "문 잠금장치 튼튼한지, 창문 잠겼는지, 지하실 잠금은요?" 하고 구석구석 점검받는 거예요. 그것도 AI 여러 명이 나눠서 꼼꼼히.

**Claude Security 플러그인**은 Claude Code 세션 안에서 **여러 에이전트가 협력해** 코드베이스의 보안 취약점을 찾아주는 도구예요.

스캔 과정:
1. 에이전트들이 코드 아키텍처를 **지도처럼 그려요**
2. 위협 모델(Threat Model)을 **만들어요**
3. 취약점을 **사냥해요**
4. **독립 검증 에이전트**가 발견 내용을 재검토해요
5. 결과를 `CLAUDE-SECURITY-<시간>/` 폴더에 저장해요

---

## 설치 방법

Claude Code 세션에서 한 줄이면 설치 완료:

```text
/plugin install claude-security@claude-plugins-official
```

설치 후 메시지가 `Run /reload-plugins to activate.`라고 뜨면:

```text
/reload-plugins
```

---

## 사용 방법

### 1. 전체 코드베이스 스캔

```text
/claude-security
```

메뉴가 뜨면 **Scan codebase** 선택 → 스캔 범위 고르기 → 확인

> **주의**: 스캔은 시간이 꽤 걸려요. Claude Code 창을 닫으면 안 돼요. 토큰도 꽤 쓰여요.

### 2. 변경분만 스캔

브랜치의 변경된 코드만 검사:

```text
내 브랜치 변경분만 스캔해줘
```

또는 특정 커밋:

```text
commit abc1234 스캔해줘
```

### 3. 취약점 패치 생성

스캔 결과를 보고 수정 패치 만들기:

```text
/claude-security
```
→ **Suggest patches** 선택 → 수정할 취약점 선택

---

## 결과물 확인

스캔이 끝나면 프로젝트 폴더에 이런 파일들이 생겨요:

| 파일 | 내용 |
|---|---|
| `CLAUDE-SECURITY-RESULTS.md` | 취약점 보고서 (F1, F2... 형식으로 번호 매김) |
| `CLAUDE-SECURITY-RESULTS.jsonl` | 기계 처리용 JSON |
| `CLAUDE-SECURITY-REVISION-<커밋>.json` | 어떤 코드를 스캔했는지 기록 |
| `patches/F1.patch` | 패치 파일 (자동 적용 안 됨!) |

### 패치 적용 방법

```bash
git apply CLAUDE-SECURITY-<시간>/patches/F1.patch
```

> ⚠️ **패치는 자동으로 적용되지 않아요**. 반드시 내가 직접 검토하고 적용해야 해요.

---

## 사전 조건

| 항목 | 조건 |
|---|---|
| Claude Code 버전 | v2.1.154 이상 |
| 요금제 | 유료 플랜 필요 |
| Pro 플랜 | Dynamic workflows 활성화 필요 (`/config`에서 켜기) |
| Python | `python3` 3.9.6 이상이 PATH에 있어야 함 |
| 운영체제 | macOS, Linux, Windows 모두 지원 |
| Auto 모드 | 필수는 아니지만 권장 (매 단계 허락 안 물어봐서 스캔이 훨씬 빠름) |

---

## 다른 보안 도구와 뭐가 달라요?

| 도구 | 언제 작동? | 특징 |
|---|---|---|
| 보안 가이던스 플러그인 | 코드 작성 중 실시간 | 클로드가 코드 짜는 중에 문제 발견·수정 |
| `/security-review` | 수동 실행 | 현재 브랜치 단일 보안 패스 |
| **Claude Security 플러그인** | 수동 실행 | **여러 에이전트가 심층 스캔**, 독립 검증, 패치까지 |
| Code Review | PR 생성 시 | 다중 에이전트 정확성+보안 리뷰 |
| Claude Security (엔터프라이즈) | 상시 모니터링 | 레포지토리 연결 후 자동 모니터링 |

---

## 주의사항

- **Fable 5 사용 시**: 사이버 보안 안전 분류기가 일부 작업을 차단할 수 있어요. 자동으로 Opus로 다운그레이드되는데, 스캔은 계속 진행돼요.
- **큰 프로젝트**: 전체 스캔 대신 `API 레이어`, `인증 코드` 같이 영역을 나눠서 스캔하는 게 더 효율적이에요.
- **결과는 비결정적**: 같은 코드도 스캔할 때마다 다른 취약점이 발견될 수 있어요. 정기적으로 돌리는 게 좋아요.
- **스캔 파일 git에 포함**: `.gitignore`가 자동 생성되어 실수로 커밋 안 되게 막아줘요. 감사 기록으로 남기고 싶으면 그 `.gitignore` 파일만 삭제하면 돼요.

---

## 더 읽어보기

- 📖 [공식 Claude Security 플러그인 문서](https://code.claude.com/docs/en/claude-security)
- 📖 [보안 가이던스 플러그인](https://code.claude.com/docs/en/security-guidance)
- 📖 [Code Review 설정](https://code.claude.com/docs/en/code-review)
- 📖 [Dynamic workflows](https://code.claude.com/docs/en/workflows)
