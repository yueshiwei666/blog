<template>
  <div>
    <tabbar class="tabbars">
      <img src="~@/assets/img/back.svg" @click="back" slot="left" />
      <strong slot="center">详情页</strong>
    </tabbar>
    <div class="detail">
      <img :src="fact.img" alt />
    </div>
    <div class="info">
      <h3>价格:</h3>
      <span>{{ fact.price }}元</span>
      <p>
        <strong>描述:</strong>
        {{ fact.description }}
      </p>
    </div>

    <div v-show="show" ref="ref" class="div">{{ success }}</div>
    <shopbar @addshop="addshop"></shopbar>
  </div>
</template>

<script>
import shopbar from "./shopbar";
import { goods } from "@/network/home.js";
import tabbar from "components/tabbar.vue";
export default {
  name: "detail",
  data() {
    return {
      detail: "",
      arr: [],
      fact: {},
      show: false,
      aaa: false,
    };
  },
  components: {
    shopbar,
    tabbar,
  },
  created() {
    this.detail = this.$route.params.id;
    this.goodss();
  },
  methods: {
    goodss() {
      Promise.all([
        new Promise((result, reject) => {
          goods("/goods1", 1).then((results) => {
            result(results.data);
          });
        }),
        new Promise((result, reject) => {
          goods("/goods1", 2).then((results) => {
            result(results.data);
          });
        }),
        new Promise((result, reject) => {
          goods("/goods1", 3).then((results) => {
            result(results.data);
          });
        }),
      ]).then((a) => {
        this.arr.push(...a[0]);
        this.arr.push(...a[1]);
        this.arr.push(...a[2]);
        this.arr.forEach((item) => {
          if (item.id == this.detail) {
            this.fact = item;
          }
        });
      });
    },
    addshop() {},
    back() {
      this.$router.back();
    },
  },
  computed: {
    success() {
      return this.show ? "收藏成功" : "取消";
    },
  },
};
</script>

<style scoped>
.details .aaa {
  font-size: 10px;
  line-height: 40px;
  text-align: center;
  width: 90px;
  height: 40px;
  border: 1px solid red;
  background: pink;
  position: absolute;
  margin: -200px auto;
  left: 50%;
  transform: translate(-50%);
  animation: aaaa 1s;
  opacity: 0;
}
.details .div {
  line-height: 40px;
  text-align: center;
  width: 90px;
  height: 40px;
  border: 1px solid red;
  background: pink;
  position: absolute;
  margin: -200px auto;
  left: 50%;
  transform: translate(-50%);
  animation: aaa 1s;
  opacity: 0;
}
@keyframes aaa {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes aaaa {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.details .info {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  top: 100px;
}
.details .info h3 {
  float: left;
}
.details .info span {
  position: relative;
  float: left;
  top: 17px;
  color: red;
  font-size: 20px;
}
.details .info p {
  margin: 0;
  padding: 0;
  clear: both;
}
.detail {
  position: relative;
  top: 40px;
  background: rgb(235, 231, 235);
}
.detail img {
  top: 0px;
  display: block;
  margin: 0px auto;
  position: relative;
  width: 60%;
  height: 300px;
}
.tabbars {
  top: 0px;
  position: fixed;
  z-index: 20;
  height: 40px;
}
</style>
