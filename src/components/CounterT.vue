<template>
  <div>{{ count }}</div>
  <button @click="inc">inc</button>
  <button @click="dec">dec</button>
  <button @click="reset">reset</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface UseCounterOptions {
  min?: number;
  max?: number;
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置
 * 4. 最小值 & 最大值 选项支持
 */
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const count = ref(initialValue);
  const { min = -Infinity, max = Infinity } = options;
  return {
    count,
    inc: () => (count.value = Math.min(max, count.value + 1)),
    dec: () => (count.value = Math.max(min, count.value - 1)),
    reset: () => (count.value = isFinite(min) ? min : initialValue),
  };
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 });
</script>
