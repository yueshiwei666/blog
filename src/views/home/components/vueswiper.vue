<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="~@/assets/img/1.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="~@/assets/img/2.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="~@/assets/img/3.jpg" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <!--  <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.css";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      type: "fraction",
      hashNavigation: true,
      watchState: true,
      replaceState: true,
      mousewheel: true,
      autoplay: {
        delay: 1500 //1秒切换一次
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }
    });
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 340px;
  height: 330px;
}
@media screen and (max-width: 480px) {
  /* 超小设备（手机，小于 768px） */
  .swiper-container {
    width: 100%;
  }
}
</style>
