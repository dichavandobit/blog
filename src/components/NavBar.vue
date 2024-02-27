
<template>
      <div class="row">
    <div class="col-">
      <figure class="figure">
        <img src="../assets/logo.gif" class="figure-img img-fluid rounded" alt="...">
      </figure>
    </div>
  </div>
  <div class="row" style="padding-top: 10px;">
    <div class="col-">
      <figure class="figure">
        <img src="../assets/dichavas-export.png" class="figure-img img-fluid rounded" alt="...">
      </figure>
    </div>
  </div>
    <nav class="navbar navbar-expand-md navbar-dark ">
        <div class="container-fluid">
            <div class=" navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">      
                        <router-link  class="nav-link" to="/"  v-bind:class="{ 'active': isActive('/') }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Desafios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Quem somos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  methods: {
    isActive(route) {
      // Verifique se a rota atual é igual à rota fornecida
      return this.$route.path === route;
    }
  }
}
</script>
<style scoped>
.navbar{
    padding-bottom: 20px;
}
.nav-link {
  color: #708028;
}

.active {
  color: #d0d058 !important;
  border-bottom: 2px solid #d0d058;
}

.nav-link:hover {
  color: #708028;
}
</style>