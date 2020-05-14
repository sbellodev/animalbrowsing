import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [APIResponse, setAPIResponse] = useState("")
    
    const callServerAPI = () => {
        const URL = 'http://192.168.0.100:9000/twitter'
        fetch(URL)
            .then(res => res.json())
            .then(json => setAPIResponse(json))
    }

    useEffect(() => {
        callServerAPI()
        const intervalId = setInterval(callServerAPI, 10000)
        return () => clearInterval(intervalId)
    }, [])
    
    const renderTwitterAPIContent = (res) =>  {
        console.log(res)
        let shortUrl = /https:\/\/t\.co\/+.{10}/g
        let showRes = res.map(tweet => {
            if(tweet.text){
                if(tweet.entities.media){
                    tweet.text = tweet.text.replace(tweet.entities.media[0].url, "<img src='" +tweet.entities.media[0].media_url_https+ "' />")
                }
                if(tweet.entities.urls && tweet.entities.urls[0]){
                    let num_of_urls = tweet.entities.urls.length 
                    let last_url = num_of_urls - 1
                    if(tweet.entities.urls[last_url].expanded_url.includes("/i/web/status")){
                        tweet.text = tweet.text.replace(tweet.entities.urls[last_url].url, "")
                    }
                    tweet.entities.urls.map(url => {
                        tweet.text = tweet.text.replace(shortUrl, "<a href='" +url.expanded_url+ "'>" +url.expanded_url+ "</a>")
                    })
                }
            }
            return  '<div class="tweet_individual">'
                     + '<p>' +tweet.user+ '</p>'
                     + '<p>' +tweet.text+ '</p>'
                     + '<p><a href="https://twitter.com/i/web/status/'+tweet.id+'" target="_blank" rel="noopener noreferrer">View Tweet</a></p>'
                     + '<br/>'  
                     + '</div>'
            }
        ).join('')

        return showRes                
    }

    return (
        <TurnipContainer>
            {!APIResponse && <div>Loading tweets... please wait...</div>}
            {APIResponse && <TwitterContent dangerouslySetInnerHTML={{__html: renderTwitterAPIContent(APIResponse)}} />}
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
    white-space: pre-wrap;
`
const TwitterContent = styled.div`
    display: grid;
    justify-items: center;
    a, a:visited {
        color: blue;
    }
    img {
        display: block;
        margin: auto;
        width: 150px;
        border-radius: 12px;
    }
    .tweet_individual {
        width: 80%;
    }
`
export { Turnip }