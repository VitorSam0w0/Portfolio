// index.js
import NavBar from "@/pages/NavBar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-mono bg-gray-100">
      <NavBar />
      <main className="m-20 p-20">
        <div className="w-50 h-30 bg-gray-600"></div>
        <div className="w-50 h-30 bg-gray-600"></div>
        <div className="w-50 h-30 bg-gray-600"></div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Portfolio de Vitor Dias
      </footer>
    </div>
  );
}

export default Home;
