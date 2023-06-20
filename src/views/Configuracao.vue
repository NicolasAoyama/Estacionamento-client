<template>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Estacionamento Mercosul</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css">
    </head>
    <body>
      <div class="container">
    
    
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Configuracao</h5>
                <form>
                  <div class="form-group">
                    <label for="nome">Valor Hora</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="placa">Horadio de inicio do expediente</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <div class="form-group">
                    <label for="placa">Horadio de fim do expediente</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <div class="form-group">
                    <label for="placa">Tempo Para o Desconto</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <div class="form-group">
                    <label for="placa">Tempo De Desconto</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <div class="form-group">
                    <label for="placa">Gerar Desconto</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <div class="form-group">
                    <label for="placa">Vagas Carro</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <div class="form-group">
                    <label for="placa">Vagas Moto</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <div class="form-group">
                    <label for="placa">Vagas Van</label>
                    <input type="text" class="form-control" id="placa">
                  </div>
                  <button type="submit" class="btn btn-primary">Cadastrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    
        <footer class="mt-5">
          <p>&copy; 2023 Estacionamento Mercosul. Todos os direitos reservados.</p>
        </footer>
      </div>
    </body>
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    
    export default defineComponent({
      name: 'HomeView',
      components: {
        HelloWorld,
      },
    });
    </script>
    