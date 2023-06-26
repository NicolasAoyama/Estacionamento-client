import { AbstractEntity } from "./AstractEntity";

export class Configuracao extends AbstractEntity{
  
    valorhora!: number;
    valorminuto!: number;
    inicioexpediente!: Date;
    fimexpediente!: Date;
    tempoparadesconto!: Date;
    tempodedesconto!: Date;
    gerardesconto!: boolean;
    vagasmotos!: number;
    vagascarro!: number;
    vagasvan!: number;

}