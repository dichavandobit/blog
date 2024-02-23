

<template>
  <navbar></navbar>
  <div class="container">
    <div class="row col-md-9 mx-auto">
      <div class="col">
        <figure class="figure">
          <img src="./assets/logo.gif" class="figure-img img-fluid rounded" alt="...">
        </figure>
        <card-post
         title="Desafio 1: Mundo tá muito paradis?"
         subtitle="Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nulla id gravida magna, ut semper sapien. Quem num gosta di mé, boa gentis num é. Casamentiss faiz malandris se pirulitá. "
         published="21/99/9019"
         ></card-post>
         <card-post
         title="Desafio 2: Casamentiss faiz malandris se pirulitá"
         subtitle="Vide electram sadipscing et per. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Si num tem leite então bota uma pinga aí cumpadi!"
         published="21/99/9019"
         ></card-post>
         <card-post
         title="Desafio 3: Praesent malesuada urna nisi"
         subtitle="Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris!"
         published="21/99/9019"
         ></card-post>
         <card-post
         title="Desafio 4: Matis, aguis e fermentis"
         subtitle="Copo furadis é disculpa de bebadis, arcu quam euismod magna. Nulla id gravida magna, ut semper sapien. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Bota 1 metro de cachacis aí pra viagem!"
         published="21/99/9019"
         ></card-post>
      </div>
    </div>
  </div>
  <CardPost>
    
  </CardPost>
  <div class="text-center footer"> 
    © 2024 Copyright: <a href="https://dichavandobit.com"> Dichavandobit.com</a>
  </div>
</template>
<script>
import CardPostVue from './components/CardPost.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    'card-post': CardPostVue,
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
</style>
