import { Data, Premio } from "./styles";

type Props = {
    dataProximoConcurso: string
    premio: number
}

export function Descricao({dataProximoConcurso, premio }:Props) {

    return(
        <>
        <p></p>
        <Data>Estimativa de prêmio do proximo concurso {dataProximoConcurso}</Data>
        <Premio>R$ {premio}</Premio>
        </>
    )
}

export default Descricao;