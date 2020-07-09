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
        username: 'testuser',
        name: 'Сергей',
        password: 'Qwerty123',
        mail: 'testuser@yndex.ru',
        photo: 'https://sun9-54.userapi.com/c847121/v847121736/c115f/AQOYaoT42Ac.jpg'
      },
      {
        username: 'testuser2',
        name: 'Алексей',
        password: 'Qwerty1234',
        mail: 'testuser2@yndex.ru',
        photo: 'https://sun9-61.userapi.com/c622224/v622224788/3b2b8/W3kyiPJrR04.jpg'
      },
      {
        username: 'testuser3',
        name: 'Дмитрий',
        password: 'Qwerty12345',
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