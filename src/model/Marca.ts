import { AbstractEntity } from "./AstractEntity";

export class Marca extends AbstractEntity{
    nomeMarca! : string

    constructor(){
        super()
        this.ativo=true
    }
}