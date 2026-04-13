import { NextResponse } from 'next/server'
import crypto from 'crypto'

// ── 인증 API — 서버에서만 비밀번호 검증 ──
// 클라이언트는 비밀번호를 POST로 보내고, 서버가 검증 후 httpOnly 쿠키 발급
const SITE_PASSWORD = 'yuna2026'
const AUTH_COOKIE = 'nmm-auth-token'

// 비밀번호 → MD5 해시 (쿠키에 원문 저장 방지)
function hashPassword(pw: string): string {
  return crypto.createHash('md5').update(pw).digest('hex')
}

export async function POST(request: Request) {
  const body = await request.json() as { password?: string }
  const { password } = body

  if (password === SITE_PASSWORD) {
    // 인증 성공 → httpOnly 쿠키 발급 (JS에서 접근 불가)
    const token = hashPassword(password)
    const response = NextResponse.json({ ok: true })
    response.cookies.set(AUTH_COOKIE, token, {
      httpOnly: true,        // JS로 쿠키 접근 불가
      secure: true,          // HTTPS에서만 전송
      sameSite: 'lax',       // CSRF 방지
      path: '/',             // 전체 사이트에 적용
      maxAge: 60 * 60 * 24 * 30, // 30일 유지
    })
    return response
  }

  // 인증 실패
  return NextResponse.json({ ok: false, error: '비밀번호가 맞지 않습니다' }, { status: 401 })
}

// 로그아웃 — 쿠키 삭제
export async function DELETE() {
  const response = NextResponse.json({ ok: true })
  response.cookies.delete(AUTH_COOKIE)
  return response
}
