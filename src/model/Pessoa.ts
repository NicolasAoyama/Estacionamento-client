import { AbstractEntity } from "./AstractEntity";

export class Pessoa extends AbstractEntity{
    nomeCondutor! : string
    cpf! : string
    telefone! : string
    tempoPago! : number
    tempoTotal! : number
    tempoDesconto! : number
}