

<template>
    <div class="container">
    <div class="row col-md-9 mx-auto">
      <div class="col">
        <card-post v-for="post in posts" 
        :id="post.id"
        :title="post.title"
        :description="post.description"
        :published="post.createdAt"
         ></card-post>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import CardPost from '../components/CardPost.vue';

export default {
    components: {
        'card-post': CardPost,
    },
    data() {
        return {
            posts: []
        };
    },
    async created() {
        try {
            const url = import.meta.env.VITE_API_URL ?? 'http://localhost:3030'
            const response = await axios.get(url+'/posts/');
            this.posts = response.data
        } catch (error) {
            alert(error);
        }
    }
}
</script>

  