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
   console.log( usu_id, usu_nombre, usu_apellido, hash, usu_num_documento, usu_telefono, usu_direccion, usu_email, rol_id, ciud_id, doc_id);
   let sql = "INSERT INTO USUARIO(USU_NOMBRE, USU_APELLIDO, USU_PASSWORD, USU_NUM_DOCUMENTO, USU_TELEFONO, USU_DIRECCION, USU_EMAIL, ROL_ID, CIUD_ID, DOC_ID) VALUES (:usu_nombre, :usu_apellido, :hash, :usu_num_documento, :usu_telefono, :usu_direccion, :usu_email, :rol_id, :ciud_id, :doc_id )";
   coneccionbd.open(sql, [usu_nombre, usu_apellido, hash, usu_num_documento,usu_telefono, usu_direccion, usu_email, rol_id, ciud_id, doc_id ], true);
   const token = jwt.sign({ _id: usu_id }, "secretKey");
   return res.status(200).json({ token });
});

router.post("/ingresar",async (req, res) => {
  const {usu_nombre, usu_password} = req.body;
  console.log(usu_nombre,usu_password);
  let sql = `SELECT * FROM USUARIO WHERE USU_NOMBRE = '${usu_nombre}'`;
  result = JSON.parse(await coneccionbd.open(sql, [], false))[0];
  //console.log(result);
  if (!result) return res.send("Usuario no registrado");
  if (!bcrypt.compareSync(usu_password, result[3])) return res.send ("Password erroneo");
  const token = jwt.sign({ _id: usu_nombre }, "secretKey");
  return res.status(200).json({ token });
});

router.put("/actualizar",async (req, res) => {
  const { usu_nombre, usu_apellido, usu_password, usu_num_documento, usu_telefono, usu_direccion, usu_email, rol_id, ciud_id, doc_id } = req.body;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(usu_password, salt);
  
      console.log( usu_nombre, usu_apellido, hash, usu_num_documento, usu_telefono, usu_direccion, usu_email, rol_id, ciud_id, doc_id);
        let sql = `SELECT * FROM USUARIO WHERE USU_NUM_DOCUMENTO = '${usu_num_documento}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(result);
        if (!result) return res.json({ message: "No existe estudiante registrado a editar", tipo: "error" });
        sql = `UPDATE USUARIO SET
            USU_NOMBRE = '${usu_nombre}', USU_APELLIDO = '${usu_apellido}', 
            USU_PASSWORD = '${hash}', USU_NUM_DOCUMENTO = '${usu_num_documento}', 
            USU_TELEFONO= '${usu_telefono}', USU_DIRECCION= '${usu_direccion}',
            USU_EMAIL= '${usu_email}', ROL_ID= '${rol_id}',
            CIUD_ID= '${ciud_id}', DOC_ID= '${doc_id}'
            WHERE USU_NUM_DOCUMENTO = '${usu_num_documento}'`;
        result = await coneccionbd.open(sql, [], true, res);
        res.send(result);
        if (result == 1) return res.status(200).json("Actualizado!!");
});

router.delete("/eliminar",async (req, res) =>  {
  const { usu_num_documento } = req.body;
  try {
      let sql = `DELETE FROM USUARIO where USU_NUM_DOCUMENTO = '${usu_num_documento}'`;
      let result = JSON.parse(await coneccionbd.open(sql, [], true, res));
      if (result == 0) return res.json({ message: "No existe el usuario a eliminar" });
      return res.json({ message: "Usuario eliminado con exito"});
  } catch (err) {
      return res.json({ message: "Error al eliminar usuario" });
  }
});

router.get("/obtenerUsuario", async  (req,res) => {
  const { usu_num_documento } = req.body;
  console.log("valiste",usu_num_documento);
  let sql = `SELECT * FROM USUARIO WHERE USU_NUM_DOCUMENTO = '${usu_num_documento}'`;
  let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
  console.log(result);
  return res.send(result);
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