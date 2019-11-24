import productsApi from '../../api/products'

const state = {
  products: []
}

const getters = {
  getProductById: state => id => state.products.find(product => product.id === id)
}

const actions = {
  getAllProducts ({ commit }) {
    productsApi.getProducts(products => {
      commit('SET_PRODUCTS', products)
    })
  }
}

const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
