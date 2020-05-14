import React, { useState } from 'react';
import styled from 'styled-components'
import { Description } from './Description' 

import { BodyContent } from './BodyContent.js'

const Navbar = () => {
    const [index, setIndex] = useState("Bugs");
    
    return (
        <>
            <NavbarContent id={"top"}>
                <HomeIndex onClick={() => {setIndex("Home")}}>Home</HomeIndex>
                <TurnipIndex onClick={() => {setIndex("Turnips")}}>Turnips</TurnipIndex>
                <BugIndex onClick={() => {setIndex("Bugs")}}>Bugs</BugIndex>
                <FishIndex onClick={() => {setIndex("Fish")}}>Fish</FishIndex>
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
const HomeIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`
const TurnipIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`
const BugIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`
const FishIndex = styled.p`
  color: #F5F2E3;
  font-weight: bold;
  text-align: center;
`
export { Navbar }