import { AbstractEntity } from "./AstractEntity";
import { Cor } from "./enum/Cor";
import { Cachorro } from "./Cachorro";
import { Tipo } from "./enum/Tipo";

export class Veiculo extends AbstractEntity{
    cor! : Cor
    tipo! : Tipo
    ano! : number
    placa! : string
    modelo! : Cachorro
    
}