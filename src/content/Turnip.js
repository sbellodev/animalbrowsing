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
    if(localStorage.getItem("language") === "es") {
        message_wait = <div style={{height: "99vh", padding: "10px"}}>Cargando tweets... si tarda mucho, por favor contacta con el webmaster.</div>
        document.title = 'Animal Browsing - Precio de nabos ';
    }
    else {
        message_wait = <div style={{height: "99vh", padding: "10px"}}>Loading tweets... please wait...</div>
        document.title = 'Animal Browsing - Turnips prices '
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
                        tweet.text = tweet.text.replace(shortUrl, "<br/><a href='" +url.expanded_url+ "' target='_blank' rel='noopener noreferrer' >" +url.expanded_url+ "</a><br/>")
                    })
                }
            }

            return  '<div class="tweet_individual">'
                     + '<p><a href="https://twitter.com/'+tweet.screen_name+'" target="_blank" rel="noopener noreferrer">@' +tweet.screen_name+ '</a></p>'
                     + '<p>' +tweet.text+ '</p>'
                     + '<p><a href="https://twitter.com/i/web/status/'+tweet.id+'" target="_blank" rel="noopener noreferrer">View Tweet</a></p>'
                     + '<br/>'  
                     + '</div>'
            }
        ).join('')

        return showResponse                
    }

    return (
        <>
        <TurnipContainer>
            {!APIResponse && message_wait}
            {APIResponse && <TwitterContent dangerouslySetInnerHTML={{__html: renderTwitterAPIContent(APIResponse)}} />}
        </TurnipContainer>
        </>
    )
}

const TurnipContainer = styled.div`
    background-color: #A0D0E7;
    width: 100%;
    text-align: center;
    white-space: pre-wrap;
    font-size: 18px;
    line-height: 25px;
    @media screen and (max-width: 570px) {
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
        padding-top: 25px;
        border-bottom: 3px solid #F5F2E3;
    }
`
export { Turnip }