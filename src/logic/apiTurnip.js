const contentAPI = (res) =>  {
    let shortUrl = /https:\/\/t\.co\/+.{10}/g
    let showResponse = res.map(tweet => {
        if(tweet.text){
            tweet.text = tweet.text.replace("'\n' +",  "")
            if(tweet.entities.media){ // has image
                tweet.text = tweet.text.replace(tweet.entities.media[0].url, "<img src='" +tweet.entities.media[0].media_url+ "' />")
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
                    + '<a href="https://twitter.com/' +tweet.screen_name+ '" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;"><div style="padding-bottom:0"><img style="width:35px;border-radius:20px;display:inline;margin: 0 auto;" src="' +tweet.profile_image+ '"/></div><span style="margin:10px;">@' +tweet.screen_name+ '</span></a>'
                    + '<p>' +tweet.text+ '</p>'
                    + '<p><a href="https://twitter.com/i/web/status/' +tweet.id+ '" target="_blank" rel="noopener noreferrer">Ver más</a></p>'
                    + '</div>'
        }
    ).join('')
    return '<div class="blob_container"><div class="blob red"></div></div>'
            + showResponse                
}

export { contentAPI }