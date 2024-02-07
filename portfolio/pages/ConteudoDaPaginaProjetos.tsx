import BlocosProjetoReclameAqui from "./Blocos/BlocosProjetoReclameAqui"
import BlocosProjetoJogos from "./Blocos/BlocosProjetoJogos"
import BlocosProjetoCalorias from "./Blocos/BlocosProjetoCalorias"

const PaginaProjetos = () => {
    return (
        <div>
            <div className="pb-4">
                <h1 className="flex justify-center text-xl md:text-2xl">Meu Portfolio ainda está em desenvolvimento...</h1>
                <p>Estou trabalhando nos projetos abaixo:</p>
            </div>
        <div className="flex flex-col justify-center 2xl:flex-row">
            <BlocosProjetoReclameAqui/>
            <BlocosProjetoJogos/>
            <BlocosProjetoCalorias/>
        </div>
        </div>
    )
}

export default PaginaProjetos