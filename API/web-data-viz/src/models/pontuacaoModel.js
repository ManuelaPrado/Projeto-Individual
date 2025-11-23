var database = require("../database/config");

function registrar(idUsuario, respostas, quiz) {
     let instrucoes = [];


       respostas.forEach(respostas => {
        instrucoes.push(`
            INSERT INTO pontuacao (id_usuario, acertou, quiz)
            VALUES (${idUsuario}, ${respostas}, ${quiz});
        `);
    });

        console.log("Executando inserts da pontuação:");

    return database.executar(instrucoes.join(" "));
}

module.exports = { registrar };
