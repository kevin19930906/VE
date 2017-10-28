<template>
  <div class="shoppingcart">
    <div class="sjsc-title2">
      <h3 class="sjsc-t2l">购物车</h3>
      <a href="javascript:;" @click="goBack" class="sjsc-t2r"><</a>
    </div>
    <ul class="gwc-ul1">
      <li v-for="(item,index) in objCart"
        :key="item.id"
      >
        <div class="hwc-tu f-l"><a href="#"><img :src="item.src"></a></div>
        <div class="gwc-md f-l">
          <h3><a href="#" v-html="item.decs"></a></h3>
          <p class="gwc-p1">募集价：<span>{{item.price | money}}</span></p>
          <p class="gwc-p1">数量：<span>{{getusers.cart[item.id]}}</span>台</p>
          <p class="gwc-p2">活动公告：活动期间赠送商品总额5%的资金。</p>
        </div>
        <a href="javascript:;" @click="delet(item.id,index)" class="gwc-del f-r"><img src="../assets/images/sjsc-10.gif"></a>
        <div style="clear:both;"></div>
      </li>

    </ul>
    <div class="gwc-ft">
      <p>共募集{{cptStr.sum}}件商品，总计：<span>{{cptStr.price | money}}</span></p>
      <button>提交</button>
      <div style="clear:both;"></div>
    </div>
  </div>
</template>

<style>
  .sjsc-title2{ position:relative; width:100%; height:35px; background:#F1F1F1; border-bottom:1px solid #D3D3D3; text-align:center;}
  .sjsc-title2 .sjsc-t2l{line-height:35px; font-size:16px; color:#333; font-weight:normal;}
  .sjsc-title2 .sjsc-t2r{ width:35px; height:35px; line-height:35px; text-align:center; font-size:19px; color:#333; font-family:"宋体"; position:absolute; top:0; left:0; font-weight:bold;}


  /*************我想要手机商城购物车*********************/
  .gwc-ul1{padding-bottom:80px;}
  .gwc-ul1 li{ padding:8px 5px; border-bottom:1px solid #eee; background:#fff; }
  .gwc-ul1 li .hwc-tu{ width:68px; height:68px; border:1px solid #EFEFEF; text-align:center; margin-right:5px;}
  .hwc-tu img{ display:inline-block; height:100%;}
  .gwc-ul1 li .gwc-md{ width:70%;}
  .gwc-md h3{ font-weight:normal;white-space:nowrap; text-overflow:ellipsis; overflow:hidden; line-height:18px;}
  .gwc-md h3 a{ font-size:12px; color:#4A4A4A;}
  .gwc-md .gwc-p1{font-size:12px; color:#4A4A4A; line-height:18px;}
  .gwc-p1 span{ color:#D12424;}
  .gwc-md .gwc-p2{ font-size:12px; color:#6F6F6F;white-space:nowrap; text-overflow:ellipsis; overflow:hidden; line-height:18px;}
  .gwc-ul1 li .gwc-del{ margin-top:25px;}
  .gwc-del img{ width:15px;}

  .gwc-ft{ width:100%; padding:8px 0; background:#E4E4E4; position:fixed; left:0; bottom:0;}
  .gwc-ft p{ float:left; line-height:30px; font-size:12px; color:#4A4A4A; margin-left:10px;}
  .gwc-ft p span{ color:#D12424;}
  .gwc-ft button{ display:block; width:55px; height:30px; background:#D12323; border:0; font-size:12px; color:#fff; float:right; border-radius:5px; margin-right:10px;}
</style>
<script>
  import {mapGetters} from "vuex"
  export default {
    data(){
      return {
        objCart:""
      }
    },
    computed:{
      ...mapGetters([
        "getusers"
      ]),
      cptStr(){
        let sum=0;
        let price=0;
        let x=0;
        for(var i in this.objCart){
          x=this.objCart[i].id;
          sum+=this.getusers.cart[x];
          price+=this.objCart[i].price
        }
        return {sum:sum,price:price}
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      delet(id,index){
        this.$http({
          url: "http://localhost:3000/delet",
          params: {
            username:this.getusers.username,
            id:id
          }
        }).then((res) => {
          this.$store.dispatch("objcart",res.data);
          this.objCart.splice(index,1);
        }).catch((res) => {
          console.log(res)
        })

      }
    },
    created(){
      this.$parent.autoLoad()
      if(this.getusers.cart){
        this.$http({
          url: "http://localhost:3000/cart",
          params: {
            cart:this.getusers.cart
          }
        }).then((res) => {
          this.objCart=res.data;
        }).catch((res) => {
          console.log(res)
        })
      }

    }
  }
</script>
