<script setup>
const props = defineProps(['title', 'subtitle', 'published'])

</script>
<template>
    <div class="col">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">  {{ title }} </h5>
                <p class="card-text">
                    {{ subtitle }}
                </p>
                <h6>Publicado: {{ published }}</h6>
            </div>
        </div>
    </div>
</template>

<style>
.card{
  border: 2px solid #888831; 
  border-style: groove ;
  column-rule-style: inset;
  background-color: #405010;
  color: #d0d058;
  margin-bottom: 10px;
  height: auto;
}
.card-text{
  color:  #d0d058;
  font-size: 1rem;
}
.card-title{
    border-bottom: 2px solid #888831; /* Espessura e cor da linha */
    display: inline-block; /* Para que a linha não ocupe toda a largura */
    margin-bottom: 10px; /* Espaçamento opcional abaixo do h6 */
}
.card:hover {
      transform: scale(1.02); /* Aumenta o tamanho do card ao passar o mouse sobre ele */
      transition: transform 0.4s ease; /* Adiciona uma transição suave */
      background-color: #455711 ; 
      border: 2px solid #d0d058; 
}
</style>
