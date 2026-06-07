---
title: "[공] 주간 업데이트 Week 22 — Opus 4.8 출시·다이나믹 워크플로우·보안 플러그인·Fast Mode 요금 인하 (2026년 5월 25~29일)"
description: "Claude Opus 4.8 정식 출시, 수백 개 서브에이전트를 한꺼번에 지휘하는 다이나믹 워크플로우(research preview), 코드 보안 자동 검사 플러그인, Fast Mode 요금 $30→$10으로 대폭 인하"
tags: ["자동생성", "업데이트", "opus-4-8", "dynamic-workflows", "security-guidance", "fast-mode", "week22"]
category: "reference"
order: 10
lastUpdated: "2026-06-07"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 이 문서는 <a href="https://code.claude.com/docs/en/whats-new/2026-w22">code.claude.com 주간 업데이트 Week 22</a>을 바탕으로 작성됐어요. (버전 v2.1.150 → v2.1.157)
</div>

## 이번 주(5월 25~29일)에 뭐가 달라졌나요?

이번 Week 22는 **"Claude Code 역대 가장 큰 업데이트 주 중 하나"**예요. 새 최고 모델 Opus 4.8이 나왔고, 대규모 작업을 자동으로 지휘하는 다이나믹 워크플로우가 리서치 프리뷰로 등장했으며, Fast Mode 요금도 대폭 내렸어요.

---

## 1. 🧠 Claude Opus 4.8 — 새 최고 모델 등장

### 뭔가요?

Anthropic이 **Claude Opus 4.8**을 공식 출시했어요. Max, Team Premium, Enterprise pay-as-you-go, 그리고 Anthropic API의 기본 모델로 전환됐어요.

> 🚗 **비유로 설명하면**: 자동차 회사가 플래그십 모델을 Opus 4.7에서 Opus 4.8로 교체한 거예요. 같은 가격대에 더 강력한 엔진이 들어간 것처럼, 코딩·에이전트 작업·복잡한 분석에서 더 뛰어난 성능을 보여요.

### 무엇이 좋아졌나요?

- **코딩 성능 향상**: 복잡한 다중 파일 수정, 버그 추적 등 에이전트 작업 강화
- **롱런(long-running) 작업 일관성**: 오래 이어지는 작업에서도 흐름 유지
- **기본 노력 수준 `high`**: 일반 요청에 더 꼼꼼하게 처리

### 어떻게 사용하나요?

```bash
# 모델 선택
/model claude-opus-4-8

# 더 어려운 작업에는 xhigh 노력 수준
/effort xhigh
```

### 어떤 플랜에서 기본값이 바뀌나요?

| 플랜 | 기본 모델 |
|---|---|
| Max (5x, 20x) | Opus 4.8 (이전: Opus 4.7) |
| Team Premium | Opus 4.8 |
| Enterprise pay-as-you-go | Opus 4.8 |
| Anthropic API | Opus 4.8 |
| Pro | Sonnet 4.6 (변경 없음) |

<div class="note-star">
★ Opus 4.8 사용을 위해 Claude Code v2.1.154 이상이 필요해요. <code>claude update</code>로 업데이트하세요. <code>[공]</code>
</div>

---

## 2. 🎭 다이나믹 워크플로우 (Dynamic Workflows) — 수백 개 에이전트 지휘

### 뭔가요?

다이나믹 워크플로우(리서치 프리뷰)는 **Claude가 여러분의 작업을 위한 오케스트레이션 스크립트를 직접 작성하고, 수십~수백 개의 서브에이전트를 백그라운드에서 실행**하는 기능이에요.

> 🏗️ **비유로 설명하면**: 건설 현장에서 총감독(Claude)이 공사 계획서를 짜고, 전기공·배관공·목수(서브에이전트들)를 동시에 각자 역할에 맞게 보내는 것처럼요. 총감독이 일일이 지휘할 필요 없이, 공사 계획서(워크플로우 스크립트)가 알아서 모든 걸 조율해요.

### 언제 쓰나요?

