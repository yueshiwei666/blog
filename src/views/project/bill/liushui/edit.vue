<template>
  <div>
    <tabbar class="tabbar">
      <div slot="left" @click="backs">返回</div>
    </tabbar>
    <div class="price">
      <div class="price-div">
        <img src="~@/assets/img/qian.png" alt />
        <strong>金额</strong>

        <input v-model="value" type="text" placeholder="0.0" />
      </div>
      <div class="price-div">
        <img src="~@/assets/img/leibie.png" alt />
        <strong>
          <!--  <strong v-show="shouru">收入</strong> -->
          类别:{{ lei }}
        </strong>
        <div class="guanli" @click="leibie">
          类别管理
          <transition name="fade">
            <div class="div" v-if="show">
              <div @click="clicks(1)">购物</div>
              <div @click="clicks(2)">交通</div>
              <div @click="clicks(3)">娱乐</div>
            </div>
          </transition>
        </div>
      </div>
      <div class="price-div">
        <img src="~@/assets/img/riqi.png" alt />
        <strong>日期:{{ date }}</strong>
        <strong></strong>
      </div>
      <div class="price-div">
        <img src="~@/assets/img/shuoming.png" alt />
        <strong>说明:</strong>
        <textarea v-model="shuo" name id cols="15" rows="3"></textarea>
      </div>
    </div>
    <div class="confirm" @click="queding">确定</div>
  </div>
</template>

<script>
import tabbar from "components/tabbar";
import { log } from "util";
export default {
  name: "edit",
  data() {
    return {
      color: 1,
      show: false,
      leis: "购物",
      shouru: false,
      value: "",
      shuo: "",
    };
  },
  components: {
    tabbar,
  },
  methods: {
    backs() {
      this.$router.push("/liushui");
    },
    leibie() {
      /* console.log("1111111111111111"); */
      this.show = !this.show;
    },
    clicks(a) {
      if (a == 1) {
        this.leis = "购物";
      } else if (a == 2) {
        this.leis = "交通";
      } else if (a == 3) {
        this.leis = "娱乐";
      }
      /*  console.log(a); */
    },
    queding() {
      var obj = {
        jine: this.value,
        leibie: this.leis,
        shuoming: this.shuo,
        id: this.$route.params.id,
      };
      this.$store.commit("changes", obj);
      this.$router.push("/liushui");
    },
  },
  created() {
    this.backdata;
  },
  computed: {
    lei() {
      return this.leis;
    },
    date() {
      var myDate = new Date();

      var num = myDate.getMonth() + 1;
      var str = null;
      str = myDate.getFullYear() + "-" + num + "-" + myDate.getDate();
      return str;
    },
    backdata() {
      console.log(this.$route.params.id);
      var obj = this.$store.getters.backdata(this.$route.params.id);
      console.log(obj);
      this.value = obj.jine;
      this.shuo = obj.shuomings;
      this.leis = obj.leibies;
    },
  },
};
</script>

<style scoped lang="less">
.tabbar {
  background: rgb(240, 129, 129);
}

@tabbar-color: rgb(240, 129, 129);
@back: rgb(160, 160, 236);
@topcolor: rgb(125, 191, 201);
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.topcolor {
  background: @topcolor;
}
.tabbar {
  width: 100%;
  height: 40px;
  background: @tabbar-color;
  color: rgb(78, 76, 76);
}
.transform {
  background: @back;
  height: 80px;
  .div {
    cursor: pointer;
    position: relative;
    height: 50px;
    border-radius: 15px;
    margin: 0 auto;
    top: 15px;
    width: 180px;
    background: rgba(88, 99, 92, 0.184);
    border: 2px solid rgb(129, 218, 223);
    display: flex;
    align-items: center;
    .huafei {
      flex: 1;
      position: relative;

      height: 30px;
      margin: 0px 4px;
      /*  background: rgb(241, 144, 144); */
      border-radius: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid rgb(36, 223, 95);
    }
    .shouru {
      flex: 1;
      position: relative;

      height: 30px;
      margin: 0px 4px;
      /*  background: rgb(241, 144, 144); */
      border-radius: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid rgb(36, 223, 95);
    }
  }
}
.price {
  width: 100%;
  height: 90vh;
  background: @back;
  img {
    display: block;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .price-div {
    line-height: 50px;
    display: flex;
    align-items: center;
    height: 50px;
    border-top: 1px solid rgb(191, 187, 187);
    position: relative;
    input {
      border-radius: 10px;
      height: 40px;
      width: 100px;
      background: @topcolor;
    }
    .guanli {
      cursor: pointer;
      width: 100px;
      position: absolute;
      right: 20px;
      background: rgb(187, 75, 75);
      border-radius: 10px;
      height: 40px;
      line-height: 40px;
      width: 80px;
      text-align: center;
      .div {
        border-radius: 10px;
        top: -130px;
        background: rgb(248, 248, 248);
        position: relative;
        z-index: 6;
        div {
          height: 30px;
          line-height: 30px;
        }
      }
    }
    textarea {
      display: block;
      position: relative;
      top: 60px;
      left: 10px;
      background: @back;
      border: 2px solid rgb(193, 183, 183);
      border-radius: 10px;
    }
  }
}
.confirm {
  height: 40px;
  position: fixed;
  bottom: 80px;
  background: rgb(37, 125, 138);
  margin: auto auto;
  width: 150px;
  text-align: center;
  line-height: 40px;
  color: white;
  border-radius: 10px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
