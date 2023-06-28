import { AbstractEntity } from "./AstractEntity";

export class Condutor extends AbstractEntity{
    nomeCondutor! : string
    cpf! : string
    telefone! : string
    tempoPago! : Number
    tempoDesconto! : Number
    tempoTotal! : Number
}