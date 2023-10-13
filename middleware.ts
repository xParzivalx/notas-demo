import { authMiddleware } from '@kinde-oss/kinde-auth-nextjs/server'

export const config = {
  matcher: ['/copy/:path*', '/auth-callback'],
}

export default authMiddleware