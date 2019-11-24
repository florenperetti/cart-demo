<script>
export default {
  functional: true,
  render (h, context) {
    const logoSrc = require('../assets/logo.png')
    return (
      <div class="nav">
        <img class="nav__logo" alt="CartDemo Logo" src={logoSrc}/>
        <router-link to="/">Products</router-link>
        <button class="nav__cart-button" onClick={context.listeners.cartClick}>
          <font-awesome-icon icon="shopping-cart" />
          {context.scopedSlots.cartIcon && context.scopedSlots.cartIcon()}
        </button>
      </div>
    )
  }
}
</script>

<style lang="scss">
.nav {
  background-color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;

  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: #2c3e50;

    &.router-link-exact-active {
      color: blue;
    }
  }

  &__logo {
    display: block;
    height: 80px;
    position: absolute;
    left: 32px;
  }

  &__cart-button {
    color: #242424;
    margin-left: 16px;
    display: flex;
    align-items: center;
    padding-left: 9px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    transition: all .2s ease-in-out;
    width: 42px;
    height: 42px;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  &__cart-button-dot {
    font-size: 10px;
    position: absolute;
    top: 10px;
    right: 6px;
    pointer-events: none;
  }
}

@media all and (max-width: 500px) {
  .nav__cart-button {
    position: absolute;
    right: 12px;
  }
  .nav__logo {
    height: 40px;
    left: 12px;
  }
}
</style>
