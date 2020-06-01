import React from 'react';
import styled from 'styled-components'
//import { Helmet } from 'react-helmet'

const Description = ({actualIndex}) => {  
    if(localStorage.getItem("language") === "es"){
        switch (actualIndex){
            case "Turnips":
                return (
                    <Container>
                        <h5>Recibe *automáticamente* los mejores precios de nabos del mercado</h5>
                        <h5>Sin SPAM, sin tonterías</h5>
                        <h5>¡No tienes que hacer nada! Sólo observa...</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
                return (
                    <Container>
                        <h5>Lista Definitiva de bichos e insectos.</h5>
                        <h5>Si ves que no es tan Definivita, no dudes en enviarme una <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >sugerencia</a> </h5>
                        <h5>¡Suerte!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fish":
                return (
                    <Container>
                        <h5>Lista Definitiva chulísima de peces</h5>
                        <h5>¡Mucha suerte en tu pesca!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fossil":
                return (
                    <Container>
                        <h5>Lista de todos los fósiles disponibles hasta ahora</h5>
                        <h5>Fosile in domine</h5>
                        <Ellipsis />
                    </Container>
                )
            default: 
                return <div>Hubo un fallo en la Matrix. Por favor, contacta al webmaster.</div>
        }
    }
    else {

        switch (actualIndex){
            case "Turnips":
                return (
                    <Container>
                        <h5>Get *automatically* the best turnips prices from Twitter</h5>
                        <h5>You don't need to search anything...</h5>
                        <h5>¡Just watch!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
                return (
                    <Container>
                        <h5>The Definitive List of Bugs</h5>
                        <h5>If it's not that Definitive for you, please send me your <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >thoughts</a>  </h5>
                        <h5>Good luck!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fish":
                return (
                    <Container>
                        <h5>A really, like, really cool and Definitive List of Fish</h5>
                        <h5>Good luck fishing!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fossil":
                return (
                    <Container>
                        <h5>Search for the latest oldest fossils in the town</h5>
                        <h5>So smalls</h5>
                        <Ellipsis />
                    </Container>
                )
            default: 
                return <div>Error loading description. Please contact the webmaster</div>
        }
    }
}

const Container = styled.header`
    background-color: #F5F2E3;
    display: grid;
    padding-top: 30px;
    text-align: center;
    max-height: 320px;
    h5 {
        width: 70%;
        margin: 0 auto;
        font-size: 18px;
    }
    @media screen and (max-width: 570px){
        h5 {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 420px){
        h5 {
            width: 80%;
        }
      }
`
const Ellipsis = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 30px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: #CCE1F2;
`
export { Description }