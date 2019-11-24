<template>
  <section class="cart">
    <h1>Your Cart</h1>
    <Cart/>
  </section>
</template>

<script>
import Cart from '@/components/cart/Cart'

export default {
  name: 'home',
  components: {
    Cart
  }
}
</script>

<style lang="scss" scoped>
.cart {
  overflow-y: auto;
  height: calc(100% - 90px);
  padding: 36px 0;
}
</style>
