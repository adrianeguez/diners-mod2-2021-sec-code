const fs = require('fs'); // importar paquete fs
console.log('Primero');

// leer archivo './01-variables.js' CONTENIDO_UNO
// leer archivo './01-variables-typescript.ts' (cualquir otro archivo) CONTENIDO_DOS
// escribir nuevo archivo 04-ejercicio.txt CONTENIDO_UNO + CONTENIDO_DOS


fs.readFile( // Asincronas
    './01-variables.js', // path
    'utf-8', // codificacion
    (error, contenido) => { // CALLBACK
        console.log('Error rf: ', error);
        // console.log('Contenido: ', contenido);
        console.log('Segundo');
    }
);

fs.writeFile( // Asincronas
    './03-ejemplo.txt', // nombre archivo
    'Hola mundo', // Contenido del archivo
    'utf-8', // Codificacion
    (error)=>{ // CALLBACK
        if(error){
            console.error('Error wf: ', error);
        }else{
            console.log('archivo creado');
        }
    }
);


console.log('Tercero')