<script setup lang="ts">
interface Project {
  name: string
  url: string
}
defineProps<{ projects: Project[] }>()
</script>

<template>
  <template v-for="project in projects" :key="project">
    <a :href="project.url">
      <h1 class="mt-10 text-xl font-bold">
        {{ project.name }}
      </h1>
    </a>
  </template>
</template>
