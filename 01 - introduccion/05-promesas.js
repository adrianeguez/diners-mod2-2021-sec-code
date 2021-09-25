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
// HACER PROMESA A LA FUNCION ASINCRONA fs.writeFile
function crearArchivo(path, contenido){ 
    return new Promise( 
        (resolve, reject) => { // EMPIEZA PROMESA
            fs.writeFile( // TERCER ESCRITURA
                path, 
                contenido, 
                'utf-8', 
                (error)=>{ 
                    if(error){
                        reject({ // throw
                            mensaje: 'Error leyendo archivo',
                            error: error
                        });
                    } else {
                        resolve({
                            mensaje: 'Archivo escrito con exito'
                        }); // return
                    }
                }// TERMINA TERCERA ESCRITURA
            );
        }// TERMINA PROMESA
    );
}

// ASYNC AWAIT 
// ASYNC FUNCIONA SOLO EN FUNCIONES ANONIMAS (funcion anonima, fat arrow functions)
// ASYNC FUNCIONA METODOS DE CLASES
// ASYNC FUNCIONA FUNCIONES NOMBRADAS

// 1) escribir la palabra "async" antes de la funcion
// Funciones nombradas
async function ejecutarEjercicioAsyncAwait(){

}
// Funciones anonimas
const a = async function(){};
const b = async ()=>{};
// Metodos de clases
class Usuario {
    async llamarUsuario(){

    }
}

// EJERCICIO
// leer archivo './01-variables.js'
// leer archivo './01-variables-typescript.ts'
// leer archivo './02-callbacks.js'
// leer archivo './03-ejemplo.txt'
// escribir nuevo archivo 05-ejercicio-try-catch.txt CONTENIDO TOTAL EN ORDEN

async function ejercicioAsyncAwait(){
    try {
        const respuestaPrimerArchivo = await leerArchivo('./01-variables.js');
        const respuestaSegundoArchivo = await leerArchivo('./01-variables-typescript.ts');
        const respuestaTercerArchivo = await leerArchivo('./02-callback.js');
        const respuestaCuartoArchivo = await leerArchivo('./03-ejemplo.txt');
        const contenidoFinal = respuestaPrimerArchivo + respuestaSegundoArchivo + respuestaTercerArchivo
        + respuestaCuartoArchivo;
        await crearArchivo('./05-ejercicio-async-await.txt', contenidoFinal);
    } catch (error) {
        console.error(error);
    }
}

ejercicioAsyncAwait().then().catch();








/*

const primeraCadena = (datos)=>{
    const numero = '\n********************** UNO ************************************\n';
    console.log(numero);
    contenidoCompleto = contenidoCompleto + numero + datos;
    return leerArchivo('./01-variables-typescript.ts');
}

let contenidoCompleto = '';
leerArchivo('./01-variables.js')
    .then(
        primeraCadena
    )
    .then(
        (datos)=>{
            const numero = '\n********************** DOS ************************************\n';
            console.log(numero);
            contenidoCompleto = contenidoCompleto + numero + datos;
            return leerArchivo('./02-callback.js');
        }
    )
    .then(
        (datos)=>{
            const numero = '\n********************** TRES ************************************\n';
            console.log(numero);
            contenidoCompleto = contenidoCompleto + numero + datos;
            return leerArchivo('./03-ejemplo.txt');
        }
    )
    .then(
        (datos)=>{
            const numero = '\n********************** CUATRO ************************************\n';
            console.log(numero);
            contenidoCompleto = contenidoCompleto + numero + datos;
            console.log(contenidoCompleto);
            return crearArchivo('./05-ejercicio.txt', contenidoCompleto);
        }
    )
    .then(
        (datos)=>{
            const numero = '\n********************** QUINTO PASO ESCRITURA ************************************\n';
            console.log(numero);
            console.log(datos);
        }
    )
    .catch( // catch
        (error)=>{
            console.log('Error: ', error);
        }
    );

*/


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