<script setup lang="ts">
import {MyButton} from "./MyButton.js"
const onClick = () => {
  console.log('onClick')
}
</script>
<template>
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>
