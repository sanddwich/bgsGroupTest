<template>
      <v-card class="kiscont pa-6"
        ><v-form>
          <v-toolbar-title>Форма авторизации</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-text-field
            label="Login"
            name="login"
            prepend-icon="mdi-account"
            type="text"
          >
          </v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="indigo darken-1"
              large
              class="pr-10 pl-10"
              style="color: white;"
              >Login</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
</template>


<style scoped>
.kiscont {
  box-sizing: border-box;
}
</style>
