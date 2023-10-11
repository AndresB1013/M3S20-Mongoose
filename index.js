const express =  require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Para poder consumir API desde distintos dominios
app.use(cors());
//Es para poder leer la entrada de datos como Json
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API V1.0 con mongoose"); // Se utiliza para mandar texto plano
    // res.json(); Esto sirve para mandar un JSON
});

app.listen(process.env.PORT,()=>{
    console.log(`La aplicacion esta corriendo en el puerto: ${process.env.PORT}`)
});