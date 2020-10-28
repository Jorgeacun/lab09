const express = require('express');
const { dbconection } = require('./databas/config');

 require('dotenv').config();




//console.log('Hola mundo');

//USUARIO:userJorge
//password: PIxwc36vEjDuJazx
//STRING CONEXION:  mongodb+srv://userJorge:<password>@cluster0.ooao6.mongodb.net/test
     //CONEXION CON CLAVE CAMBIADA
//mongodb+srv://userJorge:PIxwc36vEjDuJazx@cluster0.ooao6.mongodb.net/test

//CODIGO PARA DESPLEGAR EL SERVIDOR
const server = express();

server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicios REST'
    });
});

dbconection();

//console.log(process.env);

server.liste(process.env.PORT, () => {
    console.log('El servidor se está ejecutando en el puerto: ' + 3000),
        console.log('Edwin Valencia Castillo')



});

//PRIMERA PETICION GET