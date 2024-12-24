import { auth } from "@/auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  LOGIN_PAGE,
  ONBOARDING_PAGE,
  authRoutes,
  publicRoutes,
} from "./routes";
import { requireBuisnessDetail } from "./utils/hooks";

export default auth(async (req) => {
  const { pathname, origin } = req.nextUrl;

  // Verifica se la rotta è pubblica
  if (publicRoutes.includes(pathname)) {
    return; // Nessuna azione necessaria
  }

  const isAuthenticated = !!req.auth;
  const isAuthRoute = authRoutes.includes(pathname);

  // Redirezione per utenti autenticati che tentano di accedere alle rotte di login
  if (isAuthenticated && isAuthRoute) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, origin));
  }

  if (!isAuthenticated && !isAuthRoute) {
    // Redirezione alla pagina di login per utenti non autenticati
    return Response.redirect(new URL(LOGIN_PAGE, origin));
  }
});

// Configurazione del matcher per escludere percorsi specifici
export const config = {
  matcher: [
    "/", // Root
    "/((?!api|_next/static|_next/image|favicon.ico).*)", // Escludi risorse statiche e API
  ],
};
