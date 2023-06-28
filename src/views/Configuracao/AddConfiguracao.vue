<template >

  <div class="container ">

      <div class="text-center mb-5">
          <h1 v-if="form === undefined" class="display-4 custom-text-color">Adicionar Configuração</h1>
          <h1 v-if="form === 'editar'" class="display-4 custom-text-color">Editar Configuração</h1>
      </div>

      <form class="row g-3 d-flex justify-content-center bg-dark">

          <div class="row justify-content-center mt-3">

              <div class="col-md-3" >
                  <label for="inputInicio" class="form-label text-color">Inicio Expediente</label>
                  <input type="nome" class="form-control" id="inputInicio" v-model="configuracao.inicioExpediente">
              </div>
              <div class="col-md-3" >
                  <label for="inputPlaca" class="form-label text-color">Fim Expediente</label>
                  <input type="nome" class="form-control" id="inputFim" v-model="configuracao.fimExpediente">
              </div>
          </div>


          <div class="row justify-content-center mt-3">
              <div class="col-md-3" >
                  <label for="inputPlaca" class="form-label text-color">Valor Hora</label>
                  <input type="nome" class="form-control" id="inputValorHora" v-model="configuracao.valorHora">
              </div>

              <div class="col-md-3" >
                  <label for="inputPlaca" class="form-label text-color">Valor Minuto Multa</label>
                  <input type="nome" class="form-control" id="inputValorMulta" v-model="configuracao.valorMinutoMulta">
              </div>
              
          </div>

          <div class="row justify-content-center mt-3">
              <div class="col-md-3" >
                  <label for="inputInicio" class="form-label text-color">Tempo para Desconto</label>
                  <input type="nome" class="form-control" id="inputDesconto" v-model="configuracao.tempoParaDesconto">
              </div>
              <div class="col-md-3" >
                  <label for="inputPlaca" class="form-label text-color">Tempo de Desconto</label>
                  <input type="nome" class="form-control" id="inputTempoDeDesconto" v-model="configuracao.tempoDeDesconto">
              </div>
          </div>

          <div class="row justify-content-center mt-3">
              <div class="col-md-3" >
                  <label for="inputPlaca" class="form-label text-color">Gerar Desconto</label>
                  <input type="nome" class="form-control" id="inputGerarDesconto" v-model="configuracao.gerarDesconto">
              </div>
              
          
              <div class="col-md-3" >
                  <label for="inputInicio" class="form-label text-color">Vagas Moto</label>
                  <input type="nome" class="form-control" id="inputVagasMoto" v-model="configuracao.vagasMoto">
              </div>

          </div>

          <div class="row justify-content-center mt-3">

              <div class="col-md-3" >
                  <label for="inputPlaca" class="form-label text-color">Vagas Carro</label>
                  <input type="nome" class="form-control" id="inputVagasCarro" v-model="configuracao.vagasCarro">
              </div>

              <div class="col-md-3" >
                  <label for="inputPlaca" class="form-label text-color">Vagas Van</label>
                  <input type="nome" class="form-control" id="inputVagasVan" v-model="configuracao.vagasVan">
              </div>
              
          </div>
          
          
          <div  v-if="form === undefined"  class="col-12 mb-5 mt-5">
              <router-link to="/Listar-Configuracao" class="btn btn-success " @click="onClickCadastrar" >Adicionar</router-link>

          </div>
          

          <div v-if="form === 'editar'" class="d-flex justify-content-center ">
              <div class="row ">
                <div class="col-5">
                      <router-link to="/Listar-Configuracao" class="btn btn-warning "  @click="onClickEditar" >Editar</router-link>
                </div>
                  <div class="col-5">
                      <router-link to="/Listar-Configuracao" class="btn btn-info " >Voltar</router-link>
                  </div>
              </div>

          </div>
      </form>
              
  

  </div>

</template>




<script lang="ts">
import { defineComponent } from 'vue';
import { ConfiguracaoClient } from '@/client/Configuracao.client';
import { Configuracao } from '@/model/Configuracao';



export default defineComponent({
  name: 'ConfiguracaoFormulario',

  data() {
    return {
        configuracao: new Configuracao(),
        configuracaoClient: new ConfiguracaoClient(),
        
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
    onClickCadastrar(){
        console.log(this.configuracao);
        this.configuracaoClient.cadastrar(this.configuracao)
        .then(sucess => {
          this.configuracao = new Configuracao();          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    findbyId(id: number){
      this.configuracaoClient.findbyid(id)
        .then(sucess => {
          this.configuracao = sucess;
          
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      this.configuracaoClient.editar(this.configuracao.id, this.configuracao)
        .then(sucess => {
          this.configuracao = new Configuracao()
         
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
});
</script>

<style scoped>
.text-color{
    color: #FFFFFF;
    
}


</style>