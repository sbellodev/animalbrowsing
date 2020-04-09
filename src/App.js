import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import styled from 'styled-components'
import { Table } from './content/Table'

const App = () => {
  return (
    <AppContainer>
      <NavBar>Navegador</NavBar>
      <Section><p>Title Description</p>
      <Ellipsis></Ellipsis></Section>
      
      <Table />
    </AppContainer>
  );
}
const AppContainer = styled.div`
  p {
    margin: 0
  }
`
const NavBar = styled.div`
  max-width: 800px;
  height: 60px;
  background-color: tomato;

`
const Section = styled.div`
  max-width: 800px;
  height: 190px;
  background-color: orangered;
  position: relative;
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
`
export default App;
