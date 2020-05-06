<template>
  <div class="content boxs">
    <div @click="click(index)" class="box-item" v-for="(value, index) in arr" :key="index">
      <p class="p">{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["移动端商城", "移动端记账app"]
    };
  },
  methods: {
    click(e) {
      if (e == 0) {
        console.log("1111111111111");
        this.$router.push("/supermall");
      } else if (e == 1) {
        this.$router.push("/bill");
      } else {
        return 1;
      }
    }
  }
};
</script>

<style scoped lang="less">
.boxs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .box-item {
    margin: 20px 0;
    width: 33%;
    height: 200px;
    margin: 5px auto;
    background-color: rgb(177, 177, 175);
    cursor: pointer;
    /* border: 1px solid red; */
    .p {
      text-align: center;
    }
  }
  .box-item:hover {
    box-shadow: 0px 0px 20px rgb(238, 176, 176);
  }
}

@media screen and (min-width: 1200px) {
  /*大桌面显示器*/
  .content {
    width: 1200px;
  }
}
@media screen and (max-width: 1199px) {
  /*中等屏幕*/
  .content {
    width: 960px;
  }
}
@media screen and (max-width: 991px) {
  /*平板ipad*/
  .content {
    width: 720px;
  }
}
@media screen and (max-width: 767px) {
  /*超小屏幕*/
  .content {
    width: 100%;
  }
  .boxs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-item {
      margin: 20px 0;
      width: 100%;
      height: 200px;
      /* border: 1px solid red; */
    }
  }
}
</style>
