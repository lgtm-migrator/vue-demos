<script setup lang="ts">
const BASE_URL = import.meta.env.BASE_URL
const projects = [
  {
    name: 'what-to-eat',
    url: `${BASE_URL}what-to-eat`,
  },
  {
    name: 'tree',
    url: `${BASE_URL}tree`,
  },
  {
    name: 'countdown',
    url: `${BASE_URL}countdown`,
  },
]
</script>

<template>
  <DemoLists :projects="projects" />
</template>
