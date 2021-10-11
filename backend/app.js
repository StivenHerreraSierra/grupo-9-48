require("dotenv").config();

//Configuración del servidor web

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Agregar rutas a escuchar
app.use("/api", require("./routes/routes"));

//Carga de archivos
app.use(express.static("resources")) //le dice a express que la carpeta guarda archivos (no binarios).

//Configurar la conexión a la base de datos
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch(err => console.error(err));

//Despliegue del front en producción
if(process.env.NODE_ENV === 'production') { //Si node dice que estamos en producción.
    app.use(express.static(__dirname+"/site/")); //La carpeta site debe ser parte del contenido estático.
    app.get("*", (req, res) => {
        res.sendFile(__dirname+"/site/index.html"); //Envía el archivo index.html que está dentro de /site.
    })
}

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Puerto: ${port}`));

