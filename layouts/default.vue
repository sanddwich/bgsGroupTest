<template>
  <v-app>
    <nav class="navigation">
      <ul>
        <nuxt-link to="/">
          <li>UserProfile</li>
        </nuxt-link>
        <nuxt-link to="/additional">
          <li>Additional</li>
        </nuxt-link>
        <nuxt-link to="#">
          <li @click.prevent="toLoginPage">Logout</li>
        </nuxt-link>
      </ul>
    </nav>

    <nuxt />
  </v-app>
</template>

<style scoped>
ul {
  list-style: none;
}
li {
  display: inline-block;
  padding: 10px;
}
li:hover {
  background: #c5cae9;
}
</style>

<script>
export default {
  methods: {
    toLoginPage() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
  },
}
</script>
