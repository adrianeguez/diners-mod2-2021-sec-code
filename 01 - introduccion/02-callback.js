const fs = require('fs');
console.log('Primero');

fs.readFile( // Asincronas
    './01-variables.js', // path
    'utf-8', // codificacion
    (error, contenido) => {
        console.log('Error: ', error);
        // console.log('Contenido: ', contenido);
        console.log('Segundo');
    }
)

console.log('Tercero')