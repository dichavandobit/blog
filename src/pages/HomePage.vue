

<template>
    <div class="container">
    <div class="row col-md-9 mx-auto">
      <div class="col">
        <card-post v-for="post in posts" 
        :title="post.title"
        :description="post.description"
        :published="post.published"
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
            const response = await axios.get('https://65d950cfc96fbb24c1bce62a.mockapi.io/posts/');
            this.posts = response.data
        } catch (error) {
            alert(error);
        }
    }
}
</script>

  