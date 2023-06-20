<template>
  <nav>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Estacionamento Mercosul</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/"><a class="nav-link" href="#">Home</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about"><a class="nav-link" href="#">Sobre</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/condutor"><a class="nav-link" href="#">Condutor</a></router-link>
            </li>
            
            <li class="nav-item">
              <router-link to="/configuracao"><a class="nav-link" href="#">Configuracao</a></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </nav>
  <router-view/>
</template>

<style lang="scss">
// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
