<template>
  <v-app class="ml-5 mr-5">
    <h1>Все пользователи</h1>
    <v-row>
      <v-col v-for="user in users" :key="user.photo" sm="6" md="4" lg="3" xl="2">
        <v-card class="ma-5">
          <v-img
            style="max-height:400px;"
            :src="user.photo"
          ></v-img>
          <v-card-title>{{user.name}}</v-card-title>
          <v-card-text>
            E-mail: {{user.mail}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  middleware: ['auth'],
  computed: {
    users() {
      return this.data = this.$store.getters['users/users'];
    }
  },
}
</script>
