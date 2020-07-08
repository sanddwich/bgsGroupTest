export const state = () => ({
  token: null,
  loginUserData: null
})

export const mutations = {
  setToken(state, user) {
    state.token = user.token
    state.loginUserData = user
  },
  clearToken(state) {
    state.token = null
    state.loginUserData = null
  },
}

export const actions = {
  login({ commit }, user) {
    commit('setToken', user)
  },
  logout({ commit }) {
    commit('clearToken')
  },
}

export const getters = {
  hasToken: (state) => !!state.token,
  userData: (state) => state.loginUserData
}
