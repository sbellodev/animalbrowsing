import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [Response, setResponse] = useState('Loading tweets... please wait...')
    
    const callServerAPI = () => {
        const URL = 'http://localhost:9000/twitter'
        fetch(URL)
            .then(res => res.json())
            .then(json => setResponse(json))
    }
    useEffect(() => {
        callServerAPI()
        const intervalId = setInterval(callServerAPI, 10000)
        return () => clearInterval(intervalId)
    }, [])
    
    const renderTwitterAPIContent = (res) =>  {
        let showRes = ""
        for (let i = 0; i < res.length; i++) {
            showRes +=
                "<p>"+res[i].user+"</p>"+
                "<p>"+res[i].text+"</p>"+
                "<br/>"    
        }
        return {__html: showRes}                
    }

    return (
        <TurnipContainer>
            <TwitterContent dangerouslySetInnerHTML={renderTwitterAPIContent(Response)}>
            </TwitterContent>
        </TurnipContainer>
    )
}

const TwitterContent = styled.div``
const TurnipContainer = styled.div`
    font-family: afont;
    background-color: #A0D0E7;
    width: 100%;
    height: 99vh;
    padding-top: 10%;
    text-align: center;
    white-space: pre-wrap;
    a, a:visited {
        color: blue;
    }
`
export { Turnip }