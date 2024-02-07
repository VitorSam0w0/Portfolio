import Link from "next/link"
import Image from "next/image"
import CapaJogos from "../../img/capaJogos.jpg"

const BlocosProjetoJogos = () => {
    return(
        <div>
          <div className="m-4 p-3 rounded-md bg-gray-300">Em Breve<div><Link href="/SiteJogos"><Image className="ease-in-out duration-300 hover:scale-90 w-full rounded-lg w-48 h-20 md:min-w-96 md:min-h-40" src={CapaJogos} alt="Site de Jogos"></Image></Link></div><strong>Projeto de site de Jogos</strong></div>
        </div>
    )
}

export default BlocosProjetoJogos