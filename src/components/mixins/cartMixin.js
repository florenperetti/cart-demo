import { mapActions, mapGetters } from 'vuex'

export const cartMixin = {
  computed: {
    ...mapGetters({
      products: 'cart/allCartProducts',
      cartTotal: 'cart/cartTotal'
    })
  },
  methods: {
    ...mapActions({
      decreaseProduct: 'cart/decreaseProduct',
      addProductToCart: 'cart/addProductToCart',
      removeProduct: 'cart/removeProduct'
    })
  }
}
