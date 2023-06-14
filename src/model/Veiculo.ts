import { AbstractEntity } from "./AstractEntity";
import { Cor } from "./Cor";
import { Marca } from "./Marca";
import { Modelo } from "./Modelo";
import { Tipo } from "./Tipo";

export class Veiculo extends AbstractEntity{
    cor! : Cor
    tipo! : Tipo
    ano! : number
    marca! : Marca
    placa! : string
    modelo! : Modelo
    
}