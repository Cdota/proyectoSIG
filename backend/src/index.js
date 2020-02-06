const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const user = require('../src/routers/users');

require("./database");

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));


//app.use("/", user.verifyToken, user.index);
app.use("/api",require("./routers/users"));

app.listen(3000);
console.log("Conectado al servidor:",3000); 