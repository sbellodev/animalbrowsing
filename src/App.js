import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Navbar } from './content/Navbar'
import { Footer } from './content/Footer'
import afont from './font/afont.otf'
//import bk_image from './img/bckground1.jpg'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'afont';
    src: url(${afont}) format('opentype');
  }
  body {
    background-color: white;
    background-image: url("../img/bckground2.jpg");

    p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
    h5 {
      font-size: 14px;
    }
    a {
      text-decoration: none;
      color: blue;
    }
    button {
      border: 0;
    }
  }
 ` 

const App = () => {
  if(!localStorage.getItem("language") || localStorage.getItem("language") !== ("es" || "en")){
    localStorage.setItem("language", "en")
  }
  else {
    localStorage.setItem("language", navigator.language.slice(0, 2))
  }
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Footer/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 650px;
  background-color: #A0D0E7;
  margin: 0 auto;
  font-family: afont;
`
export default App;