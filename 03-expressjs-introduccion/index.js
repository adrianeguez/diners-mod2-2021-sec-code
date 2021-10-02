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

const Joi = require('joi');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post(
    '/', 
    (req, res)=>{  // /usuario/1/cuenta-bancaria/1234

        req.params // parametros ruta Ej: '/usuario/:idUsuario/cuenta-bancaria/:idCuenta'
        req.body // { "nombre":"Adrian", "apellido":"Eguez"  } JSON TEXTO PLANO .........
        req.query // POST http://localhost:3000/?edad=32&correo=a@a.com
        console.log(req.params);
        console.log(req.body);
        console.log(req.query);

        const schemaValidacion = Joi.object({
            nombre: Joi
            .string()
            .alphanum()
            .min(3)
            .max(10),

            apellido: Joi
            .string()
            .alphanum()
            .min(3)
            .max(10)
            .required(),
        });
        const valores = {
            nombre: req.headers.nombre,
            apellido: req.headers.apellido
        }
        schemaValidacion
        .validateAsync(valores)
        .then(
            ()=>{
                res.send('Datos validos');
            }
        )
        .catch(
            (error)=>{
                console.error(error);
                res.status(400).send('Error validando datos');
            }
        )
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














/*
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
* */