<template>
  <!-- 下次节点更新 -->
  <NextTickT></NextTickT>
  <!-- 传送门 -->
  <TeleportT></TeleportT>
  <!-- 生命周期钩子 -->
  <LifeHooks></LifeHooks>
  <!-- 动态css -->
  <DynamicCss></DynamicCss>
  <!-- ref全家桶 -->
  <RefFamily></RefFamily>
  <!-- 阻止冒泡 -->
  <PreventProp></PreventProp>
  <!-- v-model自定义修饰符 -->
  <ModelCapitalize></ModelCapitalize>
  <!-- Btn prop类型验证 -->
  <ValidateProp btn-type="success"></ValidateProp>

</template>
<script setup>
import NextTickT from "./NextTickT.vue";
import TeleportT from "./TeleportT.vue";
import LifeHooks from "./LifeHooks.vue/index.vue";
import DynamicCss from "./DynamicCss.vue";
import RefFamily from "./RefFamily.vue";
import PreventProp from "./PreventProp.vue";
import ModelCapitalize from "./ModelCapitalize.vue";
import ValidateProp from "./ValidateProp.vue";
import { defineComponent } from "vue";
defineComponent({
  NextTickT,
  TeleportT,
  LifeHooks,
  DynamicCss,
  RefFamily,
  PreventProp,
  ModelCapitalize,
  ValidateProp
});
</script>
