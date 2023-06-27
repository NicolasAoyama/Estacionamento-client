import { AbstractEntity } from "./AstractEntity";

export class Condutor extends AbstractEntity{
    nomeCondutor! : string
    cpf! : string
    telefone! : string
    tempoPago! : number
    tempoDesconto! : number
    tempoTotal! : number
}