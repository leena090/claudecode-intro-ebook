import Link from 'next/link'
import PixelLogo from '@/components/PixelLogo'
import ThemeToggle from '@/components/ThemeToggle'
import CategoryTabs from '@/components/CategoryTabs'
import { getAllCategories, LEARNING_TABS } from '@/lib/docs'

// ── 홈페이지 ──
// 2026-04-13 리디자인:
//  - 히어로: "교재" → "교실" 느낌 (변화의 약속 + 감정 연결)
//  - 시작 경로: 5개 탭 → 3개 심플 선택지 (선택 장애 제거)
//  - 소설 하이라이트: 히어로 바로 아래에 카드 3장 (감정이 먼저)
//  - 기존 탭: 하단으로 이동 (전체 목록 접근 유지)
export default function HomePage() {
  const categories = getAllCategories()
  const totalDocs = categories.reduce((sum, c) => sum + c.docCount, 0)
  const totalCategories = categories.length

  // stories 카테고리 — 소설 하이라이트용
  const storiesCategory = categories.find(c => c.slug === 'stories')

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* 헤더 — sticky 고정 */}
      <header
        className="sticky top-0 z-50 h-14 border-b"
        style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PixelLogo size="sm" />
            <span className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
              Claude Code 입문자 교육용
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* ── 히어로 섹션: "교실" 느낌 ── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-6 text-center">
        <div className="flex justify-center mb-6">
          <PixelLogo size="lg" />
        </div>
        {/* 변화의 약속 — 감정이 먼저 */}
        <h1
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: '1.4' }}
        >
          컴퓨터가 무서웠던 분도,<br />
          지금은 AI에게 일을 시킵니다
        </h1>
        <p className="text-base sm:text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>
          설치부터 실전까지, 40~60대 눈높이에 맞춘<br />
          대한민국 유일의 Claude Code 입문 교실
        </p>
        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {totalDocs}편의 가이드 · 15편의 실전 이야기 · 2026-04-13 최신
        </div>
      </section>

      {/* ── 3단 시작 경로: "딱 하나만 고르세요" ── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-10">
        <div
          className="text-center mb-5 text-sm font-semibold"
          style={{ color: 'var(--text-secondary)' }}
        >
          지금 어디쯤 계세요?
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* 경로 1: 완전 처음 */}
          <Link
            href="/docs/stories/starter-01-jinsook-first-install"
            className="group p-5 rounded-xl border text-center transition-all hover:shadow-md"
            style={{
              background: 'var(--accent-soft)',
              borderColor: 'var(--accent-text)',
              textDecoration: 'none',
            }}
          >
            <div className="text-3xl mb-2">🌱</div>
            <div className="font-bold text-[15px] mb-1" style={{ color: 'var(--accent-text)' }}>
              처음이에요
            </div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              진숙 여사님 이야기부터<br />
              천천히 시작할게요
            </div>
          </Link>
          {/* 경로 2: 설치는 했음 */}
          <Link
            href="/docs/basics/first-conversation"
            className="group p-5 rounded-xl border text-center transition-all hover:shadow-md"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border)',
              textDecoration: 'none',
            }}
          >
            <div className="text-3xl mb-2">💬</div>
            <div className="font-bold text-[15px] mb-1" style={{ color: 'var(--text-primary)' }}>
              설치는 했어요
            </div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              첫 대화부터<br />
              차근차근 배울게요
            </div>
          </Link>
          {/* 경로 3: 좀 써봤음 */}
          <Link
            href="/docs/cowork/cowork-intro"
            className="group p-5 rounded-xl border text-center transition-all hover:shadow-md"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border)',
              textDecoration: 'none',
            }}
          >
            <div className="text-3xl mb-2">🚀</div>
            <div className="font-bold text-[15px] mb-1" style={{ color: 'var(--text-primary)' }}>
              좀 써봤어요
            </div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              코워크로 업무 자동화<br />
              시작해볼게요
            </div>
          </Link>
        </div>
      </section>

      {/* ── 소설 하이라이트 3장: 감정 카드 ── */}
      <section
        className="border-t border-b py-12 mb-8"
        style={{
          background: 'var(--bg-secondary)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8">
            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.015em' }}
            >
              "나 같은 사람도 할 수 있을까?"
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              이 분들도 처음엔 똑같은 질문을 했어요
            </p>
          </div>

          {/* 소설 카드 3장 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* 카드 1: 진숙 여사 */}
            <Link
              href="/docs/stories/starter-01-jinsook-first-install"
              className="p-5 rounded-xl border transition-all hover:shadow-md"
              style={{
                background: 'var(--bg-primary)',
                borderColor: 'var(--border)',
                textDecoration: 'none',
              }}
            >
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-text)' }}>
                편 11 · 진숙 여사 (62세)
              </div>
              <div className="text-[15px] font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                검은 화면 첫 만남
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                32년간 초등학교 선생님이었던 진숙 여사님. 딸이 붙여둔 포스트잇 하나로 Windows 노트북에 Claude Code를 설치했습니다.
              </p>
              <div
                className="text-xs italic"
                style={{ color: 'var(--text-muted)' }}
              >
                "나는 기계치인데…" 종얼거리다가, 에이, 하고 노트북을 열었다.
              </div>
            </Link>
            {/* 카드 2: 오사장 */}
            <Link
              href="/docs/stories/starter-02-oh-cafe-routine"
              className="p-5 rounded-xl border transition-all hover:shadow-md"
              style={{
                background: 'var(--bg-primary)',
                borderColor: 'var(--border)',
                textDecoration: 'none',
              }}
            >
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-text)' }}>
                편 12 · 오사장 (54세)
              </div>
              <div className="text-[15px] font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                카페, 매일 아침 6시 30분의 기적
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                매일 새벽 매출 정산, 재고 확인, SNS 글쓰기… 반복 업무에 지친 카페 사장님이 AI에게 아침 루틴을 맡겼습니다.
              </p>
              <div
                className="text-xs italic"
                style={{ color: 'var(--text-muted)' }}
              >
                출근했더니 이미 다 되어 있었다. 커피 한 잔의 여유가 생겼다.
              </div>
            </Link>
            {/* 카드 3: 김선영 */}
            <Link
              href="/docs/stories/starter-04-couple-it-reversal"
              className="p-5 rounded-xl border transition-all hover:shadow-md"
              style={{
                background: 'var(--bg-primary)',
                borderColor: 'var(--border)',
                textDecoration: 'none',
              }}
            >
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-text)' }}>
                편 14 · 김선영 (51세)
              </div>
              <div className="text-[15px] font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                IT 남편보다 먼저 배우다
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                "컴맹"이라 불리던 주부가 에이전트 팀을 만들어 집안 살림을 자동화하자, IT 업계 남편이 놀랐습니다.
              </p>
              <div
                className="text-xs italic"
                style={{ color: 'var(--text-muted)' }}
              >
                "진짜 직원 다섯 명 고용한 것 같아."
              </div>
            </Link>
          </div>

          {/* 전체 사례 보기 버튼 */}
          {storiesCategory && (
            <div className="flex justify-center">
              <Link
                href="/docs/stories"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: 'var(--accent-text)',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                실전 이야기 {storiesCategory.docCount}편 전체 보기 →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── 전체 학습 목록 (기존 탭 유지) ── */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-12">
        <div className="text-center mb-6">
          <h2
            className="text-lg font-bold mb-1"
            style={{ color: 'var(--text-primary)' }}
          >
            전체 학습 목록
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {totalCategories}개 카테고리 · {totalDocs}편의 가이드
          </p>
        </div>
        <CategoryTabs tabs={LEARNING_TABS} categories={categories} />
      </main>

      {/* 푸터 */}
      <footer
        className="border-t py-6 text-center text-sm"
        style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
      >
        <div className="flex justify-center mb-2">
          <PixelLogo size="sm" />
        </div>
        <p>© 2026 노모어매뉴얼 · Claude Code 입문 가이드</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link
            href="/glossary"
            className="text-xs transition-colors"
            style={{ color: 'var(--accent-text)', textDecoration: 'none' }}
          >
            📖 용어 사전
          </Link>
        </div>
        <a
          href="https://youtube.com/@nomore_manual"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-2 text-xs transition-colors"
          style={{ color: 'var(--accent-text)' }}
        >
          {/* 유튜브 아이콘 */}
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          @nomore_manual
        </a>
      </footer>
    </div>
  )
}
