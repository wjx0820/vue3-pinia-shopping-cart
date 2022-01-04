<script setup lang="ts">
import { useStore } from '~/store'

const store = useStore()
</script>

<template>
  <div class="shadow-lg rounded p-4 rounded-xl flex flex-col">
    <header class="mb-8">
      <span class="text-2xl text-blue-400 mr-8 inline-flex p-4 rounded-full shadow-lg">
        <div i-twemoji-dollar-banknote inline-block />
      </span>
      <span class="text-2xl font-bold">结账</span>
    </header>
    <div class="mt-auto flex items-center justify-around">
      <div class="i-twemoji-pineapple text-2xl inline-block " />
      <span>单价￥{{ store.$state.price }}</span>
      <Badge class="bg-teal-600/10 text-teal-600">
        x {{ store.cart }}
      </Badge>
    </div>
    <footer class="mt-auto flex items-center justify-evenly">
      <span>总计: ￥{{ store.total }}</span>
      <button class="btn flex" @click="store.checkout">
        结算
      </button>
    </footer>
  </div>
</template>
