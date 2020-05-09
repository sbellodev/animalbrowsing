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
    
    const showAPI = (res) => {
        let contentAPI = ""
        for (var i = 0; i < res.length; i++) {
            for (var a = 0; a < res[0].length; a++) {
                if(a+1 < res[0].length){
                    contentAPI += "<p>"+ res[i][a] +"</p><p>"+ res[i][a+1] + "</p><br/>"
                }
            }
        }
        // TODO - Review anti-dangerouslyinnerHTML security
        return {__html: contentAPI}
    }

    return (
        <TurnipContainer>
            <TwitterContent dangerouslySetInnerHTML={showAPI(Response)}/>
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