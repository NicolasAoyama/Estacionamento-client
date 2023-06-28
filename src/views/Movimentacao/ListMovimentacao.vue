<template>


    <div class="container">
          <div class="d-flex justify-center align-items-center bg-dark">
            <h2 class="col-10 display-3 custom-text-color " >Movimentaçoes</h2>
          </div>
         
          
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th class="col-1">ID</th>
                <th class="col"> Status</th>
                <th class="col"> Entrada</th>
                <th class="col"> Saida</th>
                <th class="col"> Nome Condutor</th>
                <th class="col"> CPF Condutor</th>
                <th class="col"> Modelo do Veiculo</th>
                <th class="col"> Placa do Veiculo</th>
              </tr>
            </thead>
            <tbody>
      
              <tr v-for="Movimentacao in movimentacao" :key="Movimentacao.id" scope="row">
                <td>{{Movimentacao.id }}</td>
                <td v-if="Movimentacao.ativo ">
                  <button  class="btn bg-success"> Em Aberto
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                      <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                    </svg>
                  </button>
                </td>
                <td v-if="!Movimentacao.ativo ">
                    <button  class="btn bg-danger"> Finalizada
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-closed-fill" viewBox="0 0 16 16">
                      <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                  </button>
                  
                </td>
                <td>{{ Movimentacao.entrada }}</td>
                <td>{{ Movimentacao.saida }}</td>
                <td>{{Movimentacao.condutor.nomeCondutor}}</td>
                <td>{{ Movimentacao.condutor.cpf }}</td>
                <td>{{ Movimentacao.veiculo.modelo.nomeModelo }}</td>
                <td>{{ Movimentacao.veiculo.placa }}</td>
                
                <td v-if="!Movimentacao.ativo ">
                  <router-link :to="{ name: 'FinalMovimentacao', query: { id: Movimentacao.id, form: 'FinalMovimentacao' } } ">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
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
import { Veiculo } from '@/model/Veiculo';
import { VeiculoClient } from '@/client/Veiculo.client';
import { Condutor } from '@/model/Condutor';
import { CondutorClient } from '@/client/Condutor.client';
import { MovimentacaoClient } from '@/client/Movimentacao.client';
import { Movimentacao } from '@/model/Movimentacao';


export default defineComponent({
      name: 'MovimentacaoLista',
      
      data() {
        return {
          veiculoclient: new VeiculoClient(),
          veiculo: new Veiculo(),
          condutor: new Condutor(),
          condutorclient: new CondutorClient(),
          movimentacao: new Array<Movimentacao>(),
          MovimentacaoClient: new MovimentacaoClient()
        }
      },
      mounted() {
        this.findAll();
        
      },
      methods: {

        findAll() {
          this.MovimentacaoClient.listAll()
            .then((sucess: Movimentacao[]) => {
              this.movimentacao = sucess
             
              
              
              console.log(this.movimentacao)
            })
            .catch((error :any )=> {
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