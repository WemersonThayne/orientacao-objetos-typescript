"use strict";
exports.__esModule = true;
var Concessionaria_1 = require("../Concessionaria");
var Pessoa_1 = require("../Pessoa");
var Carro_1 = require("../Carro");
var cA = new Carro_1.Carro('Celta', 2);
var cB = new Carro_1.Carro('Onix', 4);
var cC = new Carro_1.Carro('Punto', 4);
var cD = new Carro_1.Carro('S10', 4);
var listaCarros = [cA, cB, cC, cD];
var concessionaria = new Concessionaria_1.Concessionaria('Av. Brasileia', listaCarros);
console.log(concessionaria.getListaCarros());
var pessoa = new Pessoa_1.Pessoa('Wemerson', 'S10');
console.log(pessoa.getCarroPreferido());
concessionaria.getListaCarros().map(function (carro) {
    if (carro.getModelo() === pessoa.getCarroPreferido()) {
        console.log("Tem o seu carro preferido");
        pessoa.comprarCarro(carro);
    }
});
console.log(pessoa.getCarro());
