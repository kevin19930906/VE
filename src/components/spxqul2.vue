<template>
  <div class="spxq-info2">
    <ul class="spxq-ul2">
      <li :class="classNamea" @click="comName1">
        <a href="JavaScript:;">图文详情</a>
      </li>

      <li :class="classNameb" @click="comName2">
        <a href="JavaScript:;">往期募集</a>
      </li>

      <li :class="classNamec" @click="comName3">
        <a href="JavaScript:;">晒单分享</a>
      </li>
      <div style="clear:both;"></div>
    </ul>
    <transition
      enter-active-class="animated fadeIn"
    >
      <component :is="comName"></component>
    </transition>

  </div>
</template>

<script>
  import spxqbox1 from "./spxqbox1.vue"
  import spxqbox2 from "./spxqbox2.vue"
  import spxqbox3 from "./spxqbox3.vue"
  export default {
    data(){
      return {
        comName:"spxqbox1",
        classNamea:"current",
        classNameb:"",
        classNamec:""
      }
    },
    methods:{
      comName1(){
        this.comName='spxqbox1';
        this.classNamea="current";
        this.classNameb="";
        this.classNamec=""
      },
      comName2(){
        this.comName='spxqbox2'
        this.classNamea="";
        this.classNameb="current";
        this.classNamec=""
      },
      comName3(){
        this.comName='spxqbox3'
        this.classNamea="";
        this.classNameb="";
        this.classNamec="current"
      }
    },
    components:{
      spxqbox1,spxqbox2,spxqbox3
    }
  }
</script>

<style>
  .spxq-info2{ width:100%; margin-top:5px; margin-bottom:80px;}
  .spxq-ul2{border-bottom:1px solid #e6e6e6; background:#fff; margin-bottom:5px;}
  .spxq-ul2 li{ float:left; width:33%; text-align:center; height:30px; line-height:30px;}
  .spxq-ul2 li a{ font-size:13px; color:#666;}
  .spxq-ul2 .current{ border-bottom:1px solid #D12424;}
  .spxq-ul2 .current a{ color:#D12424;}
</style>