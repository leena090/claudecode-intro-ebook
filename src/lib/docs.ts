import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ── 학습 레벨 탭 구조 ──
// 14개 카테고리를 5개 학습 레벨 탭으로 그룹화 (클로드 왕초보 → 심화 학습자 → 업무 자동화 → 참고)
// 홈페이지에서 탭 전환 시 해당 레벨의 카테고리만 표시 → 압도감 제거
export interface LearningTab {
  id: string
  icon: string
  title: string
  subtitle: string
  categories: string[] // CATEGORIES의 slug 배열
}

export const LEARNING_TABS: LearningTab[] = [
  {
    id: 'beginner',
    icon: '🌱',
    title: '클로드 왕초보',
    subtitle: '처음 접한 분 — 5분 안에 시작',
    categories: ['intro', 'setup', 'basics', 'practice'],
  },
  {
    id: 'intermediate',
    icon: '📈',
    title: '클로드 중급 세션',
    subtitle: '기본은 아는 분 — Claude Code 자유자재로',
    categories: ['commands', 'config', 'webapp'],
  },
  {
    id: 'advanced',
    icon: '🔥',
    title: '클로드 심화 학습자',
    subtitle: '고수가 되려는 분 — 에이전트·워크트리·MCP',
    categories: ['codeweb', 'advanced'],
  },
  {
    id: 'automation',
    icon: '💼',
    title: '업무 자동화',
    subtitle: '업무에 바로 쓰려는 분 — 웹앱·코워크·실전 사례',
    categories: ['cowork'],
  },
  {
    id: 'reference',
    icon: '📖',
    title: '참고 자료',
    subtitle: '필요할 때 찾아보는 자료',
    categories: ['tips', 'next', 'reference'],
  },
  // ── 특별부록 — 2026-04-17 공개된 Claude Design 리서치 프리뷰 전용 탭 ──
  // 대표님 지시: "말그대로 특별이야!" → 다른 레벨과 구분되는 별도 탭으로 강조
  {
    id: 'design',
    icon: '✨',
    title: '특별부록: 클로드 디자인',
    subtitle: '말로 시안을 그리는 AI 디자인 도구 (2026-04-17 공개)',
    categories: ['design'],
  },
]

// ── 카테고리 메타데이터 정의 ──
// 각 카테고리의 제목, 설명, 아이콘, 순서를 관리
export const CATEGORIES: Record<string, { title: string; description: string; icon: string; order: number }> = {
  // ── 기초 영역 ──
  intro: { title: '소개', description: 'Claude 생태계와 각 도구의 역할을 이해합니다', icon: '🚀', order: 1 },
  setup: { title: '설치 & 시작', description: '설치하고 첫 실행까지 완료합니다', icon: '⚙️', order: 2 },
  basics: { title: '기본 사용법', description: 'UI 이해와 필수 명령어를 익힙니다', icon: '📚', order: 3 },
  practice: { title: '실습', description: '실제 작업을 따라 해봅니다', icon: '💻', order: 4 },
  // ── Claude 웹앱 & 코워크 영역 ──
  webapp: { title: 'Claude 웹앱', description: '아티팩트, 프로젝트, 채팅 등 claude.ai 완전 가이드', icon: '🌐', order: 5 },
  cowork: { title: '코워크', description: '데스크톱 제어, Dispatch, 예약 작업으로 업무 자동화', icon: '🤝', order: 6 },
  // ── Claude Code 심화 영역 ──
  commands: { title: '슬래시 커맨드', description: '/ 명령어로 Claude Code를 자유자재로 제어합니다', icon: '⌨️', order: 7 },
  config: { title: '설정 & 커스터마이징', description: 'CLAUDE.md, hooks, MCP, 스킬로 나만의 환경을 만듭니다', icon: '🔧', order: 8 },
  codeweb: { title: 'Claude Code 웹', description: 'claude.ai/code에서 브라우저로 코딩하기', icon: '☁️', order: 9 },
  advanced: { title: '고급 기능', description: '에이전트 팀, 워크트리, 원격 제어를 배웁니다', icon: '🔥', order: 10 },
  // ── 마무리 영역 ──
  tips: { title: '팁 & FAQ', description: '토큰 절약법, 유용한 팁과 자주 묻는 질문', icon: '💡', order: 11 },
  stories: { title: '실제 사용 사례 10편', description: '직장인·가족·유튜버·창업자가 클로드를 실제로 어떻게 쓰는지', icon: '🎬', order: 12 },
  next: { title: '다음 단계', description: '더 깊이 학습하는 로드맵', icon: '🗺️', order: 13 },
  reference: { title: '레퍼런스', description: '전체 명령어, CLI 플래그, 단축키 목록', icon: '📖', order: 14 },
  // ── 특별부록 — Claude Design 리서치 프리뷰 (2026-04-17 공개) ──
  // 기존 14개 카테고리 뒤에 특별부록으로 배치. 전용 Learning Tab 'design'으로 노출
  design: { title: '✨ 특별부록: 클로드 디자인', description: '말로 시안을 그리는 AI 디자인 도구 완전 가이드', icon: '🎨', order: 15 },
}

