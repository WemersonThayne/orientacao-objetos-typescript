"use strict";
exports.__esModule = true;
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('Inserindo');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('Atualizando');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('Removendo');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.consultar = function (id) {
        console.log('Consultando');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.consultarTodos = function () {
        console.log('Consultando Todos');
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
