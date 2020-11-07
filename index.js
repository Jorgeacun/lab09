const express = require('express');
const { dbconection } = require('./database/config');
require ('dotenv').config();
const cors = require('cors');



//console.log('Hola mundo');

// usuario : userJorge
//password : PIxwc36vEjDuJazx
// string coneccion: mongodb+srv://userJorge:<password>@cluster0.ooao6.mongodb.net/test
     //CONEXION CON CLAVE CAMBIADA
//mongodb+srv://userJorge:PIxwc36vEjDuJazx@cluster0.ooao6.mongodb.net/proyectosDB



//CODIGO PARA DESPLEGAR EL SERVIDOR
const server = express();

server.use(cors());

//PRIMERA PETICION GET
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicios REST'
    });
});

dbconection();

console.log(process.env);
server.listen(process.env.PORT, () => {
    console.log('El servidor se está ejecutando en el puerto: ' + process.env.PORT),
        console.log('Jorge Luis Acuña Huaripata')



});

//PRIMERA PETICION GET