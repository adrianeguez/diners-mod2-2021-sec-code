// 05-promesas.js 
// PROMESAS ASYNC AWAIT
const fs = require('fs');
function promesaSaludo(mensaje){
    return new Promise(
        (resolve, reject) => {
            console.log(mensaje);
            resolve(); // return
            // reject(); // throw
        }
    );
}
function esPositivo(numero){
    return new Promise(
        (resolve, reject) => {
            if(numero > 0){
                resolve(true); // return
            }else{
                reject(
                    { // throw
                    mensaje:'No es positivo',
                    }
                )
            }
        }
    );
}


function leerArchivo(path){
    return new Promise( 
        (resolve, reject) => { // EMPIEZA PROMESA
            fs.readFile( // Asincrona
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        reject({ // throw
                            mensaje: 'Error leyendo archivo',
                            error: error
                        });
                    }else{ 
                        resolve(contenido); // return
                    }
                }
            );
        }// TERMINA PROMESA
    );
}
let contenidoCompleto = '';
leerArchivo('./03-ejemplo.txt')
    .then( // respuesta leerArchivo('./03-ejemplo.txt')
        (datos)=>{
            console.log('Datos: ', datos);
            console.log('Termino primera promesa');
            contenidoCompleto = contenidoCompleto + datos;
            return leerArchivo('./01-variables-typescript.ts'); // return devolvemos la siguiente promesa!!!
        }
    )
    .then( // leerArchivo('./01-variables-typescript.ts')
        (datos)=>{
            console.log('Datos: ', datos);
            contenidoCompleto = contenidoCompleto + datos;
            console.log('COMPLETO: ', contenidoCompleto);
            console.log('Termino segunda promesa');
        }
    )
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );




/*
esPositivo(-2)
    .then( // try
        (datos)=>{
            console.log('Datos: ', datos);
            console.log('Termino promesa');
        }
    )
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );
*/
/*
promesaSaludo('Adrian')
    .then( // try
        (datos)=>{
            console.log('Datos: ', datos);
            console.log('Termino promesa');
        }
    )
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );
*/