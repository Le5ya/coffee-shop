const goods = {

  state: {
    goods: [],
  },
  mutations: {
    setGoodsData(state, data) {
      state.goods = data
    }
  },
  actions: {
    setGoodsData({
      commit
    }, data) {
      commit('setGoodsData', data)
    },
  },
  getters: {
    getGoods(state) {
      return state.goods
    },
    getProductById(state) {
      return (id) => {
        return state.goods.find((good) => good.id === +id)
      }
    }

  },
}

export default goods