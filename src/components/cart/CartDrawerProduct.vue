<script>
export default {
  name: 'CartDrawerProduct',
  functional: true,
  render (h, { props, listeners, scopedSlots }) {
    const { product } = props
    const imageSrc = require(`../../assets/products/${product.src}`)
    return (
      <div class="cart-drawer-product">
        <img class="cart-drawer-product__image" alt={product.title} src={imageSrc} />
        <div>
          <h3 class="cart-drawer-product__title">{product.title}</h3>
          <div class="cart-drawer-product__tools">
            <button class="cart-drawer-product__button" onClick={() => listeners.decreaseProduct(product.id)}>
              <font-awesome-icon color="#ffffff" icon="minus" />
            </button>
            <span class="cart-drawer-product__quantity">{product.quantity}</span>
            <button class="cart-drawer-product__button" onClick={() => listeners.increaseProduct(product.id)}>
              <font-awesome-icon color="#ffffff" icon="plus" />
            </button>
            <button class="cart-drawer-product__button" onClick={() => listeners.removeProduct(product.id)}>
              <font-awesome-icon color="red" icon="times" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.cart-drawer-product {
  text-align: left;
  margin-bottom: 24px;
  display: flex;

  &__title {
    margin: 0;
    padding: 0 0 12px;
  }

  &__tools {
    display: flex;
    align-items: center;
  }

  &__quantity {
    width: 50px;
    text-align: center;
  }

  &__button {
    display: inline-block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 28px;
    height: 28px;
  }

  &__image {
    height: 70px;
    width: 100px;
    object-fit: contain;
    margin-right: 24px;
  }
}
</style>
