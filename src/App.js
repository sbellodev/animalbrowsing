import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled from 'styled-components'
import { Table } from './content/Table'
//import imgPrice from '../img/icons/price1.jpg'

const imageURL = {
  Price: "/img/icons/price1.jpg", 
  ABC: "/img/icons/abc.png", 
  Search: "/img/icons/search1.jpg", 
  Reset: "/img/icons/reset1.png"
}
const App = () => {
  return (
    <AppContainer>
      <NavBar>
        <HomeIndex>Home</HomeIndex>
        <BugIndex>Insects</BugIndex>
        <FishIndex>Fishes</FishIndex>
      </NavBar>
      <Section>
        <h2>Insects</h2>
        <Ellipsis>
          <SearchButton><img src={imageURL.Search} width={"30px"} alt="Search" /></SearchButton>
          <ABCButton><img src={imageURL.ABC} width={"100%"} alt="ABC" /></ABCButton>
          <PriceButton><img src={imageURL.Price} width={"100%"} alt="price" /></PriceButton>
          <ResetButton><img src={imageURL.Reset} width={"100%"} alt="Reset" /></ResetButton>
        </Ellipsis>
      </Section>
      
      <Table />
    </AppContainer>
  );
}
const AppContainer = styled.div`
  p, h1, h2, h3, h4, h5 {
    margin: 0;
  }
  button {
    border: 0;
  }
`
const NavBar = styled.div`
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
  color: #fbeded;
  font-weight: bold;
  text-align: center;
`
const BugIndex = styled.p`
  color: #fbeded;
  font-weight: bold;
  text-align: center;
`
const FishIndex = styled.p`
  color: #fbeded;
  font-weight: bold;
  text-align: center;
`

const Section = styled.div`
  max-width: 800px;
  height: 190px;
  background-color: orangered;
  position: relative;
  h2 {
    text-align: center;
    padding-top: 10%;
  }
`
const Ellipsis = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  position:absolute;                  
  bottom:0;                          
  left:0;
  background-color: skyblue;
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

export default App;
