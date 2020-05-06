<template>
  <div class="tab">
    <div
      :class="{ active: index == active }"
      class="div div1"
      @click="click(index)"
      v-for="(value, index) in arr"
      :key="index"
    >
      <slot :name="name(index)">{{ value }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    arr: {
      type: Array,
      default: [],
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    name(a) {
      if (a == 0) {
        return "div1";
      } else if (a == 1) {
        return "div2";
      } else if (a == 2) {
        return "div3";
      } else if (a == 3) {
        return "div4";
      }
    },
    click(a) {
      /* console.log(a); */
      this.$emit("tabbarclick", a);
    },
  },
  computed: {},
};
</script>

<style scoped lang="less">
.active {
  color: red;
}
.tab {
  border-top: 1px solid rgb(197, 194, 194);
  width: 100%;
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  font-size: 14px;
  .div {
    flex: 1;
    text-align: center;
    line-height: 40px;
    background: rgb(220, 216, 216);
    cursor: pointer;
  }
}
</style>
