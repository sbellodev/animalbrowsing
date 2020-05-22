/** DEPRECATED **/
//////////////////
//////////////////

import React, { useState } from 'react';
import styled from 'styled-components'
import { Description } from './Description' 
//import { BodyContent } from './BodyContent.js'
import { Home } from './Home'
import { Turnip } from './Turnip'
import { TableButtons } from './TableButtons'
import { Footer } from './Footer'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// const BodyContent = ({index}) => {
//   switch (index) {
//     case "Home":
//       return <Home />
//     case "Turnips":
//       return <Turnip />
//     case "Bugs":
//     case "Fish":
//       return <TableButtons actualIndex={index} />
//     default:
//       return <div>Rendering error. Please try later or contact the webmaster...</div>
//   }
// }

if(navigator.language.slice(("es" || "en"))){ // Supported languages
  localStorage.setItem("language", navigator.language.slice(0, 2))
}
else {
  localStorage.setItem("language", "en") // EN as default
}

const Navbar = () => {
    // const [index, setIndex] = useState("Home");
    const [language, setLanguage] = useState(localStorage.getItem("language"))

    function switchLanguage() {
      if(language === "es"){
        setLanguage("en")
        localStorage.setItem("language", "en")
      }
      else if(language === "en"){
        setLanguage("es")
        localStorage.setItem("language", "es")
      }
    }

    function activeLink(event) {
      // let homeClass = document.getElementsByClassName("Home")[0]
      // let turnipsClass = document.getElementsByClassName("Turnips")[0]
      // let bugsClass = document.getElementsByClassName("Bugs")[0]
      // let fishClass = document.getElementsByClassName("Fish")[0]
      // let activeColor = "#A05E2B"
      // let inactiveColor = "#F5F2E3"
      // homeClass.style.color = inactiveColor
      // turnipsClass.style.color = inactiveColor
      // bugsClass.style.color = inactiveColor
      // fishClass.style.color = inactiveColor
      // event.target.style.color = activeColor
    }

    let section_names = ["Home", "Turnips", "Bugs", "Fish", "EN/ES"]
    if(localStorage.getItem("language") === "es") {
      section_names = ["Inicio", "Nabos", "Bichos", "Peces", "EN/ES"]
    }
    return (
        <Router>
          <NavbarContent id={"top"}>
            <Link to="/">
              Home
            </Link>
            <Link to="/turnip">
              Turnips
            </Link>
         </NavbarContent> 
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/turnip">
              <Turnip />
            </Route>
          </Switch>
        </ Router>
    )
}

const NavbarContent = styled.div`
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
export { Navbar }