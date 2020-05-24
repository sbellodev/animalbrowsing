import React from 'react';
import styled from 'styled-components'
//import { useLocation} from "react-router";

const Home = () => {

    if(localStorage.getItem("language") === "es") {
        document.title = 'Inicio - Animal Browsing';
        return (
            <HomeContainer>
                <HomeContent>
                    <h4>5/18/2020 - Inauguración Animal Browsing</h4>
                    <br/>
                    <p>Hola! ¿Cansado de buscar por todas partes islas con buenos precios para vender tus nabos? ¿De buscar listas y listas de bichos y peces con todo lo que buscas? ¡Yo también!</p>
                    <p>Por eso creé Animal Browsing, para tenerlo todo a mano... <p/>
                    <p>Aquí encontraréis... 
                    <br/>
                    ¡<a href="/bugs">Lista</a> de bichos Definitiva!</p>
                    ¡<a href="/turnips">Sección</a> de precio de nabos Perfecta!</p>
                    <br/>
                    <p>A medida que pase el tiempo y según vuestro interés iré añadiendo más y más cositas ^^</p>
                    <p>Cualquier sugerencia, crítica o saludarme, podéis contactarme en
                         <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" > twitter </a> a @Gattoalaparato</p>
                    <p>Espero que os guste, hasta la próxima</p>
                    <br/>
                </HomeContent>
            </HomeContainer>
        )
    }
    else {
        document.title = 'Home - Animal Browsing';
        return (
            <HomeContainer>
                <HomeContent>
                <h4>5/18/2020 - Animal Browsing inauguration</h4>
                    <br/>
                    <p>Hi! Tired of looking over and over good turnip's prices everywhere?</p>
                    <p>Searching bugs and fish lists with all you need? ¡Me too!</p>
                    <p>That's why I made Animal Browsing.</p>
                    <p>Here you can find... 
                    <br/>
                    <a href="/bugs">The Definitive Bug's List</a>!
                    <a href="/turnips">The perfect Turnips price section</a>!</p>
                    <br/>
                    <p>Any suggestion, criticism or saying hi please feel free reach me on 
                    <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" > twitter </a> at @Gattoalaparato</p>
                    <p>Hope you like it! See ya</p>
                    <br/>
                </HomeContent>
            </HomeContainer>
        )
    }
}
const HomeContainer = styled.div`
    background-color:  #A0D0E7;
    font-size: 14px;
`
const HomeContent = styled.div`
    width: 80%;
    margin: auto;
`
export { Home }