import styles from "@/styles/page.module.css";
import Footer from '../components/Footer';
import NotasAI from '../components/notasai';
import Header from '../components/Header';
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="container">
      <div className="flex justify-between p-5">
        <a
          href="https://notas.ai"
          target="_blank"
          className="max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100"
        >
          <NotasAI />
        </a>
      </div>
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Notas Copywriter
        </p>
        {!isAuthenticated() ? (
          <>
            <p className="text-xm hero-tagline">by <a href="https://notas.ai" >notas.ai</a></p>
            <div className="flex items-center justify-center">
              <LoginLink className="btn btn-light btn-big mr-2">Entrar</LoginLink>
              <a href="https://notas.ai/pricing" className="btn btn-light btn-big">Suscribirse</a>
            </div>
          </>
        ) : (
          <>
            <p className="text-xm hero-tagline">by <a href="https://notas.ai" >notas.ai</a></p>
            <div className="flex items-center">
              <LogoutLink className="btn btn-light btn-big mr-2">Cerrar sesión</LogoutLink>
              <a href="/copy" className="btn btn-light btn-big">Abrir ahora</a>     
            </div>
          </>
        )}
      </div>
    </div>
  );
}
