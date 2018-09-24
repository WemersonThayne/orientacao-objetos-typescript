import { Concessionaria } from './Concessionaria';
import { DaoInterface } from './DaoInterface';

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria';
    inserir(object: Concessionaria): boolean {
        console.log('Inserindo');
        return true;
    }
    atualizar(object: Concessionaria): boolean {
        console.log('Atualizando');
        return true;
    }

    remover(id: number) : Concessionaria {
        console.log('Removendo');
        return new Concessionaria('',[]);
    }

    consultar(id: number): Concessionaria {
        console.log('Consultando');
        return new Concessionaria('',[]);
    }

    consultarTodos() : [Concessionaria] {
        console.log('Consultando Todos');
        return [new Concessionaria('',[])];
    }


}
