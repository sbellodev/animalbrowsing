import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import afont from './font/afont.otf'
import { Home } from './content/Home'
import { Turnip } from './content/Turnip'
import { TableButtons } from './content/TableButtons'
import { Description } from './content/Description' 
import { Footer } from './content/Footer'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
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
  const [index, setIndex] = useState("Home");
  const [language, setLanguage] = useState(localStorage.getItem("language"))

  let section_names = ["Home", "Turnips", "Bugs", "Fish", "EN/ES"]
  if(localStorage.getItem("language") === "es") {
    
  }
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
  
  function activeLink(event) {
    let homeClass = document.getElementsByClassName("Home")[0]
    let turnipsClass = document.getElementsByClassName("Turnips")[0]
    let bugsClass = document.getElementsByClassName("Bugs")[0]
    let fishClass = document.getElementsByClassName("Fish")[0]
    let activeColor = "#A05E2B"
    let inactiveColor = "#F5F2E3"
    homeClass.style.color = inactiveColor
    turnipsClass.style.color = inactiveColor
    bugsClass.style.color = inactiveColor
    fishClass.style.color = inactiveColor
    event.target.style.color = activeColor
  }
  
  return (
    <AppContainer>
      <GlobalStyles/>
      <Router history={history}>
        <NavbarContent id={"top"}>
          <Link to="/">
            <HomeIndex className="Home" onMouseDown={activeLink}>{section_names[0]}</HomeIndex>
          </Link>
          <Link to="/turnips">
            <TurnipIndex className="Turnips" onMouseDown={activeLink}>{section_names[1]}</TurnipIndex>
          </Link>
          <Link to="/Bugs">
            <BugIndex className="Bugs" onMouseDown={activeLink} onClick={() => setIndex("Bugs")}>{section_names[2]}</BugIndex>
          </Link>
          <Link to="/Fish">
            <FishIndex className="Fish" onMouseDown={activeLink} onClick={() => setIndex("Fish")}>{section_names[3]}</FishIndex>
          </Link>
          <LangIndex className="Language" onClick={() => {switchLanguage()}} href={"#"}>{section_names[4]}</LangIndex>
        </NavbarContent> 

        <Switch>
          <Route path="/turnips">
            <Description actualIndex={index} />
            <Turnip />
            <Footer/>
          </Route>
          <Route path="/bugs">
            <Description actualIndex={index} />
            <TableButtons actualIndex={index}/>
            <Footer/>
          </Route>
          <Route path="/fish">
            <Description actualIndex={index} />
            <TableButtons actualIndex={index}/>
            <Footer/>
            </Route>
          <Route path="/">
            <Description actualIndex={index} />
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
`
const LangIndex = styled.a`
  font-weight: bold;
  text-align: center;
  color: #F5F2E3;
  font-size: 10px;
`
const HomeIndex = styled.a`
  font-weight: bold;
  text-align: center;
  color: #A05E2B;
`
const TurnipIndex = styled.a`
  font-weight: bold;
  text-align: center;
  color: #F5F2E3;
`
const BugIndex = styled.a`
  font-weight: bold;
  text-align: center;
  color: #F5F2E3;
`
const FishIndex = styled.a`
  font-weight: bold;
  text-align: center;
  color: #F5F2E3;
`
const AppContainer = styled.div`
  max-width: 650px;
  background-color: #A0D0E7;
  margin: 0 auto;
  font-family: afont;
`
export default App;