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
  <!-- 基本computed属性 -->
  <BasicComputed></BasicComputed>
  <!-- watch 全家桶 -->
  <WatchFamily></WatchFamily>
  <!-- shallowRef -->
  <ShallowRefT></ShallowRefT>
  <!-- provide & inject -->
  <ProvideInject></ProvideInject>
  <!-- v-once -->
  <OnceT></OnceT>
  <!-- useToggle test-->
  <useToggle></useToggle>
  <!-- util test-->
  <UtilAsync></UtilAsync>
  <!-- counter test-->
  <CounterT></CounterT>
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
import BasicComputed from "./BasicComputed.vue";
import WatchFamily from "./WatchFamily.vue";
import ShallowRefT from "./ShallowRefT.vue";
import ProvideInject from "./ProvideInject.vue/index.vue";
import OnceT from "./OnceT.vue";
import useToggle from "./useToggle.vue";
import UtilAsync from "./UtilAsync.vue";
import CounterT from "./CounterT.vue";
import { defineComponent } from "vue";
defineComponent({
  NextTickT,
  TeleportT,
  LifeHooks,
  DynamicCss,
  RefFamily,
  PreventProp,
  ModelCapitalize,
  ValidateProp,
  BasicComputed,
  WatchFamily,
  ShallowRefT,
  ProvideInject,
  OnceT,
  useToggle,
  UtilAsync,
  CounterT
});
</script>
