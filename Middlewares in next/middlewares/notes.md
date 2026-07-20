- middlewares are used to modify server requests.

- middlewares are used to make changes into HTTP requests before they reach the server.

- we create middleware.js at the outermost layer of files.

- boilerplate code-->
    import { NextResponse } from 'next/server'

    // This function can be marked 'async if using 'await" inside
    export function middleware(request) {
    return NextResponse.redirect(new URL ('/home'
    , request.url))
   }
    // See "Matching Paths" below to learn more
    export const config = {
    matcher: '/about/:path*'
    }

- return NextResponse.redirect(new URL ('/home' 
 , request.url))

this redirects to new URL from Matcher-->
export const config = {
matcher: '/about/:path*' }

- with the help of middlewares we can add custom headers etc. before the request reaches server.

- refer to middleware.js for application of about code

- read documentation for header syntax
