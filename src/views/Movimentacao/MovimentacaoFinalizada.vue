<template>
    <div class="container col-5 mt-5 bg-notinha">

        <h1 class="mt-4">Recibo <br> Estacionamento do Semestre</h1>
      
        <div class="row">
        <div class="col-md-12 text-end">
            <p class="fw-bold">Número do Recibo: 001</p>
            <p>Data: 16/06/2023</p>
        </div>
        </div>
        <!--
        </div>
        <div class="dashed-line"></div>


        <div class="row mt-3 justify-content-start">

            <h5> Dados do Condutor</h5>

            <div class="col-6">
                <div class="d-flex flex-column align-items-start">
                    <div class="row">
                        <p class="col">Nome: {{ movimentacao.condutor.nome }}</p>
                    </div>
                    <div class="row">
                        <p class="col">CPF: {{ movimentacao.condutor.cpf }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Telefone: {{ movimentacao.condutor.telefone }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Horas Pagas: {{ movimentacao.tempototalhora }}</p>
                    </div>
                </div>
            </div>

            <div class="dashed-line"></div>

        </div>

        <div class="row mt-3 justify-content-start">

            <h5> Dados do Veiculo</h5>

            <div class="col-6 ">
                
                <div class="d-flex flex-column align-items-start" >
                    <div class="row"> 
                        <p>Placa: {{ movimentacao.veiculo.placa }}</p>
                    </div>
                    <div class="row"> 
                        <p>Modelo: {{ movimentacao.veiculo.modelo.nome }} </p>
                    </div>
                    <div class="row"> 
                        <p>Marca:  {{ movimentacao.veiculo.modelo.marca.nome }}  </p>
                    </div>
                    <div class="row"> 
                        <p>Tipo do Veiculo: {{ movimentacao.veiculo.tipo }}</p>
                    </div>
                    <div class="row"> 
                        <p>Ano do Veiculo: {{ movimentacao.veiculo.ano }}</p>
                    </div>
                </div>
            </div>

        </div>
        

        <div class="dashed-line"></div>

        <div class="row mt-3">
            <div class="col">
                <h5> Dados da Movimentaçao </h5>
                <div class="d-flex flex-column align-items-start">
                    <div class="row">
                        <p class="col">Hora de Entrada: {{ movimentacao.entrada }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Hora da Saida: {{ movimentacao.saida }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Tempo de Permanencia: {{ movimentacao.tempomultahora }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Minutos apos Horario Comercial: {{ movimentacao.tempomultahora }} </p>
                    </div>
                    <div class="row">
                        <p class="col"> Tempo para Desconto: {{ movimentacao.tempodesconto }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div class="row mt-3">
            <div class="col">
                <h5> Dados Sobre Desconto </h5>
                <div class="d-flex flex-column align-items-start">
                    
                    <div class="row">
                        <p class="col">Horas Acumuladas pelo Condutor: {{ movimentacao.condutor.tempopago }}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor de Desconto: {{ movimentacao.valordesconto }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div class="row mt-3 mb-5">
            <div class="col">
                <h5> Financeiro </h5>
                <div class="d-flex flex-column align-items-start">
                    
                    <div class="row">
                        <p class="col">Valor a Pagar por Tempo Estacionado: {{ movimentacao.valorhora }}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor a Pagar por Exceder o horario comercial (MULTA): {{ movimentacao.valormulta }}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor Desconto: {{ movimentacao.valordesconto }}</p>
                    </div>

                    <div class="row">
                        <h4> Valor Toral a Pagar: {{ movimentacao.valortotal }}</h4>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div class="row mt-3">

            <div class="row justify-content-center mt-4">
                <button type="button" class="btn btn-primary mt-4 col-6" data-bs-toggle="modal" data-bs-target="#modalRecibo">Imprimir Recibo</button>
             </div>
            <div class="row justify-content-center mt-2">
                <router-link to="/Movimentacao" class="btn btn-primary-voltar mt-4 col-6">Voltar</router-link>
            </div>
        </div>
        -->
    
    </div>

  
  </template>


<script lang="ts">

import { defineComponent } from 'vue';

import { Movimentacao } from '@/model/Movimentacao';
import { MovimentacaoClient } from '@/client/Movimentacao.client';
import { CondutorClient } from '@/client/Condutor.client';
import {Pessoa} from '@/model/Pessoa';
import { MarcaClient } from '@/client/Marca.client';
import { Marca } from '@/model/Marca';
import { VeiculoClient } from '@/client/Veiculo.client';
import { Veiculo } from '@/model/Veiculo';
import { ModeloClient } from '@/client/Modelo.client';
import { Cachorro } from '@/model/Cachorro';

export default defineComponent({ 
    name: 'MovimentacaoFormulario',

data() {
  return {
      movimentacao: new Movimentacao(),
      MovimentacaoClient: new MovimentacaoClient(),
      modelo: new Array<Cachorro>(),
      modeloclient: new ModeloClient(),
      marcaclient: new MarcaClient(),
      marca: new Array<Marca>(),
      VeiculoClient: new VeiculoClient(),
      veiculo: new Array<Veiculo>(),
      condutor: new Array<Pessoa>(),
      condutorclient: new CondutorClient(),
      mensagem: {
      ativo: false as boolean,
      titulo: "" as string,
      mensagem: "" as string,
      css: "" as string
    }
  }
},
computed: {
  id () { 
    return this.$route.query.id
  },
  form () {
    return this.$route.query.form
  }
  
},
mounted() { 
  if (this.id !== undefined)
  {
      this.findbyId(Number(this.id));
      
  };

  
},
methods: {
 
  findbyId(id: number){
    this.MovimentacaoClient.findbyid(id)
      .then(sucess => {
        this.movimentacao = sucess;
        
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  }


 }



 })



</script>

<style>
.bg-notinha{
    background-color: rgba(255, 255, 84, 0.856);
    color: black;

}

.btn-primary-voltar{
    background-color: blue;
    color: white;
}

.btn-primary-voltar:hover{
    background-color: rgb(1, 1, 128);
    color: white;
}

.dashed-line {
  border-top: 1px dashed #000;
}

</style>