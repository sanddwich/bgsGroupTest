<template>
  <v-app class="ml-5 mr-5">
    <h1>UserProfile</h1>
    <v-row>
      <v-col sm="6" md="4" lg="3" xl="2">
        <v-card class="ma-5">
          <v-img
            style="max-height:400px;"
            src="https://sun9-61.userapi.com/c622224/v622224788/3b2b8/W3kyiPJrR04.jpg"
          ></v-img>
          <v-card-title>Denis</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            error! Soluta, consequatur. Corporis maxime minima esse! Dolore,
            dolor laborum! Quis expedita enim ipsam quaerat pariatur totam quae
            blanditiis saepe nemo.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  middleware: ['auth'],
}
</script>
