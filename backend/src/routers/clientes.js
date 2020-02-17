const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

router.get("/obtenerClientes", async  (req,res) => {
  try {
        sql = "SELECT  CLIE.CLIE_ID, CLIE.CLIE_NOMBRE, CLIE.CLIE_APELLIDO, CLIE.CLIE_NUM_DOCUMENTO, CLIE.CLIE_TELEFONO, CLIE.CLIE_DIRECCION, CLIE.CLIE_EMAIL, CIUD.CIUD_NOMBRE, TI.DOC_TIPO  FROM CLIENTE CLIE, CIUDAD CIUD, TIPO_DOCUMENTO TI WHERE CLIE.CIUD_ID = CIUD.CIUD_ID AND CLIE.DOC_ID = TI.DOC_ID";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Clientes"});
  }
});

router.get("/obtenerCliente/:clie_num_documento", async  (req,res) => {
  try {
        let sql = `SELECT * FROM CLIENTE WHERE CLIE_NUM_DOCUMENTO = '${req.params.clie_num_documento}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(result);
        return res.send(result);
    } catch (error) {
        return res.json({ message: "Error al Obtener Cliente"});
  }
});

router.post("/registroCliente", async (req, res) => {
        const { clie_id, clie_nombre, clie_apellido,  clie_num_documento, clie_telefono, clie_direccion, clie_email, ciud_id, doc_id } = req.body;
        console.log( clie_id, clie_nombre, clie_apellido,  clie_num_documento, clie_telefono, clie_direccion, clie_email, ciud_id, doc_id);
  try {
        let sql = `SELECT * FROM CLIENTE WHERE CLIE_NUM_DOCUMENTO = '${clie_num_documento}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (result) return res.json({ message: "Ya se encuentra registrado"});
        sql = "INSERT INTO CLIENTE(CLIE_NOMBRE, CLIE_APELLIDO, CLIE_NUM_DOCUMENTO, CLIE_TELEFONO, CLIE_DIRECCION, CLIE_EMAIL, CIUD_ID, DOC_ID) VALUES (:clie_nombre, :clie_apellido, :clie_num_documento, :clie_telefono, :clie_direccion, :clie_email, :ciud_id, :doc_id )";
        datos = await coneccionbd.open(sql, [clie_nombre, clie_apellido,  clie_num_documento, clie_telefono, clie_direccion, clie_email, ciud_id, doc_id], true);
        if (datos == 1) return res.json({ message: "Registro con exito"});
    } catch (error) {
        return res.json({ message: "Error al registrar Cliente"});
  }
});

router.put("/actualizarCliente",async (req, res) => {
        const { clie_id, clie_nombre, clie_apellido,  clie_num_documento, clie_telefono, clie_direccion, clie_email, ciud_id, doc_id } = req.body;
        console.log( clie_id, clie_nombre, clie_apellido,  clie_num_documento, clie_telefono, clie_direccion, clie_email, ciud_id, doc_id);

       
        let sql = `SELECT * FROM CLIENTE WHERE CLIE_NUM_DOCUMENTO = '${clie_num_documento}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (!result) return res.json({ message: "No existe el Cliente"});
        sql = `UPDATE CLIENTE SET
                CLIE_NOMBRE = '${clie_nombre}', CLIE_APELLIDO = '${clie_apellido}', 
                CLIE_NUM_DOCUMENTO = '${clie_num_documento}', CLIE_TELEFONO = '${clie_telefono}', 
                CLIE_DIRECCION = '${clie_direccion}', CLIE_EMAIL = '${clie_email}', 
                CIUD_ID = '${ciud_id}', DOC_ID = '${doc_id}' 
              WHERE CLIE_NUM_DOCUMENTO = '${clie_num_documento}'`;
        datos = await coneccionbd.open(sql, [], true, res);
        if (datos == 1) return res.json({ message: "Actualizado" });
});

router.delete("/eliminarCliente/:clie_num_documento",async (req, res) =>  {
      try {
            let sql = `DELETE FROM CLIENTE WHERE CLIE_NUM_DOCUMENTO = '${req.params.clie_num_documento}'`;
            let result = JSON.parse(await coneccionbd.open(sql, [], true, res));
            if (result == 0) return res.json({ message: "No existe el usuario a eliminar" });
            return res.json({ message: "Proveedor eliminado con exito"});
        } catch (error) {
            return res.json({ message: "Error al Obtener Usuario"});
      }
});

module.exports = router;