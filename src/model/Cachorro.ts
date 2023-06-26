import { AbstractEntity } from "./AstractEntity";
import { Marca } from "./Marca";

export class Cachorro extends AbstractEntity{
    nome! : string
    marca! : Marca
}