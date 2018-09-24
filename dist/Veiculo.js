"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    Veiculo.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
