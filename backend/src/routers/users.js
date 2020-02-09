const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

router.get("/obtener", async  (req,res) => {
    sql = "SELECT * FROM USUARIO";
    const datos = await   coneccionbd.open(sql, [], false);
    console.log(datos);
    res.send(datos);
  });

router.post("/registro", (req, res) => {
   const { usu_id, usu_nombre, usu_apellido, usu_password, usu_num_documento, usu_telefono, usu_direccion, usu_email, rol_id, ciud_id, doc_id } = req.body;
   let salt = bcrypt.genSaltSync(10);
   let hash = bcrypt.hashSync(usu_password, salt);
   let sql = "INSERT INTO USUARIO(USU_NOMBRE, USU_APELLIDO, USU_PASSWORD, USU_NUM_DOCUMENTO, USU_TELEFONO, USU_DIRECCION, USU_EMAIL, ROL_ID, CIUD_ID, DOC_ID) VALUES (:usu_nombre, :usu_apellido, :hash, :usu_num_documento, :usu_telefono, :usu_direccion, :usu_email, :rol_id, :ciud_id, :doc_id )";
   coneccionbd.open(sql, [usu_nombre, usu_apellido, hash, usu_num_documento,usu_telefono, usu_direccion, usu_email, rol_id, ciud_id, doc_id ], true);
   const token = jwt.sign({ _id: usu_id }, "secretKey");
   res.status(200).json({ token });
});

router.post("/ingresar",async (req, res) => {
  const {usu_nombre, usu_password} = req.body;
  console.log(usu_nombre,usu_password);
  let sql = `SELECT * FROM USUARIO WHERE USU_NOMBRE = '${usu_nombre}'`;
  result = JSON.parse(await coneccionbd.open(sql, [], false))[0];
  if (!result) return res.send("Usuario no registrado");
  if (!bcrypt.compareSync(usu_password, result[3])) return res.send ("Password erroneo");
  const token = jwt.sign({ _id: usu_nombre }, "secretKey");
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