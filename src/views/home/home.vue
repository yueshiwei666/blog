<template>
  <div>
    <h1>12</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    /*获取父元素传递过来的值*/
  },
  created() {
    /*这里访问不到模板中的 this.refs 元素等等啊访问不到，在模板没有挂载到页面就执行*/
  },
  mounted() {
    /*这里能访问到模板中的元素*/
  },
  methods: {},
  computed: {},
  activated() {
    //使用<keep-alive>发挥作用,这个组件需要在路由中发挥作用
  },
  deactivated() {
    //使用<keep-alive>发挥作用,这个组件需要在路由中发挥作用
  },
  stroyed() {
    //不详   不在app中使用keep-alive发挥作用好像是啊
  },
  destroyed() {
    //不在app中使用keep-alive发挥作用
  },
  filters: {
    /*vue中的过滤器，用来过滤数据的*，{数据 | 写在filters中的函数对象不带括号}，在元素中也可以写 百度吧/
    /*使用方法 qqq(value){ 记得传递参数}*/
  },
  updated: {
    /*this.nextTick(回调函数callback)表示当组件中的东西都加载好之后就执行这个函数的回调函数*/
    /*//当页面只要一发生变化就执行函数updated中的内容,注意不只执行一次的*/
  },
  watch: {
    //watch可以监听数据的变化在内部写上data.监听变化的那个数据 最后加个()来用
  }
};
</script>

<style scoped>
</style>
