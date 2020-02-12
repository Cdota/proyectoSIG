const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const user = require('../src/routers/users');

//Base de Datos
require("./database");
 
//JSON
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//Router Users
app.use("/api",require("./routers/users"));
//Router Clientes
app.use("/api",require("./routers/clientes"));
//Router Proveedores
app.use("/api",require("./routers/proveedores"));
//Router Productos
app.use("/api",require("./routers/productos"));
//Router CategoriaProductos
app.use("/api",require("./routers/categoriaproductos"));
//Router CategoriaCiudad
app.use("/api",require("./routers/ciudad"));
//Router Rol
app.use("/api",require("./routers/rol"));
//Router Ventas
app.use("/api",require("./routers/ventas"));

//Conexion al puerto 3000
app.listen(3000);
console.log("Conectado al servidor:",3000); 