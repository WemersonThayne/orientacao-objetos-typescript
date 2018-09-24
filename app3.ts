import { Concessionaria } from './Concessionaria';
import { Carro } from './Carro';
import { Moto } from './Moto';

let carro = new Carro('Celta',2);
carro.acelerar();
carro.acelerar();
console.log(carro);

let moto = new Moto('Honda CG',150);
moto.acelerar();
moto.acelerar();
console.log(moto);


let concessionaria = new Concessionaria('',[]);
console.log(concessionaria.fornecerHorariosFuncionamento());