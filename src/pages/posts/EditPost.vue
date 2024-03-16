<template>
  <div class="container-fluid">
    <div class="input-group mb-3">
      <input type="text" class="form-control" disabled="true" placeholder="-" aria-label="id"
        aria-describedby="basic-addon1" v-model="post.id">
    </div>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" v-model="post.title" placeholder="Adicione o titulo do post">
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="post.description" rows="3"
          placeholder="Adicione a descrição do post"></textarea>
      </div>
      <div class="form-group">
        <main id="sample">
          <Editor v-model="post.content" api-key="1fywpe1nvg4ev7gpw1vdoumiyf5jk7oz8n1oentaurnia66n" :init="{
          toolbar_mode: 'sliding',
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Grisha',
        }" initial-value="Adicione o conteudo do post" />
        </main>
      </div>
      <div class="submit">
        <button @click="submit" type="button" class="btn btn-primary">Salvar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Editor from '@tinymce/tinymce-vue'
import { authStore } from "../../stores/authStore";
const props = defineProps(['id'])
const store = authStore();
const title = ref('');
const description = ref('');
const content = ref('');
const token = ref('');
const post = ref({ id: '', title: '', description: '', content: '', createdAt: '' });
const url = import.meta.env.VITE_API_URL ?? 'http://localhost:3030'
const submit = async () => {
  let postData = {
    title: post.value.title,
    description: post.value.description,
    content: post.value.content,
    createdAt: new Date()
  }
  if (post.value.id) {
    const response = await axios.patch(url+'/posts/' + post.value.id, postData, {
      headers: {
        Authorization: 'Bearer ' + store.token
      }
    }).then(() => alert("Atualizado com sucesso!")).catch((err) => alert(err));
  } else {
    const response = await axios.post(url+'/posts/', postData, {
      headers: {
        Authorization: 'Bearer ' + store.token
      }
    }).then(() => alert("Criado com sucesso!")).catch((err) => alert(err));
  }
};

onMounted(async () => {
  if (props.id) {
    const response = await axios.get('http://localhost:3030/posts/' + props.id);
    post.value = response.data
  }
})
</script>


<style scoped>
form {
  color: var(--color-blue-1);
}

.submit {
  padding-top: 10px;
  padding-bottom: 20px;
}

.btn {
  background-color: var(--color-blue-1);
}

.form-group {
  padding-bottom: 20px;
}

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>