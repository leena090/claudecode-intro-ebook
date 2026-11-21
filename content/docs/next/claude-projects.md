---
title: "[공] Projects — 관련 세션 묶어서 여러 Claude 에이전트를 한눈에 관리"
description: "Claude Code Desktop의 Projects 기능으로 관련 코딩 세션을 그룹으로 묶고, 여러 Claude 에이전트를 동시에 관리해 보세요"
tags: ["자동생성", "Projects", "세션관리", "에이전트", "데스크톱앱", "병렬작업"]
category: "next"
order: 18
lastUpdated: "2026-11-21"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ <strong>[공]</strong> 발표: claude.com/claude-code 마케팅 페이지 (Sep 17, 2026)
</div>

## Projects란?

**관련된 코딩 세션들을 하나의 프로젝트로 묶고, 여러 Claude 에이전트를 동시에 관리하는 기능**이에요.

> 📁 **비유로 설명하면**: 회사에서 한 프로젝트를 여러 팀원이 동시에 작업할 때 "프로젝트 폴더"에 모두의 작업을 모아두는 것처럼요. Claude 에이전트들이 각자 다른 태스크를 맡아도 한 화면에서 전체 진행 상황을 볼 수 있어요.

---

## 어디서 사용하나요?

**Claude Code Desktop 앱 전용** 기능이에요.

---

## 무엇이 가능한가요?

| 기능 | 설명 |
|---|---|
| **세션 그룹화** | 관련 세션들을 하나의 Project로 묶기 |
| **복수 에이전트 감독** | 여러 Claude가 동시에 작업하는 것을 한 화면에서 확인 |
| **병렬 작업 관리** | 프론트엔드 에이전트 + 백엔드 에이전트 + 테스트 에이전트를 동시에 운영 |
| **빠른 전환** | 프로젝트 간, 세션 간 빠르게 이동 |

---

## 활용 예시

### 예시 1: 풀스택 웹앱 개발

```
📂 Project: "쇼핑몰 리뉴얼"
  ├── 세션 A: 프론트엔드 UI 작업 중...
  ├── 세션 B: 결제 API 연동 중...
  └── 세션 C: 테스트 코드 작성 중...
```

### 예시 2: 대규모 마이그레이션

```
📂 Project: "DB 마이그레이션"
  ├── 세션 A: 데이터 스키마 변환
  ├── 세션 B: 기존 코드 호환성 검사
  └── 세션 C: 마이그레이션 스크립트 테스트
```

---

## Agent View와의 차이

| 기능 | Agent View | Projects |
|---|---|---|
| **목적** | 모든 활성 세션 한 화면 보기 | 관련 세션들을 그룹으로 묶기 |
| **범위** | 전체 세션 | 프로젝트별 세션 |
| **관리 단위** | 개별 세션 | 프로젝트 (세션 묶음) |

> 💡 **팁**: Agent View로 전체 상황을 보면서, Projects로 관련 세션들을 정리하면 대형 작업을 훨씬 효율적으로 관리할 수 있어요.

---

## 시작하기

1. **Claude Code Desktop 앱** 실행
2. 왼쪽 사이드바에서 **Projects** 섹션 찾기
3. **새 Project 만들기** 버튼 클릭
4. 관련 세션들을 Project에 추가

<div class="note-star">
★ <strong>주의</strong>: Projects는 Claude Code <strong>Desktop 앱 전용</strong>이에요. 터미널(CLI) 버전에서는 현재 사용할 수 없어요 (추정 — 공식 문서 확인 권장).
</div>
