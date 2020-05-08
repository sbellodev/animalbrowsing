import React from 'react';
import styled from 'styled-components'
const URL = 'http://localhost:9000/twitter'
fetch(URL)
    .then(res => res.text())
    .then(json => console.log(json))


const Turnip = () => {
    return (
        <TurnipContainer>
            <p>Hello, this is Turnip</p>
            <br/>
            {/* <a className="twitter-timeline" style={{textAlign: "center"}} data-width="90%" data-theme="dark" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>  */}
        </TurnipContainer>
    )
}
const TurnipContainer = styled.div`
    font-family: afont;
    background-color: #A0D0E7;
    width: 100%;
    height: 99vh;
    padding-top: 10%;
    text-align: center;
    a, a:visited {
        color: blue;
    }
`
export { Turnip }