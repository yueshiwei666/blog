<template>
  <div class="content boxs">
    <div class="box-item" v-for="(value,index) in arr" :key="index">
      <div>
        {{value}}
        <h1>123</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12]
    };
  }
};
</script>

<style scoped lang='less'>
.boxs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .box-item {
    margin: 20px 0;
    width: 33%;
    height: 200px;
    /* border: 1px solid red; */
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
      border: 1px solid red;
    }
  }
}
</style>
