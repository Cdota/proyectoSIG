const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

router.get("/obtenerCategorias", async  (req,res) => {
  try {
        let sql = "SELECT * FROM CATEGORIA";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al  Obtener Categorias"});
  }
});

router.get("/obtenerCategoria/:cat_nombre", async  (req,res) => {
  try {
        let sql = `SELECT * FROM CATEGORIA WHERE CAT_NOMBRE = '${req.params.cat_nombre}'`;
        let datos = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Categoria"});
  }
});

router.post("/registroCategoria", async (req, res) => {
        const { cat_nombre, cat_descripcion } = req.body;
        console.log( cat_nombre, cat_descripcion);
  try {
        let sql = `SELECT * FROM CATEGORIA WHERE CAT_NOMBRE = '${cat_nombre}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (result) return res.json({ message: "Ya se encuentra registrado", tipo: "error" });
        sql = "INSERT INTO CATEGORIA(CAT_NOMBRE, CAT_DESCRIPCION) VALUES (:cat_nombre, :cat_descripcion)";
        datos = await  coneccionbd.open(sql, [cat_nombre, cat_descripcion], true, res);
        if (datos == 1) return res.json({ message: "Registro con exito"});
    } catch (error) {
        return res.json({ message: "Error al Registrar Categoria"});
  }
});

router.put("/actualizarCategoria",async (req, res) => {
  const { cat_id, cat_nombre, cat_descripcion } = req.body;
  try {
        let sql = `SELECT * FROM CATEGORIA WHERE CAT_ID = '${cat_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (!result) return res.json({ message: "No existe la categoria"});
        sql = `UPDATE CATEGORIA SET
              CAT_NOMBRE = '${cat_nombre}', CAT_DESCRIPCION = '${cat_descripcion}'
              WHERE CAT_ID = '${cat_id}'`;
        datos = await coneccionbd.open(sql, [], true, res);
        if (datos == 1) return res.json({ message: "Actualizado" });
    } catch (error) {
        return res.json({ message: "Error al Actualizar Categoria"});
  }
});

module.exports = router;