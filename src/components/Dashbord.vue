<template>
  <NextTickT></NextTickT>
  <TeleportT></TeleportT>
  <LifeHooks></LifeHooks>
</template>
<script setup>
import NextTickT from "./NextTickT.vue";
import TeleportT from "./TeleportT.vue";
import LifeHooks from "./LifeHooks.vue/index.vue";
import { defineComponent } from "vue";
defineComponent({
  NextTickT,
  TeleportT,
  LifeHooks,
});
</script>
