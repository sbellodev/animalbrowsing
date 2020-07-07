import React from 'react';
import styled from 'styled-components'


const Footer = () => {
    let backTo_str = "Back to top"
    if(localStorage.getItem("language") === "es"){
        backTo_str = "Volver parriba"
    }
    return (
        <FooterContainer>
            <br/>
            <BackToTop href="#top">{backTo_str}</BackToTop>
            <br/>
            <br/><br/>
            <Disclaimer>
                <p>Created by <a href="https://twitter.com/gattoalaparato" target="_blank" rel="noopener noreferrer">@Gattoalaparato</a></p>
                <p>2020 - Animal Browsing v1.1</p>
            </Disclaimer>
        </FooterContainer>
    )
}
const FooterContainer = styled.footer`
    font-size: 14px;
    padding-top: 20px;
`
const BackToTop = styled.a`
    padding-left: 20px;
`
const Disclaimer = styled.div`
    font-weight: normal;
    background-color: #F5F2E3;
    padding: 20px 10px 20px 10px;
    border-radius: 4px;
    padding-bottom: 20px;
`

export { Footer }