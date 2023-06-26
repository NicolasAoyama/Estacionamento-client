<template >

    <div class="container">

        
        <div class="text-center mb-5">
            <h1 v-if="form === undefined" class="display-4 custom-text-color">Adicionar Veiculo</h1>
            <h1 v-if="form === 'editar'" class="display-4 custom-text-color">Editar Veiculo</h1>
            <h1  v-if="form === 'excluir'" class="display-4 custom-text-color">Excluir Veiculo</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">
            <div class="row">
                <div class="col-md-3" >
                    <label class="form-label text-color">Modelo</label>
                    <select v-model="veiculo.modelo" class="form-select" aria-label="Default select example">
                  
                        <option v-for="modelo in modeloFiltro" :key="modelo.id" :value="modelo"   selected>{{modelo.nome}}</option>
                 
                    </select>

                </div>

                <div class="col-md-2" >
                    <label for="inputPlaca" class="form-label text-color">Placa do Veiculo</label>
                    <input type="nome" class="form-control" id="inputPlaca" v-model="veiculo.placa">
                </div>

                <div class="col-md-2" >
                    <label class="form-label text-color">Cor</label>
                    <select v-model="veiculo.cor" class="form-select" aria-label="Default select example">
                        <option v-for="CorValor in CorEnum" :key="CorValor" :value="CorValor"   selected>{{CorValor}}</option>
                 
                    </select>
                </div>
                <div class="col-md-2" >
                    <label class="form-label text-color">Tipo</label>
                    <select v-model="veiculo.tipo" class="form-select" aria-label="Default select example">
                        
                        <option v-for="tipoValor in tipoEnum" :key="tipoValor" :value="tipoValor"   selected>{{tipoValor}}</option>
                 
                    </select>
                </div>
                <div class="col-md-2" >
                    <label for="inputPlaca" class="form-label text-color">Ano do Veiculo</label>
                    <input type="nome" class="form-control" id="inputAno" v-model="veiculo.ano">
                </div>
            </div>
            
            <div v-if="form === undefined" class="row justify-content-center mt-3 mb-3 col-3">

                <router-link to="/Listar-Veiculo" class="btn btn-success " @click="onClickCadastrar" >Adicionar</router-link>

            </div>

            <div v-if="form === 'excluir'"  class="d-flex justify-content-center ">
                <div class="row ">
                    
                    <div class="col-5">
                        <router-link to="/Listar-Veiculo" class="btn btn-primary" @click="onClickExcluir">Excluir</router-link>
                    </div>
                  
                    <div class="col-5">
                        <router-link to="/Listar-Veiculo" class="btn btn-info">Voltar</router-link>
                        
                    </div>
                </div>

            </div>

            <div v-if="form === 'editar'"  class="d-flex justify-content-center ">
                <div class="row ">
                    
                  <div v-if="form === 'editar'" class="col-5">
                        <router-link to="/Listar-Veiculo" class="btn btn-warning" @click="onClickEditar" >Editar</router-link>
                  </div>
                    <div class="col-5">
                        <router-link to="/Listar-Veiculo" class="btn btn-info">Voltar</router-link>
                        
                    </div>
                </div>

            </div>

        </form>
                
    
  
    </div>
  
</template>
  
<script lang="ts">


import { defineComponent } from 'vue';
import {ModeloClient} from "@/client/Modelo.client";
import { Cachorro } from "@/model/Cachorro";
import {VeiculoClient} from "@/client/Veiculo.client";
import { Veiculo } from '@/model/Veiculo';
import {Cor} from '@/model/enum/Cor';
import {Tipo} from '@/model/enum/Tipo';





export default defineComponent({
  name: 'Veiculo',

  data() {
    return {
        veiculo: new Veiculo(),
        VeiculoClient: new VeiculoClient(),
        modeloclient: new ModeloClient(),
        modeloLista: [] as Cachorro[],
        CorEnum: Cor,
        tipoEnum: Tipo,
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
    modeloFiltro() :Cachorro[] {
        return this.modeloLista.filter((itemModelo: Cachorro) => itemModelo.ativo);
  }
    
  },
  mounted() { 
    if (this.id !== undefined)
    {
        this.findbyId(Number(this.id));
        
    };

    this.findAll();

  },
  methods: {
   
    findAll() {
      this.modeloclient.listAll()
        .then((sucess: Cachorro[]) => {
          this.modeloLista = sucess;
        })
        .catch((error :any )=> {
          console.log(error);
        });
    
    },
    onClickCadastrar(){
        console.log(this.veiculo);
        this.VeiculoClient.cadastrar(this.veiculo)
        .then(sucess => {
          this.veiculo = new Veiculo();
          this.findAll();
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    findbyId(id: number){
      this.VeiculoClient.findbyid(id)
        .then(sucess => {
          this.veiculo = sucess;
          this.findAll();
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      this.VeiculoClient.editar(this.veiculo.id, this.veiculo)
        .then(sucess => {
          this.veiculo = new Veiculo();
          this.findAll();
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
    },
    onClickExcluir(){
      this.VeiculoClient.delete(this.veiculo.id)
        .then(sucess => {
          this.veiculo = new Veiculo()
          this.findAll();
          
          this.$router.push({ name: 'Listar-Veiculo' });
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },


  }
});



  
  
</script>

<style scoped>
.text-color{
    color: #FFFFFF;
    
}


</style>