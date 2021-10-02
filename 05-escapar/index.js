//npm i escape-html

var escapeHtml = require('escape-html');

const datosUsuarioBDD = "Adrian Eguez<script>alert('Hola')</script>";

console.log('<p>' + datosUsuarioBDD + '</p>');

console.log('<p>' + escapeHtml(datosUsuarioBDD) + '</p>')

// HTML
// !style !script
// " ' & < >