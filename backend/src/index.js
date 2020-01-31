const express = require("express");
const app = express();


require("./database");

app.use(express.json());

app.use("/api",require("./routers/index"));

app.listen(3000);
console.log("Conectado al servidor:",3000); 