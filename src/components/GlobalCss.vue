<template>
  <p>Hello Vue.js</p>
</template>

<style scoped>
p {
  font-size: 20px;
  color: red;
  text-align: center;
  line-height: 50px;
}

/* 使其工作 */
/* 添加global, 脱离scoped 进入全局 */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
