import Link from "next/link"
import Image from "next/image"
import CapaFrutas from "../../img/capaFrutas.png"

const BlocosProjetoCalorias = () => {
    return(
        <div>
          <div className="m-4 p-3 rounded-md bg-gray-300">Em Breve<div><Link href="/SiteCalorias"><Image className="ease-in-out duration-300 hover:scale-90 w-full rounded-lg w-48 h-20 md:min-w-96 md:min-h-40" src={CapaFrutas} alt="Site de Calorias"></Image></Link></div><strong>Projeto de site Calculadora de calorias</strong></div>
        </div>   
    )
}

export default BlocosProjetoCalorias