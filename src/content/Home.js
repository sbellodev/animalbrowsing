import React from 'react';
import styled from 'styled-components'
const HomeVideo = ({url}) => <iframe src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const videoIFrame = styled.iframe`
border-bottom: 3px solid 
`

const Home = () => {
    return (
        <HomeContainer>
            <DescContainer>
                <Logo src="logo.PNG" alt="Animal Browsing's logo" />
                <h5>¡Bienvenid@ a Animal Browsing!</h5>
                <h5>Encuentra nabos a buen precio, PIN DODOs y todo sobre bichos, peces, criaturas del mar, fósiles...</h5>
                <h5>para Animal Crossing: New Horizons</h5>
                <h5>¡Buena suerte! y cuídate</h5>
                <Ellipsis />
            </DescContainer>
            <HomeContent>
                <p style={{paddingBottom: "30px"}}>¡Halloween ya está aquí! Consigue nuevos muebles y objetos, apariencias de terror y la fiesta de Halloween del 10 al 31 de Octubre...</p>
                <HomeVideo url={"https://www.youtube.com/embed/rmgN42ewTtE"} />
                <br/>
                <br/>
                <br/>
                <p>Novedades en camino <i>(actualizado el 30/10/2020)</i></p>
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
                <p style={{paddingBottom: "30px"}}>¡Nueva actualización de verano! Bucea, descubre las criaturas marinas y muchas más cosas...</p>
                <HomeVideo url={"https://www.youtube.com/embed/qVdYcOUOoVA"} />
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
    height: 20px;
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
    iframe {
        display: block;
        margin: 0 auto;
        width: 480px;
        height: 360px;
        border-radius: 18px;
        @media screen and (max-width: 570px){
            width: 360px;
            height: 280px;
        }
        @media screen and (max-width: 420px){
            width: 280px;
            height: 200px;
        }
    }
    @media screen and (max-width: 340px){
        width: 85%;
    }
`
const Logo = styled.img`
    width: 170px;
    display: block;
    margin: 0 auto;
    padding-bottom: 10px;
    @media screen and (max-width: 570px){
        width: 140px;
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