import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [Response, setResponse] = useState("")
    
    const callServerAPI = () => {
        const URL = 'http://192.168.0.100:9000/twitter'
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
        // About URLs - What to show
        // Display IMG and urls not related to "reached limit... click here to read more"
        // Add "read more" link with a url (consumed by API, an URL like "tweet.url")

        let showRes = ''
        for (let i = 0; i < res.length; i++) {
            if(res[i].text && res[i].entities){
                if(res[i].entities.media){
                    let urlRegExp = res[i].entities.media[0].url
                    res[i].text = res[i].text.replace(urlRegExp, "<img src='" +res[i].entities.media[0].media_url_https+ "' />")
                }
                if(res[i].entities.urls && res[i].entities.urls[0]){
                    let urlRegExp = res[i].entities.urls[0].url
                    if(res[i].entities.urls[0].expanded_url.includes("/i/web/status")){
                        res[i].text = res[i].text.replace(urlRegExp, "")
                    }
                    else {
                        res[i].text = res[i].text.replace(urlRegExp, "<a href='" +res[i].entities.urls[0].expanded_url+ "'>" +res[i].entities.urls[0].expanded_url+ "</a>")
                    }
                }
                //console.log(res[i].text)
            }
            console.log(res[i].user)
            console.log(res[i].text)
            console.log(res[i].id)
            
            //console.log(res[i].id)
            showRes +=
                  '<div class="tweet_individual">'
                + '<p>' +res[i].user+ '</p>'
                + '<p>' +res[i].text+ '</p>'
                + '<p><a href="https://twitter.com/i/web/status/'+res[i].id+'" target="_blank" rel="noopener noreferrer">View Tweet</a></p>'
                + '<br/>'  
                + '</div>'
        }
        return showRes                
    }

    return (
        <TurnipContainer>
            {!Response && <div>Loading tweets... please wait...</div>}
            {Response && <TwitterContent dangerouslySetInnerHTML={{__html: renderTwitterAPIContent(Response)}} />}
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
    }
    .tweet_individual {
        width: 80%;
    }
`
export { Turnip }