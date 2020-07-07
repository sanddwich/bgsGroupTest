export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
}

export const actions = {
  buildUsers({commit}) {
    const users = [
      {
        login: 'testuser',
        password: 'Qwerty123',
        mail: 'testuser@yndex.ru',
        photo: 'https://sun9-46.userapi.com/c9899/u15395276/-6/x_f4f28d9c.jpg'
      },
      {
        login: 'testuser2',
        password: 'Qwerty1234',
        mail: 'testuser2@yndex.ru',
        photo: 'https://sun9-61.userapi.com/c622224/v622224788/3b2b8/W3kyiPJrR04.jpg'
      },
      {
        login: 'testuser3',
        password: 'Qwerty1235',
        mail: 'testuser3@yndex.ru',
        photo: 'https://sun9-50.userapi.com/pEniEbwsPTk7QoTtT3jp1ePoVep0_G-h2D1Kcw/do6NB-nPD5I.jpg'
      }      
    ]

    // console.log('buildUsers');

    commit('setUsers', users);
    
  }
}

export const getters = {
  users: state => state.users
}