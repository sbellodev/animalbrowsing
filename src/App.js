import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Navbar } from './content/Navbar'
import { Footer } from './content/Footer'
import afont from './font/afont.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'afont';
    src: url(${afont}) format('opentype');
  }
  body {
    background-color: white;

    p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
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
  
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Footer/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 800px;
  margin: auto;
  font-family: afont;
`
export default App;