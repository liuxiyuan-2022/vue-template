<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const scrollContainer: Ref<HTMLElement | null> = ref(null);

watch(router.currentRoute, (_to, _from) => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0;
  }
});
</script>

<template>
  <!-- <main class="w-full h-screen flex justify-center items-center">
    
  </main> -->
  <div
    ref="scrollContainer"
    class="h-screen bg-base-200 overflow-y-auto overflow-x-clip">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
