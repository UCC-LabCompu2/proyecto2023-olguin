import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

/*
  Middleware que se encarga de verificar si el usuario esta autenticado
  @param {NextRequest} req - Request de la peticion
  @returns {NextResponse} - Respuesta de la peticion
*/
export function middleware(req: NextRequest) {

  if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/settings') {
    if (!req.cookies.get('token') || req.cookies.get('token') === undefined) {
      return NextResponse.redirect(new URL('/auth/login', req.nextUrl.href));
    }
    return NextResponse.next();
  }
}
