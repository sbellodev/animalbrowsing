import React from 'react';
import styled from 'styled-components'

const Description = ({actualIndex}) => {
    if(localStorage.getItem("language") === "es") {
        switch (actualIndex) {
            case "Home":
                return (
                    <Container>
                        <h5>Bienvenido a ABBA!11</h5>
                        <h5>Consulta precios de nabos, datos de insectos... </h5>
                        <h5>¡Buena suerte! y cuídate</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <h5>Ultimos, nuevos y recién salidos precios de nabos</h5>
                        <h5>Poder es creer</h5>
                        <h5>El poder de... cosas! bayas nabos... bueno... </h5>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
            case "Fish":
                return (
                    <Container>
                        <h5>Tablas de bichos... usa los botones con la responsabilidad que tal poder conlleva</h5>
                        <Ellipsis />
                    </Container>
                )
            default: 
                return <div>Ha habido un fallo en la Matrix. Por favor, contacta al webmaster</div>
        }
    }
    else {
        switch (actualIndex) {
            case "Home":
                return (
                    <Container>
                        <h5>Henlo! Welcome to ABBA!!1</h5>
                        <h5>Freel free to consult turnip prices, bugs info... </h5>
                        <h5>¡Good luck! and take care</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <h5>Here you can find good prices for turnips. </h5>
                        <h5>Believing is seeing</h5>
                        <h5>The power of... things? bells stonks goody</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
            case "Fish":
                return (
                    <Container>
                        <h5>If needed, you can use the search option or order by price / alphabetically</h5>
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
    max-height: 220px;
    h5 {
        width: 70%;
        margin: 0 auto;
        font-size: 16px;
    }
    @media (max-width: 420px) {
        h5 {
            width: 80%;
        }
      }
    @media (max-width: 570px) {
        h5 {
            font-size: 14px;
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