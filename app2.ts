import { Concessionaria } from './Concessionaria';
import { Pessoa } from './Pessoa';
import { Carro } from './Carro';


let cA = new Carro('Celta',2);
let cB = new Carro('Onix',4);
let cC = new Carro('Punto',4);
let cD = new Carro('S10',4);

let listaCarros : Array<Carro> = [cA,cB,cC,cD];

let concessionaria = new Concessionaria('Av. Brasileia',listaCarros);
console.log(concessionaria.getListaCarros());

let pessoa = new Pessoa('Wemerson','S10');
console.log(pessoa.getCarroPreferido());

concessionaria.getListaCarros().map((carro: Carro) => {
    if(carro.getModelo() === pessoa.getCarroPreferido()){
        console.log("Tem o seu carro preferido");
        pessoa.comprarCarro(carro);
    }
});

console.log(pessoa.getCarro());