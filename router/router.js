const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser');
const fetch = require('cross-fetch');
require('dotenv').config()

let data;

router.get('/', (req, res) => {
    res.render('index',{data});
})

router.post('/convertit', (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const amount = req.body.amount;

    var myHeaders = new fetch.Headers();
    myHeaders.append("apikey", `${process.env.API_key}`);
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.json())
      .then(data => res.render('index',{data}))
      .catch(error => console.log('error', error));
      
})


module.exports = router;