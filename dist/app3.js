"use strict";
exports.__esModule = true;
var Concessionaria_1 = require("../Concessionaria");
var Carro_1 = require("../Carro");
var Moto_1 = require("../Moto");
var carro = new Carro_1.Carro('Celta', 2);
carro.acelerar();
carro.acelerar();
console.log(carro);
var moto = new Moto_1.Moto('Honda CG', 150);
moto.acelerar();
moto.acelerar();
console.log(moto);
var concessionaria = new Concessionaria_1.Concessionaria('', []);
console.log(concessionaria.fornecerHorariosFuncionamento());
