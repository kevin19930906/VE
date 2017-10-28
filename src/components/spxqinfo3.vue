<template>
  <div class="spxq-info3">
    <button class="if3-btnn if3-btn1 f-l">我想要</button>
    <button class="if3-btnn if3-btn2 f-l" @click="addCart($route.params.id)">加入购物车</button>
    <router-link to="/shoppingcart" href="#" class="if3-aa f-l"><img src="../assets/images/sjsc-17-2.png" /></router-link>
  </div>
</template>

<script>
  export default {
    methods: {
      addCart(id) {
        this.$parent.$parent.addCart(id)
      }
    }
  }
</script>

<style>
  .spxq-info3{ width:100%; height:40px; background-color:rgba(233,233,233,0.8); position:fixed; left:0; bottom:0;}
  .spxq-info3 .if3-btnn{ width:38%; height:30px; margin-left:2%; font-size:14px;border-radius:5px; margin-top:5px;}
  .spxq-info3 .if3-btn1{ color:#fff; border:0; background:#D12323;}
  .spxq-info3 .if3-btn2{ border:1px solid #D12323; background:#FBFBFB; color:#D12323;}
  .spxq-info3 .if3-aa{ width:18%; margin-left:2%; text-align:center;}
  .if3-aa img{ display:inline-block; height:25px; margin-top:8px;}
</style>