<script setup lang="ts">
import { capitalize } from 'vue'
import { isDark, toggleDark } from '~/composables'
const path = window.location.pathname
const subTitle = capitalize(path.slice(11))
useTitle(`${subTitle}${subTitle === '' ? '' : ' | '}Vue Demos`)
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>

    <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/fffzlfk/vue-demos"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
