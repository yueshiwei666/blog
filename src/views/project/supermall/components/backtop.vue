<template>
  <div>
    <img class="img" @click="click" src="@/assets/img/top.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    click() {
      this.$emit("backtop");
    },
  },
};
</script>

<style scoped>
.img {
  position: fixed;
  right: 4%;
  bottom: 8%;
  z-index: 2;
  width: 50px;
}
</style>
