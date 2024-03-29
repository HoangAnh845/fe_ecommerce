// import { Request, Response } from 'express';
// export function AuthCheck(req: Request, res: Response) {
//     const loginToken = req.cookies.get("login"); 
//     console.log('--- login ---', login);

// }

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function Auth(request: NextRequest) { // Dùng để check xem user đã login chưa
//     const loginToken = request.cookies.get("login")?.value;
//     // (request.nextUrl.pathname.startsWith('/about'))
//     if (!loginToken) { // Nếu chưa login thì điều hướng về trang login
//         return NextResponse.rewrite(new URL('/login', request.url))
//     }
//     try {
//         return NextResponse.next()
//     } catch (err) {
//         return NextResponse.rewrite(new URL('/login', request.url))
//     }
// }

// export const config = {
//     matcher: '/user/profile',
// }