- 🔍 **전체 코드베이스 감사**: 수천 개 파일에서 보안 취약점·패턴 찾기
- 🔄 **대규모 마이그레이션**: 500개 파일의 API 호출 방식 일괄 변경
- 📚 **교차 검증 리서치**: 여러 소스를 동시에 검색하고 팩트체크
- 📋 **복합 계획 수립**: 여러 각도에서 동시에 초안 작성 후 비교

### 어떻게 사용하나요?

**방법 1: 프롬프트에 ultracode 키워드**
```text
ultracode: src/routes/ 아래 모든 API 엔드포인트에서 인증 체크 누락 감사해줘
```

**방법 2: 직접 워크플로우 요청**
```text
> 모든 내부 fetch() 호출을 새 HttpClient 래퍼로 마이그레이션하는 워크플로우 만들어줘
```

**방법 3: 세션 전체 자동 적용**
```text
/effort ultracode
```

**기본 내장 워크플로우: `/deep-research`**
```text
/deep-research Node.js v20과 v22 사이에 Permission Model이 어떻게 바뀌었나요?
```

### 실행 중인 워크플로우 관리

```bash
# 워크플로우 목록 보기
/workflows

# 진행 상황 모니터링 (에이전트 수, 토큰, 경과 시간)
# /workflows에서 방향키로 선택 → Enter로 상세 보기
```

| 키 | 동작 |
|---|---|
| `↑` / `↓` | 페이즈 또는 에이전트 선택 |
| `Enter` | 상세 내용 보기 |
| `p` | 일시정지 / 재개 |
| `x` | 에이전트 또는 워크플로우 중단 |
| `s` | 워크플로우 스크립트 저장 (재사용용) |

### 중요한 제한사항

| 제한 | 이유 |
|---|---|
| 동시 실행 에이전트 최대 16개 | 로컬 리소스 과부하 방지 |
| 1회 실행당 총 에이전트 최대 1,000개 | 무한 루프 방지 |
| 실행 중 사용자 입력 불가 | 자동화 특성상 (권한 확인 팝업만 가능) |

<div class="note-star">
★ 리서치 프리뷰 단계예요. Pro 플랜에서는 <code>/config</code>에서 Dynamic Workflows를 켜야 해요. <code>[공]</code>
</div>

---

## 3. 🔐 Security Guidance 플러그인 — 코드 보안 자동 검사

### 뭔가요?

`security-guidance` 플러그인이 공식 Anthropic 마켓플레이스에 등장했어요. Claude가 코드를 수정할 때마다 **자동으로 보안 취약점을 검사하고 같은 세션에서 바로 수정**해줘요.

> 🛡️ **비유로 설명하면**: 집을 지을 때 안전 검사관이 매 공정마다 따라다니면서 위험 요소를 즉시 지적해주는 거예요. 다 짓고 나서 "사실 이 벽은 허가가 안 됩니다"가 아니라, 짓는 도중에 바로바로 고쳐주는 것처럼요.

### 어떻게 설치하나요?

```bash
# 공식 Anthropic 마켓플레이스에서 설치
/plugin install security-guidance@claude-plugins-official

# 현재 세션에 적용
/reload-plugins
```

### 검사 방식

| 시점 | 검사 방식 |
|---|---|
| 파일 수정할 때마다 | 빠른 패턴 체크 |
| 매 턴 종료 시 | 모델 리뷰 |
| 커밋·푸시 시 | 심층 에이전트 리뷰 |

### 프로젝트별 규칙 추가

```markdown
# .claude/claude-security-guidance.md

# 이 프로젝트 보안 규칙
- SQL 쿼리는 반드시 파라미터 바인딩 사용
- 사용자 입력은 항상 검증 후 사용
- JWT 시크릿은 환경변수에서만 읽기
```

---

## 4. ⚡ Fast Mode — Opus 4.8 기본 적용 + 요금 대폭 인하

### 뭐가 달라졌나요?

Fast Mode(패스트 모드)가 이제 **Opus 4.8을 기본으로 사용**하면서, 요금도 대폭 내렸어요!

