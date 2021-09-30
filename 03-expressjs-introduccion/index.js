// npm install express
// npm install raw-body
// npm install content-type
// npm install joi


// npm install express joi content-type raw-body

const express = require('express');
const app = express();
const port = 3000;
// dependencias
const getRawBody = require('raw-body')
const contentType = require('content-type')
app.use( // middleware 
    (req, res, next)=>{
        if(!['POST', 'PUT', 'DELETE'].includes(req.method)){ // Si es diferente de estos metodos, no verificar el peso
            next()
            return
        }
        getRawBody(
            req, // peticion request
            { // configuracion
            length: req.headers['content-length'],
            limit: '1b', // 1b = 1byte 1Mb = 1Mb ....
            encoding: contentType.parse(req).parameters.charset
            },
            (err, string)=>{ // callback
                if(err) return next(err)
                req.text = string
                next()
            }
        )
    }
);
app.post(
    '/', 
    (req, res)=>{
        res.send('Hola mundo POST');
    }
)

app.get(
    '/', 
    (req, res)=>{
        res.send('Hola mundo GET');
    }
)

app.listen(port, ()=>{
    console.log('App levantada en el puerto ', port);
});
