
<template>
    <div class="col">
        <div class="card"  @click="goToPost">
            <div class="card-body">
                <h5 class="card-title">  {{ this.title }} </h5>
                <p class="card-text">
                    {{ description }}
                </p>
                <h6>Publicado: {{ published }}</h6>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  props: ['id', 'title', 'description', 'published'],
  methods: {
    goToPost() {
      console.log(this.id)
      this.$router.push({ name: 'showPost', params: { id: this.id }});
    }
  }
};
</script>
<style>
.card{
  border: 3px solid var(--color-blue-1); 
  
  column-rule-style: inset;
  background-color: var(--color-blue-2);
  color: var(--color-purple-1);
  margin-bottom: 10px;
  height: auto;
}
.card-text{
  color:  var(--color-purple-1);
  font-size: 1rem;
}
.card-title{
    border-bottom: 2px solid var(--color-blue-1); 
    display: inline-block; 
    margin-bottom: 10px; 
}

</style>
<style scoped>
.card:hover {
      transform: scale(1.02); 
      transition: transform 0.4s ease; 
    
      border: 3px solid var(--color-purple-1);
      .card-title{
          border-bottom: 2px solid var(--color-purple-1); 
      }
}
</style>
