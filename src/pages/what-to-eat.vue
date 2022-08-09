<script setup lang="ts">
import { getRandomInt } from '~/composables/utils'
import Foods from '~/composables/foods.json'

const BASE_URL = import.meta.env.BASE_URL
let food = $ref('什么')
let isStarted = $ref(false)
const description = $computed(() => food + (food === '什么' ? '?' : '!'))
async function onClick() {
  isStarted = true
  for (let _ = 0; _ < 10; _++) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const idx = getRandomInt(0, Foods.length)
    food = Foods[idx]
  }
  isStarted = false
}
</script>

<template>
  <div
    p-5 space-y-2
    flex="~"
    flex-col items-center justify-center
  >
    <div
      font-mono text-2xl font-bold
      flex flex-row
    >
      今天吃
      <p text-indigo-600>
        {{ description }}
      </p>
    </div>
    <img
      v-if="food !== '什么' && !isStarted"
      w-100
      :src="`${BASE_URL}/foods/${food}.jpg`"
    >
    <button v-if="!isStarted" btn @click="onClick()">
      开始
    </button>
  </div>
</template>
