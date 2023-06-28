<template >

  <div class="container">
    <div class="d-flex justify-center align-items-center bg-dark">
      <h2 class="col-9 display-3 custom-text-color " >Configuração</h2>
      <div class="col-3">
        <router-link to="/AddConfiguracao" class="btn btn-success" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          
          Adicionar Configuração</router-link>
      </div>
    </div>

    <table class="table table-bordered table-dark">
    <thead>
      <tr>
        <th>ID</th>
        <th >Ativo</th>
        <th>Inicio Expediente</th>
        <th>Fim expediente </th>
        <th>Valor Hora</th>
        <th>Valor Minuto Multa</th>
        <th>Tempo para Desconto </th>
        <th>Tempo de Desconto </th>
        <th>Gerar Desconto </th>
        <th>Vagas Moto </th>
        <th>Vagas Carro </th>
        <th>Vagas Van </th>
        <th>Atualizar</th>

      </tr>
    </thead>

    <tbody>

      <tr v-if="configuracaoLista.ativo" scope="row">

        <td >{{ configuracaoLista.id }}</td>
      
        <td>
          <button v-if="configuracaoLista.ativo" type="button" class="btn btn-success">Ativo</button>
        </td>


     
        <td>{{ configuracaoLista.inicioExpediente}}</td>
        <td>{{ configuracaoLista.fimExpediente }}</td>
        <td>{{ configuracaoLista.valorHora }}</td>
        <td>{{configuracaoLista.valorMinutoMulta}}</td>
        <td>{{configuracaoLista.tempoParaDesconto}}</td>
        <td>{{configuracaoLista.tempoDeDesconto}}</td>
        <td>{{configuracaoLista.gerarDesconto}}</td>
        <td>{{configuracaoLista.vagasMoto}}</td>
        <td>{{configuracaoLista.vagasCarro}}</td>
        <td>{{configuracaoLista.vagasVan}}</td>
        
        <td>
          <router-link class="btn btn-editar" :to="{ name: 'EditarConfiguracao', query: { id: configuracaoLista.id, form: 'editar' } } ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
          </router-link>
          </td>

      </tr>

     

    </tbody>
  
  </table>
   
    


  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Configuracao } from '@/model/Configuracao';
import { ConfiguracaoClient } from '@/client/Configuracao.client';


export default defineComponent({
    name: 'configuracaoLista',

    data(){
      return{
        configuracaoLista: new Configuracao(),
        ConfigClient: new ConfiguracaoClient()

        
      }
    },
    mounted(){
      this.findAll();
   
      
    },
    methods: {
      

       findAll() {
        this.ConfigClient.ultimaConfig()  // TALVEZ EU TENHA Q ARRUMAR AQ  
          .then(sucess => {
              
              this.configuracaoLista = sucess;
             

          })
          .catch(error => {
              console.log(error);
          }); 
        }


    
  
    }
    
  });


  
  
  </script>
  
  
  <style scoped>
  .custom-text-color{
    color: #FFFFFF;
  }
  
  .custom-div-botoes{
    display: flex;
    justify-content: space-around;
  
  }
  
  .custom-text-left{
    text-align: left;
  }
  
  .btn-editar{
    background-color: rgb(243, 207, 5);
  }
  
  .btn-editar:hover{
    background-color: rgb(71, 70, 4);
  }
  
  
  .btn-excluir{
    background-color: rgb(255, 0, 0);
    color: #FFFFFF;
  }
  
  .btn-excluir:hover{
    background-color: rgb(128, 3, 3);
    color: #FFFFFF;
  }
  
  body {
      background-color: black;
      padding-top: 90px; /* ou qualquer valor que seja a altura da sua navbar */
    }
  
  </style>