import { ConcessionariaInterface } from './ConcessionarioInteface';
import {Carro} from './Carro';

export class Concessionaria implements ConcessionariaInterface{
    private endereco : string;
    private listaCarros: Array<Carro>;

    constructor (endereco : string, listaCarros : Array<Carro> ){
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }

    public getEndereco() : string {
        return this.endereco;
    }

    public getListaCarros() : Array<Carro> {
        return this.listaCarros;
    } 

    public fornecerHorariosFuncionamento(): string {
        return 'De Seg. a Sexta das 08:00 as 18:00';
    }
       
}