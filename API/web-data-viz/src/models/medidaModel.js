var database = require("../database/config");

function respostaPergunta(idusuario, acertou) {

    var instrucaoSql = `SELECT 
    u.nome,
    SUM(p.acertou) AS acertos,
    COUNT(*) - SUM(p.acertou) AS erros,
	count(*) as total
FROM pontuacao p
JOIN usuario u ON u.idusuario = p.id_usuario
GROUP BY u.idusuario, u.nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function respostaEmTempoReal(idusuario) {

    var instrucaoSql = `
select data_resposta as tempo
from pontuacao p 
join usuario u 
on u.idusuario = p.id_usuario
GROUP BY u.idusuario, data_resposta;
   `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    respostaPergunta,
    respostaEmTempoReal
}
