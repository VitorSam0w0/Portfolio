import Image from "next/image"
import capaRA from "../img/capaRA.png"
import CapaJogos from "../img/capaJogos.jpg"
import CapaFrutas from "../img/capaFrutas.png"
import Link from "next/link"

const PaginaProjetos = () => {
    return (
        <div>
            <div className="pb-4">
                <h1 className="flex justify-center text-xl md:text-2xl">Meu Portfolio ainda está em desenvolvimento...</h1>
                <p>Estou trabalhando nos projetos abaixo:</p>
            </div>
        <div className="flex flex-col justify-center 2xl:flex-row">
            <div className="m-4 p-3 rounded-md bg-gray-300">Em Breve<div><Link href="/ReclameAqui"><Image className="ease-in-out duration-300 hover:scale-90 w-full rounded-lg w-48 h-20 md:min-w-96 md:min-h-40" src={capaRA} alt="Site de Animes"></Image></Link></div><p><strong>Projeto de site Reclame Aqui</strong></p></div>
          <div className="m-4 p-3 rounded-md bg-gray-300">Em Breve<div><Link href="/SiteJogos"><Image className="ease-in-out duration-300 hover:scale-90 w-full rounded-lg w-48 h-20 md:min-w-96 md:min-h-40" src={CapaJogos} alt="Site de Animes"></Image></Link></div><strong>Projeto de site de Jogos</strong></div>
          <div className="m-4 p-3 rounded-md bg-gray-300">Em Breve<div><Link href="/SiteCalorias"><Image className="ease-in-out duration-300 hover:scale-90 w-full rounded-lg w-48 h-20 md:min-w-96 md:min-h-40" src={CapaFrutas} alt="Site de Animes"></Image></Link></div><strong>Projeto de site Calculadora de calorias</strong></div>
        </div>
        </div>
    )
}

export default PaginaProjetos