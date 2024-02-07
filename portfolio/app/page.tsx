import NavBar from "@/pages/NavBar";
import CIP from "@/pages/ConteudoDaPaginaInicial";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-mono bg-gray-100">
      <NavBar />
      <main className="m-20 p-20 max-w-screen-md mx-auto">
        <CIP/>
      </main>
      <div className="bg-gray-800 text-white p-4 text-center">
        © 2024 Portfolio de Vitor Dias
      </div>
    </div>
  );
}

export default Home;
