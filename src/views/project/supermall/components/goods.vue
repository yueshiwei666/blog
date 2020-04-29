<template>
  <strong class="goods">
    <strong class="img-info" @click="click(value.id)" v-for="(value,index) in goods" :key="index">
      <img :src="value.img" alt @load="img" />
      <p>
        <strong class="red">￥</strong>
        <strong class="font">{{value.price}}</strong>
      </p>
      <p>{{value.description}}</p>
    </strong>
  </strong>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  methods: {
    img() {
      this.$emit("img");
    },
    click(a) {
      this.$router.push("/detail/" + a);
    }
  }
};
</script>

<style scoped lang='less'>
.goods {
  position: relative;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  .img-info {
    top: 10px;
    position: relative;
    width: 45%;
    height: 80%;
    margin: 0px 0px 5px 0px;
    img {
      width: 100%;
      height: 80%;
      border-radius: 10px;
    }
    p {
      font-size: 15px;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      .red {
        position: relative;
        color: red;
        font-size: 20px;
      }
      .font {
        font-size: 20px;
      }
    }
  }
}
</style>
