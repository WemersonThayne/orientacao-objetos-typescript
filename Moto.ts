import {Veiculo} from './Veiculo';

export class Moto extends Veiculo{

    private cilindradas: number

    constructor(modelo: string, cilindradas: number){
        super();
        this.modelo = modelo;
        this.cilindradas = cilindradas;
    }

    public acelerar() : void {
        this.velocidade += 20;
    }

}
