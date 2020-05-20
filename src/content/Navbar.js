import React, { useState } from 'react';
import styled from 'styled-components'
import { Description } from './Description' 
import { BodyContent } from './BodyContent.js'

const Navbar = () => {
    const [index, setIndex] = useState("Home");
    const [language, setLanguage] = useState(localStorage.getItem("language"))
    //let switch_language = "en"
    //setLanguage(localStorage.getItem(actual_language))
    function switchLanguage() {
      //console.log("switch language is " + switch_language )
      localStorage.setItem("language", language)
      console.log(localStorage.getItem("language"))
      if(language === "es"){
        setLanguage("en")
      }
      else if(language === "en"){
        setLanguage("es")
      }
      //window.location.reload(false)
      //switch_language = switch_language === "es" ? "en" : "es"
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
        <>
            <NavbarContent id={"top"}>
                <LangIndex className="Language" onClick={() => {switchLanguage()}} href="#Lang">Lang</LangIndex>
                <HomeIndex  className="Home" onMouseDown={activeLink} onClick={() => setIndex("Home")} href="#Home">Home</HomeIndex>
                <TurnipIndex className="Turnips" onMouseDown={activeLink} onClick={() => setIndex("Turnips")} href="#Turnips">Turnips</TurnipIndex>
                <BugIndex  className="Bugs" onMouseDown={activeLink} onClick={() => setIndex("Bugs")} href="#Bugs">Bugs</BugIndex>
                <FishIndex  className="Fish" onMouseDown={activeLink} onClick={() => setIndex("Fish")} href="#Fish">Fish</FishIndex>
            </NavbarContent>
            <Description actualIndex={index} />
            <BodyContent index={index}/>
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
  color: #A05E2B;
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