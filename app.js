const express  = require('express')
const bodyparser = require('body-parser')
const app = express();
const port = 3909 || process.env.port;
const { trim_all,trim_body,trim_params,trim_util } = require('request_trimmer');
const myRouter = require('./router/router.js')



app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(trim_all);
app.use('/',myRouter)




app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}`);
})

