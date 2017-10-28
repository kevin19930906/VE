<template>
  <div>
    <div class="nan"></div>
    <ul class="quanbu-title1">
      <router-link to="/home" tag="li" active-class="current"><a href="#">首页</a></router-link>
      <router-link to="/ssjg2" tag="li" active-class="current"><a href="#">全部商品</a></router-link>
      <router-link to="/ssjg3" tag="li" active-class="current"><a href="#">正在募集</a></router-link>
      <router-link to="/spxqul21" tag="li" active-class="current"><a href="#">排行榜</a></router-link>
      <router-link to="/fbsd" tag="li" active-class="current"><a href="#">晒单</a></router-link>
      <div style="clear:both;"></div>
    </ul>
  </div>
</template>
<style scoped>
  /*************我想要手机商城全部商品*********************/
  .nan{height:47px}
  .quanbu-title1{ background:#fff; height:30px;border-bottom:1px solid #EDEDED;}
  .quanbu-title1 li{ float:left; width:20%; height:30px; line-height:30px; text-align:center;}
  .quanbu-title1 li a{ font-size:14px; color:#818181;}
  .quanbu-title1 .current{ border-bottom:1px solid #E74E5D;}
  .quanbu-title1 .current a{ color:#E74E5D;}

</style>