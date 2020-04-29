<template>
  <div class="tabbar">
    <div class="content">
      <h4>Mr-Yue</h4>
      <div>排版数据</div>
      <div>
        <a class="denglu" href>登录</a>
        <a class="zhuce" href>/注册</a>
        <div class="cha">搜索:</div>
        <img src="~@/assets/img/搜索.png" alt />
        <input type="text" class="input" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
.tabbar {
  width: 100%;
  height: 40px;
  background: rgb(230, 208, 197);
  line-height: 40px;
  .content {
    display: flex;
    margin: 0px auto;
    h4 {
      height: 40px;
      line-height: 40px;
      text-align: center;
      flex: 1;
    }
    div {
      height: 40px;
      flex: 1;
    }
    div:nth-child(3) {
      height: 40px;
      position: relative;
      flex: 1;

      display: flex;
      text-align: center;
      font-weight: bold;
      justify-content: center;
      img {
        position: relative;
        top: 50%;
        transform: translate(0, -40%);
        position: relative;
        max-width: 50%;
        max-height: 50%;
        object-fit: cover;
      }
      .input {
        border: 1px solid black;
        border-radius: 10px;
        background: white;
        height: 20px;
        position: relative;
        top: 50%;
        left: 10px;
        transform: translate(-10%, -40%);
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .content {
    width: 1200px;
  }
  .content {
    display: flex;
    margin: 0px auto;
    h4 {
      height: 40px;
      line-height: 40px;
      text-align: center;
      flex: 1;
    }
    div {
      height: 40px;
      flex: 1;
    }
    div:nth-child(3) {
      height: 40px;
      position: relative;
      flex: 1;

      display: flex;
      text-align: center;
      font-weight: bold;
      justify-content: center;
      img {
        z-index: 2;
        left: 12px !important;
        position: relative;
        max-width: 50%;
        max-height: 50%;
        object-fit: cover;
      }
      .input {
        width: 50%;
        text-indent: 20px;
        border: 1px solid black;
        border-radius: 10px;
        background: white;
        height: 20px;
        position: relative;
        top: 50%;
        left: 10px;
        transform: translate(-10%, -40%);
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  /* 大型设备（大台式电脑，1200px 起） */
  .content {
    width: 960px;
    font-size: 15px;
  }
  div:nth-child(3) {
    height: 40px;
    position: relative;
    flex: 1;

    display: flex;
    text-align: center;
    font-weight: bold;
    justify-content: center;
    img {
      z-index: 2;
      position: relative;
      top: 50%;
      left: 4%;
      transform: translate(0, -40%);
      position: relative;
      max-width: 50%;
      max-height: 50%;
      object-fit: cover;
    }
    .input {
      text-indent: 20px;
      position: relative;
      left: 10px;
    }
  }
}

@media screen and (max-width: 992px) {
  /* 中型设备（台式电脑，992px 起） */
  .content {
    width: 720px;
  }

  div:nth-child(3) {
    font-size: 14px;
    height: 40px;
    position: relative;
    flex: 1;
    display: flex;
    text-align: center;
    font-weight: bold;
    justify-content: center;
    img {
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 7%;
      max-width: 50%;
      max-height: 50%;
      object-fit: cover;
    }
    .input {
      width: 50%;
      text-indent: 20px;
      border: 1px solid black;
      border-radius: 10px;
      background: white;
      height: 20px;
      position: relative;
      top: 50%;
      left: 10px;
      transform: translate(-10%, -40%);
    }
  }
}

@media screen and (max-width: 768px) {
  /* 小型设备（平板电脑，768px 起） */
  .content {
    width: 540px;
  }
  .content {
    font-size: 10px;
    display: flex;
    margin: 0px auto;
    h4 {
      height: 40px;
      line-height: 40px;
      text-align: center;
      flex: 1;
    }
    div {
      height: 40px;
      flex: 1;
    }
    div:nth-child(3) {
      height: 40px;
      position: relative;
      flex: 1;
      display: flex;
      text-align: center;
      font-weight: bold;
      justify-content: center;
      .zhuce {
        display: none;
      }
      .cha {
        display: none;
      }
      img {
        z-index: 2;
        position: relative;
        display: none;
        top: 50%;
        transform: translate(0px, -40%);
        position: relative;
        max-width: 50%;
        max-height: 50%;
        object-fit: cover;
      }
      .input {
        text-indent: 0px;
        width: 30%;
        text-indent: 20px;
        border: 1px solid black;
        border-radius: 10px;
        background: white;
        height: 20px;
        position: relative;
        top: 50%;
        transform: translate(-10%, -40%);
      }
    }
  }
}

@media screen and (max-width: 576px) {
  /* 超小设备（手机，小于 768px） */
  .content {
    width: 480px;
  }
  .input {
    width: 10px;
  }
}
@media screen and (max-width: 480px) {
  /* 超小设备（手机，小于 768px） */
  .content {
    width: 100%;
  }
  .content {
    font-size: 10px;
    display: flex;
    margin: 0px auto;
    h4 {
      height: 40px;
      line-height: 40px;
      text-align: center;
      flex: 1;
    }
    div {
      height: 40px;
      flex: 1;
    }
    div:nth-child(3) {
      height: 40px;
      position: relative;
      flex: 2;
      display: flex;
      text-align: center;
      font-weight: bold;
      justify-content: center;
      .zhuce {
        display: none;
      }
      .cha {
        display: none;
      }
      img {
        z-index: 2;
        position: relative;
        display: none;
        top: 50%;
        transform: translate(0px, -40%);
        position: relative;
        max-width: 50%;
        max-height: 50%;
        object-fit: cover;
      }
      .input {
        text-indent: 5px !important;
        width: 30%;
        text-indent: 20px;
        border: 1px solid black;
        border-radius: 10px;
        background: white;
        height: 20px;
        position: relative;
        top: 50%;
        transform: translate(-10%, -40%);
      }
    }
  }
}
</style>
