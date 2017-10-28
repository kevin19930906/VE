<template>
  <div class="fbsd">
    <div class="sjsc-title1">
      <h3 class="sjsc-t1l f-l"><a href="JavaScript:;" @click="goBack"><span><</span>晒单分享</a></h3>
      <div style="clear:both;"></div>
    </div>
    <div class="fbsd-info1">
      <input type="text" placeholder="点击添加主题" />
    </div>
    <div class="fbsd-info4">
      <textarea placeholder="点击添加描述"></textarea>
    </div>
    <div class="fbsd-info2">
      <ul class="fbsd-ul1">
        <li class="fbsd-lilast">
          <img src="../assets/images/sjsc36.jpg" />
          <input type="file" class="img1"/>
        </li>
        <div style="clear:both;"></div>
      </ul>
    </div>
    <div class="fbsd-info3">
      <a href="#">分享<img src="../assets/images/sjsc43.gif" /></a>
    </div>
  </div>
</template>
<style>
  .sjsc-title1{ width:100%; height:35px; background:#F1F1F1; border-bottom:1px solid #D3D3D3;}
  .sjsc-title1 .sjsc-t1l{ height:35px; line-height:35px; font-weight:normal; padding:0 5px;}
  .sjsc-t1l a{ display:block; font-size:16px; color:#333;}
  .sjsc-t1l span{ margin-right:5px; font-family:"宋体"; font-weight:bold;}
  .sjsc-title1 .sjsc-t1r{ display:block; width:35px; text-align:center; font-size:14px; color:#333; height:35px; line-height:35px; margin-right:3px;}

  /*我想要手机商城发布晒单*/
  .fbsd-info1{}
  .fbsd-info1 input{ width:96%; padding-left:13px; height:30px; border:0;}
  .fbsd-info4{ padding:5px 0 5px 10px;background:#fff; margin-top:5px;}
  .fbsd-info4 textarea{ width:100%; border:0;resize:none;}

  .fbsd-info2{ padding:10px 2%;background:#fff; margin-top:5px;}
  .fbsd-info2 .fbsd-ul1{}
  .fbsd-ul1 li{ float:left; width:60px; height:60px; margin:0 8px 8px;}
  .fbsd-ul1 li img{ width:100%; height:100%; display:inline-block;}
  .fbsd-ul1 .fbsd-lilast{ position:relative;}
  .fbsd-lilast input{ position:absolute; top:0; left:0; width:60px; height:60px; opacity:0}

  .fbsd-info3{ width:100%; height:30px; background:#D12323; position:fixed; left:0; bottom:0;}
  .fbsd-info3 a{ height:30px; line-height:30px; text-align:center; font-size:14px; color:#fff; display:block;}
  .fbsd-info3 img{ display:inline-block; margin-left:5px; width:15px;}

</style>
<script>
  export default {
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>




