<template>

    <div class="container">
  
      <div class="text-center mb-5">
        <h1 class="display-4 custom-text-color">Registrar Saida</h1>
      </div>
  
      
  
  
      <table class="table table-bordered table-dark">
  
        <thead >
          <tr>
            <th class="col-4"> Condutor</th>
            <th class="col-4"> Veiculo</th>
            <th class="col-4"> Hora Entrada</th>
                      

            
          </tr>
  
        </thead>
  
        <tbody >
  
          <tr  scope="row">

            <td v-if="movimentacao.condutor"> 
                <td>Nome: {{ movimentacao.condutor.nomeCondutor}}</td><br>
                <td>Cpf: {{ movimentacao.condutor.cpf }} </td><br>
                <td>Telefone: {{ movimentacao.condutor.telefone}}</td>
            </td>

            <td v-if="movimentacao.veiculo" > 
                <td>Placa: {{ movimentacao.veiculo.placa}}</td><br>
                <td>Modelo: {{ movimentacao.veiculo.modelo.nomeModelo}}</td><br>
                <td>Marca: {{ movimentacao.veiculo.modelo.marca.nomeMarca}}</td><br>
                <td>Tipo: {{ movimentacao.veiculo.tipo}}</td><br>
                <td>Ano: {{ movimentacao.veiculo.ano}}</td><br>
            </td>
            <td>
              <td>Entrada: {{movimentacao.entrada}}</td>
              <br>
    
              
            </td>
            
            
          </tr>

          
  
        </tbody>
  
        <div class="col-12 mt-4 mb-4">
          <router-link class="btn btn-danger btn-lg col-6" :to="{ name: 'FinalMovimentacao', query: { id: movimentacao.id, form: 'FinalMovimentacao' } } "  @click="onClickRegistraSaida()"> Registrar Saida</router-link>
            
        </div>

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
  },procuraVeiculo(){
        this.VeiculoClient.findbyid(this.movimentacao.veiculo.id)
                .then(sucesso => {
                    this.veiculo = sucesso;
                    this.modeloclient.findbyid(this.veiculo.modelo.id)
                        .then(sucesso => {
                            this.modelo = sucesso;

                            this.marcaclient.findbyid(this.modelo.marca.id)
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
    this.condutorclient.findbyid(this.movimentacao.condutor.id)
                .then(sucesso => {
                    this.condutor = sucesso;
                    console.log(this.condutor)

                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
  }, 
  onClickRegistraSaida(){
      
      this.MovimentacaoClient.finalizar(this.movimentacao.id)
        .then(sucess => {
           
            this.movimentacao = new Movimentacao();
            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Parabens. ";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";
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
  