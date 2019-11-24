const state = {
  items: []
}

const getters = {
  allCartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.products.find(product => product.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        src: product.src,
        quantity
      }
    })
  },
  cartProductsLength: (state, getters) => {
    return getters.allCartProducts.length
  },
  cartTotal: (state, getters) => {
    return getters.allCartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)
  }
}

const actions = {
  addProductToCart ({ state, commit }, id) {
    const cartItem = state.items.find(item => item.id === id)
    if (!cartItem) {
      commit('ADD_ITEM', { id })
    } else {
      commit('INCREMENT_ITEM', cartItem.id)
    }
  },
  decreaseProduct ({ state, commit }, id) {
    const cartItem = state.items.find(item => item.id === id)
    if (cartItem) {
      if (cartItem.quantity === 1) {
        commit('REMOVE_ITEM', cartItem.id)
      } else {
        commit('DECREASE_ITEM', cartItem.id)
      }
    }
  },
  removeProduct ({ state, commit }, id) {
    commit('REMOVE_ITEM', id)
  }
}

const mutations = {
  ADD_ITEM (state, { id }) {
    state.items.push({ id, quantity: 1 })
  },
  REMOVE_ITEM (state, id) {
    const newItems = state.items.filter(product => product.id !== id)
    state.items = newItems
  },
  INCREMENT_ITEM (state, id) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  DECREASE_ITEM (state, id) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
