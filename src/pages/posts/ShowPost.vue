
<template>

      <div class="row">
        <div class="col-sm">
            <div class="card">
               
                <div class="card-header">
                    <h5 class="card-title">{{ post.title }}</h5>
                </div>
            <div class="card-body">
                
                <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no m&eacute;, cursus quis, vehicula ac nisi. Praesent
                    malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Admodum accumsan
                    disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non
                    turpis scelerisque, eget.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam
                    laoreet. Sed non consequat odio. Detraxit consequat et quo num tendi nada. Bota 1 metro de cachacis
                    a&iacute; pra viagem! Pra l&aacute;, depois divoltis porris, paradis.</p>
                <p>Aenean aliquam molestie leo, vitae iaculis nisl. Delegadis gente finis, bibendum egestas augue arcu ut
                    est. Viva Forevis aptent taciti sociosqu ad litora torquent. Em p&eacute;
                </p>
                <p>sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no m&eacute;, cursus quis, vehicula ac nisi. Praesent
                    malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Admodum accumsan
                    disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non
                    turpis scelerisque, eget.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam
                    laoreet. Sed non consequat odio. Detraxit consequat et quo num tendi nada. Bota 1 metro de cachacis
                    a&iacute; pra viagem! Pra l&aacute;, depois divoltis porris, paradis.</p>
                <p>Aenean aliquam molestie leo, vitae iaculis nisl. Delegadis gente finis, bibendum egestas augue arcu ut
                    est. Viva Forevis aptent taciti sociosqu ad litora torquent. Em p&eacute;
                </p>
            </div>
        </div>
        </div>
      </div>
</template>
<style scoped>
@media screen and (max-width: 600px) {
  .card {
    border: none; /* Remove a borda em telas menores */
    font-size: 15px;
  }
}
.card-header{
    border-bottom: 20px;
}
.card-body{
    text-align: justify;
  } 
</style>
<script>
import axios from 'axios';
export default {
    props: ['id'],
    data() {
        return {
            post: {
                title: ''
            }
        };
    },
    async created() {
        console.log(this.id)
        try {
            const response = await axios.get('https://65d950cfc96fbb24c1bce62a.mockapi.io/posts/' + this.id);
            this.post = response.data
        } catch (error) {
            alert(error);
        }
    }
};
</script>