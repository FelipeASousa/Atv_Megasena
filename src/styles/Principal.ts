import styled from 'styled-components'

export const Container = styled.div<{backgroundColor:string}>`
    background-color: ${props => props.backgroundColor} !important;
    height: 43.6em;

`;

export const Area = styled.div<{backgroundColor:string}>`
    background-color: ${props => props.backgroundColor};
    width: 80%;
    min-height: 500px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    
`;

export const Titulo = styled.h2`
    color: #4682b4;
`;