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
            <BackToTop href="#top">{backTo_str}</BackToTop>
            <br/>
            <br/>
            <br/><br/>
            <Disclaimer>
                <p>Created by <a href="https://twitter.com/gattoalaparato" target="_blank" rel="noopener noreferrer">@Gattoalaparato</a></p>
                <p>2020 - Animal Crossing v1.0</p>
            </Disclaimer>
        </FooterContainer>
    )
}
const FooterContainer = styled.div`
    font-size: 14px;
    padding-top: 15px;
`
const BackToTop = styled.a`
    padding-left: 15px;
    font-weight: bold;
`
const Disclaimer = styled.div`
    background-color: #F5F2E3;
    padding: 15px 10px 10px 10px;
    border-radius: 4px;
    padding-bottom: 25px;
`

export { Footer }