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
      <div class="col-lg-8">
        <h1>Bem-vindo ao Estacionamento Mercosul</h1>
        <p>Frase de efeito muito boa.</p>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Faça sua reserva</h5>
            <form>
              <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome">
              </div>
              <div class="form-group">
                <label for="placa">Numero</label>
                <input type="text" class="form-control" id="placa">
              </div>
              <button type="submit" class="btn btn-primary">Reservar</button>
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