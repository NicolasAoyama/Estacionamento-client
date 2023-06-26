<template>


    <div class="container">
          <div class="d-flex justify-center align-items-center bg-dark">
            <h2 class="col-10 display-3 custom-text-color " >Lista de Condutor</h2>
            <div class="col-2">
              <router-link to="/Adicionar-Condutor" class="btn btn-success  " >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                Adicionar</router-link>
            </div>
          </div>
         
          
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th class="col-1">ID</th>
                <th class="col-1">Ativo</th>
                <th class="col-3"> Nome</th>
                <th class="col-2"> CPF</th>
                <th class="col-2"> TELEFONE</th>
                <th scope="col-1">Atualizar</th>
                <th scope="col-1">Excluir</th>
                <th  scope="col-1">Detalhe</th>
              </tr>
            </thead>
            <tbody>
      
              <tr v-for="condutor in condutorLista" :key="condutor.id" scope="row">
                <td>{{ condutor.id }}</td>
                <td>
                  <button v-if="condutor.ativo" type="button" class="btn btn-success">Ativo</button>
                  <button v-if="!condutor.ativo" type="button" class="btn btn-danger">Desativado</button>
                </td>
                <td>{{condutor.nomeCondutor}}</td>
                <td>{{condutor.cpf}}</td>
                <td>{{condutor.telefone}}</td>
                <td>
                  <router-link class="btn btn-editar" :to="{ name: 'Adicionar-Condutor-editar', query: { id: condutor.id, form: 'editar' } } ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                  </router-link>
                </td>
                <td >
                  <router-link class="btn btn-excluir" :to="{ name: 'Adicionar-Condutor-excluir', query: { id: condutor.id, form: 'excluir' } } ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                    </svg>
                  </router-link>
                </td>
    
                <td>
                  <button class="btn bg-warning"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                  </button>
    
                </td>
                
              </tr>
      
              
              
      
            </tbody>
          
          </table>
      
        </div>
    
    </template>
    <script lang="ts">
    
     import { defineComponent } from 'vue';
     import { Pessoa } from '@/model/Pessoa';
     import { CondutorClient } from '@/client/Condutor.client';
     import { Cachorro } from '@/model/Cachorro';
    
     export default defineComponent({
      name: 'CondutorLista',
      
      data() {
        return {
            condutorLista: new Array<Pessoa>(),
            condutorclient: new CondutorClient(),
            
        }
      },
      mounted() {
        this.findAll();
      },
      methods: {
    
        findAll() {
          this.condutorclient.listAll()
            .then((sucess: Pessoa[]) => {
              this.condutorLista = sucess
            })
            .catch((error :any )=> {
              console.log(error);
            });
        },
        
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