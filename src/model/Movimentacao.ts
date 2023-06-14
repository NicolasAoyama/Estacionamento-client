import { AbstractEntity } from "./AstractEntity";
import { Condutor } from "./Condutor";
import { Veiculo } from "./Veiculo";

export class Movimentacao extends AbstractEntity{
    veiculo! : Veiculo
    condutor! : Condutor
    entrada! : Date
    saida! : Date
    tempoTotalHora! : number
    tempoMultaMinuto! : number
    tempoMultaHora! : number
    tempoDesconto! : number
    valorDesconto! : number
    valorHora! : number
    valorMulta! : number
    valorTotal! : number
    valorHoraMulta! : number


}