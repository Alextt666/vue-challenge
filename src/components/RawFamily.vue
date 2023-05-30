<script setup lang="ts">
import { reactive, isReactive, toRaw } from "vue";

const state = { count: 1 };
const reactiveState = reactive(state);

/**
 * 修改以下代码使输出为true
 */
console.log(toRaw(reactiveState) === state);

/**
 * 修改以下代码使输出为false
 */
const info = { count: 1 };
const reactiveInfo = reactive(info);

console.log('去除响应式',isReactive(toRaw(reactiveInfo)));
console.log('原对象',isReactive(reactiveInfo));

</script>

<template>
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>
