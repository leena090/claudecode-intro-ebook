---
title: "[공] Claude Security 플러그인 — AI가 내 코드 보안 취약점을 찾아줘요"
description: "멀티 에이전트가 내 코드베이스를 분석해 보안 취약점을 자동으로 찾고, 수정 패치까지 제안하는 공식 Anthropic 플러그인"
tags: ["자동생성", "보안", "취약점", "플러그인", "claude-security"]
category: "advanced"
order: 53
lastUpdated: "2026-08-18"
---

<div class="note-star">
★ <strong>[공] 출처</strong>: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w30">Week 30 (Jul 20-24)</a>
<br />★ 공식 Anthropic 마켓플레이스에서 설치
<br />★ 스캔 범위: 전체 저장소, 브랜치 diff, PR, 특정 커밋 선택 가능
</div>

## Claude Security 플러그인이 뭔가요?

Claude Code 세션 안에서 **멀티 에이전트**가 내 코드베이스의 **보안 취약점을 자동으로 찾아주는 공식 플러그인**이에요. 에이전트들이 아키텍처 파악 → 위협 모델 수립 → 취약점 탐색 → 상호 검토 → 리포트 생성까지 순서대로 해줘요.

> 🍱 **비유로 설명하면**: 집 보안 점검할 때 혼자 하면 놓치는 게 있잖아요? 여러 전문가 팀이 각자 문·창문·지붕·배관을 나눠서 검사하고, 마지막에 서로의 결과를 교차 검토하는 거예요. Claude Security가 딱 그렇게 작동해요.

---

## 설치 방법

```bash
# 1. 플러그인 설치 (공식 Anthropic 마켓플레이스)
> /plugin install claude-security@claude-plugins-official

# 2. 플러그인 재로드
> /reload-plugins

# 3. 스캔 시작
> /claude-security
```

---

## 스캔 동작 방식

```
1단계: 아키텍처 매핑
  에이전트가 코드베이스 구조 파악 (의존성, 진입점, 데이터 흐름)
  
2단계: 위협 모델 수립
  무엇을 지켜야 하는지, 어디가 취약할 수 있는지 분류
  
3단계: 취약점 탐색
  여러 에이전트가 병렬로 각 영역 심층 분석
  
4단계: 교차 검토
  각 에이전트가 서로의 발견 내용 독립적 검토

5단계: 리포트 생성
  CLAUDE-SECURITY-<타임스탬프>/ 디렉토리에 저장
```

---

## 스캔 범위 선택

전체 저장소만 스캔하는 게 아니에요. 필요에 따라 범위를 좁힐 수 있어요:

| 스캔 대상 | 사용 예시 |
|----------|---------|
| 전체 저장소 | `/claude-security` |
| 브랜치 diff | 이번 브랜치에서 변경된 부분만 |
| PR | 특정 풀 리퀘스트 |
| 특정 커밋 | 특정 커밋의 변경 내용 |

---

## 결과 활용

스캔 결과로 **수정 패치**도 제안해줘요. 단, 패치를 직접 적용하는 건 내가 선택해야 해요 (자동 적용 안 됨).

```
CLAUDE-SECURITY-20260818-143022/
├── README.md          # 스캔 개요
├── findings.md        # 발견된 취약점 목록
├── threat-model.md    # 위협 모델
└── patches/           # 제안된 수정 패치들
```

---

## ⚠️ 주의사항

- **참고용 도구**: AI가 찾아준 취약점은 최종 확인이 필요해요. 모든 것을 찾아주지는 않을 수 있어요.
- **민감 코드 주의**: 스캔 과정에서 코드 내용이 Claude에게 전달돼요.
- **대형 저장소**: 스캔 시간이 길 수 있어요. 범위를 좁혀서 시작해보세요.

---

## 다음 단계

- **[플러그인 마켓플레이스](/docs/advanced/plugin-marketplace)** — 다른 유용한 플러그인 탐색
- **[Sandbox 보안](/docs/advanced/sandbox-security)** — 실행 환경 격리 설정
- **[코드 리뷰](/docs/advanced/agent-view)** — AI 기반 코드 리뷰 기능
