import React from 'react';
import styled from 'styled-components'

const Home = () => {

    if(localStorage.getItem("language") === "es") {
        document.title = 'Animal Browsing';
        return (
            <HomeContainer>
                <HomeContent>
                    <p>Novedades en camino:</p>
                    <ul>
                        <li>Lista de fósiles</li>
                        <li>Lista de obras de arte</li>
                        <li>Lista de esculturas</li>
                    </ul>
                    <br/>
                    <h4>5/18/2020 - Inauguración Animal Browsing</h4>
                    <br/>
                    <picture>
                        <source srcSet={"tw_profile_webp.webp"} />
                        <source srcSet={"tw_profile.jpg"} />
                        <ImageProfile src={"tw_profile.jpg"} alt="twitter profile"/>
                    </picture>
                    <br/>
                    <p>¿Cansado de buscar por todas partes buenos precios para vender tus nabos?</p>
                    <br/>
                    <p>¿De buscar listas y listas de bichos y peces con todo lo que buscas? ¡Yo también!</p>
                    <p>Por eso creé Animal Browsing, para tenerlo todo a mano... <p/>
                    <p>Aquí puedes encontrar... 
                    <br/><br/>
                    ¡<a href="/bugs">Lista</a> de bichos Definitiva!</p>
                    ¡<a href="/turnips">Sección</a> de precio de nabos Perfecta!</p>
                    <br/>
                    <p>A medida que pase el tiempo y según el interés iré añadiendo más y más cosas ^^</p>
                    <p>Cualquier sugerencia, crítica o saludarme, puedes contactarme</p>
                    <p>en <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" > twitter </a> a @Gattoalaparato</p>
                    <p>o un <a href = "mailto:gatto@animalbrowsing.com">email</a> a gatto@animalbrowsing.com</p>
                    <br/>
                    <p>Espero que os guste ¡nos vemos!</p>
                    <br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </HomeContent>
            </HomeContainer>
        )
    }
    else {
        document.title = 'Animal Browsing';
        return (
            <HomeContainer>
                <HomeContent>
                <p>Upcoming features:</p>
                    <ul>
                        <li>Fossil list</li>
                        <li>Paintings list</li>
                        <li>Statues list</li>
                    </ul>
                <br/>
                <h4>5/18/2020 - Animal Browsing inauguration</h4>
                <br/>
                <picture>
                    <source srcSet={"tw_profile_webp.webp"} />
                    <source srcSet={"tw_profile.jpg"} />
                    <ImageProfile src={"tw_profile.jpg"} alt="twitter profile"/>
                </picture>
                <br/>
                <p>Tired of looking over and over good turnip's prices everywhere?</p>
                <br/>
                <p>Searching bugs and fish lists with all you need? ¡Me too!</p>
                <p>That's why I made Animal Browsing.</p>
                <p>Here you can find... 
                <br/>
                <a href="/bugs">The Definitive Bug's List</a>!<br/>
                <a href="/turnips">The perfect Turnips price section</a>!</p>
                <br/>
                <p>Any suggestion, criticism or saying hi please feel free reach me on 
                <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" > twitter </a> at @Gattoalaparato</p>
                <p>or send me an email to <a href = "mailto:gatto@animalbrowsing.com">gatto@animalbrowsing.com</a></p>
                <br/>
                <p>Hope you like it! And have a good one</p>
                <br/>
                </HomeContent>
                <br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </HomeContainer>
        )
    }
}
const HomeContainer = styled.main`
    background-color: #CCE1F2;
    font-size: 16px;
    line-height: 20px;
    padding-top: 30px;
`
const HomeContent = styled.div`
    width: 80%;
    margin: auto;
    border-bottom: 1px solid ghostwhite;
    padding-bottom: 20px;
`
const ImageProfile = styled.img`
    width: 60px;
    border-radius: 10%;
    display: block;
    float: left;
    margin-right: 10px
`
export { Home }