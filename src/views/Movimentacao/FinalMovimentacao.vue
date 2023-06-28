<template>
    <div class="container col-5 mt-5 bg-notinha">

        <h1 class="mt-4">Recibo <br> Estacionamento Mercosul</h1>
      
        
        
        <div class="dashed-line"></div>
      

        <div v-if="movimentacao.condutor" class="row mt-3 justify-content-start">

            <h5> Dados do Condutor</h5>

            <div class="col-6">
                <div class="d-flex flex-column align-items-start">
                    <div class="row">
                        <p class="col">Nome: {{ movimentacao.condutor.nomeCondutor }}</p>
                    </div>
                    <div class="row">
                        <p class="col">CPF: {{ movimentacao.condutor.cpf }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Telefone: {{ movimentacao.condutor.telefone }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Horas Pagas: {{ movimentacao.tempoTotalHora }}</p>
                    </div>
                </div>
            </div>

            <div class="dashed-line"></div>

        </div>
     
        <div v-if="movimentacao.veiculo" class="row mt-3 justify-content-start">

            <h5> Dados do Veiculo</h5>

            <div class="col-6 ">
                
                <div class="d-flex flex-column align-items-start" >
                    <div class="row"> 
                        <p>Placa: {{ movimentacao.veiculo.placa }}</p>
                    </div>
                    <div class="row"> 
                        <p>Modelo: {{ movimentacao.veiculo.modelo.nomeModelo }} </p>
                    </div>
                    <div class="row"> 
                        <p>Marca:  {{ movimentacao.veiculo.placa }}  </p>
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
                        <p class="col">Tempo de Permanencia: {{ movimentacao.tempoTotalHora }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Minutos apos Horario Comercial: {{ movimentacao.tempoMultaMinuto }} </p>
                    </div>
                    <div class="row">
                        <p class="col"> Tempo para Desconto: {{ movimentacao.tempoDesconto }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div v-if="movimentacao.condutor" class="row mt-3">
            <div class="col">
                <h5> Dados Sobre Desconto </h5>
                <div class="d-flex flex-column align-items-start">
                    
                    <div class="row">
                        <p class="col">Horas Acumuladas pelo Condutor: {{ movimentacao.condutor.tempoTotal}}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor de Desconto: {{ movimentacao.valorDesconto }}</p>
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
                        <p class="col">Valor a Pagar por Tempo Estacionado: {{ movimentacao.valorHora }}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor a Pagar por Exceder o horario comercial (MULTA): {{ movimentacao.valorMulta }}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor Desconto: {{ movimentacao.valorDesconto }}</p>
                    </div>

                    <div class="row">
                        <h4> Valor Toral a Pagar: {{ movimentacao.valorTotal }}</h4>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div class="row mt-3">

            <div class="row justify-content-center mt-2">
                <router-link to="/ListMovimentacao" class="btn btn-primary-voltar mt-4 col-6">Voltar</router-link>
            </div>
        </div>
        
    
    </div>

  
  </template>











<script lang="ts">
import { defineComponent } from 'vue';
import { Movimentacao } from '@/model/Movimentacao';
import { MovimentacaoClient } from '@/client/Movimentacao.client';
import { CondutorClient } from '@/client/Condutor.client';
import { Condutor } from '@/model/Condutor';
import { MarcaClient } from '@/client/Marca.client';
import { Marca } from '@/model/Marca';
import { VeiculoClient } from '@/client/Veiculo.client';
import { Veiculo } from '@/model/Veiculo';
import { ModeloClient } from '@/client/Modelo.client';
import { Modelo } from '@/model/Modelo';


export default defineComponent({ 
    name: 'MovimentacaoFormulario',

data() {
  return {
      movimentacao: new Movimentacao(),
      MovimentacaoClient: new MovimentacaoClient(),
      modelo: new Modelo(),
      modeloclient: new ModeloClient(),
      marcaclient: new MarcaClient(),
      marca: new Marca(),
      VeiculoClient: new VeiculoClient(),
      veiculo: new Veiculo(),
      condutor: new Condutor(),
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
        this.procuraVeiculo();
        this.procuraCondutor();            
        
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  }, procuraVeiculo(){
        this.VeiculoClient.findbyid(this.movimentacao.id)
                .then(sucesso => {
                    this.veiculo = sucesso;
                    this.modeloclient.findbyid(this.veiculo.id)
                        .then(sucesso => {
                            this.modelo = sucesso;

                            this.marcaclient.findbyid(this.modelo.id)
                                .then(sucesso => {
                                    this.marca = sucesso;
                                    
                                })
                                .catch(error => {
                                    this.mensagem.ativo = true;
                                    this.mensagem.mensagem = error;
                                    this.mensagem.titulo = "Error. ";
                                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                                });
                        })
                        .catch(error => {
                            this.mensagem.ativo = true;
                            this.mensagem.mensagem = error;
                            this.mensagem.titulo = "Error. ";
                            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                        });
                   

                })
                    .catch(error => {
                        this.mensagem.ativo = true;
                        this.mensagem.mensagem = error;
                        this.mensagem.titulo = "Error. ";
                        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                    });
  },
  procuraCondutor(){
    this.condutorclient.findbyid(this.movimentacao.id)
                .then(sucesso => {
                    this.condutor = sucesso;

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
    background-color: #f5e2b8;
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