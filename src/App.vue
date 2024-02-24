

<template>
  <figure class="figure">
    <img src="./assets/logo.gif" class="figure-img img-fluid rounded" alt="...">
  </figure>
  
  <home-page></home-page>
  <div class="text-center footer">
      © 2024 Copyright: <a href="https://dichavandobit.com"> Dichavandobit.com</a>
  </div>
</template>
<script>
import HomePage from './pages/HomePage.vue';
export default {
  components: {
    'home-page': HomePage,
  }
}
</script>
<style scoped>
.logo {
  will-change: filter;
  transition: filter 1500ms;
}

.logo:hover {
  filter: drop-shadow(0 0 0.5em #708028);
}
</style>
