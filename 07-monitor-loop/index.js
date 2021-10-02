// npm install express
// npm install toobusy-js

// npm install express toobusy-js

const express = require('express')
const toobusy = require('toobusy-js');
const app = express()
const port = 3000

app.use( // middleware
    (req, res, next) => {
    if (toobusy()) {
        res.send(503, "Server Too Busy");
    } else {
    next();
    }
});

app.get(
    '/', 
    (req, res)=>{
        res.send('Hola mundo GET')
    }
)   

app.listen(port, ()=>{
    console.log('App levantada en el puerto ', port)
})