<template>

  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ListCondutor" class="nav-link">Condutor</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ListMarca" class="nav-link">Marca</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ListModelo" class="nav-link">Modelo</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ListVeiculo" class="nav-link">Veiculos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ListConfiguracao" class="nav-link">Configuração</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Entrada" class="nav-link">Entrada</router-link>      
      </li>
      <li class="nav-item">
        <router-link to="/ListMovimentacao" class="nav-link">Movimentação</router-link>
      </li>

      
     
    </ul>
  </nav>


  <router-view/>
  
</template>



<style lang="scss">


// Variable overrides first
$primary: #b7023f;
$enable-shadows: true;
$prefix: "mo-";



// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
@import url();

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b7023f;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #b7023f;

    &.router-link-exact-active {
      color: #b7023f;
    }
  }
}

.nav-link{
  color: #FFFFFF;
}

body {
    background-color: #e7dd96;
    padding-top: 90px; 
  }

.custom-text-color{
  color: #FFFFFF;
}

</style>
