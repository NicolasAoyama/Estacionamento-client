<template>
  <div class="container mt-5 bg-dark">
    <h1 class="display-4 custom-text-color">Registrar Entrada</h1>
    <form class="form-inline">
      <div class="row mt-4 mb-4 justify-content-center">
        <div class="row col-12 justify-content-center">
          
          <div class="row justify-content-center">
            
            <div class=" col-6 row justify-content-center">

              <label class="form-label text-color">Condutor</label>

              <select v-model="movimentacao.condutor" class="form-select" aria-label="Default select example">

                  <option v-for="condutor in condutorAtivo " :key="condutor.id" :value="condutor"   selected>{{condutor.nomeCondutor}}</option>

              </select>

            </div>

          </div>
          
        </div>
      </div>

  

      <div class="row mt-4 mb-4 justify-content-center">
        <div class="row col-12 justify-content-center">

          <div class="col-6 row justify-content-center">

            <label class="form-label text-color">Veiculo</label>

            <select v-model="movimentacao.veiculo"  class="form-select" aria-label="Default select example">
          
                <option v-for="veiculo in veiculoAtivo " :key="veiculo.id" :value="veiculo"   selected>{{veiculo.placa}}</option>
          
            </select>
          </div>
        </div>
        
                <div class="col-md-6" >
                    <label for="inputPlaca" class="form-label text-color">Horario de Entrada</label>
                    <input type="nome" class="form-control" id="inputPlaca" v-model="movimentacao.entrada">
                    <label for="inputPlaca" class="form-label text-color">Horario de Saida</label>
                    <input type="nome" class="form-control" id="inputPlaca" v-model="movimentacao.saida">
                </div>




        </div>





















        
      

      

    </form>
    <div class="col-12 mt-6 mb-6">
      <button class="btn btn-success btn-lg col-6" @click="onClickCadastrar">Registrar Entrada</button>
    </div>
  </div>
</template>

  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { MovimentacaoClient } from '@/client/Movimentacao.client';
  import { Movimentacao } from '@/model/Movimentacao';
  import { VeiculoClient } from '@/client/Veiculo.client';
 import { Veiculo } from '@/model/Veiculo';
 import { Condutor } from '@/model/Condutor';
 import { CondutorClient } from '@/client/Condutor.client';
 
 export default defineComponent({
  name: 'Veiculo',

  data() {
    return {
        movimentacao: new Movimentacao(),
        MovimentacaoClient: new MovimentacaoClient(),
        veiculo: new Array<Veiculo>(),
        VeiculoClient: new VeiculoClient(),
        
       condutor: new Array<Condutor>(),
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
    },
    veiculoAtivo() :Veiculo[] {
        return this.veiculo.filter((veiculo: Veiculo) => veiculo.ativo);
  },
  condutorAtivo() :Condutor[] {
        return this.condutor.filter((condutor: Condutor) => condutor.ativo);
  }
    
  },
  mounted() { 
    if (this.id !== undefined)
    {
        this.findbyId(Number(this.id));
        
    };

    this.findAllVeiculo();
    this.findAllCondutor();

  },
  methods: {
   
    findAllVeiculo() {
      this.VeiculoClient.listAll()
        .then((sucess: Veiculo[]) => {
          
          this.veiculo = sucess
          console.log(Veiculo)

          
        })
        .catch((error :any )=> {
          console.log(error);
        });
    },
    findAllCondutor() {
      this.condutorclient.listAll()
        .then((sucess: Condutor[]) => {
          
          this.condutor = sucess
          console.log(Condutor)

          
        })
        .catch((error :any )=> {
          console.log(error);
        });
    },

    onClickCadastrar(){
        this.MovimentacaoClient.cadastrar(this.movimentacao)
        .then(sucess => {
          this.movimentacao = new Movimentacao();
          this.findAllVeiculo();
          this.findAllCondutor();

          console.log(Movimentacao)
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    findbyId(id: number){
      this.MovimentacaoClient.findbyid(id)
        .then(sucess => {
          this.movimentacao = sucess;
          this.findAllVeiculo();
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }, 
    VeiculoSelecionado(){
      const veiculoEscolhido = this.movimentacao.veiculo 
      if( veiculoEscolhido){
        this.movimentacao.veiculo.modelo.nomeModelo = veiculoEscolhido.modelo.nomeModelo
        this.movimentacao.veiculo.modelo.marca.nomeMarca = veiculoEscolhido.modelo.marca.nomeMarca
        console.log(this.movimentacao.veiculo.modelo.nomeModelo)
        console.log(this.movimentacao.veiculo.modelo.marca.nomeMarca)
      } else{
        this.movimentacao.veiculo.modelo.nomeModelo = '';
        this.movimentacao.veiculo.modelo.marca.nomeMarca = '';

      }

    }
   


  }
});

    
    </script>
    

    
    
    <style>
    
    /* Seu estilo CSS aqui */
    </style>