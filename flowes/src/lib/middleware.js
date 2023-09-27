import {NextResponse} from 'next/server';

//login
export function middleware(request){
    if (!request.cookies.has('')) //token
        return NextResponse.redirect(new URL('/'))
}

//config
export const config = {
    matcher: [
        '/workspaces/:path*',
        '/projetos/:path*',
    ]
}