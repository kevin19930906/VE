<template>
  <div class="sy-info1">
    <ul class="sy-ul1">
      <router-link to="/home/syqie1" tag="li" active-class="current"><a href="JavaScript:;">最新发起</a></router-link>
      <router-link to="/home/syqie2" tag="li" active-class="current"><a href="JavaScript:;">最新成功</a></router-link>
      <router-link to="/home/syqie3" tag="li" active-class="current"><a href="JavaScript:;">新品上架</a></router-link>
      <router-link to="/home/syqie4" tag="li" active-class="current"><a href="JavaScript:;">销量最高</a></router-link>
      <div style="clear:both;"></div>
      <transition
        enter-active-class="animated zoomInLeft"
      >
        <router-view class="sy-qieul sy-ul2"></router-view>
      </transition>
    </ul>
  </div>
</template>
<style>
  .sy-info1{ width:100%; background:#fFF;border-bottom:1px solid #E6E6E6; border-top:1px solid #E6E6E6;}
  .sy-ol1{ position:absolute; left:0; bottom:-5px; text-align:center; width:100%;}
  .sy-ol1 li{ width:6px; height:6px; border-radius:50%; background:#BDBDBD; display:inline-block; font-size:0; margin-right:3px;}
  .sy-ol1 li.on{ background:#E74D5D;}

  .sy-info1 .sy-ul1{border-bottom:1px solid #e6e6e6;}
  .sy-ul1 li{ float:left; width:25%; text-align:center; height:30px; line-height:30px;}
  .sy-ul1 li a{ display:inline-block; font-size:13px; color:#525252;}
  .sy-ul1 .current a{ border-bottom:1px solid #E74E5D;color:#E74E5D;}
  .sy-qieul{  border-top:1px solid #E6E6E6;}

  .sy-qie{ width:100%; height:148px; overflow:hidden;}
  .sy-qie .sy-ul2{}
  .sy-ul2 li{ float:left; width:32%; height:133px; padding-left:1%; padding-top:10px; padding-bottom:5px; border-right:1px solid #e6e6e6;line-height:20px;}
  .sy-ul2 li .sy-tu1{ width:100%; height:80px; text-align:center; margin-bottom:10px;}
  .sy-ul2 li .sy-tu1 img{ display:inline-block; height:80px;}
  .sy-ul2 li p{ font-size:12px; color:#8C8C8C;}
  .sy-ul2 li p span{ color:#E74D5D;}
  .sy-ul2 li .sy-cs{ width:80%; height:5px; border-radius:5px; overflow:hidden; background:#E4E4E4; position:relative;}
  .sy-cs .sy-hs{ position:absolute; top:0; left:0; width:65%; height:5px; background:#FFAF00;border-radius:5px;}
  .sy-qie .sy-ul3{}
  .sy-ul3 li{ float:left; width:32%; height:133px; padding-left:1%; padding-top:10px; padding-bottom:5px; border-right:1px solid #e6e6e6;}
  .sy-ul3 li .sy-tu1{ width:100%; height:80px; text-align:center; margin-bottom:10px;}
  .sy-ul3 li .sy-tu1 img{ display:inline-block; height:80px;}
  .sy-ul3 li p{ font-size:12px; color:#8C8C8C; text-align:center;}

  .sy-ft{ width:100%;margin-bottom:80px;}
  .sy-ftif1{ height:30px; background:#fff; margin-bottom:5px;}
  .sy-ftif1 .sy-tab1{ width:100%; height:30px;}
  .sy-tab1 td{ border:none;border-right:1px solid #dbdbdb;}
  .sy-tab1 td:nth-of-type(4){ border-right:0;}
  .sy-tab1 td a{ display:block; font-size:12px; color:#9b9b9b;}
  .sy-ft .sy-ft-p1{ font-size:12px; color:#9B9B9B; margin:0 15px; line-height:19px;}

</style>