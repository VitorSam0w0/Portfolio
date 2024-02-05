// pages/index.js

import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-mono">
      {/* Navbar */}
      <nav className="bg-gray-600 p-4 text-white text-center rounded-b-2xl ">
        <div className="flex flex-col justify-between sm:flex-row justify-between items-center">
          <div>
            <Image className="w-16 h-16 md:w-20 md:h-20" src={Logo} alt="Imagem logo" />
          </div>
          <div className="flex space-x-4 pt-3 pb-3 min-[320px]:text-center">
           <ul className="flex items-center">
             <li className="p-4">
               <Link href="/" legacyBehavior><a className="hover:text-gray-300">Inicio</a></Link>
             </li>
              <li className="p-4">
                <Link href="/Projetos" legacyBehavior><a className="hover:text-gray-300">+Projetos</a></Link>
              </li>
              <li className="p-4">
                <Link href="/Email" legacyBehavior><a className="hover:text-gray-300">Email</a></Link>
              </li>
              {/* Adicione mais links conforme necessário */}
           </ul>
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
