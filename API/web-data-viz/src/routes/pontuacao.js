var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/registrar", pontuacaoController.registrar); 

module.exports = router;

console.log(">>> ROTA /pontuacao CARREGADA <<<");