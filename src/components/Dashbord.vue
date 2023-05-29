<template>
  <NextTickT></NextTickT>
  <TeleportT></TeleportT>
  <LifeHooks></LifeHooks>
  <DynamicCss></DynamicCss>
  <RefFamily></RefFamily>
  <PreventProp></PreventProp>
  <ModelCapitalize></ModelCapitalize>
</template>
<script setup>
import NextTickT from "./NextTickT.vue";
import TeleportT from "./TeleportT.vue";
import LifeHooks from "./LifeHooks.vue/index.vue";
import DynamicCss from "./DynamicCss.vue";
import RefFamily from "./RefFamily.vue";
import PreventProp from "./PreventProp.vue";
import ModelCapitalize from "./ModelCapitalize.vue";
import { defineComponent } from "vue";
defineComponent({
  NextTickT,
  TeleportT,
  LifeHooks,
  DynamicCss,
  RefFamily,
  PreventProp,
  ModelCapitalize
});
</script>
