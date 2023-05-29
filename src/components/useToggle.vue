<template>
  <div>
    <p>State: {{ state ? "ON" : "OFF" }}</p>
    <p @click="toggle">Toggle state</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
/**
 * 实现一个切换状态的可组合函数
 * 确保该功能正常工作
 */
function useToggle(type) {
  let state = ref(type);
  function toggle() {
    state.value = !state.value;
  }
  return [state,toggle];
}

const [state, toggle] = useToggle(false);
</script>
