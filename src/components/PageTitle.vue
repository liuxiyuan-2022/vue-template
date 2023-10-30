<script setup lang="ts">
const { title } = defineProps<{
  title: string;
}>();
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped></style>
