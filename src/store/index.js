import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fact: [],
  },
  mutations: {
    add(state, a) {
      state.fact.push(a);
    },
    addnumber(state, a) {
      /* console.log("++++");
      a.number++; */
      /* var qq = state.fact.find((w) => {
        return w.id == a.id;
      });
      ++qq.number; */
      var id = null;
      state.fact.forEach((item) => {
        if (item.id == a.id) {
          id = item.id;
        }
      });
      for (let i = 0; i < state.fact.length; i++) {
        if (state.fact[i].id == id) {
          state.fact[i].number++;
        }
      }
    },
    change(state, a) {
      var qq = state.fact.find((aa) => {
        return aa.id == a.id;
      });
      if (qq) {
        console.log("qqqqqqqqqqqq");
        qq.bool = !qq.bool;
      }
    },
    all(state) {
      var boo = false;
      for (var i = 0; i < state.fact.length; i++) {
        if (state.fact[i].bool == false) {
          boo = true;
          break;
        }
      }
      state.fact.map((a) => {
        a.bool = boo;
      });
    },
  },
  actions: {
    addshop(context, parames) {
      /* 点击购物车后来到这里添加商品 */
      /* console.log("----------------"); */
      var temp = null;

      /* temp = context.state.fact.find((aa) => {
        return aa.id === parames.id;
      }); */
      for (let item of context.state.fact) {
        if (item.id == parames.id) {
          temp = item;
        }
      }
      console.log(context.state.fact);
      /* console.log(Boolean(temp));
      console.log(temp); */
      //如果进入判断则表示这个商品在state中
      if (temp) {
        //如果有值对当前的商品的数量进行一个加1
        console.log("对商品加一");

        context.commit("addnumber", temp);
      } else {
        //否则不在state中
        console.log("添加新的商品");
        parames.bool = true; /* 设置选中 */
        parames.number = 1; /* 设置数量 */
        /* context.state.fact.push(parames); */
        context.commit("add", parames);
      }
    },
  },
  modules: {},
  getters: {
    factq(state, getters) {
      return state.fact;
    },
    allcheck(state, getters) {
      var bool = false;
      var num = 0;
      /* state.fact.map((a) => {
        if (a.bool == true) {
          num++;
        }
      }); */
      for (var i = 0; i < state.fact.length; i++) {
        if (state.fact[i].bool == false) {
          return false;
        } else {
          num++;
        }
      }
      if (state.fact.length == 0) {
        return false;
      } else if (num == state.fact.length) {
        return true;
      }
    },
    heji(state) {
      var num = 0;
      for (var i = 0; i < state.fact.length; i++) {
        if (state.fact[i].bool == true) {
          num += state.fact[i].price;
        }
      }
      return num;
    },
  },
});
