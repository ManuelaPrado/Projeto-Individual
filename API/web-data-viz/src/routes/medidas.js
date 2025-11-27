var express = require("express");

var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.post("/registrar", function (req, res) {
 medidaController.registrar(req, res); 
});

router.get("/Cards/:idUsuario", function (req, res) {
    medidaController.MedidasKpi(req, res);
});

router.get("/grafico/", function (req, res) {
    medidaController.MedidasGrafico(req, res);
});

module.exports = router;