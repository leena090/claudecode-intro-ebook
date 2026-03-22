import Link from 'next/link'
import Header from '@/components/Header'
import TagBadge from '@/components/TagBadge'
import { CATEGORIES, getDocsByCategory } from '@/lib/docs'
import { notFound } from 'next/navigation'

// ── 정적 경로 생성 — 빌드 타임에 모든 카테고리 경로 생성 ──
export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(slug => ({ category: slug }))
}

// ── 카테고리 목록 페이지 ──
// 해당 카테고리의 모든 문서를 번호 순서로 표시
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const catMeta = CATEGORIES[category]
  if (!catMeta) notFound()

  const docs = getDocsByCategory(category)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Header breadcrumbs={[{ label: catMeta.title }]} />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
        {/* 카테고리 헤더 — 아이콘 + 제목 + 설명 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{catMeta.icon}</span>
            <h1
              className="text-2xl sm:text-[1.75rem] font-bold"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.015em' }}
            >
              {catMeta.title}
            </h1>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>{catMeta.description}</p>
        </div>

        {/* 문서 목록 — 순번 + 제목 + 설명 + 태그 */}
        <div className="space-y-2">
          {docs.map((doc, i) => (
            <Link
              key={doc.slug}
              href={`/docs/${category}/${doc.slug}`}
              className="card-hover group flex items-center gap-4 p-4 rounded-xl border"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border)',
                textDecoration: 'none',
              }}
            >
              {/* 순번 뱃지 */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
              >
                {i + 1}
              </div>
              {/* 문서 내용 */}
              <div className="min-w-0 flex-1">
                <div
                  className="font-medium text-[15px] mb-0.5"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {doc.title}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {doc.description}
                </div>
                {doc.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {doc.tags.map(tag => <TagBadge key={tag} label={tag} />)}
                  </div>
                )}
              </div>
              {/* 화살표 아이콘 — 호버 시 오른쪽으로 이동 */}
              <svg
                className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform"
                style={{ color: 'var(--text-muted)' }}
                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