// 문서 메타데이터 인터페이스
export interface DocMeta {
  title: string
  description: string
  tags: string[]
  category: string
  order: number
  slug: string
  // 최종 업데이트 날짜 (프론트매터 lastUpdated 필드) — "YYYY-MM-DD" 문자열
  // 없으면 undefined → 페이지 헤더 뱃지 렌더링 생략
  lastUpdated?: string
  // 유튜브 영상 ID (프론트매터 youtubeId 필드) — "dQw4w9WgXcQ" 같은 11자리
  // 있으면 페이지 하단에 "영상으로 보기" 섹션 자동 렌더링
  youtubeId?: string
  // 유튜브 영상 제목 (선택) — 없으면 기본 텍스트 사용
  youtubeTitle?: string
}

// content/docs 디렉토리 경로 (빌드 타임 기준)
const contentDir = path.join(process.cwd(), 'content', 'docs')

// ── 특정 카테고리의 문서 목록 반환 ──
// order 필드 기준으로 오름차순 정렬
export function getDocsByCategory(category: string): DocMeta[] {
  const categoryDir = path.join(contentDir, category)
  if (!fs.existsSync(categoryDir)) return []

  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'))
  const docs: DocMeta[] = files.map(file => {
    const slug = file.replace('.md', '')
    const content = fs.readFileSync(path.join(categoryDir, file), 'utf-8')
    const { data } = matter(content)
    // lastUpdated는 optional이며 exactOptionalPropertyTypes 제약을 맞추기 위해
    // 값이 있을 때만 필드를 spread로 포함 (undefined 할당 회피)
    const lastUpdatedRaw = data['lastUpdated'] as string | undefined
    const youtubeIdRaw = data['youtubeId'] as string | undefined
    const youtubeTitleRaw = data['youtubeTitle'] as string | undefined
    const meta: DocMeta = {
      title: (data['title'] as string | undefined) || slug,
      description: (data['description'] as string | undefined) || '',
      tags: (data['tags'] as string[] | undefined) || [],
      category: (data['category'] as string | undefined) || category,
      order: (data['order'] as number | undefined) || 99,
      slug,
      ...(lastUpdatedRaw ? { lastUpdated: lastUpdatedRaw } : {}),
      ...(youtubeIdRaw ? { youtubeId: youtubeIdRaw } : {}),
      ...(youtubeTitleRaw ? { youtubeTitle: youtubeTitleRaw } : {}),
    }
    return meta
  })
  // order 필드 기준 오름차순 정렬
  return docs.sort((a, b) => a.order - b.order)
}

// ── 모든 카테고리 목록과 문서 수 반환 ──
// order 기준으로 정렬해 홈페이지 그리드에 사용
export function getAllCategories() {
  return Object.entries(CATEGORIES)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([slug, meta]) => ({
      slug,
      ...meta,
      docCount: getDocsByCategory(slug).length,
    }))
}

// ── 단일 문서 읽기 ──
// 해당 파일이 없으면 null 반환
export function getDoc(category: string, slug: string): { meta: DocMeta; content: string } | null {
  const filePath = path.join(contentDir, category, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  // optional 필드 — exactOptionalPropertyTypes 제약 대응 (spread)
  const lastUpdatedRaw = data['lastUpdated'] as string | undefined
  const youtubeIdRaw = data['youtubeId'] as string | undefined
  const youtubeTitleRaw = data['youtubeTitle'] as string | undefined
  const meta: DocMeta = {
    title: (data['title'] as string | undefined) || slug,
    description: (data['description'] as string | undefined) || '',
    tags: (data['tags'] as string[] | undefined) || [],
    category: (data['category'] as string | undefined) || category,
    order: (data['order'] as number | undefined) || 99,
    slug,
    ...(lastUpdatedRaw ? { lastUpdated: lastUpdatedRaw } : {}),
    ...(youtubeIdRaw ? { youtubeId: youtubeIdRaw } : {}),
    ...(youtubeTitleRaw ? { youtubeTitle: youtubeTitleRaw } : {}),
  }
  return { meta, content }
}

// ── 날짜 문자열을 한국어 포맷으로 변환 ──
// "2026-04-08" → "2026년 4월 8일"
// 프론트매터 lastUpdated 값을 페이지 뱃지에 표시할 때 사용
export function formatKoreanDate(isoDate: string | undefined): string | null {
  if (!isoDate) return null
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return isoDate // 형식이 다르면 원본 반환 (fallback)
  const [, year, month, day] = match
  // 앞의 0 제거 (04 → 4)
  const m = parseInt(month!, 10)
  const d = parseInt(day!, 10)
  return `${year}년 ${m}월 ${d}일`
}
