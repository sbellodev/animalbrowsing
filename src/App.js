import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Home } from './content/Home'
import { Turnip } from './content/Turnip'
import { BugsTable } from './content/BugsTable'
import { FishTable } from './content/FishTable'
import { FossilTable } from './content/FossilTable'
import { Description } from './content/Description' 
import { Footer } from './content/Footer'
import { RHelmet } from './content/Helmet'
import { Router, Route, NavLink, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-162043648-2');
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
});

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  
  }
  body {
    font-family: sans-serif, Arial;
    margin: 0;
  }
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
` 

if(navigator.language.includes(("es" || "en"))){ // Supported languages
  localStorage.setItem("language", navigator.language.slice(0, 2))
}
else {
  localStorage.setItem("language", "en") // EN as default
}

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"))
  let section_names = ["Home", "Turnips", "Bugs", "Fish", "Fossil", "Lang EN"]
  
  function switchLanguage(){
    if(language === "es"){
      setLanguage("en")
      localStorage.setItem("language", "en")
    }
    else if(language === "en"){
      setLanguage("es")
      localStorage.setItem("language", "es")
    }
  }
  if(language === "es"){
    section_names = ["Inicio", "Nabos", "Bichos", "Peces", "Fósiles", "Lang ES"]
  }

  return (
    <AppContainer>
      <GlobalStyles />
      <BackgroundImage />
      <Router history={history}>
        <NavbarContent id={"top"}>
          <NavLink to="/" exact name="Home" activeClassName="active" >
            {section_names[0]}
          </ NavLink>
          <NavLink to="/turnips" name="Turnips" exact activeClassName="active" >
            {section_names[1]}
          </ NavLink>
          <NavLink to="/bugs" name="Bugs" exact activeClassName="active" >
            {section_names[2]}
          </ NavLink>
          <NavLink to="/fish" name ="Fish" exact activeClassName="active" >
            {section_names[3]}
          </ NavLink>
          <NavLink to="/fossil" name ="Fossil" exact activeClassName="active" >
            {section_names[4]}
          </ NavLink>
          <LangIndex className="Language" onClick={() => {switchLanguage()}} href={"#"}>{section_names[5]}</ LangIndex>
        </ NavbarContent> 

        <Switch>
          <Route path="/turnips">
            <RHelmet index={"turnips"}  />
            <Description actualIndex={"Turnips"} />
            <Turnip />
            <Footer />
          </ Route>
          <Route path="/bugs">
            <RHelmet index={"bugs"}  />
            <Description actualIndex={"Bugs"} />
            <BugsTable />
            <Footer />
          </ Route>
          <Route path="/fish">
            <RHelmet index={"fish"}  />
            <Description actualIndex={"Fish"} />
            <FishTable />
            <Footer />
          </ Route>
          <Route path="/fossil">
            <RHelmet index={"fossil"}  />
            <Description actualIndex={"Fossil"} />
            <FossilTable />
            <Footer />
          </ Route>
          <Route path="/">
            <RHelmet index={"home"}  />
            <Home />
            <Footer />
          </ Route>
        </ Switch>
      </ Router>
    </ AppContainer>
  );
}

const NavbarContent = styled.nav`
  width: 100%;
  height: 60px;
  background-color: rgb(255, 131, 97);
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  p {
    display: inline-block;
    vertical-align: middle;
    line-height: 2em;
  }
  a {
    text-align: center;
    color: ghostwhite;
    padding: 15px 0px;
  }
  a.active {
    color: rgb(85, 50, 20);
  }
  
  @media screen and (max-width: 570px){
    font-size: 16px;
  }
  @media screen and (max-width: 340px){
      font-size: 14px;
  }
`
const LangIndex = styled.a`
  text-align: center;
  color: black;
  font-size: 12px;
  
`
const BackgroundImage = styled.div`
  min-height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    background-image: url("../img/bckground3-min.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    content: '';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: -1;
  }
`
const AppContainer = styled.div`
  font-weight: bold;
  max-width: 650px;
  background-color: #CCE1F2;
  margin: 0 auto;
`
export default App;