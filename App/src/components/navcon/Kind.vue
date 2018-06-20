<template>
  <div class="pur_nav">
    <div class="all btn"><img src="../../../imgs/download-7.png" alt=""><span>纯玩游</span></div>
    <div class="all btn"><img src="../../../imgs/download-8.png" alt=""><span>半自助游</span></div>
    <div class="all btn"><img src="../../../imgs/download-9.png" alt=""><span>VIP定制</span></div>
    <div class="all"><img src="../../../imgs/download-10.png" alt=""><span>主题游</span></div>
  </div>
</template>

<script>
  export default {
    name: "Kind"
  }
</script>

<style scoped>
  .pur_nav{
    width: 100%;
    height: 50px;
    line-height: 58px;
    border-bottom: 1px solid rgb(215,221,226);
    overflow: hidden;
  }
  .pur_nav img{
    width: 19px;
    height: 19px;
    vertical-align: middle;
  }
  .pur_nav .all{
    float: left;
    font-size: 13px;
    width: 24%;
    text-align: center;
    height: 20px;
    line-height: 20px;
    margin: 15px 0px;
  }
  .btn{
    border-right: 2px solid #ccc;
  }
  .pur_nav span{
    margin-left:10%;
  }
</style>
