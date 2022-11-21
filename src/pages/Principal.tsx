import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import Acumulado from '../components/Acumulado';
import { Cabecalho } from '../components/Cabecalho';
import Descricao from '../components/Descricao';
import Local from '../components/Local';
import NumerosSorteados from '../components/numerosSorteados';
import services from '../services';
import { Props } from '../types';
import { Area, Container } from '../styles/Principal';
import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Principal() {
    const[concurso, setConcurso] =   useState({} as Props);
    const [toggled, setToggled] = React.useState(false);
    const dark = 'black'
    const light = 'white'
    const[tema,setTema] = useState(light)

    useEffect(
        function() {
            (
                async function() {
                    const numero = Math.floor(Math.random() * 2533);
                    const concurso: Props = await services.get(numero);
                    await setConcurso(concurso)
                    console.log(concurso);
                }
            )()
        },[]
    )
    const handleBackground = () => {
        if(toggled === false){
            setTema(dark)
        }
        else{
            setTema(light)
        }
    }
    
    return (
        <>
           <Container backgroundColor={tema}>
            <Area backgroundColor={tema}>
                <p></p>
                <LightModeIcon color="primary"/><Switch   
                    checked={toggled}
                    onChange={e => setToggled(e.target.checked)}
                    onClick={handleBackground}
                    id="tema"
                    
                /><DarkModeIcon color="primary"/>
                {/* <input type="checkbox" onChange={handleBackground} data-toggle="toggle" id="tema"/> */}
                <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
                {concurso.acumulado && <Acumulado/>}
                <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio}/>
                <NumerosSorteados listaDezenas={concurso.listaDezenas}/>
                <Descricao dataProximoConcurso={concurso.dataProximoConcurso} premio={concurso.valorEstimadoProximoConcurso}/>
                </Area>
           </Container>

        </>
    );
        
        
}