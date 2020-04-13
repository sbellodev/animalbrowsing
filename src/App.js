import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
//import { NavBar } from './content/navbar'
import { Description } from './content/Description'
import { Home } from './content/Home'
import { Table } from './content/Table'
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

const primaryColor = {
  NavBackground: "#FFFFFF",
  BackgroundPrimary: "#F5F2E3", 
  LetterPrimary: "FFFFFF", 
  Orange: "#FFFFFF", 
  TableBackground: "#FFFFFF", 
  TableSecondary: "#FFFFFF", 
  ButtonPrimary: "#FFFFFF", 
  Skyblue: "#A0D0E7", 
  Orangered: "#FFB347"
}

const App = () => {
  const [index, setIndex] = useState("Bugs");

  const showContent = (index) => {
    switch (index) {
      case "Bugs":
      case "Fish":
        return <TableButtons actualIndex={index} />
      case "Home":
        return <Home />
      default:
        return <div>Rendering error. Please wait or try later...</div>
    }
  }

  return (
    <AppContainer>
      <GlobalStyles />
      <NavBar>
        <HomeIndex onClick={() => {setIndex("Home")}}>Home</HomeIndex>
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