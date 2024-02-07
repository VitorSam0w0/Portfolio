import "../app/globals.css"
import NavBar from "./NavBar";
import ConteudoDaPaginaProjetos from  "./ConteudoDaPaginaProjetos"

const Projetos = () => {
  return (
    <div className="flex flex-col min-h-screen font-mono bg-gray-100">
      <NavBar/>
      <main className="m-20 p-20 max-w-screen-md mx-auto">
        <ConteudoDaPaginaProjetos/>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Portfolio de Vitor Dias
      </footer>
    </div>
  );
}

export default Projetos
