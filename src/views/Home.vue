<template>
  <section class="home">
    <ProductList/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  name: 'home',
  components: {
    ProductList
  }
}
</script>
