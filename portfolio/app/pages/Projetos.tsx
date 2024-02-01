// pages/Projetos.js

import Link from "next/link";

export default function Projetos() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar (pode ser extraído para um componente reutilizável) */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="hover:text-gray-300">Home</a>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <span className="text-gray-300">+Projetos</span>
            <Link href="/Email">
              <a className="hover:text-gray-300">Email</a>
            </Link>
            {/* Adicione mais links conforme necessário */}
          </div>
        </div>
      </nav>

      {/* Conteúdo da página +Projetos */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Meus Projetos</h1>
        <p className="text-lg">
          Listagem de projetos vai aqui...
        </p>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Meu Site
      </footer>
    </div>
  );
}
