import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import afont from './font/afont.otf'
import { Home } from './content/Home'
import { Turnip } from './content/Turnip'
import { BugsButtons } from './content/BugsButtons'
import { FishButtons } from './content/FishButtons'
import { Description } from './content/Description' 
import { Footer } from './content/Footer'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'afont';
    src: url(${afont}) format('opentype');
  }
  body {
    background-color: white;
    background-image: url("../img/bckground2.jpg");

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
  }
 ` 
 if(navigator.language.slice(("es" || "en"))){ // Supported languages
  localStorage.setItem("language", navigator.language.slice(0, 2))
}
else {
  localStorage.setItem("language", "en") // EN as default
}

const App = () => {
  let history = useHistory();
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
  // function activeLink(event) {
  //   let homeClass = document.getElementsByClassName("Home")[0]
  //   let turnipsClass = document.getElementsByClassName("Turnips")[0]
  //   let bugsClass = document.getElementsByClassName("Bugs")[0]
  //   let fishClass = document.getElementsByClassName("Fish")[0]
  //   let activeColor = "#A05E2B"
  //   let inactiveColor = "#F5F2E3"
  //   homeClass.style.color = inactiveColor
  //   turnipsClass.style.color = inactiveColor
  //   bugsClass.style.color = inactiveColor
  //   fishClass.style.color = inactiveColor
  //   event.target.style.color = activeColor
  // }
  function historyPush(url) {
    if(history) history.push(url)

  }
  return (
    <AppContainer>
      <GlobalStyles/>
      <Router history={history}>
        <NavbarContent id={"top"}>
          <Link to="/" className="Home" onClick={() => historyPush("/")}>
            {section_names[0]}
          </Link>
          <Link to="/turnips" name="Turnips" className="Turnips" onClick={() => {historyPush("/turnips")}}>
            {section_names[1]}
          </Link>
          <Link to="/bugs" name="Bugs" className="Bugs" onClick={() => historyPush("/bugs")}>
            {section_names[2]}
          </Link>
          <Link to="/fish" className="Fish" onClick={() => historyPush("/fish")}>
            {section_names[3]}
          </Link>
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
`
const LangIndex = styled.a`
  font-weight: bold;
  text-align: center;
  color: #F5F2E3;
  font-size: 10px;
`
const AppContainer = styled.div`
  max-width: 650px;
  background-color: #A0D0E7;
  margin: 0 auto;
  font-family: afont;
`
export default App;