| 항목 | 이전 (Opus 4.7) | 이번 주 (Opus 4.8) |
|---|---|---|
| 기본 모델 | Opus 4.7 | **Opus 4.8** |
| 입력 요금 | $30/백만 토큰 | **$10/백만 토큰** (67% 인하!) |
| 출력 요금 | $150/백만 토큰 | **$50/백만 토큰** (67% 인하!) |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |

> 💰 **비유로 설명하면**: 택시를 타면 이전엔 기본 요금이 3만 원이었는데, 더 좋은 차(Opus 4.8)로 바꾸면서 요금을 1만 원으로 내린 거예요!

### 이전 버전 요금 참고

| 모델 | Fast Mode 입력 요금 | Fast Mode 출력 요금 |
|---|---|---|
| Opus 4.8 (신규 기본) | $10/MTok | $50/MTok |
| Opus 4.7 | $30/MTok | $150/MTok |
| Opus 4.6 | $30/MTok | $150/MTok (⚠️ deprecated) |

<div class="note-star">
★ Opus 4.6 Fast Mode는 이번 주부터 deprecated(더 이상 지원 안 함) 됐어요. <code>[공]</code>
</div>

---

## 이번 주 세부 업데이트

### 🎮 claude agents — 백그라운드 작업 실행

이제 `claude agents` 화면에서 `!` 접두사로 명령어를 백그라운드 작업으로 실행하고, 언제든 붙었다 뗄 수 있어요:

```bash
# 백그라운드로 테스트 실행 (agents 화면에서)
! pytest -x

# 또는 명령줄에서 직접
claude --bg --exec 'pytest -x'
```

### 📦 플러그인 자동 로딩

- `.claude/skills/` 디렉토리 안의 플러그인이 **마켓플레이스 없이 자동 로드**
- `claude plugin init <이름>`으로 플러그인 스캐폴딩 가능
- `/reload-skills` 명령어로 재시작 없이 스킬 디렉토리 재스캔
- `SessionStart` 훅이 `reloadSkills: true`를 반환하면 설치된 스킬을 같은 세션에 즉시 반영

### 🎯 MessageDisplay 훅 이벤트

새로운 `MessageDisplay` 훅으로 어시스턴트 메시지 텍스트를 표시 전에 변환하거나 숨길 수 있어요.

### 🔄 폴백 모델 자동 전환

`--fallback-model` 설정이 있으면, 기본 모델을 찾을 수 없을 때 **세션 전체를 폴백 모델로 자동 전환**해요. (이전엔 매 요청마다 에러가 났어요.)

### 🌐 Chrome 브라우저 선택

Chrome 도구 사용 시 연결된 브라우저가 여러 개면 `/chrome` → "Select browser…"로 어떤 브라우저를 쓸지 선택할 수 있어요.

---

## 이번 주 업데이트 한눈에 보기

| 기능 | 핵심 변화 | 주요 혜택 |
|---|---|---|
| 🧠 Opus 4.8 | Max/Team/Enterprise 기본 모델 | 더 강력한 코딩·에이전트 성능 |
| 🎭 다이나믹 워크플로우 | 수백 에이전트 병렬 오케스트레이션 | 대규모 작업 자동화 |
| 🔐 Security Guidance | 코드 수정마다 보안 자동 체크 | 개발 과정에서 취약점 즉시 발견 |
| ⚡ Fast Mode | Opus 4.8 기본 + 67% 요금 인하 | 빠르면서 저렴해진 고성능 모드 |
| 📦 플러그인 자동 로딩 | `.claude/skills/` 자동 인식 | 마켓플레이스 없이 로컬 플러그인 |

---

## 지난 주 업데이트도 놓쳤다면?

→ [Week 21 업데이트 — Auto Mode Pro 개방·/usage 세부 내역·/code-review](/docs/reference/whats-new-2026-w21)

---

## 더 알아보기

- [공식 Week 22 릴리즈 노트](https://code.claude.com/docs/en/whats-new/2026-w22)
- [다이나믹 워크플로우 공식 문서](https://code.claude.com/docs/en/workflows)
- [Security Guidance 플러그인 문서](https://code.claude.com/docs/en/security-guidance)
- [Fast Mode 요금 상세](https://code.claude.com/docs/en/fast-mode#understand-the-cost-tradeoff)
