const argv = require('./config/yargs').argv;
//por si la variable tiene la propiedad del color
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//const fs= require('express');
//const fs= require('./fs');

//let base = "abc";

//donde estan las entradas de direccion node, direccion archivo y las entradas
// let argv = process.argv;
// let parametro = argv[2];
// //dividir en array por el = de separador 
// let base = parametro.split('=')[1];

console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
// console.log('Limite', argv.limite);