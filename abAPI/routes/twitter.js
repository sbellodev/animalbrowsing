var express = require("express")
var router = express.Router()
var Twit = require('twit')
// const notifier = require('node-notifier');
// const open = require('open');
// const franc = require('franc')



const consumer_key =       "1UC2bP9BteFaqAh7QTBSxIitz"
const consumer_secret =    "cTZ2MH8z7keQaWtjClvSuevDlWGWSMl6QG0xd5iv8Tn8xjWuV1"
const access_token =       "1258491948396150789-7Y64qbxKDgs0quQ5EOYaGiVGEcfPLV" 
const access_token_secret ="9x3amlTkGFef8CPlxhs3RoQ3n5wYIeijTyxN1F7eDcalq"

var T = new Twit({
  consumer_key:         consumer_key,
  consumer_secret:      consumer_secret,
  access_token:         access_token,
  access_token_secret:  access_token_secret,
});

const tweets = ""

T.get('search/tweets', { q: '#AnimalCrossing turnip ', count: 5 }, function(err, data, response) {
  const tweets = data.statuses
  // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
  .map(tweet => tweet.text)
//   .filter(tweet => tweet.toLowerCase().includes('elon'));
  console.log(tweets);
})
//(async () => {

    //1. GET RECENT TWEETS

    
    //SHOW NOTIFICATION FOR EACH RECEIVED TWEET
    // stream.on('tweet', function (tweet) {
    //   console.log(tweet.text);
    //   let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

    //   notifier.notify({
    //     title: tweet.user.name,
    //     message: tweet.text
    //   });

    //   notifier.on('click', async function(notifierObject, options, event) {
    //     console.log('clicked');
    //     await open(url);
    //   });
    // })
//})();



router.get('/', function(req, res, next){
    res.send("test")
    //res.send('TW 2');
});

module.exports = router;