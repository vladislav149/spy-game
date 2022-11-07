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

export const mutationTypes = {
  changeDataOfPlayers: '[players] change data of players'
}

export const actionTypes = {
  dataOfPlayers: '[players] data of players'
}

const mutations = {
  [mutationTypes.changeDataOfPlayers](state, payload) {
    state.players = payload
  }
}

const actions = {
  [actionTypes.dataOfPlayers](context, data) {
    return new Promise(resolve => {
      context.commit(mutationTypes.changeDataOfPlayers, data)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
