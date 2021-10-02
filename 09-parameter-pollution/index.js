// npm install express
// npm install hpp

// npm install express hpp

const express = require('express')
const app = express()
const port = 3000

const hpp = require('hpp');
app.use(hpp());

app.get(
    '/', 
    (req, res)=>{
        console.log(req.query);
        res.send('OK')
    }
);

app.listen(port, ()=>{
    console.log('App levantada en el puerto ', port)
})