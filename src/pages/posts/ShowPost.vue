<template>
    <div class="row">
        <div class="col-sm">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">{{ post.title }}</h5>
                </div>
                <div class="card-body">
                    <div v-html="post.content"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="submit" v-if="store.token">
        <button @click="postEdit" type="button" class="btn btn-primary">Editar</button>
    </div>
</template>
<style scoped>
@media screen and (max-width: 600px) {
    .card {
        border: none;
        /* Remove a borda em telas menores */
        font-size: 15px;
    }
}

.card-header {
    border-bottom: 20px;
}

.card-body {
    text-align: justify;
}
</style>
<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import {  ref, onMounted } from 'vue';
import { authStore } from "../../stores/authStore";
const store = authStore();
const props = defineProps(['id']);
const router = useRouter();
const post = ref({ id: '', title: '', description: '', content: '', createdAt: '' });
const postEdit = () => {
    router.push({ path: '/posts/edit/' + props.id, params: { id: props.id }});
};
onMounted(async () => {
    try {
        const baseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3030'
        const url = baseUrl+'/posts/' + props.id
        const response = await axios.get(url);
        post.value = response.data;
    } catch (error) {
        alert(error, props.id);
    }
})
</script>
