// pages/index.js

import "../app/globals.css"
import NavBar from "./NavBar"

export default function Email() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-mono ">
      <NavBar/>
      <main className="m-20 p-20">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Meu Site</h1>
        <p className="text-lg">
        </p>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Portfolio de Vitor Dias
      </footer>
    </div>
  );
}
