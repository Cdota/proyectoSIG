const { Router } = require("express");
const router = Router();
//const user = require("../models/users");
const coneccionbd = require("../database");

router.get("/obtener", function (req,res) {
    sql = "SELECT * FROM USUARIOS";
        coneccionbd.open(sql, [], false, res);
        //res.contentType("application/json").status(200);
        //res.send(JSON.stringify("Hoal"));
        //res.contentType('application/json').status(200);
        //res.send(JSON.stringify(get.rows));
  });

router.post("/registro", (req, res) => {
    const {usu_usuario, usu_password} = req.body;
    console.log(usu_usuario, usu_password);
    //const newUser = new.user({usu_usuario, usu_password});
    //newUser.save();
    res.send("registro");
});

module.exports = router;