<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
/* 移入reset css的文件 */
@import url("assets/css/base.css");
</style>
