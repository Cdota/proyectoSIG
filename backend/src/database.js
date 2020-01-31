const express = require("express");
const oracledb = require("oracledb");
const bodyparse = require("body-parser");
const app = express();

app.use(bodyparse.json());

app.use(bodyparse.urlencoded({
    extend:true
}));
var connAttrs ={
    "user": "USR_ORACLE",
    "password": "oracle123",
    "connectString": "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = alvaro-VirtualBox)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = alvaro-VirtualBox)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))"
}

oracledb.getConnection(connAttrs, function (err, connection) {
        
        connection.release(
            function (err) {
                if (err) {
                    console.error(err.message);
                    } else {
                        console.log("Conexion a la BD exitosa");
             }
        });
});


  
