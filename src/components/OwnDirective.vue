<script setup lang="ts">
import { ref } from "vue";

const state = ref(false);

/**
 * 实现一个自定义指令,让元素获取焦点
 * 确保当切换`state`时,元素随着状态值获取/失去焦点
 *
 */
// setup 函数中 可以直接使用 VXXXX来描述
// 非setup函数中，需要使用directive 进行注册
// setup() {
//     /*...*/
//   },
//   directives: {
//     // 在模板中启用 v-focus
//     focus: {
//       /* ... */
//     }
//   }
const VFocus = {
  mounted: (el) => {
    el.focus();
  },
  updated(el, binding) {
    binding.value ? el.focus() : el.blur();
  },
};

setInterval(() => {
  state.value = !state.value;
}, 2000);
</script>

<template>
  <input v-focus="state" type="text" />
</template>
