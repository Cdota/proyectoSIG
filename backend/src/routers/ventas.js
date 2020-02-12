const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

router.get("/obtenerVentas", async  (req,res) => {
  try {
        sql = "SELECT * FROM VENTA";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Ventas"});
  }
});

router.get("/obtenerVenta/:ven_num_comprobante", async  (req,res) => {
  try {
        let sql = `SELECT * FROM PROVEEDOR WHERE VEN_NUM_COMPROBANTE = '${req.params.ven_num_comprobante}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(result);
        return res.send(result);
    } catch (error) {
        return res.json({ message: "Error al Obtener Venta"});
  }
});

router.post("/registroVenta", async (req, res) => {
        const { prov_id, prov_nombre, prov_num_documento, prov_telefono, prov_direccion, prov_email, doc_id, ciud_id } = req.body;
        console.log(prov_id, prov_nombre, prov_num_documento, prov_telefono, prov_direccion, prov_email, doc_id, ciud_id);
  try {
        let sql = `SELECT * FROM PROVEEDOR WHERE PROV_NUM_DOCUMENTO = '${prov_num_documento}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (result) return res.json({ message: "Ya se encuentra registrado"});
        sql = "INSERT INTO PROVEEDOR(PROV_NOMBRE, PROV_NUM_DOCUMENTO, PROV_TELEFONO, PROV_DIRECCION, PROV_EMAIL, DOC_ID, CIUD_ID) VALUES (:prov_nombre, :prov_num_documento, :prov_telefono, :prov_direccion, :prov_email, :doc_id, :ciud_id)";
        datos = await coneccionbd.open(sql, [prov_nombre, prov_num_documento, prov_telefono, prov_direccion, prov_email, doc_id, ciud_id], true);
        if (datos == 1) return res.json({ message: "Registro con exito"});
    } catch (error) {
        return res.json({ message: "Error al registrar Proveedor"});
  }
});

router.put("/actualizarProveedor",async (req, res) => {
        const { prov_id, prov_nombre, prov_num_documento, prov_telefono, prov_direccion, prov_email, doc_id, ciud_id } = req.body;
  try {
        let sql = `SELECT * FROM PROVEEDOR WHERE PROV_NUM_DOCUMENTO = '${prov_num_documento}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (!result) return res.json({ message: "No existe el Proveedor"});
        sql = `UPDATE PROVEEDOR SET
                PROV_NOMBRE = '${prov_nombre}', PROV_NUM_DOCUMENTO = '${prov_num_documento}', 
                PROV_TELEFONO = '${prov_telefono}', PROV_DIRECCION = '${prov_direccion}', 
                PROV_EMAIL = '${prov_email}', DOC_ID = '${doc_id}', 
                CIUD_ID = '${ciud_id}'
               WHERE PROV_NUM_DOCUMENTO = '${prov_num_documento}'`;
        datos = await coneccionbd.open(sql, [], true, res);
        if (datos == 1) return res.json({ message: "Actualizado" });
    } catch (error) {
        return res.json({ message: "Error al Actualizar Cliente"});
  }
});

module.exports = router;