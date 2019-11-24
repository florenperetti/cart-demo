<script>
export default {
  name: 'CartProduct',
  functional: true,
  render (h, { props, listeners, scopedSlots }) {
    const { product } = props
    const imageSrc = require(`../../assets/products/${product.src}`)
    return (
      <tr>
        <td width="150" align="left">
          <img class="cart-product__image" alt={product.title} src={imageSrc} />
        </td>
        <td class="cart-product__title" align="left">
          {product.title}
          <button class="cart-product__remove-button" onClick={() => listeners.removeProduct(product.id)}>
            Remove
          </button>
        </td>
        <td>
          <div class="cart-product__tools">
            <button class="cart-product__button" onClick={() => listeners.decreaseProduct(product.id)}>
              -
            </button>
            <span class="cart-product__quantity">{product.quantity}</span>
            <button class="cart-product__button" onClick={() => listeners.increaseProduct(product.id)}>
              +
            </button>
          </div>
        </td>
        <td align="right">
          $ {product.price}
        </td>
      </tr>
    )
  }
}
</script>

<style lang="scss" scoped>
.cart-product {
  &__quantity {
    width: 50px;
    line-height: 28px;
    height: 28px;
    display: inline-block;
    text-align: center;
    background-color: #e0e0e0;
  }

  &__button {
    color: #242424;
    display: inline-block;
    background-color: #e0e0e0;
    border: none;
    cursor: pointer;
    width: 28px;
    height: 28px;
  }

  &__title {
    text-transform: uppercase;
  }

  &__tools {
    display: inline-flex;
    align-items:center;
  }

  &__remove-button {
    color: red;
    border: none;
    background-color: transparent;
    display: block;
    padding: 0;
    text-transform: uppercase;
    font-size: 12px;
  }

  &__image {
    width: 120px;
    height: 80px;
    object-fit: cover;
    display: block;
    margin: 24px 0;
  }
}

@media all and (max-width: 600px) {
  table tr td:first-child {
    display: none;
  }
  .cart-product__title {
    padding: 18px 0;
  }
}
</style>
