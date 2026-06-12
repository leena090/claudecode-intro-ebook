---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 플랜에서 Auto 모드 사용 가능, /usage 상세 분석, /code-review 명령어 신규 추가"
tags: ["업데이트", "2026", "week21", "auto-mode", "usage", "code-review", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-12"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto 모드 — 이제 Pro 플랜 + Sonnet 4.6에서도

**Auto 모드(자동 모드)** 가 이전에는 Max/Enterprise 전용이었는데, 이번 주부터 **Pro 플랜**에서도, **Sonnet 4.6 모델**에서도 쓸 수 있어요.

> 🍱 **비유**: 자동 운전 기능이 고급 차(Max) 전용이었는데, 이제 일반 차(Pro)에도 달린 거예요.

**Auto 모드란?**

Auto 모드는 `--dangerously-skip-permissions` 없이도 Claude가 스스로 파일을 편집하고 명령어를 실행하게 해주는 안전한 자율 모드예요. 백그라운드 분류기(classifier)가 Claude가 위험한 행동을 하지 않도록 감시해요.

```bash
# Auto 모드로 실행
claude --auto

# 또는 세션 중에 전환
Shift+Tab  →  모드 선택 화면에서 "Auto" 선택
```

| 항목 | 이전 | Week 21 이후 |
|------|------|-------------|
| Pro 플랜 | ❌ | ✅ |
| Max 플랜 | ✅ | ✅ |
| Sonnet 4.6 | ❌ | ✅ |
| Opus 모델 | ✅ | ✅ |

<div class="note-circle">
○ Auto 모드는 잘못된 파일 삭제·보안 관련 명령 등 위험 행동에는 여전히 승인을 요청해요<br />
○ 처음에는 작은 프로젝트에서 연습하고 점차 신뢰도를 높이세요
</div>

---

### 2️⃣ `/usage` 상세 분석 — 제한 소비 원인 한눈에

`/usage` 명령어가 이제 **어떤 스킬·서브에이전트·MCP 서버**가 내 플랜 한도를 얼마나 쓰는지 상세히 보여줘요.

```bash
/usage
```

> 🍱 **비유**: 전기 요금 청구서에 "냉장고가 얼마, 에어컨이 얼마" 라고 항목별로 나오는 것처럼, 이제 Claude 사용량도 기능별로 나와요.

**이전 `/usage`**: 전체 사용량 숫자만 표시
**이번 주 `/usage`**: 스킬별, 서브에이전트별, MCP 서버별 세부 소비량 표시

이걸 보면 "왜 갑자기 한도를 다 쓴 거지?" 하는 상황에서 어떤 기능이 많이 쓰이는지 알 수 있어요. `[공]`

---

### 3️⃣ `/code-review` 명령어 신규 추가

새 명령어 `/code-review`로 현재 변경 사항(diff)을 빠르게 리뷰할 수 있어요.

```bash
# 현재 변경 사항 리뷰
/code-review

# 다양한 깊이 옵션
/code-review low     # 빠른 훑어보기
/code-review medium  # 균형 잡힌 검토
/code-review high    # 심층 분석
/code-review ultra   # 멀티 에이전트 심층 리뷰 (클라우드)
```

> 🍱 **비유**: `/code-review`는 동네 편의점 같고, `/ultrareview`는 대형 마트예요 — 빠르게 필요한 것만 확인할 땐 편의점(code-review), 대규모 점검이 필요할 땐 대형 마트(ultrareview).

**`/code-review` vs `/ultrareview` 차이점:**

| 항목 | `/code-review` | `/ultrareview` |
|------|---------------|----------------|
| 속도 | 빠름 | 느림 |
| 방식 | 단일 세션 | 멀티 에이전트 (클라우드) |
| 적합한 상황 | 일상적인 PR 검토 | 대형 PR, 보안 집중 검토 |
| 비용 | 낮음 | 높음 |

`[공]` 출처: code.claude.com/docs/en/whats-new/2026-w21

---

## 이번 주 요약

```
✅ Auto 모드: Pro 플랜 + Sonnet 4.6에서도 사용 가능
✅ /usage: 스킬/서브에이전트/MCP 서버별 세부 소비 확인
✅ /code-review: 빠른 코드 리뷰 명령어 신규 추가
```

버전 확인:
```bash
claude --version
```
