<template>
  <div class="scmj">
    <div class="sjsc-title1">
      <h3 class="sjsc-t1l f-l"><a href="JavaScript:;" @click="goBack"><span><</span>商品募集</a></h3>
      <a href="#" class="sjsc-t1r f-r">分享</a>
      <div style="clear:both;"></div>
    </div>
    <div class="banner11" id="ban11">
      <ul class="sy-ul1">
        <swiper :options="swiperOption"  ref="mySwiper">
          <!-- 这部分放你要渲染的那些内容 -->
          <swiper-slide
            v-for="(item,index) in arr"
            :key="index"
          >
            <a href="javascript:;">
              <img :src="item.src">
            </a>
          </swiper-slide>
          <!-- 这是轮播的小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </ul>

    </div>
    <div class="muji-info1">
      <div class="muji-bg">
        <div class="muji-cs"></div>
      </div>
      <div class="muji-if1">
        <p class="f-l">已完成：<span>65%</span></p>
        <p class="f-r">还差：<span>35%</span></p>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="muji-info2">
      <p class="mj-p1">来自小伙伴的募集订单</p>
      <div class="mj-if2">
        <div class="mj-tu1 f-l"><a href="#"><img src="../assets/images/sjsc-11-1.jpg"></a></div>
        <div class="mj-wz f-l">
          <h3 class="mj-h31"><a href="#">The new Macbook</a></h3>
          <p class="mj-p2">目前有888人付款</p>
          <p class="mj-p2">募集结束时间倒计时2天</p>
          <p class="mj-p3">￥200.00</p>
        </div>
        <a href="#" class="mj-a1 f-r">查看商品</a>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="ddxx-info3">
      <h3 class="ddxx-if3-h31">帮你付款的小伙伴</h3>
      <div class="ddxx-tab22 ddxx-tab21">
        <table class="ddxx-tab2">
          <tr>
            <th align="center" valign="middle" scope="col">姓名</th>
            <th align="center" valign="middle" scope="col">手机号</th>
            <th align="center" valign="middle" scope="col">金额</th>
            <th align="center" valign="middle" scope="col">支付日期</th>
          </tr>
          <tr>
            <td align="center" valign="middle">赵欣*</td>
            <td align="center" valign="middle">153****6653</td>
            <td align="center" valign="middle">￥100.00</td>
            <td align="center" valign="middle">2015-12-01</td>
          </tr>
          <tr>
            <td align="center" valign="middle">赵欣*</td>
            <td align="center" valign="middle">153****6653</td>
            <td align="center" valign="middle">￥100.00</td>
            <td align="center" valign="middle">2015-12-01</td>
          </tr>
          <tr>
            <td align="center" valign="middle">赵欣*</td>
            <td align="center" valign="middle">153****6653</td>
            <td align="center" valign="middle">￥100.00</td>
            <td align="center" valign="middle">2015-12-01</td>
          </tr>
          <tr>
            <td align="center" valign="middle">欣*欣</td>
            <td align="center" valign="middle">188****6733</td>
            <td align="center" valign="middle">￥100.00</td>
            <td align="center" valign="middle">2013-18-51</td>
          </tr>
          <tr>
            <td align="center" valign="middle">赵*欣</td>
            <td align="center" valign="middle">135****6563</td>
            <td align="center" valign="middle">￥100.00</td>
            <td align="center" valign="middle">2015-12-01</td>
          </tr>
          <tr>
            <td align="center" valign="middle">赵欣*</td>
            <td align="center" valign="middle">153****6653</td>
            <td align="center" valign="middle">￥100.00</td>
            <td align="center" valign="middle">2015-12-01</td>
          </tr>
        </table>
      </div>
      <a href="javascript:;" class="ddxx-zs">展开</a>
    </div>
    <div class="muji-info3">
      <p class="mj-if3p1">付款人信息</p>
      <ul class="mj-if3ul1">
        <li>
          <p>我的姓名</p>
          <input type="text" placeholder="请输入您的姓名" />
          <div style="clear:both;"></div>
        </li>
        <li>
          <p>手机号码</p>
          <input type="text" placeholder="请输入您的手机号" />
          <div style="clear:both;"></div>
        </li>
        <li>
          <p>给他留言</p>
          <input type="text" placeholder="刷我的卡，包你满足"></input>
          <div style="clear:both;"></div>
        </li>
      </ul>
      <div class="mj-if3box">
        <p class="mj-p4 f-l">付款金额</p>
        <p class="mj-p5 f-l">￥200.00</p>
        <a href="#" class="mj-a2 f-r">修改</a>
        <div style="clear:both;"></div>
      </div>
    </div>
    <button class="muji-btn muji-btn1">微信安全支付</button>
    <button class="muji-btn muji-btn2">支付宝支付</button>
    <button class="muji-btn muji-btn3">我也要去玩</button>
    <button class="muji-btn muji-btn3 muji-btn4">找小伙伴帮TA付款</button>
  </div>
</template>


<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data(){
      return {
        arr:"",
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          pagination: '.swiper-pagination',
          slidesPerView:'auto',
          centeredSlides:true,
          paginationClickable: true,
          spaceBetween: 30,
          autoplay:2000,
          autoplayDisableOnInteraction:false,
        }
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    created(){
      this.$http({url:"http://localhost:3000/home"}).then((res)=>{
        this.arr=res.data
      }).catch((res)=>{
        console.log(res)
      })
    },
    mounted(){
      this.swiperOption.loop=true;
    }
  }
