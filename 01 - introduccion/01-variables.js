// 01-variables.js
console.log('Hola mundo');

// Declarar variables

// Mutables -> = -> reasignadas

var variableUno = 1;
let variableDos = 2;
variableUno = 3;
variableDos = 3;

// Inmutables -> no = -> no reasignadas

const noPuedoCambiar = 1;
// noPuedoCambiar = "212";

// Tipos de variables

const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Adrian"; // string
const apellido = 'Eguez'; // string
const booleanooo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd")); // number
console.log(Number("fadsa")); // NaN

// Truty Falsy

if(true == true){
    console.log("Es verdadero"); //!
}else{
    console.log("Es Falso");
}
if(""){
    console.log("Es verdadero");
}else{
    console.log("Es Falsy"); //!
}
if("Adrian"){
    console.log("Es truty"); //!
}else{
    console.log("Es Falso");
}

if(-1){
    console.log("Es truty"); // Truty
}else{
    console.log("Es Falso");
}
if(0){
    console.log("Es truty");
}else{
    console.log("Es Falso"); // Falsy
}
if(1){
    console.log("Es truty"); // Truty
}else{
    console.log("Es Falso");
}

// JSON

const adrian = {
    nombre: "Adrian", // llave: valor,
    apellido: 'Eguez',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda'],
}; // object

adrian.nombre; // "Adrian"
adrian["nombre"]; // "Adrian"
adrian.nombre = "Vicente";
if(adrian){ // Codificacion Defensiva
    if(adrian.ropa){
        console.log(adrian.ropa.color);
        console.log(adrian["ropa"]["color"]);
    }
}
console.log(adrian);
console.log(Object.keys(adrian)); // llaves
console.log(Object.values(adrian)); // valores

// Arreglos

const arreglo = [6, 7, 8, 9, 10];

const arregloTodo = [
    true, 1, 1.2, "Adrian", undefined, null, {}, [1, 2, true, "A"]
];


















