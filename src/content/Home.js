import React from 'react';
import styled from 'styled-components'

const Home = () => {

    return (
        <>
            <Ellipsis />
            <HomeContainer>
                <p>This is gatto from gattoalaparato</p>
                <p>thanx <a href={"https://www.twitter.com/gattoalaparato"}>@gattoalaparato</a></p>
            </HomeContainer>
        </>
    )
}
const Ellipsis = styled.div`
  width: 100%;
  height: 30px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #A0D0E7;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const HomeContainer = styled.div`
    font-family: afont;
    background-color: #A0D0E7;
    width: 100%;
    height: 99vh;
    padding-top: 10%;
    padding-left: 5%;
    a, a:visited {
        color: blue;
    }
`
export { Home }