</script>

<style scoped>
  .sjsc-title1{ width:100%; height:35px; background:#F1F1F1; border-bottom:1px solid #D3D3D3;}
  .sjsc-title1 .sjsc-t1l{ height:35px; line-height:35px; font-weight:normal; padding:0 5px;}
  .sjsc-t1l a{ display:block; font-size:16px; color:#333;}
  .sjsc-t1l span{ margin-right:5px; font-family:"宋体"; font-weight:bold;}
  .sjsc-title1 .sjsc-t1r{ display:block; width:35px; text-align:center; font-size:14px; color:#333; height:35px; line-height:35px; margin-right:3px;}

  /*************我想要手机商城募集信息*********************/
  .banner11{ width:100%; height:180px; border-bottom:1px solid #E6E6E6; position:relative; overflow:hidden;}
  .sy-ul1 .swiper-container{ width:100%; height:180px;}
  .sy-ul1 div.swiper-container div a img{ width:100%; height:100%;}



  .muji-info1{ width:95%; margin:10px auto 5px;}
  .muji-info1 .muji-bg{ width:100%; height:15px; background:#E4E4E4; border-radius:15px; overflow:hidden; position:relative;}
  .muji-bg .muji-cs{ width:65%; height:15px; background:#FFAF00; position:absolute; top:0; left:0;}
  .muji-info1 .muji-if1{}
  .muji-if1 p{ line-height:25px; font-size:13px; color:#4A4A4A;}
  .muji-if1 p span{ color:#E51D1D;}

  .muji-info2{ padding:0 5px 5px; border:1px solid #DBDBDB; background:#fff;}
  .muji-info2 .mj-p1{ padding:0 5px; font-size:13px; color:#4A4A4A; line-height:25px; border-bottom:1px solid #DBDBDB;}

  .muji-info2 .mj-if2{ margin-top:5px;}
  .muji-info2 .mj-tu1{ width:75px; height:75px; border:1px solid #DFDFDF; margin-right:5px;}
  .mj-tu1 img{ display:block; width:100%; height:100%;}
  .muji-info2 .mj-wz{ width:53%;}
  .mj-wz .mj-h31{ font-weight:normal;white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}
  .mj-h31 a{ font-size:12px; color:#4A4A4A;}
  .mj-wz .mj-p2{ font-size:12px; color:#B4B4B4;white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}
  .mj-wz .mj-p3{ font-size:12px; color:#DD2828;}
  .muji-info2 .mj-a1{ display:block; padding:1px 6px; margin-top:25px; border:1px solid #F2F2F2;}

  .muji-info3{ border:1px solid #DBDBDB; padding:5px 8px; margin-top:5px;}
  .muji-info3 .mj-if3p1{ height:25px; line-height:25px; color:##6A6A6A; font-size:13px;}
  .muji-info3 .mj-if3ul1{ border:1px solid #DBDBDB; background:#fff;}
  .mj-if3ul1 li{ line-height:30px; border-bottom:1px solid #DBDBDB;}
  .mj-if3ul1 li:nth-of-type(3){ border-bottom:0;}
  .mj-if3ul1 li p{ float:left; margin-right:10px; text-align:right; width:70px; font-size:13px; color:#6A6A6A;}
  .mj-if3ul1 li input{ float:left; width:72%; height:30px; border:0; font-size:13px; color:#C0C0C0;}


  .muji-info3 .mj-if3box{ height:30px; border:1px solid #DBDBDB; background:#fff; margin-top:5px;}
  .mj-if3box .mj-p4{ font-size:13px; color:#6A6A6A; width:70px; margin-right:10px; text-align:right; line-height:30px;}
  .mj-if3box .mj-p5{line-height:30px; font-size:13px; color:#FF8400;}
  .mj-if3box .mj-a2{ display:block; width:30px; text-align:center; margin:5px 5px 0 0; border-radius:3px; border:1px solid #ECECEC; background:#FEFEFE;}

  .muji-btn{ display:block; border-radius:5px; width:95%; height:30px; border:0; font-size:14px; color:#fff; margin:10px auto 0;}
  .muji-btn1{ background:#04BC02;}
  .muji-btn2{ background:#32A3F3;}
  .muji-btn3{ background:#fff; border:1px solid #ccc; color:#666;}
  .muji-btn4{ margin-bottom:81px;}

  .ddxx-info3{ padding:0 10px; background:#fff; border:1px solid #D6D6D6; margin-top:5px;}
  .ddxx-info3 .ddxx-if3-h31{ font-size:14px; color:#4A4A4A; text-align:center; font-weight:normal; line-height:30px; text-align:center;}
  .ddxx-info3 .ddxx-tab2{ width:100%;}
  .ddxx-tab2 tr{ height:25px; border-bottom:1px solid #D6D6D6;}
  .ddxx-tab2 th{ width:25%; font-weight:normal;border:1px solid #D6D6D6; background:#F7F7F7;}
  .ddxx-tab2 td{ width:25%; font-size:12px; color:#4A4A4A;}
  .ddxx-info3 .ddxx-tab21{ width:100%; height:110px; overflow:hidden;}


  .ddxx-zs{ display:block; width:50px; height:22px; line-height:22px; text-align:center; margin:5px auto; border:1px solid #ddd; border-radius:3px;}
  .ddxx-zs span{ font-family:"宋体"; margin-left:3px;}
</style>