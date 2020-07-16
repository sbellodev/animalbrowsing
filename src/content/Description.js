import React from 'react';
import styled from 'styled-components'
//import { Helmet } from 'react-helmet'

const Description = ({actualIndex}) => {  
    //if(localStorage.getItem("language") === "es"){
    switch (actualIndex){
        case "Turnips":
            return (
                <Container>
                    <h5>Encuentra en vivo buenos precios y PIN Dodo para vender tus nabos</h5>
                    <h5>Sólo observa...</h5>
                    <Ellipsis />
                </Container>
            )
        case "Bugs":
            return (
                <Container>
                    <h5>Lista Definitiva de bichos e insectos.</h5>
                    <h5>¿Sabías que hay 19 tipos de escarabajos? <br/>Pues mira tú, no parecen pocos...</h5>
                    <Ellipsis />
                </Container>
            )
        case "Fish":
            return (
                <Container>
                    <h5>Lista Definitiva chulísima de peces</h5>
                    <h5>¡Pesca y que no te pesquen!</h5>
                    <Ellipsis />
                </Container>
            )
        case "Sea-creatures":
            return (
                <Container>
                    <h5>Desde la estrella de mar hasta la alga wakame, dale que dale</h5>
                    <h5>Encuentra todas las criaturas de mar, incluído yo</h5>
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
            return <div>Hubo un fallo en la Matrix. Por favor, contacta con el webmaster.</div>
    }
}
    //}
//     else {
//         switch (actualIndex){
//             case "Turnips":
//                 return (
//                     <Container>
//                         <h5>Exchange turnips for the latest prices from Twitter</h5>
//                         <h5>You don't need to search anything...</h5>
//                         <h5>Just watch!</h5>
//                         <Ellipsis />
//                     </Container>
//                 )
//             case "Bugs":
//                 return (
//                     <Container>
//                         <h5>The Definitive List of Bugs</h5>
//                         <h5>If it's not that Definitive for you, please send me your <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >thoughts</a>  </h5>
//                         <h5>Good luck!</h5>
//                         <Ellipsis />
//                     </Container>
//                 )
//             case "Fish":
//                 return (
//                     <Container>
//                         <h5>A really, like, really cool and Definitive List of Fish</h5>
//                         <h5>Good luck fishing!</h5>
//                         <Ellipsis />
//                     </Container>
//                 )
//             case "Sea-creatures":
//                 return (
//                     <Container>
//                         <h5>Find all the deep-sea creatures in the island.</h5>
//                         <h5>Leave a breadcrumb trail so you don't get lost!</h5>
//                         <Ellipsis />
//                     </Container>
//                 )
//             case "Fossil":
//                 return (
//                     <Container>
//                         <h5>Search for the latest oldest fossils in the town</h5>
//                         <h5>So smalls</h5>
//                         <Ellipsis />
//                     </Container>
//                 )
//             default: 
//                 return <div>Error loading description. Please contact the webmaster</div>
//         }
//     }
//}

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