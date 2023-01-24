const spy = 'ты шпион!'

const state = {
  players: {
    numberOf: 0,
    numberOfSpy: 0,
    time: {
      minutes: 0,
      seconds: 0
    }
  }
}

const getters = {
  getCardArr: state => guessable => {
    const arr = Array.from({length: state.players.numberOf}, (_, i) =>
      i < state.players.numberOfSpy ? spy : guessable
    )
    return arr
  }
}

const mutations = {
  changeDataOfPlayers(state, payload) {
    state.players = payload
  }
}

const actions = {
  dataOfPlayers({commit}, data) {
    return new Promise(resolve => {
      commit('changeDataOfPlayers', data)
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
