<script lang="ts">
import { defineComponent } from 'vue';
import { Marca } from '@/model/Marca';
import { MarcaClient } from '@/client/Marca.client';

export default defineComponent({
  name: 'MarcaLista',
  data() {
    return {
        marcasList: new Array<Marca>(),
        marcaClient: new MarcaClient()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      this.marcaClient.listAll()
        .then((sucess: Marca[]) => {
          this.marcasList = sucess
          console.log(this.marcasList)
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