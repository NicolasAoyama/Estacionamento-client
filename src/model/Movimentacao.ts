import { AbstractEntity } from "./AstractEntity";
import { Pessoa } from "./Pessoa";
import { Veiculo } from "./Veiculo";

export class Movimentacao extends AbstractEntity{
   
    veiculo!: Veiculo;
    condutor!: Pessoa;
    horaatual!: Date;
    entrada!: Date;
    saida!: Date;
    tempototalhora!: number;
    tempototalminuto!: number;
    tempodesconto!: number;
    tempomultaminuto!: number;
    tempomultahora!: number;
    valordesconto!: number;
    valormulta!: number;
    valortotal!:number;
    valorhora!: number;
    valorhoramulta!: number;
    
}