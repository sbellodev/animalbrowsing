import React from 'react';
import styled from 'styled-components'

const Turnip = () => {
    return (
        <TurnipContainer>
            <p>Hello, this is Turnip</p>
        </TurnipContainer>
    )
}
const TurnipContainer = styled.div`
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
export { Turnip }