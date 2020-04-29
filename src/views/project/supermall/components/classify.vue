<template>
  <div class="classify">
    <div :class="{ text: shuzi == 1 }" @click="numbers('1')">商品1</div>
    <div :class="{ text: shuzi == 2 }" @click="numbers('2')">商品2</div>
    <div :class="{ text: shuzi == 3 }" @click="numbers('3')">商品3</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["商品1", "商品2", "商品3"],
    };
  },
  props: {
    shuzi: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  methods: {
    numbers(a) {
      this.$emit("number", a);
    },
  },
  computed: {
    mm() {
      return this.number;
    },
  },
};
</script>

<style scoped lang="less">
.text {
  color: rgb(2, 247, 141);
}
.classify {
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: 1px solid red;
  display: flex;
  div {
    flex: 1;
    text-align: center;
    line-height: 40px;
  }
}
</style>
