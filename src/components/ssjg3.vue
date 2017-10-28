<template>
  <div class="ssjg3">
    <div class="ssjg">
      <ul class="ssjg-tit1">
        <li><a href="JavaScript:;">商品分类</a></li>
        <li class="on"><a href="JavaScript:;">最新募集</a></li>
        <li><a href="JavaScript:;">募集成功</a></li>
        <li><a href="JavaScript:;">销量最高</a></li>
        <li><a href="JavaScript:;">募集英雄</a></li>
        <div style="clear:both;"></div>
      </ul>
      <ul class="ssjg-ul1">


        <router-link :to="'/detail/'+item.id" tag="li"
                     v-for="(item,index) in arr"
                     :key="item.id"
        >
          <div class="ssjg-tu">
            <a href="#"><img :src="item.src"></a>
          </div>
          <h3><a href="#">{{item.decs}}</a></h3>
          <dl class="ssjg-dl1">
            <dt>
              <p class="ssjg-p1">募集价<span>{{item.price | money}}</span></p>
              <p class="ssjg-p2">销售量<span>{{item.count}}</span></p>
            </dt>
            <dd @click="addCart(item.id)"><a href="#"><img src="../assets/images/sjsc-09.gif"></a></dd>
            <div style="clear:both;"></div>
          </dl>
        </router-link>



        <div style="clear:both;"></div>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        arr:""
      }
    },
    created(){
      this.$http({url:"http://localhost:3000/detail"}).then((res)=>{
        this.arr=res.data
      }).catch((res)=>{

      })
    },
    methods: {
      addCart(id) {
        this.$parent.addCart(id)
      }
    }
  }
</script>



<style>
  .ssjg-tit1{background:#f7f7f7; padding:0 10px;}
  .ssjg-tit1 li{  width:20%; text-align:center; float:left; height:30px; line-height:30px;}
  .ssjg-tit1 li span{ font-family:"宋体"; font-size:12px; margin-left:3px;}
  .ssjg-tit1 li a{ display:block; font-size:12px; color:#333;}
  .ssjg-tit1 .on a{ color:#E64D5D;}

  /*************我想要手机商城搜索结果*********************/
  .ssjg{ width:100%;padding-bottom: 50px;}
  .ssjg-tit{border-bottom:1px solid #E5E5E5; background:#f7f7f7; padding:0 10px;}
  .ssjg-tit li{  text-align:center; float:left; height:30px; line-height:30px; width:25%;}
  .ssjg-tit .tit-li1{  width:70px; text-align:center; float:left; height:30px; line-height:30px; position:relative;}
  .ssjg-tit .tit-li1 h3{ font-size:13px; color:#333;}
  .ssjg-tit .tit-li1 h3 span{ font-family:"宋体"; font-weight:normal; font-size:12px; margin-left:3px;}
  .ssjg-tit .tit-li1 a{ display:block; font-size:13px; color:#333;}
  .ssjg-tit .on a{ color:#E64D5D;}
  .ssjg-tit .bg{ background:url(../assets/images/sjsc-06.gif) no-repeat 50px center;}
  .tit-li1 .tit-ul1{ width:100%; border:1px solid #e5e5e5; border-bottom:0; background:#fff; position:absolute; top:30px; left:0;}
  .tit-ul1 li{ text-align:left; height:25px; border-bottom:1px solid #e5e5e5; line-height:25px; padding-left:10px;}
  .tit-ul1 li a{ font-size:12px; color:#666; display:block;}

  .ssjg-ul1{ background:#F7F7F7; padding:10px 2%;}
  .ssjg-ul1 li{ float:left; width:48%; border:1px solid #E5E5E5; background:#fff; margin-bottom:10px;}
  .ssjg-ul1 li:nth-child(2n){ float:right;}
  .ssjg-ul1 li .ssjg-tu{ height:105px; padding:5px 0; text-align:center;}
  .ssjg-tu img{ display:inline-block; height:100%;}
  .ssjg-ul1 li h3{ padding:0 5px; font-weight:normal;white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}
  .ssjg-ul1 li h3 a{ font-size:12px; color:#7F7F7F;}
  .ssjg-ul1 li .ssjg-dl1{ padding:0 5px;}
  .ssjg-dl1 dt{ float:left;}
  .ssjg-dl1 dt p{ font-size:12px; color:#A0A0A0;}
  .ssjg-p1 span{ color:#DB3751; margin-left:5px;}
  .ssjg-p2 span{ color:#707070; margin-left:5px;}
  .ssjg-dl1 dd{ float:right;}
  .ssjg-dl1 dd img{ display:inline-block; width:25px; margin-top:5px;}
</style>