const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

router.get("/obtenerCiudades", async  (req,res) => {
  try {
        let sql = "SELECT * FROM CIUDAD";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al  Obtener Ciudad"});
  }
});

router.get("/obtenerCiudad/:ciud_nombre", async  (req,res) => {
  try {
        let sql = `SELECT * FROM CIUDAD WHERE CIUD_NOMBRE = '${req.params.ciud_nombre}'`;
        let datos = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Ciudad"});
  }
});

router.post("/registroCiudad", async (req, res) => {
        const { ciud_nombre } = req.body;
        console.log(ciud_nombre);
  try {
        let sql = `SELECT * FROM CIUDAD WHERE CIUD_NOMBRE = '${ciud_nombre}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (result) return res.json({ message: "Ya se encuentra registrado", tipo: "error" });
        sql = "INSERT INTO CIUDAD(CIUD_NOMBRE) VALUES (:ciud_nombre)";
        datos = await  coneccionbd.open(sql, [ciud_nombre], true, res);
        if (datos == 1) return res.json({ message: "Registro con exito"});
    } catch (error) {
        return res.json({ message: "Error al Registrar Ciudad"});
  }
});

router.put("/actualizarCiudad",async (req, res) => {
        const { ciud_id, ciud_nombre } = req.body;
  try {
        let sql = `SELECT * FROM CIUDAD WHERE CIUD_ID = '${ciud_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (!result) return res.json({ message: "No existe la Ciudad"});
        sql = `UPDATE CIUDAD SET
              CIUD_NOMBRE = '${ciud_nombre}'
              WHERE CIUD_ID = '${ciud_id}'`;
        datos = await coneccionbd.open(sql, [], true, res);
        if (datos == 1) return res.json({ message: "Actualizado" });
    } catch (error) {
        return res.json({ message: "Error al Actualizar Ciudad"});
  }
});

module.exports = router;