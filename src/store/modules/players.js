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
  changeNumberOfPlayers: '[players] change number of players',
  changeNumberOfSpy: '[players] change number of spy',
  changeNumberOfMinutes: '[players] change number of minutes',
  changeNumberOfSeconds: '[players] change number of seconds'
}

export const actionTypes = {
  NumberOfPlayers: '[players] change number of players',
  NumberOfSpy: '[players] change number of spy',
  NumberOfMinutes: '[players] change number of minutes',
  NumberOfSeconds: '[players] change number of seconds'
}

const mutations = {
  [mutationTypes.changeNumberOfPlayers](state, payload) {
    state.players.numberOf = payload
  },
  [mutationTypes.changeNumberOfSpy](state, payload) {
    state.players.numberOfSpy = payload
  },
  [mutationTypes.changeNumberOfMinutes](state, payload) {
    state.players.time.minutes = payload
  },
  [mutationTypes.changeNumberOfSeconds](state, payload) {
    state.players.time.seconds = payload
  }
}

const actions = {
  [actionTypes.NumberOfPlayers](context, number) {
    return new Promise(resolve => {
      context.commit(mutationTypes.changeNumberOfPlayers, number)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
