var express = require("express");

var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.post("/registrar/:idusuario", function (req, res) {
 medidaController.registrar(req, res); 
});

router.get("/ultimas/:idusuario", function (req, res) {
    medidaController.respostaPergunta(req, res);
});

router.get("/tempo-real/:idusuario", function (req, res) {
    medidaController.respostaEmTempoReal(req, res);
})

module.exports = router;