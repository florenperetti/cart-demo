<template>
  <section v-if="product" class="product">
    <div class="product__info">
      <img class="product__image" :alt="product.title" :src="imageSrc" />
      <div class="product__right-panel">
        <h1>{{product.title}}</h1>
        <p class="product__text">{{product.description}}</p>
        <p class="product__price">$ {{product.price}}</p>
        <button class="product__cart-button" @click="addProductAndOpenDrawer">Add to Cart</button>
        <a class="product__back-link" @click="$router.go(-1)">Back</a>
      </div>
    </div>
  </section>
  <div v-else class="product product--not-found">
    <h1>Sorry, product not found</h1>
    <a class="product__back-link" @click="$router.go(-1)">Back</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Product',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getProductById: 'products/getProductById'
    }),
    product () {
      return this.getProductById(this.id)
    },
    imageSrc () {
      if (!this.product) {
        return
      }
      return require(`../assets/products/${this.product.src}`)
    }
  },
  methods: {
    ...mapActions({
      addProductToCart: 'cart/addProductToCart'
    }),
    addProductAndOpenDrawer () {
      this.$emit('openDrawer')
      this.addProductToCart(this.product.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

.product {
  &__info {
    display: flex;
    width: 90%;
    max-width: 960px;
    margin: 0 auto;

    > * {
      margin: 16px;
    }
  }

  &__image {
    display: block;
    object-fit: contain;
    width: 50%;
    transition: opacity .3s ease;
    align-self: flex-start;
  }

  &__text {
    text-align: left;
  }

  &__price {
    font-size: 20px;
    color: #242424;
    font-weight: 700;
  }

  &__cart-button {
    @include cta-button;
  }

  &__back-link {
    display: inline-block;
    margin-top: 32px;
  }
}

@media all and (max-width: 700px) {
  .product__info {
    flex-direction: column;
    .product__image {
      align-self: center;
      height: 180px;
    }
  }
}

</style>
