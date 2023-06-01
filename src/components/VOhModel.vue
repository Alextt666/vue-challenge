<script setup lang='ts'>

import { onUnmounted, ref, watchEffect } from "vue"

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
*/
const VOhModel = {
    mounted (el,binding) {
        el.value = binding.value;
        el.onChange = (event)=>{
            value.value = event.target.value;
        }
        el.addEventListener('input',el.onChange);
    },
    unmounted(el){
        el.removeEventListener('input', el.onChange)
    }
}

const value = ref("Hello Vu.js")

</script>

<template>
  <input v-oh-model="value" type="text" />
</template>

