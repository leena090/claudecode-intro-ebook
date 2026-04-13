'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import PixelLogo from '@/components/PixelLogo'

// ── 로그인 페이지 — 노모어매뉴얼 브랜딩 ──
// 비밀번호를 서버 API로 전송 → 서버가 검증 → httpOnly 쿠키 발급
// Suspense로 useSearchParams 감싸기 (Next.js 14+ 요구사항)
export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      // 인증 성공 → 원래 가려던 페이지로 이동
      const from = searchParams.get('from') || '/'
      router.push(from)
      router.refresh()
    } else {
      // 인증 실패
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
      setPassword('')
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <div
        className="w-full max-w-sm text-center"
        style={{ animation: shake ? 'shake 0.4s ease-in-out' : undefined }}
      >
        {/* 로고 + 브랜드 */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <PixelLogo size="lg" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: 'var(--text-primary)' }}>
            노모어매뉴얼
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            우리 함께, 더 멀리
          </p>
        </div>

        {/* PD 소개 라인 */}
        <div
          className="mb-8 py-3 px-4 rounded-lg text-sm"
          style={{ background: 'var(--accent-soft)', color: 'var(--text-secondary)' }}
        >
          Claude Code 입문 — 비개발자를 위한 완전 가이드
        </div>

        {/* 비밀번호 입력 */}
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false) }}
            placeholder="비밀번호를 입력하세요"
            autoFocus
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg text-center text-sm outline-none transition-all"
            style={{
              background: 'var(--bg-secondary)',
              border: `1.5px solid ${error ? '#e74c3c' : 'var(--border)'}`,
              color: 'var(--text-primary)',
              opacity: loading ? 0.6 : 1,
            }}
          />
          {error && (
            <p className="mt-2 text-xs" style={{ color: '#e74c3c' }}>
              비밀번호가 맞지 않습니다
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              background: 'var(--accent-text)',
              color: '#ffffff',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? '확인 중...' : '입장하기'}
          </button>
        </form>

        {/* YouTube 링크 */}
        <a
          href="https://www.youtube.com/@nomore_manual"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs transition-colors hover:opacity-80"
          style={{ color: 'var(--text-muted)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          노모어매뉴얼 유튜브
        </a>

        {/* shake 애니메이션 */}
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
          }
        `}</style>
      </div>
    </div>
  )
}
