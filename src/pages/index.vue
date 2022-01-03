<script setup lang="ts">
import { useStore } from '~/store'

const store = useStore()
</script>

<template>
  <div class="container max-w-4xl mx-auto mt-60">
    <div class="flex justify-around py-4 shadow-md rounded-xl">
      <div class="text-5xl self-center font-bold">
        买个菠萝
      </div>
      <div class="flex space-x-14">
        <div class="relative">
          <div class="i-twemoji-pineapple text-5xl inline-block" />
          <div
            class="absolute -top-4 left-12 w-8 h-8 text-2xl font-bold px-1 py-1 rounded-full bg-gray-800/10 text-gray-900"
          >
            {{ store.availablePinias }}
          </div>
        </div>
        <div class="relative">
          <div class="i-twemoji-shopping-cart text-5xl inline-block" />
          <div
            class="absolute -top-4 left-12 w-8 h-8 text-2xl font-bold p-1 self-center rounded-full bg-gray-800/10 text-gray-900"
          >
            {{ store.cart }}
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <PiniaMarket />
      <PiniaCart />
      <PiniaCheckout />
    </div>
  </div>
</template>
