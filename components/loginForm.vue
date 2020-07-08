<template>
  <v-card class="kiscont pa-6"
    ><v-form ref="form" v-model="formValid" autocomplete="off">
      <v-toolbar-title class="mb-5">Форма авторизации</v-toolbar-title>
      <v-spacer></v-spacer>
      <div
        class="error pa-5 ma-3 white--text"
        color="red"
        style="display: none;"
      >
        Ошибка авторизации!
      </div>

      <v-text-field
        v-model="username"
        :rules="loginRules"
        label="Логин"
        name="login"
        prepend-icon="mdi-account"
        type="text"
      >
      </v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        id="password"
        label="Пароль"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
      ></v-text-field>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          id="login-button"
          color="indigo darken-1"
          large
          class="pr-10 pl-10"
          style="color: white;"
          @click="submitHandler"
          >Войти</v-btn
        >
      </v-card-actions>
      <template v-if="loading">
        <v-text-field color="success" loading disabled></v-text-field>
      </template>
    </v-form>
  </v-card>
</template>

<style scoped>
.kiscont {
  box-sizing: border-box;
}
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'LoginForm',
  data: () => ({
    loading: false,
    formValid: true,
    username: '',
    password: '',
    loginRules: [],
    passwordRules: [],
  }),
  validations: {
    username: { required, minLength: minLength(6) },
    password: { required, minLength: minLength(6) },
  },
  mounted() {
    this.loginRules = [
      (v) => !!v || 'Поле не заполнено',
      (v) =>
        (v && v.length >= this.$v.username.$params.minLength.min) ||
        `Логин не должен быть менее ${this.$v.username.$params.minLength.min} символов`,
    ]

    this.passwordRules = [
      (v) => !!v || 'Поле не заполнено',
      (v) =>
        (v && v.length >= this.$v.password.$params.minLength.min) ||
        `Пароль не должен быть менее ${this.$v.password.$params.minLength.min} символов`,
    ]
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.$refs.form.validate()
        return
      }

      const loginButton = document.getElementById('login-button')
      this.loading = true
      blockForm(loginButton)
      const formData = {
        username: this.username,
        password: this.password,
      }

      setTimeout(() => {
        const userData = this.$store.getters['users/users'].find((user) =>
          formData.username === user.username &&
          formData.password === user.password
            ? user
            : false
        )
        !!userData
          ? loginUser(userData, this.$store, this.$router)
          : errorLogin(document.querySelector('.error'))

        this.loading = false
      }, 2000)

      unblockForm(loginButton)
    },
  },
}

function loginUser(user, store, router) {  
  delete user.password
  user.token = Date.now().toString()
  store.dispatch('login', user)
  router.push('/')
}

function errorLogin(message) {
  message.style.display = ''
  setTimeout(() => {
    message.style.display = 'none'
  }, 3000)
}

function blockForm(loginButton) {
  loginButton.setAttribute('disabled', '')
  loginButton.classList.remove('indigo', 'darken-1')
  loginButton.style.cursor = 'not-allowed'
}

function unblockForm(loginButton) {
  loginButton.removeAttribute('disabled')
  loginButton.classList.add('indigo', 'darken-1')
  loginButton.style.cursor = 'pointer'
}
</script>
