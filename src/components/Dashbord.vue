<template>
  <NextTickT></NextTickT>
  <TeleportT></TeleportT>
  <LifeHooks></LifeHooks>
  <DynamicCss></DynamicCss>
  <RefFamily></RefFamily>
</template>
<script setup>
import NextTickT from "./NextTickT.vue";
import TeleportT from "./TeleportT.vue";
import LifeHooks from "./LifeHooks.vue/index.vue";
import DynamicCss from "./DynamicCss.vue";
import RefFamily from "./RefFamily.vue";
import { defineComponent } from "vue";
defineComponent({
  NextTickT,
  TeleportT,
  LifeHooks,
  DynamicCss,
  RefFamily,
});
</script>
