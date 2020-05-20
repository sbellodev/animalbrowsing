import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [APIResponse, setAPIResponse] = useState("")
    
    const callServerAPI = () => {
        const URL = 'http://192.168.0.21:9000/twitter'
        fetch(URL)
            .then(res => res.json())
            .then(json => setAPIResponse(json))
    }

    useEffect(() => {
        callServerAPI()
        const intervalId = setInterval(callServerAPI, 10000)
        return () => clearInterval(intervalId)
    },[]) 
    
    const renderTwitterAPIContent = (res) =>  {
        let shortUrl = /https:\/\/t\.co\/+.{10}/g
        let showResponse = res.map(tweet => {
            if(tweet.text){
                tweet.text = tweet.text.replace("'\n' +",  "")
                if(tweet.entities.media){
                    tweet.text = tweet.text.replace(tweet.entities.media[0].url, "<img src='" +tweet.entities.media[0].media_url_https+ "' />")
                }
                if(tweet.entities.urls && tweet.entities.urls[0]){ // urls[0] needed because API structure
                    let num_of_urls = tweet.entities.urls.length 
                    let last_url = num_of_urls - 1
                    if(tweet.entities.urls[last_url].expanded_url.includes("/i/web/status")){
                        tweet.text = tweet.text.replace(tweet.entities.urls[last_url].url, "")
                    }
                    tweet.entities.urls.forEach((url)=>{
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
            {!APIResponse && <div>Loading tweets... please wait...</div>}
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
    font-size: 16px;
    @media (max-width: 570px) {
        font-size: 14px;
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