const { Router } = require("express");
const router = Router();
//const user = require("../models/users");
const coneccionbd = require("../database");

router.get("/obtener", function (req,res) {
    sql = "SELECT * FROM USUARIOS";
        coneccionbd.open(sql, [], false, res);
  });

router.post("/registro", (req, res) => {
   const {usu_id,usu_usuario, usu_password} = req.body;
   console.log(usu_id, usu_usuario,usu_password);
   sql = "INSERT INTO USUARIOS(USU_USUARIO, USU_PASSWORD) VALUES (:usu_usuario,:usu_password)";
   coneccionbd.open(sql, [usu_usuario,usu_password], true, res);
   res.send("registro");
});


 
module.exports = router;