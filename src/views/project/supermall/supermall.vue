<template>
  <div>
    <!-- 上面的tabbar -->
    <tabbar class="tabbar">
      <div slot="left" @click="$router.push('/home')">返回</div>
      <div slot="center">商城</div>
    </tabbar>
    <scroll ref="scroll" :pullUpLoad="true" class="scroll">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="http://127.0.0.1:3000/public/01.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="http://127.0.0.1:3000/public/02.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="http://127.0.0.1:3000/public/03.jpg" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>

      <!-- 商品的分类的展示 -->
      <classify :shuzi="num" @number="number"></classify>
      <!-- 展示商品的数据 -->
      <!-- <goodsInfo @img="img" :goods="goodss"></goodsInfo> -->
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
      <h1>1111111111111</h1>
    </scroll>
  </div>
</template>

<script>
import tabbar from "components/tabbar.vue";
import Swiper from "./components/swiper.js";
import scroll from "components/BetterScroll";
import classify from "./components/classify";
import goodsInfo from "./components/goods";
import { log } from "util";
export default {
  data() {
    return {
      qqq: false,
      swiper: [],
      goods: {
        goods1: { page: 1, info: [] },
        goods2: { page: 1, info: [] },
        goods3: { page: 1, info: [] },
      },
      type: "goods1",
      show: false,
      num: 1,
      showw: true,
    };
  },
  components: {
    tabbar,
    classify,
    scroll,
    goodsInfo,
  },
  methods: {
    number(a) {
      console.log(a);
      if (a == 1) {
        this.type = "goods1";
        this.num = 1;
      }
      if (a == 2) {
        this.type = "goods2";
        this.num = 2;
      }
      if (a == 3) {
        this.type = "goods3";
        this.num = 3;
      }
    },
  },
  computed: {
    goodss() {
      return this.goods[this.type].info;
    },
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style scoped lang="less">
@import "./components/swiper.css";
.swiper-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
.scroll {
  height: 60vh;
  border: 2px solid red;
}
.tabbar {
  background: pink;
}
</style>
