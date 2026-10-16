---
title: "[공] Projects 기능 + Auto mode 기본값 변경 — 2026년 8~9월 주요 업데이트"
description: "Projects로 여러 에이전트를 한 화면에서 관리하고, Auto mode가 Pro/Max/Team 플랜 기본값이 됐어요"
tags: ["자동생성", "Projects", "자동모드기본값", "AutoMode", "멀티에이전트", "자율모드"]
category: "next"
order: 18
lastUpdated: "2026-10-16"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 기능: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 마케팅 페이지 (최신 기능 하이라이트)
<br />★ <strong>[공]</strong> Auto mode 기본값: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Blog Sep 17, 2026)
<br />★ <strong>[공]</strong> 자체 호스팅 환경: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Blog Aug 7, 2026)
</div>

## 2026년 8~9월 주요 업데이트 요약

| 날짜 | 기능 | 핵심 |
|---|---|---|
| 2026-08-07 | **자체 호스팅 환경** 공개 베타 | 회사 내부 서버에서 Claude Code 실행 |
| 2026-09-17 | **Auto mode 기본값** 변경 | Pro/Max/Team 플랜에서 자동으로 자율 모드 |
| 최근 | **Projects** 출시 | 관련 코딩 세션 묶기 + 멀티 에이전트 감독 |

---

## Projects — 여러 에이전트를 한 화면에서

### 이게 뭔가요?

**Projects(프로젝트)**는 관련된 코딩 세션들을 하나로 묶어서 **여러 Claude Code 에이전트를 동시에 실행하고 감독**할 수 있는 기능이에요.

> 🏗️ **비유로 설명하면**: 여러 공사 현장을 감독하는 현장 소장처럼, Projects를 쓰면 여러 클로드 에이전트가 각자 일하는 걸 한 화면에서 모두 확인하고 지시할 수 있어요.

### 주요 기능

| 기능 | 설명 |
|---|---|
| **세션 그룹화** | 같은 프로젝트 관련 세션들을 폴더처럼 묶기 |
| **멀티 에이전트 감독** | 여러 에이전트가 동시에 작업하는 것을 한 곳에서 확인 |
| **병렬 실행** | 한 프로젝트 안에서 여러 작업을 동시에 진행 |

### 어떻게 사용하나요?

Projects는 **Claude Code 데스크톱 앱(Desktop App)** 에서 사용할 수 있어요.

```
1. Claude Code Desktop 앱 실행
2. 새 Project 생성
3. 관련된 작업들을 같은 Project 아래 실행
4. 여러 에이전트가 동시에 작업하는 것을 한 화면에서 확인
```

<div class="note-star">
★ <strong>현재 상태:</strong> 공식 마케팅 페이지 기준 최신 기능 하이라이트에 포함됨 (공식 발표 기준).
<br />★ 세부 사용법은 <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>에서 확인하세요.
</div>

---

## Auto mode — 이제 기본값으로!

### 무엇이 바뀌었나요?

2026년 9월 17일부터 **Claude Code가 Auto mode(자동 모드, 오토 모드)를 기본값**으로 사용해요.

> 🚗 **비유로 설명하면**: 이전에는 수동 기어 차를 타는 것처럼 하나하나 승인해야 했다면, 이제는 자동 기어처럼 클로드가 알아서 판단해서 앞으로 나아가요. 단, 위험한 명령에는 여전히 브레이크가 작동해요.

### 어떤 플랜에서 기본값인가요?

| 플랜 | Auto mode 기본 여부 |
|---|---|
| **Pro** | ✅ 기본값으로 변경 |
| **Max** | ✅ 기본값으로 변경 |
| **Team** | ✅ 기본값으로 변경 |
| Enterprise | 별도 설정 |
| API (Console) | 별도 설정 |

### Auto mode가 뭐예요?

Auto mode에서는 Claude Code가 파일 편집, 명령어 실행 등을 **일일이 물어보지 않고** 작업을 이어나가요. 단, 위험할 수 있는 명령어는 여전히 확인을 요청해요.

```bash
# Auto mode 직접 설정 (이미 기본값이지만)
claude --auto

# 이전처럼 매번 확인받고 싶다면 (기본값 1로 되돌리기)
# settings.json에서 permissionMode를 변경하세요
```

<div class="note-star">
★ <strong>걱정되시는 분들께:</strong> Auto mode는 위험도가 높은 작업(예: rm -rf, 환경변수 변경 등)은 여전히 사용자 확인을 요청하는 <strong>안전 분류기(classifier)</strong>가 내장돼 있어요. 자동으로 된다고 해서 모든 걸 그냥 실행하지는 않아요.
</div>

### 이전으로 되돌리고 싶다면

설정 파일에서 권한 모드를 변경할 수 있어요:

```json
// .claude/settings.json
{
  "permissionMode": "default"
}
```

자세한 권한 모드 설정은 [권한 모드 가이드](/docs/advanced/permission-modes)를 참고하세요.

---

## 자체 호스팅 환경 — 회사 서버에서 실행 (공개 베타)

### 이게 뭔가요?

2026년 8월 7일부터 **자체 호스팅 환경(Self-hosted environments, 셀프 호스티드 인바이런먼츠)**이 공개 베타로 제공돼요.

> 🏢 **비유로 설명하면**: 지금까지는 Claude Code가 Anthropic 서버에서만 돌았다면, 이제는 여러분 회사의 내부 서버(온프레미스)에서도 클로드를 실행할 수 있어요. 민감한 데이터가 회사 밖으로 나가지 않아도 돼요.

### 주요 특징

| 항목 | 내용 |
|---|---|
| **현재 상태** | 공개 베타(Public Beta) |
| **장점** | 내부망에서 실행, 내부 서비스와 직접 연동 |
| **대상** | 보안 요구사항이 엄격한 기업 |
| **공식 문서** | [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments) |

<div class="note-star">
★ <strong>주의:</strong> 자체 호스팅 환경은 기업용(Enterprise) 기능이에요. 개인 Pro/Max 플랜과는 별개입니다.
</div>

---

## 정리

| 기능 | 핵심 한 줄 요약 |
|---|---|
| **Projects** | 여러 에이전트 세션을 한 화면에서 묶어서 관리 |
| **Auto mode 기본값** | Pro/Max/Team 플랜에서 자동으로 자율 모드 (안전장치 포함) |
| **자체 호스팅** | 회사 내부 서버에서 Claude Code 실행 가능 (베타) |
