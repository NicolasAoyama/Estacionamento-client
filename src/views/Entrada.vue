<template>
    <div class="container mt-5 bg-dark">
      <h1 class="display-4 custom-text-color">Registrar Entrada</h1>
      <form class="form-inline">
        <div class="row mt-4 mb-4 justify-content-center">
          <div class="row col-12 justify-content-center">
            
            <div class="row justify-content-center">
              <div class="col-6">
                <input type="text" class="form-control col-6" id="cpf" placeholder="Digite o CPF do condutor..." maxlength="14">
              </div>
            </div>
            <div class="col-2 mt-3">
              <button class="btn bg-warning"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                Pesquisar
              </button>
            </div>
            <div class="col-3 mt-3">
              <router-link to="/AddCondutor" class="btn btn-success ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                Cadastrar Condutor
              </router-link>
            </div>
          </div>
        </div>

        <div class="row mt-4 mb-4 justify-content-center col-md-6 offset-md-3">
          <div class="col-5">
            <input class="form-control" type="text" readonly>
          </div>
          <div class="col-5">
            <input class="form-control" type="text" readonly>
          </div>
        </div>

        <div class="row mt-4 mb-4 justify-content-center">
          <div class="row col-12 justify-content-center">

            <div class="row justify-content-center">
              <div class="col-6">
                <input type="text" class="form-control col-2" id="placa" placeholder="Digite a Placa do Veiculo" maxlength="14">
              </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-2 mt-3">
                <button class="btn bg-warning">  
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  Pesquisar
                </button>
              </div>
              <div class="col-3 mt-3">
                <router-link to="/AddVeiculo" class="btn btn-success align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                  Cadastrar Veiculo
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4 mb-4 justify-content-center col-md-6 offset-md-3">
          <div class="col-5">
            <input class="form-control" type="text" readonly>
          </div>
          <div class="col-5">
            <input class="form-control" type="text" readonly>
          </div>
        </div>

        

      </form>
      <div class="col-12 mt-6 mb-6">
        <button class="btn btn-success btn-lg col-6" >Registrar Entrada</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  
  </script>

  
  
  <style>
  
  /* Seu estilo CSS aqui */
  </style>