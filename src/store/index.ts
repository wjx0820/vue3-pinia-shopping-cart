import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'market',
  state: () => ({
    product: 42,
    cart: 0,
    price: 10,
    purchased: 0,
  }),
  getters: {
    availablePinias(state) {
      return state.product - state.cart
    },
    total(state) {
      return state.cart * state.price
    },
  },
  actions: {
    addToCart(amount: number) {
      this.cart += amount
    },
    removeFromCart(amount: number) {
      if (amount > this.cart)
        this.cart = 0

      else
        this.cart -= amount
    },
    checkout() {
      this.product -= this.cart
      this.purchased += this.cart
      this.cart = 0
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
