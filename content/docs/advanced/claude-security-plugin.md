---
title: "[공] Claude Security 플러그인 — AI가 내 코드 취약점을 찾아주는 보안 스캐너"
description: "공식 Claude Security 플러그인으로 멀티 에이전트 취약점 스캐닝을 실행하는 방법. 아키텍처 맵, 위협 모델, 취약점 보고서까지 자동 생성"
tags: ["자동생성", "보안", "security", "취약점", "claude-security", "플러그인", "멀티에이전트"]
category: "advanced"
order: 28
lastUpdated: "2026-08-26"
---

<div class="note-star">
★ <strong>공식 문서</strong> — <a href="https://code.claude.com/docs/en/claude-security">claude-security</a> (2026-07-20 신규) <code>[공]</code>
<br />★ <strong>설치</strong> — Anthropic 공식 마켓플레이스의 플러그인
<br />★ <strong>2026-08-26 자동 감지</strong> — docs-watch 루틴이 신규 URL을 감지해 작성한 글이에요.
</div>

## Claude Security 플러그인이 뭔가요?

내 코드베이스에서 **보안 취약점을 멀티 에이전트로 자동 스캔**해주는 공식 Anthropic 플러그인이에요.

단순히 코드를 읽는 것이 아니라:
1. 아키텍처 전체를 파악 (맵 작성)
2. 위협 모델 수립
3. 취약점 탐색
4. **독립적인 2차 검토** (다른 에이전트가 교차 확인)
5. 보고서 작성

까지 한 번에 처리해요.

> 🍱 **비유로 설명하면**: 보안 전문 컨설팅 팀이 들어와서 — 건물 도면 파악 → 취약한 입구 탐색 → 다른 팀원이 교차 검증 → 최종 보고서 제출 — 이 모든 걸 AI가 자동으로 하는 거예요. 인간 보안 전문가가 며칠 걸릴 일을 한 세션 안에서 처리해요.

---

## 설치하기

```bash
# 1. 공식 마켓플레이스에서 설치
> /plugin install claude-security@claude-plugins-official

# 2. 플러그인 리로드 (설치 후 바로 활성화됨을 확인)
> /reload-plugins
```

---

## 사용하기

### 기본 전체 스캔

```
> /claude-security
```

→ 현재 열려 있는 레포지토리 전체를 스캔해요.

### 특정 범위 스캔

```bash
# PR 스캔 (특정 PR의 변경 사항만)
> /claude-security --pr 42

# 브랜치 diff 스캔
> /claude-security --branch feature/payment-v2

# 특정 커밋 스캔
> /claude-security --commit abc1234
```

---

## 스캔 결과

결과 파일은 **`CLAUDE-SECURITY-<타임스탬프>/`** 폴더에 저장돼요:

```
CLAUDE-SECURITY-2026-08-26T10-30-00/
├── architecture-map.md      # 아키텍처 전체 구조 맵
├── threat-model.md          # 위협 모델 (잠재적 공격 시나리오)
├── findings.md              # 취약점 목록 (심각도 분류)
├── patches/                 # 제안 수정 패치
│   ├── CVE-001.patch
│   └── CVE-002.patch
└── summary.md               # 경영진용 요약 보고서
```

### 보고서 구조 예시

```markdown
# 취약점 목록

## Critical
- [SQL Injection] users.py:142 — unsanitized input in search query

## High
- [Insecure Direct Object Reference] orders.py:88 — no ownership check

## Medium
- [Sensitive Data Exposure] logs.py:201 — passwords in debug logs
```

---

## 패치 적용하기

스캐너가 제안한 패치는 **직접 검토 후 적용**해요:

```bash
# 패치 내용 확인
cat CLAUDE-SECURITY-*/patches/CVE-001.patch

# 선택적으로 적용
git apply CLAUDE-SECURITY-*/patches/CVE-001.patch
```

> ⚠️ **주의**: 패치를 자동으로 적용하지 말고, 반드시 내용을 확인한 후 적용하세요. AI가 제안한 수정이 모든 케이스에 완벽하지 않을 수 있어요.

---

## 멀티 에이전트 프로세스 이해

Claude Security는 단일 에이전트가 아닌 **여러 에이전트가 협력**해서 일해요:

```
[아키텍처 분석 에이전트]
       ↓ 구조 파악
[위협 모델 에이전트]
       ↓ 공격 시나리오 수립
[취약점 탐색 에이전트들] ← 여러 에이전트 병렬 실행
       ↓ 각자 발견한 취약점
[검증 에이전트] ← 독립적으로 교차 확인
       ↓ 검증된 취약점만
[보고서 작성 에이전트]
       ↓
최종 보고서
```

독립적인 검증 단계가 있어서 **거짓 양성(False Positive)이 줄어들어요**.

---

## 한계와 주의사항

- **완벽하지 않아요** — AI 스캐너는 놓치는 게 있을 수 있어요. 중요 시스템은 전문 보안 감사를 병행하세요
- **코드를 읽어야 해요** — 클로드가 코드 전체에 접근하므로 민감한 프로젝트는 자체 호스팅 환경에서 실행 권장
- **시간이 걸려요** — 대형 코드베이스는 30분~1시간 소요될 수 있어요
- **패치는 직접 판단** — 제안 패치를 그대로 적용하지 말고 검토 후 사용

---

## 누구에게 유용한가요?

| 대상 | 활용 방법 |
|---|---|
| **스타트업 개발자** | 보안 전문가 없이도 기본 취약점 검사 |
| **사이드 프로젝트** | 배포 전 빠른 보안 점검 |
| **PR 리뷰** | 새 코드에 보안 이슈가 있는지 확인 |
| **레거시 코드 감사** | 오래된 코드베이스의 보안 상태 파악 |

---

## 한 줄 정리

> **Claude Security = 내 코드의 보안 구멍을 AI 팀이 찾아주는 자동 감사**
> 
> 설치하고 `/claude-security`만 치면, 여러 AI 에이전트가 협력해서 취약점을 찾고, 검증하고, 수정 방법까지 알려줘요. 완벽한 대체는 아니지만 빠른 1차 점검에 매우 유용해요.
