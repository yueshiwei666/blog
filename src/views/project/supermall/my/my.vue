<template>
  <div>
    <tabbar class="tabbar">
      <div slot="center">商城</div>
    </tabbar>
    <div class="picture">
      <img class="img1" src="./4.jpg" alt="" />
      <div class="text">
        <p>登录/注册</p>
        <p>暂无手机绑定</p>
      </div>
      <div class="img2">
        <img src="~@/assets/img/back.svg" alt="" />
      </div>
    </div>
    <div class="price">
      <div class="price-div">
        <strong>0.00元</strong>
        <p>我的余额</p>
        <div class="div"></div>
      </div>
      <div class="price-div">
        <strong>0个</strong>
        <p>我的优惠</p>
        <div class="div1"></div>
      </div>
      <div class="price-div">
        <strong>0分</strong>
        <p>我的积分</p>
      </div>
    </div>
    <div class="xiaoxi">
      <div><img src="./1.svg" alt="" />我的消息</div>
      <div><img src="./2.svg" alt="" />购物商城</div>
      <div><img src="./3.svg" alt="" />会员卡</div>
    </div>
    <div class="bot">
      <div class="bot-div">
        <img src="./4.svg" alt="" />
        <div>我的购物车</div>
      </div>
      <div class="bot-div">
        <img src="./5.svg" alt="" />
        <div>下载购物app</div>
      </div>
    </div>
    <!-- xia -->
    <tab :num="3"></tab>
  </div>
</template>

<script>
import tabbar from "components/tabbar.vue";
import tab from "../components/tab";
export default {
  data() {
    return {};
  },
  components: {
    tab,
    tabbar,
  },
};
</script>

<style scoped lang="less">
.tabbar {
  background: pink;
  div {
    font-weight: bold;
  }
}
.picture {
  width: 100%;
  height: 78px;
  background: pink;
  position: relative;
  overflow: hidden;
  clear: both;
  .img1 {
    display: block;
    margin-left: 10px;
    border-radius: 50%;
    width: 20%;
    height: 80%;
    float: left;
  }
  .text {
    margin-left: 10px;
    margin-top: 10px;
    float: left;
    p:nth-child(1) {
      font-size: 15px;
      margin-bottom: 0px;
      color: rgb(0, 0, 0);
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 13px;
      color: rgb(0, 0, 0);
      font-weight: bold;
    }
  }
  .img2 {
    float: left;
    height: 100%;
    img {
      color: white;
      transform: rotate(180deg);
      position: absolute;
      right: 10px;
      display: block;
      margin: 20px auto;
    }
  }
}
.price {
  width: 100%;
  /*  height: 80px; */
  border-bottom: 10px solid rgb(224, 224, 224);
  display: flex;
  padding-bottom: 5px;
  .price-div {
    strong {
      color: red;
    }
    position: relative;
    flex: 1;
    text-align: center;
    margin-top: 10px;
    .div {
      top: 10px;
      position: absolute;
      right: 0px;
      width: 0.5px;
      height: 30px;
      background: rgb(194, 63, 63);
    }
    .div1 {
      top: 10px;
      position: absolute;
      right: 0px;
      width: 1px;
      height: 30px;
      background: rgb(194, 63, 63);
    }
  }
}
.xiaoxi {
  top: 5px;
  width: 100%;
  /* border: 1px solid red; */
  position: relative;
  border-bottom: 15px solid rgb(220, 218, 218);
  > div {
    position: relative;
    padding-top: 5px;
    height: 40px;
    margin: auto auto;
    border-bottom: 1px solid rgb(220, 218, 218);
    padding-left: 10px;
    /* border: 1px solid red; */
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
.bot {
  position: relative;
  top: 5px;
  /* border: 1px solid red; */
  .bot-div {
    padding: 8px 0;
    height: 40px;
    border-bottom: 1px solid rgb(216, 213, 213);
    img {
      position: relative;
      margin-left: 10px;
      margin-right: 10px;
      display: block;
      float: left;
      width: 20px;
      height: 20px;
    }
    div {
      float: left;
      padding: auto 0;
    }
  }
}
</style>
