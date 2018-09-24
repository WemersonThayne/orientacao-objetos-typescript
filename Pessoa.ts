import { Carro } from './Carro';

export class Pessoa{

    private nome: string;
    private carroPreferido: string;
    private carro : any;

    constructor(nome: string, carroPreferido: string){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public getNome(): string{
        return this.nome;
    }

    public getCarroPreferido(): string{
        return this.carroPreferido;
    }

    public getCarro(): any{
        return this.carro;
    }

    public comprarCarro(carro : Carro) : void{
        this.carro = carro;
    }
}
