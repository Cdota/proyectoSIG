const { Router } = require("express");
const router = Router();
const coneccionbd = require("../database");

router.get("/obtenerProductos", async  (req,res) => {
  try {
        sql = "SELECT PRO.PROD_ID, PRO.PROD_NOMBRE, PRO.PROD_PRECIO_VENTA, PRO.PROD_CANIDAD, PRO.PROD_DESCRICPCION, PRO.PROD_FECHA,  CAT.CAT_NOMBRE,  PROV.PROV_NOMBRE  FROM PRODUCTO PRO, CATEGORIA CAT, PROVEEDOR PROV WHERE PRO.CAT_ID = CAT.CAT_ID AND PRO.PROV_ID = PROV.PROV_ID";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Productos"});
  }
});

router.get("/obtenerCompras", async  (req,res) => {
  try {
        sql = "SELECT PRO.PROD_ID, PRO.PROD_NOMBRE, PRO.PROD_DESCRICPCION,  PRO.PROD_PRECIO_VENTA, PRO.PROD_CANIDAD  FROM PRODUCTO PRO, CATEGORIA CAT WHERE PRO.CAT_ID = CAT.CAT_ID";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Productos"});
  }
});

router.get("/obtenerProductosVenta", async  (req,res) => {
  try {
        sql = "SELECT ING.ING_ID, ING.ING_NOMBRE_PRODUCTO, PRO.PROV_NOMBRE, ING.ING_CANTIDAD, ING.IMG_PRECIO, ING.ING_FECHA, ING.ING_TOTAL, ING.USUARIO  FROM PROVEEDOR PRO, INGRESO ING WHERE ING.PROV_ID = PRO.PROV_ID";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Productos"});
  }
});

router.get("/obtenerProductosCompra", async  (req,res) => {
  try {
        sql = "SELECT * FROM DATOS_VENTA";
        const datos = await   coneccionbd.open(sql, [], false);
        console.log(datos);
        return res.send(datos);
    } catch (error) {
        return res.json({ message: "Error al Obtener Productos"});
  }
});

//let sql = `SELECT est.est_cedula, est.est_nombres, est.est_apellidop, est.est_apellidom, est.est_fecha_nac, est.est_sexo, 
//ciu.ciudad_nombre, ciu.ciudad_id, 
//rep.rep_nombres, rep.rep_apellidop, rep.rep_apellidom, rep.rep_cedula
//FROM estudiantes est, ciudades ciu , representantes rep
//WHERE est.ciudad_id = ciu.ciudad_id AND est.rep_cedula = rep.rep_cedula`;
//let date_formatter = Date.parse(est_fecha_nac).toString("dd/MM/yyyy");
//to_date('${date_formatter}','dd/mm/yyyy'),
router.get("/obtenerProducto/:prod_nombre", async  (req,res) => {
  try {
        let sql = `SELECT * FROM PRODUCTO WHERE PROD_NOMBRE = '${req.params.prod_nombre}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        console.log(result);
        return res.send(result);
    } catch (error) {
        return res.json({ message: "Error al Obtener Producto"});
  }
});

router.post("/registroProductos", async (req, res) => {
        const { prod_id, prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id } = req.body;
        const { usuario} = req.body;
        console.log( prod_id, prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id);
        total = prod_precio_venta * prod_cantidad;
  try {
        let sql = `SELECT * FROM PRODUCTO WHERE PROD_NOMBRE = '${prod_nombre}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        var hora = (new Date()).getHours() + ":" +  (new Date()).getMinutes();
        if (result) return res.json({ message: "Ya se encuentra registrado"});
        sqls = `INSERT INTO PRODUCTO 
            (PROD_NOMBRE, PROD_PRECIO_VENTA, PROD_CANIDAD, PROD_DESCRICPCION, PROD_FECHA, CAT_ID, PROV_ID)
            VALUES ('${prod_nombre}','${prod_precio_venta}','${prod_cantidad}', '${prod_descripcion}'
            ,to_date('${prod_fecha}','YYYY-MM-DD'), '${cat_id}','${prov_id}')`;
        datos = await coneccionbd.open(sqls, [], true);
        sqlll = `INSERT INTO INGRESO 
            (ING_FECHA, ING_TOTAL, PROV_ID, USUARIO, ING_CANTIDAD, IMG_PRECIO, ING_NOMBRE_PRODUCTO, ING_HORA)
            VALUES (to_date('${prod_fecha}','YYYY-MM-DD'),'${total}', '${prov_id}', '${usuario}', '${prod_cantidad}','${prod_precio_venta}', '${prod_nombre}', '${hora}')`;
        datos = await coneccionbd.open(sqlll, [], true);
        if (datos == 1) return res.json({ message: "Registro con exito"});
    } catch (error) {
        return res.json({ message: "Error al Ingresar Producto"});
  }
});

