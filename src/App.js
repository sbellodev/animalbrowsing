import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
//import { NavBar } from './content/navbar'
import { Description } from './content/Description'
import { Home } from './content/Home'
import { Turnip } from './content/Turnip'
import { TableButtons } from './content/TableButtons'
import comicsans1 from './font/comic.TTF'
import comicsans2 from './font/comici.ttf'
import comicsans3 from './font/comicmsgras.ttf'
import afont from './font/afont.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Comic1';
    src: url(${comicsans1}) format('truetype');
  }
  @font-face {
    font-family: 'Comic2';
    src: url(${comicsans2}) format('truetype');
  }
  @font-face {
    font-family: 'Comic3';
    src: url(${comicsans3}) format('truetype');
  }
  @font-face {
    font-family: 'afont';
    src: url(${afont}) format('opentype');
  }

  body {
    background-color: #F5F2E3;

    p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
    a, a:hover, a:visited {
      text-decoration: none;
      color: inherit;
    }
    button {
      border: 0;
    }
  }
 ` 

const App = () => {
  const [index, setIndex] = useState("Bugs");

  const showContent = (index) => {
    switch (index) {
      case "Home":
        return <Home />
      case "Turnips":
        return <Turnip />
      case "Bugs":
      case "Fish":
        return <TableButtons actualIndex={index} />
      default:
        return <div>Content Rendering error. Please try later or contact the administrator...</div>
    }
  }

  return (
    <AppContainer>
      <GlobalStyles />
      <NavBar>
        <HomeIndex onClick={() => {setIndex("Home")}}>Home</HomeIndex>
        <TurnipIndex onClick={() => {setIndex("Turnips")}}>Turnips</TurnipIndex>
        <BugIndex onClick={() => {setIndex("Bugs")}}>Bugs</BugIndex>
        <FishIndex onClick={() => {setIndex("Fish")}}>Fish</FishIndex>
      </NavBar>
      <Description actualIndex={index} />
      {showContent(index)}
      <ReturnImage src={"/img/icons/return1.png"} alt="Back to top" />
    </AppContainer>
  );
}
const AppContainer = styled.div`
  
`
const NavBar = styled.div`
  font-family: "afont";
  max-width: 800px;
  height: 60px;
  background-color: tomato;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  p {
    display: inline-block;
    vertical-align: middle;
    line-height: 2em;
  }
`
const HomeIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`
const TurnipIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`
const BugIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`
const FishIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`

const ReturnImage = styled.img`
  width: 40px;
  display: block;
  margin: auto;
`
export default App;