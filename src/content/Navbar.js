import React, { useState } from 'react';
import styled from 'styled-components'
import { Description } from './Description' 
import { BodyContent } from './BodyContent.js'
import { Footer } from './Footer'

if(navigator.language.slice(("es" || "en"))){ // Supported languages
  localStorage.setItem("language", navigator.language.slice(0, 2))
}
else {
  localStorage.setItem("language", "en") // set en as default
}

const Navbar = () => {
    const [index, setIndex] = useState("Home");
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

    let section_names = ["EN/ES", "Home", "Turnips", "Bugs", "Fish"]
    if(localStorage.getItem("language") === "es") {
      section_names = ["EN/ES", "Inicio", "Nabos", "Bichos", "Peces"]
    }
    return (
        <>
          <NavbarContent id={"top"}>
              <LangIndex className="Language" onClick={() => {switchLanguage()}} href="#Lang">{section_names[0]}</LangIndex>
              <HomeIndex  className="Home" onMouseDown={activeLink} onClick={() => setIndex("Home")} href="#Home">{section_names[1]}</HomeIndex>
              <TurnipIndex className="Turnips" onMouseDown={activeLink} onClick={() => setIndex("Turnips")} href="#Turnips">{section_names[2]}</TurnipIndex>
              <BugIndex  className="Bugs" onMouseDown={activeLink} onClick={() => setIndex("Bugs")} href="#Bugs">{section_names[3]}</BugIndex>
              <FishIndex  className="Fish" onMouseDown={activeLink} onClick={() => setIndex("Fish")} href="#Fish">{section_names[4]}</FishIndex>
          </NavbarContent>
          <Description actualIndex={index} />
          <BodyContent index={index}/>
          <Footer/>
        </>
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