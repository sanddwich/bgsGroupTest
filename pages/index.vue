<template>
  <v-app class="ml-5 mr-5">
    <h1>UserProfile</h1>
    <v-row>
      <v-col sm="6" md="4" lg="3" xl="2">
        <v-card class="ma-5">
          <v-img
            style="max-height:400px;"
            :src="userData.photo"
          ></v-img>
          <v-card-title>{{userData.name}}</v-card-title>
          <v-card-text>
            E-mail: {{userData.mail}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  middleware: ['auth'],
  data: () => ({}),
  computed: {
    userData() {
      return this.data = this.$store.getters.userData;
    }
  },
  mounted() {}
}
</script>
