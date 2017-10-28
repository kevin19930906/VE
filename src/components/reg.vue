<template>
  <div class="reg">
    <div class="sjsc-title2">
      <h3 class="sjsc-t2l">注册</h3>
      <a href="javascript:;" class="sjsc-t2r" @click="goBack"><</a>
      <router-link to="/login" href="javascript:;" class="sjsc-t2m">登陆</router-link>
    </div>

    <ul class="sczc-ul1">
      <li>
        <p class="sczc-p1 f-l"><img src="../assets/images/sjsc-12-1.png">账　号</p>
        <input v-model="username" :value="username" type="text" placeholder="请输入用户名/邮箱" class="sczc-ipt1 f-l" />
        <div style="clear:both;"></div>
      </li>
      <li>
        <p class="sczc-p1 f-l"><img src="../assets/images/sjsc-12-2.png">密　码</p>
        <input type="text" v-model="password" :value="password" placeholder="请输入密码" class="sczc-ipt1 f-l" />
        <div style="clear:both;"></div>
      </li>
      <li>
        <p class="sczc-p1 f-l"><img src="../assets/images/sjsc-12-3.png" style="margin:0 7px 0 3px;">手机号</p>
        <input type="text" placeholder="请输入手机号" class="sczc-ipt2 f-l" />
        <a href="#"  class="sczc-a1 f-r">获取验证码</a>
        <div style="clear:both;"></div>
      </li>
      <li>
        <p class="sczc-p1 f-l"><img src="../assets/images/sjsc-12-4.png">验证码</p>
        <input type="text" placeholder="请输入验证码" class="sczc-ipt1 f-l" />
        <div style="clear:both;"></div>
      </li>
      <li>
        <p class="sczc-p1 f-l"><img src="../assets/images/sjsc-12-5.png">邀请码</p>
        <input type="text" placeholder="请输入邀请码" class="sczc-ipt1 f-l" />
        <div style="clear:both;"></div>
      </li>
    </ul>

    <button class="sczc-btn1" @click="reg">注册</button>

    <div class="sczc-ty">
      <label>
        <input type="checkbox"><a href="#">已阅读用户服务与协议</a>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      reg(){
        if(this.username != "" && this.password !=""){
          this.$http({
            method:"post",
            url:"http://localhost:3000/user",
            data:{
              act:"reg",
              username:this.username,
              password:this.password
            }
          }).then((res)=>{
            if(res.data.err == 0) {
              alert(res.data.msg);
              this.username="";
              this.password="";
              this.$router.push({path:"/login"})
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
    data(){
      return {
        username:"",
        password:""
      }
    }
  }
</script>

<style>
  body{background: #fff}
  .sjsc-title2{ position:relative; width:100%; height:35px; background:#F1F1F1; border-bottom:1px solid #D3D3D3; text-align:center;}
  .sjsc-title2 .sjsc-t2l{line-height:35px; font-size:16px; color:#333; font-weight:normal;}
  .sjsc-title2 .sjsc-t2r{ width:35px; height:35px; line-height:35px; text-align:center; font-size:19px; color:#333; font-family:"宋体"; position:absolute; top:0; left:0; font-weight:bold;}

  /*************我想要手机商城注册*********************/
  .sjsc-t2m{ display:block; position:absolute; right:5px; top:0; width:35px; height:35px; line-height:35px; text-align:center; font-size:14px; color:#4A4A4A;}



  .sczc-ul1{background: #fff}
  .sczc-ul1 li{ height:35px; line-height:35px; padding-left:5px; margin:0 5px; border-bottom:1px solid #EDEDED;}
  .sczc-ul1 li .sczc-p1{ width:85px; font-size:14px; color:#333;}
  .sczc-p1 img{ display:inline-block; height:20px; margin-right:5px; position:relative; top:2px;}
  .sczc-ul1 li .sczc-ipt1{ width:71%; height:35px; border:0; font-size:12px; color:#999;}
  .sczc-ul1 li .sczc-ipt2{ width:42%; height:35px; border:0;  font-size:12px; color:#999;}
  .sczc-ul1 li .sczc-a1{ width:85px; height:27px; line-height:27px; text-align:center; border-radius:3px; margin-top:4px; font-size:12px; color:#333; background:#EDEDED;}



  .sczc-btn1{ width:94%; height:30px; font-size:14px; color:#fff; border:0; display:block; margin:20px auto 0; background:#E64D5D; border-radius:5px;}

  .sczc-ty{ width:94%; margin:10px auto 0;}
  .sczc-ty input{ margin-right:5px; position:relative; top:2px;}
  .sczc-ty a{ font-size:12px; color:#333; text-decoration:underline;}

</style>