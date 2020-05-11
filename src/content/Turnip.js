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
            if(res[i].entities && res[i].entities.urls && res[i].entities.urls[0]){
                let urlStr = JSON.stringify(res[i].entities.urls[0].url).replace(/\"/g, '') // url acortada
                let textHref = "<a href='"+urlStr+"' target='_blank' rel='noopener'>"+urlStr+"</a>"
                if(urlStr === res[i].text.substr(-23)){
                    res[i].text = res[i].text.replace(res[i].text.substr(-23), textHref)
                    console.log(res[i].text)
                }
            }
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