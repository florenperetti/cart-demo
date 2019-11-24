<template>
  <div v-if="!fetchingProducts" class="productList">
    <Product :key="product.id" v-for="product in products" :product="product" />
  </div>
  <div v-else class="productList productList--fetching">
    <Loader/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from './Product'
import Loader from './Loader'

export default {
  name: 'ProductList',
  components: {
    Product,
    Loader
  },
  computed: {
    ...mapState({
      products: state => state.products.products
    }),
    fetchingProducts () {
      return this.products.length === 0
    }
  }
}
</script>

<style scoped lang="scss">
.productList {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: space-between;
  max-width: 960px;

  &--fetching {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media all and (max-width: 1080px) {
  .productList {
    max-width: 630px;
  }
}
@media all and (max-width: 760px) {
  .productList {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
}
</style>
