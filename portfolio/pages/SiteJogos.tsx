import "../app/globals.css"
import NavBar from "./NavBar";
import Loading from "./Loading";
import BlocosProjetoReclameAqui from "./Blocos/BlocosProjetoReclameAqui";
import BlocosProjetoCalorias from "./Blocos/BlocosProjetoCalorias";

const SiteJogos = () => {
  return (
    <div className="flex flex-col min-h-screen font-mono bg-gray-100">
      <NavBar/>
      <main className="m-20 p-20 max-w-screen-md mx-auto">
        <div className="flex justify-center m-4">
            <h1 className="text-xl md:text-2xl">Site em construção!</h1>
        </div>
        <Loading/>
        <div className="flex justify-center m-4">
            <p>Um projeto de um site de Jogos, onde a ideia é fazer um sistema que mostra os jogos que estão em promoção</p>
        </div>
        <div className="flex flex-col 2xl:flex-row justify-center items-center">
          <div className="flex justify-left">
            <BlocosProjetoReclameAqui/>
          </div>
          <div className="flex justify-right">
            <BlocosProjetoCalorias/>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Portfolio de Vitor Dias
      </footer>
    </div>
  );
}

export default SiteJogos
