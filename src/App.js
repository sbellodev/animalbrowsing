import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components'
//import afont from './font/afonte.woff'
import { Home } from './content/Home'
import { Turnip } from './content/Turnip'
import { BugsButtons } from './content/BugsButtons'
import { FishButtons } from './content/FishButtons'
import { Description } from './content/Description' 
import { Footer } from './content/Footer'
import { Router, Route, NavLink, Switch } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function initializeReactGA() {
  ReactGA.initialize('UA-162043648-2');
  ReactGA.pageview('/home');
}

// @font-face {
//   font-family: 'afont';
//   src: url(${afont}) format('woff');
// }
const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
  }
  body {
    font-family: Arial, sans-serif;
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

if(navigator.language.slice(("es" || "en"))){ // Supported languages
  localStorage.setItem("language", navigator.language.slice(0, 2))
}
else {
  localStorage.setItem("language", "en") // EN as default
}

const App = () => {
  initializeReactGA()
  //let history = useHistory();
  const [language, setLanguage] = useState(localStorage.getItem("language"))
  let section_names = ["Home", "Turnips", "Bugs", "Fish", "EN/ES"]
  
  function switchLanguage() {
    if(language === "es"){
      setLanguage("en")
      localStorage.setItem("language", "en")
    }
    else if(language === "en"){
      setLanguage("es")
      localStorage.setItem("language", "es")
      section_names = ["Inicio", "Nabos", "Bichos", "Peces", "EN/ES"]
    }
  }

  function historyPush(url) {
    console.log(history)
    if(history) history.push(url)
  }
  return (
    <AppContainer>
      <GlobalStyles/>
      <BackgroundImage />
      <Router history={history}>
        <NavbarContent id={"top"}>
          <NavLink to="/" exact activeClassName="active" onClick={() => historyPush("/")}>
            {section_names[0]}
          </NavLink>
          <NavLink to="/turnips" name="Turnips" exact activeClassName="active" onClick={() => {historyPush("/turnips")}}>
            {section_names[1]}
          </NavLink>
          <NavLink to="/bugs" name="Bugs" exact activeClassName="active" onClick={() => historyPush("/bugs")}>
            {section_names[2]}
          </NavLink>
          <NavLink to="/fish" exact activeClassName="active" onClick={() => historyPush("/fish")}>
            {section_names[3]}
          </NavLink>
          <LangIndex className="Language" onClick={() => {switchLanguage()}} href={"#"}>{section_names[4]}</LangIndex>
        </NavbarContent> 

        <Switch>
          <Route path="/turnips">
            <Description actualIndex={"Turnips"} />
            <Turnip />
            <Footer/>
          </Route>
          <Route path="/bugs">
            <Description actualIndex={"Bugs"} />
            <BugsButtons />
            <Footer/>
          </Route>
          <Route path="/fish">
            <Description actualIndex={"Fish"} />
            <FishButtons/>
            <Footer/>
            </Route>
          <Route path="/">
            <Description actualIndex={"Home"} />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

const NavbarContent = styled.nav`
  height: 60px;
  background-color: tomato;
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
    font-weight: bold;
    text-align: center;
    color: #F5F2E3;
  }
  a.active {
    color: #A05E2B;
  }
`
const LangIndex = styled.a`
  font-weight: bold;
  text-align: center;
  color: #F5F2E3;
  font-size: 12px;
`
const BackgroundImage = styled.div`
  min-height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    background-image: url("../img/bckground2.jpg");
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
  max-width: 650px;
  background-color: #A0D0E7;
  margin: 0 auto;
`
export default App;