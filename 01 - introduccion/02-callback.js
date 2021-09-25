const fs = require('fs'); // importar paquete fs
console.log('Primero');

// leer archivo './01-variables.js' CONTENIDO_UNO
// leer archivo './01-variables-typescript.ts' (cualquir otro archivo) CONTENIDO_DOS
// escribir nuevo archivo 04-ejercicio.txt CONTENIDO_UNO + CONTENIDO_DOS

let contenidoTotal = '';
fs.readFile( // PRIMERA LECTURA
    './01-variables.js',
    'utf-8',
    (errorPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('Error rf: ', errorPrimerArchivo);
        fs.readFile(  // SEGUNDA LECTURA
            './01-variables-typescript.ts', 
            'utf-8',
            (errorSegundoArchivo, contenidoSegundoArchivo) => { 
                console.log('Error rf: ', errorSegundoArchivo);
                contenidoTotal = contenidoPrimerArchivo + contenidoSegundoArchivo;
                fs.writeFile( // TERCER ESCRITURA
                    './04-ejercicio.txt', 
                    contenidoTotal, 
                    'utf-8', 
                    (error)=>{ 
                        if(error){
                            console.error('Error wf: ', error);
                        }else{
                            console.log('archivo creado');
                        }
                    }// TERMINA TERCERA ESCRITURA
                );
            } // TERMINA SEGUNDA LECTURA
        );
    }// TERMINA PRIMERA LECTURA
);

/*

*/

console.log('Tercero')