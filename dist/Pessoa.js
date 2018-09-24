"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.getCarro = function () {
        return this.carro;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
