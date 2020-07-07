<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" class="kiscont pa-4">
      <LoginForm />
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from '@/components/loginForm';
import {Observer, Observable} from 'rxjs';

export default {
  layout: 'auth',
  components: {
    LoginForm,
  },
  data: () => ({
    users: []
  }),
  async fetch({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/buildUsers');
    }
  },
  methods: {
    getUsers() {
      return this.$store.getters['users/users'];
    }
  },
  mounted() {
    const $stream = this.getUsers()
    console.log($stream);
    // $stream.subscribe((stream) => {

    // });
  },
}
</script>
