import { AbstractEntity } from "./AstractEntity";

export class Configuracao extends AbstractEntity{
    valorHora! : number
    valorMinutoMulta! : number
    inicioExpediente! : Date
    fimExpediente! : Date
    tempoParaDesconto! : number
    tempoDeDesconto! : number
    gerarDesconto! : boolean
    vagasCarro! : number
    vagasMoto! : number
    vagasVan! : number
}