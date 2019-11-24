<template>
  <table>
    <thead>
      <tr>
        <th style="width:25%"></th>
        <th style="width:45%"></th>
        <th style="width:15%">Quantity</th>
        <th style="width:15%" align="right">Total</th>
      </tr>
    </thead>
    <tbody>
      <CartProduct
        :key="product.id"
        v-for="product in products"
        :product="product"
        @decreaseProduct="decreaseProduct"
        @increaseProduct="addProductToCart"
        @removeProduct="removeProduct"
      />
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td></td>
        <td>Subtotal</td>
        <td align="right">$ {{cartTotal}}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import CartProduct from './CartProduct'
import { cartMixin } from '../mixins/cartMixin'

export default {
  name: 'CartTable',
  components: {
    CartProduct
  },
  mixins: [cartMixin]
}
</script>

<style lang="scss" scoped>
$border: 1px solid #363636;

table {
  width: 100%;
  border-collapse: collapse;
}
tbody {
  border-bottom: $border;
  border-top: $border;
}

@media all and (max-width: 600px) {
  table tr th:first-child,
  table tr td:first-child {
    display: none;
  }
}
</style>
