<template>
  <transition name="slide">
    <div v-if="show" class="cart-drawer">
      <header class="cart-drawer__header">
        <h1>Your Cart</h1>
        <button class="cart-drawer__close-button" @click="$emit('closeDrawer')">
          <font-awesome-icon color="#ffffff" icon="times" size="lg" />
        </button>
      </header>
      <div ref="list" class="cart-drawer__product-list">
        <CartDrawerProduct
          :key="product.id"
          v-for="product in products"
          :product="product"
          @decreaseProduct="decreaseProduct"
          @increaseProduct="addProductToCart"
          @removeProduct="removeProduct"
        />
      </div>
      <footer class="cart-drawer__footer">
        <div class="cart-drawer__subtotal"><span>Subtotal</span><span>$ {{cartTotal}}</span></div>
        <router-link to="/cart">
          <span class="cart-drawer__checkout-button" @click="$emit('closeDrawer')">Check Out</span>
        </router-link>
      </footer>
    </div>
  </transition>
</template>

<script>
import CartDrawerProduct from './CartDrawerProduct'
import { cartMixin } from '../mixins/cartMixin'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CartDrawerProduct
  },
  mixins: [cartMixin],
  watch: {
    products (val, oldVal) {
      if (this.$refs.list && val.length > oldVal.length) {
        this.$refs.list.scrollTop = 9999
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

.cart-drawer {
  background-color: #242424;
  color: #fff;
  padding: 0 24px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  height: 100vh;
  z-index: 10;
  overflow: hidden;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  &__product-list {
    height: 50%;
    overflow-y: auto;
  }

  &__footer {
    border-top: 1px solid #353535;
    padding-top: 16px;
  }

  &__subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
  }

  &__checkout-button {
    @include cta-button;
    margin-top: 12px;
    text-decoration: none;
    opacity: .8;
    &:hover {
      opacity: 1;
      background-color: red;
    }
  }
}

.slide-enter-active {
  transition: all .3s ease;
}

.slide-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-enter, .slide-leave-to {
  transform: translateX(420px);
}

@media all and (max-width: 420px) {
  .cart-drawer {
    width: 100%;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
}
</style>
