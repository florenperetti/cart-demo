<template>
  <div class="product">
    <router-link class="product__link" :to="{ name: 'product', params: { id: product.id }}">
      <img class="product__image" :alt="product.title" :src="imageSrc" />
      <div class="product__info">
        <h2>{{product.title}}</h2>
        <p>${{product.price}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc () {
      return require(`../assets/products/${this.product.src}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  transition: background-color .3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
  &:hover {
    .product__image {
      opacity: .8;
    }
  }

  &__image {
    display: block;
    object-fit: cover;
    height: 230px;
    width: 300px;
    transition: opacity .3s ease;
  }
  &__link {
    color: inherit;
  }
}
</style>
