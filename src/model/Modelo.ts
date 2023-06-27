import { AbstractEntity } from "./AstractEntity";
import { Marca } from "./Marca";

export class Modelo extends AbstractEntity{
    nomeModelo! : string
    marca! : Marca
}