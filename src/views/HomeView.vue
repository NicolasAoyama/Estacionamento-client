<template>

  <div class="container">

    <div class="text-center mb-5">
        <h1 class="display-4 custom-text-color">Bem Vindo ao Estacionamento</h1>
        <h5 class=" custom-text-color">Otimo dia de Trabalho</h5>
        <div id="clock"></div>


    </div>

    <div class="col-12 mt-4 mb-4">
      <router-link to="/Entrada" class="btn btn-success btn-lg col-6" >Registrar Entrada</router-link>
    </div>


    <table class="table table-bordered table-dark">

      <thead >
        <tr>
          <th class="col-4"> Condutor</th>
          <th class="col-4"> Placa</th>
          <th class="col-5"> Hora Entrada</th>
          <th >Registrar Saida</th>
        </tr>

      </thead>

      <tbody v-for="entrada in movimentacaoLista" :key="entrada.id" >

        <tr v-if="entrada.ativo"  scope="row">

          <td>{{entrada.condutor.nomeCondutor}}</td>
          <td>{{entrada.veiculo.placa}}</td>
          <td>{{entrada.entrada}}</td>
          
          <td>
            <router-link class="btn bg-warning" :to="{ name: 'FinalizarMovimenacao', query: { id: entrada.id }}" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg>
              Finalizar
            </router-link>
          </td>
        </tr>

      </tbody>


    </table>

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
      movimentacaoLista: new Array<Movimentacao>(),
      MovimentacaoClient: new MovimentacaoClient(),
      movimentacaoFinalizar: new Movimentacao(),
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
mounted() { 

  this.findAll();


  
},
methods: {

    findAll() {
      this.MovimentacaoClient.listAll()
        .then((sucess: Movimentacao[]) => {
          this.movimentacaoLista = sucess
          
          console.log(this.movimentacaoLista)
          
        })
        .catch((error :any )=> {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          console.log(error);
        });
    },    

    
    




  }
  
  


 });



</script>
  
  <style scoped>
  
  #clock{
    color: #FFFFFF;
    font-size: 2rem;
  }
  
  .btn-success{
    background-color: rgb(0, 160, 0);
    color: #e7e7e7;
  }
  
  .btn-success:hover{
    background-color: rgb(5, 95, 5);
  }
  
  #sairButton:hover {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-right-square' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
}
  </style>
  
  