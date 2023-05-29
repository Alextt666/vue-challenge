<script setup>
import { ref } from "vue";

const countonce = ref(0);

setInterval(() => {
    countonce.value++;
}, 1000);
</script>

<template>
  <span v-once>它从不更新: {{ countonce }}</span>
</template>
