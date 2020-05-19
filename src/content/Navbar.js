import React, { useState } from 'react';
import styled from 'styled-components'
import { Description } from './Description' 
import { BodyContent } from './BodyContent.js'

const Navbar = () => {
    const [index, setIndex] = useState("Turnips");

    function activeLink(event){
      let homeClass = document.getElementsByClassName("Home")[0]
      let turnipsClass = document.getElementsByClassName("Turnips")[0]
      let bugsClass = document.getElementsByClassName("Bugs")[0]
      let fishClass = document.getElementsByClassName("Fish")[0]
      homeClass.style.color = "#F5F2E3"
      turnipsClass.style.color = "#F5F2E3"
      bugsClass.style.color = "#F5F2E3"
      fishClass.style.color = "#F5F2E3"
      event.target.style.color = "blue"
    }
    return (
        <>
            <NavbarContent id={"top"}>
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
  
  a {
    color: #F5F2E3;
  }
  p {
    display: inline-block;
    vertical-align: middle;
    line-height: 2em;
  }
`
const HomeIndex = styled.a`
  font-weight: bold;
  text-align: center;

`
const TurnipIndex = styled.a`
  font-weight: bold;
  text-align: center;
`
const BugIndex = styled.a`
  font-weight: bold;
  text-align: center;
`
const FishIndex = styled.a`
  font-weight: bold;
  text-align: center;
`
export { Navbar }