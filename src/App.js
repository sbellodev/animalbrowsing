import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Home } from './content/Home'
import { Turnip } from './content/Turnip'
import { BugsTable } from './content/BugsTable'
import { FishTable } from './content/FishTable'
import { SeaTable } from './content/SeaTable'
import { FossilTable } from './content/FossilTable'
import { Description } from './content/Description' 
import { Policy } from './content/Policy' 
import { Popup } from './content/Popup'
import { Footer } from './content/Footer'
import { RHelmet } from './content/Helmet'
import { Shop } from './content/Shop'
import { Router, Route, NavLink, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize('G-602L6CMEHR');
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

// if(navigator.language.includes(("es" || "en"))){ // Supported languages
//   localStorage.setItem("language", navigator.language.slice(0, 2))
// }
// else {
//   localStorage.setItem("language", "en") // EN as default
// }

const App = () => {
  let section_names = ["Inicio ", "Nabos ", "Bichos ", "Peces ", "Criaturas Marinas ", "Fósiles ", "Tienda ", "Lang ES"]
  let cookieAccepted = () => sessionStorage.getItem("CookieAccepted")

  return (
    <AppContainer>
      <GlobalStyles />
      <BackgroundImage />
      <Router history={history}>
        <NavbarContent id={"top"}>
          <NavLink to="/" exact name="home" activeClassName="active" >
            {section_names[0]}
          </ NavLink>
          <NavLink to="/turnips" name="turnips" exact activeClassName="active" >
            {section_names[1]}
          </ NavLink>
          <NavLink to="/bugs" name="bugs" exact activeClassName="active" >
            {section_names[2]}
          </ NavLink>
          <NavLink to="/fish" name="fish" exact activeClassName="active" >
            {section_names[3]}
          </ NavLink>
          <NavLink to="/sea-creatures" name="sea-creatures" exact activeClassName="active" >
            {section_names[4]}
          </ NavLink>
          <NavLink to="/fossil" name="fossil" exact activeClassName="active" >
            {section_names[5]}
          </ NavLink>
          {/* <NavLink to="/shop" name="shop" exact activeClassName="active" >
            {section_names[6]}
          </ NavLink> */}
        </ NavbarContent> 

        <Switch>
          <Route path="/turnips">
            <RHelmet />
            <Description />
            <Turnip />
            <Footer />
          </ Route>
          <Route path="/bugs">
            <RHelmet />
            <Description />
            <BugsTable />
            <Footer />
          </ Route>
          <Route path="/fish">
            <RHelmet />
            <Description />
            <FishTable />
            <Footer />
          </ Route>
          <Route path="/sea-creatures">
            <RHelmet />
            <Description />
            <SeaTable />
            <Footer />
          </ Route>
          <Route path="/fossil">
            <RHelmet />
            <Description />
            <FossilTable />
            <Footer />
          </ Route>
          <Route path="/shop">
            <RHelmet />
            <Shop />
            <Footer />
          </ Route>
          <Route path="/policy">
            <Policy />
            <Footer />
          </ Route>
          <Route path="/">
            <RHelmet />
            <Home />
            <Footer />
          </ Route>
        </ Switch>
      </ Router>
      {!cookieAccepted() && <Popup/>}
    </ AppContainer>
  );
}

const NavbarContent = styled.nav`
  width: 100%;
  min-height: 60px;
  background-color: rgb(255, 131, 97);
  font-size: 18px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 0px 0px 15px 0px;
  
  a {
    max-width: 85px;
    text-align: center;
    color: ghostwhite;
    padding: 15px 0px 0px 0px;
  }
  a.active {
    color: rgb(85, 50, 20);
  }
  
  @media screen and (max-width: 460px){
    
    grid-template-rows: auto auto;

   
  }
  @media screen and (max-width: 340px){
      
  }
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
  max-width: 1000px;
  background-color: #CCE1F2;
  margin: 0 auto;
`
export default App;