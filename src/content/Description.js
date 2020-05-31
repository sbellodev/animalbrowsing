import React from 'react';
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Description = ({actualIndex}) => {
    let helmet = {
            "home_title" : "Animal Browsing",
            "home_description" : "ENG/ESP - In Animal Browsing you can sell your turnips high, get list of bugs, fish, fossils and more...",
            "turnips_title" : "Turnips Prices - Animal Browsing",
            "turnips_description" : "ENG/ESP - Updated turnips prices for you to sell",
            "bugs_title" : "Bugs list - Animal Browsing", 
            "bugs_description" : "List of bugs with all the information you need for Animal Crossing.", 
            "fish_title" : "Fish list - Animal Browsing", 
            "fish_description" : "List of fish with all the information you need for Animal Crossing.", 
            "fossil_title" : "Fossils list - Animal Browsing", 
            "fossil_description" : "List of fossils with all the information you need for Animal Crossing.", 
        }
    
    if(localStorage.getItem("language") === "es"){
        helmet = {
            "home_title" : "Animal Browsing",
            "home_description" : "ENG/ESP - En Animal Browsing podrás vender tus nabos, consultar lista de bichos, peces y fósiles y más... para Animal Crossing.",
            "turnips_title" : "Vender nabos a buen precio - Animal Browsing",
            "turnips_description" : "ENG/ESP - Los precios más recientes del mercado para vender tus nabos en Animal Crossing.",
            "bugs_title" : "Lista de bichos - Animal Browsing", 
            "bugs_description" : "Lista de bichos con la información actualizada al día para Animal Crossing.", 
            "fish_title" : "Lista de peces - Animal Browsing", 
            "fish_description" : "Lista de peces con la información actualizada al día para Animal Crossing.", 
            "fossil_title" : "Lista de fósiles - Animal Browsing", 
            "fossil_description" : "Lista de fósiles actualizada al día para Animal Crossing.", 
        }
        switch (actualIndex){
            case "Home":
                return (
                    <Container>
                        <Helmet >
                            <html lang="es" />
                            <title>{helmet.home_title}</title>
                            <meta name="description" content={helmet.home_description} />
                        </Helmet>
                        <h5>¡Bienvenid@ a <a href="/">Animal Browsing</a>!</h5>
                        <h5>Todo lo que necesitas acerca de lista de peces, bichos, precios de nabos y más...</h5>
                        <h5>para Animal Crossing: New Horizons</h5>
                        <h5>¡Buena suerte! y cuídate</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <Helmet >
                            <html lang="es" />
                            <title>{helmet.turnips_title}</title>
                            <meta name="description" content={helmet.turnips_description}/>
                        </Helmet>
                        <h5>Recibe *automáticamente* los mejores precios de nabos del mercado</h5>
                        <h5>Sin SPAM, sin tonterías</h5>
                        <h5>¡No tienes que hacer nada! Sólo observa...</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
                return (
                    <Container>
                        <Helmet >
                            <html lang="es" />
                            <title>{helmet.bugs_title}</title>
                            <meta name="description" content={helmet.bugs_description}/>
                        </Helmet>
                        <h5>Lista Definitiva de bichos e insectos.</h5>
                        <h5>Si ves que no es tan Definivita, no dudes en enviarme una <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >sugerencia</a> </h5>
                        <h5>¡Suerte!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fish":
                return (
                    <Container>
                        <Helmet >
                            <html lang="es" />
                            <title>{helmet.fish_title}</title>
                            <meta name="description" content={helmet.fish_description}/>
                        </Helmet>
                        <h5>Lista Definitiva chulísima de peces</h5>
                        <h5>¡Mucha suerte en tu pesca!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fossil":
                return (
                    <Container>
                        <Helmet >
                            <html lang="es" />
                            <title>{helmet.fossil_title}</title>
                            <meta name="description" content={helmet.fossil_description}/>
                        </Helmet>
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
            case "Home":
                return (
                    <Container>
                        <Helmet >
                            <html lang="en" />
                            <title>{helmet.home_title}</title>
                            <meta name="description" content={helmet.home_description} />
                        </Helmet>
                        <h5>Henlo! Welcome to <a href="/">Animal Browsing</a></h5>
                        <h5>Get the latest turnips prices, bugs and fish's list...</h5>
                        <h5>about Animal Crossing: New Horizons</h5>
                        <h5>¡Have a good one! And take care</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <Helmet >
                            <html lang="en" />
                            <title></title>
                            <meta name="description" content=""/>
                        </Helmet>
                        <h5>Get *automatically* the best turnips prices from Twitter</h5>
                        <h5>You don't need to search anything...</h5>
                        <h5>¡Just watch!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
                return (
                    <Container>
                        <Helmet >
                            <html lang="en" />
                            <title></title>
                            <meta name="description" content=""/>
                        </Helmet>
                        <h5>The Definitive List of Bugs</h5>
                        <h5>If it's not that Definitive for you, please send me your <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >thoughts</a>  </h5>
                        <h5>Good luck!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fish":
                return (
                    <Container>
                        <Helmet >
                            <html lang="en" />
                            <title></title>
                            <meta name="description" content=""/>
                        </Helmet>
                        <h5>A really, like, really cool and Definitive List of Fish</h5>
                        <h5>Good luck fishing!</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Fossil":
                return (
                    <Container>
                        <Helmet >
                            <html lang="en" />
                            <title></title>
                            <meta name="description" content=""/>
                        </Helmet>
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