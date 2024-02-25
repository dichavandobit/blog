

<template>


  <navbar></navbar>

  <transition>
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  <div class="text-center footer">
    © 2024 Copyright: <a href="https://dichavandobit.com"> Dichavandobit.com</a>
  </div>
</template>
<script>
import HomePage from './pages/HomePage.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    'home-page': HomePage,
    'navbar': NavBar
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transition: opacity 0.5s ease;
  opacity: 0;
}
</style>
