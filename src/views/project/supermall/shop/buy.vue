<template>
  <div class="div">
    <div>
      <span>
        <!-- <img :class="{'activee':all}" src="~assets/shop.svg" alt /> -->
      </span>
      全选
      <img
        :class="{ back: allcheck }"
        class="i"
        src="~@/assets/img/shop.svg"
        alt
        @click="click"
      />
    </div>
    <div>合计：{{ heji }}</div>
    <div>去计算</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "",
    };
  },
  computed: {
    allcheck() {
      return this.$store.getters.allcheck;
    },
    heji() {
      return this.$store.getters.heji;
    },
  },
  methods: {
    click() {
      return this.$store.commit("all");
    },
  },
};
</script>

<style scoped>
.back {
  background: red;
}
.div {
  z-index: 3;
  bottom: 40px;
  position: fixed;
  background: rgb(231, 223, 219);
  width: 100%;
  display: flex;
}
.div > div:nth-child(1) {
  display: flex;
}
.div > div:nth-child(1) img {
  position: relative;
  top: 2px;
  border: 1px solid black;
  border-radius: 10px;
}
.div > div:nth-child(1) .i {
  display: block;
  width: 20px;
  height: 20px;
  border: 3px solid red;
  border-radius: 50%;
}
.div > div:nth-child(1) {
  flex: 1;
  width: 200px;

  position: relative;
}
.div > div:nth-child(2) {
  flex: 1;
  width: 300px;
}
.div > div:nth-child(3) {
  background: rgb(235, 108, 35);
  flex: 1;

  text-align: center;
  font-weight: 700;
  color: white;
  line-height: 30px;
}
.activee {
  background-color: red;
}
</style>
