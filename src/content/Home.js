import React from 'react';
import styled from 'styled-components'

const Home = () => {

    //if(localStorage.getItem("language") === "es"){
        return (
            <HomeContainer>
                <DescContainer>
                    <h5>¡Bienvenid@ a <a href="/">Animal Browsing</a>!</h5>
                    <h5>Todo lo que necesitas acerca de lista de peces, bichos, precios de nabos y más...</h5>
                    <h5>para Animal Crossing: New Horizons</h5>
                    <h5>¡Buena suerte! y cuídate</h5>
                    <Ellipsis />
                </DescContainer>
                <HomeContent>
                    <p>Novedades en camino <i>(actualizado el 7/7/2020)</i></p>
                    <ul>
                        <li><span>Lista de fósiles</span> <a href="/fossil">¡Nuevo!</a></li>
                        <li><span>Buscar bichos y peces por Temporada actual</span></li>
                        <li><span>Lista de criaturas marinas</span><a href="/sea-creatures"> Nuevo!</a></li>
                        <li>Lista de obras de arte</li>
                        <li>Lista de esculturas</li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <picture>
                        <source type="image/webp" srcSet={"tw_profile_webp.webp"} />
                        <ImageProfile src={"tw_profile.jpg"} alt="twitter profile" />
                    </picture>
                    <br/>
                    <p>¿Cansado de buscar por todas partes buenos precios para vender tus nabos?</p>
                    <br/>
                    <p>¿De buscar listas y listas de bichos y peces con todo lo que buscas? ¡Yo también!</p>
                    <p>Por eso creé Animal Browsing, para tenerlo todo a mano... </p>
                    <p>Aquí puedes encontrar... </p>
                    <br/>
                    <p>¡<a href="/bugs">Lista</a> de bichos Definitiva!</p>
                    <p>¡<a href="/turnips">Sección</a> de precio de nabos Perfecta!</p>
                    <br/>
                    <p>A medida que pase el tiempo y según el interés iré añadiendo más y más cosas ^^</p>
                    <p>Cualquier sugerencia, crítica o saludarme, puedes contactarme</p>
                    <p>en <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" > twitter </a> a @Gattoalaparato</p>
                    <br/>
                    <p>Espero que os guste ¡nos vemos!</p>
                </HomeContent>
                    <br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </HomeContainer>
        )
    }
    // else {
    //     return (
    //         <HomeContainer>
    //             <DescContainer>
    //                 <h5>Henlo! Welcome to <a href="/">Animal Browsing</a></h5>
    //                 <h5>Get the latest turnips prices, bugs and fish's list...</h5>
    //                 <h5>about Animal Crossing: New Horizons</h5>
    //                 <h5>Have a good one! And take care</h5>
    //                 <Ellipsis />
    //             </DescContainer>
    //             <HomeContent>
    //                 <p>Upcoming features <i>(updated 7/7/2020)</i></p>
    //                 <ul>
    //                     <li><span>Fossils list</span><a href="/fossil"> New!</a></li>
    //                     <li><span>Filter bugs and fish lists by current Season</span></li>
    //                     <li><span>Sea creatures list</span><a href="/sea-creatures"> New!</a></li>
    //                     <li>Paintings list</li>
    //                     <li>Statues list</li>
    //                 </ul>
    //                 <br/>
    //                 <br/>
    //                 <br/>
    //                 <picture>
    //                     <source type="image/webp" srcSet={"tw_profile_webp.webp"} />
    //                     <ImageProfile src={"tw_profile.jpg"} alt="twitter profile" />
    //                 </picture>
    //                 <br/>
    //                 <p>Tired of looking over and over good turnip's prices everywhere?</p>
    //                 <br/>
    //                 <p>Searching bugs and fish lists with all you need? ¡Me too!</p>
    //                 <p>That's why I made Animal Browsing.</p>
    //                 <p>Here you can find... </p>
    //                 <br/>
    //                 <p><a href="/bugs">The Definitive Bug's List</a>!</p>
    //                 <p><a href="/turnips">The perfect Turnips price section</a>!</p>
    //                 <br/>
    //                 <p>Any suggestion, criticism or saying hi please feel free reach me on 
    //                 <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" > twitter </a> at @Gattoalaparato</p>
    //                 <br/>
    //                 <p>Hope you like it! And have a good one</p>
    //                 <br/>
    //             </HomeContent>
    //                 <br/>
    //                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    //         </HomeContainer>
    //     )
    // }
//}

const HomeContainer = styled.main`
    background-color: #CCE1F2;
    font-size: 16px;
    line-height: 20px;
`
const DescContainer = styled.header`
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
const HomeContent = styled.div`
    width: 80%;
    margin: auto;
    border-bottom: 3px solid ghostwhite;
    padding-top: 30px;
    padding-bottom: 30px;
    span {
        color: green;
    }
    ul {
        border-bottom: 3px solid ghostwhite;
        padding-bottom: 30px
    }
`
const ImageProfile = styled.img`
    width: 60px;
    border-radius: 10%;
    display: block;
    float: left;
    margin-right: 10px
`
export { Home }