import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MarkdownBody from '@/components/MarkdownBody'
import TagBadge from '@/components/TagBadge'
import FooterNav from '@/components/FooterNav'
import { CATEGORIES, getDoc, getDocsByCategory } from '@/lib/docs'
import { markdownToHtml } from '@/lib/markdown'
import { notFound } from 'next/navigation'

// ── 정적 경로 생성 — 빌드 타임에 모든 문서 경로 생성 ──
export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = []
  for (const category of Object.keys(CATEGORIES)) {
    const docs = getDocsByCategory(category)
    docs.forEach(doc => params.push({ category, slug: doc.slug }))
  }
  return params
}

// ── 개별 문서 페이지 ──
// 사이드바(데스크탑) + 메인 콘텐츠 2컬럼 레이아웃
export default async function DocPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const catMeta = CATEGORIES[category]
  if (!catMeta) notFound()

  const doc = getDoc(category, slug)
  if (!doc) notFound()

  // 마크다운 → HTML 변환 (서버 사이드)
  const html = await markdownToHtml(doc.content)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* 헤더 — 홈 > 카테고리 > 문서 브레드크럼 */}
      <Header
        breadcrumbs={[
          { label: catMeta.title, href: `/docs/${category}` },
          { label: doc.meta.title },
        ]}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex gap-10">
        {/* 사이드바 — 데스크탑(lg 이상)에서만 표시 */}
        <Sidebar category={category} activeSlug={slug} />

        {/* 메인 콘텐츠 영역 */}
        <main className="min-w-0 flex-1 max-w-3xl">
          {/* 문서 헤더 — 제목 + 설명 + 태그 */}
          <div className="mb-8">
            <h1
              className="text-2xl sm:text-[1.75rem] font-bold mb-2.5"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.015em' }}
            >
              {doc.meta.title}
            </h1>
            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
              {doc.meta.description}
            </p>
            {doc.meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {doc.meta.tags.map(tag => <TagBadge key={tag} label={tag} />)}
              </div>
            )}
          </div>

          {/* 마크다운 본문 */}
          <MarkdownBody html={html} />

          {/* 하단 네비게이션 — 카테고리 목록으로 돌아가기 */}
          <FooterNav
            backHref={`/docs/${category}`}
            backLabel={`${catMeta.title} 목록으로`}
          />
        </main>
      </div>
    </div>
  )
}
