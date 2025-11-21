var database = require("../database/config");

function buscarPorEmail(email) {

  var instrucaoSql = `SELECT * FROM aquario usuario  WHER  = ${email}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(email, senha ) {
  
  var instrucaoSql = `INSERT INTO (email, senha ) aquario VALUES ( ${email} , ${senha})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPorEmail,
  cadastrar
}
