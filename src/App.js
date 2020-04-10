import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
import { Table } from './content/Table'
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
  //import imgPrice from '../img/icons/price1.jpg'

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
const imageURL = {
  Price: "/img/icons/price1.jpg", 
  ABC: "/img/icons/abc.png", 
  Search: "/img/icons/search1.jpg", 
  Reset: "/img/icons/reset1.png", 
  Return: "/img/icons/return1.png"
}


const App = () => {
  const [index, setIndex] = useState("Bugs");

  return (
    <AppContainer>
      <GlobalStyles />
      <NavBar>
        <HomeIndex onClick={() => {setIndex("Home")}}>Home</HomeIndex>
        <BugIndex onClick={() => {setIndex("Bugs")}}>Bugs</BugIndex>
        <FishIndex onClick={() => {setIndex("Fish")}}>Fishes</FishIndex>
      </NavBar>
      <Section>
        <Description>
          <h2>{index}</h2>
          <h5>If needed, you can use the search option or order by price / alphabetically.</h5>
          <h5>¡Good luck! And take care</h5>
        </Description>

      </Section>
      <Ellipsis>
          <SearchButton onClick={() => console.log("Buttone Search pulsao")}><SearchImage src={imageURL.Search}  alt="Search" /></SearchButton>
          <ABCButton onClick={() => console.log("Buttone ABC pulsao")}><ABCImage src={imageURL.ABC}  alt="ABC" /></ABCButton>
          <PriceButton onClick={() => console.log("Buttone Price pulsao")}><PriceImage src={imageURL.Price}  alt="price" /></PriceButton>
          <ResetButton onClick={() => console.log("Buttone Reset pulsao")}><ResetImage src={imageURL.Reset}  alt="Reset" /></ResetButton>
        </Ellipsis>
      
      <Table actualIndex={index} />
      <ReturnImage src={imageURL.Return} width={"40px"} alt="Back to top" />
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

const Section = styled.div`
  max-width: 800px;
  height: 155px;
  background-color: #F5F2E3;
  position: relative;
`
const Description = styled.div`
    font-family: afont;
    text-align: center;
    padding: 3% 3% 0 3%; 
`
const Ellipsis = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #A0D0E7;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 45px;
  border-radius: 30px;
  img {
    float: right;
  }
`
const ABCButton = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 45px;
  border-radius: 10px;
`
const PriceButton = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 45px;
  border-radius: 10px;
`
const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  margin-top: 45px;
  border-radius: 50%;
`
const PriceImage = styled.img`
  width: 100%;
`
const ABCImage = styled.img`
  width: 100%;
`
const SearchImage = styled.img`
  width: 30px;
`
const ResetImage = styled.img`
  width: 100%;
`
const ReturnImage = styled.img`
  width: 40px;
  display: block;
  margin: auto;
`

export default App;
