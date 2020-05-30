import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [APIResponse, setAPIResponse] = useState("")
    
    const callServerAPI = () => {
        const URL = 'https://animalbrowsing.com/api'
        fetch(URL)
            .then(res => res.json())
            .then(json => setAPIResponse(json))
            .catch(() => {
                console.error('API fetching error.');
            })
    }

    useEffect(() => {
        callServerAPI()
        const intervalId = setInterval(callServerAPI, 20000)
        return () => clearInterval(intervalId)
    },[]) 
    
    let message_wait 
    if(localStorage.getItem("language") === "es"){
        message_wait = <p className="tweet_individual" style={{height: "99vh"}}>Cargando tweets... si tarda mucho, por favor contacta con el webmaster.</p>
    }
    else {
        message_wait = <p className="tweet_individual" style={{height: "99vh"}}>Loading tweets... please wait... if it lasts too much please contact the webmaster</p>
    }
    
    const renderTwitterAPIContent = (res) =>  {
        let shortUrl = /https:\/\/t\.co\/+.{10}/g
        let showResponse = res.map(tweet => {
            if(tweet.text){
                tweet.text = tweet.text.replace("'\n' +",  "")
                if(tweet.entities.media){ // has image
                    tweet.text = tweet.text.replace(tweet.entities.media[0].url, "")
                }
                // urls[0] needed because API structure
                if(tweet.entities.urls && tweet.entities.urls[0]){ // has other urls
                    let num_of_urls = tweet.entities.urls.length 
                    let last_url = num_of_urls - 1
                    if(tweet.entities.urls[last_url].expanded_url.includes("/i/web/status")){ // remove status url
                        tweet.text = tweet.text.replace(tweet.entities.urls[last_url].url, "")
                    }
                    tweet.entities.urls.forEach((url)=>{ // clickable links
                        tweet.text = tweet.text.replace(shortUrl, "<br/><a href='" +url.expanded_url+ "' target='_blank' rel='noopener noreferrer' >" +url.expanded_url.slice(0, 23)+ "...</a><br/>")
                    })
                }
            }

            return   '<div class="tweet_individual">'
                     + '<p><a href="https://twitter.com/'+tweet.screen_name+'" target="_blank" rel="noopener noreferrer">@' +tweet.screen_name+ '</a></p>'
                     + '<p>' +tweet.text+ '</p>'
                     + '<p><a href="https://twitter.com/i/web/status/'+tweet.id+'" target="_blank" rel="noopener noreferrer">View Tweet</a></p>'
                     + '<br/>'  
                     + '</div>'
            }
        ).join('')

        return '<div class="blob_container"><div class="blob red"></div></div>' + showResponse                
    }

    return (
        <>
        <TurnipContainer>
            {!APIResponse && <TwitterContent>{message_wait}</TwitterContent>}
            {APIResponse && <TwitterContent dangerouslySetInnerHTML={{__html: renderTwitterAPIContent(APIResponse)}} />}
        </TurnipContainer>
        </>
    )
}

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
        padding-top: 30px;
        border-bottom: 3px solid ghostwhite;
    }
    
    .blob_container {
        width: 80%;
        padding-top: 20px;
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