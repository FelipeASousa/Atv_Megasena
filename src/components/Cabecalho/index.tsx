import { HTMLAttributes } from "react";
import { Concurso, Resultado, WrapperSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    numero: number,
    dataApuracao: string
}


export function Cabecalho({numero, dataApuracao}:Props) {
    return (<WrapperSld>
                <Resultado>Resultado</Resultado>
                <Concurso>Concurso {numero} ({dataApuracao})</Concurso>
            </WrapperSld>
            );
}