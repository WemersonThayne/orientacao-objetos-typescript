"use strict";
exports.__esModule = true;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    Concessionaria.prototype.getEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.getListaCarros = function () {
        return this.listaCarros;
    };
    Concessionaria.prototype.fornecerHorariosFuncionamento = function () {
        return 'De Seg. a Sexta das 08:00 as 18:00';
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
