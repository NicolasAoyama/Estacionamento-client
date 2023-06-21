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
                <h5 class="card-title">Modelo</h5>
                  <div class="form-group">
                    <label for="nome">Modelo</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Marca</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <button type="submit" class="btn btn-primary">Cadastrar</button>
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
    