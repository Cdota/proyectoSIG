const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require('cors');


require("./database");

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use("/api",require("./routers/index"));

app.listen(4000);
console.log("Conectado al servidor:",4000); 