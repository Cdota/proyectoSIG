const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

router.get("/obtenerRoles", async  (req,res) => {
  try {
        let sql = "SELECT * FROM ROL";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al  Obtener Roles"});
  }
});

router.get("/obtenerRol/:rol_nombre", async  (req,res) => {
  try {
        let sql = `SELECT * FROM ROL WHERE ROL_NOMBRE = '${req.params.rol_nombre}'`;
        let datos = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Rol"});
  }
});

router.post("/registroRol", async (req, res) => {
        const { rol_nombre, rol_descripcion } = req.body;
  try {
        let sql = `SELECT * FROM ROL WHERE ROL_NOMBRE = '${rol_nombre}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (result) return res.json({ message: "Ya se encuentra registrado", tipo: "error" });
        sql = "INSERT INTO ROL(ROL_NOMBRE, ROL_DESCRIPCION) VALUES (:rol_nombre, :rol_descripcion)";
        datos = await  coneccionbd.open(sql, [rol_nombre, rol_descripcion], true, res);
        if (datos == 1) return res.json({ message: "Registro con exito"});
    } catch (error) {
        return res.json({ message: "Error al Registrar Rol"});
  }
});

router.put("/actualizarRol",async (req, res) => {
        const { rol_id, rol_nombre, rol_descripcion } = req.body;
  try {
        let sql = `SELECT * FROM ROL WHERE ROL_ID = '${rol_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (!result) return res.json({ message: "No existe el Rol"});
        sql = `UPDATE ROL SET
              ROL_NOMBRE = '${rol_nombre}', ROL_DESCRIPCION = '${rol_descripcion}'
              WHERE ROL_ID = '${rol_id}'`;
        datos = await coneccionbd.open(sql, [], true, res);
        if (datos == 1) return res.json({ message: "Actualizado" });
    } catch (error) {
        return res.json({ message: "Error al Actualizar Rol"});
  }
});

module.exports = router;