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
  T.get('search/tweets', { q: '#AnimalCrossing turnip', count: 5 }, (err, data, response) => {
    const tweets = data.statuses
      .map(tweet => tweet.text)
      // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
      //   .filter(tweet => tweet.toLowerCase().includes('elon'));
      console.log(tweets)
      res.send(tweets)
  })
})
module.exports = router;