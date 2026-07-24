---
title: "[공] Claude Security — Anthropic의 보안 특화 AI 서비스 입문"
description: "공식 문서에 새롭게 등장한 'claude-security' 페이지. 코드 취약점 탐지, 보안 감사, 침투 테스트 지원 등 보안 업무에 특화된 Claude 기능을 소개해요"
tags: ["자동생성", "보안", "security", "취약점", "Claude Security", "신규기능"]
category: "advanced"
order: 27
lastUpdated: "2026-07-24"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서 신규 등록: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a> (Jul 24, 2026)<br />
★ 세부 기능 내용은 공식 문서 기준. 이 페이지의 설명 일부는 <strong>추정</strong>을 포함합니다. 공식 페이지 직접 확인을 권장해요.
</div>

## Claude Security가 뭔가요?

2026년 7월 24일, 공식 Claude Code 문서 목록(`llms.txt`)에 **`claude-security`** 페이지가 새로 등록됐어요. 마케팅 페이지에서도 "Claude Security"가 독립 제품으로 등재돼 있어요.

> 🍱 **비유로 설명하면**: 일반 Claude Code가 "만능 개발 조수"라면, Claude Security는 **"보안 전문 파트너"** 예요. 코드에 숨어 있는 구멍을 찾아내고 막는 데 특화됐어요.

---

## 어떤 보안 작업을 도울 수 있나요?

공식 문서 맥락과 기존 보안 관련 기능을 바탕으로 정리한 내용이에요 (추정 포함):

| 작업 유형 | 예시 |
|---|---|
| **코드 취약점 탐지** | SQL 인젝션, XSS, 인증 우회 등 OWASP Top 10 확인 |
| **보안 감사** | 코드베이스 전체를 스캔해 위험 패턴 탐지 |
| **침투 테스트 지원** | 테스트 시나리오 작성, 결과 분석 (승인된 환경에서) |
| **보안 문서 작성** | 위협 모델, 보안 정책 초안 작성 |
| **취약점 수정** | 발견된 문제를 실제 코드 패치로 해결 |

<div class="note-star">
★ 위 기능 목록은 <strong>추정</strong>입니다. 실제 지원 범위는 <a href="https://code.claude.com/docs/en/claude-security">공식 문서</a>를 확인해주세요.
</div>

---

## 이미 있던 보안 기능과 뭐가 다른가요?

Claude Code에는 기존에도 보안 관련 기능이 있었어요:

| 기존 기능 | Claude Security |
|---|---|
| `/ultrareview` — 코드 리뷰 중 보안 점검 포함 | 보안에 특화된 전용 도구 및 가이드라인 |
| `security-guidance` 문서 — 보안 모범 사례 | 보안 업무 전반을 지원하는 통합 서비스 |
| 일반 Claude Code — 보안 코드 작성 도움 | 전문 보안 팀 대상 워크플로우 |

---

## 어떻게 시작하나요?

공식 문서에서 자세한 시작 방법을 확인할 수 있어요:

```
https://code.claude.com/docs/en/claude-security
```

<div class="note-star">
★ <strong>이 페이지는 공식 문서 신규 등록 알림 목적으로 작성됐어요</strong>. 세부 사용 방법은 공식 페이지를 직접 열어보시는 걸 권장합니다.
</div>

---

## 관련 문서

- [보안 가이드라인](https://code.claude.com/docs/en/security-guidance)
- [샌드박스 환경 설정](https://code.claude.com/docs/en/sandboxing)
- [퍼미션 설정 가이드](/config/permissions-guide)
