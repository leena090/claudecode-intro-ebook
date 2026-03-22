---
title: "전체 CLI 플래그 목록"
description: "Claude Code 터미널에서 사용할 수 있는 모든 커맨드라인 옵션"
category: "reference"
order: 2
tags: ["레퍼런스", "CLI", "플래그", "터미널"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## CLI 플래그란?

Claude Code를 **터미널에서 시작할 때** 추가로 입력하는 옵션들입니다. 마치 프로그램 실행 시 옵션을 주는 것처럼요.

```bash
claude [플래그] [값]
```

---

## 📋 전체 CLI 플래그 목록

### 📊 출력 옵션

프로그램이 어떻게 응답할지 제어합니다.

| 플래그 | 약자 | 용도 | 예시 |
|--------|------|------|------|
| `--print` | `-p` | 비대화형 모드 (한 번만 실행 후 종료) | `claude -p "파이썬 배우기"` |
| `--output-format` | 없음 | 출력 형식 변경 | `claude --output-format json` |
| `--no-stream` | 없음 | 스트리밍 비활성화 (전체 응답 후 표시) | `claude --no-stream` |
| `--verbose` | `-v` | 상세 정보 표시 | `claude --verbose` |
| `--debug` | `-d` | 디버그 정보 표시 | `claude --debug` |
| `--quiet` | `-q` | 최소 정보만 표시 | `claude --quiet` |

### 🤖 모델 & 동작 옵션

AI 모델과 작동 방식을 설정합니다.

| 플래그 | 용도 | 예시 | 기본값 |
|--------|------|------|--------|
| `--model` | 사용할 AI 모델 지정 | `claude --model claude-opus` | claude-sonnet |
| `--max-turns` | 최대 대화 턴 수 제한 | `claude --max-turns 5` | 무제한 |
| `--temperature` | 응답의 창의성 조절 (0~1) | `claude --temperature 0.5` | 0.7 |
| `--max-tokens` | 한 번 응답 최대 토큰 수 | `claude --max-tokens 2000` | 4096 |

### 🔐 보안 & 권한

권한과 보안을 설정합니다.

| 플래그 | 용도 | 예시 |
|--------|------|------|
| `--permissions` | 허용할 권한 설정 | `claude --permissions read,execute` |
| `--allow-write` | 파일 쓰기 허용 | `claude --allow-write` |
| `--allow-execute` | 명령 실행 허용 | `claude --allow-execute` |
| `--allow-network` | 네트워크 접근 허용 | `claude --allow-network` |
| `--sandbox` | 격리 모드 (권한 제한) | `claude --sandbox` |
| `--dangerously-skip-permissions` | ⚠️ 권한 검사 생략 | `claude --dangerously-skip-permissions` |

### 📁 파일 & 경로

작업 디렉토리와 파일을 지정합니다.

| 플래그 | 용도 | 예시 |
|--------|------|------|
| `--cwd` | 작업 디렉토리 변경 | `claude --cwd /Users/mylee/projects` |
| `--add-dir` | 추가 디렉토리 접근 | `claude --add-dir /tmp` |
| `--project-root` | 프로젝트 루트 지정 | `claude --project-root .` |
| `--ignore` | 무시할 파일 패턴 | `claude --ignore "*.log,temp/*"` |

### 💬 프롬프트 & 시스템

프롬프트와 시스템 설정을 지정합니다.

| 플래그 | 용도 | 예시 |
|--------|------|------|
| `--system-prompt` | 시스템 프롬프트 변경 | `claude --system-prompt "당신은 파이썬 전문가입니다"` |
| `--context-from-file` | 파일에서 컨텍스트 로드 | `claude --context-from-file context.txt` |
| `--initial-message` | 초기 메시지 설정 | `claude --initial-message "안녕하세요"` |

### 🛠️ 도구 & 확장

도구 접근을 제어합니다.

| 플래그 | 용도 | 예시 |
|--------|------|------|
| `--allowed-tools` | 허용할 도구 지정 | `claude --allowed-tools read,write` |
| `--disallowed-tools` | 금지할 도구 지정 | `claude --disallowed-tools execute` |
| `--enable-extensions` | 확장 기능 활성화 | `claude --enable-extensions` |

### 📝 저장 & 캐시

저장 및 캐시 옵션입니다.

| 플래그 | 용도 | 예시 |
|--------|------|------|
| `--save-session` | 세션 저장 | `claude --save-session` |
| `--load-session` | 이전 세션 로드 | `claude --load-session "내 세션"` |
| `--cache` | 캐시 활용 | `claude --cache` |
| `--no-cache` | 캐시 비활성화 | `claude --no-cache` |

### ℹ️ 정보 & 도움말

정보와 도움말을 표시합니다.

| 플래그 | 약자 | 용도 | 예시 |
|--------|------|------|------|
| `--version` | `-v` | 버전 정보 | `claude --version` |
| `--help` | `-h` | 도움말 표시 | `claude --help` |
| `--config` | 없음 | 현재 설정 보기 | `claude --config` |

---

## 🎯 자주 쓰는 플래그 조합

### 1️⃣ 간단한 한 번 실행
```bash
claude -p "파이썬 함수 만들어줄래?"
```

### 2️⃣ 상세 디버그 정보 보기
```bash
claude --verbose --debug
```

### 3️⃣ 빠른 모델로 비용 절감
```bash
claude --model claude-haiku
```

### 4️⃣ JSON 형식으로 출력
```bash
claude -p "API 설계해줄래?" --output-format json
```

### 5️⃣ 격리 모드로 안전하게 실행
```bash
claude --sandbox --permissions read
```

### 6️⃣ 특정 디렉토리에서 작업
```bash
claude --cwd /Users/mylee/projects/myapp
```

### 7️⃣ 권한 제한하고 실행
```bash
claude --allowed-tools read,write --disallowed-tools execute
```

### 8️⃣ 이전 세션 재개
```bash
claude --load-session "파이썬 프로젝트"
```

### 9️⃣ 최대 회차 제한 (자동 종료)
```bash
claude --max-turns 3
```

### 🔟 창의적인 응답 요청
```bash
claude --temperature 0.9
```

---

## 📊 플래그 비교표

### 출력 형식별 선택

| 상황 | 플래그 | 설명 |
|------|--------|------|
| 일반적인 사용 | (기본값) | 대화형 인터페이스 |
| 자동화/스크립트 | `-p` 또는 `--print` | 비대화형, 한 번만 실행 |
| 프로그래밍 처리 | `--output-format json` | JSON 형식 출력 |
| 속도 우선 | `--no-stream` | 전체 응답 후 한 번에 표시 |

### 모델 선택

| 용도 | 모델 | 플래그 |
|------|------|--------|
| 빠른 응답, 비용 절감 | claude-haiku | `--model claude-haiku` |
| 일반적인 작업 (기본) | claude-sonnet | (기본값) |
| 복잡한 작업, 높은 정확도 | claude-opus | `--model claude-opus` |

### 보안 레벨

| 신뢰도 | 플래그 | 설명 |
|--------|--------|------|
| 매우 안전 | `--sandbox` | 격리 모드 |
| 안전 | `--allowed-tools read` | 읽기만 허용 |
| 보통 | (기본값) | 일반 권한 |
| 위험 ⚠️ | `--dangerously-skip-permissions` | 권한 검사 생략 |

---

## 💡 플래그 사용 예시

### 예시 1: 자동화 스크립트
```bash
claude -p "API 문서 생성해줄래?" \
  --output-format json \
  --model claude-sonnet \
  --max-tokens 2000
```

### 예시 2: 특정 프로젝트 디렉토리에서 작업
```bash
claude --cwd /Users/mylee/projects/myapp \
  --allowed-tools read,write \
  --save-session "myapp-development"
```

### 예시 3: 안전한 테스트 환경
```bash
claude --sandbox \
  --permissions read \
  --verbose \
  --debug
```

### 예시 4: 비용 최적화
```bash
claude --model claude-haiku \
  --max-tokens 1000 \
  --no-stream
```

### 예시 5: 정보 확인
```bash
claude --version
claude --help
claude --config
```

---

## 🔍 플래그와 슬래시 명령어의 차이

### 플래그 (CLI 옵션)
- **언제:** Claude Code를 **시작할 때**
- **어디서:** 터미널 명령어
- **예시:** `claude --model claude-opus`

### 슬래시 명령어
- **언제:** Claude Code **실행 중에**
- **어디서:** 대화창
- **예시:** `/model claude-opus`

**비유:** 자동차 시작 전에 설정하는 것(플래그) vs 운전 중에 조절하는 것(슬래시)

---

## 📖 플래그 도움말 보기

언제든지 플래그 도움말을 볼 수 있습니다:

```bash
# 전체 플래그 목록
claude --help

# 특정 플래그 상세 정보
claude --help --model
```

---

## 💡 쉽게 이해하기

### CLI 플래그를 자동차 설정으로 비유하면?

- **`--model`** = 연료 종류 선택 (휘발유/디젤)
- **`--max-tokens`** = 최대 주행거리 제한
- **`--temperature`** = 엔진 성능 (절약 모드/고성능 모드)
- **`--sandbox`** = 안전 운전 모드
- **`--cwd`** = 출발지 설정
- **`--verbose`** = 상세 주행 정보 표시

---

## 📝 요약

| 상황 | 추천 플래그 |
|------|-----------|
| 빠르고 저렴하게 | `--model claude-haiku -p` |
| 정확하고 복잡하게 | `--model claude-opus` |
| 안전하게 | `--sandbox` |
| 자동화로 | `-p --output-format json` |
| 특정 폴더에서 | `--cwd /path/to/project` |

---

## 다음 단계

CLI 플래그를 배웠습니다!

다음으로 배울 내용:
- **키보드 단축키** — 빠른 입력 방법들
