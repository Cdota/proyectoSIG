const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

const jwt = require("jsonwebtoken");

router.get("/obtener", async  (req,res) => {
    sql = "SELECT * FROM USUARIOS";
    const datos = await   coneccionbd.open(sql, [], false);
    res.send(datos);
  });

router.post("/registro", (req, res) => {
   const { usu_id, usu_usuario, usu_password } = req.body;
   console.log(usu_id, usu_usuario,usu_password);
   let sql = "INSERT INTO USUARIOS(USU_USUARIO, USU_PASSWORD) VALUES (:usu_usuario,:usu_password)";
   coneccionbd.open(sql, [usu_usuario,usu_password], true);
   const token = jwt.sign({ _id: usu_id }, "secretKey");
   res.status(200).json({ token });
});

router.post("/ingresar",async (req, res) => {
  const {usu_usuario, usu_password} = req.body;
  console.log(usu_usuario,usu_password);
  let sql = `SELECT * FROM USUARIOS WHERE USU_USUARIO = '${usu_usuario}'`;
  result = JSON.parse(await coneccionbd.open(sql, [], false))[0];
  if (!result) return res.send("Usuario no registrado");
  if (result[2] != usu_password) return res.send ("Password erroneo");
  const token = jwt.sign({ _id: usu_usuario }, "secretKey");
  return res.status(200).json({ token });
});

function verifyToken  (req, res, next) {
  if (!req.headers.authorization) return res.status(401).json({ message: "No esta autorizado para ver esto" });
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') return res.status(401).json({ message: "No esta autorizado para ver esto" });

  let payload = jwt.verify(token, 'secretKey');
  req.user_email = payload._id;
  next();
}
module.exports = router;