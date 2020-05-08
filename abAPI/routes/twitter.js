var express = require("express")
var router = express.Router()

//
router.get('/', function(req, res, next){
    res.send('TW API is working. 2.0')
    //res.send('TW 2');
});

module.exports = router;