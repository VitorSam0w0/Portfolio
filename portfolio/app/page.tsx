// pages/index.js

import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-600 p-4 text-white text-center rounded-b-2xl ">
        <div className="flex flex-col justify-between sm:flex-row justify-between items-center">
          <div>
            <Image className="w-20 h-20 md:w-16 md:h-16  sm:w-14 sm:h-14" src={Logo} alt="Imagem logo" />
          </div>
          <div className="flex space-x-4 pt-10 min-[320px]:text-center">
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
