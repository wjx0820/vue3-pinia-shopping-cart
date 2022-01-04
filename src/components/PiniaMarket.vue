<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '~/store'

const amount = ref(0)

const store = useStore()
</script>

<template>
  <div class="shadow-lg rounded p-4 rounded-xl h-500px flex flex-col">
    <header class="mb-8">
      <span class="text-2xl text-blue-400 mr-8 inline-flex p-4 rounded-full shadow-lg">
        <div class="i-twemoji-convenience-store inline-block" />
      </span>
      <span class="text-2xl font-bold">库存</span>
    </header>
    <div class="w-full grid grid-cols-6 gap-4 mb-8">
      <div v-for="item in store.availablePinias" :key="item" class="i-twemoji-pineapple text-2xl inline-block" />
    </div>
    <footer class="mt-auto flex justify-evenly">
      <input
        id="input"
        v-model="amount"
        type="number"
        min="0"
        :max="store.availablePinias"
        class="bg-transparent border mr-4 w-15 text-center outline-none"
        @keydown.enter="store.addToCart(amount)"
      >
      <button class="btn btn-blue flex" @click="store.addToCart(amount)">
        添加
      </button>
    </footer>
  </div>
</template>
