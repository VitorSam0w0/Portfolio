// pages/index.js

import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.png";
import '../app/globals.css'

export default function Email() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-600 p-4 text-white text-center sm:text-left">
        <div className="flex justify-between">
          <div>
            <Image className="w-20 h-20" src={Logo} alt="Imagem logo" />
          </div>
          <div className="hidden md:flex space-x-4 pt-10">
            <Link href="/" className="hover:text-gray-300" legacyBehavior><a>Inicio</a></Link>
            <Link href="/Projetos" className="hover:text-gray-300" legacyBehavior><a>+Projetos</a></Link>
            <Link href="/Email" className="hover:text-gray-300" legacyBehavior><a>Email</a></Link>
            {/* Adicione mais links conforme necessário */}
          </div>
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Meu Site</h1>
        <p className="text-lg">
          Este é um exemplo básico de um corpo de site usando Next.js e Tailwind CSS. 
          Sinta-se à vontade para adicionar mais conteúdo aqui.
        </p>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Portfolio de Vitor Dias
      </footer>
    </div>
  );
}
