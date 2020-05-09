import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [Response, setResponse] = useState('Loading tweets... please wait...')
    
    const callServerAPI = () => {
        const URL = 'http://localhost:9000/twitter'
        fetch(URL)
            .then(res => res.text())
            .then(json => setResponse(json))
    }
    useEffect(() => {
        callServerAPI()
        const intervalId = setInterval(callServerAPI, 10000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <TurnipContainer>
            <p>Hello, this is Turnip</p>
            {Response}
            <br/>
        </TurnipContainer>
    )
}
const TurnipContainer = styled.div`
    font-family: afont;
    background-color: #A0D0E7;
    width: 100%;
    height: 99vh;
    padding-top: 10%;
    text-align: center;
    a, a:visited {
        color: blue;
    }
`
export { Turnip }