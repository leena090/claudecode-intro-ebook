---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 기본 적용, 동적 워크플로우(Dynamic Workflows) 리서치 프리뷰, 보안 가이드라인 플러그인, Fast Mode Opus 4.8 가격 인하 ($30→$10/MTok)"
tags: ["자동생성", "업데이트", "2026", "week22", "opus4.8", "workflows", "security-guidance", "fast-mode"]
category: "next"
order: 10
lastUpdated: "2026-06-04"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경 — 4가지 대형 업데이트!

Week 22는 굵직한 업데이트가 한꺼번에 몰렸어요. Opus 4.8 출시부터 동적 워크플로우까지, 하나씩 살펴볼게요.

---

### 1️⃣ Claude Opus 4.8 — 새 기본 모델 등장

**Claude Opus 4.8(클로드 오퍼스 4.8)**이 출시되었어요. 이전 Opus 4.7보다 코딩·에이전트 작업·전문 업무에서 더 강력하고, 긴 작업도 더 안정적으로 처리해요.

**이제 Opus 4.8이 기본 모델인 플랜:**
- Max 플랜
- Team Premium(팀 프리미엄)
- Enterprise pay-as-you-go(엔터프라이즈 종량제)
- Anthropic API

```bash
# Opus 4.8로 직접 전환
/model claude-opus-4-8

# 더 어려운 작업엔 xhigh 노력 레벨
/effort xhigh
```

> 🍱 **비유로 설명하면**: 지금까지 Opus 4.7이라는 "최신 스마트폰"이었는데, 이제 Opus 4.8이라는 "더 새 스마트폰"이 나왔어요. 같은 용도지만 더 빠르고 똑똑해요.

<div class="note-circle">
○ Opus 4.8은 기본값이 "high 노력" 모드 — 더 꼼꼼하게 작동해요<br />
○ v2.1.154 이상 필요 (<code>claude update</code>로 업데이트)
</div>

---

### 2️⃣ 동적 워크플로우(Dynamic Workflows) — 수백 개 에이전트 자동 지휘 (리서치 프리뷰)

**동적 워크플로우(Dynamic Workflows)**는 클로드가 작업에 맞는 오케스트레이션 스크립트(지휘 대본)를 직접 써서, 수십~수백 개의 서브에이전트를 자동으로 지휘하는 기능이에요.

> 🍱 **비유로 설명하면**: 혼자 집을 청소하는 것(일반 작업)과, 청소 회사 사장이 되어 직원 50명에게 각각 방 하나씩 맡기는 것(동적 워크플로우)의 차이예요. 전체 지휘는 클로드가 짠 대본대로 자동으로 돌아가고, 여러분은 결과만 받아요.

**언제 쓰면 좋을까요?**
- 코드베이스 전체 보안 감사
- 500개 파일 마이그레이션
- 여러 출처를 교차 검증하는 리서치
- 여러 각도에서 검토가 필요한 대형 플래닝

**사용 방법:**
```bash
# 직접 워크플로우 요청
> create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# 프롬프트에 ultracode 키워드 포함
> ultracode: audit every API endpoint under src/routes/ for missing auth checks

# 진행 현황 보기
/workflows
```

| 키 | 기능 |
|----|------|
| `↑` / `↓` | 단계·에이전트 선택 |
| `Enter` | 상세 보기 (프롬프트·도구 호출·결과) |
| `p` | 일시정지/재개 |
| `x` | 에이전트 중지 or 전체 워크플로우 중지 |
| `s` | 스크립트 저장 (나중에 재사용 가능) |

<div class="note-circle">
○ 리서치 프리뷰 — Pro 플랜에서는 <code>/config</code>에서 Dynamic workflows 항목 켜야 해요<br />
○ v2.1.154 이상 필요<br />
○ 동시 최대 16개 에이전트, 총 1,000개 제한
</div>

📄 자세한 내용 → [동적 워크플로우 가이드](/docs/advanced/dynamic-workflows)

---

### 3️⃣ 보안 가이드라인 플러그인(Security Guidance Plugin) — 코딩 중 자동 보안 검사

