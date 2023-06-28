<template >

    <div class="container">

        <div class="text-center mb-5">
            <h1 v-if="form === undefined" class="display-4 custom-text-color">Adicionar Modelo</h1>
            <h1 v-if="form === 'editar'" class="display-4 custom-text-color">Editar Modelo</h1>
            <h1  v-if="form === 'excluir'" class="display-4 custom-text-color">Excluir Modelo</h1>
        </div>

        <div v-if="mensagem.ativo" class="row">
          <div class="col-md-12 text-start">
            <div :class="mensagem.css" role="alert">
              <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">

            <div  class="row justify-content-center mt-3">
                
                <div class="col-md-4" >
                    <label for="inputModelo" class="form-label text-color">Modelo do Veiculo</label>
                    <input type="nome" class="form-control" id="inputModelo" v-model="modelo.nomeModelo">
                </div>

                <div class="col-md-4">
                  <label class="form-label text-color">Marca</label>
                  <select v-model="modelo.marca" class="form-select" aria-label="Default select example">
                      <option v-for="itemMarca in marcaFiltrada" :key="itemMarca.id" :value="itemMarca"   
                        selected>{{itemMarca.nomeMarca}} </option>
                
                  </select>

                </div>

 
                
            </div>


           
            <div v-if="form === undefined" class="row justify-content-center mt-3 mb-3 col-3">

                <router-link to="/ListModelo" class="btn btn-success " @click="onClickCadastrar" >Adicionar</router-link>

            </div>

            <div v-if="form === 'excluir'"  class="d-flex justify-content-center ">
                <div class="row ">
                    
                    <div class="col-5">
                        <router-link to="/ListModelo" class="btn btn-primary" @click="onClickExcluir">Excluir</router-link>
                    </div>
                  
                    <div class="col-5">
                        <router-link to="/ListModelo" class="btn btn-info">Voltar</router-link>
                        
                    </div>
                </div>

            </div>

            <div v-if="form === 'editar'"  class="d-flex justify-content-center ">
                <div class="row ">
                    
                  <div v-if="form === 'editar'" class="col-5">
                        <router-link to="/ListModelo" class="btn btn-warning" @click="onClickEditar" >Editar</router-link>
                  </div>
                    <div class="col-5">
                        <router-link to="/ListModelo" class="btn btn-info">Voltar</router-link>
                        
                    </div>
                </div>

            </div>

        </form>
    </div>
  
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import { ModeloClient } from '@/client/Modelo.client';
import { Modelo } from '@/model/Modelo';
import { MarcaClient } from '@/client/Marca.client';
import { Marca } from '@/model/Marca';


export default defineComponent({
  name: 'MarcaFormulario',

  data() {
    return {
        modelo: new Modelo(),
        modeloclient: new ModeloClient(),
        marcaclient: new MarcaClient(),
        marcaLista: [] as Marca[],
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
    marcaFiltrada() :Marca[] {
        return this.marcaLista.filter((itemMarca: Marca) => itemMarca.ativo);
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
      this.marcaclient.listAll()
        .then((sucess: Marca[]) => {
          this.marcaLista = sucess;
          
        })
        .catch((error :any )=> {
         
          console.log(error);
        });
    
    },
    onClickCadastrar(){
        console.log(this.modelo);
        this.modeloclient.cadastrar(this.modelo)
        .then(sucess => {
          this.modelo = new Modelo();
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

    findbyId(id: number){
      this.modeloclient.findbyid(id)
        .then(sucess => {
          this.modelo = sucess;
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      this.modeloclient.editar(this.modelo.id, this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()
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
      this.modeloclient.delete(this.modelo.id)
        .then(sucess => {
          this.modelo = new Modelo()
          this.findAll();
          
          this.$router.push({ name: 'Listar-Modelo' });
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