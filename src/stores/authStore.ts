import { defineStore } from "pinia";
import axios from 'axios';

export const authStore = defineStore("authStore", {
  state: () => ({
    token: null,
  }),

  actions: {
    async signIn(email, password) {
      const response = await axios.post('http://localhost:3030/auth/login', {
          "username": email,
          "password": password
      });
      this.token = response.data.access_token ?? null;
    },
  },
  getters: {
    jtwToken: (state) => state.token 
  },
});