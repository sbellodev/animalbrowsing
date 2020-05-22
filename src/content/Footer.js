import React from 'react';
import styled from 'styled-components'


const Footer = () => {
    let backTo_str = "Back to top"
    if(localStorage.getItem("language") === "es") {
        backTo_str = "Vuelta pa'rriba"
    }
    return (
        <FooterContainer>
            <br/>
            <a href="#top">{backTo_str}</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <p>Created by <a href="https://twitter.com/gattoalaparato" target="_blank" rel="noopener noreferrer">@Gattoalaparato</a></p>
            <p>2020</p>
        </FooterContainer>
    )
}
const FooterContainer = styled.div`
    font-size: 14px;
    background-color: #A0D0E7;
    padding: 15px 10px 10px 10px;
`

export { Footer }