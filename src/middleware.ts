import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ── Edge 미들웨어 — 서버 측 인증 게이트 ──
// 모든 페이지 요청을 가로채서 인증 쿠키 확인
// 비밀번호는 클라이언트 JS에 절대 노출되지 않음
const AUTH_COOKIE = 'nmm-auth-token'
// 토큰 = 비밀번호 해시 (단방향) — 쿠키에 비밀번호 원문 저장 안 함
const VALID_TOKEN = '9bd52b3a24cc5fa64f28586339f6a675' // yuna2026의 MD5

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 로그인 API, 로그인 페이지, 정적 에셋은 통과
  if (
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.svg')
  ) {
    return NextResponse.next()
  }

  // 인증 쿠키 확인
  const token = request.cookies.get(AUTH_COOKIE)?.value
  if (token === VALID_TOKEN) {
    return NextResponse.next()
  }

  // 미인증 → 로그인 페이지로 리다이렉트
  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  // 정적 파일 제외, 나머지 모든 경로에 적용
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
