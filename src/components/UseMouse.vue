<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
// Implement ...
function useEventListener(target, event, callback) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}

// Implement ...
function useMouse() {
  const x = ref(0);
  const y = ref(0);
  useEventListener(window, "mousemove", (el) => {
    x.value = el.clientX;
    y.value = el.clientY;
  });
  return { x, y };
}
const { x, y } = useMouse();
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
