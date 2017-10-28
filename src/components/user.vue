<template>
  <div class="user">
    <div class="sjsc-title2">
      <h3 class="sjsc-t2l">{{user}}</h3>
    </div>

    <div class="me-tu">
      <a href="#"><img src="../assets/images/sjsc24.jpg"></a>
    </div>

    <ul class="me-ul1">
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-1.gif" class="me-img1" />我的订单<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-2.gif" class="me-img1" />我的收藏<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-3.gif" class="me-img1" />晒单分享<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-4.gif" class="me-img1" />个人信息<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1">
        <a href="#" class="me-a1">
          <img src="../assets/images/sjsc23-5.gif" class="me-img1" />我的相册
          <span class="me-sp1 f-r">></span>
          <span class="me-sp2 f-r"><img src="../assets/images/sjsc25-3.jpg"></span>
          <span class="me-sp2 f-r"><img src="../assets/images/sjsc25-2.jpg"></span>
          <span class="me-sp2 f-r"><img src="../assets/images/sjsc25-1.jpg"></span>
        </a>
      </li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-6.gif" class="me-img1" />优惠券<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-7.gif" class="me-img1" />现金账户<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-8.gif" class="me-img1" />基金账户<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-9.gif" class="me-img1" />邀请好友<span class="me-sp1 f-r">></span></a></li>
     <!-- <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-10.gif" class="me-img1" />收货地址<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-11.gif" class="me-img1" />帮助与反馈<span class="me-sp1 f-r">></span></a></li>
      <li class="me-li1"><a href="#" class="me-a1"><img src="../assets/images/sjsc23-12.gif" class="me-img1" />账号设置<span class="me-sp1 f-r">></span></a></li>-->
    </ul>
    <input type="button" @click="loginout" value="退出当前登录" class="loginout"></input>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    data(){
      return {
        user:""
      }
    },
    methods:{
      loginout(){
        this.$http({
          url:"http://localhost:3000/loginout",
        }).then((res)=>{
          if(res.data.err == 0) {
            alert(res.data.msg);
            this.$store.dispatch("loginout");
            this.$router.push({path:"/login"})
          } else if(res.data.err == 1) {
            alert(res.data.msg);
          }
        }).catch((res)=>{
          console.log(res);
        })
      }
    },
    computed:mapGetters([
      "getusers"
    ]),
    created(){
      if(!this.getusers){
        this.$http({
          method:"post",
          url:"http://localhost:3000/auto"
        }).then((res)=>{
          if(res.data.length!=0){
            this.$store.dispatch("user",res.data[0]);
            this.user=res.data[0].username
          }else{
            this.$router.replace({path:"/login"})
          }
        }).catch((res)=>{
          throw new Error();
        })
      }else{
        this.user=this.getusers.username;
      }
    }
  }
</script>

<style>
  .loginout{display: block;width:80%;height:40px;background: #f55;margin:0 auto; margin-bottom:80px; border:none; font:20px/40px "";border-radius: 5px;color: #fff;
  }
  .sjsc-title2{ position:relative; width:100%; height:35px; background:#F1F1F1; border-bottom:1px solid #D3D3D3; text-align:center;}
  .sjsc-title2 .sjsc-t2l{line-height:35px; font-size:16px; color:#333; font-weight:normal;}
  .sjsc-title2 .sjsc-t2r{ width:35px; height:35px; line-height:35px; text-align:center; font-size:19px; color:#333; font-family:"宋体"; position:absolute; top:0; left:0; font-weight:bold;}

  .me-tu{ width:100%;}
  .me-tu img{ display:block; width:100%;}

  .me-ul1{ padding-bottom:81px;}
  .me-ul1 .me-li1{ height:35px; line-height:35px; padding:0 10px; border-bottom:1px solid #F5F5F5; background:#fff;}
  .me-ul1 .me-li1:nth-of-type(5){ margin-bottom:5px;}
  .me-ul1 .me-li1:nth-of-type(9){ margin-bottom:5px;}
  .me-ul1 .me-li1 .me-a1{ font-size:14px; color:#656565; display:block;}
  .me-ul1 .me-li1 .me-img1{ display:inline-block; width:20px; margin-right:10px; position:relative; top:4px;}
  .me-ul1 .me-li1 .me-sp1{ font-size:18px; color:#D5D5D5; font-family:"宋体"; margin-left:5px;}
  .me-ul1 .me-li1 .me-sp2{ display:block; width:23px; height:23px; margin:5px 3px 0 0; border:1px solid #F5F5F5;}
  .me-ul1 .me-li1 .me-sp2 img{ display:block; width:100%; height:100%;}


</style>