router.post("/registroVentaProductos", async (req, res) => {
        const {  clie_nombre, prod_nombre, prod_precio_venta, prod_cantidad, prod_fecha } = req.body;
        const { nombre} = req.body;
        console.log(  clie_nombre, prod_nombre, prod_precio_venta, prod_cantidad, prod_fecha, nombre);
        total = prod_precio_venta * prod_cantidad;
        var hora = (new Date()).getHours() + ":" +  (new Date()).getMinutes();
        console.log(hora)
       /* let sqll = `SELECT * FROM USUARIO WHERE USU_NOMBRE = '${nombre}'`;
        usuario_id = JSON.parse(await coneccionbd.open(sqll, [], false))[0];
        console.log(usuario_id[0]);
        let sql = `SELECT * FROM CLIENTE WHERE  CLIE_NOMBRE = '${clie_nombre}'`;
        cliente_id = JSON.parse(await coneccionbd.open(sql, [], false))[0];
        console.log(cliente_id[0]);*/
        //console.log(cliente_id[0]);
        sqls = `INSERT INTO VENTA 
            (VEN_TOTAL, DESCRIPCION, CANTIDAD, PRECIO, HORA, VEN_FECHA, USUARIO, CLIENTE)
            VALUES ('${total}', '${prod_nombre}'
            ,'${prod_cantidad}', '${prod_precio_venta}','${hora}', to_date('${prod_fecha}','YYYY-MM-DD'),'${nombre}','${clie_nombre}')`;
        datos = await coneccionbd.open(sqls, [], true);
        sqlll = `INSERT INTO DATOS_VENTA 
            (DA_VENTA_DESCRIPCION, DA_VENTA_CANTIDAD, DA_VENTA_PRECIO, DA_VENTA_SUBTOTAL)
            VALUES ('${prod_nombre}', '${prod_cantidad}', '${prod_precio_venta}', '${total}')`;
        datos = await coneccionbd.open(sqlll, [], true);
        if (datos == 1) return res.json({ message: "Registro con exito"});
});

router.put("/actualizarProducto",async (req, res) => {
        const { prod_id, prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id } = req.body;
        console.log(prod_id, prod_nombre, prod_precio_venta, prod_cantidad, prod_descripcion, prod_fecha, cat_id, prov_id);
  try {
        let sql = `SELECT * FROM PRODUCTO WHERE PROD_ID = '${prod_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], false, res))[0];
        if (!result) return res.json({ message: "No existe el Producto"});
        sql = `UPDATE PRODUCTO SET
                PROD_NOMBRE = '${prod_nombre}', PROD_PRECIO_VENTA = '${prod_precio_venta}', 
                PROD_CANIDAD = '${prod_cantidad}', PROD_DESCRICPCION = '${prod_descripcion}', 
                PROD_FECHA = to_date('${prod_fecha}','YYYY-MM-DD'), CAT_ID = '${cat_id}', 
                PROV_ID = '${prov_id}'
               WHERE PROD_ID = '${prod_id}'`;
        datos = await coneccionbd.open(sql, [], true, res);
        if (datos == 1) return res.json({ message: "Actualizado" });
    } catch (error) {
        return res.json({ message: "Error al Actualizar Producto"});
  }
});

router.delete("/eliminarProducto/:prod_id",async (req, res) =>  {
  try {
        let sql = `DELETE FROM PRODUCTO WHERE PROD_ID = '${req.params.prod_id}'`;
        let result = JSON.parse(await coneccionbd.open(sql, [], true, res));
        if (result == 0) return res.json({ message: "No existe el usuario a eliminar" });
        return res.json({ message: "Producto eliminado con exito"});
    } catch (error) {
        return res.json({ message: "Error al Obtener Producto"});
  }
});

router.get("/obtenerCategoria", async  (req,res) => {
  try {
        let categoria = [];
        let sql = `SELECT * FROM CATEGORIA`;
        let datos = JSON.parse(await coneccionbd.open(sql, [], false, res));
        console.log(datos);
       // return res.send(datos);
       datos.forEach(element => {
         let obj = {};
         obj.cat_nombre = element[1];
         categoria.push(obj);
       });
       console.log(categoria)
       return res.json(categoria);
    } catch (error) {
        return res.json({ message: "Error al Obtener Productos"});
  }
});
module.exports = router;