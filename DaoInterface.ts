export interface DaoInterface{

    nomeTabela: string

    inserir(object: any): boolean
    atualizar(object: any): boolean
    remover(id: number): any
    consultar(id: number): any
    consultarTodos() : [any];

}