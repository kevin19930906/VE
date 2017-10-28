<template>
  <div class="quanbu-top">
    <a href="#" class="qb-tleft f-l"><img src="../assets/images/sjsc-14.png"></a>
    <div class="qb-tright f-r">
      <a href="#"><img src="../assets/images/sjsc-13.png"></a>
      <router-link to="/user" href="javascript:;"><img src="../assets/images/sjsc-14-1.png"></router-link>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>
<style>
  /*************我想要手机商城全部商品*********************/
  .quanbu-top{ padding:8px 5px; background:#E74E5D;position: fixed;
    width: 100%;z-index: 100}
  .quanbu-top .qb-tleft{ display:block; }
  .qb-tleft img{width:90px;}
  .quanbu-top .qb-tright{}
  .qb-tright a{ display:inline-block;}
  .qb-tright img{ display:inline-block; height:23px; margin:2px 8px 0 0;}
</style>