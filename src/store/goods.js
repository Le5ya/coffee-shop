const goods = {
  computed: {
    goods() {
      return this.$store.getters["getGoods"];
    },
  },

  state: {
    goods: [{
        id: 0,
        image: "goods-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: 1,
        image: "goods-2.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: 2,
        image: "goods-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
      {
        id: 3,
        image: "goods-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: 4,
        image: "goods-2.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: 5,
        image: "goods-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
    ],
  },
  getters: {
    getGoods(state) {
      // console.log('GOODS')
      // console.log(state)
      // console.log(state.goods)
      return {
        goods: state.goods
      }
    },

  },
};

export default goods