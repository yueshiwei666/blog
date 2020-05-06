<template>
  <div>
    <tabbar class="tabbar">
      <div slot="center">购物车({{ factlength }})</div>
    </tabbar>
    <div v-show="show" class="center">
      <h3>购物车居然是空的</h3>
      <p>记得在忙也要去买点东西</p>
      <p>加入购物车</p>
    </div>
    <betterscroll :pullUpLoad="true" class="scroll">
      <div class="item" v-for="(value, index) in factq" :key="index">
        <div class="div1">
          <img
            @click="click(value)"
            :class="{ back: value.bool }"
            src="~@/assets/img/shop.svg"
            alt
          />
        </div>
        <div class="div2">
          <img :src="value.img" alt />
        </div>
        <div class="div3">
          描述:
          <strong>{{ value.description }}</strong>
          <p>
            <strong style="color:red;">{{ value.price }}元</strong>
          </p>
        </div>
        <div class="div4">×{{ value.number }}</div>
      </div>
    </betterscroll>
    <buy></buy>
    <tab :num="2"></tab>
  </div>
</template>

<script>
import buy from "./buy";
import betterscroll from "components/BetterScroll.vue";
import tabbar from "components/tabbar.vue";
import tab from "../components/tab";
import { log } from "util";
import { loadavg } from "os";
export default {
  name: "supermall_shop",
  data() {
    return {
      show: true,
    };
  },
  components: {
    tab,
    tabbar,
    betterscroll,
    buy,
  },
  methods: {
    click(a) {
      /* a.bool = !a.bool; */
      console.log(a.bool);
      this.$store.commit("change", a);
    },
  },
  destroyed() {
    /* console.log("销毁"); */
  },
  computed: {
    factq() {
      /* console.log("factq变化了"); */
      if (this.$store.state.fact.length != 0) {
        this.show = false;
      }
      /* return this.$store.getters.factq; */
      return this.$store.state.fact;
    },
    factlength() {
      return this.$store.state.fact.length;
    },
  },
};
</script>

<style scoped lang="less">
.back {
  background: red;
}
.center {
  width: 100%;
  text-align: center;
}
.scroll {
  height: 85vh;
  .item {
    cursor: pointer;
    margin: 10px auto;
    width: 100%;
    height: 120px;
    /* border: 1px solid red; */
    display: flex;

    .div1 {
      flex: 1;
      text-align: center;
      position: relative;
      top: 30%;
      img {
        border-radius: 50%;
        border: 2px solid red;
      }
    }
    .div2 {
      flex: 2;
      img {
        width: 100px;
        height: 120px;
      }
    }
    .div3 {
      flex: 2;
    }
    .div4 {
      flex: 1;
      font-weight: bold;
      text-align: center;
      position: relative;
      top: 30%;
    }
  }
}
.tabbar {
  background: pink;
  font-weight: bold;
}
</style>
