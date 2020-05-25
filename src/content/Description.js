import React from 'react';
import styled from 'styled-components'

const Description = ({actualIndex}) => {
    if(localStorage.getItem("language") === "es") {
        switch (actualIndex) {
            case "Home":
                return (
                    <Container>
                        <h5>Bienvenido a Animal Browsing!!1</h5>
                        <h5>Todo lo que necesitas acerca de lista de peces, bichos, precios de nabos y más ... en Animal Crossing: New Horizons</h5>
                        <h5>¡Buena suerte! y cuídate</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <h5>Recibe de forma inmediata los precios de nabos más actuales del mercado de Twitter</h5>
                        <h5>¡No tienes que hacer nada! Sólo observa...</h5>
                        <h5>Se actualiza automáticamente</h5>
                        <br/>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
                return (
                    <Container>
                        <h5>Lista Definitiva de bichos e insectos.</h5>
                        <h5>Si ves que no es tan Definivita, no dudes en enviarme una <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >sugerencia</a> </h5>
                        <h5>¡Suerte!</h5>
                        <br/>
                        <Ellipsis />
                    </Container>
                )
            case "Fish":
                return (
                    <Container>
                        <h5>Lista Definitiva chulísima de peces</h5>
                        <h5>¡Mucha suerte en tu pesca!</h5>
                        <br/>
                        <Ellipsis />
                    </Container>
                )
            default: 
                return <div>Hubo un fallo en la Matrix. Por favor, contacta al webmaster.</div>
        }
    }
    else {
        switch (actualIndex) {
            case "Home":
                return (
                    <Container>
                        <h5>Henlo! Welcome to Animal Browsing!</h5>
                        <h5>All you need about bugs and fish's list, turnips prices on Twitter... about Animal Crossing: New Horizons </h5>
                        <h5>¡Have a good one! And take care</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <h5>Get instantly all the recent turnips prices from Twitter</h5>
                        <h5>¡Just sit down and watch!</h5>
                        <h5>It updates automatically</h5>
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
            default: 
                return <div>Error loading description. Please contact the webmaster</div>
        }
    }
}

const Container = styled.div`
    background-color: #F5F2E3;
    display: grid;
    padding-top: 20px;
    text-align: center;
    max-height: 320px;
    h5 {
        width: 70%;
        margin: 0 auto;
        font-size: 18px;
    }
    @media (max-width: 420px) {
        h5 {
            width: 80%;
        }
      }
    @media (max-width: 570px) {
        h5 {
            font-size: 16px;
        }
    }
`
const Ellipsis = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 20px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: #A0D0E7;
`
export { Description }