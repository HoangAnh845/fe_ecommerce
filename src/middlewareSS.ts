// // import { NextResponse } from 'next/server'
// // import type { NextRequest } from 'next/server'
// // import { Auth } from './middleware/Auth'

// // export function middleware(request: NextRequest) {
// //   if (!request) { // Nếu có request thì chạy middleware Auth
// //     return Auth(request);
// //   }
// // }


// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   // if (typeof window !== "undefined" && window.localStorage) {
//   //   // Kiểm tra xem có phải môi trường window không
//   //   const resLogin = localStorage.getItem("login");


//   //   const token = JSON.parse(request.cookies.get("token")?.value || "{}")
//   //   const now = new Date();
//   //   const specificTime = new Date(token?.['token']?.['expires_at']); // Thời gian hết hạn của token  

//   //   if (Object.keys(token).length === 0 || !token.accessToken || now > specificTime) { // Nếu chưa login thì điều hướng về trang login
//   //     return NextResponse.redirect(new URL('/login', request.url));  // redirect là điều hướng
//   //   }
//   // }
//   const token = JSON.parse(request.cookies.get("token")?.value || "{}")
//   const now = new Date();
//   const specificTime = new Date(token?.['token']?.['expires_at']); // Thời gian hết hạn của token  

//   console.log('--- DATA ---', 'sssss');
  
//   if (Object.keys(token).length === 0 || !token.accessToken || now > specificTime) { // Nếu chưa login thì điều hướng về trang login
//     return NextResponse.redirect(new URL('/login', request.url));  // redirect là điều hướng
//   }

//   try {
//     return NextResponse.next();
//   } catch (err) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/dashboard', '/user/profile', '/dashboard/client'],
// }