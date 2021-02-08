import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { contentAPI } from '../logic/apiTurnip.js'

const Turnip = () => {
    const [APIResponse, setAPIResponse] = useState("")
    let message_wait = <p className="tweet_individual" style={{height: "99vh"}}>Cargando tweets... si tarda mucho, por favor contacta con el webmaster.</p>
    
    const callServerAPI = () => {
        const URL = 'https://animalbrowsing.com/paco'
        fetch(URL)
            .then(res => res.json())
            .then(json => setAPIResponse(json))
            .catch(() => {
                console.error('API fetching error.');
            })
    }

    useEffect(() => {
        callServerAPI()
        const intervalId = setInterval(callServerAPI, 40000)
        return () => clearInterval(intervalId)
    },[]) 
    
    return (
        <>
        <TurnipContainer>
            <BtnTweet>
                <a href="https://twitter.com/intent/tweet?hashtags=AnimalCrossing,Turnip" target="_blank" rel="noopener noreferrer" data-show-count="false" data-size="large">Twittear</a>
            </BtnTweet>
            {!APIResponse && <TwitterContent>{message_wait}</TwitterContent>}
            {APIResponse && <TwitterContent dangerouslySetInnerHTML={{__html: contentAPI(APIResponse)}} />}
        </TurnipContainer>
        </>
    )
}

const BtnTweet = styled.div`
    display: block;
    max-width: 420px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: bold;
    a {
        border-radius: 10px;
        background: #55ACEE;
        border: 1px solid #cccccc;
        padding: 12px 14px;
        color: white;
        font-weight: bold;
        
        font-family: Arial;
        text-decoration: none;
    }
`
const TurnipContainer = styled.main`
    background-color: #CCE1F2;
    width: 100%;
    text-align: left;
    white-space: pre-wrap;
    font-size: 18px;
    line-height: 25px;
    @media screen and (max-width: 570px){
        font-size: 16px;
    }
`
const TwitterContent = styled.div`

    a, a:visited {
        color: blue;
    }
    img {
        display: block;
        margin: 18px auto;
        width: 100%;
        max-height: 230px;
        border-radius: 12px;
    }
    .tweet_individual {
        width: 80%;
        max-width: 350px;
        margin: 0 auto;
        padding: 30px;
        border: 2px solid ghostwhite;
        border-radius: 10px;
        margin-top: 20px;
        box-shadow: 3px 4px ghostwhite;
        word-break: break-word;

        p, div, a {
            padding-bottom: 10px;
        }
    }
    
    .blob_container {
        display: table;
        margin: 0 auto;
    }
    .blob {
        background: black;
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
        margin: 10px;
        height: 20px;
        width: 20px;
        transform: scale(1);
        animation: pulse-black 2s infinite;
    }

    .blob.red {
        background: rgba(255, 82, 82, 1);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
        animation: pulse-red 2s infinite;
    }

    @keyframes pulse-red {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
        }
        
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
        }
        
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
        }
    }
`

export { Turnip }