클로드가 코드를 짤 때마다 **보안 취약점**을 자동으로 검사하고, 발견하면 그 자리에서 고쳐주는 플러그인이에요.

> 🍱 **비유로 설명하면**: 글을 쓰면서 맞춤법 검사기가 실시간으로 돌아가는 것처럼 — 코드를 다 짜고 검토하는 게 아니라, 짜는 도중에 바로바로 알려줘요.

```bash
# 플러그인 설치 (Claude Code 세션 안에서)
/plugin install security-guidance@claude-plugins-official

# 현재 세션에 즉시 적용
/reload-plugins
```

**검사 시점 3단계:**
1. **편집할 때마다** — `eval()`, `innerHTML` 같은 위험 패턴을 즉시 체크 (AI 호출 없음, 무료)
2. **응답(턴) 종료 시** — 그 턴에 바뀐 코드 전체를 별도 AI 리뷰어가 검토
3. **git commit/push 시** — 주변 코드까지 읽는 더 깊은 에이전트 리뷰 실행

📄 자세한 내용 → [보안 가이드라인 플러그인 가이드](/docs/advanced/security-guidance-plugin)

---

### 4️⃣ Fast Mode — Opus 4.8 기본 적용 + 가격 대폭 인하!

**Fast Mode(패스트 모드)**가 이제 **Opus 4.8 기반**으로 바뀌었어요. 그리고 가격도 크게 내려갔어요!

| 항목 | Opus 4.8 Fast Mode | Opus 4.7/4.6 Fast Mode |
|------|-------------------|------------------------|
| 기본 적용 | ✅ 새 기본값 | ❌ |
| 가격 (입력/출력) | **$10/$50 per MTok** | $30/$150 per MTok |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| Opus 4.6 Fast Mode | — | 지원 종료(deprecated) |

```bash
# Fast Mode 토글
/fast
```

<div class="note-star">
★ Opus 4.8 Fast Mode는 Opus 4.7 Fast Mode보다 3배 저렴해요! ($30/$150 → $10/$50 per MTok) <code>[공]</code><br />
★ Opus 4.6 Fast Mode는 이번 업데이트로 지원이 종료됩니다.
</div>

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **`!` 백그라운드 실행** | `claude agents`에서 `!pytest -x`처럼 백그라운드 셸 작업 실행 (`claude --bg --exec 'pytest -x'`도 가능) |
| **로컬 플러그인** | `.claude/skills/` 폴더에 넣으면 마켓 없이 자동 로드; `claude plugin init <이름>`으로 초기화 |
| **`/reload-skills`** | 재시작 없이 스킬 디렉토리 다시 스캔 |
| **`disallowed-tools`** | 스킬 frontmatter에서 특정 도구 차단 가능 |
| **`MessageDisplay` 훅** | 어시스턴트 메시지 텍스트를 훅이 변환하거나 숨길 수 있음 |
| **`--fallback-model`** | 기본 모델 오류 시 자동 대체 모델로 전환 |
| **`defaultEnabled: false`** | 플러그인 설치 후 비활성 상태로 시작 |
| **Vim 모드 `/`** | NORMAL 모드에서 `/`로 역방향 히스토리 검색 (Bash/Zsh vi-mode 동일) |
| **Chrome 브라우저 선택** | 연결된 여러 브라우저 중 선택 (`/chrome` → "Select browser…") |
| **스트리밍 도구 실행** | Bedrock·Vertex·Foundry에서도 항상 활성화 |
| **`←←` 에이전트 뷰** | Bedrock·Vertex·Foundry·텔레메트리 비활성 환경에서도 작동 |

---

## 이번 주 요약

```
✅ Claude Opus 4.8 기본 모델 적용 (Max·Team·Enterprise·API)
✅ Dynamic Workflows — 수백 개 에이전트 자동 지휘 (리서치 프리뷰)
✅ 보안 가이드라인 플러그인 — 코딩 중 자동 보안 검사
✅ Fast Mode → Opus 4.8 기본 + 가격 대폭 인하 ($30→$10 per MTok 입력)
```

버전 확인:
```bash
claude --version  # v2.1.150 ~ v2.1.157 해당
```
