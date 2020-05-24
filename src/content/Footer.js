import React from 'react';
import styled from 'styled-components'


const Footer = () => {
    let backTo_str = "Back to top"
    if(localStorage.getItem("language") === "es") {
        backTo_str = "Volver parriba"
    }
    return (
        <FooterContainer>
            <br/>
            <a href="#top">{backTo_str}</a>
            <br/>
            <br/>
            <br/><br/>
            <Disclaimer>
                <p>Created by <a href="https://twitter.com/gattoalaparato" target="_blank" rel="noopener noreferrer">@Gattoalaparato</a></p>
                <p>2020</p>
            </Disclaimer>
        </FooterContainer>
    )
}
const FooterContainer = styled.div`
    font-size: 14px;
    padding-top: 15px;
`
const Disclaimer = styled.div`
    background-color: #F5F2E3;
    padding: 15px 10px 10px 10px;
    border-radius: 4px;
    padding-bottom: 25px;
`

export { Footer }