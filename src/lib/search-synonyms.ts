// ── 한/영 동의어 사전 (공용) ──
// Sidebar 사이드바 검색과 SearchModal(Ctrl+K)에서 공유.
// "auto" 로 검색하면 "오토", "자동" 도 매칭되고 그 반대도 됨.
export const SYNONYMS: Record<string, string[]> = {
  // 깃/GitHub
  'github': ['깃허브', '깃헙'],
  '깃허브': ['github', '깃헙'],
  '깃헙': ['github', '깃허브'],
  'git': ['깃'],
  '깃': ['git'],
  'commit': ['커밋'],
  '커밋': ['commit'],
  'push': ['푸시', '푸쉬'],
  '푸시': ['push', '푸쉬'],
  '푸쉬': ['push', '푸시'],
  'pull': ['풀'],
  '풀': ['pull'],
  'branch': ['브랜치'],
  '브랜치': ['branch'],
  'merge': ['머지'],
  '머지': ['merge'],
  'clone': ['클론'],
  '클론': ['clone'],
  'pr': ['풀리퀘스트', '풀 리퀘스트', '결재'],
  '풀리퀘스트': ['pr', 'pull request'],

  // MCP / 스킬 / 에이전트
  'mcp': ['엠씨피'],
  '엠씨피': ['mcp'],
  'hook': ['훅'],
  '훅': ['hook', 'hooks'],
  'skill': ['스킬'],
  '스킬': ['skill', 'skills'],
  'agent': ['에이전트'],
  '에이전트': ['agent', 'agents'],

  // 배포
  'deploy': ['배포', '디플로이'],
  '배포': ['deploy', 'vercel'],
  'vercel': ['버셀', '배포'],
  '버셀': ['vercel'],

  // 설정·설치·검색
  'terminal': ['터미널'],
  '터미널': ['terminal'],
  'setting': ['설정', 'settings'],
  '설정': ['setting', 'settings', 'config'],
  'install': ['설치'],
  '설치': ['install'],
  'search': ['검색'],
  '검색': ['search'],

  // 사고 모드
  'ultrathink': ['울트라씽크', '울트라 씽크', '울트라싱크', '울트라 싱크', 'ultra think'],
  '울트라씽크': ['ultrathink', '울트라싱크', '울트라 씽크'],
  '울트라싱크': ['ultrathink', '울트라씽크', '울트라 싱크'],
  '울트라 씽크': ['ultrathink', '울트라씽크'],
  '울트라 싱크': ['ultrathink', '울트라싱크'],
  'think': ['씽크', '싱크', '사고', '생각'],
  '사고': ['thinking', 'think', '생각'],
  '생각': ['thinking', 'think', '사고'],
  'effort': ['에포트', '사고 깊이', '사고깊이'],

  // 권한 모드
  'auto': ['오토', '자동'],
  '오토': ['auto', '자동'],
  '자동': ['auto', '오토'],
  'permission': ['권한', '퍼미션'],
  '권한': ['permission', 'permissions'],
  'plan': ['플랜', '계획'],
  '플랜': ['plan'],
  '계획': ['plan'],
  'acceptedits': ['자동 수정', '수정 자동 승인'],
  'accept edits': ['acceptedits', '자동 수정 승인'],
  'bypasspermissions': ['bypass permissions', 'dangerously skip', '모든 권한 스킵'],
  'bypass': ['바이패스', '스킵', '건너뛰기'],
  'dangerously': ['위험하게', 'dangerously skip'],
  'shift tab': ['shift+tab', '시프트탭', '쉬프트탭', '모드 전환'],
  'shift+tab': ['shift tab', '시프트탭', '쉬프트탭'],

  // 모델
  'opus': ['오푸스'],
  '오푸스': ['opus'],
  'sonnet': ['소네트', '소넷'],
  '소네트': ['sonnet'],
  '소넷': ['sonnet'],
  'haiku': ['하이쿠'],
  '하이쿠': ['haiku'],
  'opusplan': ['오푸스플랜', 'opus plan', '하이브리드', 'opus+sonnet'],
  '오푸스플랜': ['opusplan', 'opus plan'],
  '하이브리드': ['opusplan', 'hybrid'],

  // AI 특성
  'hallucination': ['할루시네이션', '착각', '거짓말'],
  '할루시네이션': ['hallucination', '착각'],
  'sycophancy': ['사대주의', '아첨'],
  '사대주의': ['sycophancy'],

  // Show Me / 시각화
  'show me': ['보여줘', '쇼미', '시각화'],
  '보여줘': ['show me', '쇼미', 'visualize'],
  '시각화': ['visualize', 'show me', 'visualization', '비주얼'],
  'visualize': ['시각화', 'show me'],
  'chart': ['차트', '그래프'],
  '차트': ['chart'],
  'artifact': ['아티팩트', '결과물'],
  '아티팩트': ['artifact', 'artifacts'],

  // 코워크·디스패치·예약
  'cowork': ['코워크', '협업'],
  '코워크': ['cowork'],
  'dispatch': ['디스패치', '원격', '폰으로'],
  '디스패치': ['dispatch'],
  'schedule': ['예약', '스케줄', '루틴'],
  '예약': ['schedule', 'routines'],
  'routines': ['루틴', '예약'],

  // Slack
  'slack': ['슬랙'],
  '슬랙': ['slack'],

  // 기타
  'token': ['토큰', '비용'],
  '토큰': ['token'],
  '비용': ['cost', 'token', 'pricing'],
  'cost': ['비용', 'pricing'],
  'voice': ['음성', '보이스', '말로'],
  '음성': ['voice'],
  '말로': ['voice', '음성'],
}

// ── 한 단어(term)를 동의어로 확장 ──
// 입력된 단어를 key로 직접 찾거나, key의 "부분 문자열"로 들어있을 때 해당 동의어 묶음을 합쳐 반환
export function expandTerm(term: string): string[] {
  const t = term.toLowerCase()
  const out = new Set<string>([t])
  for (const [key, syns] of Object.entries(SYNONYMS)) {
    if (key === t) {
      syns.forEach(s => out.add(s.toLowerCase()))
    }
  }
  return [...out]
}

// ── 복수 단어 쿼리 매칭 ──
// 쿼리를 공백으로 쪼개 각 단어를 AND로 매칭.
// 각 단어는 동의어 확장 후 variant 중 하나라도 text에 포함되면 OK.
// 예) "auto mode" → ("auto" | "오토" | "자동") AND ("mode" | "모드")
//     text가 "오토 모드로 시작..." 이어도 매칭됨
export function matchSearchQuery(text: string, query: string): boolean {
  const t = text.toLowerCase()
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (words.length === 0) return false
  return words.every(word => {
    const variants = expandTerm(word)
    return variants.some(v => t.includes(v))
  })
}
