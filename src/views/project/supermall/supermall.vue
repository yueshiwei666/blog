<template>
  <div>
    <!-- 上面的tabbar -->
    <tabbar class="tabbar">
      <div slot="left" @click="$router.push('/home')">返回首页</div>
      <div slot="center">商城</div>
    </tabbar>
    <!-- 副本商品的分类的展示 -->
    <classify :shuzi="num" @number="number" v-show="show" :class="{ classifys: show }"></classify>
    <!-- 返回顶部的按钮 -->
    <backtop @backtop="backtop"></backtop>
    <scroll
      ref="scroll"
      @scroll="monitor"
      :pullUpLoad="true"
      class="scroll"
      @pullUpLoad="pullUpLoads"
    >
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="~@/assets/img/111.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="~@/assets/img/222.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="~@/assets/img/333.jpg" alt />
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
      <goodsInfo @img="img" :goods="goodss"></goodsInfo>
    </scroll>
    <!-- 最下面的tab -->
    <tab :num="1"></tab>
  </div>
</template>

<script>
import backtop from "./components/backtop";
import { goods } from "@/network/home.js";
import tab from "./components/tab";
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
        goods3: { page: 1, info: [] }
      },
      type: "goods1",
      show: false,
      num: 1,
      showw: true
    };
  },
  components: {
    tabbar,
    classify,
    scroll,
    goodsInfo,
    tab,
    backtop
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
    getgoods(type) {
      if (type == "/goods1") {
        let page = this.goods.goods1.page;
        goods(type, page).then(result => {
          this.goods.goods1.page += 1;
          /*  console.log(result); */
          this.goods.goods1.info.push(...result.data);
          this.showw = false;
          this.$refs.scroll.scroll.finishPullUp();
        });
      }
      if (type == "/goods2") {
        let page = this.goods.goods1.page;
        goods(type, page).then(result => {
          this.goods.goods2.page += 1;
          /*  console.log(result); */
          this.goods.goods2.info.push(...result.data);
          this.$refs.scroll.scroll.finishPullUp();
        });
      }
      if (type == "/goods3") {
        let page = this.goods.goods1.page;
        goods(type, page).then(result => {
          this.goods.goods3.page += 1;
          /*  console.log(result); */
          this.goods.goods3.info.push(...result.data);
          this.$refs.scroll.scroll.finishPullUp();
        });
      }
    },
    img() {
      this.$refs.scroll.refresh();
    },
    pullUpLoads() {
      this.$refs.scroll.scroll.finishPullUp();
      if (this.goods[this.type].page == 4) {
        return;
      }
      let page = this.goods[this.type].page;
      goods("/" + this.type, page).then(result => {
        this.goods[this.type].page += 1;
        this.goods[this.type].info.push(...result.data);
      });
    },
    monitor(a) {
      /*  console.log(a); */
      let aa = -a.y;
      if (aa >= 202) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    backtop() {
      this.$refs.scroll.basetop(0, 0);
    }
  },
  computed: {
    goodss() {
      /* console.log(this.goods[this.type].info); */
      return this.goods[this.type].info;
    }
  },
  created() {
    //goods数据获取
    this.getgoods("/goods1");
    this.getgoods("/goods2");
    this.getgoods("/goods3");
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }
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
  height: 86vh;
  /* border: 2px solid red; */
}
.tabbar {
  background: pink;
}
.classifys {
  top: 40px;
  display: block;
  display: flex;
  position: fixed;
  z-index: 2;
  background: white;
}
</style>
