import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Turnip = () => {
    const [Response, setResponse] = useState('Loading tweets... please wait...')
    
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

        let showRes = ''
        for (let i = 0; i < res.length; i++) {
            //let shortUrl = /https:\/\/t\.co\/+.{10}/g
            console.log(res[i].entities)
            if(res[i].text){
                if(res[i].entities && res[i].entities.media && res[i].entities.media[0].url){
                    let hrex = new RegExp(res[i].entities.media[0].url, "g")
                    res[i].text = res[i].text.replace(hrex, "<img width='150px' src='"+res[i].entities.media[0].media_url_https+"' />")
                }
                if(res[i].entities && res[i].entities.urls && res[i].entities.urls[0]){
                    let hrex = new RegExp(res[i].entities.urls[0].url, "g")
                    res[i].text = res[i].text.replace(hrex, "<a href='"+res[i].entities.urls[0].expanded_url+"'>"+res[i].entities.urls[0].expanded_url+"</a>")
                }
                console.log(res[i].text)
            }

            // if(res[i].entities && res[i].entities.urls && res[i].entities.urls[0]){
            //     let urlStr = JSON.stringify(res[i].entities.urls[0].url).replace(/\"/g, '') // url acortada
            //     let textHref = "<a href='"+urlStr+"' target='_blank' rel='noopener'>"+urlStr+"</a>"
            //     //  https://t.co/
                // /http:\/\/t|.co/.{10}/g
                // let httpIndex = res[i].text.indexOf("http")
                // console.log('this is http index' + httpIndex)
                // if(urlStr == res[i].text.substr(-23)){
                //     res[i].text = res[i].text.replace(res[i].text.substr(-23), textHref)
                //     console.log(res[i].text)
                // }
                // else {
                //     console.log("Not replaced")
                //     console.log(urlStr)
                //     console.log(res[i].text.substr(-23))
                // }
            // }
            // else {
            //     // Bug : Algunas url no pasan por el IF anterior, luego no son reemplazadas, luego no funciona su link
            //                     // buscar en res[i].entities.medua.iulr

            // }
            showRes +=
                '<p>'+res[i].user+'</p>'+
                '<p>'+res[i].text+'</p>'+
                '<br/>'    
        }
        return showRes                
    }

    return (
        <TurnipContainer>
            <TwitterContent dangerouslySetInnerHTML={{__html:renderTwitterAPIContent(Response)}}>
                
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