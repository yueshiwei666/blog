<template>
  <div id="app">
    <keep-alive :exclude="data">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: ["detail", "supermall_shop"],
    };
  },
};
</script>
<style>
/* 移入reset css的文件 */
@import url("assets/css/base.css");
</style>
