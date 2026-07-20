import { NextResponse } from 'next/server'

// This function can be marked 'async if using 'await" inside
export function middleware(request) {
    if(request.url.pathname.startsWith('/about')){
        return NextResponse.rewrite("/about2", request,URL)
    }

    //rewrite is used as "return the html page of /about2 if /about is called for. it is different than redirect."


    // return NextResponse.json({message: "Helo from the about page"})
 //return NextResponse.redirect(new URL ('/home' //path inside matcher will be redirected to this url
   // , request.url))
}
// See "Matching Paths" below to learn more
export const config = {
matcher: '/about/:path*' //this path will be redirected to /home
}