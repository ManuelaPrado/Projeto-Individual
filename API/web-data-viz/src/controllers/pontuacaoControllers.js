var pontuacaoModel = require("../models/pontuacaoModel");

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
module.exports = { registrar };

