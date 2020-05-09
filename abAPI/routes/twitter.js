var express = require("express")
var router = express.Router()
var Twit = require('twit')

const consumer_key =       "1UC2bP9BteFaqAh7QTBSxIitz"
const consumer_secret =    "cTZ2MH8z7keQaWtjClvSuevDlWGWSMl6QG0xd5iv8Tn8xjWuV1"
const access_token =       "1258491948396150789-7Y64qbxKDgs0quQ5EOYaGiVGEcfPLV" 
const access_token_secret ="9x3amlTkGFef8CPlxhs3RoQ3n5wYIeijTyxN1F7eDcalq"

// documentation - https://github.com/tombaranowicz/TwitterMonitoringJavaScript
var T = new Twit({
  consumer_key:         consumer_key,
  consumer_secret:      consumer_secret,
  access_token:         access_token,
  access_token_secret:  access_token_secret,
});

router.get('/', (req, res, next) => {
  T.get('search/tweets', { q: '#AnimalCrossing turnip', result_type: "recent", count: 50,}, 
    (err, data, response) => {
      /*
      * Time to be "That guy":
      * Not sure how to refactor this efficiently so I'm leaving this for now.
      * Good luck future me or other degenerates
      *  9/5/2020
      */
      
      //console.log(data.statuses)
      //data.statuses.length = 10 // Max number of tweets
      
      //data.statuses
      let tweets = data.statuses
        .filter(tweet => !tweet.retweeted_status) // No RTs
        .map((tweet, i, a ) => {
          const getData = [ // Gets tweet attributes we want
            user = tweet.user.name,
            text = tweet.text
          ]
          return getData
        })
      console.log(tweets)
      console.log(tweets.length)
      if(tweets.length > 10) {tweets.length = 10}
      res.send(tweets)
    })
})
module.exports = router;