<script setup lang="ts">
import { shallowRef, watch, triggerRef } from "vue";

const state = shallowRef({ count: 1 });

// 回调没被触发
watch(
  state,
  () => {
    console.log("State.count Updated");
  },
  { deep: true }
);

/**
 * 修改以下代码使watch回调被触发
 *
 */
state.value.count = 2;
// 写法一： 强制触发 triggerRef
// triggerRef(state);
// 写法二： value层变更
state.value = { count:2}; 
</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>
