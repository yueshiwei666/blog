<template>
  <div>
    <tabbar class="tabbar">
      <div @click="click" slot="left">返回</div>
      <div slot="center">流水</div>
    </tabbar>
    <div class="jilu" v-show="jilu">暂无任何的记录~~~</div>
    <div class="box">
      <div class="bianli" v-for="(value, index) in backbill" :key="index">
        <div class="bianlidiv">金额:{{ value.jine }}</div>
        <div class="bianlidiv">类别:{{ value.leibies }}</div>
        <div class="bianlidiv">日期:{{ value.riqis }}</div>
        <div class="bianlidiv miaoshu">描述:{{ value.shuomings }}</div>
        <div class="bians" @click="bians(value.id)">编辑</div>
        <div class="shanchu" @click="shanchu(value.id)">删除</div>
      </div>
    </div>

    <tab
      :active="1"
      :arr="['记账', '流水报告']"
      @tabbarclick="tabbarclick"
    ></tab>
  </div>
</template>

<script>
import tab from "components/tab";
import tabbar from "components/tabbar";

export default {
  name: "liushui",
  data() {
    return {
      obj: ["1", "2", "3"],
      bool: true,
    };
  },
  components: {
    tabbar,
    tab,
  },
  methods: {
    click() {
      this.$router.push("/bill");
    },
    tabbarclick(aaa) {
      if (aaa == 0) {
        this.$router.push("/bill");
      } else if (aaa == 1) {
        this.$router.push("/liushui");
      } else {
        return 1;
      }
    },
    shanchu(id) {
      this.$store.commit("shanchu", id);
    },
    bians(id) {
      console.log(id);
      this.$router.push(`/edit/${id}`);
    },
  },
  computed: {
    backbill() {
      return this.$store.getters.backbill;
    },
    jilu() {
      console.log(this.$store.getters.backbill.length);

      if (this.$store.getters.backbill.length != 0) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped lang="less">
@back: rgb(160, 160, 236);
.tabbar {
  background: rgb(240, 129, 129);
  cursor: pointer;
}
.box {
  width: 100%;
  height: 87vh;

  .bianli {
    background: @back;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .bianlidiv {
      width: 33%;
    }
    .miaoshu {
      width: 100%;
    }
    .bians {
      width: 100%;
      height: 25px;
      background: rgb(48, 226, 185);
      text-align: center;
      cursor: pointer;
    }
    .shanchu {
      width: 100%;
      height: 25px;
      background: rgb(181, 118, 118);
      text-align: center;
      cursor: pointer;
    }
  }
}
.jilu {
  width: 150px;
  height: 30px;
  background: pink;
  margin: 150px auto;
}
</style>
