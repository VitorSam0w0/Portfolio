import Link from "next/link"
import Image from "next/image"
import capaRA from "../../img/capaRA.png"

const BlocosProjetoReclameAqui = () => {
    return(
        <div>
            <div className="m-4 p-3 rounded-md bg-gray-300">Em Breve<div><Link href="/ReclameAqui"><Image className="ease-in-out duration-300 hover:scale-90 w-full rounded-lg w-48 h-28 lg:min-w-96 md:min-h-40" src={capaRA} alt="Site de Reclame Aqui"></Image></Link></div><p><strong>Projeto de site Reclame Aqui</strong></p></div>
        </div>
    )
}

export default BlocosProjetoReclameAqui