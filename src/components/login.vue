<template>
  <div class="login">
    <div class="sjsc-title2">
      <h3 class="sjsc-t2l">登录</h3>
      <a href="javascript:;" class="sjsc-t2r" @click="goBack"><</a>
    </div>
    <div class="delu-info1">
      <img src="../assets/images/sjsc37.gif" />
    </div>
    <div class="delu-info2">
      <ul class="delu-ul1">
        <li class="delu-li1">
          <input type="text" v-model="username" :value="username" placeholder="请输入用户名/邮箱/手机号" />
        </li>
        <li class="delu-li2">
          <input type="password" v-model="password" :value="password" placeholder="请输入密码" />
        </li>
      </ul>
      <button class="delu-btn1" @click="login">登录</button>
      <div class="delu-p1">
        <a href="#" class="f-l">忘记密码</a>
        <router-link to="reg" href="javascript:;" class="f-r">立即注册</router-link>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="delu-info3">
      <h3>第三方登录</h3>
      <ul class="delu-ul2">
        <li><a href="#"><img src="../assets/images/sjsc40.gif" /></a></li>
        <li><a href="#"><img src="../assets/images/sjsc41.gif" /></a></li>
        <li><a href="#"><img src="../assets/images/sjsc42.gif" /></a></li>
      </ul>
    </div>
  </div>
</template>

<style>
  .sjsc-title2{ position:relative; width:100%; height:35px; background:#F1F1F1; border-bottom:1px solid #D3D3D3; text-align:center;}
  .sjsc-title2 .sjsc-t2l{line-height:35px; font-size:16px; color:#333; font-weight:normal;}
  .sjsc-title2 .sjsc-t2r{ width:35px; height:35px; line-height:35px; text-align:center; font-size:19px; color:#333; font-family:"宋体"; position:absolute; top:0; left:0; font-weight:bold;}

  /*我想要手机商城登录*/
  .delu-info1{ width:30%; margin:30px auto 0;}
  .delu-info1 img{ display:inline-block; width:100%;}

  .delu-info2{ padding:0 10px; margin-top:20px;}
  .delu-info2 .delu-ul1{ width:100%;}
  .delu-ul1 li{ width:100%; height:41px; overflow:hidden; border-bottom:1px solid #eee;}
  .delu-ul1 li input{ height:41px; width:85%; padding-left:25px; font-size:14px;border:0;}
  .delu-ul1 .delu-li1 input{ background:url(../assets/images/sjsc38.gif) no-repeat left center; background-size:20px;}
  .delu-ul1 .delu-li2 input{ background:url(../assets/images/sjsc39.gif) no-repeat left center; background-size:20px;}
  .delu-info2 .delu-btn1{ width:100%; height:35px; font-size:14px; color:#fff; border:0; background:#E64D5D; border-radius:5px; margin:30px 0;}
  .delu-info2 .delu-p1{ line-height:23px;}
  .delu-p1 a{ font-size:12px; color:#656565;}

  .delu-info3{ text-align:center; margin:30px 0;}
  .delu-info3 h3{ font-weight:normal; font-size:14px; color:#333;}
  .delu-info3 .delu-ul2{ margin-top:10px;}
  .delu-ul2 li{ display:inline-block; margin:0 5px;}
  .delu-ul2 li img{ display:inline-block; height:25px;}


</style>

<script>
  import {mapGetters} from 'vuex';
  export default {
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      login(){
        if(this.username != "" && this.password !=""){
          this.$http({
            method:"post",
            url:"http://localhost:3000/user",
            data:{
              act:"login",
              username:this.username,
              password:this.password
            }
          }).then((res)=>{
            if(res.data.err == 0) {
              alert(res.data.msg);
              this.username="";
              this.password="";
              this.$store.dispatch("user",res.data.result);
              this.$router.push({path:"/user"})
            } else if(res.data.err == 1) {
              alert(res.data.msg);
              this.username="";
              this.password="";
            }
          }).catch((res)=>{
            console.log(res);
          })
        }
      }
    },
    computed:mapGetters([
      "getusers"
    ]),
    data(){
      return {
        username:"",
        password:""
      }
    }
  }
</script>


