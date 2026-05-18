---
title: "[공] Agent SDK 세션 스토리지 — S3·Redis·Postgres로 대화 기록 영구 보존"
description: "Agent SDK의 SessionStore 인터페이스로 세션 전사를 외부 저장소에 미러링하는 방법. 멀티 호스트 배포, 서버리스 환경, 컴플라이언스 요구사항에 대응합니다."
tags: ["자동생성", "Agent SDK", "세션스토리지", "S3", "Redis", "Postgres", "멀티호스트", "고급", "개발자"]
category: "advanced"
order: 26
lastUpdated: "2026-05-18"
---

<div class="note-star">
★ 출처: <a href="https://code.claude.com/docs/en/agent-sdk/session-storage">code.claude.com/docs/en/agent-sdk/session-storage</a> [공]<br />
★ Claude Agent SDK 개발자 대상 기능<br />
★ 공식 발표 기준
</div>

## 이 기능이 필요한 상황

Claude Agent SDK로 서비스를 만들 때, 세션 데이터를 **내 서버에 직접 저장**하고 싶은 경우예요.

> 🗄️ **비유로 설명하면**: 기본 상태는 Claude가 대화를 내 컴퓨터 안에 저장해요. 마치 메모장에 적어두는 것처럼요. SessionStore는 그 메모를 **내가 관리하는 클라우드 창고(S3·Redis 등)에 동시에 복사**해두는 기능이에요. 컴퓨터가 꺼져도 창고에 남아있어요.

**주로 필요한 상황:**

| 상황 | 이유 |
|---|---|
| 서버리스·오토스케일 환경 | 여러 서버 인스턴스가 파일 시스템을 공유 못 함 |
| 컨테이너·CI 환경 | 컨테이너 재시작 시 로컬 데이터 사라짐 |
| 컴플라이언스·감사 요구 | 내가 관리하는 스토리지에 데이터 보관 필요 |
| 멀티 호스트 배포 | 어떤 서버에서든 세션을 이어갈 수 있어야 함 |

---

## SessionStore 인터페이스

```typescript
type SessionStore = {
  // 필수
  append(key: SessionKey, entries: SessionStoreEntry[]): Promise<void>;
  load(key: SessionKey): Promise<SessionStoreEntry[] | null>;

  // 선택
  listSessions?(projectKey: string): Promise<...>;
  delete?(key: SessionKey): Promise<void>;
  listSubkeys?(key: ...): Promise<string[]>;
};
```

| 메서드 | 필수 | 호출 시점 |
|---|---|---|
| `append` | ✅ | 대화 항목 기록 때마다 |
| `load` | ✅ | 세션 재개(resume) 시 |
| `listSessions` | 선택 | 세션 목록 조회 시 |
| `delete` | 선택 | 세션 삭제 시 |
| `listSubkeys` | 선택 | 서브에이전트 세션 재개 시 |

---

## 빠른 시작 — 메모리 스토어

개발·테스트용 내장 `InMemorySessionStore` 로 시작해보세요:

```typescript
import { query, InMemorySessionStore } from "@anthropic-ai/claude-agent-sdk";

const store = new InMemorySessionStore();

// 첫 번째 쿼리
let sessionId: string | undefined;
for await (const message of query({
  prompt: "src/ 아래 타입스크립트 파일 목록을 보여줘",
  options: { sessionStore: store },
})) {
  if (message.type === "result") {
    sessionId = message.session_id;
  }
}

// 다른 호스트에서도 이어가기
for await (const message of query({
  prompt: "그 파일들이 하는 일을 요약해줘",
  options: { sessionStore: store, resume: sessionId },
})) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```

---

## 레퍼런스 구현체 — S3·Redis·Postgres

TypeScript SDK 저장소에 **바로 복사해서 쓸 수 있는 예시 어댑터**가 있어요:

| 어댑터 | 백엔드 클라이언트 | 저장 방식 |
|---|---|---|
| `S3SessionStore` | `@aws-sdk/client-s3` | `append()` 호출마다 JSONL 파트 파일 저장 |
| `RedisSessionStore` | `ioredis` | 리스트(RPUSH/LRANGE) + 정렬된 세트 인덱스 |
| `PostgresSessionStore` | `pg` | BIGSERIAL 순서의 jsonb 테이블 |

**S3 어댑터 예시:**
```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";
import { S3Client } from "@aws-sdk/client-s3";
import { S3SessionStore } from "./S3SessionStore"; // 예시에서 복사

const store = new S3SessionStore({
  bucket: "my-claude-sessions",
  prefix: "transcripts",
  client: new S3Client({ region: "ap-northeast-2" }), // 서울 리전
});

for await (const message of query({
  prompt: "안녕!",
  options: { sessionStore: store },
})) { ... }
```

GitHub: `github.com/anthropics/claude-agent-sdk-typescript/tree/main/examples/session-stores`

---

## 중요 동작 원리

### 이중 쓰기 구조 (Dual-write)

스토어는 **로컬 디스크의 복사본**이에요. 로컬 먼저 쓰고, 그 다음 스토어에 미러링해요.
- 스토어 장애가 나도 **로컬 데이터는 안전**
- `append()` 실패 시 오류 로그 + `mirror_error` 이벤트 발생, 작업은 계속

### 보존 기간(Retention)은 내가 관리

SDK는 스토어에서 자동 삭제를 하지 않아요. TTL, S3 라이프사이클 정책, 스케줄 클린업은 직접 설정해야 해요.

### 함께 쓸 수 없는 옵션

- `persistSession: false` 와 함께 쓸 수 없음
- `enableFileCheckpointing` 과 함께 쓸 수 없음

---

## 파이썬(Python) SDK 예시

```python
import asyncio
from claude_agent_sdk import ClaudeAgentOptions, InMemorySessionStore, ResultMessage, query

store = InMemorySessionStore()

async def main():
    session_id = None
    async for message in query(
        prompt="src/ 아래 파이썬 파일 목록을 보여줘",
        options=ClaudeAgentOptions(session_store=store),
    ):
        if isinstance(message, ResultMessage):
            session_id = message.session_id

    async for message in query(
        prompt="그 파일들이 하는 일을 요약해줘",
        options=ClaudeAgentOptions(session_store=store, resume=session_id),
    ):
        if isinstance(message, ResultMessage) and message.subtype == "success":
            print(message.result)

asyncio.run(main())
```

---

## 적합성 테스트

내가 만든 어댑터가 올바르게 작동하는지 검증하는 **컨포먼스 테스트(conformance suite)**가 있어요:

```python
# Python
import pytest
from claude_agent_sdk.testing import run_session_store_conformance

@pytest.mark.asyncio
async def test_my_store_conformance():
    await run_session_store_conformance(MyRedisStore)
```

TypeScript는 SDK 저장소의 `examples/session-stores/shared/conformance.ts` 를 복사해서 사용해요.

---

> 📚 **관련 문서**
> - [Agent SDK 개요](/docs/advanced/channels) — SDK 전체 소개
> - [Agent SDK 호스팅](/docs/advanced/agent-teams) — 멀티 호스트 배포 패턴
> - [세션 관리](/docs/basics/session-management) — CLI 세션 관리 가이드
