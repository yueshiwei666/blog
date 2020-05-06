<template>
  <div class="home">
    <!-- 开始动画 -->
    <animation />
    <!--tabbar -->
    <tabbar></tabbar>
    <!-- 轮播图组件 -->
    <div class="content box">
      <div class="top">
        <swiper class="swiper"></swiper>
        <div class="center">
          <img src="~@/assets/img/h1.jpg" alt />
          <img src="~@/assets/img/h1.jpg" alt />
        </div>
        <div class="right">
          <h3 class="h3">我的名片</h3>
          <p>网名:HelloWorld|你好我好大家好</p>
          <p>职业:无业游民</p>
          <p>现居:河北省</p>
          <p>Email:1467658005@qq.com</p>
          <img class="qq" v-show="qqs" src="~@/assets/img/qqs.png" alt />
          <img
            class="weixin"
            v-show="weis"
            src="~@/assets/img/weixins.png"
            alt
          />
          <div class="icon">
            <img src="~@/assets/img/home.png" title="首页" alt="1111" />
            <img src="~@/assets/img/电子邮件.png" title="邮件" alt="2" />
            <img
              src="~@/assets/img/qq.png"
              @mouseover="qq"
              @mouseleave="qqss"
              title="QQ"
              alt
            />
            <img
              src="~@/assets/img/微信.png"
              @mouseover="wei"
              @mouseleave="weiss"
              title="微信"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 项目接口的展示 -->
    <contents></contents>
  </div>
</template>

<script>
import animation from "./components/animation";
import tabbar from "./components/tabbar";
import swiper from "./components/vueswiper";

import contents from "./components/contents";
export default {
  data() {
    return {
      qqs: false,
      weis: false,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    };
  },
  components: {
    animation,
    tabbar,
    swiper,
    contents,
  },
  methods: {
    qq() {
      this.qqs = true;
    },
    wei() {
      this.weis = true;
    },
    qqss() {
      this.qqs = false;
    },
    weiss() {
      this.weis = false;
    },
  },
};
</script>

<style scoped lang="less">
/* 背景颜色 */
@homebackground: rgb(238, 236, 235);
.content {
  margin: 0 auto;
  /* overflow-x: hidden; */
}
.home {
  overflow-x: hidden;
  /* 背景的颜色 */
  background: @homebackground;
  width: 100%;
  height: 100%;
}

.top {
  /* 最上面的那个3个div */
  width: 100%;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
  .swiper {
    flex: 1;
    border-radius: 20px;
    position: relative;
  }
  .center {
    margin: 0px 20px;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      display: block;
      position: relative;
      margin: 20px auto;
      border-radius: 20px;
      height: 125px;
      display: table-cell; //主要是这个属性
    }
  }
  .right {
    position: relative;
    flex: 1;
    /* border: 1px solid red; */
    background: rgba(42, 42, 42, 1);
    color: #d0d2d4;
    h3 {
      padding: 10px 0px;
      position: relative;
      left: 20px;
    }
    p {
      position: relative;
      left: 20px;
    }
    .qq {
      top: 120px;

      position: absolute;
      width: 100px;
      height: 100px;
    }
    .weixin {
      top: 120px;

      position: absolute;
      width: 100px;
      height: 100px;
    }
    .icon {
      display: flex;
      justify-content: space-evenly;
      img {
        position: relative;
        /* top: 20px; */
        width: 30px;
        height: 30px;
      }
      img:hover {
        background: black;
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .content {
    width: 1200px;
  }
  .qq {
    left: 185px;
  }
  .weixin {
    left: 270px;
  }
}
@media screen and (max-width: 1200px) {
  /* 大型设备（大台式电脑，1200px 起） */
  .content {
    width: 960px;
  }
  .qq {
    left: 145px;
  }
  .weixin {
    left: 180px;
  }
}

@media screen and (max-width: 991px) {
  /* 中型设备（台式电脑，992px 起） */
  .content {
    width: 720px;
  }
  .top {
    .center {
      display: none;
    }
  }
}

@media screen and (max-width: 767px) {
  /* 小型设备（平板电脑，768px 起） */
  .content {
    width: 100%;
    margin: 0px auto;
  }
  body {
    width: 100%;
  }
  .top {
    margin: 0 auto;
    width: 90%;
    display: block;
    flex-wrap: wrap;
  }
  .top .swiper {
    width: 100%;
    height: 220px;
  }
  .top .right {
    border-radius: 20px;
    position: relative;
    top: 10px;
    margin: 0 auto;
    .qq {
      left: 50%;
      transform: translate(-50%);
    }
    .weixin {
      left: 50%;
      transform: translate(-50%);
    }
    img {
      position: relative;
    }
  }
}
</style>
