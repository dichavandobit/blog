<template>

    <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="digite seu email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="buttonbox">
            <button @click="login" class="btn btn-primary">Submit</button>
        </div>
       
      </form>
</template>
<style>
    .buttonbox{
        padding-top: 20px;
    }
    .btn{
        background-color: var(--color-blue-1);
    }
    .btn:hover{
        background-color: var(--color-blue-2);
    }
</style>
<script>
import { authStore } from "../stores/authStore.ts";

export default {
    setup() {
        const store = authStore();
        return { store };
    },
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            
            await this.store.signIn(this.email, this.password)
                .then(() => {
                    // redirect to previous url or default to home page
                    this.$router.push('/posts/create');
                })
                .catch(error => alert(error));
        }
    }
};
</script>