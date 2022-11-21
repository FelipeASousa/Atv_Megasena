import { Numero } from "./styles";
type Props = {
    listaDezenas : string[]
}

export function  NumerosSorteados( {listaDezenas}: Props) {
    
    const dezenas = listaDezenas;

    return(
            <>   
                {dezenas && dezenas.map((n) => (
                    <Numero key={n}>{n}</Numero>
                ))}
            </>
    )
}

export default NumerosSorteados;