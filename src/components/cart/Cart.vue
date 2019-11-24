<template>
  <div class="cart-container">
    <template v-if="cartProductsLength > 0">
      <CartTable/>
      <button class="cart-container__checkout-button">Check Out</button>
    </template>
    <template v-else>
      <p>Cart empty!</p>
      <router-link to="/">Check out some vintage products</router-link>
    </template>
  </div>
</template>

<script>
import CartTable from './CartTable'
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartTable
  },
  computed: {
    ...mapGetters({
      cartProductsLength: 'cart/cartProductsLength'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

.cart-container {
  max-width: 960px;
  width: 90%;
  margin: 0 auto;

  &__checkout-button {
    @include cta-button;
    margin-top: 16px;
  }
}
</style>
