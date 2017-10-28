<template>
  <div class="detail-top">
    <div class="sjsc-title1">
      <h3 class="sjsc-t1l f-l"><a href="JavaScript:;" @click="goBack"><span><</span>商品详情</a></h3>
      <a href="#" class="sjsc-t1r f-r"><img src="../assets/images/sjsc20.gif"></a>
      <div style="clear:both;"></div>
    </div>
    <div class="banner1" id="ban1">
      <ul class="sy-ul">
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
    <div class="spxq-info1">
      <ul class="spxq-ul1">
        <li>
          <h3><a href="#" v-html="arr2.decs"></span></a></h3>
          <div>
            <p class="spxq-p1 f-l">价格：<span>{{arr2.price | money}}</span></p>
            <p class="spxq-p2 f-r">销量：<span>{{arr2.count}}</span>件</p>
            <div style="clear:both;"></div>
          </div>
        </li>
      </ul>
      <div class="spxq-if1">
        <p>活动公告：活动期间赠送商品总额5%的资金</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data(){
      return {
        arr:"",
        arr2:"",
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
      this.$http({url:"http://localhost:3000/detailbanner"}).then((res)=>{
        this.arr=res.data
      }).catch((res)=>{
        console.log(res)
      });
      this.$http({
        url:"http://localhost:3000/detail2",
        params: {
          id:this.$route.params.id
        }
      }).then((res)=>{
        this.arr2=res.data[0];
      }).catch((res)=>{
        console.log(res)
      });
    },
    mounted(){
      this.swiperOption.loop=true;
    }
  }
</script>

<style>
  .sjsc-t1r img{ display:inline-block; height:22px; margin-top:7px;}
  .sjsc-title1{ width:100%; height:35px; background:#F1F1F1; border-bottom:1px solid #D3D3D3;}
  .sjsc-title1 .sjsc-t1l{ height:35px; line-height:35px; font-weight:normal; padding:0 5px;}
  .sjsc-t1l a{ display:block; font-size:16px; color:#333;}
  .sjsc-t1l span{ margin-right:5px; font-family:"宋体"; font-weight:bold;}
  .sjsc-title1 .sjsc-t1r{ display:block; width:35px; text-align:center; font-size:14px; color:#333; height:35px; line-height:35px; margin-right:3px;}

  /*************我想要手机商城首页*********************/
  .banner1{ width:100%; height:140px; border-bottom:1px solid #E6E6E6; position:relative; overflow:hidden;}
  .sy-ul .swiper-container{ height:140px;}
  .sy-ul div.swiper-container div a img{ width:100%; height:100%;}



  /*我想要手机商品详情*/
  .spxq-info1{padding:10px; background:#fff;}
  .spxq-ul1{}
  .spxq-ul1 li{}
  .spxq-ul1 li h3{ font-weight:normal; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}
  .spxq-ul1 li h3 a{ font-size:13px; color:#666;}
  .spxq-ul1 li h3 span{ color:#D22424;}
  .spxq-ul1 li p{ font-size:12px; color:#A7A6A6;}
  .spxq-ul1 li .spxq-p1{}
  .spxq-p1 span{ color:#D22424;}
  .spxq-ul1 li .spxq-p2{}
  .spxq-p2 span{ color:#666;}
  .spxq-info1 .spxq-if1{ width:100%; padding:3px 0; margin-top:5px; background:#F3F3F3; text-align:center;}
  .spxq-if1 p{ font-size:12px; color:#979797;}

</style>