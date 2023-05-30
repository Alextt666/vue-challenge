<template>
  <!-- 添加按键修饰符让即使 Alt 或 Shift 被一同按下时也会触发 -->
  <button @click.ctrl="onClick1">A</button>

  <!-- 添加按键修饰符让有且只有 Shift 被按下的时候才触发 -->
  <button @click.shift.exact="onCtrlClick">A</button>

  <!-- 添加按键修饰符让没有任何系统修饰符被按下的时候才触发 -->
  <button @click.exact="onClick2">A</button>

  <!-- 相关文档地址链接 -->
  <!-- https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers -->
</template>
<script>
export default {
  setup() {
    const onClick1 = () => {
      console.log("ctrl");
    };
    const onCtrlClick = () => {
      console.log("shift only");
    };
    const onClick2 = () => {
      console.log("nothing ");
    };
    return { onClick1, onClick2, onCtrlClick };
  },
};
</script>
