import React from 'react';
import styled from 'styled-components'
import { useLocation} from "react-router";

const Home = () => {
    let location = useLocation();
    if(localStorage.getItem("language") === "es") {
        document.title = 'Inicio - ABBA';
        return (
            <HomeContainer>
                <HomeContent>
                    <h4>5/18/2020 - Inauguración ABBA</h4>
                    <p>This is <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >@Gattoalaparato</a></p>
                    <p>I make this eas... digoo todo esto es para encontrar nabos a buen precio e info sobre bichos (y espero que más cosas en el futuro?)</p>
                    <p>Cualquier sugerencia o incluso saludarme, podéis contactarme en <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >twitter</a></p>
                    <p>Nos vemos...</p>
                    <br/>
                </HomeContent>
            </HomeContainer>
        )
    }
    else {
        document.title = 'Home - ABBA';
        return (
            <HomeContainer>
                <HomeContent>
                    <h4>Inaugurating ABBA - 5/18/2020</h4>
                    <p>This is <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >@Gattoalaparato</a></p>
                    <p>I make this easily cool stuff about turnips prices and bugs (also more things incoming?)</p>
                    <p>Any suggestion, yelling or just to say Hi feel free to reach me at <a href={"https://www.twitter.com/gattoalaparato"} target="_blank" rel="noopener noreferrer" >twitter</a></p>
                    <p>See ya! Have a good one</p>
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