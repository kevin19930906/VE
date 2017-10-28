<template>
  <ul class="quanbu-ul1">

    <router-link to="/home" active-class="current" tag="li">
      <div class="qu-tu1">
        <a href="javascript:;" class="atu1"><img src="../assets/images/sjsc-02.gif"></a>
        <a href="javascript:;" class="atu2"><img src="../assets/images/sjsc-15-1.gif"></a>
      </div>
      <a href="javascript:;" class="qu-ul1a">首页</a>
    </router-link>

    <router-link to="/ssjg3" active-class="current" tag="li">
      <div class="qu-tu1">
        <a href="javascript:;" class="atu1"><img src="../assets/images/sjsc-16.png"></a>
        <a href="javascript:;" class="atu2"><img src="../assets/images/sjsc-16-1.png"></a>
      </div>
      <a href="javascript:;" class="qu-ul1a">最新募集</a>
    </router-link>

    <router-link to="/shoppingcart" active-class="current" tag="li">
      <div class="qu-tu1">
        <a href="javascript:;" class="atu1"><img src="../assets/images/sjsc-17.png"></a>
        <a href="javascript:;" class="atu2"><img src="../assets/images/sjsc-17-1.png"></a>
      </div>
      <a href="javascript:;" class="qu-ul1a">购物车</a>
    </router-link>

    <router-link to="/user" active-class="current" tag="li">
      <div class="qu-tu1">
        <a href="javascript:;" class="atu1"><img src="../assets/images/sjsc-18.png"></a>
        <a href="javascript:;" class="atu2"><img src="../assets/images/sjsc18-1.png"></a>
      </div>
      <a href="javascript:;" class="qu-ul1a">我</a>
    </router-link>

    <div style="clear:both;"></div>
  </ul>
</template>

<!--<script>
  export default {
    methods:{
      denglu(){
        this.$http({
          method:"post",
          url:"http://localhost:3000/auto"
        }).then((res)=>{
          if(res.data.length!=0){
            this.$router.replace({path:"/user"})
          }else{
            this.$router.replace({path:"/login"})
          }
        }).catch((res)=>{
          throw new Error();
        })
      }
    }
  }
</script>-->

<style>
  .quanbu-ul1{ width:100%; padding:5px 0; background-color:rgba(234,234,234,0.8); position:fixed; left:0; bottom:0;}
  .quanbu-ul1 li{ float:left; width:25%; text-align:center;}
  .quanbu-ul1 li .qu-tu1{ width:20px; height:20px; margin:0 auto;}
  .qu-tu1 .atu1{}
  .qu-tu1 .atu2{ display:none;}
  .qu-tu1 img{ display:block; width:100%; height:100%;}
  .quanbu-ul1 li .qu-ul1a{ font-size:12px; color:#353535;}
  .quanbu-ul1 .current a{ color:#D22424;}
  .quanbu-ul1 .current .atu1{ display:none;}
  .quanbu-ul1 .current .atu2{ display:block;}
</style>
