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
  
        <tbody>
  
          <tr scope="row">
            <td>KKKKKK</td>
            <td>AAA 1234</td>
            <td>26/06/2023 14:48:23</td>
            <!--<td>
              <button class="btn bg-warning" id="sairButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                Sair
              </button>
            </td>-->
            <td>
              <router-link to="/Recibo" class="btn bg-warning" id="sairButton">
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
  