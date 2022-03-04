const bestsellers = {
  state: {
    bestsellers: [],
  },
  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data
    }
  },
  actions: {
    setBestsellersData({
      commit
    }, data) {
      commit('setBestsellersData', data)
    },
  },
  getters: {
    getBestsellers(state) {
      return state.bestsellers
    },
    // getProductById(state) {
    //   return (id) => {
    //     return state.bestsellers.find((card) => card.id === +id)
    //   }
    // }

  },
}
export default bestsellers