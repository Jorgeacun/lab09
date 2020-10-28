const mongoose = require ('mongoose');

const dbconection = async()=>{
    try{
       await mongoose.connect( process.env.DB_CNN,{
            userNewUrlParser:true,
            userUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Conexion exitosa a la base de datos');


    }catch(error){
        console.log(error)
        throw new Error ('Error a la conexion a la base de Datos')
    }
    
}

 module.exports ={
     dbconection
 
}