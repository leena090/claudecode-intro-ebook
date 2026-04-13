import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MarkdownBody from '@/components/MarkdownBody'
import TagBadge from '@/components/TagBadge'
import FooterNav from '@/components/FooterNav'
import { CATEGORIES, getDoc, getDocsByCategory, formatKoreanDate } from '@/lib/docs'
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

  // 최종 업데이트 날짜를 한국어 포맷으로 변환 (없으면 null → 뱃지 미표시)
  const lastUpdatedKorean = formatKoreanDate(doc.meta.lastUpdated)

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
          {/* 문서 헤더 — 제목 + 설명 + 최종 업데이트 뱃지 + 태그 */}
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

            {/* 최종 업데이트 뱃지 — lastUpdated 프론트매터가 있을 때만 표시 */}
            {/* 각 페이지마다 공식/커뮤니티 소스 기준 최신화 시점을 독자에게 명확히 안내 */}
            {lastUpdatedKorean && (
              <div className="last-updated-badge mt-3">
                <span className="last-updated-icon">📅</span>
                <span className="last-updated-label">최종 업데이트</span>
                <span className="last-updated-date">{lastUpdatedKorean}</span>
              </div>
            )}

            {doc.meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {doc.meta.tags.map(tag => <TagBadge key={tag} label={tag} />)}
              </div>
            )}
          </div>

          {/* 마크다운 본문 */}
          <MarkdownBody html={html} />

          {/* 유튜브 영상 연결 — youtubeId 프론트매터가 있을 때만 자동 표시 */}
          {doc.meta.youtubeId && (
            <div
              className="mt-10 mb-8 p-5 rounded-xl border"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {doc.meta.youtubeTitle || '이 내용을 영상으로 보기'}
                </span>
              </div>
              {/* 반응형 유튜브 임베드 (16:9 비율) */}
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${doc.meta.youtubeId}`}
                  title={doc.meta.youtubeTitle || '관련 영상'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-2 text-right">
                <a
                  href={`https://youtube.com/watch?v=${doc.meta.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-colors"
                  style={{ color: 'var(--accent-text)' }}
                >
                  유튜브에서 보기 →
                </a>
              </div>
            </div>
          )}

          {/* 하단 네비게이션 — 카테고리 목록으로 돌아가기 */}
          <FooterNav
            backHref={`/docs/${category}`}
            backLabel={category === 'stories' ? '다른 사장님들은 어떻게 쓰고 있을까?' : `${catMeta.title} 목록으로`}
            {...(category === 'stories' ? {
              ctaText: '나도 이렇게 해볼까?',
              ctaHref: '/docs/cowork/cowork-intro',
              ctaLinkText: '시작 가이드 보기',
            } : {})}
          />
        </main>
      </div>
    </div>
  )
}
