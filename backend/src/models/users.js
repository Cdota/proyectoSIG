const oracledb = require('oracledb');
const database = require('../database');

const createSql =
 `insert into USUARIOS (
    USU_USUARIO,
    USU_PASSWORD
  ) values (
    :usu_usuario,
    :usu_password
  ) returning usuario_id
  into :usuario_id`;

async function create(emp) {
  const employee = Object.assign({}, emp);

  employee.usuario_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, employee);

  employee.usuario_id = result.outBinds.usuario_id[0];

  return employee;
}

module.exports.create = create;