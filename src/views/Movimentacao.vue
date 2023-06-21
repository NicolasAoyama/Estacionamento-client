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
                <h5 class="card-title">Movimentacao</h5>
                  <div class="form-group">
                    <label for="nome">Veiculo</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Condutor</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Entrada</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Saida</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Tempo total (em Horas)</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Tempo total (em Minutos)</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Tempo Multa (Em Minutos)</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Tempo Multa (Em Horas)</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Tempo de Desconto</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Valor Desconto</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Valor Hora</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Valor Multa</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Valor total</label>
                    <input type="text" class="form-control" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="nome">Valor Multa (Em Horas)</label>
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
    