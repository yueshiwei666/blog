<template>
  <div class="tabbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="less">
.tabbar {
  /*   background: pink; */

  width: 100%;
  height: 41px;
  display: flex;
  position: relative;
  line-height: 41px;
  z-index: 2;
  .left {
    flex-grow: 1;
    position: relative;
    left: 0px;
  }
  .left:hover {
    cursor: pointer;
  }
  .center {
    flex-grow: 3;
    text-align: center;
  }
  .center:hover {
    cursor: pointer;
  }
  .right {
    flex-grow: 1;
    text-align: right;
  }
  .right:hover {
    cursor: pointer;
  }
}
</style>
