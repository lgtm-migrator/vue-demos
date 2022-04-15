<script setup lang="ts">
const size = window.innerHeight * 0.50
const stroke = 20
let percentage = $ref(100)
let seconds = $ref(10)
let timer: NodeJS.Timer

const radius = $computed(() => size / 2 - stroke / 2)
const circleOffset = $computed(() => size / 2)
const circumference = $computed(() => 2 * Math.PI * radius)
const progress = $computed(() => circumference - circumference * percentage / 100)
const countdown = $computed(() => Math.floor(seconds * percentage / 100))

function animation() {
  timer = setInterval(() => {
    percentage -= 1 / 10

    if (percentage <= 0)
      percentage = 100
  }, seconds * 1000 / 1000)
}

onMounted(() => {
  animation()
})

function reset() {
  clearInterval(timer)
  percentage = 100
  animation()
}

enum Opteration {
  Add,
  Sub,
}

function setSeconds(op: Opteration) {
  if (op === Opteration.Add)
    seconds += 1
  else
    seconds -= 1

  if (seconds <= 0 || seconds > 99) {
    // eslint-disable-next-line no-alert
    alert('超出范围: [1, 99]')
    seconds = 10
  }
  reset()
}

</script>

<template>
  <div flex="~" flex-col items-center justify-center space-y-5>
    <div flex flex-row items-center justify-center space-x-5>
      <h3 font-bold text-xl>
        当前时间: {{ seconds }} 秒钟
      </h3>
      <div flex flex-col space-y-2>
        <button btn @click="setSeconds(Opteration.Add)">
          +1秒
        </button>
        <button btn @click="setSeconds(Opteration.Sub)">
          -1秒
        </button>
      </div>
    </div>
    <div inline-block relative>
      <svg :width="size" :height="size">
        <circle
          fill="transparent"
          :stroke-width="stroke"
          stroke="#AFB0E4"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"
        />
        <circle
          class="circle"
          fill="transparent"
          :stroke-width="stroke"
          stroke="#9F6FC8"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progress"
          stroke-linecap="round"
        />
      </svg>
      <span :style="{fontSize: 0.5 * size+'px'}">{{ countdown }}</span>
    </div>
    <button btn z-10 @click="reset()">
      reset
    </button>
  </div>
</template>

<style>
.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  font-weight: bold;
  transform: translateX(-50%) translateY(-50%);
  font-family: 'Courier New', Courier, monospace;
  color: #A084D2;
}
</style>
