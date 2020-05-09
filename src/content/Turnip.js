import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [Response, setResponse] = useState('Default Response')
    
    // useContext doc - https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
    const TestContext = React.createContext(Response)
    const DisplayContext = useContext(TestContext)
    
    const callServerAPI = () => {
        console.log("Calling Server API")
        const URL = 'http://localhost:9000/twitter'
        fetch(URL)
            .then(res => res.text())
            .then(json => setResponse(json))
    }
    
    useEffect(() => {
        console.log("Turnip content Updated")
        callServerAPI()
        const intervalId = setInterval(callServerAPI, 15000)
        
        return () => clearInterval(intervalId)

    }, [URL, useState])

    return (
        <TurnipContainer>
            <p>Hello, this is Turnip</p>
            {DisplayContext}
            <br/>
            {/* <a className="twitter-timeline" style={{textAlign: "center"}} data-width="90%" data-theme="dark" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>  */}
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