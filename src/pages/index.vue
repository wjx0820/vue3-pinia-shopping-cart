<script setup lang="ts">
import { useStore } from '~/store'

const store = useStore()
</script>

<template>
  <div class="container max-w-4xl mx-auto">
    <div class="flex justify-around py-4 shadow-lg rounded-xl">
      <div class="text-5xl self-center font-bold">
        买个菠萝
      </div>
      <div class="flex space-x-14">
        <div class="relative">
          <div class="i-twemoji-pineapple text-5xl inline-block" />
          <Badge class="bg-teal-600/10 text-teal-600 absolute -top-4 left-12 w-8 h-8">
            <span>{{ store.availablePinias }}</span>
          </Badge>
        </div>
        <div class="relative">
          <div class="i-twemoji-shopping-cart text-5xl inline-block" />
          <Badge class="bg-teal-600/10 text-teal-600 absolute -top-4 left-12 w-8 h-8">
            <span>{{ store.cart }}</span>
          </Badge>
        </div>
        <div class="relative">
          <div class="i-twemoji-wrapped-gift text-5xl inline-block" />
          <Badge class="bg-teal-600/10 text-teal-600 absolute -top-4 left-12 w-8 h-8">
            <span>{{ store.$state.purchased }}</span>
          </Badge>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <PiniaMarket />
      <PiniaCart />
      <PiniaCheckout />
    </div>
    <div class="shadow-lg rounded p-4 rounded-xl">
      <header class="mb-8">
        <span class="text-2xl text-blue-400 mr-8 inline-flex p-4 rounded-full shadow-lg">
          <div class="i-twemoji-wrapped-gift inline-block" />
        </span>
        <span class="text-2xl font-bold">已购买</span>
      </header>

      <div class="mt-auto flex items-center justify-center">
        <div class="i-twemoji-pineapple text-2xl inline-block" />
        <Badge class="bg-teal-600/10 text-teal-600">
          x {{ store.$state.purchased }}
        </Badge>
      </div>
    </div>
  </div>
</template>
