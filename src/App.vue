<template>
  <div id="app">
    <div class="app__container">
      <BaseNav @cartClick="isCartVisible = !isCartVisible">
        <template #cartIcon>
          <transition name="grow">
            <font-awesome-icon v-if="cartProductsLength" class="nav__cart-button-dot" icon="circle" color="red" />
          </transition>
        </template>
      </BaseNav>
      <router-view @openDrawer="isCartVisible = true"/>
    </div>
    <CartDrawer :show="isCartVisible" @closeDrawer="isCartVisible = false" />
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav'
import CartDrawer from '@/components/cart/CartDrawer'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    BaseNav,
    CartDrawer
  },
  data () {
    return {
      isCartVisible: false
    }
  },
  computed: {
    ...mapGetters({
      cartProductsLength: 'cart/cartProductsLength'
    })
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    ...mapActions({
      getAllProducts: 'products/getAllProducts'
    })
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baskervville|Montserrat:300,400&display=swap');

html,
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

body {
  margin: 0;

  * {
    box-sizing: border-box;
  }
}

#app {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  display: flex;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Baskervville', serif;
}

a {
  text-decoration: none;
  transition: .3s ease;
  &:hover {
    color: blue;
  }
}

.app__container {
  flex-grow: 1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  > section {
    overflow-y: auto;
    margin-top: 90px;
    height: calc(100% - 90px);
    padding: 36px 0;
  }
}

.grow-enter-active,
.grow-leave-active {
  transition: all .4s cubic-bezier(.4,-0.43,.4,1.57);
}

.grow-enter-to {
  transform: scale(1)
}
.grow-enter,
.grow-leave-to {
  transform: scale(0)
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

a,
button,
select {
  cursor: pointer;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
</style>
