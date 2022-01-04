<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '~/store'
const amount = ref(0)
const store = useStore()
</script>

<template>
  <div class="shadow-lg rounded p-4 rounded-xl flex flex-col">
    <header class="mb-8">
      <span class="text-2xl text-blue-400 mr-8 inline-flex p-4 rounded-full shadow-lg">
        <div class="i-twemoji-shopping-cart inline-block" />
      </span>
      <span class="text-2xl font-bold">购物车</span>
    </header>
    <div class="w-full grid grid-cols-6 gap-4 mb-8">
      <div v-for="item in store.cart" :key="item" class="i-twemoji-pineapple text-2xl inline-block" />
    </div>
    <footer class="mt-auto flex justify-evenly">
      <input
        id="input"
        v-model="amount"
        type="number"
        min="0"
        :max="store.cart"
        class="bg-transparent border mr-4 w-15 text-center outline-none"
        @keydown.enter="store.removeFromCart(amount),amount = 0"
      >
      <button class="btn flex" @click="store.removeFromCart(amount),amount = 0">
        删除
      </button>
    </footer>
  </div>
</template>
