import { NextResponse } from 'next/server'
import { CATEGORIES, getDocsByCategory } from '@/lib/docs'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ── 검색 인덱스 아이템 타입 ──
export interface SearchItem {
  title: string       // 문서 제목
  description: string // 문서 설명
  category: string    // 카테고리 slug (예: basics)
  categoryTitle: string // 카테고리 한국어 이름 (예: 기본 사용법)
  categoryIcon: string  // 카테고리 아이콘 이모지
  slug: string        // 문서 slug (파일명 기반)
  href: string        // 이동할 경로 /docs/category/slug
  tags: string[]      // 검색용 태그
  excerpt: string     // 본문 첫 200자 (검색 매칭 향상용)
}

// ── 마크다운 본문에서 순수 텍스트 추출 ──
// 헤더(#), 코드블록(`), 특수문자 등을 제거해 검색 가능한 텍스트만 남김
function extractExcerpt(content: string, maxLen = 200): string {
  return content
    .replace(/^---[\s\S]*?---/m, '')      // 프론트매터 제거
    .replace(/```[\s\S]*?```/g, '')        // 코드 블록 제거
    .replace(/`[^`]+`/g, '')               // 인라인 코드 제거
    .replace(/^#{1,6}\s+/gm, '')           // 헤더 마크다운 제거
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 링크 → 텍스트만
    .replace(/[*_~>|]/g, '')               // 볼드/이탤릭/취소선/인용/표 기호 제거
    .replace(/\s+/g, ' ')                  // 연속 공백 → 단일 공백
    .trim()
    .slice(0, maxLen)
}

// ── 전체 문서 검색 인덱스 생성 ──
// 빌드 타임이 아닌 런타임에 호출 (Next.js 정적 사이트에서 함수 재사용)
function buildSearchIndex(): SearchItem[] {
  const contentDir = path.join(process.cwd(), 'content', 'docs')
  const items: SearchItem[] = []

  for (const [catSlug, catMeta] of Object.entries(CATEGORIES)) {
    const docs = getDocsByCategory(catSlug)
    for (const doc of docs) {
      // 본문 텍스트 추출 — 검색 매칭 품질 향상용
      const filePath = path.join(contentDir, catSlug, `${doc.slug}.md`)
      let excerpt = ''
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8')
        const { content } = matter(raw)
        excerpt = extractExcerpt(content)
      }

      items.push({
        title: doc.title,
        description: doc.description,
        category: catSlug,
        categoryTitle: catMeta.title,
        categoryIcon: catMeta.icon,
        slug: doc.slug,
        href: `/docs/${catSlug}/${doc.slug}`,
        tags: doc.tags,
        excerpt,
      })
    }
  }

  return items
}

// ── GET /api/search — 전체 검색 인덱스 반환 ──
// 클라이언트가 한 번 받아서 로컬에서 필터링 (백엔드 검색 없음)
export async function GET() {
  const index = buildSearchIndex()
  return NextResponse.json(index, {
    headers: {
      // 정적 사이트이므로 캐시 최대화 — 재빌드 시 갱신됨
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
