var medidaModel = require("../models/medidaModel");

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
    respostaEmTempoReal

}