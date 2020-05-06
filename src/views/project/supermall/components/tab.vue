<template>
  <div class="tab">
    <div :class="{ color: 1 == num }" @click="$router.push('/supermall')">
      <img v-show="num != 1" src="~@/assets/img/home.svg" alt="" />
      <img
        v-show="num == 1"
        class="qqq"
        src="~@/assets/img/home_active.svg"
        alt=""
      />
      <strong>首页</strong>
    </div>
    <div :class="{ color: 2 == num }" @click="$router.push('/supermall/shop')">
      <img v-show="num != 2" src="~@/assets/img/cart.svg" alt="" />
      <img
        v-show="num == 2"
        class="qqq"
        src="~@/assets/img/cart_active.svg"
        alt=""
      />
      <strong> 购物车</strong>
    </div>
    <div :class="{ color: 3 == num }" @click="$router.push('/supermall/my')">
      <img v-show="num != 3" src="~@/assets/img/profile.svg" alt="" />
      <img
        v-show="num == 3"
        class="qqq"
        src="~@/assets/img/profile_active.svg"
        alt=""
      />
      <strong>我的</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    num: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped lang="less">
.color {
  color: blue;
}
.tab {
  position: fixed;
  display: flex;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  div {
    flex: 1;
    text-align: center;
    line-height: 40px;
    background: rgb(231, 229, 229);
    font-size: 13px;
    /* border: 1px solid red; */
    img {
      width: 60%;
      height: 60%;
    }
    strong {
      position: relative;
      left: -10px;
    }
  }
}
</style>
