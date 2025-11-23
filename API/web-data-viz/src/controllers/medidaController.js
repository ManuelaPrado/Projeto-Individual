var medidaModel = require("../models/medidaModel");



function registrar(req, res) {
    const {idUsuario, respostas, quiz } = req.body;

   if (!idUsuario) {
        return res.status(400).json({ erro: "ID do usuário não enviado." });
    }

    if (!Array.isArray(respostas) || respostas.length === 0) {
        return res.status(400).json({ erro: "Lista de respostas inválida." });
    }

    pontuacaoModel.registrar(idUsuario, respostas, quiz)
      .then(() => {
            res.status(200).send("Pontuação registrada com sucesso!");
        })
        .catch(erro => {
            console.error("Erro ao registrar pontuação:", erro);
            res.status(500).json({ erro: "Erro no servidor." });
        });
    }

function respostaPergunta(req, res) {

    const acertou = 7;

    var idusuario = req.params.idusuario;

    console.log(`Recuperando as ultimas ${acertou} medidas`);

    medidaModel.respostasPergunta(idusuario, acertou).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function respostaEmTempoReal(req, res) {

    var idusuario = req.params.idusuario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.respostaEmTempoReal(idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    respostaPergunta,
    respostaEmTempoReal, 
    registrar

}