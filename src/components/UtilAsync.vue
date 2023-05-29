<script setup lang="ts">
import { ref, watch } from "vue";

const count = ref(0);

/**
 * 实现`until`函数
 */

function until(initial) {
  function toBe(value) {
    return new Promise((resolve, reject) => {
      watch(initial, (newValue, oldValue) => {
        if (newValue == value) {
          resolve(true);
        }
      });
    });
  }

  return {
    toBe,
  };
}

async function increase() {
  count.value = 0;
  setInterval(() => {
    count.value++;
  }, 1000);
  await until(count).toBe(3);
  console.log(count.value === 3, "increase"); // 确保输出为true
}

increase();
</script>
<template></template>
