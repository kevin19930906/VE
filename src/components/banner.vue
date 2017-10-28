<template>
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
    components: {
      swiper,
      swiperSlide
    },
    created(){
      this.$http({
        url:"http://localhost:3000/home"
      }).then((res)=>{
        this.arr=res.data
      }).catch((res)=>{
        console.log(res)
      })
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted(){
      this.swiperOption.loop=true;
    }
  }
</script>
<style scoped>
  .banner1{ width:100%; height:140px; border-bottom:1px solid #E6E6E6; position:relative; overflow:hidden;margin-top:15px}
  .sy-ul .swiper-container{ height:140px;}
  img{ width:100%; height:100%;}
</style>