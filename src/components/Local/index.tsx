import { HTMLAttributes } from "react";
import { Localização } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    localSorteio: string,
    nomeMunicipioUFSorteio: string
}



export function Local({localSorteio, nomeMunicipioUFSorteio}:Props){

    return(
        <Localização>Sorteio realizado no {localSorteio} em {nomeMunicipioUFSorteio}</Localização>
    )
}

export default Local;