import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled from 'styled-components'
import { Table } from './content/Table'

const App = () => {
  return (
    <AppContainer>
      <NavBar>
        <HomeIndex><p>Home</p></HomeIndex>
        <BugIndex><p>Insects</p></BugIndex>
        <FishIndex><p>Fishes</p></FishIndex>
      </NavBar>
      <Section>
        <h2>Insects</h2>
        <Ellipsis>
          <SearchButton></SearchButton>
          <ABCButton></ABCButton>
          <PriceButton></PriceButton>
          <ResetButton></ResetButton>
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
  justify-content: center;
  align-items: center;
  p {
    display: inline-block;
    vertical-align: middle;
    line-height: 2em;
  }
`
const HomeIndex = styled.div`
  width: 65px;
  height: 40px;
  background-color: #E89E9E;
  margin-right: 25px;
  border-radius: 5px;
  text-align: center;
`
const BugIndex = styled.div`
  width: 65px;
  height: 40px;
  background-color: #E89E9E;
  margin-right: 25px;
  border-radius: 5px;
  text-align: center;
`
const FishIndex = styled.div`
  width: 65px;
  height: 40px;
  background-color: #E89E9E;
  border-radius: 5px;
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
