import { AbstractEntity } from "./AstractEntity";
import { Cor } from "./enum/Cor";
import { Modelo } from "./Modelo";
import { Tipo } from "./enum/Tipo";

export class Veiculo extends AbstractEntity{
    placa! : string
    modelo! : Modelo
    cor! : Cor
    tipo! : Tipo
    ano! : number
}