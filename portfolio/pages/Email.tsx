// pages/Email.js

import Link from "next/link";
import React from "react";

export default function Email() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar (pode ser extraído para um componente reutilizável) */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="hover:text-gray-300">Home</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/Projetos" className="hover:text-gray-300">Projetos</Link>
            <span className="text-gray-300">Email</span>
            {/* Adicione mais links conforme necessário */}
          </div>
        </div>
      </nav>

      {/* Conteúdo da página Email */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-lg">
          Informações de contato e formulário de email vão aqui...
        </p>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Meu Site
      </footer>
    </div>
  );
}
