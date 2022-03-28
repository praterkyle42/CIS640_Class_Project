var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
    axios.get('https://jsonplaceholder.typicode.com/login/')
    .then(function(response) {
      console.log(response.data);
      res.render('login', {login: response.data});
    })
    
    });

    module.exports = router;
