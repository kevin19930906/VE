<template>
  <div class="sy-qie">
    <ul class="sy-qieul sy-ul3">
      <router-link :to="'/detail/'+item.id" tag="li"
                   v-for="for(item,index) in arr"
                   :key="index"
      >
        <div class="sy-tu1">
          <a href="#"><img :src="item.src"></a>
        </div>
        <p>募集价<span>{{item.price | money}}</span></p>
        <p>进度<span>35%</span></p>
        <div class="sy-cs">
          <div class="sy-hs"></div>
        </div>
      </router-link>
      <div style="clear:both;"></div>
    </ul>
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
      this.$http({url:"http://localhost:3000/shop2"}).then((res)=>{
        this.arr=res.data
      }).catch((res)=>{

      })
    },
  }
</script>
