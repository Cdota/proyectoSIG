const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

router.get("/obtenerPrudctos", async  (req,res) => {
  try {
        sql = "SELECT * FROM PRODUCTO";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Productos"});
  }
});

router.get("/obtenerProducto/:prod_id", async  (req,res) => {
  try {
        let sql = `SELECT * FROM PRODUCTO WHERE PROD_ID = '${req.params.prod_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(result);
        return res.send(result);
    } catch (error) {
        return res.json({ message: "Error al Obtener Producto"});
  }
});

router.post("/registroProducto", async (req, res) => {
        const { prod_id, prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id } = req.body;
        console.log( prod_id, prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id);
  try {
        let sql = `SELECT * FROM PRODUCTO WHERE PROD_ID = '${prod_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (result) return res.json({ message: "Ya se encuentra registrado"});
        sql = "INSERT INTO PRODUCTO(PROD_NOMBRE, PROD_PRECIO_VENTA, PROD_CANTIDAD, PROD_DESCRIPCION, PROD_FECHA, CAT_ID, PROV_ID) VALUES (:prod_nombre, :prod_precio_venta, :prod_cantidad, :prod_descripcion, :prod_fecha, :cat_id, :prov_id)";
        datos = await coneccionbd.open(sql, [prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id], true);
        if (datos == 1) return res.json({ message: "Registro con exito"});
    } catch (error) {
        return res.json({ message: "Error al registrar Prodcuto"});
  }
});

router.put("/actualizarProducto",async (req, res) => {
        const { prod_id, prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id } = req.body;
  try {
        let sql = `SELECT * FROM PRODUCTO WHERE PROD_ID = '${prod_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (!result) return res.json({ message: "No existe el Producto"});
        sql = `UPDATE PRODUCTO SET
                PROD_NOMBRE = '${prod_nombre}', PROD_PRECIO_VENTA = '${prod_precio_venta}', 
                PROD_CANTIDAD = '${prod_cantidad}', PROD_DESCRIPCION = '${prod_descripcion}', 
                PROD_FECHA = '${prod_fecha}', CAT_ID = '${cat_id}', 
                PROV_ID = '${prov_id}'
               WHERE PROD_ID = '${prod_id}'`;
        datos = await coneccionbd.open(sql, [], true, res);
        if (datos == 1) return res.json({ message: "Actualizado" });
    } catch (error) {
        return res.json({ message: "Error al Actualizar Cliente"});
  }
});

module.exports = router;