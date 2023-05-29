<script setup>
// answer
import { ref, vModelText } from "vue";
const value = ref("");
vModelText.beforeUpdate = function (el, { value, modifiers }) {
  if (value && modifiers.capitalize) {
    el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1);
  }
};
</script>

<template>
  <input type="text" v-model.capitalize="value" />
</template>
