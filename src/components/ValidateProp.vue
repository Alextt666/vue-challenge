<template>
  <button>Button</button>
</template>
<script setup>
defineProps({
  btnType: {
    type: String,
    default: "default",
    validator(btnType) {
      return ["success", "warning", "danger"].includes(btnType);
    },
  },
});
</script>
